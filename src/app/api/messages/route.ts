import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { Message } from "@/models/Message";
import { sendContactNotification } from "@/lib/mail";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    try {
      await connectToDatabase();
      await Message.create({ name, email, subject, message });
    } catch {
      return NextResponse.json(
        {
          error:
            "Database connection not configured. Please set MONGODB_URI in .env.local",
        },
        { status: 500 }
      );
    }

    try {
      await sendContactNotification({ name, email, subject, message });
    } catch (err) {
      console.warn("Email notification failed (SMTP may not be configured):", err);
    }

    return NextResponse.json(
      {
        success: true,
        message: "Message sent successfully",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Failed to save message:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}

export default function SectionDivider() {
  return (
    <div className="relative -mt-1">
      <svg
        viewBox="0 0 1440 80"
        fill="none"
        className="w-full h-[50px] sm:h-[80px]"
        preserveAspectRatio="none"
      >
        <path
          d="M0 40 Q 360 0 720 40 T 1440 40 V 80 H 0 Z"
          className="fill-white dark:fill-slate-950"
        />
      </svg>
    </div>
  );
}

import {
  LOGO_LEAF_LEFT,
  LOGO_LEAF_RIGHT,
  LOGO_PATH,
  LOGO_VIEWBOX,
} from "@/lib/logo-path";

type LogoProps = {
  className?: string;
  variant?: "light" | "dark";
  showWordmark?: boolean;
  markClassName?: string;
};

/**
 * Balme Ayas official mark — brand vector with green leaf fills.
 */
export function Logo({
  className = "",
  variant = "dark",
  showWordmark = true,
  markClassName = "h-14 w-auto md:h-16",
}: LogoProps) {
  const ink = variant === "light" ? "#ffffff" : "#2d2d2d";
  const leaf = "#8dba51";

  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <LogoMark
        ink={ink}
        leaf={leaf}
        className={markClassName}
        labelled={!showWordmark}
      />
      {showWordmark ? (
        <span
          className={`font-display text-xl font-bold leading-none tracking-[0.06em] uppercase md:text-2xl ${
            variant === "light" ? "text-white" : "text-ink"
          }`}
        >
          Balme Ayas
        </span>
      ) : null}
    </span>
  );
}

export function LogoMark({
  ink = "#2d2d2d",
  leaf = "#8dba51",
  className = "h-14 w-auto md:h-16",
  labelled = false,
}: {
  ink?: string;
  leaf?: string;
  className?: string;
  labelled?: boolean;
}) {
  return (
    <svg
      viewBox={LOGO_VIEWBOX}
      className={`shrink-0 ${className}`}
      aria-hidden={labelled ? undefined : true}
      role={labelled ? "img" : undefined}
      aria-label={labelled ? "Balme Ayas" : undefined}
    >
      <path fill={ink} d={LOGO_PATH} />
      <path fill={leaf} d={LOGO_LEAF_RIGHT} />
      <path fill={leaf} d={LOGO_LEAF_LEFT} />
    </svg>
  );
}

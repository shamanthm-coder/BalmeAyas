import { ImageResponse } from "next/og";
import {
  LOGO_LEAF_LEFT,
  LOGO_LEAF_RIGHT,
  LOGO_PATH,
  LOGO_VIEWBOX,
} from "@/lib/logo-path";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

/** Browser tab icon — Balme Ayas official mark. */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0c1520",
        }}
      >
        <svg width="52" height="52" viewBox={LOGO_VIEWBOX}>
          <path fill="#ffffff" d={LOGO_PATH} />
          <path fill="#8dba51" d={LOGO_LEAF_RIGHT} />
          <path fill="#8dba51" d={LOGO_LEAF_LEFT} />
        </svg>
      </div>
    ),
    { ...size },
  );
}

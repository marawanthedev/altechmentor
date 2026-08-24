import { ImageResponse } from "next/og";
import { SITE_NAME } from "@/config/site";

export const alt = `${SITE_NAME} — 1:1 software engineering mentorship, coaching, and interview prep`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#06080d",
          color: "#fafafa",
          padding: "72px",
        }}
      >
        <div
          style={{
            fontSize: 22,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#2aa7a1",
          }}
        >
          {SITE_NAME}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 64, lineHeight: 1.08, maxWidth: 920, fontWeight: 700 }}>
            1:1 software engineering mentorship.
          </div>
          <div style={{ fontSize: 26, color: "#a1a1aa", maxWidth: 720 }}>
            Junior to mid, mid to senior, technical coaching, and interview prep with Marwan Mostafa.
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}

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
          background: "#eceef1",
          color: "#14304f",
          padding: "72px",
        }}
      >
        <div
          style={{
            fontSize: 22,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#8a6a24",
          }}
        >
          {SITE_NAME}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 64, lineHeight: 1.08, maxWidth: 920, fontWeight: 700 }}>
            1:1 software engineering mentorship.
          </div>
          <div style={{ fontSize: 26, color: "#5d6b7c", maxWidth: 720 }}>
            Junior to mid, mid to senior, technical coaching, and interview prep with Marwan Mostafa.
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}

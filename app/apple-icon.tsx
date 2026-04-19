import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    <div
      style={{
        background: "linear-gradient(135deg, #1B8EF0 0%, #00C9A7 100%)",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 4,
      }}
    >
      {/* Large R lettermark */}
      <span
        style={{
          color: "white",
          fontSize: 108,
          fontWeight: 900,
          fontFamily: "system-ui, -apple-system, sans-serif",
          lineHeight: 1,
          letterSpacing: "-4px",
        }}
      >
        R
      </span>
      {/* Wordmark below */}
      <span
        style={{
          color: "rgba(255,255,255,0.80)",
          fontSize: 15,
          fontWeight: 700,
          fontFamily: "system-ui, -apple-system, sans-serif",
          letterSpacing: 4,
        }}
      >
        REBOOT
      </span>
    </div>,
    { ...size }
  );
}

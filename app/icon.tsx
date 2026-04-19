import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        background: "linear-gradient(135deg, #1B8EF0, #00C9A7)",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 7,
      }}
    >
      <span
        style={{
          color: "white",
          fontSize: 22,
          fontWeight: 900,
          fontFamily: "system-ui, -apple-system, sans-serif",
          lineHeight: 1,
          letterSpacing: "-1px",
        }}
      >
        R
      </span>
    </div>,
    { ...size }
  );
}

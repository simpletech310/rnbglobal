import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const runtime = "edge";
export const alt = `${site.name} - ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background:
            "linear-gradient(135deg, #06090F 0%, #0B0F17 55%, #141923 100%)",
          color: "#FAF8F4",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "12px",
              background: "#D89224",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#0B0F17",
              fontSize: "28px",
              fontWeight: 700,
              letterSpacing: "-0.04em",
            }}
          >
            R&B
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              lineHeight: 1.15,
            }}
          >
            <div style={{ fontSize: "26px", fontWeight: 700, letterSpacing: "-0.01em" }}>
              {site.shortName}
            </div>
            <div
              style={{
                fontSize: "14px",
                textTransform: "uppercase",
                letterSpacing: "0.22em",
                color: "#B8AE99",
                marginTop: "6px",
              }}
            >
              Security · Est. {site.founded}
            </div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: "84px",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              lineHeight: 1.02,
              color: "#FAF8F4",
            }}
          >
            Protection,
          </div>
          <div
            style={{
              fontSize: "84px",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              lineHeight: 1.02,
              color: "#E8AC44",
            }}
          >
            held to a standard.
          </div>
          <div
            style={{
              marginTop: "28px",
              fontSize: "26px",
              color: "#D7CFBE",
              maxWidth: "880px",
              lineHeight: 1.35,
            }}
          >
            {site.yearsExperience}+ years guarding Southern California, plus BSIS-aligned guard training.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: "16px",
            textTransform: "uppercase",
            letterSpacing: "0.18em",
            color: "#9AA3B3",
          }}
        >
          <span>{site.url.replace(/^https?:\/\//, "")}</span>
          <span>CA PPO · BSIS Aligned · 24/7 Dispatch</span>
        </div>
      </div>
    ),
    { ...size },
  );
}

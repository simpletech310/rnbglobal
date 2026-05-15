import { ImageResponse } from "next/og";
import { getService, services } from "@/content/services";
import { site } from "@/content/site";

export const alt = "R&B Global Security service";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export async function generateImageMetadata({ params }: { params: { slug: string } }) {
  const s = getService(params.slug);
  return [{ id: params.slug, alt: s ? `${s.name} | ${site.shortName}` : alt, size, contentType }];
}

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export default async function Image({ params }: { params: { slug: string } }) {
  const s = getService(params.slug);
  const title = s?.name ?? "Security Services";
  const short = s?.short ?? site.tagline;
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
        <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "10px",
              background: "#D89224",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#0B0F17",
              fontSize: "22px",
              fontWeight: 700,
            }}
          >
            R&B
          </div>
          <div
            style={{
              fontSize: "14px",
              textTransform: "uppercase",
              letterSpacing: "0.22em",
              color: "#B8AE99",
            }}
          >
            Service · {site.shortName}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: "26px",
              textTransform: "uppercase",
              letterSpacing: "0.18em",
              color: "#E8AC44",
            }}
          >
            Security Service
          </div>
          <div
            style={{
              marginTop: "18px",
              fontSize: "74px",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              lineHeight: 1.04,
              color: "#FAF8F4",
              maxWidth: "1000px",
            }}
          >
            {title}
          </div>
          <div
            style={{
              marginTop: "22px",
              fontSize: "26px",
              color: "#D7CFBE",
              lineHeight: 1.35,
              maxWidth: "920px",
            }}
          >
            {short}
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
          <span>CA PPO · Licensed & Insured</span>
        </div>
      </div>
    ),
    { ...size },
  );
}

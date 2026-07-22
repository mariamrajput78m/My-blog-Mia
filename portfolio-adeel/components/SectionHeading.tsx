import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left"
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "text-center mx-auto max-w-2xl" : ""}>
      <Reveal direction="up">
        <span className="eyebrow font-body font-medium">{eyebrow}</span>
      </Reveal>
      <Reveal direction="up" delay={0.1}>
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium mt-3 mb-4 text-white [html.light_&]:text-[#0b0518]">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal direction="up" delay={0.2}>
          <p className="text-muted text-base md:text-lg leading-relaxed">{description}</p>
        </Reveal>
      )}
    </div>
  );
}

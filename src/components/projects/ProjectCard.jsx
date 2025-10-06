import { useState } from "react";
import { useTheme } from "../../theme";

const ProjectCard = ({ title, description, image, visitHref = "#" }) => {
  const { theme } = useTheme();
  const [featured, setFeatured] = useState(false);
  const isDark = theme === "dark";

  return (
    <a href={visitHref} target="_blank" rel="noopener noreferrer">
    <article
      className={`group relative flex min-h-[226px] flex-col justify-end overflow-hidden rounded-2xl border p-7 transition duration-300 hover:translate-y-[-4px]  ${
        isDark
          ? "border-[rgba(162,180,193,0.1)] bg-gradient-to-br from-[#172431] to-[#0b1a24] shadow-project hover:shadow-project-hover text-white"
          : "border-[rgba(0,0,0,0.08)] bg-white shadow-[0_20px_40px_rgba(196,196,196,0.35)] hover:shadow-[0_24px_50px_rgba(196,196,196,0.45)]"
      }`}
      onMouseEnter={() => setFeatured(true)}
      onMouseLeave={() => setFeatured(false)}
    >
      <div className="absolute inset-0 z-20">
        <img
          src={image}
          alt=""
          className={`h-full w-full object-cover ${
            isDark ? "opacity-25" : "opacity-40"
          }`}
          loading="lazy"
        />
      </div>

        <div
          className={`absolute inset-0 -z-10 bg-gradient-to-t transition-opacity duration-300 ${
            isDark
              ? "from-[#0b1a24] via-[#0b1a24cc] to-transparent"
              : "from-[#ffffff] via-[#ffffffd9] to-transparent"
          } ${featured ? "opacity-100" : "opacity-95"}`}
        ></div>

      <div className="relative space-y-4">
        <h3
          className={`text-xl font-semibold ${
            isDark
              ? featured
                ? "text-white"
                : "text-text-main"
              : "text-black"
          }`}
        >
          {title}
        </h3>
        <p
          className={`max-w-[20ch] text-sm leading-relaxed ${
            featured
              ? isDark
                ? "text-text-white"
                : "text-[rgba(36,36,36,0.88)]"
              : isDark
              ? "text-[rgba(241,242,244,0.75)]"
              : "text-black"
          }`}
        >
          {description}
        </p>

        {featured ? (
          <div className="flex items-center gap-3 absolute bottom-0 right-0">
            <button
              type="button"
              aria-label="Open project info"
              className={`flex h-10 w-10 items-center justify-center rounded-full border transition duration-300 hover:-translate-y-0 ${
                isDark
                  ? "border-[rgba(33,33,33,0.2)] bg-[rgba(255,255,255,0.82)] text-[#1f1f1f] hover:shadow-[0_12px_20px_rgba(0,0,0,0.2)]"
                  : "border-[rgba(0,0,0,0.05)] bg-white text-[#333333] shadow-[0_8px_16px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_24px_rgba(0,0,0,0.08)]"
              }`}
            >
              <svg
                viewBox="0 0 40 40"
                aria-hidden="true"
                className="h-6 w-6 fill-current"
              >
                <path
                  d="M20 9a11 11 0 1 0 11 11A11 11 0 0 0 20 9Zm0 18.14A7.14 7.14 0 1 1 27.14 20 7.15 7.15 0 0 1 20 27.14Z"
                  fillRule="evenodd"
                />
                <path d="m20 15 5 5-5 5-1.41-1.41L21.17 21H15v-2h6.17l-2.58-2.59L20 15Z" />
              </svg>
            </button>
          </div>
        ) : null}
      </div>
    </article>
    </a>
  );
};

export default ProjectCard;

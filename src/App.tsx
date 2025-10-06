import React from "react";
import { useMemo } from "react";
import { useTheme } from "./theme.tsx";
import Tabs, { type tabs } from "./components/tabs/index.tsx";
import { FaDownload, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const socialLinks = [
  { name: "GitHub", href: "https://github.com/logicalOgbonna", icon: "github" },
  { name: "Twitter", href: "https://twitter.com/logicalOgbonna", icon: "twitter" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/arinze-ogbonna/", icon: "linkedin" },
];

const iconMap = {
  github: (className = "") => <FaGithub className={className} />,
  twitter: (className = "") => (
    <FaTwitter className={className} />
  ),
  linkedin: (className = "") => <FaLinkedin className={className} />,
};

const profileImage = "/assets/profile.jpg";

const App = () => {
  const { isDark, toggleTheme } = useTheme();

  const themeColors = useMemo(
    () =>
      isDark
        ? {
            pageBg: "bg-page text-text-main",
            containerBg: "bg-[rgba(12,21,29,0.75)] shadow-elevated",
            toggleBg: "bg-[#172431]",
            toggleRing: "border-text-muted",
            role: "text-text-secondary",
            social: "text-text-secondary hover:bg-[rgba(255,224,113,0.12)]",
            statsValue: "text-text-secondary",
            statsLabel: "text-text-secondary",
            secondaryBtn:
              "border-outline bg-[#13222f] text-text-secondary hover:border-primary hover:text-primary",
            tabsWrapper: "border border-[#0f2638] bg-card",
            tabsTrack: "border border-[rgba(62,100,131,0.6)] bg-card-accent",
            chipActive:
              "border border-[rgba(62,100,131,0.75)] bg-page text-text-secondary",
            chipInactive: "border border-transparent text-text-secondary/80",
            footer: "text-text-secondary",
          }
        : {
            pageBg: "bg-[#f2f4f6] text-[#212529]",
            containerBg: "bg-white shadow-[0_40px_80px_rgba(196,196,196,0.35)]",
            toggleBg:
              "bg-white text-[#56606b] shadow-[0_12px_24px_rgba(0,0,0,0.06)]",
            toggleRing: "border-[#d0d6dc]",
            role: "text-[#6e7379]",
            social: "text-[#707982] hover:bg-[rgba(255,224,113,0.25)]",
            statsValue: "text-[#41474d]",
            statsLabel: "text-[#7b848c]",
            secondaryBtn:
              "border-[#d8dde3] bg-white text-[#4f555c] hover:border-primary hover:text-[#2d2d2d] hover:bg-[#fff6c7]",
            tabsWrapper: "border border-[#e2e6eb] bg-white",
            tabsTrack: "border border-[#edf0f4] bg-[#f4f6f8]",
            chipActive: "border border-transparent bg-white text-[#2d2d2d]",
            chipInactive: "border border-transparent text-[#7b848c]",
            footer: "text-[#7b848c]",
          },
    [isDark]
  );

  return (
    <div
      className={`min-h-screen px-4 pb-16 pt-10 transition-colors duration-500 ${themeColors.pageBg}`}
    >
      <main
        className={`relative mx-auto w-full max-w-[1100px] p-8 transition-colors duration-500 sm:p-12 md:p-16`}
      >
        <button
          type="button"
          aria-label="Toggle theme"
          onClick={toggleTheme}
          className={`mx-auto flex h-10 w-10 items-center justify-center rounded-full transition duration-300 hover:-translate-y-1 sm:h-10 sm:w-10 ${themeColors.toggleBg}`}
        >
          <span
            aria-hidden="true"
            className={`block h-6 w-6 rounded-full border-4 transition-colors duration-500 ${themeColors.toggleRing}`}
            style={{
              boxShadow: isDark
                ? "inset 8px -6px 0 0 rgba(163,171,178,1)"
                : "inset 6px -5px 0 0 rgba(255,224,113,0.85)",
            }}
          ></span>
        </button>

        <header className="mt-10 flex flex-col items-center gap-3 md:mt-0 md:flex-row md:items-center md:gap-8 mx-auto justify-center">
          <div className="relative h-[195px] w-[195px]">
            <span className="absolute inset-0 rounded-full border-4 border-primary opacity-95"></span>
            <img
              src={profileImage}
              alt="Portrait of Ogbonna Arinze"
              className="absolute left-3 top-3 h-[175px] w-[175px] rounded-full border-[6px] border-page object-cover"
            />
          </div>

          <div className="text-center md:text-left flex flex-col gap-2">
            <h1
              className={`text-4xl font-semibold tracking-wide transition-colors duration-500 sm:text-5xl ${
                isDark ? "text-text-main" : "text-[#1f1f1f]"
              }`}
            >
              Ogbonna Arinze
            </h1>
            <p
              className={`text-lg transition-colors duration-500 ${themeColors.role}`}
            >
              Software Engineer
            </p>

            <nav
              aria-label="Social media"
              className="flex justify-center gap-6 md:justify-start"
            >
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex h-9 w-9 items-center justify-center rounded-xl transition duration-300 hover:-translate-y-1 ${themeColors.social}`}
                >
                  {iconMap[social.icon]('h-7 w-7')}
                </a>
              ))}
            </nav>
          </div>
        </header>

        <section className="mt-14 flex flex-col items-center gap-6 md:flex-row mx-auto justify-center">
          <a
            href="/cv/Software Engineer Resume.pdf"
            download
            className="inline-flex items-center justify-center rounded-xl bg-gradient-to-tr from-primary to-[#ffc940] px-10 py-4 text-sm font-semibold uppercase tracking-wide text-[#3d3d3d] shadow-[0_18px_40px_rgba(255,224,113,0.25)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_45px_rgba(255,224,113,0.35)]"
          >
            <FaDownload className="mr-2 h-5 w-5 fill-current" />
            Download CV
          </a>
          <a
            href="mailto:arinzeogbo@gmail.com"
            className={`inline-flex items-center justify-center rounded-xl px-10 py-4 text-sm font-semibold uppercase tracking-wide transition duration-300 hover:-translate-y-1 ${themeColors.secondaryBtn}`}
          >
            Contact me
          </a>
        </section>

        <Tabs tab="projects" />

        <footer
          className={`mt-16 text-center text-sm transition-colors duration-500 ${themeColors.footer}`}
        >
          <p>
            Let&apos;s build something memorable together – drop a line anytime.
          </p>
        </footer>
      </main>
    </div>
  );
};

export default App;

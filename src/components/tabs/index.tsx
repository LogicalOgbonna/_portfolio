import React, { useState } from "react";
import { Projects } from "../projects/index.tsx";
import ExperienceList from "../experience";
import { useTheme } from "../../theme.tsx";

export type tabs = "experience" | "projects" | "articles";

const Tabs = ({ tab }: { tab: tabs }) => {
  const [activeTab, setActiveTab] = useState<{ label: tabs; active: boolean }>({
    label: tab,
    active: true,
  });
  const { isDark } = useTheme();
  const tabContent: Record<tabs, React.ReactNode> = {
    experience: <ExperienceList />,
    projects: <Projects />,
    articles: "",
  };
  const planOptions: { label: tabs; active: boolean }[] = [
    { label: "experience", active: true },
    { label: "projects", active: false },
    { label: "articles", active: false },
  ];

  const activeClass = (label: tabs) => {
    const isActive = activeTab.label === label;
    if (isActive) {
      if (isDark) return "bg-white text-[#56606b] shadow-[0_12px_24px_rgba(0,0,0,0.06)]";
      return "bg-yellow-500";
    }
    if (isDark) return "bg-card";
    return "bg-white";
  };
  return (
    <>
      <section
        aria-label="Billing options"
        className={`relative mt-16 rounded-3xl px-6 py-6 transition-colors duration-500 sm:px-8 ${
          isDark ? "bg-card" : "bg-white"
        }`}
      >
        <div
          className={`absolute inset-2 rounded-2xl transition-colors duration-500 ${
            isDark ? "bg-card-accent" : "bg-white"
          }`}
        ></div>
        <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          {planOptions.map((plan) => (
            <button
              key={plan.label}
              onClick={() => setActiveTab(plan)}
              className={`flex-1 rounded-2xl px-6 py-4 text-center text-sm font-semibold uppercase tracking-[0.08em] transition duration-300 ${activeClass(
                plan.label
              )}`}
            >
              {plan.label}
            </button>
          ))}
        </div>
      </section>
      {tabContent[activeTab.label]}
    </>
  );
};

export default Tabs;

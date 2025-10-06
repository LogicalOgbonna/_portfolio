import React from "react";
import { useTheme } from "../../theme";

type Experience = {
  company: string;
  location: string;
  role: string;
  period: string;
  bullets: string[];
};

const experiences: Experience[] = [
  {
    company: "Roche Genentech",
    location: "San Francisco, CA (Remote)",
    role: "Fullstack Engineer",
    period: "May 2023 - Present",
    bullets: [
      "Spearheaded the redesign of the main product for connecting and transferring clinical trial sites' data to various upstream EHR systems from a Vue web application to a Chrome extension in React.",
      "Optimized application performance by implementing lazy loading, code splitting, and image optimization, significantly reducing load times. Improved responsiveness across devices with responsive layouts, memoization to minimize re-renders, and efficient asset delivery via CDN. Used Lighthouse and Chrome DevTools to identify and fix performance bottlenecks.",
      "Implemented authentication and authorization workflows on the frontend using JWT-based flows, securely handling access and refresh tokens with HTTP-only cookies. Integrated login, signup, and role-based access control in the UI, protected client-side routes, and ensured secure token refresh handling for seamless user sessions. Collaborated closely with backend engineers to align on auth strategies and enforce permission-based UI rendering.",
      "Improved developer experience by introducing Redux for state management, optimizing the build pipeline, request caching using React Query, and refactoring legacy React code from class components to functional components.",
      "Increased stakeholder confidence by writing e2e tests with Playwright in the build pipeline, publishing the test results in GitHub Pages using allure-report plugin, and sending a notification on Slack with a link to the generated test results whenever a push is made.",
      "Co-developed a full-stack Next.js chat widget powered by a Retrieval-Augmented Generation (RAG) system using OpenAI's GPT models, enabling users to connect their data sources, embed the widget on external sites, and query their data in real time via a conversational interface.",
      "Mentored a team of two junior developers (interns), fostering a culture of technical excellence.",
      "Stayed on top of industry trends and modern frontend tooling to keep applications up to date with best practices.",
    ],
  },
  {
    company: "DESCASIO LTD",
    location: "Lagos, Nigeria",
    role: "Frontend Engineer",
    period: "May 2021 - Apr 2022",
    bullets: [
      "Designed and developed an intuitive, user-friendly interface using Tailwind CSS, streamlining key user flows and reducing friction, which resulted in a 25% increase in user engagement.",
      "Collaborated with designers in Figma and product managers via Jira to translate user requirements into clean, accessible UI components, iterating continuously based on user feedback and analytics insights.",
      "Partnered with software architects to design a scalable front-end architecture in React using container-component and atomic design patterns, enabling seamless integration with backend systems, improving code maintainability, and reducing development time by 30%.",
      "Streamlined the development process by implementing automated testing frameworks, reducing incoming bug reports by 20%.",
      "Documented React components in Storybook to provide comprehensive coverage of processes and support change management requests.",
      "Assisted the project manager with capturing user requirements and building user stories, estimates, and work plans.",
      "Optimized React application performance by 40% through targeted caching strategies, improving delivery speed and overall efficiency.",
    ],
  },
  {
    company: "BRISTOL MYERS SQUIBB",
    location: "San Francisco, CA (Remote)",
    role: "Frontend Developer",
    period: "Aug 2021 - Dec 2021",
    bullets: [
      "Owned React frontend architecture decisions and design, leveraging technologies such as ReactJS, Cypress for testing, Axios for REST API data loading, and Apollo Client for GraphQL consumption.",
      "Built an automated CI/CD pipeline with AWS CodeBuild, CodePipeline, and CodeDeploy to streamline build and deployment of application assets to S3.",
      "Implemented Cypress regression test suites, cutting test execution time by 50% and improving code quality by catching defects earlier in development.",
      "Established an agile workflow with daily stand-ups, sprint planning, and retrospectives, coordinating with project stakeholders to deliver features with a 95% on-time success rate.",
    ],
  },
];

const ExperienceCard = ({
  company,
  location,
  role,
  period,
  bullets,
}: Experience) => {
  const { isDark } = useTheme();

  return (
    <article
      className={`rounded-3xl border transition-colors duration-300 ${
        isDark
          ? "border-[#223445] bg-card p-8 text-text-main shadow-elevated"
          : "border-[#e5e9ef] bg-white p-8 text-[#212529] shadow-[0_24px_48px_rgba(0,0,0,0.04)]"
      }`}
    >
      <header className="flex flex-col gap-1 border-b border-current/10 pb-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="text-xl font-semibold tracking-wide">{company}</h3>
          <p className="text-sm italic opacity-80">{role}</p>
        </div>
        <div className="text-right text-sm">
          <p>{location}</p>
          <p className="italic opacity-80">{period}</p>
        </div>
      </header>
      <ul className="mt-5 space-y-3 text-sm leading-relaxed">
        {bullets.map((bullet) => (
          <li key={bullet} className="flex gap-2">
            <span className="pt-[6px] text-xs">•</span>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </article>
  );
};

const ExperienceList = () => {
  return (
    <section className="space-y-8 mt-16">
      {experiences.map((exp) => (
        <ExperienceCard key={`${exp.company}-${exp.period}`} {...exp} />
      ))}
    </section>
  );
};

export default ExperienceList;

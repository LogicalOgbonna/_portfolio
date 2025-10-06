import React from "react";
import ProjectCard from "./ProjectCard";

const projects: any = [
  {
    title: "Clarity",
    description:
      "Get clarity on terms of use and privacy policy.",
    image: "/projects/clarity.png",
    visitHref: "https://clarity.click/",

  },
  {
    title: "Jobanaut",
    description:
      "Jobanaut is a job portal website that allows users to find jobs and apply for them.",
    image: "/projects/jobanaut.png",
    visitHref: "https://wonderful-parfait-06abce.netlify.app/",
  },
  {
    title: "One Home",
    description:
      "Get homes for sale in Nigeria.",
    image: "/projects/onehome.png",
    visitHref: "https://classy-dodol-806db1.netlify.app",
  },
  {
    title: "Fast Adder",
    description:
      "Get genuine follower on your telegram channel.",
    image:
      "/projects/fast-adder.png",
    visitHref: "https://fastadder.netlify.app",
  },
  {
    title: "YizSell",
    description:
      "Sell your products and services to the world.",
    image:
      "/projects/yizsell.png",
    visitHref: "https://vigilant-leavitt-661bef.netlify.app/",
  }
];

export const Projects = () => {
  return (
    <section
      aria-label="Featured work"
      className="mt-16 grid gap-6 sm:grid-cols-2"
    >
      {projects.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </section>
  );
};

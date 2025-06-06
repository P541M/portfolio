import React from "react";
import {
  CodeBracketIcon,
  Cog6ToothIcon,
  MicrophoneIcon,
} from "@heroicons/react/24/solid";

const volunteer = [
  {
    company: "Google Developer Student Club | UofG",
    roles: [
      {
        title: "Hackathon Volunteer",
        icon: CodeBracketIcon,
        description:
          "Managed registration for 250+ participants, coordinated event logistics, and promoted hackathons through social media to ensure smooth operations.",
        duration: "May 2024",
      },
    ],
  },
  {
    company: "e-NABLE",
    roles: [
      {
        title: "Volunteer Prosthetic Assembler",
        icon: Cog6ToothIcon,
        description:
          "Collaborated with a team of 3-4 to assemble 3D printed prosthetic arms and legs, utilized various materials for texture enhancements, and developed foundational 3D printing skills.",
        duration: "Sep 2021 - Jun 2022",
      },
    ],
  },
  {
    company: "Im a Mortal",
    roles: [
      {
        title: "Podcast Sound Engineer Intern",
        icon: MicrophoneIcon,
        description:
          "Edited all podcast audio and assisted in the publishing process, ensuring high-quality sound production and timely releases.",
        duration: "Jan 2022 - May 2022",
      },
    ],
  },
];

export default function Volunteer() {
  return (
    <section
      id="volunteer-section"
      className="section-container min-h-screen bg-bg dark:bg-bg-dark"
    >
      <h2 className="section-title">Volunteer Experience</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {volunteer.map(({ company, roles }, index) => (
          <article
            key={index}
            className="card group relative flex h-full flex-col overflow-hidden bg-white p-0 transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg dark:bg-card-dark"
          >
            {/* Card header with organization name */}
            <div className="relative bg-gradient-to-r from-primary/90 to-primary p-5 dark:from-primary-dark/90 dark:to-primary-dark">
              <h3 className="font-heading text-xl font-bold text-white">
                {company}
              </h3>
            </div>
            {/* Card content */}
            <div className="flex-grow p-5 pt-6">
              {roles.map(
                ({ title, icon: Icon, description, duration }, idx) => (
                  <div key={idx} className="mb-6">
                    <div className="mb-3 flex items-center">
                      <div className="mr-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 shadow-sm dark:bg-primary-dark/10">
                          <Icon className="h-6 w-6 text-primary dark:text-primary-dark" />
                        </div>
                      </div>
                      <h4 className="font-medium text-text dark:text-text-dark">
                        {title}
                      </h4>
                    </div>
                    <div className="ml-14 pl-7">
                      <p className="mb-2 text-sm italic text-primary/80 dark:text-primary-dark/80">
                        {duration}
                      </p>
                      <p className="text-sm leading-relaxed text-text/80 dark:text-text-dark/80">
                        {description}
                      </p>
                    </div>
                  </div>
                ),
              )}
            </div>
            {/* Decorative footer element */}
            <div className="border-t border-primary/10 bg-primary/5 p-3 dark:border-primary-dark/10 dark:bg-primary-dark/5">
              <div className="flex justify-end">
                <span className="text-xs italic text-primary/70 dark:text-primary-dark/70">
                  {company === "Google Developer Student Club | UofG"
                    ? "Event Volunteer"
                    : company === "e-NABLE"
                      ? "Technical Volunteer"
                      : company === "Im a Mortal"
                        ? "Media Volunteer"
                        : "Volunteer Experience"}
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

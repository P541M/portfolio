import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import image1 from "../../assets/f24/grouppic.jpg";
import image2 from "../../assets/f24/websters.jpg";
import image3 from "../../assets/f24/d7Improv.png";
import image4 from "../../assets/f24/d9Hist.png";

const goals = [
  {
    title:
      "Build personal confidence and become more outgoing by pushing beyond my comfort zone in group settings.",
    description: `The main objective was to build personal confidence and become more outgoing by consistently pushing beyond my comfort zone in group settings. I aimed to speak up in every meeting—even just to ask questions—initiate conversations with colleagues, and participate in networking opportunities or social events.`,
    challenges: [
      "Overthinking before speaking up, leading to fast or unclear speech.",
      "Balancing the desire to be concise with the need to provide meaningful input.",
      "Stepping out of my comfort zone in larger group interactions.",
    ],
    skills: [
      "Oral communication",
      "Self-confidence in group settings",
      "Networking and interpersonal rapport",
      "Public speaking poise",
    ],
    results: `By challenging myself to share my expertise in website redesign meetings, I transitioned from overthinking to delivering clearer, concise input. I scheduled one-on-one conversations, fostered relationships beyond the office, and encouraged coworkers to share their insights. My manager commended me for my clarity and professionalism. I discovered I’m naturally adept at “breaking the ice,” which boosted my confidence in both professional and personal communication.`,
  },
  {
    title:
      "Enhance conflict resolution and negotiation skills to improve group harmony and project outcomes.",
    description: `I set out to improve my ability to handle conflict and negotiate solutions that would benefit all parties involved, ultimately boosting team harmony and project outcomes.`,
    challenges: [
      "Maintaining an open mind amidst conflicting viewpoints on project designs.",
      "Ensuring that all opinions are heard and integrated into final decisions.",
      "Keeping discussions constructive under tight deadlines and varied stakeholder expectations.",
    ],
    skills: [
      "Conflict resolution and mediation",
      "Negotiation and finding common ground",
      "Empathy and active listening",
      "Ethical reasoning and fair decision-making",
    ],
    results: `I practiced conflict-resolution strategies by focusing on shared goals, mediating disagreements, and synthesizing diverse inputs into a cohesive approach. This led to mutually beneficial outcomes and increased overall team satisfaction. Emphasizing clear communication and collaboration helped avoid misunderstandings and strengthened trust. Going forward, I plan to keep refining these conflict-resolution techniques.`,
  },
  {
    title:
      "Strengthen interpersonal skills to foster stronger, more authentic relationships in the workplace.",
    description: `My objective was to foster stronger, more authentic workplace relationships by focusing on empathy, active listening, and open communication—especially in a diverse, cross-cultural environment.`,
    challenges: [
      "Connecting with colleagues on a personal level rather than sticking to small talk.",
      "Understanding and embracing different cultural perspectives.",
      "Organizing informal meetups and promoting a comfortable social environment.",
    ],
    skills: [
      "Empathy and active listening",
      "Inclusive communication and cultural awareness",
      "Team bonding and collaboration",
      "Building trust through transparent dialogue",
    ],
    results: `I made a point of asking respectful questions and learning about my colleagues beyond their work roles. This authentic approach helped create a more relaxed, inclusive atmosphere. By proposing team-bonding activities and encouraging open discussions, I saw a noticeable improvement in trust and collaboration. Recognizing each person’s uniqueness has enriched our workplace dynamic, and I intend to carry these inclusive practices forward.`,
  },
  {
    title:
      "Develop stronger time management skills to effectively balance the multiple responsibilities of maintaining both external and internal websites.",
    description: `The goal was to develop robust time-management skills to effectively balance the demands of both internal and external website projects without becoming overwhelmed.`,
    challenges: [
      "Managing multiple projects simultaneously.",
      "Setting realistic deadlines and adapting to changing stakeholder needs.",
      "Breaking large, complex projects into manageable tasks.",
    ],
    skills: [
      "Project and task organization using tools like MS Teams and SharePoint",
      "Setting priorities and deadlines",
      "Scheduling and iterative planning",
      "Stress reduction through systematic task allocation",
    ],
    results: `I utilized Google and Microsoft productivity tools to manage my tasks, breaking large assignments into smaller portions aligned with each team member’s strengths. Regularly revisiting deadlines and prioritizing pressing tasks helped avoid last-minute rushing. This systematic approach improved my organizational abilities and equipped me to juggle multiple responsibilities while supporting my teammates effectively.`,
  },
  {
    title:
      "Develop leadership skills by taking initiative in organizing and managing small projects related to the website redesign.",
    description: `I aimed to enhance my leadership abilities by organizing and managing small projects tied to a major website redesign, focusing on team delegation and guiding the group toward shared goals.`,
    challenges: [
      "Stepping up to coordinate tasks and oversee project timelines.",
      "Ensuring clear communication and direction for diverse team members.",
      "Navigating unexpected issues and managing stakeholder expectations.",
    ],
    skills: [
      "Leadership and project management",
      "Delegation and mentorship",
      "Decision-making and problem-solving",
      "Team motivation and collaborative goal-setting",
    ],
    results: `I volunteered to lead various website redesign initiatives, leveraging each member’s strengths and maintaining open communication channels. When challenges arose, I collaborated with stakeholders and my manager to identify swift solutions. By focusing on meeting milestones and quality deliverables, the projects concluded successfully. Going forward, I plan to refine my leadership by staying patient, respecting individual differences, and maintaining a supportive environment that helps the team thrive.`,
  },
];

const workTermProjects = [
  {
    title: "Revamping the PhD improvisation page (Drupal 7)",
    description:
      "The original PhD Improvisation page was primarily composed of plain text and basic headers, making it less engaging for visitors. I led the project to give this page a complete facelift by incorporating the University’s branding guidelines—introducing a consistent color scheme, updated visuals, and clearer navigation elements. This transformation not only made the page more visually appealing but also enhanced its user-friendliness. Collaborating closely with faculty members, I ensured that all program details were current and that the page adhered to accessibility standards, resulting in a more engaging and informative experience for prospective and current students.",
    link: "https://www.uoguelph.ca/arts/improv/phd",
    image: image3,
    altText: "Screenshot of the redesigned PhD Improvisation page on Drupal 7",
    caption:
      "Revamped the PhD Improvisation page by incorporating branding elements and enhancing visual appeal.",
    showVisitButton: true,
  },
  {
    title: "Graduate pages migration (Drupal 7 to Drupal 9)",
    description:
      "Working alongside a large and dedicated team, I played a key role in migrating graduate program content from Drupal 7 to Drupal 9 (Content Hub). The existing content was largely composed of dense paragraphs, which could be overwhelming for graduate students seeking information. My responsibilities included updating and refining this content to make it more accessible and user-friendly. This involved reorganizing information, enhancing readability, and ensuring that the new Drupal 9 platform supported a more intuitive navigation experience. During my co-op term, I finalized a significant portion of the content, and I’ll continue to refine and support the launch of these pages during my part-time term in Winter 2025.",
    link: "https://preview-ugconthub.netlify.app/phd-history/",
    image: image4,
    altText:
      "Screenshot of the migrated Graduate Pages on Drupal 9 Content Hub",
    caption:
      "Migrated and refined Graduate Pages to Drupal 9, enhancing user experience for prospective students.",
    showVisitButton: false,
  },
];

const F24UoGCollegeOfArts = () => {
  const navigate = useNavigate();
  const [expandedGoals, setExpandedGoals] = useState({});
  const [expandedProjects, setExpandedProjects] = useState({});

  const handleBack = () => {
    navigate("/");
  };

  const handleToggleGoal = (index) => {
    setExpandedGoals((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handleToggleProject = (index) => {
    setExpandedProjects((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div
      id="f24-uofg-college-of-arts-wtr"
      className="min-h-screen px-6 pb-20 pt-10 text-text transition-all duration-300 sm:px-8 md:px-16 lg:px-20"
    >
      {/* Back Button */}
      <div className="mb-8">
        <button
          onClick={handleBack}
          className="inline-block rounded-full bg-primary px-6 py-3 text-center text-bg shadow-md transition-all duration-300 hover:scale-105 hover:bg-bgContrast"
        >
          Back to Portfolio
        </button>
      </div>

      {/* Main Title */}
      <section className="mb-14">
        <h1 className="text-center text-4xl font-bold leading-snug text-text">
          A Canvas of Opportunity: Fall 2024 at the College of Arts
        </h1>

        <p className="mb-4 mt-3 text-left text-lg text-text">
          From September to December 2024, I had the privilege of working at the
          University of Guelph, College of Arts, for my second co-op work term
          as a Website Redesign Coordinator. In this role, I got to dive into
          the ins and outs of website development—from content migration and
          page redesign to user experience improvements—while also gaining a
          firsthand look at how projects flow within a large academic
          institution. Throughout this report, I’ll share the highlights of my
          experience, focusing on the importance of collaboration in driving
          successful digital transformations, as well as the professional and
          personal growth that came with it. I hope you enjoy reading about my
          time in this supportive environment, and I’d love to leave you with a
          little food for thought on the value of embracing new challenges in a
          post-secondary setting.
        </p>
      </section>

      {/* 2. Information about the Employer */}
      <section className="mb-14">
        <h2 className="mb-4 text-center text-3xl font-bold text-primary">
          Behind the Scenes: Exploring the College of Arts
        </h2>
        <hr className="mb-4 border-divContrast" />

        {/* Responsive Layout for Image and Text */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-8">
          {/* Image Section */}
          <div className="lg:w-1/3">
            <img
              src={image1}
              className="mt-4 h-auto w-full rounded-md shadow-md"
            />
            <p className="my-4 text-center text-base text-text">
              Group picture of the marketing & communications team!
            </p>
          </div>

          {/* Text Section */}
          <div className="text-lg text-text lg:w-2/3">
            <p className="mb-4">
              Our Marketing and Communications team sits in the Dean’s Office at
              the College of Arts, University of Guelph, and serves as a support
              hub for everything from marketing and communications to
              recruitment and web services—reaching a wide range of stakeholders
              such as students, staff, faculty, donors, and alumni. Within this
              team, there are three key service areas: Marketing and
              Communications, the Web Team, and Recruitment and Retention. Since
              my role focuses on the website, I belong to the Web Team!
            </p>
            <p className="mb-4">
              Marketing and Communications handles strategic planning for the
              College, organizes university- and college-wide events, creates
              newsletters and story pieces, manages social and digital media,
              and ensures we follow the right branding guidelines.
            </p>
            <p className="mb-4">
              Recruitment and Retention looks after recruitment materials and
              events, coordinates volunteer outreach, handles room bookings and
              logistics, manages merchandise, and leads the Ambassador Team.
            </p>
            <p className="mb-4">
              Web Services is in charge of planning and developing website and
              intranet structures, improving user experience, and supporting our
              Drupal and SharePoint systems. We also produce strategic web
              content for future, current, and graduate students, making sure
              everyone stays informed and engaged.
            </p>
            <p className="mb-4">
              All together, our sub-teams collaborate to keep the College of
              Arts thriving—whether we’re welcoming new students, sharing
              stories and events, or fine-tuning the online experience.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Goals */}
      <section className="mb-14">
        <h2 className="mb-4 text-center text-3xl font-bold text-primary">
          A Palette of Progress: Goals and Growth
        </h2>
        <hr className="mb-4 border-divContrast" />

        <p className="mb-4 text-left text-lg text-text">
          During my work term at the University of Guelph, College of Arts, I
          set five key learning goals to enhance both my professional and
          interpersonal skills. Each goal was tied to a specific skill area,
          supported by an action plan, measures of success, and a personal
          reflection. Below is a summary of these goals—along with the
          challenges I encountered, the skills I refined, and the outcomes I
          achieved!
        </p>

        {/* Expandable Goals */}
        <div>
          {goals.map((goal, index) => (
            <div key={index}>
              <button
                onClick={() => handleToggleGoal(index)}
                className="flex w-full items-center justify-between py-2 text-left text-lg font-semibold transition-all duration-300 hover:text-primary"
                aria-expanded={expandedGoals[index]}
                aria-controls={`goal-details-${index}`}
              >
                <span>{goal.title}</span>
                <div className="flex items-center">
                  <span
                    className={`transform transition-transform duration-300 ${
                      expandedGoals[index] ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    ▼
                  </span>
                </div>
              </button>

              <div
                id={`goal-details-${index}`}
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  expandedGoals[index]
                    ? "max-h-screen translate-y-0 opacity-100"
                    : "max-h-0 translate-y-4 opacity-0"
                }`}
              >
                <div className="pb-4">
                  <h3 className="text-lg font-semibold text-primary">
                    Goal Description:
                  </h3>
                  <p className="text-sm sm:text-base md:text-base lg:text-lg xl:text-lg">
                    {goal.description}
                  </p>

                  {/* Challenges */}
                  {goal.challenges && (
                    <>
                      <h3 className="mt-2 text-lg font-semibold text-primary">
                        Challenges:
                      </h3>
                      {Array.isArray(goal.challenges) ? (
                        <ul className="list-disc pl-6 text-sm sm:text-base md:text-base lg:text-lg xl:text-lg">
                          {goal.challenges.map((challenge, cIndex) => (
                            <li key={cIndex}>{challenge}</li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-sm sm:text-base md:text-base lg:text-lg xl:text-lg">
                          {goal.challenges}
                        </p>
                      )}
                    </>
                  )}

                  {/* Skills */}
                  <h3 className="mt-2 text-lg font-semibold text-primary">
                    Skills Developed:
                  </h3>
                  {Array.isArray(goal.skills) ? (
                    <ul className="list-disc pl-6 text-sm sm:text-base md:text-base lg:text-lg xl:text-lg">
                      {goal.skills.map((skill, sIndex) => (
                        <li key={sIndex}>{skill}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm sm:text-base md:text-base lg:text-lg xl:text-lg">
                      {goal.skills}
                    </p>
                  )}

                  <h3 className="mt-2 text-lg font-semibold text-primary">
                    Results:
                  </h3>
                  <p className="text-sm sm:text-base md:text-base lg:text-lg xl:text-lg">
                    {goal.results}
                  </p>
                </div>
              </div>

              {/* Divider between goals */}
              {index < goals.length - 1 && (
                <hr className="my-4 border-divContrast" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 4. Job Description */}
      <section className="mb-14">
        <h2 className="mb-4 text-center text-3xl font-bold text-primary">
          Crafting a Digital Experience: My Role in the Redesign
        </h2>
        <hr className="mb-4 border-divContrast" />

        <p className="mb-4 text-left text-lg text-text">
          Over the last four months, I’ve been diving deep into web migration,
          accessibility, and user experience design as the Website Redesign
          Coordinator for the College of Arts. To ensure our web pages are not
          only user-friendly but also impactful for the audiences we serve, I
          leverage a variety of specialized platforms. And here are the three
          main platforms I tinker with! In a project of this scale, I’ve
          sharpened my project management skills, learned how to collaborate
          with clients across different departments, and even dipped my toes
          into a few marketing and recruitment initiatives along the way.
        </p>
        <h3 className="mb-4 mt-8 text-center text-2xl font-bold text-text">
          Drupal 7, Drupal 9 (Content Hub), & SharePoint
        </h3>
        <p className="mb-4 text-left text-lg text-text">
          <strong>Drupal 7:</strong> As the University’s former content
          management system, Drupal 7 hosts close to 11,000 College of Arts
          pages. Faculty and staff can create and edit content, while our web
          team has site manager access to oversee the entire platform.
        </p>
        <p className="mb-4 text-left text-lg text-text">
          <strong>Drupal 9 / Content Hub:</strong> The University is moving
          toward a more modern, user-friendly design with Drupal 9. My job has
          been to plan site structure and navigation, develop page layouts and
          wireframes, and make sure everything fits within accessibility and
          branding guidelines. This newer system has less coding involved but
          requires careful organization to ensure a smooth transition from
          Drupal 7.
        </p>
        <p className="mb-4 text-left text-lg text-text">
          <strong>SharePoint:</strong> SharePoint is being rolled out as an
          internal intranet for faculty, staff, and students, offering a
          straightforward platform to share internal communications and
          resources. I’ve been helping configure its templates, branding, and
          navigation so departments can easily post and update their own
          content.
        </p>
        <h3 className="mb-4 mt-8 text-center text-2xl font-bold text-text">
          Two of the Many Projects I Tackled!
        </h3>
        <p className="mb-4 text-left text-lg text-text">
          While I tackled numerous projects throughout my term, two in
          particular showcase the scope and impact of my work. These standout
          projects not only highlight my technical skills in website development
          and content management but also demonstrate my ability to collaborate
          effectively within a team, leading to significant enhancements for the
          College of Arts' online presence.
        </p>

        {/* Featured Projects with Dropdown */}
        <section className="mb-6">
          {workTermProjects.map((project, index) => (
            <div key={index}>
              <button
                onClick={() => handleToggleProject(index)}
                className="flex w-full items-center justify-between py-2 text-left text-lg font-semibold transition-all duration-300 hover:text-primary"
                aria-expanded={expandedProjects[index]}
                aria-controls={`project-details-${index}`}
              >
                <span>{project.title}</span>
                <div className="flex items-center">
                  <span
                    className={`transform transition-all duration-300 ${
                      expandedProjects[index] ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    ▼
                  </span>
                </div>
              </button>

              <div
                id={`project-details-${index}`}
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  expandedProjects[index]
                    ? "max-h-screen translate-y-0 opacity-100"
                    : "max-h-0 translate-y-4 opacity-0"
                }`}
              >
                <div className="pb-4">
                  <div className="mt-2 flex flex-col md:flex-row md:items-start md:space-x-8">
                    <img
                      src={project.image}
                      alt={project.altText}
                      className="mb-4 h-auto w-full rounded-md shadow-md md:mb-0 md:w-1/2"
                    />
                    <div className="md:w-1/2">
                      <h4 className="text-lg font-semibold text-primary">
                        Project Description:
                      </h4>
                      <p className="text-sm sm:text-base md:text-base lg:text-lg xl:text-lg">
                        {project.description}
                      </p>

                      <div className="mt-8">
                        {/* Conditionally render the "Visit Project" button */}
                        {project.showVisitButton && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block rounded-full bg-primary px-6 py-3 text-center text-bg shadow-md transition-all duration-300 hover:scale-105 hover:bg-bgContrast"
                            aria-label={`Visit Project: ${project.title}`}
                          >
                            Visit Project
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Corrected Divider Condition */}
              {index < workTermProjects.length - 1 && (
                <hr className="my-4 border-divContrast" />
              )}
            </div>
          ))}
        </section>

        <p className="mb-4 text-left text-lg text-text">
          Overall, this role has given me the chance to blend tech-savvy tasks
          with creative thinking—whether I’m coding in Drupal, mapping out user
          flows, or helping a department bring their vision online. It’s been a
          rewarding experience to shape both public-facing and internal
          platforms that truly serve the College of Arts community.
        </p>
      </section>

      {/* 5. Conclusions */}
      <section className="mb-14">
        <h2 className="mb-4 text-center text-3xl font-bold text-primary">
          Closing the Canvas: Lessons in Growth and Gratitude
        </h2>
        <hr className="mb-4 border-divContrast" />
        <p className="mb-4 text-left text-lg text-text">
          Reflecting on these four months, I’m struck by just how much I’ve
          learned—and how much I’ve grown—through this Website Redesign
          Coordinator role. From tackling accessibility standards to refining
          user journeys and juggling multiple projects, every challenge pushed
          me to become more resourceful and communicative. I also discovered the
          power of teamwork: collaborating with different departments taught me
          the importance of empathy, active listening, and finding solutions
          that benefit everyone. This experience not only expanded my technical
          abilities but also enriched my perspective on how a well-designed
          digital environment can positively impact a community.
        </p>
      </section>

      {/* 6. Acknowledgments */}
      <section className="mb-14">
        <h2 className="mb-4 text-center text-3xl font-bold text-primary">
          A Gallery of Gratitude: Acknowledgments
        </h2>
        <hr className="mb-4 border-divContrast" />

        <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-8">
          {/* Image Section */}
          <div className="lg:w-1/3">
            <img
              src={image2}
              alt="Group picture of the Websters!"
              className="mb-4 h-auto w-full rounded-md shadow-md"
            />
            <p className="my-4 text-center text-base text-text">
              Group picture of the Websters!
            </p>
          </div>

          {/* Text Section */}
          <div className="text-lg text-text lg:w-2/3">
            <p className="mb-4">
              I would like to extend my heartfelt gratitude to my manager,
              Rachel Ruston, for her exceptional mentorship and unwavering
              support. Her supportive leadership style made it possible for me
              to learn, grow with confidence, and take on new challenges. I also
              owe a big thank-you to Kate Tschirhart, whose warm and caring
              nature contributed greatly to the positive, collaborative
              atmosphere in our workspace.
            </p>
            <p className="mb-4">
              My close collaborators, the Websters—particularly Lyna Tran and
              Muhammad Uzair—deserve special mention. They took me under their
              wing, shared valuable insights, and helped me transition smoothly
              and confidently into my role. Beyond work, they became some of my
              closest friends, offering constant support and encouragement
              throughout my journey. The rest of the team, including Callie
              Gibson, Ella Holt, Rasneet Kaur, and Hannah Andrea Rosario, was
              equally supportive, enthusiastic, and passionate, contributing
              tirelessly to the College’s website success.
            </p>
            <p className="mb-4">
              I am thankful for everyone in the College of Arts, whose
              collective efforts made my co-op term both enriching and
              enjoyable. From personal growth to professional achievements, this
              experience has reshaped my understanding of teamwork, strengthened
              my confidence, and motivated me to stay engaged with the College
              in future projects. I’m excited to return in the Winter 2025 term,
              carry forward the valuable lessons I’ve learned, and continue to
              foster the long-lasting relationships I’ve established.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default F24UoGCollegeOfArts;

import { BlogPostGrid } from "@/components/blog-post-grid";
import type { TMetadata } from "@/components/content-hub";
import { getContentDocs } from "@/libs/get-content-docs";
import { Button } from "@/components/button";
import { ExperienceCard } from "@/components/experience-card";
import { ProjectCard } from "@/components/project-card";
import Image from "next/image";
import Link from "next/link";

const dummyExperience = [
  {
    company: "Acme.inc",
    position: "Chief Usability Analyst",
    startPeriod: "Aug 2024",
    description:
      "As the Chief Usability Analyst, leads the charge in optimizing user experiences through intuitive design and data-driven strategies. With a focus on balancing functionality and user satisfaction, they work closely with cross-functional teams to streamline digital interactions, ensuring that every touchpoint is seamless and accessible. Their innovative approach and commitment to continuous improvement drive measurable results, enhancing both user engagement and business outcomes.",
    keys: [
      "Spearhead usability testing and research to identify pain points and areas for improvement.",
      "Collaborate with designers, developers, and product managers to implement user-centric solutions.",
      "Leverage user feedback and analytics to refine workflows and interface designs.",
      "Advocate for best practices in usability, acccessibility, and design consistency.",
    ],
  },
  {
    company: "Sther, Flatley and Doyle",
    position: "International Quality Officer",
    startPeriod: "May 2023",
    endPeriod: "August 2024",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    keys: ["Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum"],
  },
  {
    company: "Jacobi, Zemlak and Mayer",
    position: "National Identity Specialist",
    startPeriod: "Aug 2020",
    endPeriod: "May 2024",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    keys: ["Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum"],
  },
  {
    company: "Champlin LLC",
    position: "National Identity Specialist",
    startPeriod: "Aug 2016",
    endPeriod: "July 2020",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    keys: ["Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum"],
  },
  {
    company: "Keeling - Price",
    position: "Chief Marketing Administrator",
    startPeriod: "Aug 2011",
    endPeriod: "July 2016",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    keys: ["Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum"],
  },
  {
    company: "Quitzon - Swift",
    position: "Global Directive Assistant",
    startPeriod: "Aug 2000",
    endPeriod: "Aug 2011",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    keys: ["Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum"],
  },
];

const dummyProjects = [
  {
    src: "/assets/icon-project-1.webp",
    title: "Finance Tracker",
    description: "An App for managing personal finances and budgeting",
    websiteHref: "/",
    repositoryHref: "/",
    docsHref: "/",
  },
  {
    src: "/assets/icon-project-2.webp",
    title: "Recipe Manager",
    description: "An App for storing and sharing favorite recipes",
    websiteHref: "/",
    repositoryHref: "/",
    docsHref: "/",
  },
  {
    src: "/assets/icon-project-3.webp",
    title: "Fitness Tracker",
    description: "An App for tracking workouts and health goals.",
    websiteHref: "/",
    repositoryHref: "/",
    docsHref: "/",
  },
  {
    src: "/assets/icon-project-4.webp",
    title: "Travel Planner",
    description: "An App for planning trips and exploring destinations.",
    websiteHref: "/",
    repositoryHref: "/",
    docsHref: "/",
  },
  {
    src: "/assets/icon-project-5.webp",
    title: "Task Manager",
    description: "An App for organizing tasks and increasing productivity.",
    websiteHref: "/",
    repositoryHref: "/",
  },
];

export default async function Home() {
  const metadatas = (await getContentDocs(6)) as TMetadata[];

  return (
    <main className="flex justify-center items-center bg-zinc-50">
      <div className="max-w-[1080px] lg:mt-[5rem] mt-[3rem] lg:p-16 py-8">
        <section className="lg:space-y-12 space-y-8 lg:pb-20 lg:p-0 p-5">
          <h1 className="text-neutral-400/65 font-semibold max-w-[850px]">
            A <span className="text-black">Minimalist</span> Portfolio Template
            for Developer
          </h1>

          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-5">
              <Image
                src={`/assets/profile.webp`}
                width={500}
                height={500}
                alt="profile icon"
                className="lg:w-[120px] lg:h-[120px] w-[80px] h-[80px] border border-neutral-500 rounded-full"
              />
              <div className="flex flex-col lg:gap-2 gap-1">
                <div className="space-y-1">
                  <h2 className="text-black font-semibold">Roberta Deckow</h2>
                  <p className="text-neutral-500">Chief Usability Analyst</p>
                </div>
                <div className="flex gap-x-2.5 pt-1.5">
                  <div className="social-icon p-1.5">
                    <Image
                      src={`/assets/x-icon.webp`}
                      width={500}
                      height={500}
                      alt="x icon"
                    />
                  </div>
                  <div className="social-icon">
                    <Image
                      src={`/assets/github-icon.webp`}
                      width={500}
                      height={500}
                      alt="github icon"
                      className="lg:scale-125"
                    />
                  </div>
                  <div className="social-icon lg:pb-3 pb-2">
                    <Image
                      src={`/assets/stackoverflow-icon.webp`}
                      width={500}
                      height={500}
                      alt="stackoverflow icon"
                      className="lg:scale-110 scale-90"
                    />
                  </div>
                </div>
              </div>
            </div>
            <h5 className="text-neutral-500 max-w-[600px]">
              Simpfolio offers a{" "}
              <span className="font-bold">sleek design for developers</span> to
              showcase their work effectively. Whether you&apos;re a{" "}
              <span className="font-bold">
                coder, designer, or tech enthusiast
              </span>
              , this template helps you display your projects with style.
            </h5>
            <div className="flex items-center lg:gap-5 gap-2">
              <Button className="flex items-center lg:gap-3 gap-2">
                <div className="relative inline-flex">
                  <div className="lg:w-2 lg:h-2 h-1.5 w-1.5 bg-green-400 rounded-full"></div>
                  <div className="lg:w-2 lg:h-2 h-1.5 w-1.5 bg-green-400 rounded-full absolute top-0 left-0 animate-ping"></div>
                  <div className="lg:w-2 lg:h-2 h-1.5 w-1.5 bg-green-400 rounded-full absolute top-0 left-0 animate-pulse"></div>
                </div>
                <span>Let&apos;s Talk With Me</span>
              </Button>
              <Button variant="secondary">Find Out More</Button>
            </div>
          </div>
        </section>

        <section className="space-y-5 lg:pb-20 lg:pt-0 lg:px-0 p-5">
          <h3 className="font-semibold">Experience</h3>
          <div>
            {dummyExperience.map((experience, index) => {
              return <ExperienceCard key={index} {...experience} />;
            })}
          </div>
        </section>

        <section className="space-y-5 lg:pb-20 lg:pt-0 lg:px-0 p-5">
          <h2 className="text-2xl font-semibold">Projects</h2>
          <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-6 gap-3">
            {dummyProjects.map((project, index) => {
              return <ProjectCard key={index} {...project} />;
            })}
          </div>
        </section>

        <div className="space-y-5 lg:p-0 p-5">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold">Blog</h2>
            <Link href="/blog">
              <p className="text-neutral-500 hover:underline">
                See My Another Blog &#10095;
              </p>
            </Link>
          </div>
          <BlogPostGrid metadatas={metadatas} />
        </div>
      </div>
    </main>
  );
}

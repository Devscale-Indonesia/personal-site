import { BlogCard } from "@/components/blog.card";
import { BlogTag } from "@/components/blog.tag";
import { Button } from "@/components/button";
import {
  PastExperienceCard,
  PresentExperienceCard,
} from "@/components/experience.card";
import { ProjectCard } from "@/components/project.card";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center items-center bg-bodyGray">
      <div className="max-w-[1080px] w-full mt-[5rem] p-16">
        <div className="flex flex-col gap-20">
          <div className=" flex flex-col gap-12">
            <div className="max-w-[850px]">
              <h1 className="text-lightGray font-semibold">
                A <span className="text-blackColor">Minimalist</span> Portfolio
                Template for Developer
              </h1>
            </div>
            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-5">
                <Image
                  src={`/assets/profile.webp`}
                  width={500}
                  height={500}
                  alt="profile icon"
                  className="w-[120px] h-[120px] border rounded-full"
                />
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col">
                    <h2 className="text-blackColor font-semibold">
                      Roberta Deckow
                    </h2>
                    <p className="text-mediumGray">Chief Usability Analyst</p>
                  </div>
                  <div className="flex gap-2.5">
                    <div className="social-icon">
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
                        className="scale-125"
                      />
                    </div>
                    <div className="social-icon pb-3">
                      <Image
                        src={`/assets/stackoverflow-icon.webp`}
                        width={500}
                        height={500}
                        alt="stackoverflow icon"
                        className="scale-110"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <h5 className="text-mediumGray max-w-[600px]">
                Simpfolio offers a{" "}
                <span className="font-bold">sleek design for developers</span>{" "}
                to showcase their work effectively. Whether you&apos;re a{" "}
                <span className="font-bold">
                  coder, designer, or tech enthusiast
                </span>
                , this template helps you display your projects with style.
              </h5>
              <div className="flex items-center gap-5">
                <Button className="flex items-center gap-3">
                  <div className="relative inline-flex">
                    <div className="w-2 h-2 bg-greenColor rounded-full"></div>
                    <div className="w-2 h-2 bg-greenColor rounded-full absolute top-0 left-0 animate-ping"></div>
                    <div className="w-2 h-2 bg-greenColor rounded-full absolute top-0 left-0 animate-pulse"></div>
                  </div>
                  <span>Let&apos;s Talk With Me</span>
                </Button>
                <Button variant="secondary">Find Out More</Button>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <h3 className="font-semibold">Experience</h3>
            <div>
              <PresentExperienceCard
                company="Acme.inc"
                position="Chief Usability Analyst"
                period="Aug 2024"
                description="As the Chief Usability Analyst, leads the charge in optimizing user experiences through intuitive design and data-driven strategies. With a focus on balancing functionality and user satisfaction, they work closely with cross-functional teams to streamline digital interactions, ensuring that every touchpoint is seamless and accessible. Their innovative approach and commitment to continuous improvement drive measurable results, enhancing both user engagement and business outcomes."
                keys={[
                  "Spearhead usability testing and research to identify pain points and areas for improvement.",
                  "Collaborate with designers, developers, and product managers to implement user-centric solutions.",
                  "Leverage user feedback and analytics to refine workflows and interface designs.",
                  "Advocate for best practices in usability, acccessibility, and design consistency.",
                ]}
              />
              <PastExperienceCard
                company="Stehr, Flatley, and Doyle"
                position="International Quality Agent"
                period="May 2023"
              />
              <PastExperienceCard
                company="Jacobi, Zemlak and Mayer"
                position="District Quality Officer"
                period="Aug 2020 - May 2024"
              />
              <PastExperienceCard
                company="Champlin LLC"
                position="National Identity Specialist"
                period="Aug 2016 - Jul 2020"
              />
              <PastExperienceCard
                company="Keeling - Price"
                position="Chief Marketing Administrator"
                period="Aug 2011 - July 2016"
              />
              <PastExperienceCard
                company="Quitzon - Swift"
                position="Global Directive Assistant"
                period="Aug 2000 - Aug 2011"
              />
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <h2 className="text-2xl font-semibold">Projects</h2>
            <div className="grid grid-cols-3 gap-x-5 gap-y-6">
              <ProjectCard
                src="/assets/icon-project-1.webp"
                title="Finance Tracker"
                description="An App for managing personal finances and budgeting"
                websiteHref="/"
                repositoryHref="/"
                docsHref="/"
              />
              <ProjectCard
                src="/assets/icon-project-2.webp"
                title="Recipe Manager"
                description="An App for storing and sharing favorite recipes"
                websiteHref="/"
                repositoryHref="/"
                docsHref="/"
              />
              <ProjectCard
                src="/assets/icon-project-3.webp"
                title="Fitness Tracker"
                description="An App for tracking workouts and health goals."
                websiteHref="/"
                repositoryHref="/"
                docsHref="/"
              />
              <ProjectCard
                src="/assets/icon-project-4.webp"
                title="Travel Planner"
                description="An App for planning trips and exploring destinations."
                websiteHref="/"
                repositoryHref="/"
                docsHref="/"
              />

              <ProjectCard
                src="/assets/icon-project-5.webp"
                title="Task Manager"
                description="An App for organizing tasks and increasing productivity."
                websiteHref="/"
                repositoryHref="/"
              />
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <div className="flex justify-between">
              <h2 className="text-2xl font-semibold">Projects</h2>
              <Link href="/blog">
                <p className="text-mediumGray hover:underline">
                  See My Another Blog &#10095;
                </p>
              </Link>
            </div>
            <div className="grid grid-cols-3 gap-6">
              <BlogCard
                date="10 September 2024"
                title="Best Practices for Optimizing Nextjs Performance"
              >
                <BlogTag tag="Performance Optimization" />{" "}
                <BlogTag tag="Web Performance" />{" "}
                <BlogTag tag="Frontend Development" />
              </BlogCard>
              <BlogCard
                date="5 October 2024"
                title="BImplementing SEO Strategies in Nextjs Projects"
              >
                <BlogTag tag="SEO" />{" "}
                <BlogTag tag="Search Engine Optimization" />{" "}
                <BlogTag tag="Digital Marketing" />
              </BlogCard>
              <BlogCard
                date="20 October 2024"
                title="Data Management Techniques for Scalable Nextjs App"
              >
                <BlogTag tag="Data Management" /> <BlogTag tag="Scalability" />{" "}
                <BlogTag tag="Backend Development" />
              </BlogCard>
              <BlogCard
                date="12 November 2024"
                title="Enhancing Security in Nextjs Applications"
              >
                <BlogTag tag="Security" /> <BlogTag tag="Cybersecurity" />{" "}
                <BlogTag tag="Information Security" />
              </BlogCard>
              <BlogCard
                date="25 March 2025"
                title="Optimizing Performance in React Native"
              >
                <BlogTag tag="Performance" /> <BlogTag tag="React Native" />{" "}
                <BlogTag tag="App Optimization" />
              </BlogCard>
              <BlogCard
                date="8 September 2025"
                title="Data Management Techniques for Scalable Nextjs App"
              >
                <BlogTag tag="UI Design" /> <BlogTag tag="Flutter" />{" "}
                <BlogTag tag="User Experience" />
              </BlogCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

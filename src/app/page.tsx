import { Button } from "@/components/button";
import { PresentExperienceCard } from "@/components/experience.card";
import { KeyList } from "@/components/key.list";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center items-center">
      <div className="max-w-[1080px] w-full mt-[5rem] p-16">
        <div className="flex flex-col gap-20">
          {/* Hero Section */}
          <div className=" flex flex-col gap-12">
            <div className="max-w-[850px]">
              <h1 className="text-lightGray font-semibold">
                A <span className="text-blackColor">Minimalist</span> Portfolio
                Template for Developer
              </h1>
            </div>
            <div className="flex flex-col gap-8">
              {/* Profile and Social Media */}
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
                    <h3 className="text-blackColor font-semibold">
                      Roberta Deckow
                    </h3>
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
              {/* Bio */}
              <h5 className="text-mediumGray max-w-[600px]">
                Simpfolio offers a{" "}
                <span className="font-bold">sleek design for developers</span>{" "}
                to showcase their work effectively. Whether you&apos;re a{" "}
                <span className="font-bold">
                  coder, designer, or tech enthusiast
                </span>
                , this template helps you display your projects with style.
              </h5>
              {/* Button Section */}
              <div className="flex items-center gap-5">
                <Button className="space-x-3">
                  <span className="text-[#24D982]">&#8226;</span>
                  <span>Let&apos;s Talk With Me</span>
                </Button>
                <Button variant="secondary">Find Out More</Button>
              </div>
            </div>
          </div>
          {/* Experience Section */}
          <PresentExperienceCard
            company="Acme.inc"
            position="Chief Usability Analyst"
            period="Aug 2024"
            description="As the Chief Usability Analyst, leads the charge in optimizing user experiences through intuitive design and data-driven strategies. With a focus on balancing functionality and user satisfaction, they work closely with cross-functional teams to streamline digital interactions, ensuring that every touchpoint is seamless and accessible. Their innovative approach and commitment to continuous improvement drive measurable results, enhancing both user engagement and business outcomes."
          >
            <KeyList desc="Lorem" />
          </PresentExperienceCard>
        </div>
      </div>
    </div>
  );
}

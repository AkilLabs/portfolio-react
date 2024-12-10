import { useEffect, useState } from "react";
import { about } from "../Float/config";
import Float from "../Float/Float";
import { SectionLayout } from "../Layout";
import { Heading, SubHeading } from "../Typography";
import { Align } from "../Typography/types";
import MobileTechList from "./MobileTechList";
import TechList from "./TechList";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => (
  <div className="w-full mt-8 md:mt-16 border-t border-white/10">
    <div className="py-6 md:py-8">
      <div className="flex flex-col items-center space-y-4">
        <h3 className="text-white text-base md:text-lg font-semibold mb-2 md:mb-4">
          Let&apos;s Connect
        </h3>
        <div className="flex space-x-4 md:space-x-6">
          <a
            href="https://github.com/AkilLabs"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-purple-400 transition-colors duration-300 flex items-center space-x-2 group"
          >
            <Github className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform duration-300" />
            <span className="hidden sm:inline text-sm md:text-base">GitHub</span>
          </a>
          <a
            href="https://linkedin.com/in/akil-a-"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-purple-400 transition-colors duration-300 flex items-center space-x-2 group"
          >
            <Linkedin className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform duration-300" />
            <span className="hidden sm:inline text-sm md:text-base">LinkedIn</span>
          </a>
          <a
            href="mailto:akilaskarali@gmail.com"
            className="text-white/70 hover:text-purple-400 transition-colors duration-300 flex items-center space-x-2 group"
          >
            <Mail className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform duration-300" />
            <span className="hidden sm:inline text-sm md:text-base">Email</span>
          </a>
        </div>
        <p className="text-white/50 text-xs md:text-sm text-center mt-2 md:mt-4">
          © {new Date().getFullYear()} Akil A. All rights reserved.
        </p>
      </div>
    </div>
  </div>
);

export default function About() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <SectionLayout className="w-full max-w-6xl mx-auto px-4 md:px-6">
        
        <div className="relative w-full flex flex-col md:flex-row md:items-start gap-8 md:gap-12 ">
        <div className="px-0">
  <SubHeading dark align={Align.Left}>
    About
  </SubHeading>
  

          {/* Left Column: About Heading and Profile Image */}
          <div className="w-4/5 md:w-1/4 flex flex-col items-left md:items-start md:pr-10 justify-center px-10">
  <div className="w-40 h-40 md:w-64 md:h-64 justify-center rounded-full overflow-hidden border-4 border-gray-200 shadow-lg relative mt-4 md:mt-8 mb-6">
    <img
      src="/images/profile.jpg"
      alt="Akil A Profile"
      className="w-full h-full object-cover"
    />
  </div>
</div>\
</div>



          {/* Right Column: About Content */}
          <div className="w-full md:w-2/3 flex flex-col space-y-4 md:space-y-6 md:pt-8 text-left">
            <div className="space-y-2">
              <Heading size="sm" dark className="font-extrabold">
                <div className="flex flex-col text-left">
                  <span>Akil A</span>
                  <span>GenAI | Python Developer </span>
                  <span>UI Designer</span>
                </div>
              </Heading>
            </div>

            <p className="text-sm md:text-base lg:text-lg">
              I am a Python developer, RAG model expert, and UI designer, creating elegant, 
              AI-driven solutions for seamless user experiences.
            </p>

            <div className="text-sm md:text-base lg:text-lg space-y-4">
              <p>
                Currently, I am a Junior Software Intern,{" "}
                <span className="font-bold">
                  focusing on the backend and developing project on AI
                </span>
                . 
              </p>
              <p>
                On a daily basis, I work with:
              </p>
              <div className="md:hidden">
                <MobileTechList />
              </div>
              <div className="hidden md:block">
                <TechList />
              </div>
              <p>
                <span className="font-bold">All built from the ground up</span>.
              </p>
            </div>
          </div>
        </div>

        <Float config={about} />
      </SectionLayout>
      <Footer />
    </>
  );
}

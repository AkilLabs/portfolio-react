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
  <div className="w-full mt-16 border-t border-white/10">
    <div className="py-8">
      <div className="flex flex-col items-center space-y-4">
        <h3 className="text-white text-lg font-semibold mb-4">Let's Connect</h3>
        <div className="flex space-x-6">
          <a
            href="https://github.com/AkilLabs"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-purple-400 transition-colors duration-300 flex items-center space-x-2 group"
          >
            <Github className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
            <span className="hidden sm:inline">GitHub</span>
          </a>
          <a
            href="https://linkedin.com/in/akil-a-"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-purple-400 transition-colors duration-300 flex items-center space-x-2 group"
          >
            <Linkedin className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
            <span className="hidden sm:inline">LinkedIn</span>
          </a>
          <a
            href="mailto:akilaskarali@gmail.com"
            className="text-white/70 hover:text-purple-400 transition-colors duration-300 flex items-center space-x-2 group"
          >
            <Mail className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
            <span className="hidden sm:inline">Email</span>
          </a>
        </div>
        <p className="text-white/50 text-sm text-center mt-4">
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
<SectionLayout className="w-full items-center">
  <div className="relative w-full mb-20 md:mb-0">
    {/* Profile Photo Circle Container */}
<div className="absolute right-52 top-32 md:top-28">
      <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-gray-200 shadow-lg">
        <img
          src="/images/profile.jpg"
          alt="Akil A Profile"
          className="w-full h-full object-cover"
        />
      </div>
    </div>

    <div className="w-full px-4 flex flex-col space-y-4 text-sm md:space-y-11 md:pb-0 md:text-lg">
      <SubHeading dark align={Align.Left}> {/* Changed back to Left */}
        About
      </SubHeading>

      <Heading size="sm" dark className="font-extrabold flex flex-col items-start"> {/* Changed to items-start */}
        <span>    Akil A</span>
        <span>    GenAI | Python Developer |</span>
        <span>    UI Designer</span>
      </Heading>

      
      <p className="w-full whitespace-nowrap md:w-1/2 text-left pl-4 md:pl-6">
  {`I am a Python developer, RAG model expert, and UI designer, creating elegant, AI-driven solutions for seamless user experiences.`}
</p>


<div
  className="w-full whitespace-nowrap md:w-1/2 text-left pl-4 md:pl-6"
>
  Currently, I am a Junior Software Intern,{" "}
  <span className="font-bold">focusing on the backend and developing project on AI</span>. On a
  daily basis, I work with<br></br> <MobileTechList />
  <TechList /> among others, in building a project —{" "}
  <span className="font-bold">all built from<br></br> the ground up</span>.
</div>

      
    </div>
  </div>
  <Float config={about} />
</SectionLayout>
      <Footer />
    </>
  );
}
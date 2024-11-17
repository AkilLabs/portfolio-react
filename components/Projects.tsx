import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { projects } from "./Float/config";
import Float from "./Float/Float";
import { SectionLayout } from "./Layout";
import { SplitText } from "./SplitText";
import { Heading, SubHeading } from "./Typography";
import { Align } from "./Typography/types";

// ProjectCard Component
type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  githubUrl: string;
  liveUrl: string;
  tools: string[];
};

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  description, 
  image, 
  githubUrl, 
  liveUrl, 
  tools 
}) => (
  <div className="w-full mb-16 relative">
    <div className="group relative">
      <div className="absolute inset-0 backdrop-blur-md rounded-lg" />
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-lg opacity-20" />

      <div className="relative border border-white/10 rounded-lg shadow-lg overflow-hidden 
                      hover:shadow-xl transition-all duration-300">
        <div className="relative w-full h-64">
          <img
            src={image}
            alt={`${title} Preview`}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6 backdrop-blur-sm bg-transparent">
          <h3 className="text-white text-xl font-semibold mb-2">{title}</h3>
          <p className="text-white mb-4">{description}</p>
          
          <div className="mb-6">
            <div className="flex flex-wrap gap-2">
              {tools?.map((tool, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 text-sm bg-[#DE5055]/20 text-[#DE5055] 
                           rounded-full border border-[#DE5055]/30"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
            <a 
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-2 bg-[#DE5055]/80 hover:bg-[#DE5055] 
                        text-white font-semibold rounded-lg shadow-md 
                        backdrop-blur-sm transition-all duration-300
                        hover:shadow-[#DE5055]/20 hover:shadow-lg
                        text-center"
            >
              GitHub
            </a>
            <a 
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-2 bg-transparent hover:bg-[#DE5055]/10 
                        text-[#DE5055] font-semibold rounded-lg shadow-md 
                        backdrop-blur-sm transition-all duration-300
                        border-2 border-[#DE5055]/80 hover:border-[#DE5055]
                        hover:shadow-[#DE5055]/20 hover:shadow-lg
                        text-center"
            >
              View
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Footer Component
const Footer: React.FC = () => (
  <div className="w-full mt-16 border-t border-white/10">
    <div className="py-8">
      <div className="flex flex-col items-center space-y-4">
        <h3 className="text-white text-lg font-semibold mb-4">Let's Connect</h3>
        
        <div className="flex space-x-6">
          <a
            href="https://github.com/AkilLabs"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-[#DE5055] transition-colors duration-300 flex items-center space-x-2 group"
          >
            <Github className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
            <span className="hidden sm:inline">GitHub</span>
          </a>
          
          <a
            href="https://linkedin.com/in/akil-a-"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-[#DE5055] transition-colors duration-300 flex items-center space-x-2 group"
          >
            <Linkedin className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
            <span className="hidden sm:inline">LinkedIn</span>
          </a>
          
          <a
            href="mailto:akilaskarali@gmail.com"
            className="text-white/70 hover:text-[#DE5055] transition-colors duration-300 flex items-center space-x-2 group"
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

// Main Writing Component
export default function Writing() {
  const projectsList = [
    {
      title: "InterviewIQ AI",
      description: "Personalized AI Interview Preparation",
      image: "/images/iq.png",  // First project image
      githubUrl: "https://github.com/AkilLabs/Interview-IQ",
      liveUrl: "https://interviewiq.yourdomain.com",
      tools: ["Python", "GenAI", "Streamlit", "Gemini", "CrewAI"]
    },
    {
      title: "Project 2",
      description: "Coming soon.",
      image: "/images/profile.jpg",  // Second project image
      githubUrl: "https://github.com/yourusername/project2",
      liveUrl: "https://project2.yourdomain.com",
      tools: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"]
    },
  ];

  return (
    <SectionLayout className="w-full items-start">
      <div className="md:max-w-2/3 flex w-full flex-col items-start space-y-11 relative">
        <SubHeading dark align={Align.Left}>
          projects
        </SubHeading>

        <div className="w-full space-y-8">
          {projectsList.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        <Footer />
      </div>
      <Float config={projects} />
    </SectionLayout>
  );
}
import { SiLinkedin } from "react-icons/si";
import { Badge } from "./Badge";
import { Clipboard } from "./Clipboard";
import { contact } from "./Float/config";
import Float from "./Float/Float";
import { openInNewTab } from "./helper";
import { SectionLayout } from "./Layout";
import { SplitText } from "./SplitText";
import { Heading, SubHeading } from "./Typography";
import { Align } from "./Typography/types";
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => (
  <div className="w-full mt-16 border-t border-white/10">
    <div className="py-8">
      <div className="flex flex-col items-center space-y-4">
        <h3 className="text-white text-lg font-semibold mb-4">Let&apos;s Connect</h3>
        
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
            href="mailto:your.akilaskarali@gmail.com"
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

export default function Contact() {
  return (
    <>
      <SectionLayout className="w-full items-start">
        <div className="md:max-w-2/3 mb-20 flex w-full flex-col items-start space-y-8 md:pb-0">
          <SubHeading dark align={Align.Left}>
            Contact
          </SubHeading>

          <div>
            <Heading size="sm" dark className="font-extrabold">
              <SplitText text="Let&apos;s keep in touch." />
            </Heading>

            <p>
              If you have an exciting opportunity for me, or if you just simply
              want to say hello, feel free to reach out!
            </p>
          </div>

          <Clipboard text="akilaskarali@gmail.com">
            <Heading dark size="xs">
              akilaskarali@gmail.com
            </Heading>
          </Clipboard>

          <div>
            Alternatively, you can also send me a message on
            <Badge
              icon={<SiLinkedin />}
              onClick={() => openInNewTab("https://linkedin.com/in/akil-a-")}
              className="ml-1"
            >
              Linkedin
            </Badge>
          </div>

          <p className="whitespace-pre-line text-sm font-bold">
            {`This site is still in the works, check back often. `}
            &#9786;
          </p>
        </div>
        <Float config={contact} />
      </SectionLayout>
      <Footer />
    </>
  );
}
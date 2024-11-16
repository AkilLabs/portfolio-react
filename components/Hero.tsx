import { home } from "./Float/config";
import Float from "./Float/Float";
import { SectionLayout } from "./Layout";
import SplitText from "./SplitText/SplitText";
import { Heading, SubHeading } from "./Typography";

export default function Home() {
  return (
    <SectionLayout className="overflow-hidden">
      <div className="md:max-w-2/3 flex w-full flex-col items-center space-y-11">
        <SubHeading dark>
          <span className="font-bold">Hello! </span>My name is
        </SubHeading>

        <Heading dark className="text-center font-extrabold">
          <SplitText text="Akil " />
        </Heading>

        <p className="text-center md:whitespace-pre-line">
          {`I am a passionate Python developer, RAG model expert, and UI designer. I love creating elegant, simple solutions to complex problems, combining web development, AI, and intuitive design to deliver seamless user experiences.`}
        </p>
      </div>
      <Float config={home} />
    </SectionLayout>
  );
}

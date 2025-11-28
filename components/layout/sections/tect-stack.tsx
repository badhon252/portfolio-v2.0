import dynamic from "next/dynamic";
import { SectionHeader } from "../section-header";

const OrbitingTechStack = dynamic(() => import("./orbiting-stack"));

export default function TechStacks() {
  return (
    <section className="bg-background px-4 py-12 md:py-16 my-10 md:my-20 flex items-center max-w-4xl mx-auto h-auto md:h-[calc(100vh-16rem)] flex-col md:flex-row">
      <SectionHeader
        title="Stack"
        description="I am a Frontend Developer with experience in various technologies. Here are some of the technologies I have worked with:"
        alignment="left"
        className="mb-8"
      />
      <OrbitingTechStack />
    </section>
  );
}

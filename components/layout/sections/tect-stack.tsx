import dynamic from "next/dynamic";

const OrbitingTechStack = dynamic(() => import("./orbiting-stack"));

export default function TechStacks() {
  return (
    <div className="max-w-4xl mx-auto ">
      <section className="md:flex items-center justify-center bg-background px-4 py-16 my-20">
        <div className="description">
          <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-black leading-none text-transparent dark:from-white dark:to-slate-900/10">
            Stack
          </span>
          <p className="text-lg text-muted-foreground w-80">
            I am a Frontend Developer with experience in various technologies.
            Here are some of the technologies I have worked with:
          </p>
        </div>
        <OrbitingTechStack />
      </section>
    </div>
  );
}

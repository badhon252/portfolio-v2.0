export interface Recommendation {
  id: string;
  author: {
    name: string;
    title: string;
    image: string;
    linkedinUrl: string;
  };
  relationship: string;
  date: string;
  content: string;
}

export const recommendations: Recommendation[] = [
  {
    id: "1",
    author: {
      name: "Ilhan Khondaker",
      title: "Frontend Engineer",
      image:
        "https://media.licdn.com/dms/image/v2/D5603AQHN3C83Dofb0Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1692160025855?e=1766016000&v=beta&t=NLvSNueQKXlTmV_tIP8gNfSbrnKYeMhaF9-zAvMEvE0",
      linkedinUrl: "https://www.linkedin.com/in/ilhan-khondaker-9a46b01b5/",
    },
    relationship: "Worked on the same team",
    date: "November 15, 2025",
    content: `I’m glad to recommend Khalid Hossain Badhon, one of the most reliable and skilled team members I’ve worked with. We worked together as frontend leads using React.js and Next.js, and during that time, we tackled many complex projects successfully.

One of the most memorable projects was PsykickClub for our client Fivos papa. At first, no one wanted to take the project because it looked like a “dark-site” concept and seemed risky. But after I initiated the work, Khalid took over and handled it exceptionally well. He understood the requirements, solved challenges with confidence, and delivered a clean, high-performance frontend experience.

Khalid is not only technically strong but also a great team player, responsible, calm under pressure, and always ready to support the team. Any company would be lucky to have him.

I confidently recommend him for any frontend or React/Next.js role.`,
  },
  {
    id: "2",
    author: {
      name: "Adnan Saif",
      title: "Team leader | Software Engineer",
      image:
        "https://media.licdn.com/dms/image/v2/D5603AQGQ4X2-uxVauA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1700074026959?e=1766016000&v=beta&t=IWAIuLE6w-I_-AaFRq58diPKgjOQiKckfZgZ6aiHO3w",
      linkedinUrl: "https://www.linkedin.com/in/adnan-saif-a6ab34204/",
    },
    relationship: "Worked with Khalid on the same team",
    date: "October 2, 2025",
    content: `I’ve had the pleasure of working closely with Khalid Hossain Badhon for almost a year, and I can confidently say he is one of the most reliable and forward thinking frontend developers I’ve collaborated with. With  years of solid experience in React.js and Next.js, he consistently delivers clean, efficient, and scalable solutions that elevate the overall quality of any project he works on.

What truly sets him apart is his strong understanding of end-to-end software solutions. He doesn’t just execute tasks, he contributes meaningful ideas, identifies improvement opportunities, and often proposes creative, practical approaches to solving complex problems. His ability to collaborate seamlessly with backend teams makes development cycles smoother and ensures cohesive product development.

Recently, I’ve also seen him excel in mentoring newcomers, guiding them with patience and clarity. His growing leadership skills are evident in the way he communicates, supports others, and takes ownership of responsibilities beyond his core role.

I highly recommend Khalid Hossain Badhon to any team looking for a skilled, proactive, and collaborative frontend engineer who brings both technical expertise and leadership potential. He will undoubtedly be a valuable asset to any organization.`,
  },
  {
    id: "3",
    author: {
      name: "Iftykhar alam ",
      title: "Web Developer",
      image:
        "https://media.licdn.com/dms/image/v2/D5603AQFxlm9rfzavyg/profile-displayphoto-crop_800_800/B56ZmcW4cyHQAI-/0/1759264869215?e=1766016000&v=beta&t=0Frc4CgVJq9y9GGKJ4RZTC2wrbO-G5zctlFMTnXeMqY",
      linkedinUrl: "https://www.linkedin.com/in/iftykhar-alam/",
    },
    relationship: "Worked with Khalid on different teams",
    date: "November 30, 2025",
    content: `I had the pleasure of working closely with Khalid Hossain Badhon, and I can confidently say he is one of the most inspiring and uplifting individuals I’ve met in the front-end development field. From my very first day at ScaleUp Ads Agency, Badhon vai welcomed me with genuine warmth and kindness, instantly making the environment comfortable and helping me feel like part of the team.

Khalid’s leadership style is something I truly admire. He motivates the entire team—not through pressure, but through encouragement, clarity, and his strong sense of responsibility. His level of mindfulness and patience creates a work atmosphere where everyone feels supported, focused, and confident in what they’re doing.

As a front-end professional, he’s sharp, disciplined, and consistently delivers high-quality work. He’s a skilled JavaScript, TypeScript, React, and Next.js developer who uses Framer Motion, shadcn/ui, and Tailwind CSS to build polished interfaces and smooth interactions. For API integration he relies on TanStack Query and AXIOS to create reliable, performant data flows. Beyond his technical expertise, his character—humble, helpful, and always willing to guide others—makes him the person everyone naturally turns to for solving technical challenges or boosting team morale.

Working with him has been a privilege, and his influence has genuinely helped me grow—both professionally and personally. I highly recommend Khalid Hossain Badhon to any team looking for a skilled developer, a steady leader, and a genuinely good human being.`,
  },
  {
    id: "4",
    author: {
      name: "Arshadul Mokaddis",
      title: "UI/UX Designer",
      image:
        "https://media.licdn.com/dms/image/v2/D5603AQEJc7BMvoPDag/profile-displayphoto-shrink_800_800/B56ZRy5qs9HwAg-/0/1737094508171?e=1766016000&v=beta&t=VZ3o919VaH9nNXe6jxWMuyUA4FK0XfeKHkjrwS6jDK8",
      linkedinUrl: "https://www.linkedin.com/in/arshadul-mokaddis/",
    },
    relationship: "Worked with Khalid Hossain on the same team",
    date: "July 10, 2025",
    content:
      "Such a brilliant Frontend Developer. As a live project client, I was truly impressed with his work. He delivered a complex game leaderboard-style design with remarkable accuracy, perfectly matching the original Figma concept. The entire task was completed in a very short time, yet with exceptional attention to detail. Truly outstanding and highly recommended.",
  },
  {
    id: "5",
    author: {
      name: "John (Fingazz) Stary",
      title:
        "Owner of Fingadelic Music, Producer, Songwriter, Engineer, and Multi-instrumentalist",
      image:
        "https://media.licdn.com/dms/image/v2/C4E03AQHYtNH1HaplwA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1516860519168?e=1766016000&v=beta&t=GelCQPr2HPxOHufeUyXPzmjUjSIM7DQ1TzbHarfHfnE",
      linkedinUrl: "https://www.linkedin.com/in/john-stary-8a1a6497/",
    },
    relationship: "Client",
    date: "November 9, 2025",
    content: `I hired him to fix an interactive film pitch website we had started. It had complexities that we could not resolve, and needed some creative, high level coding to make our idea come to life. After a detailed Zoom to explain our needs and responsive communication throughout the process, Khalid was able to get it dialed in within a reasonable time frame and kept it within our budget. Highly recommended and we will be working with him again in the future!!`,
  },
  {
    id: "6",
    author: {
      name: "Zihadul Islam",
      title:
        "Full Stack Developer (MERN) | Specializing in Building Scalable Web Applications",
      image:
        "https://media.licdn.com/dms/image/v2/D5603AQF0cKITh5LtJA/profile-displayphoto-shrink_800_800/B56ZZLa63_GQAc-/0/1745022071071?e=1766016000&v=beta&t=5bF-1fjmAdlePi2Z0Aqx6V1cMJU_LM1a8YaVh5oaoq0",
      linkedinUrl: "https://www.linkedin.com/in/zihadulislam2/",
    },
    relationship: "Worked with Khalid on the same team",
    date: "December 2, 2025",
    content:
      "I worked closely with Khalid Hossain and was consistently impressed by his frontend development skills, especially in React and Next.js. He builds clean, efficient, and scalable interfaces and always pays attention to user experience. Along with that, he has strong interest and practical knowledge in AI tools, which he uses to enhance productivity and solve complex problems. He is proactive, quick to learn, and communicates clearly. I confidently recommend him for any frontend or AI focused role.",
  },
  {
    id: "7",
    author: {
      name: "Sajjad Hossain",
      title:
        "Back End Developer | Specializing in Building Scalable Web Applications",
      image:
        "https://media.licdn.com/dms/image/v2/D5603AQFTyfo866-rJA/profile-displayphoto-crop_800_800/B56ZjmNqO0HUAI-/0/1756208998743?e=1766620800&v=beta&t=BEv2RfISAFOFtirU4Wtf8jrzI9K7Ci9tbP0djybdjZ8",
      linkedinUrl: "https://www.linkedin.com/in/sajjadsajjad/",
    },
    relationship: "Worked with Khalid on the same team",
    date: "December 2, 2025",
    content: `I had the opportunity to work with Khalid Hossain on many projects, and his expertise as a Frontend Developer has always impressed me. He demonstrates a rare combination of technical depth, design sensitivity, and leadership maturity.

Key strengths I have experienced :
• Expertise in React, Next.js, TypeScript, and component-driven architecture.
• High ownership, reliability, and consistent delivery under deadlines.
• Excellent communication and leadership qualities.
• Deep understanding of API integration and backend workflows.
• Strong in code reviews and mentoring juniors.
• Great at code optimization and handling complex logical parts of a project.

He collaborates smoothly with backend teams, solves problems efficiently, and always stays updated with best practices.

Khalid Hossain is the kind of engineer who elevates the overall quality of any team he joins. Highly recommended.`,
  },
];

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
    content: `I hired him to fix an interactive film pitch website we had started. It had complexities that we could not resolve, and needed some creative, high level coding to make our idea come to life. After a detailed Zoom to explain our needs and responsive communication throughout the process, Ibrahim was able to get it dialed in within a reasonable time frame and kept it within our budget. Highly recommended and we will be working with him again in the future!!`,
  },
  // {
  //   id: "6",
  //   author: {
  //     name: "James Wilson",
  //     title: "Director of Engineering at GlobalTech",
  //     image:
  //       "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop",
  //     linkedinUrl: "https://linkedin.com",
  //   },
  //   relationship: "Khalid's Manager",
  //   date: "March 15, 2024",
  //   content:
  //     "I have had the privilege of managing Khalid for the past two years, and I can confidently say that he is one of the most dedicated and talented engineers I have ever worked with. His technical skills are top-notch, particularly in the React ecosystem, but what truly sets him apart is his problem-solving ability and his unwavering commitment to quality. \n\nWhen we were faced with a critical deadline for our flagship product launch, Khalid stepped up and took ownership of the entire frontend architecture. He not only delivered the project on time but also ensured that the code was scalable, maintainable, and performant. He has a rare ability to balance speed with quality, never cutting corners even under pressure. \n\nBeyond his technical prowess, Khalid is an excellent communicator and a natural leader. He is always willing to mentor junior developers, conducting code reviews with empathy and insight. He fosters a collaborative environment where everyone feels valued and heard. His positive attitude is contagious, and he consistently boosts team morale, even during challenging sprints. \n\nI have seen him navigate complex technical challenges with ease, breaking down large problems into manageable tasks and executing them with precision. He is also highly adaptable, quickly learning new technologies and integrating them into our workflow to improve efficiency. For example, he introduced us to a new state management library that reduced our boilerplate code by 40%. \n\nIn summary, Khalid is a complete package—a brilliant engineer, a thoughtful mentor, and a reliable team player. Any organization would be lucky to have him, and I have no doubt that he will continue to achieve great things in his career.",
  // },
];

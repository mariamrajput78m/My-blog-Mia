export const profile = {
  name: "Mariam Mudassar",
  title: "Computer Science Student · Aspiring Software Developer",
  tagline: "Building things with C++, curiosity, and a stubborn love of clean logic.",
  about:
    "I'm Mariam, a Computer Science student at the University of Lahore with a strong interest in software development and C++ programming. I'm passionate about problem solving and learning modern software development technologies, and I'm looking for a summer internship to apply my academic knowledge in a real-world environment and gain hands-on experience.",
  email: "mariamrajput78m@gmail.com",
  phone: "+92 325 9692304",
  location: "Sheikhupura, Lahore, Pakistan",
  github: "https://github.com/mariamrajput78m",
  linkedin: "https://www.linkedin.com/in/mariam-mudassar-63b3723b7",
  resumeUrl: "/resume.pdf"
};

export const stats = [
  { label: "Years Coding", value: 2, suffix: "+" },
  { label: "Projects Built", value: 3, suffix: "" },
  { label: "Languages Spoken", value: 2, suffix: "" },
  { label: "Lines of C++ Debugged", value: 10, suffix: "k+" }
];

export const education = [
  {
    id: "edu-1",
    title: "BS Computer Science",
    place: "University of Lahore",
    period: "2024 — Present",
    description:
      "Core coursework in programming fundamentals, data structures, and object-oriented software design, building toward a specialization in backend systems."
  },
  {
    id: "edu-2",
    title: "F.Sc Pre-Engineering",
    place: "Algorithm Institute, Sheikhupura",
    period: "2022 — 2024",
    description:
      "Pre-engineering track with a concentration in mathematics and physics — the foundation that pulled me toward computing in the first place."
  },
  {
    id: "edu-3",
    title: "Computer Operator Course",
    place: "Superior College, Sheikhupura",
    period: "2025",
    description:
      "Hands-on certification covering office software, computer fundamentals, and practical digital literacy."
  }
];

export const skillCategories = [
  {
    id: "programming",
    label: "Programming",
    skills: ["C++", "Python (Beginner)", "Object-Oriented Programming", "Data Structures", "Algorithms"]
  },
  {
    id: "tools",
    label: "Tools",
    skills: ["File Handling", "MS Office", "Git & GitHub", "VS Code"]
  },
  {
    id: "soft",
    label: "Soft Skills",
    skills: ["Problem Solving", "Creative Thinking", "Team Collaboration", "Communication"]
  },
  {
    id: "languages",
    label: "Languages",
    skills: ["English", "Urdu"]
  }
];

export const projects = [
  {
    id: "guessing-game",
    title: "Guessing Game",
    description:
      "A console-based game where the user guesses a randomly generated number with hints, built to practice control flow, randomization, and clean user interaction in C++.",
    stack: ["C++", "OOP", "Console I/O"],
    github: "https://github.com/mariamrajput78m",
    demo: "",
    image: "guessing-game"
  },
  {
    id: "university-management-system",
    title: "University Management System",
    description:
      "A C++ system to manage student records and course enrollment, using file handling and object-oriented principles to model a real academic workflow end-to-end.",
    stack: ["C++", "File Handling", "OOP", "Data Structures"],
    github: "https://github.com/mariamrajput78m",
    demo: "",
    image: "university-management"
  },
  {
    id: "library-management-system",
    title: "Library Management System",
    description:
      "A C++ system that manages book records with issue and return tracking, using structured file handling for persistent storage of inventory and member data.",
    stack: ["C++", "File Handling", "Data Structures"],
    github: "https://github.com/mariamrajput78m",
    demo: "",
    image: "library-management"
  }
];

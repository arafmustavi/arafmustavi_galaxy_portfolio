export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  image: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "Inter-Stellar",
    description: "An inter-bank settlement system proof of concept using r3 Corda blockchain technology. Designed to streamline financial transactions between banking institutions.",
    technologies: ["Blockchain", "r3 Corda", "Fintech", "Java"],
    githubUrl: "https://github.com/arafMustavi/Inter-Stellar",
    image: "https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 2,
    title: "IR-Sensor-Piano",
    description: "A contactless air gesture-based piano built with Atmega32 microcontroller. Uses infrared sensors to detect hand movements and translate them into musical notes.",
    technologies: ["Atmega32", "C++", "Embedded Systems", "Electronics"],
    githubUrl: "https://github.com/arafMustavi/IR-Sensor-Piano",
    image: "https://images.pexels.com/photos/1389429/pexels-photo-1389429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 3,
    title: "AutoTextTyper",
    description: "An auto repetitive comment generator kit designed to automate text input across various platforms. Useful for testing and automating repetitive typing tasks.",
    technologies: ["Python", "Automation", "GUI", "Text Processing"],
    githubUrl: "https://github.com/arafMustavi/AutoTextTyper",
    image: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 4,
    title: "Video Frame Extractor",
    description: "Tool for extracting frames from videos to generate image-based datasets. Essential for computer vision projects and machine learning model training.",
    technologies: ["Python", "OpenCV", "Computer Vision", "Data Processing"],
    githubUrl: "https://github.com/arafMustavi/Video-Frame-Extractor",
    image: "https://images.pexels.com/photos/2726370/pexels-photo-2726370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

export default projectsData;
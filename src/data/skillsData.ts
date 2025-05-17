export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  proficiency: number;
}

const skillsData: SkillCategory[] = [
  {
    category: "Programming Languages",
    skills: [
      { name: "Python", proficiency: 95 },
      { name: "C++", proficiency: 85 },
      { name: "JavaScript", proficiency: 80 },
      { name: "R", proficiency: 75 }
    ]
  },
  {
    category: "Machine Learning & AI",
    skills: [
      { name: "Deep Learning", proficiency: 90 },
      { name: "NLP", proficiency: 85 },
      { name: "Computer Vision", proficiency: 85 },
      { name: "MLOps", proficiency: 80 }
    ]
  },
  {
    category: "Data & Tools",
    skills: [
      { name: "SQL", proficiency: 90 },
      { name: "Power BI", proficiency: 85 },
      { name: "Tableau", proficiency: 80 },
      { name: "Hadoop", proficiency: 70 }
    ]
  },
  {
    category: "Other Technologies",
    skills: [
      { name: "Blockchain", proficiency: 80 },
      { name: "RPA", proficiency: 85 },
      { name: "OpenCV", proficiency: 90 },
      { name: "Cloud Services", proficiency: 75 }
    ]
  }
];

export default skillsData;
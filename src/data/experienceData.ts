export interface Experience {
  id: number;
  title: string;
  company: string;
  period: string;
  location: string;
  description: string[];
}

const experienceData: Experience[] = [
  {
    id: 1,
    title: "Analyst, IDT Operations",
    company: "British American Tobacco Bangladesh",
    period: "2022 - Present",
    location: "Dhaka, Bangladesh",
    description: [
      "Leading the development of automation pipelines to streamline operations and increase efficiency",
      "Creating comprehensive business intelligence solutions utilizing Power BI and scripting languages",
      "Designing and implementing data-driven strategies resulting in significant operational improvements",
      "Collaborating with cross-functional teams to identify and implement technical solutions to complex business problems"
    ]
  },
  {
    id: 2,
    title: "Global Graduate - IDT",
    company: "British American Tobacco Bangladesh",
    period: "2021 - 2022",
    location: "Dhaka, Bangladesh",
    description: [
      "Participated in BAT's Global Graduate Programme focusing on Information Digital Technology",
      "Worked on digital transformation initiatives and technology implementation projects",
      "Gained comprehensive understanding of enterprise IT systems and digital solutions"
    ]
  },
  {
    id: 3,
    title: "Machine Learning Engineer",
    company: "ACI Limited",
    period: "2020 - 2021",
    location: "Dhaka, Bangladesh",
    description: [
      "Developed and deployed machine learning models for business process optimization",
      "Implemented data-driven solutions for improving operational efficiency",
      "Collaborated with cross-functional teams to identify and solve complex business problems"
    ]
  },
  {
    id: 4,
    title: "Blockchain Engineer",
    company: "EMALI",
    period: "2020 - 2021",
    location: "Remote (Hong Kong Team)",
    description: [
      "Worked remotely with Hong Kong-based team on blockchain solutions",
      "Developed and implemented distributed ledger technologies",
      "Contributed to the design and implementation of blockchain-based applications"
    ]
  },
  {
    id: 5,
    title: "Data Science Intern",
    company: "Nestlé Bangladesh",
    period: "2020",
    location: "Dhaka, Bangladesh",
    description: [
      "Analyzed large datasets to derive meaningful business insights",
      "Assisted in developing data-driven solutions for business optimization",
      "Collaborated with the data science team on various analytical projects"
    ]
  },
  {
    id: 6,
    title: "Blockchain Intern",
    company: "Technohaven",
    period: "2020",
    location: "Dhaka, Bangladesh",
    description: [
      "Gained hands-on experience with blockchain technologies",
      "Assisted in the development of blockchain-based solutions",
      "Participated in research and implementation of distributed ledger systems"
    ]
  }
];

export default experienceData;
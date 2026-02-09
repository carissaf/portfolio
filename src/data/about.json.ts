import type { IAbout } from "../components/models/about";

const aboutData: IAbout = {
  desc: "Hello! I’m Carissa Fabellina, an aspiring Data Engineer who loves turning raw data into reliable, well-structured systems. I enjoy working on data pipelines, automation, and performance optimization, and I’m always eager to learn new technologies in the data ecosystem. I also care deeply about design. I believe that good engineering shouldn’t stop at functionality—how something looks and feels matters too. That’s why I enjoy combining technical problem-solving with a design-driven mindset to build solutions that are both powerful and pleasant to use.",
  experience: [
    {
      date: "Feb 2025 - Feb 2026",
      position: "Data Engineer Intern",
      where: "Blibli.com",
      elaboration:
        "During my internship as a Data Engineer at Blibli.com, I created and managed data pipelines to extract and load data into the data warehouse. I developed an automated pipeline to apply BigQuery partitioning and clustering recommendations, significantly improving query performance and cost efficiency by reducing bytes billed by approximately 51.3% and slot ms usage by around 37.7%. This solution included a validation layer using Cloud Functions and Gemini to analyze historical BigQuery jobs and table metadata. I also built a Looker Studio dashboard to monitor and visualize the impact of these optimizations, implemented Medallion Architecture within the Data Engineering team’s internal lineage metadata platform, and contributed to the migration of the internal platform from Vue 2 to Vue 3.",
    },
    {
      date: "Sep 2023 - Jan 2025",
      position: "Part-Time Software Laboratory Assistant",
      where: "BINUS Laboratory Center Alam Sutera",
      elaboration:
        "Responsible for teaching several classes for computer science and information systems major in Bina Nusantara University. These classes include COMP6047001-Algorithm and Programming, ISYS6197003-Business Application Development, ISYS6123003-Introduction to Database Systems, COMP6584001-Network and System Programming, COMP6048001-Data Structures, and more. In this position, I also handle case-making and correction. ",
    },
    {
      date: "Sep 2024 - Jan 2025",
      position: "Scholarship Tutor Odd Semester 2024/2025",
      where: "BINUS Student Advisory and Support Center",
      elaboration:
        "Received 16 credits scholarship during Odd Semester 2024/2025. Responsible to teach algorithm and programming for School of Computer Science freshmen.",
    },
    {
      date: "Sep 2023 - Jan 2024",
      position: "Scholarship Mentor Odd Semester 2023/2024",
      where: "BINUS Student Advisory and Support Center",
      elaboration:
        "Received 16 credits scholarship during Odd Semester 2023/2024. Responsible to assist four colleagues academically, such as helping them catch up with current courses, guiding them to excel their courses",
    },
  ],
  certificates: [
    {
      title: "Best Performing Part-Time Assistant",
      imgUrl: "/src/assets/certificates/certificate_bestperforming.jpg",
    },
    {
      title: "Excellent Achievement Scholarship Mentor Odd Semester 2023/2024",
      imgUrl: "/src/assets/certificates/certificate_scholarshipmentor.jpg",
    },
    {
      title: "1st Place Techfest UI/UX Competition",
      imgUrl: "/src/assets/certificates/certificate_techfest.png",
    },
    {
      title: "Best Participant SISTECH",
      imgUrl: "/src/assets/certificates/certificate_sistech.jpg",
    },
  ],
};

export default aboutData;

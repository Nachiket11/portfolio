const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Nachiket's Portfolio",
  description: "Creating an impact with end to end products.",
  og: {
    title: "Nachiket Deshpande Portfolio",
    type: "website",
    url: "http://sujeetjawale.me/",
  },
};

//Home Page
const greeting = {
  title: "Hi, I’m Nachiket",
  logo_name: "Nachiket Deshpande",
  nickname: "Project Manager – NPI, Quality Systems & Ops",
  subTitle:
    "Turning Vision into Action - Bridging Product, Process, and People",
  resumeLink:
    "https://drive.google.com/file/d/1vri9vI3Qj0q3ZOU91gU7OnG0QbttnNKe/view?usp=sharing",
  portfolio_repository: "https://github.com/Nachiket11/nachiket_portfolio/",
  githubProfile: "https://github.com/Nachiket11",
};

const socialMediaLinks = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/nachiketdeshpande11/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:nachiketd11@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  // {
  //   name: "Github",
  //   link: "https://github.com/Nachiket11",
  //   fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
  //   backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  // },
];

const skills = {
  data: [
    {
      title: "Project & Program Management",
      fileName: "FullStackImg",
      skills: [
        "Driving cross-functional execution across engineering, manufacturing, and supply chain to deliver high-impact projects.",
        "Experienced in Agile, Waterfall, and Hybrid project methodologies using tools like Microsoft Project, JIRA, and Confluence.",
        "Managing KPIs, OKRs, and risk mitigation plans to ensure on-time and in-scope delivery of NPI and quality initiatives.",
        "Skilled in stakeholder communication, scope control, and change management from early prototyping to ramp-up.",
      ],
      softwareSkills: [
        {
          skillName: "Confluence",
          fontAwesomeClassname: "simple-icons:confluence",
          style: {
            color: "#172B4D", // Official Confluence dark blue
          },
        },
        {
          skillName: "Trello",
          fontAwesomeClassname: "simple-icons:trello",
          style: {
            color: "#0052CC", // Trello/Atlassian blue
          },
        },
        {
          skillName: "JIRA",
          fontAwesomeClassname: "simple-icons:jira",
          style: {
            color: "#0052CC", // Jira's official brand color
          },
        },
      ],
    },
    {
      title: "New Product Introduction (NPI) & Launch Readiness",
      fileName: "CloudInfraImg",
      skills: [
        "Led process validation, PFMEA, and line trials for new vehicle programs, reducing late-stage changes and improving yield.",
        "Managed Bill of Materials (BOM), Engineering Change Orders (ECO), and ramp-up tracking to support full-scale production.",
        "Collaborated with cross-functional teams to achieve material readiness, process stability, and launch KPIs.",
      ],
      softwareSkills: [
        {
          skillName: "SAP",
          fontAwesomeClassname: "simple-icons:sap",
          style: {
            color: "#0FAAFF", // SAP brand blue
          },
        },
        {
          skillName: "JIRA",
          fontAwesomeClassname: "simple-icons:jira",
          style: {
            color: "#0052CC", // Jira's official brand color
          },
        },
        {
          skillName: "SPC for Excel",
          fontAwesomeClassname: "simple-icons:microsoftexcel",
          style: {
            color: "#217346", // Excel green
          },
        },
      ],
    },
    {
      title: "Quality Systems & Continuous Improvement",
      fileName: "DataScienceImg",
      skills: [
        "Hands-on with PPAP, APQP, SPC, and DMAIC frameworks to drive data-backed quality decisions.",
        "Led ISO 9001 audits, CAPA implementations, and internal quality assessments across global sites.",
        "Deployed lean systems and WCM audits to increase operational efficiency.",
        "Deployed SPC, Gauge R&R, and control charts to stabilize processes and reduce variation in assembly lines.",
      ],
      softwareSkills: [
        {
          skillName: "SolidWorks",
          fontAwesomeClassname: "simple-icons:dassaultsystemes",
          style: {
            color: "#DA042E", // SolidWorks red
          },
        },
        {
          skillName: "SPC for Excel",
          fontAwesomeClassname: "simple-icons:microsoftexcel",
          style: {
            color: "#217346", // Excel green
          },
        },
        {
          skillName: "ANSYS",
          fontAwesomeClassname: "simple-icons:ansys",
          style: {
            color: "#FFB71B", // ANSYS yellow
          },
        },
      ],
    },
    {
      title: "Data Analytics & Reporting",
      fileName: "CloudInfraImg",
      skills: [
        "Created project dashboards in JIRA/Confluence and Excel to improve visibility, reporting cadence, and decision-making.",
        "Designed analytical models for QC, inventory optimization, and product development insights.",
        "Used tools like Power BI, SQL, and Excel to analyze production metrics and quality outcomes.",
      ],
      softwareSkills: [
        {
          skillName: "MYSQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "Tableau",
          fontAwesomeClassname: "simple-icons:tableau",
          style: {
            color: "#E97627",
          },
        },
        {
          skillName: "Power BI",
          fontAwesomeClassname: "simple-icons:powerbi",
          style: {
            color: "#F2C811",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    // {
    //   siteName: "Leetcode",
    //   iconifyClassname: "simple-icons:leetcode",
    //   style: {
    //     color: "#ffa117",
    //   },
    //   profileLink: "https://leetcode.com/sjawale/",
    // },
    // {
    //   siteName: "HackerRank",
    //   iconifyClassname: "simple-icons:hackerrank",
    //   style: {
    //     color: "#2EC866",
    //   },
    //   profileLink: "hhttps://www.hackerrank.com/jawalesujeet10?hr_r=1",
    // },
    // {
  ],
};

const degrees = {
  degrees: [
    {
      title: "University of Southern California",
      subtitle: "Master of Science in Engineering Management",
      logo_path: "USC_logo.png",
      alt_name: "USC",
      duration: "2023-2025",
      descriptions: [
        "• Graduated in May 2025 (GPA 3.9/4)",
        "• Focus: Project Management, New Product Development",
        "• Courses: Engineering PRoject Management, Strategic Management of Technology and Innovation, Economic Analysis of Engineering Projects, Supply Chain Analytics, Leading and Managing Engineering Teams, Enterprise Wide Information Systems",
      ],
      website_link: "https://www.usc.edu/",
    },
    {
      title: "Pimpri Chinchwad College of Engineering",
      subtitle: "Bachelor of Engineering in Mechanical Engineering",
      logo_path: "pccoe_logo1.png",
      alt_name: "PCCOE",
      duration: "2018-2022",
      descriptions: [
        "• Graduated in May 2022 (GPA: 9.7/10)",
        "• Focus: Industrial Engineering, Quality.",
        "• Courses: Product Design & Development, Industrial Engineering, Mechanical Systems Design, Smart Manufacturing, Energy Engineering, Mechatronics, Metrology & Quality Control, CAD, SOM, TOM, Material Science.",
      ],
      website_link: "http://www.pccoepune.com/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "CAPM",
      subtitle: "- PMI",
      logo_path: "capm.png",
      certificate_link:
        "https://www.credly.com/badges/79950fd3-0480-4d22-bb34-be6dc94680f3/public_url",
      alt_name: "CAPM",
      color_code: "#fff",
    },
    {
      title: "Lean Six Sigma Black Belt",
      subtitle: "- The Council for Six Sigma Certification",
      logo_path: "cssc.jpg",
      certificate_link:
        "https://drive.google.com/file/d/1w68knFdrVxBn7LZ9UJy0tum41ZxHi_WZ/view?usp=drive_link",
      alt_name: "LSSBB",
      color_code: "#fff",
    },
    {
      title: "ISO 9001:2015 Lead Auditor",
      subtitle: "- DNV",
      logo_path: "dnv.png",
      certificate_link:
        "https://drive.google.com/file/d/1g8JvxX4IRVIzya_d-qOpRvlUAB3mzP7p/view?usp=drive_link",
      alt_name: "Java",
      color_code: "#fff",
    },
    {
      title: "Python for Everybody",
      subtitle: "- Charles Severance",
      logo_path: "MICH_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/EZTAS3B9HT6L",
      alt_name: "Coursera",
      color_code: "#0C9D5899",
    },
    {
      title: "Google Cloud Fundamentals: Core Infrastructure",
      subtitle: " - Google Cloud Training",
      logo_path: "google_cloud.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/records/6HZ7QN8VQ7AH",
      alt_name: "Coursera",
      color_code: "#0C9D5899",
    },
    {
      title:
        "Capstone: Retrieving, Processing, and Visualizing Data with Python",
      subtitle: "- Charles Severance",
      logo_path: "MICH_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/L9DEHWW2QANY",
      alt_name: "Coursera",
      color_code: "#0C9D5899",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I’ve worked in fast paced environments from global manufacturing giants to high impact startups, managing cross-functional engineering projects, launching quality systems, and leading new product introductions. These roles strengthened my ability to solve complex problems, drive continuous improvement, and deliver results under pressure.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Quality Systems Engineering Intern",
          company: "Tesla",
          company_url: "https://www.tesla.com/",
          logo_path: "tesla.jpg",
          duration: "May 2024 - August 2024",
          location: "Lathrop, California, US",
          description: [
            "Spearheaded 8D-based CAPA for recurring NPI defects using 5 Whys & fishbone analysis, cutting failure recurrence by 22%.",
            "Conducted internal audits for NPI, change management, and inventory, driving a 22% boost in improvement initiatives.",
            "Deployed WCM and lean dashboards via JIRA/Confluence and improved reporting cadence and process visibility by 35%.",
            "Trained 20+ technicians on PFMEA and 5S, elevating audit readiness and reducing line-side incidents",
          ],
          color: "#0879bf",
        },
        {
          title: "Founding Member - Senior Manager",
          company: "ABS Certifications India Pvt. Ltd.",
          company_url: "https://abscipl.com/",
          logo_path: "ABS.jpg",
          duration: "October 2021 - August 2023",
          location: "Pune, Maharashtra, India",
          description: [
            "Built ISO 9001, 13485, 14001 & IATF certification operations across 6 countries, managing 4100+ global clients.",
            "Led QMS audits and CAPA for 80+ companies, achieving 30% reduction in quality process deviations.",
            "Implemented KPI dashboards and agile workflows, cutting project turnaround time by 15% and enhanced stakeholder alignment.",
            "Streamlined global documentation and compliance with NABCB, ensuring 100% audit success rate.",
          ],
          color: "#0879bf",
        },
        {
          title: "TPM Intern",
          company: "TATA Motors",
          company_url: "https://www.tatamotors.com/",
          logo_path: "tata.png",
          duration: "August 2021 - October 2021",
          location: "Pune, Maharashtra, India",
          description: [
            "Validated line processes with PFMEA, capability studies, and PPAP, ensuring robust pre-launch quality.",
            "Reduced engineering change delays by 28% through BOM optimization and PLM-based ECO tracking.",
            "Performed Gauge R&R and torque audits, enhancing data reliability and reduced process errors from 12% to 5%.",
          ],
          color: "#D83B01",
        },
        {
          title: "Supply Chain Management Intern",
          company: "Ramasa Cranes Pvt. Ltd.",
          company_url:
            "https://www.linkedin.com/company/ramasa-cranes-private-limited/",
          logo_path: "ramasa_cranes_private_limited_logo.jpg",
          duration: "Octrober 2020 - July 2021",
          location: "Pune, Maharashtra, India",
          description: [
            "Analyzed vendor performance and procurement lead times, reducing average sourcing delays by 18%.",
            "Implemented a reorder point inventory model, optimizing raw material stock levels and avoiding production halts.",
            "Assisted in ERP based tracking of purchase orders, improving visibility into order status and payment cycles.",
          ],
          color: "#D83B01",
        },
        {
          title: "Quality Engineer Intern",
          company: "SAM Integrations India Pvt. Ltd.",
          company_url:
            "https://www.linkedin.com/company/sam-integration/about/",
          logo_path: "sam_integrations_private_limited_logo.jpg",
          duration: "August 2020 - October 2020",
          location: "Pune, Maharashtra, India",
          description: [
            "Developed full PPAP documentation for Fuel Sender component successfully approved by Tier-1 automotive OEM.",
            "Built a part-tasking and traceability system to streamline component tracking, reducing quality errors by 40%.",
            "Coordinated with supplier and design teams to align documentation with engineering revisions and quality standards.",
            "Participated in non-conformance resolution through dimensional audits and visual inspection methods.",
          ],
          color: "#D83B01",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Art of Living AOL",
          company: "AOL - Social Service",
          company_url: "http://www.pccoepune.com/",
          logo_path: "AOL.png",
          duration: "August 2023 - May 2025",
          location: "Los Angeles, California",
          description:
            " I organized various spiritual gatherings and meditation workshops, fostering community and personal growth. My role was pivotal in creating serene environments for attendees to explore mindfulness and inner peace.",
          color: "#D83B01",
        },
        {
          title: "Training and Placement Cell (Overall Volunteer)",
          company: "PCCOE",
          company_url: "http://www.pccoepune.com/",
          logo_path: "pccoe_logo1.png",
          duration: "June 2019 - June 2021",
          location: "Pune, Maharashtra, India",
          description:
            "Manages and coordinates recruitment drives by meticulously organizing and overseeing every phase of the process. This includes scheduling and conducting preliminary meetings, administering aptitude tests to assess candidates' skills, and facilitating comprehensive interviews. Works closely with a team of volunteers to ensure all logistical aspects are handled efficiently, from the initial outreach to potential candidates through to the final panel interviews. This role involves coordinating various elements such as preparing assessment materials, arranging interview schedules, and ensuring effective communication between candidates and the recruitment team. By managing these processes, the aim is to create a seamless and efficient recruitment experience, ultimately attracting and selecting the best talent for the organization.",
          color: "#D83B01",
        },
      ],
    },
    {
      title: "Hobbies",
      experiences: [
        {
          title: "Gym",
          company: "",
          logo_path: "gym_logo.jpg",
          description:
            "I enjoy Gyming as a sport. I spend atleast 2 hours a day in gym 5 times a week. Do a high-intensity workout and it's a good way to relax and feel good.",
          color: "#D83B01",
        },
        {
          title: "Volleyball",
          company: "",
          logo_path: "volleyball.jpg",
          description:
            "I enjoy playing Volleyball. I have participated State and National level tournaments.",
          color: "#D83B01",
        },
        {
          title: "Trekking",
          company: "",
          logo_path: "trekking.jpg",
          description:
            "Always been a Nature Lover. On weekends, I love going on long Treks with my friends. We all trek for different reasons, and sometimes for all the reasons: fun, adventure, to bond with friends, to relax, meditation, to make the commute more interesting,. The reasons are infinite.",
          color: "#D83B01",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "Through my projects, I aim on solving real world problems. My projects makes use of vast variety of latest technology tools.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "pp.png",
    description:
      "Open to work as a Project Manager, New Product Introduction (NPI) Engineer, or Quality Engineer.",
      description2: "You can get in touch with me on my email :)",

  },

  addressSection: {
    title: "Email Address",
    subtitle: "nachiketd11@gmail.com",
    email2: "nachiket@usc.edu",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/MpMqtRZytFchMkZ76",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+1(213)7791785/+(91)9665957586",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};

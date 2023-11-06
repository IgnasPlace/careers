import Search from "@/components/ui/Search";

const jobFields = [
  "3D Animation",
  "3Dmax",
  "ABAP",
  "ABB Robot Studio",
  "Abstract",
  "Acceptance testing",
  "Access",
  "Accessibility",
  "Account Management",
  "Accountability",
  "Accounting",
  "Accuracy",
];

const locations = [
  "Spain",
  "Germany",
  "France",
  "United States",
  "Japan",
  "Denmark",
  "Sweden",
  "Canada",
  "United Kingdom",
  "Vietnam",
  "India",
  "Australia",
  "New Zealand",
];

const jobsList = [
  {
    id: "20380",
    title: "System Engineer - Aerospazio [italian speaker mandatory]",
    description: [
      {
        title: "As a regulatory affairs specialist you will be responsible for",
        fields: [
          "Preparing and updating technical regulatory documents according to documentation standard.",
          "Creation, review and approval of regulatory requirements and technical files.",
          "Maintenance of regulatory documents in document-management systems (e.g., Documentum) and document-sharing systems (e.g., SharePoint).",
        ],
      },
      {
        title: "The Ideal Profile",
        fields: [
          "You have received an engineering degree or equivalent.",
          "More than 1year of experience within the Medical device industry on Q&R related activities",
          "You are proactive, have good communication skills, and are able to change people mind-set in the way of efficient working.",
        ],
      },
    ],
    location: {
      country: "Netherlands",
      city: "Eindhoven",
    },
    languages: ["English"],
    jobFields: ["CAPA", "Quality Management", "Lean 6sigma"],
    createdAt: "03/05/2023",
  },
  {
    id: "24937",
    title: "HCMC - .NET Developer (Junior / Middle)",
    description: [
      {
        title: "About the job",
        fields: [
          "Develop and maintain software systems based on Microsoft .NET and related technologies.",
          "Confer with system analysts, programmers and others to design system and to obtain information on project limitations and capabilities, performance requirements and interfaces.",
          "Develop and direct software system testing and validation procedures, programming and documentation.",
        ],
      },
      {
        title: "About you",
        fields: [
          "Academic degree in Information Technology, Software Engineering or related technical fields.",
          "2-4 years of working experience in .NET web technologies (.NET 5/6, .NET Core, .NET Framework, ASP.NET, etc.).",
          "Be able to work at Front-end with HTML5, CSS3 and Bootstrap.",
          "Experience with JavaScript (Angular / ReactJS / VueJS) will be a great plus.",
        ],
      },
    ],
    location: {
      country: "Vietnam",
      city: "Ho Chi Minh City",
    },
    languages: ["English", "Vietnamese"],
    jobFields: ["Javascript", "C#", "Object-oriented programming", "SOLID"],
    createdAt: "10/05/2023",
  },
];

const Jobs = () => {
  return (
    <main className=" min-h-screen bg-color2">
      <div className=" h-12 bg-color1"></div>
      <div className="max-w-[1400px] mx-auto -mt-10">
        <Search jobFields={jobFields} locations={locations} />
        
      </div>
    </main>
  );
};

export default Jobs;

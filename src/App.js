import { useState } from "react";
import "./App.css";
import Buttons from "./Components/Buttons";
import JobCard from "./Components/JobCard";
import JobListing from "./Components/JobListing";
import { Routes, Route } from "react-router-dom";
import JobDetails from "./Components/JobDetails";
import Filter from "./Components/Filter";

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [dropDown, setDropDown] = useState("All");
  const jobsPerPage = 4;

  const jobs = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "Google",
      location: "Remote",
      salary: "₹12 LPA",
      description: `We are looking for a skilled Frontend Developer with experience in React and TypeScript. You'll build scalable UI components and collaborate with backend and design teams.`,
      requirements: [
        "3+ years of experience in frontend development",
        "Strong knowledge of React, JavaScript, and CSS",
        "Experience with TypeScript and REST APIs",
      ],
      responsibilities: [
        "Develop responsive web interfaces",
        "Write reusable React components",
        "Work with designers to translate UI/UX into code",
      ],
      postedDate: "2025-06-30",
      jobType: "Full-time",
      experienceLevel: "Mid-Level",
    },
    {
      id: 2,
      title: "Backend Developer",
      company: "Amazon",
      location: "Bangalore",
      salary: "₹15 LPA",
      description: `Join our backend engineering team to develop high-performance REST APIs using Node.js and Express. You’ll work with databases and scalable services.`,
      requirements: [
        "Proficient in Node.js, Express.js",
        "Experience with MongoDB or PostgreSQL",
        "Understanding of authentication and middleware",
      ],
      responsibilities: [
        "Design and build RESTful APIs",
        "Integrate third-party APIs",
        "Optimize server performance",
      ],
      postedDate: "2025-07-01",
      jobType: "Full-time",
      experienceLevel: "Mid-Level",
    },
    {
      id: 3,
      title: "Full Stack Engineer",
      company: "Microsoft",
      location: "Hyderabad",
      salary: "₹18 LPA",
      description: `Work across the frontend and backend of our product using the MERN stack. You’ll build features end-to-end and ensure smooth integration between services.`,
      requirements: [
        "Proficiency in MongoDB, Express, React, Node.js",
        "Strong debugging and problem-solving skills",
        "Good understanding of DevOps tools",
      ],
      responsibilities: [
        "Develop full-stack features from scratch",
        "Collaborate with cross-functional teams",
        "Write unit and integration tests",
      ],
      postedDate: "2025-06-28",
      jobType: "Full-time",
      experienceLevel: "Senior-Level",
    },
    {
      id: 4,
      title: "Data Analyst",
      company: "Flipkart",
      location: "Remote",
      salary: "₹10 LPA",
      description: `We are hiring a Data Analyst to turn data into actionable insights. You should be skilled in Python, SQL, and visualization tools like Power BI.`,
      requirements: [
        "Strong knowledge of SQL and Excel",
        "Experience with Python (Pandas, NumPy)",
        "Knowledge of Power BI/Tableau",
      ],
      responsibilities: [
        "Analyze trends and performance metrics",
        "Build dashboards and reports",
        "Collaborate with product and marketing teams",
      ],
      postedDate: "2025-07-02",
      jobType: "Contract",
      experienceLevel: "Entry-Level",
    },
    {
      id: 5,
      title: "DevOps Engineer",
      company: "TCS",
      location: "Pune",
      salary: "₹14 LPA",
      description: `We are seeking a DevOps Engineer to manage CI/CD pipelines, cloud infrastructure, and deployment processes using tools like Jenkins and Docker.`,
      requirements: [
        "Experience with CI/CD tools (Jenkins, GitHub Actions)",
        "Knowledge of Docker, Kubernetes",
        "Familiarity with AWS or Azure",
      ],
      responsibilities: [
        "Maintain and automate build pipelines",
        "Monitor server health and logs",
        "Collaborate with developers for smooth deployments",
      ],
      postedDate: "2025-06-25",
      jobType: "Full-time",
      experienceLevel: "Mid-Level",
    },
    {
      id: 6,
      title: "Software Tester",
      company: "Wipro",
      location: "Chennai",
      salary: "₹8 LPA",
      description: `Join our QA team to test web applications. You should have experience in manual and automated testing using tools like Selenium.`,
      requirements: [
        "Knowledge of software testing principles",
        "Experience with Selenium or JUnit",
        "Basic knowledge of Java/Python",
      ],
      responsibilities: [
        "Write and execute test cases",
        "Report and track bugs",
        "Work closely with developers",
      ],
      postedDate: "2025-06-20",
      jobType: "Full-time",
      experienceLevel: "Entry-Level",
    },
    {
      id: 7,
      title: "Mobile App Developer",
      company: "Paytm",
      location: "Noida",
      salary: "₹13 LPA",
      description: `We are hiring React Native developers to build cross-platform mobile apps. You must have strong UI/UX understanding and native module knowledge.`,
      requirements: [
        "2+ years in React Native development",
        "Experience with mobile APIs and debugging",
        "Knowledge of native Android/iOS is a plus",
      ],
      responsibilities: [
        "Develop and deploy mobile apps",
        "Work with backend APIs",
        "Optimize performance and user experience",
      ],
      postedDate: "2025-07-01",
      jobType: "Full-time",
      experienceLevel: "Mid-Level",
    },
    {
      id: 8,
      title: "Machine Learning Engineer",
      company: "Zomato",
      location: "Remote",
      salary: "₹16 LPA",
      description: `You will build ML pipelines and recommendation systems using Python, scikit-learn, and TensorFlow.`,
      requirements: [
        "Strong understanding of ML concepts",
        "Experience with Python, scikit-learn, TensorFlow",
        "Familiarity with data pipelines and big data",
      ],
      responsibilities: [
        "Build and deploy ML models",
        "Work with large datasets",
        "Collaborate with data engineers",
      ],
      postedDate: "2025-06-27",
      jobType: "Full-time",
      experienceLevel: "Senior-Level",
    },
    {
      id: 9,
      title: "Cloud Engineer",
      company: "Infosys",
      location: "Mumbai",
      salary: "₹14 LPA",
      description: `Looking for a Cloud Engineer to manage and deploy services on AWS/Azure. You’ll work on scalability, security, and automation.`,
      requirements: [
        "Experience with AWS or Azure",
        "Understanding of networking and security",
        "Knowledge of Terraform or CloudFormation",
      ],
      responsibilities: [
        "Manage cloud-based applications",
        "Automate infrastructure with IAC tools",
        "Monitor cost and performance",
      ],
      postedDate: "2025-06-29",
      jobType: "Full-time",
      experienceLevel: "Mid-Level",
    },
    {
      id: 10,
      title: "UI/UX Designer",
      company: "Swiggy",
      location: "Remote",
      salary: "₹11 LPA",
      description: `We are seeking a creative UI/UX Designer to craft beautiful and functional interfaces. You must have experience with Figma and user research.`,
      requirements: [
        "Proficiency in Figma, Adobe XD",
        "Understanding of user psychology",
        "Portfolio of past design projects",
      ],
      responsibilities: [
        "Design wireframes and mockups",
        "Conduct usability testing",
        "Collaborate with developers",
      ],
      postedDate: "2025-07-02",
      jobType: "Full-time",
      experienceLevel: "Mid-Level",
    },
  ];
  const filteredJobs =
    dropDown === "All" ? jobs : jobs.filter((job) => job.jobType === dropDown);

  const searchedJobs = filteredJobs.filter(
    (job) =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const totalPages = Math.ceil(searchedJobs.length / jobsPerPage);
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = searchedJobs.slice(indexOfFirstJob, indexOfLastJob);

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const backgroundStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL + "/background.png"})`,
    backgroundSize: "400px",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    minHeight: "100vh",
  };
  const overlayStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    position: "relative",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 0,
  };

  return (
    <div style={backgroundStyle}>
      <div style={overlayStyle}>
        <Routes>
          <Route
            path="/"
            element={
              <div className="container my-4">
                <JobListing />
                <div className="d-flex justify-content-center mb-4">
                  <div
                    className="d-flex gap-2"
                    style={{ maxWidth: "700px", width: "100%" }}
                  >
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search job title or company..."
                      value={searchTerm}
                      onChange={(e) => {
                        setSearchTerm(e.target.value);
                        setCurrentPage(1);
                      }}
                    />
                  </div>
                  <Filter
                    dropDown={dropDown}
                    onTypeChange={(type) => {
                      setDropDown(type);
                      setCurrentPage(1);
                    }}
                  />
                </div>
                <div className="row">
                  {currentJobs.length === 0 ? (
                    <div className="text-center text-danger fw-bold fs-5 my-5">
                      Oops! We couldn't find any job listings that match your
                      search. Try adjusting your filters or check back later for
                      new opportunities!
                    </div>
                  ) : (
                    currentJobs.map((job) => <JobCard key={job.id} job={job} />)
                  )}
                </div>
                {currentJobs.length > 0 && (
                  <Buttons
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onNext={handleNext}
                    onPrevious={handlePrevious}
                  />
                )}
              </div>
            }
          />
          <Route path="/jobs/:id" element={<JobDetails jobs={jobs} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

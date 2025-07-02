import React from "react";
import { useParams } from "react-router-dom";

function JobDetails({ jobs }) {
  const { id } = useParams();
  const job = jobs.find((j) => j.id === parseInt(id));

  if (!job) {
    return (
      <div className="container mt-5">
        <h3>Job not found</h3>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h2>{job.title}</h2>
      <h4 className="text-muted">{job.company}</h4>
      <p className="mb-1">
        <strong>Location:</strong> {job.location}
      </p>
      <p className="mb-1">
        <strong>Salary:</strong> {job.salary}
      </p>
      <p className="mb-1">
        <strong>Job Type:</strong> {job.jobType}
      </p>
      <p className="mb-1">
        <strong>Experience Level:</strong> {job.experienceLevel}
      </p>
      <p className="mb-1">
        <strong>Posted Date:</strong> {job.postedDate}
      </p>

      <hr />

      <h5>Description:</h5>
      <p>{job.description}</p>

      <h5>Requirements:</h5>
      <ul>
        {job.requirements.map((req, index) => (
          <li key={index}>{req}</li>
        ))}
      </ul>

      <h5>Responsibilities:</h5>
      <ul>
        {job.responsibilities.map((res, index) => (
          <li key={index}>{res}</li>
        ))}
      </ul>
    </div>
  );
}

export default JobDetails;

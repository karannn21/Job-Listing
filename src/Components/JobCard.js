import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

function JobCard({ job }) {
  const navigate = useNavigate();

  const handleApplyClick = (e) => {
    e.stopPropagation();
    navigate(`/jobs/${job.id}`);
  };

  const handleCardClick = () => {
    navigate(`/jobs/${job.id}`);
  };

  return (
    <div
      className="col-md-6 col-lg-4 d-flex align-items-stretch mb-4"
      onClick={handleCardClick}
    >
      <div
        className="card border-0 shadow-sm w-100"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.6)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          borderRadius: "20px",
          transition: "transform 0.2s ease",
          cursor: "pointer",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        <div className="card-body">
          <h5 className="card-title text-primary fw-bold">{job.title}</h5>
          <h6 className="card-subtitle mb-3 text-muted">{job.company}</h6>

          <p className="card-text mb-2">
            <i className="bi bi-geo-alt-fill text-secondary me-2"></i>
            <strong>Location:</strong> {job.location}
          </p>

          <p className="card-text mb-3">
            <i className="bi bi-briefcase-fill text-secondary me-2"></i>
            <strong>Type:</strong> {job.jobType}
          </p>

          <p className="card-text text-muted small">
            {job.description.slice(0, 80)}...
          </p>

          <button
            className="btn btn-outline-primary btn-sm mt-3"
            onClick={handleApplyClick}
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default JobCard;

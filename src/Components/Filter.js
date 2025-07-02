import React from "react";

function Filter({ dropDown, onTypeChange }) {
  const jobTypes = ["All", "Full-time", "Part-time", "Remote", "Contract"];

  return (
    <div className="dropdown mb-4">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {dropDown}
      </button>
      <ul className="dropdown-menu">
        {jobTypes.map((type) => (
          <li key={type}>
            <button
              className="dropdown-item"
              onClick={() => onTypeChange(type)}
            >
              {type}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Filter;

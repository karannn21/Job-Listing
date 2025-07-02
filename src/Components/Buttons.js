import React from "react";

function Buttons({ currentPage, totalPages, onNext, onPrevious }) {
  return (
    <div className="container d-flex justify-content-around">
      <button
        type="button"
        className="btn btn-dark"
        onClick={onPrevious}
        disabled={currentPage === 1}
      >
        &larr; Previous
      </button>
      <span>
        Page {currentPage} of {totalPages}
      </span>
      <button
        type="button"
        className="btn btn-dark"
        onClick={onNext}
        disabled={currentPage === totalPages}
      >
        Next &rarr;
      </button>
    </div>
  );
}

export default Buttons;

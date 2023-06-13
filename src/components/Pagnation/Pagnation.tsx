import React from "react";
import { PagniationType } from "./types";

function Pagnation({
  page,
  onChange,
  totalPage,
  perviousPage,
  nextPage,
}: PagniationType) {
  const handlePervious = () => {
    if (perviousPage !== 1) onChange(perviousPage);
  };

  const handleNext = () => {
    if (nextPage !== totalPage) onChange(nextPage);
  };
  return (
    <div>
      <button onClick={handlePervious} type="button">
        pervious
      </button>
      <span>{page}</span>
      <button onClick={handleNext} type="button">
        next
      </button>
    </div>
  );
}

export default Pagnation;

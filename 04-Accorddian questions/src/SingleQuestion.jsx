import { useState } from "react";
import { FaCirclePlus, FaCircleMinus } from "react-icons/fa6";

const SingleQuestion = ({ id, title, info, activeId, toggleFunction }) => {
  const isActive = activeId === id;
  return (
    <>
      <article className="shadow-lg mb-4 p-3">
        <div className="flex justify-between mb-4">
          <p className="font-bold">{title}</p>
          <button onClick={() => toggleFunction(id)}>
            {isActive ? <FaCircleMinus /> : <FaCirclePlus />}
          </button>
        </div>
        {isActive && info}
      </article>
    </>
  );
};
export default SingleQuestion;

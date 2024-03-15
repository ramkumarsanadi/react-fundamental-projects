import { useState } from "react";
import SingleQuestion from "./SingleQuestion";

const Questions = ({ questionsData }) => {
  const [activeId, setActiveId] = useState(null);

  const toggleFunction = (id) => {
    const value = id === activeId ? null : id;
    setActiveId(value);
  };
  return (
    <>
      <div className="w-[80vw] my-10 p-10 bg-white mx-auto">
        <h1 className="text-3xl text-center mb-4">FAQ!</h1>
        {questionsData.map((data) => {
          return (
            <SingleQuestion
              key={data.id}
              {...data}
              activeId={activeId}
              toggleFunction={toggleFunction}
            />
          );
        })}
      </div>
    </>
  );
};
export default Questions;

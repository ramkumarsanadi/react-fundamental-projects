import { useState } from "react";
import Questions from "./Questions";
import questionsDatas from "./data";

const App = () => {
  const [questionsData, setQuestionsData] = useState(questionsDatas);
  return (
    <>
      <div className="bg-emerald-500 min-h-[100vh] flex justify-center items-center ">
        <Questions questionsData={questionsData} />
      </div>
    </>
  );
};
export default App;

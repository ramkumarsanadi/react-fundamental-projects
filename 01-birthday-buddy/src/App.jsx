import { useState } from "react";
import data from "./data";
import List from "./List";

function App() {
  const [people, setPeople] = useState(data);

  return (
    <>
      <main>
        <section className="bg-[#FAE8FF] min-h-screen flex justify-center items-center">
          <div className="bg-white p-8 my-20 mx-0 w-[90vw] max-w-[1220px] shadow-xl md:w-[50vw]">
            <h3 className="font-normal text-3xl mb-2">
              {people.length} Birthdays today
            </h3>
            <List people={people} />
            <button
              onClick={() => setPeople([])}
              className="text-white bg-pink-500 w-full"
              type="button"
            >
              Clear All
            </button>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;

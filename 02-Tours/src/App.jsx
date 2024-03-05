import { useEffect, useState } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const url = "https://course-api.com/react-tours-project";

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [tours, setTours] = useState([]);

  const removeTours = (tourId) => {
    const updatedTours = tours.filter((tour) => tour.id !== tourId);

    setTours(updatedTours);
  };

  const fetchTours = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();

      setTours(tours);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (tours.length === 0) {
    return (
      <>
        <h1 className="mb-20 text-center text-3xl font-semi-bold]">
          no tours left
        </h1>
        <button
          className="text-[#10B981] border-4 border-[#10B981] ml-[37rem]"
          onClick={fetchTours}
        >
          refresh
        </button>
      </>
    );
  }

  return (
    <main className="bg-slate-200 h-[100%] mx-auto">
      <Tours tours={tours} removeTours={removeTours} />
    </main>
  );
};
export default App;

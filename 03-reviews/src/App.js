import { useState } from "react";
import reviews from "./data";
import Review from "./Review";

const App = () => {
  const [index, setIndex] = useState(0);

  const nextReview = () => {
    setIndex((currentIndex) => {
      let newIndex = (currentIndex + 1) % reviews.length;
      return newIndex;
    });
  };

  const prevReview = () => {
    setIndex((currentIndex) => {
      const newIndex = (currentIndex - 1 + reviews.length) % reviews.length;
      return newIndex;
    });
    console.log(index);
  };

  const supriseReview = () => {
    let randomIndex = Math.floor(Math.random() * reviews.length);

    if (randomIndex === index) {
      randomIndex = index + 1;
    }

    const newIndex = randomIndex % reviews.length;
    setIndex(newIndex);
  };

  return (
    <main>
      <div className="w-[100vw] h-[100vh] bg-blue-300 flex justify-center items-center">
        <div className="w-[600px] h-[450px] bg-white rounded-3xl">
          {
            <Review
              key={reviews.id}
              reviews={reviews}
              nextReview={nextReview}
              prevReview={prevReview}
              supriseReview={supriseReview}
              index={index}
            />
          }
        </div>
      </div>
    </main>
  );
};
export default App;

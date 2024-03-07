import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";

const Review = ({ reviews, nextReview, prevReview, supriseReview, index }) => {
  const { name, id, job, image, text } = reviews[index];
  return (
    <div className="flex flex-col items-center justify-center p-5 gap-5">
      <img
        className="w-[100px] h-[100px] inline-block rounded-full "
        src={image}
        alt={name}
      />
      <p className="text-3xl">{name}</p>
      <p className="text-sm text-purple-600">{job}</p>
      <p className="text-center ">{text}</p>
      <div className="flex gap-4">
        <FaChevronLeft
          className="text-2xl text-purple-600 cursor-pointer"
          onClick={prevReview}
        />
        <FaChevronRight
          className="text-2xl text-purple-600 cursor-pointer"
          onClick={nextReview}
        />
      </div>
      <button
        className="bg-purple-600 py-2 px-3 text-white rounded-md"
        onClick={supriseReview}
      >
        Suprise Me
      </button>
    </div>
  );
};
export default Review;

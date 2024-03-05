import { useState } from "react";

const Tour = ({ id, name, info, image, price, removeTours }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <div className="w-[300px] relative flex flex-col items-start text-center mx-auto  bg-white shadow-xl mb-10">
      <img
        className="bg-cover  object-cover w-full h-[280px] inline-block m-0"
        src={image}
        alt={name}
      />
      <div className="p-5 text-left flex flex-col gap-4">
        <h2 className="text-center font-semibold text-xl">{name}</h2>
        <p>{readMore ? info : info.substring(0, 100)}</p>
        <p
          className="cursor-pointer text-blue-700"
          onClick={() => setReadMore(!readMore)}
        >
          {readMore ? "Read Less..." : "Read More..."}
        </p>
        <button
          onClick={() => removeTours(id)}
          className="mt-4 text-[#10B981] border-4 border-[#10B981] w-full"
        >
          Not Intrested
        </button>
      </div>
      <p className="absolute right-0 text-white bg-[#10B981] px-[1rem] py-[0.5rem] ">
        ${price}
      </p>
    </div>
  );
};
export default Tour;

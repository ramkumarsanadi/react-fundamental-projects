import Tour from "./Tour";

const Tours = ({ tours, removeTours }) => {
  return (
    <>
      <h1 className="mb-20 text-center text-3xl font-semi-bold]">Our Tours</h1>
      <div className="md:grid md:grid-cols-3 w-[80vw] mx-auto gap-10 items-start">
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} removeTours={removeTours} />;
        })}
      </div>
    </>
  );
};
export default Tours;

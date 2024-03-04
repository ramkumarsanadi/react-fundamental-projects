const Person = ({ person }) => {
  const { id, image, name, age } = person;
  return (
    <div className="flex gap-4 items-center mb-2">
      <img
        className="rounded-full object-cover w-[75px] h-[75px] inline-block"
        src={image}
        alt={name}
      />
      <div>
        <h4 className="text-2xl">{name}</h4>
        <p>{age}</p>
      </div>
    </div>
  );
};
export default Person;

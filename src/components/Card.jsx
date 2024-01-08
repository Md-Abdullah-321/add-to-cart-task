/* eslint-disable react/prop-types */
function Card({ id, url, name, price, description, handleClick }) {
  return (
    <div className="bg-gray p-2 rounded-md shadow-md">
      <img
        className="w-full h-40 rounded-md shadow-md"
        src={url}
        alt="food image"
      />
      <h2 className="font-semibold mt-2 text-lg">{name}</h2>
      <p className=" opacity-70">{price}/each</p>
      <p className="mt-2 opacity-85">{description}</p>

      <button
        onClick={() => handleClick(id, url, name, price)}
        className="w-full my-2 bg-primaryColor p-1 rounded-md text-white font-semibold"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default Card;

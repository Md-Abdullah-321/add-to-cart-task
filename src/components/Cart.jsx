/* eslint-disable react/prop-types */
import { FaPlusSquare, FaRegMinusSquare } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";

function Cart({
  item,
  handleIncrementQuantity,
  handleDecrementQuantity,
  handleDeleteItem,
}) {
  return (
    <div className="flex mx-1 my-2 p-2 justify-around items-center border border-white rounded-md h-28 gap-4">
      {/* image */}
      <div className="w-2/5 h-full">
        <img
          className="h-full w-full rounded-md shadow-md"
          src={item.url}
          alt="food image"
        />
      </div>
      {/* description */}
      <div className=" flex flex-col">
        <div className="flex justify-end items-start">
          <MdDeleteOutline
            className="text-xl text-white cursor-pointer"
            onClick={() => handleDeleteItem(item.id)}
          />
        </div>
        <p className="text-white text-md font-semibold">{item.name}</p>
        <p className="text-sm text-gray opacity-80">{item.price}/each</p>
        {/* buttons and prices */}
        <div className="flex justify-between items-center">
          {/* button  */}
          <div className="w-2/5 flex justify-center items-center">
            <FaRegMinusSquare
              className="text-gray text-5xl cursor-pointer"
              onClick={() => handleDecrementQuantity(item.id)}
            />
            <span className="bg-white text-sm px-1 cursor-pointer">
              {item.quantity}
            </span>
            <FaPlusSquare
              className="text-gray text-5xl"
              onClick={() => handleIncrementQuantity(item.id)}
            />
          </div>
          <p className="text-white font-semibold">
            {item.quantity * item.price}$
          </p>
        </div>
      </div>
    </div>
  );
}

export default Cart;

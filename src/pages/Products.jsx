import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import Cart from "../components/Cart";
import {
  convertToJSONAndSave,
  getCartAndTotal,
  getTotal,
} from "../helper/JSONConverter";
import productData from "./ProductData";

function Products() {
  const MyCart = getCartAndTotal();
  const [openState, setOpenState] = useState(MyCart?.length > 0 || false);
  const [cart, setCart] = useState(MyCart ? [...MyCart] : []);
  const [total, setTotal] = useState(getTotal(MyCart) || 0);

  useEffect(() => {
    setTotal(getTotal(cart));
  }, [cart]);

  const handleClick = (id, url, name, price) => {
    setOpenState(true);
    if (cart.length < 1) {
      setCart([
        {
          id,
          url,
          name,
          quantity: 1,
          price,
        },
      ]);

      setTotal((total) => total + price);
      convertToJSONAndSave(cart);
    } else {
      let isExist = false;
      cart.forEach((item) => {
        if (item.id === id) {
          item.quantity++;
          setTotal((total) => total + item.price);
          convertToJSONAndSave(cart);
          isExist = true;
        }
      });

      if (!isExist) {
        setCart([...cart, { id, url, name, quantity: 1, price }]);
        setTotal((total) => total + price);
        convertToJSONAndSave([...cart, { id, url, name, quantity: 1, price }]);
      }
    }
  };

  const handleIncrementQuantity = (id) => {
    cart.forEach((item) => {
      if (item.id === id) {
        item.quantity++;
        setTotal((total) => total + item.price);
        convertToJSONAndSave(cart);
      }
    });
  };

  const handleDecrementQuantity = (id) => {
    cart.forEach((item) => {
      if (item.id === id && item.quantity > 1) {
        item.quantity--;
        setTotal((total) => total - item.price);
        convertToJSONAndSave(cart);
      }
    });
  };

  const handleDeleteItem = (id, quantity, price) => {
    setCart((prevCart) => {
      const newItems = prevCart.filter((item) => item.id !== id);
      setTotal((total) => {
        const newTotal = total - price * quantity;
        convertToJSONAndSave(newItems);

        return newTotal;
      });

      return newItems;
    });

    if (cart.length < 2) {
      setOpenState(false);
    }
  };

  const handleClose = () => {
    setOpenState(false);
  };
  return (
    <div className="lg:h-screen md:flex">
      {/* Left side  */}
      <div className="h-full">
        <h1 className="text-center my-10 text-3xl font-semibold">
          GET YOUR FAVOURITE DISHES
        </h1>

        {
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-4/5 mx-auto"
          >
            {productData &&
              productData.map((product) => {
                return (
                  <Card
                    key={product.id}
                    id={product.id}
                    url={product.url}
                    name={product.name}
                    price={product.price}
                    description={product.description}
                    handleClick={handleClick}
                  />
                );
              })}
          </motion.div>
        }
      </div>

      {/* Right side  */}
      {openState && (
        <motion.div
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.2, type: "spring", stiffness: 100 }}
          className="w-5/6 mx-auto my-10 md:my-0 md:w-4/6 bg-primaryColor flex flex-col md:rounded-tl-md md:rounded-bl-md h-full"
        >
          <div className="h-16 bg-white border-2 border-primaryColor flex justify-between items-center p-2 md:rounded-tl-md">
            <p className="text-primaryColor font-semibold">
              {cart.length} {cart.length > 1 ? "items" : "item"}
            </p>
            <button
              className="bg-primaryColor py-1 px-2 text-white font-semibold rounded-md cursor-pointer"
              onClick={handleClose}
            >
              CLOSE
            </button>
          </div>
          {/* cart items  */}
          <motion.div
            className="h-full"
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.2, type: "spring", stiffness: 200 }}
          >
            {cart.length > 0 &&
              cart.map((item) => {
                return (
                  <Cart
                    key={item.id}
                    item={item}
                    handleIncrementQuantity={handleIncrementQuantity}
                    handleDecrementQuantity={handleDecrementQuantity}
                    handleDeleteItem={handleDeleteItem}
                  />
                );
              })}
          </motion.div>
          <div className="h-16 bg-white border-2 border-primaryColor flex justify-between items-center p-2 md:rounded-bl-lg">
            <p className="text-primaryColor font-semibold">Place Order</p>
            <p className="text-primaryColor font-semibold">{total}$</p>
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default Products;

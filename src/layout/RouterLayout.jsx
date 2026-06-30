import { NavLink, Outlet } from "react-router-dom";
// style
import "./RouterLayout.css";
// picture
import logo from "../assets/logo.jpeg";
// icons
import { PiCookingPotFill } from "react-icons/pi";
import { BiDrink } from "react-icons/bi";
import { GiFruitBowl } from "react-icons/gi";
import { FaMinus } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { useContext, useState, useEffect } from "react";
import { UserContext } from "../useContext/useContex";
import { BsTrash3 } from "react-icons/bs";
import { FaVideo } from "react-icons/fa";
const RouterLayout = () => {
  const { array, setArray } = useContext(UserContext);
  const [total, setTotal] = useState(0);

  function changeQty(id, delta) {
    setArray((prev) =>
      prev.map((i) => i.id === id ? { ...i, qty: i.qty + delta } : i)
        .filter((i) => i.qty > 0)
    );
  }


  useEffect(() => {
    const sum = array.reduce((prev, cur) => prev + cur.price * cur.qty, 0);
    setTotal(sum);
  }, [array]);
  function removeArray(id) {
    setArray(array.filter((i) => i.id !== id));
  }











  return (
    <>
      <header>
        <div className="container">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <nav>
            <NavLink to="/" className="btn btn-navbar">
              <PiCookingPotFill />
              <h6>Taomlar</h6>
            </NavLink>
            <NavLink to="/ichimlik" className="btn btn-navbar">
              <BiDrink />
              <h6>Ichimliklar</h6>
            </NavLink>
            <NavLink to="/meva" className="btn btn-navbar">
              <GiFruitBowl />
              <h6>Mevalar</h6>
            </NavLink>
            <NavLink to="/boshqa" className="btn btn-navbar">
              <MdOutlineRestaurantMenu />
              <h6>Salatlar</h6>
            </NavLink>
            <NavLink to="/video" className="btn btn-navbar">
              <FaVideo />
              <h6>Reklamalar</h6>
            </NavLink>
          </nav>
        </div>
      </header>
      <main>
        <div className="container">
          <section>
            <Outlet />
          </section>
          <div className="price">
            <p>Buyurtmalar:</p>
            <div className="price_cards">
              {array.map((item) => {
                return (
                  <div key={item.id} className="price_card">
                    <h5>{item.name}</h5>
                    <h5>{item.price} x {item.qty} = {item.price * item.qty} so'm</h5>
                    <h4 style={{width:"100%"}}>{item.qty}  x {item.name}</h4>
                    <h4 style={{width:"100%"}}> {item.price * item.qty} so'm</h4>
                    <button className="btn btn-primary"
                      onClick={() => changeQty(item.id, -1)}>
                      <FaMinus />
                    </button>
                    <button className="btn btn-primary"
                      onClick={() => changeQty(item.id, +1)} >
                      <IoMdAdd />
                    </button>
                    <button
                      className="btn btn-primary"
                      onClick={() => removeArray(item.id)}
                    >
                      <BsTrash3 />
                    </button>
                  </div>
                );
              })}
            </div>
            <div className="All_Price">
              <h3>
               Jami - {total} {"so'm"}
              </h3>
              <button
                className="btn btn_all_price"
                onClick={() => setArray([])}
              >
                <BsTrash3 />
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default RouterLayout;

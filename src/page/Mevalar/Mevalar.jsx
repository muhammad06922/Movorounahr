import { useContext } from "react";
import "./Mevalar.css";
import { UserContext } from "../../useContext/useContex";

const Mevalar = () => {
 const { data, addItem } = useContext(UserContext);
  const addToArray = (product) => {
    setArray((prev) => [...prev, product]);
  };
  return (
    <div className="mevalar">
      <div className="cards">
        {data.map((card) => {
          if (card.type === "fruit") {
            return (
              <div key={card.id} className="card ">
                <div className="card_picture">
                  <img src={card.picture} alt="" />
                </div>
                <div className="card_title">
                  <h3>{card.name}</h3>
                  <h3>{card.kilo}</h3>
                  <h4>{card.price} sum</h4>
                  <button
                    className="btn btn_add"
                    onClick={() => addItem(card)}
                  >
                    {"Qo'shish"}
                  </button>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Mevalar;

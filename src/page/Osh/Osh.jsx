import { useContext } from "react";
// style
import "./Osh.css";
import { UserContext } from "../../useContext/useContex";
const Osh = () => {


  const {data,addItem}=useContext(UserContext)
  return (
    <div className="taomlar">
      <div className="cards">
        {data?.map((card) => {
          if (card.type === "rice") {
            return (
              <div key={card.id} className="card ">
                <div className="card_picture">
                  <img src={card.picture} alt="" />
                </div>
                <div className="card_title">
                  <h3>{card.name}</h3>
                  <h4>{card.kilo}</h4>
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

export default Osh;

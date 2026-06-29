// Router Dom
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// page
import Osh from "./page/Osh";
import Ichimliklar from "./page/Ichimliklar";
import Mevalar from "./page/Mevalar";
import Boshqa from "./page/Boshqa";
// Layout
import RouterLayout from "./layout/RouterLayout";
import { UserContext } from "./useContext/useContex";
// Api
import data from "./data/data";
import { useState, useEffect } from "react";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import Reclom from "./page/Reclom/Reclom";

const App = () => {
  const [array, setArray] = useState([]);
  const [loader, setLoader] = useState(false);


const addItem = (newItem) => {
  setArray((prev) => {
    const existing = prev.find(
      (i) => i.name === newItem.name && i.price === newItem.price
    );
    if (existing) {
      return prev.map((i) =>
        i.id === existing.id ? { ...i, qty: i.qty + 1 } : i
      );
    }
    return [...prev, { ...newItem, qty: 1 }];
  });
};


  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 5000);
  }, []);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RouterLayout />,
      children: [
        {
          index: true,
          element: <Osh />,
        },
        {
          path: "/ichimlik",
          element: <Ichimliklar />,
        },
        {
          path: "/meva",
          element: <Mevalar />,
        },
        {
          path: "/boshqa",
          element: <Boshqa />,
        },
        {
          path: "/video",
          element: <Reclom url="https://www.instagram.com/movarounnahr__choyxona?igsh=YnI4azM2NXU5dmIz"/>,
        },
      ],
    },
  ]);

  return (
    <>
      {loader ? (
        <div className="loader">
          <ClimbingBoxLoader
            className="loader-container"
            color="#333"
            loading={loader}
            size={12}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <UserContext.Provider value={{ data, array, setArray ,addItem}}>
          <RouterProvider router={router} />
        </UserContext.Provider>
      )}
    </>
  );
};

export default App;

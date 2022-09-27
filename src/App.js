import "./App.css";
import Header from "./Component/Header/Header";
import Shop from "./Component/Shop/Shop";
import { useState, useEffect } from "react";

function App() {
  const [foods, setFood] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=c`)
      .then((res) => res.json())
      .then((data) => setFood(data.meals));
  }, []);

  const chosenFood = (selectedFood) => {
    let newCart = [];
    const exists = cart.find((food) => food.idMeal === selectedFood.idMeal);
    if (!exists) {
      newCart = [...cart, selectedFood];
    } else {
      newCart = [...cart];
      alert("Already Added");
    }
    setCart(newCart);
  };

  return (
    <div>
      <Header cart={cart} />
      <Shop foods={foods} chosenFood={chosenFood} />
    </div>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import NuKenzie from "../src/services/NuKenzie.svg";
import Form from "./components/Form/Form";
import TotalMoney from "./components/TotalMoney/TotalMoney";
import List from "./components/List/List";
import HomePage from "./components/HomePage/HomePage";

const App = () => {
  const [listTransactions, setListTransactions] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => setIsLoggedIn(true);

  const logout = () => setIsLoggedIn(false);

  return isLoggedIn ? (
    <>
      <header>
        <img src={NuKenzie} alt="logo NuKenzie" />
        <button onClick={() => logout()}>Inicio</button>
      </header>
      <div>
        <Form
          listTransactions={listTransactions}
          setListTransactions={setListTransactions}
        />
      </div>
      <div>
        <h4>Valor total: </h4>
        <p>
          R$ <TotalMoney listTransactions={listTransactions} />
        </p>
        <p>O valor se refere ao saldo</p>
      </div>
      <div>
        <List
          listTransactions={listTransactions}
          setListTransactions={setListTransactions}
        />
      </div>
    </>
  ) : (
    <HomePage login={login} />
  );
};

export default App;

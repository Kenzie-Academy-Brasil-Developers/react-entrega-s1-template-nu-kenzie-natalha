import logo from "./logo.svg";
import "../src/App.css";
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
      <div className="head">
        <header>
          <img src={NuKenzie} alt="logo NuKenzie" className="logo" />
          <button onClick={() => logout()} className="btnInicio">
            Inicio
          </button>
        </header>
      </div>
      <div className="everything">
        <div>
          <div>
            <Form
              listTransactions={listTransactions}
              setListTransactions={setListTransactions}
            />
          </div>
          <div className="allTotal">
            <h4>Valor total: </h4>
            <p className="pTotal">
              R$ <TotalMoney listTransactions={listTransactions} />
            </p>
          </div>
        </div>
        <div>
          <List
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
          />
        </div>
      </div>
    </>
  ) : (
    <HomePage login={login} />
  );
};

export default App;

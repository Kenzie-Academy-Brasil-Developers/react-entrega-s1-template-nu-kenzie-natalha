import NoCard from "../../services/NoCard.svg";
import Card from "../Card/Card";
import "../List/list.style.css";

const List = ({
  listTransactions,
  setListTransactions,
  payment,
  setPayment,
  expense,
  setExpense,
  allMoney,
  setAllMoney,
}) => {
  const filterOn = () => {
    const filterEntran = payment.filter((elem) => {
      return elem.type === "Entrada";
    });
    return setListTransactions(filterEntran);
  };

  const filterOff = () => {
    const filterExit = expense.filter((elem) => {
      return elem.type === "Saída";
    });
    return setListTransactions(filterExit);
  };

  const filterAll = () => {
    const all = allMoney.filter((elem) => {
      return elem.type === "Entrada" || "Saida";
    });
    return setListTransactions(all);
  };

  return listTransactions.length > 0 ? (
    <div className="card">
      <div className="resumo">
        <p className="pResu">Resumo Financeiro</p>
        <button className="todos" onClick={filterAll}>
          Todos
        </button>
        <button className="other" onClick={filterOn}>
          Entrada
        </button>
        <button className="other" onClick={filterOff}>
          Saída
        </button>
      </div>
      <ul>
        {listTransactions.map((transaction, index) => (
          <Card
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
            transaction={transaction}
            key={index}
          />
        ))}
      </ul>
    </div>
  ) : (
    <div className="card">
      <div className="resumo">
        <p className="pResu">Resumo Financeiro</p>
        <button className="todos" onClick={filterAll}>
          Todos
        </button>
        <button className="other" onClick={filterOn}>
          Entrada
        </button>
        <button className="other" onClick={filterOff}>
          Saída
        </button>
      </div>
      <h2>Você ainda não possui nenhum lançamento</h2>
      <ul>
        <img src={NoCard} alt="transações vazias" />
      </ul>
    </div>
  );
};

export default List;

import NoCard from "../../services/NoCard.svg";
import Card from "../Card/Card";
import "../List/list.style.css";

const List = ({ listTransactions, setListTransactions }) => {
  return listTransactions.length > 0 ? (
    <div>
      <div className="resumo">
        <p>Resumo Financeiro</p>
        <button>Todos</button>
        <button>Entrada</button>
        <button>Saida</button>
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
    <div>
      <div className="resumo">
        <p>Resumo Financeiro</p>
        <button>Todos</button>
        <button>Entrada</button>
        <button>Saida</button>
      </div>
      <h2>Você ainda não possui nenhum lançamento</h2>
      <ul>
        <img src={NoCard} alt="transações vazias" />
      </ul>
    </div>
  );
};

export default List;

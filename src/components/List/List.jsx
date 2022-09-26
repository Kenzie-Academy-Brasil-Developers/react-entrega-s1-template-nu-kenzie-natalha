import NoCard from "../../services/NoCard.svg";
import Card from "../Card/Card";

const List = ({ listTransactions, setListTransactions }) => {
  return listTransactions.length > 0 ? (
    <div>
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
      <h2>Você nao possui transações</h2>
      <ul>
        <img src={NoCard} alt="transações vazias" />
      </ul>
    </div>
  );
};

export default List;

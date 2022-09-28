import "../Card/card.style.css";
import { FaTrash } from "react-icons/fa";

const Card = ({ listTransactions, transaction, setListTransactions }) => {
  const removeCard = (card) => {
    setListTransactions(listTransactions.filter((elem) => elem !== card));
  };

  return transaction.type === "Entrada" ? (
    <li className="entrada">
      <div>
        <h3>{transaction.description}</h3>
        <p>{transaction.type}</p>
      </div>
      <div>
        <p>R$ {transaction.value}</p>
        <button onClick={() => removeCard(transaction)}>
          <FaTrash />
        </button>
      </div>
    </li>
  ) : (
    <li className="saida">
      <div>
        <h3>{transaction.description}</h3>
        <p>{transaction.value}</p>
      </div>
      <div>
        <p>R$ {transaction.value}</p>
        <button onClick={() => removeCard(transaction)}>
          <FaTrash />
        </button>
      </div>
    </li>
  );
};

export default Card;

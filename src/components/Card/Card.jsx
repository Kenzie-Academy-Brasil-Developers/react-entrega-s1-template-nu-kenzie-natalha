import "../Card/card.style.css";
import { FaTrash } from "react-icons/fa";

const Card = ({ listTransactions, transaction, setListTransactions }) => {
  const removeCard = (card) => {
    setListTransactions(listTransactions.filter((elem) => elem !== card));
  };

  return transaction.type === "Entrada" ? (
    <li className="entrada">
      <div className="divLi">
        <h3>{transaction.description}</h3>
        <p>{transaction.type}</p>
      </div>
      <div className="divLiOu">
        <p>R$ {transaction.value}</p>
        <button className="trahs" onClick={() => removeCard(transaction)}>
          <FaTrash />
        </button>
      </div>
    </li>
  ) : (
    <li className="saida">
      <div className="divLi">
        <h3>{transaction.description}</h3>
        <p>{transaction.type}</p>
      </div>
      <div className="divLiOu">
        <p>R$ {transaction.value}</p>
        <button className="trahs" onClick={() => removeCard(transaction)}>
          <FaTrash />
        </button>
      </div>
    </li>
  );
};

export default Card;

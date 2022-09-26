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
        <p>{transaction.price}</p>
        <button onClick={() => removeCard(transaction)}>Apagar</button>
      </div>
    </li>
  ) : (
    <li className="saida">
      <div>
        <h3>{transaction.description}</h3>
        <p>{transaction.type}</p>
      </div>
      <div>
        <p>{transaction.price}</p>
        <button onClick={() => removeCard(transaction)}>Apagar</button>
      </div>
    </li>
  );
};

export default Card;

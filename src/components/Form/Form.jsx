import { useState } from "react";

const Form = ({ listTransactions, setListTransactions }) => {
  const [input, setInput] = useState("");
  const [inputValue, setInputValue] = useState(0);
  const [inputType, setInputType] = useState("Entrada");

  const handleInput = (event) => {
    event.preventDefault();
    if (input !== "" && input !== " " && inputValue !== 0) {
      setListTransactions([
        ...listTransactions,
        {
          description: input,
          type: inputType,
          value: Number(inputValue),
        },
      ]);
    } else {
      alert("Confira os campos de preenchimento!");
    }
  };

  return (
    <div>
      <form onSubmit={handleInput}>
        <label>Descrição</label>
        <input
          placeholder="Digite aqui sua descrição"
          type="text"
          name="description"
          onChange={(event) => setInput(event.target.value)}
          key={"description"}
        />
        <label>Valor</label>
        <input
          placeholder="Digite o valor"
          type="number"
          name="value"
          onChange={(event) => setInputValue(event.target.value)}
          key={"value"}
        />
        <label>Tipo de valor</label>
        <select
          name="type"
          id=""
          onChange={(event) => setInputType(event.target.value)}
          key={"type"}
        >
          <option>Entrada</option>
          <option>Saída</option>
        </select>
        <button>Inserir valor</button>
      </form>
    </div>
  );
};

export default Form;

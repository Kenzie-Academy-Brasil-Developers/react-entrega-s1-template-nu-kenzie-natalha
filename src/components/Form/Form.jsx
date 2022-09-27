import { useState } from "react";
import "../Form/form.style.css";

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
    <div className="formDiv">
      <form onSubmit={handleInput}>
        <label>Descrição</label>
        <input
          placeholder="Digite aqui sua descrição"
          type="text"
          name="description"
          onChange={(event) => setInput(event.target.value)}
          key={"description"}
        />
        <div className="valorAll">
          <div className="valorOne">
            <label>Valor</label>
            <input
              className="valorLabel"
              placeholder="Digite o valor"
              type="number"
              name="value"
              onChange={(event) => setInputValue(event.target.value)}
              key={"value"}
            />
          </div>
          <div className="valorTwo">
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
          </div>
        </div>
        <button className="btnInse">Inserir valor</button>
      </form>
    </div>
  );
};

export default Form;

import illustration from "../../services/illustration.svg";
import Form from "../Form/Form";

const HomePage = ({ login }) => {
  return (
    <>
      <div>
        <h4>Nu Kenzie</h4>
        <h3>Centralize o controle das suas finanças</h3>
        <p>de forma rápida e segura</p>
        <button type="button" onClick={() => login()}>
          Iniciar
        </button>
      </div>
      <div>
        <img src={illustration} alt="tela inicial" />
      </div>
    </>
  );
};

export default HomePage;

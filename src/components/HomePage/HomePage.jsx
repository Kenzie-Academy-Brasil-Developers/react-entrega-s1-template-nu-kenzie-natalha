import illustration from "../../services/illustration.svg";
import NuWhite from "../../services/NuWhite.svg";
import "../HomePage/homepage-style.css";
import Form from "../Form/Form";

const HomePage = ({ login }) => {
  return (
    <>
      <div className="text">
        <div className="textTwo">
          <img src={NuWhite} alt="logo" className="logo" />
          <h3>Centralize o controle das suas finanças</h3>
          <p>de forma rápida e segura</p>
          <button type="button" onClick={() => login()}>
            Iniciar
          </button>
        </div>

        <img src={illustration} alt="tela inicial" className="tela" />
      </div>
    </>
  );
};

export default HomePage;

import { useState } from "react";

function Info() {
  const [infoOpen, setInfoOpen] = useState(false);

  return (
    <div className="infodiv">
      <button
        className={`infobtn ${infoOpen ? "close" : ""}`}
        onClick={() => setInfoOpen(!infoOpen)}
      >
        {infoOpen ? "✖" : "i"}
      </button>

      <div className={`infobox ${infoOpen ? "open" : ""}`}>
        <p>Dados da Prefeitura da Cidade do Rio de Janeiro</p>
        <a
          href="https://www.rio.rj.gov.br/documents/91293/e07143fa-6a06-4a24-a9b4-6b93a046b57e"
          target="blank"
        >
          Visualizar
        </a>
        <p>Desenvolvido por</p>
        <a href="https://github.com/luiz2f/" target="blank">
          luiz2f
        </a>
      </div>
    </div>
  );
}

export default Info;

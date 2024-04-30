import { useEffect, useState } from "react";
import WeekCalendar from "./WeekCalendar";
const diasDaSemana = [
  "Domingo",
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
];

function Header({ selected, setSelected }) {
  const [horaAtual, setHoraAtual] = useState("");

  function formatarHora(date) {
    const diaSemana = diasDaSemana[date.getDay()];
    const hora = date.getHours();
    const minutos = date.getMinutes();
    return `${diaSemana} - ${hora}:${minutos < 10 ? "0" : ""}${minutos}`;
  }

  useEffect(() => {
    const atualizarHora = () => {
      const dataAtual = new Date();
      const horaFormatada = formatarHora(dataAtual);
      setHoraAtual(horaFormatada);
    };
    atualizarHora();
    const intervalId = setInterval(atualizarHora);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="header">
      <div className="flexcontainer">
        <div className="esquerda">
          <div className="imgbounding">
            <img src="/RIOPREFEITURA.png" />
          </div>
          <div className="textheader">
            <div className="titulo">FEIRAS DE RUA</div>
            <div className="data">{horaAtual}</div>
          </div>
        </div>
        <div className="meio">
          <WeekCalendar selected={selected} setSelected={setSelected} />
        </div>
        <div className="direita"></div>
      </div>
    </div>
  );
}

export default Header;

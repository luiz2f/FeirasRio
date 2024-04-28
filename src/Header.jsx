import WeekCalendar from "./WeekCalendar";

function Header() {
  return (
    <div className="header">
      <div className="flexcontainer">
        <div className="esquerda">
          <div className="imgbounding">
            <img src="/RIOPREFEITURA.png" />
          </div>
          <div className="textheader">
            <div className="titulo">FEIRAS DE RUA</div>
            <div className="data">Segunda-Feira - 18:08</div>
          </div>
        </div>
        <div className="meio">
          <WeekCalendar />
        </div>
        <div className="direita">bbb</div>
      </div>
    </div>
  );
}

export default Header;

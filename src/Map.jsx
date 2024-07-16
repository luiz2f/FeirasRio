import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import { feiras } from "./assets/feiras";

function Map({ selected }) {
  const position = [-22.92, -43.32];

  const iconsize = [30, 45];
  const iconanchor = [iconsize[0] / 2, iconsize[1]];
  console.log(iconanchor);
  const myIconA = new L.icon({
    iconUrl: "/iconA.png",
    iconRetinaUrl: "/iconA.png",
    popupAnchor: [-0, -50],
    iconAnchor: iconanchor,
    iconSize: iconsize,
  });
  const myIconF = new L.icon({
    iconUrl: "/iconF2.svg",
    iconRetinaUrl: "/iconF.svg",
    popupAnchor: [-0, -50],

    iconAnchor: iconanchor,
    iconSize: iconsize,
  });

  function aberta(feira) {
    return feira.dayWeekNum === selected;
  }
  return (
    <MapContainer
      className="map"
      center={position}
      zoom={12}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png"
      />
      {/* .slice(62, 76) */}
      {feiras.map((feira, index) => (
        <Marker
          icon={aberta(feira) ? myIconA : myIconF}
          zIndexOffset={aberta(feira) ? 1100 : 1}
          opacity={aberta(feira) ? 1 : 1}
          key={index}
          position={[feira.latitude, feira.longitude]}
        >
          <Popup>
            <div style={{ textAlign: "center" }}>
              <p>
                <strong>{feira.bairro}</strong>
              </p>
              <p>{feira.endereco}</p>

              <p>{feira.dayWeek}</p>
              <p>
                {feira.abertura} as {feira.fechamento}
              </p>
              {/* <p>
                <strong>Abre: </strong>
                {feira.abertura} - <strong>Fecha: </strong>
                {feira.fechamento}
              </p> */}
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default Map;

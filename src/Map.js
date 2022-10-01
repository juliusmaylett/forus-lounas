import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import DraggableMarker from './components/DraggableMarker'

const [lat, lon] = [60.1647, 24.9443]

const Map = () => {

    const restaurants = [
        { name: "Himalaya", type: "Annos", loc: [60.1636927798679, 24.94556892326669], id: 1 },
        { name: "Haru Plus Sushi", type: "Buffet", loc: [60.16349507070794, 24.941415709501968], id: 2 },
        { name: "Haiku Sushi Lasipalatsi", type: "Buffet", loc: [60.16974007840195, 24.936830414400557], id: 3 },
        { name: "Tapahtumatalo Bank", type: "Buffet", loc: [60.16587905974362, 24.951140252857464], id: 4 }
    ]

    const renderMarker = (d) => {
        return <Marker position={d.loc} key={d.id}>
            <Popup>
                <b>{d.name}</b><br />
                Tyyppi: {d.type}
            </Popup>
        </Marker>
    }

    return (
        <MapContainer center={[lat, lon]} zoom={15} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <DraggableMarker/>


            <div>

                {restaurants.map(function (d) {
                    return (
                        renderMarker(d)
                    )
                })}
            </div>
        </MapContainer>);
}

export default Map;
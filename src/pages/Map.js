import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import DraggableMarker from '../components/DraggableMarker';
import { useEffect, useState } from 'react';
import { getRestaurants } from '../firestore/db-functions';

const [lat, lon] = [60.1648, 24.9442]

const homeIcon = new L.Icon({
    iconUrl: '/home.svg',
    iconAnchor: [12, 12],
    iconSize: [24, 24]
}
);

const restaurantIcon = new L.Icon({
    iconUrl: '/food.svg',
    iconAnchor: [12, 12],
    iconSize: [24, 24]
}
);

const Map = () => {

    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        getRestaurants().then(e => setRestaurants(e));

    }, [])

    const renderMarker = (d, markerIcon) => {

        if (!d.location) return;

        return (
            <Marker
                position={[d.location._lat, d.location._long]}
                key={d.id}
                icon={markerIcon}
            >
                <Popup>
                    <b>{d.name}</b><br />
                    {d.type ? <span>Tyyppi: {d.type}</span> : null}
                    
                </Popup>
            </Marker>
        )
    }

    console.log(restaurants)

    return (
        <div className="map-container">
            <MapContainer center={[lat, lon]} zoom={15} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <DraggableMarker />

                {renderMarker({ name: "Konttori", location: { _lat: lat, _long: lon } }, homeIcon)}
                {restaurants ? restaurants.map(r => renderMarker(r, restaurantIcon)) : null}

            </MapContainer>

        </div>);
}

export default Map;
import { MapContainer, TileLayer } from 'react-leaflet';
import DraggableMarker from '../components/DraggableMarker';
import { useEffect, useState } from 'react';
import { getRestaurants } from '../firestore/db-functions';
import { renderMarker } from '../components/Marker';
import { officeLocation, homeIcon, restaurantIcon } from '../utils/markers';
import { MinimapControl } from '../components/MinimapControl';


const Map = () => {

    const [restaurants, setRestaurants] = useState([]);


    useEffect(() => {
        getRestaurants().then(e => setRestaurants(e));
    }, [])

    return (
        <div className="map-container">
            <MapContainer center={[officeLocation.lat, officeLocation.lng]} zoom={15} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                
                <DraggableMarker/>
                

                {renderMarker({ name: "Konttori", location: { lat: officeLocation.lat, lng: officeLocation.lng } }, homeIcon)}
                {restaurants ? restaurants.map(r => renderMarker(r, restaurantIcon)) : null}
                

                <MinimapControl position="topright" />

            </MapContainer>

        </div>);
}

export default Map;
import { Marker, Popup } from 'react-leaflet';

export const renderMarker = (d, markerIcon) => {

    if (!d.location) return;

    return (
        <Marker
            position={[d.location.lat, d.location.lng]}
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
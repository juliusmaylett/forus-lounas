import { useMemo } from 'react';
import { MapContainer, useMap } from 'react-leaflet';


// Classes used by Leaflet to position controls
const POSITION_CLASSES = {
    bottomleft: 'leaflet-bottom leaflet-left',
    bottomright: 'leaflet-bottom leaflet-right',
    topleft: 'leaflet-top leaflet-left',
    topright: 'leaflet-top leaflet-right',
}

export function MinimapControl({ zoom }) {
    const parentMap = useMap()
    const mapZoom = zoom || 0

    // Memoize the minimap so it's not affected by position changes
    const minimap = useMemo(
        () => (
            <MapContainer
                style={{ height: 110, width: 135, margin: 0, background: "white" }}
                center={parentMap.getCenter()}
                zoom={mapZoom}
                dragging={true}
                doubleClickZoom={false}
                scrollWheelZoom={false}
                attributionControl={false}
                zoomControl={false}>

                <span class="font-weight-bold">
                    Lisää puuttuva ravintola kartalle raahaamalla
                    sinistä merkkiä ja painamalla sitä.
                </span>

            </MapContainer>
        ),
        [],
    )

    const positionClass = POSITION_CLASSES.bottomleft
    return (
        <div className={positionClass}>
            <div className="leaflet-control leaflet-bar">{minimap}</div>
        </div>
    )
}
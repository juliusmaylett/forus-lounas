import { useState, useRef, useMemo, useCallback } from 'react';
import { Marker, Popup } from 'react-leaflet'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const center = {
    lat: 60.17,
    lng: 24.9443,
}

const DraggableMarker = () => {

    const [draggable, setDraggable] = useState(true)
    const [position, setPosition] = useState(center)
    const markerRef = useRef(null)
    const eventHandlers = useMemo(
        () => ({
            dragend() {
                const marker = markerRef.current
                if (marker != null) {
                    setPosition(marker.getLatLng())
                }
            },
        }),
        [],
    )
    const toggleDraggable = useCallback(() => {
        setDraggable((d) => !d)
    }, [])

    return (
        <Marker
            draggable={draggable}
            eventHandlers={eventHandlers}
            position={position}
            ref={markerRef}>
            <Popup minWidth={90}>

                {draggable
                    ? <>
                        <h4>Lisää ravintola</h4>
                        <p>Raahaa merkki ravintolan kohdalle</p>
                        <InputGroup size="sm" className="mb-3">
                            <InputGroup.Text id="inputGroup-sizing-sm">Nimi</InputGroup.Text>
                            <Form.Control
                                aria-label="Small"
                                aria-describedby="inputGroup-sizing-sm"
                            />
                        </InputGroup>

                        <Form.Select size="sm" aria-label="Default select example">
                            <option>Ravintolan tyyppi</option>
                            <option value="Buffet">Buffet</option>
                            <option value="Annos">Annos</option>
                        </Form.Select>
                        <br />
                        <Button size="sm" onClick={toggleDraggable}>Tallenna</Button>
                    </>


                    : 'Tallenna sijainti'}

            </Popup>
        </Marker>
    )
}

export default DraggableMarker;
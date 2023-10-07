import { useState, useRef, useMemo, useCallback } from 'react';
import { Marker, Popup } from 'react-leaflet'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { addNewRestaurant } from '../firestore/db-functions';

const center = {
    lat: 60.164998,
    lng: 24.943342
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
                    const pos = marker.getLatLng();
                    setPosition(pos);
                }
            },
        }),
        [position],
    )

    function refreshPage() {
        window.location.reload(false);
      }

    const saveToDB = useCallback((d) => {
        d.preventDefault();
        setDraggable((d) => !d)
        addNewRestaurant(d, markerRef.current.getLatLng()).then(refreshPage)
    }, [])

    return (
        
            <Marker
                draggable={draggable}
                eventHandlers={eventHandlers}
                position={position}
                ref={markerRef}>
                <Popup minWidth={90}>
                    <Form onSubmit={saveToDB}>
                        <h4>Lisää ravintola</h4>
                        <p>Raahaa merkki ravintolan kohdalle, täytä tiedot ja tallenna. Ravintola on jatkossa mukana arvonnassa!</p>
                        <InputGroup size="sm" className="mb-3">
                            <InputGroup.Text name="name" >Nimi</InputGroup.Text>
                            <Form.Control
                                aria-label="Small"
                                aria-describedby="inputGroup-sizing-sm"
                            />
                        </InputGroup>

                        <Form.Select name="type" size="sm" aria-label="Default select example">
                            <option value="Buffet">Buffet</option>
                            <option value="Annos">Annos</option>
                        </Form.Select>
                        <br />
                        <Button size="sm" type="submit" >Tallenna</Button>
                    </Form>
                </Popup>
            </Marker>
            
    )
}

export default DraggableMarker;
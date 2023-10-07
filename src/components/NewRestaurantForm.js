import { addNewRestaurant } from '../firestore/db-functions';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const NewRestaurantForm = () => {
    return (
        <div className='page-form-container'>
            <br></br>
            <h2>Lisää uusi ravintola</h2>
            <InputGroup size="sm" className="mb-3">
                <InputGroup.Text >Nimi</InputGroup.Text>
                <Form.Control
                    id="new-rest-name"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                />
            </InputGroup>
            <Form.Select id="new-rest-type" size="sm" className="mb-3" aria-label="Default select example">
                <option value="Buffet">Buffet</option>
                <option value="Annos">Annos</option>
                <option value="Annos & salaattipöytä">Annos & salaattipöytä</option>
            </Form.Select>
            <Button as="a" variant="primary" className="btn-1" id="raffle-button" onClick={(e) => addNewRestaurant(e)}>Lisää tietokantaan</Button>
        </div>)
} 
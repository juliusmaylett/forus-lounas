import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { getRestaurants } from '../firestore/db-functions';

export const RaffleForm = () => {

    const newRaffle = () => {
        
        suspendRaffleButton();
        const type = document.getElementById("rest-type-selector").value;
        let resultDiv = document.getElementById("result-restaurant");
    
        getRestaurants().then(function (items) {
            var suitableRestaurants = filterRestaurants(items, type)
            var chosenRes = randomRestaurant(suitableRestaurants);
            resultDiv.innerHTML = "<h1>" + chosenRes.name + "</h1>" + "<p>" + chosenRes.type + "</p>";
        });
    }
    
    function randomRestaurant(items) {
        return items[Math.floor(Math.random() * items.length)];
    }
    
    async function suspendRaffleButton() {
        // Just for preventing spamming the button
        let button = document.getElementById("raffle-button");
        button.classList.add("disabled");
        setTimeout(function () { button.classList.remove("disabled"); }, 1000)
    }
    
    function filterRestaurants(items, type) {
        if (type === "no") { return items; }
        if (type === "yes") {
            var buffetArray = items.filter(function (el) {
                return el.type === "Buffet";
            });
            return buffetArray
        };
    }

    return (
        <div className='page-form-container'>

        <h2>Tärkeimmät ensin...</h2>
        <p>Onko väliä, jos jää nälkä?</p>
        <Form.Select id="rest-type-selector" size="sm" className="mb-3" aria-label="Default select example">
            <option value="no">Kaikki käy - olen pieniruokainen!</option>
            <option value="yes">Vähän kyllä harmittaisi...</option>
        </Form.Select>

        <Button as="a" variant="primary" className="btn-1" id="raffle-button" onClick={(e) => newRaffle(e)}>Arvo lounaspaikka</Button>
        <div id="result-restaurant"></div>
    </div>)
}
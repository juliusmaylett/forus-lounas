import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { getRestaurants } from '../firestore/db-functions';
import { useState } from 'react';

export const RaffleForm = () => {

    let [resultUrl, setResultUrl] = useState(false);

    const newRaffle = () => {

        suspendRaffleButton();
        const type = document.getElementById("rest-type-selector").value;
        let resultDiv = document.getElementById("result-restaurant");

        getRestaurants().then(function (items) {
            const suitableRestaurants = filterRestaurants(items, type)
            const chosenRes = randomRestaurant(suitableRestaurants);
            const { lat, lng } = chosenRes.location;
            const url = `https://www.google.com/maps/place/${lat},${lng}`
            setResultUrl(url);
            resultDiv.innerHTML = "<br/> <h1>" + chosenRes.name + "</h1>" + "<p>" + chosenRes.type + "</p>";
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

            
            <h1 className="display-5 fw-bold">Tärkeimmät ensin...</h1>
            <p className="col-lg-6 mx-auto">Onko väliä, jos jää nälkä?</p>

            <Form.Select id="rest-type-selector" size="sm" className="mb-3" aria-label="Default select example">
                <option value="yes">Vähän kyllä harmittaisi...</option>
                <option value="no">Kaikki käy - olen pieniruokainen!</option>
            </Form.Select>

            <Button as="a" variant="primary" className="btn-1" id="raffle-button" size="lg"  onClick={(e) => newRaffle(e)}>Arvo lounaspaikka</Button>
            
            <div id="result-restaurant"></div>

            {resultUrl ?
                <Button as="a" variant="outline-success" className="btn-1" href={resultUrl} target="_blank" >
                    Näytä kartalla
                </Button>
                :
                null
            }
        </div>)
}
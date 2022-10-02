import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { v4 as uuidv4 } from 'uuid';
import { doc, setDoc } from "firebase/firestore";

const Raffle = () => {

    const firebaseConfig = {
        apiKey: "AIzaSyBw4tPrWPZBYel62o1uJReAOc9vHogG6Lc",
        authDomain: "forus-lounas.firebaseapp.com",
        databaseURL: "https://forus-lounas-default-rtdb.europe-west1.firebasedatabase.app",
        projectId: "forus-lounas",
        storageBucket: "forus-lounas.appspot.com",
        messagingSenderId: "206996163008",
        appId: "1:206996163008:web:634cc6038d96e611eee025",
        measurementId: "G-EYJLTQ6X7Z"
    };


    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    // Get a list of cities from your database
    async function getRestaurants(db) {
        const restColl = collection(db, 'restaurants');
        const citySnapshot = await getDocs(restColl);
        const restaurants = citySnapshot.docs.map(doc => doc.data());
        return restaurants;
    }

    async function addNewRestaurant(db) {

        var newName = document.getElementById("new-rest-name").value; // Ei toimi vielä
        var newType = document.getElementById("new-rest-type").value;

        console.log(newName + newType);
        

        await setDoc(doc(db, "restaurants", uuidv4()), {
            id: uuidv4(),
            name: "Testirafla",
            type: "Buffet"
        })
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
                return el.type == "Buffet";
            });
            return buffetArray
        };
    }


    const newRaffle = () => {
        suspendRaffleButton();
        const type = document.getElementById("rest-type-selector").value;
        let resultDiv = document.getElementById("result-restaurant");
        getRestaurants(db).then(function (items) {
            var suitableRestaurants = filterRestaurants(items, type)
            var chosenRes = randomRestaurant(suitableRestaurants);
            resultDiv.innerHTML = "<h1>" + chosenRes.name + "</h1>" + "<p>" + chosenRes.type + "</p>";
        });
    }

    return (
        <div className="page-container home-page">
            <div className='page-form-container'>

                <h2>Tärkeimmät ensin...</h2>
                <p>Onko väliä, jos jää nälkä?</p>
                <Form.Select id="rest-type-selector" size="sm" className="mb-3" aria-label="Default select example">
                    <option value="no">Kaikki käy - olen pieniruokainen!</option>
                    <option value="yes">Vähän kyllä harmittaisi...</option>
                </Form.Select>

                <Button as="a" variant="primary" className="btn-1" id="raffle-button" onClick={(e) => newRaffle(e)}>Arvo lounaspaikka</Button>
                <div id="result-restaurant"></div>
            </div>

            <div className='page-form-container'>
                <br></br>
                <h2>Lisää uusi ravintola</h2>
                <InputGroup size="sm" className="mb-3">
                    <InputGroup.Text id="new-rest-name">Nimi</InputGroup.Text>
                    <Form.Control
                        aria-label="Small"
                        aria-describedby="inputGroup-sizing-sm"
                    />
                </InputGroup>
                <Form.Select id="new-rest-type" size="sm" className="mb-3" aria-label="Default select example">
                    <option value="Buffet">Buffet</option>
                    <option value="Annos">Annos</option>
                </Form.Select>
                <Button as="a" variant="primary" className="btn-1" id="raffle-button" onClick={(e) => addNewRestaurant(e)}>Lisää tietokantaan</Button>
            </div>
        </div >
    );
}
export default Raffle;
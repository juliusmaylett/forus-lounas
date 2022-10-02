import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, doc, setDoc } from 'firebase/firestore/lite';
import { v4 as uuidv4 } from 'uuid';

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

    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const restColl = collection(db, "restaurants");

    async function getRestaurants(db) {
        const citySnapshot = await getDocs(restColl);
        const restaurants = citySnapshot.docs.map(doc => doc.data());
        return restaurants;
    }

    async function addNewRestaurant(db) {
        let nameref = document.getElementById("new-rest-name");
        let typeref = document.getElementById("new-rest-type");

        if (nameref.value == "" || typeref.value == "") {
            return
        }

        await setDoc(doc(restColl), {
            id: uuidv4(),
            name: nameref.value,
            type: typeref.value
        })
        nameref.value = "";
        typeref.value = "";
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
                </Form.Select>
                <Button as="a" variant="primary" className="btn-1" id="raffle-button" onClick={(e) => addNewRestaurant(e)}>Lisää tietokantaan</Button>
            </div>
        </div >
    );
}
export default Raffle;
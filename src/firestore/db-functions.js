import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, doc, setDoc } from 'firebase/firestore/lite';
import { v4 as uuidv4 } from 'uuid';

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
/*
export async function getRestaurants () {

    return [
        {
            name: "Haru",
            id: "1",
            type: "Buffet",
            location:{
                lat: 60.16349827907478,
                lng: 24.941475489639807
            }
        },

        {
            name: "Biang",
            id: "2",
            type: "Buffet",
            location:{
                lat: 60.16985205409827, 
                lng: 24.941553816768756
            }
        },
        {
            name: "Himalaya",
            id: "3",
            type: "Annos",
            location:{
                lat: 60.16359446928196, 
                lng: 24.94535262970761
            }
        },
        {
            name: "Saburo Shokudou",
            id: "4",
            type: "Annos",
            location:{
                lat: 60.16288563718815, 
                lng: 24.939247237883684
            }
        },
        {
            name: "Rioni",
            id: "5",
            type: "Annos",
            location:{
                lat: 60.16656355259918, 
                lng: 24.947850317881127
            }
        },
        {
            name: "Pompier",
            id: "6",
            type: "Buffet",
            location:{
                lat: 60.164863558299714, 
                lng: 24.932694566362958
            }
        }


    ]
}*/


// Use dummy data function for testing and saving quota
export async function getRestaurants() {
    const dBSnapshot = await getDocs(restColl);
    const restaurants = dBSnapshot.docs.map(doc => doc.data());
    return restaurants;
}

export async function addNewRestaurant(e, position) {
    
    const name = e.target.elements[0].value;
    const type = e.target.elements[1].value;


    if (name === "" || type === "") return;

    const record = {
        id: uuidv4(),
        name: name,
        type: type,
        location: {
            lat: position.lat,
            lng: position.lng
        }
    }

    //console.log(record)
    await setDoc(doc(restColl), record)

}
    

    

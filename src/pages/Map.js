import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import DraggableMarker from './DraggableMarker';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const [lat, lon] = [60.1647, 24.9443]

const Map = () => {

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

    let getRestaurants = () => {
        const restColl = collection(db, 'restaurants');
        const restSnapshot = getDocs(restColl);
        console.log(restSnapshot);
        const restaurants = restSnapshot.docs.map(doc => doc.data());
        return restaurants;
    }
 
    const renderMarker = (d) => {
        return <Marker position={[d.location._lat, d.location._long]} key={d.id}>
            <Popup>
                <b>{d.name}</b><br />
                Tyyppi: {d.type}
            </Popup>
        </Marker>
    }

    return (
        <div className="map-container">
            <MapContainer center={[lat, lon]} zoom={15} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <DraggableMarker />


                <div>
                    {}
                
                </div>
            </MapContainer>
        </div>);
}

export default Map;
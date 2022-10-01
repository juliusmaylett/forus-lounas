import Button from 'react-bootstrap/Button';

const Home = () => {

    const handleClick = (e) => {
        return {name:"Raflan nimi", type:"Raflan tyyppi"};
    }

    return (
        <div className="home">
            <h2>Etkö tiedä mitä sitä söisi?</h2>
            <Button as="a" variant="primary" onClick={(e) => console.log(handleClick(e))}>Etsi lounaspaikka</Button>
        </div>
    );
}
export default Home;
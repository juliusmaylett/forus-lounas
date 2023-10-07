import { Link } from "react-router-dom"
export const About = () => {
    return (
        <>
            <img class="d-block mx-auto mb-4" src="/forus_kytkinkaavio.svg" alt="" width="72" height="57"></img>
            <br/>
            <h1 className="display-5 fw-bold">Valinnan vaikeus</h1>
            
            <p className="col-lg-6 mx-auto">
                Helsingin keskustassa on tosi paljon hyviä ruokapaikkoja ja välillä ei osata päättää, mihin ollaan menossa.
                Sovellus on luotu helpottamaan Forusin raskaan työn raatajien arkea. Inspiraation iskiessä sun
                tehtävä on lisätä kaikki parhaat luonasmestat tänne!

            </p>
            <p className="col-lg-6 mx-auto">
                Toivottavasti appikaatio auttaa valitsemaan useammin sinulle sopivan paikan!
                Jos inspis iskee enemmänkin sovelluksen tekniseen toteutukseen, voit laittaa
                viestiä <a href="mailto:julius@forus.fi">ylläpitäjälle</a>.
            </p>
            <br/>
            <div class="col-lg-6 mx-auto">
        
        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <Link className="nav-link" to="/raffle"><button type="button" class="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold" >Arvo lounaspaikka</button></Link>
        <Link className="nav-link" to="/map"><button type="button" class="btn btn-outline-light btn-lg px-4" >Selaa kartalla</button></Link>
         
        </div>

      </div>
            <br />
            <br />

        </>
    )
}
import React, { Fragment } from 'react';
const About = () => {
    return (
        <>
            <div className="page-container">
                <h2>Valinnan vaikeus</h2>
                <p>
                    Keskustassa on tosi paljon hyviä ruokapaikkoja ja välillä ei osata päättää, mihin ollaan menossa.
                    Sovellus on luotu helpottamaan Forusin raskaan työn raatajien arkea. Inspiraation iskiessä sun
                    tehtävä on lisätä kaikki parhaat luonasmestat tänne!
                    <br />
                    Jos inspis iskee enemmänkin sovelluksen tekniseen toteutukseen, voit laittaa
                    viestiä <a href="mailto:julius@forus.fi">ylläpitäjälle</a>.
                </p>
            </div>
        </>
    )
}
export default About;
import {urlAsteroids, getData} from "./util.mjs";

const infoDisplayed = document.getElementById("infoAsteroidHTML");
const asteroidContainer = document.getElementById("asteroidContainer");
const asteroidClose = document.getElementById("asteroidClose");
const textClose = asteroidClose.querySelector("span");


async function asteroidInfo() {
    const asteroidInfo = await getData(urlAsteroids);
    const asteroidDate = asteroidInfo.near_earth_objects;
    let i = 1;
    
    for (const dataInfo in asteroidDate){
        const asteroidList = asteroidDate[dataInfo]

        asteroidList.forEach(infos => {
            if (i <= 5){
            const div = document.createElement("div");
            const name = document.createElement("h3");
            const potentialHazardous = document.createElement("p");
            const avgDiameter = document.createElement("p");
            
            name.textContent = `Asteroid name: ${infos.name}`;
            potentialHazardous.textContent = `Is it dangerous? ${checkTrueOrFalse(infos.is_potentially_hazardous_asteroid)}`;
            avgDiameter.textContent = `The avarege of the asteroid diameter in METERS is: ${avgAsteroidDiameter(infos.estimated_diameter.meters.estimated_diameter_max, infos.estimated_diameter.meters.estimated_diameter_min)}`

            div.appendChild(name);
            div.appendChild(potentialHazardous);
            div.appendChild(avgDiameter);

            infoDisplayed.appendChild(div);
            i++
            }
        });    
    }
    }

function checkTrueOrFalse(data){
    if (data == false){
        return "No"
    } else {
        return "Yes"
    }
}

function avgAsteroidDiameter(max, min){
    let avg = max + min/2;
    return avg.toFixed(2);
}

function toggleChat(){
    asteroidContainer.classList.toggle("open");

    if (asteroidContainer.classList.contains("open")) {
        textClose.textContent = "Hidde Information";
    } else {
        textClose.textContent = "Asteroid News"
    }
}

asteroidClose.addEventListener("click", toggleChat);

asteroidInfo();
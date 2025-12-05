const key = "bQynasKJ5ra6DTi99DEFtjirTa3uuMvJmSC9r3sJ";

const urlImageDay = `https://api.nasa.gov/planetary/apod?api_key=${key}`;

const urlAsteroids = `https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=${key}`

const infoDisplayed = document.getElementById("infoAsteroidHTML");
const imageInfoDisplay = document.getElementById("infoImageHTML");


function converToJson(res){
    if (res.ok){
        return res.json()
    } else {
        throw new Error("Bad Response");
    }
}

async function getData(url) {
    const response = await fetch(url);
    const data = await converToJson(response);
    return data;
};

async function showImageDay(){
    const imageDayData = await getData(urlImageDay);

    const img = document.createElement("img")

    img.setAttribute('src', imageDayData.url);
    img.setAttribute('alt', 'test');
    img.setAttribute('loading', 'lazy')

    const title = document.createElement("h2");
    const date = document.createElement("p");
    const explanation = document.createElement("p");

    title.textContent = imageDayData.title;
    date.textContent = imageDayData.date;
    explanation.textContent = imageDayData.explanation;

    imageInfoDisplay.appendChild(title);
    imageInfoDisplay.appendChild(img);
    imageInfoDisplay.appendChild(date);
    imageInfoDisplay.appendChild(explanation);
}

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

console.log(getData(urlAsteroids));
console.log(getData(urlImageDay));
showImageDay();
asteroidInfo();

////
const learnMore = document.getElementById("learnMore");
const myModal = document.getElementById("myModal");


function appealInfo() {
    let modalCreated = false

    learnMore.addEventListener("click", function () {
        if (myModal.classList.contains("active") == false){

            myModal.style.display = "flex"

            if (modalCreated === false){
                const div = document.createElement("div");
                const p = document.createElement("p");
                div.id = "modal-content"
                p.textContent = "teste"
                div.appendChild(p)
                myModal.appendChild(div)
                modalCreated = true;
            }

            setTimeout(() => {
                 myModal.classList.add("active"); 
            }, 10);
        } else {
            myModal.style.display = "none"
            myModal.classList.remove("active")
        }
    })
}

appealInfo()

/////

const asteroidContainer = document.getElementById("asteroidContainer");
const asteroidClose = document.getElementById("asteroidClose");
const textClose = asteroidClose.querySelector("span");

function toggleChat(){
    asteroidContainer.classList.toggle("open");

    if (asteroidContainer.classList.contains("open")) {
        textClose.textContent = "Hidde Information";
    } else {
        textClose.textContent = "Asteroid News"
    }
}

asteroidClose.addEventListener("click", toggleChat);
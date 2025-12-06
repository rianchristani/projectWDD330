import {urlImageDay, getData} from "./util.mjs";

const imageInfoDisplay = document.getElementById("infoImageHTML");

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

showImageDay();
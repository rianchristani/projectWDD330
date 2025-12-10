const key = "bQynasKJ5ra6DTi99DEFtjirTa3uuMvJmSC9r3sJ";

export const urlImageDay = `https://api.nasa.gov/planetary/apod?api_key=${key}`;
export const urlAsteroids = `https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=${key}`


function converToJson(res){
    if (res.ok){
        return res.json()
    } else {
        throw new Error("Bad Response");
    }
}

export async function getData(url) {
    const response = await fetch(url);
    const data = await converToJson(response);
    return data;
};

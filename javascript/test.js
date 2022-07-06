// this is NOT the final code, just to see how to use apis .-.
const apikey = "e53b0be07c46481681a335df69fb87cc";
const uriString = `https://api.ipgeolocation.io/ipgeo?apiKey=${apikey}`;
const encodedURI = encodeURI(uriString);
console.log(encodedURI);

const getlocation = () => {
    const endppoint = encodedURI;

    fetch(endppoint)
        .then(response => {
            if (response.ok) {
                return response.json();
            }})
        .then(data => console.log(data));
}

getlocation();
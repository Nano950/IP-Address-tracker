import { mapAPI, locationApiKey } from "./config.js";

// api information
const uriString = `https://api.ipgeolocation.io/ipgeo?apiKey=${locationApiKey}`;


// page elements
const userInput = document.getElementById("input");
const form = document.getElementById("form");

// async function to get location info
const displayLocation = () => {
    const ipAddress = userInput.value;
    const rawURI = uriString + `&ip=${ipAddress}` + "&fields=state_prov,city,zipcode,latitude,longitude,isp,time_zone";
    const endppoint = encodeURI(rawURI);

    fetch (endppoint)
        .then (response => {
            if (response.ok) {
                return response.json();
            }})
        .then ( data => {
            // console.log(data);

            // create map image
            const mapURI = "https://maps.googleapis.com/maps/api/staticmap?";
            
            // coordinates
            const latitude = data.latitude;
            const longitude = data.longitude;

            // html elements
            const mapImage = document.getElementById("map");
            const address = document.getElementById("ip-address");
            const location = document.getElementById("location");
            const timeZone = document.getElementById("timezone");
            const isp = document.getElementById("isp");

            // display map to screen
            const mapURIString = mapURI + `center=${latitude},${longitude}` + "&zoom=15&size=6000x3000&" + `key=${mapAPI}`;
            const mapURILink = encodeURI(mapURIString);
            mapImage.setAttribute('src', mapURILink);

            // render rest of information in info-conatiner
            address.innerHTML = `${data.ip}`;
            location.innerHTML = `${data.city}, ${data.state_prov} ${data.zipcode}`;
            timeZone.innerHTML = `${data.time_zone.current_time}`;
            isp.innerHTML = `${data.isp}`;
        }       
    )     
};

const loadUserIpInfo =  function(){
    fetch(uriString)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
        })
        .then(userData => {
            const mapURI = "https://maps.googleapis.com/maps/api/staticmap?";

            // coordinates
            const latitude = userData.latitude;
            const longitude = userData.longitude;

            // html elements
            const mapImage = document.getElementById("map");
            const address = document.getElementById("ip-address");
            const location = document.getElementById("location");
            const timeZone = document.getElementById("timezone");
            const isp = document.getElementById("isp");

            // display map to screen
            const mapURIString = mapURI + `center=${latitude},${longitude}` + "&zoom=15&size=6000x3000&" + `key=${mapAPI}`;
            const mapURILink = encodeURI(mapURIString);
            mapImage.setAttribute('src', mapURILink);

            // render rest of information in info-conatiner
            address.innerHTML = `${userData.ip}`;
            location.innerHTML = `${userData.city}, ${userData.state_prov} ${userData.zipcode}`;
            timeZone.innerHTML = `${userData.time_zone.current_time}`;
            isp.innerHTML = `${userData.isp}`;
        });
};

document.onload = loadUserIpInfo();

// get image of map
form.addEventListener("submit", event => {
    event.preventDefault();
    displayLocation();
});
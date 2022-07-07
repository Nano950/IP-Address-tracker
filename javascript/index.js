// api information
const apikey = "e53b0be07c46481681a335df69fb87cc";
const uriString = `https://api.ipgeolocation.io/ipgeo?apiKey=${apikey}`;


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
            console.log(data);

            // create map image
            const mapAPI = "AIzaSyBOhgRrICsrRjqjNgbhty5v90TJ1gnoMqQ";
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
            mapURIString = mapURI + `center=${latitude},${longitude}` + "&zoom=15&size=6000x3000&" + `key=${mapAPI}`;
            mapURILink = encodeURI(mapURIString);
            mapImage.setAttribute('src', mapURILink);

            // render rest of information in info-conatiner
            address.innerHTML = `${data.ip}`;
            location.innerHTML = `${data.city}, ${data.state_prov} ${data.zipcode}`;
            timeZone.innerHTML = `${data.time_zone.current_time}`;
            isp.innerHTML = `${data.isp}`;
        }       
    )     
}

// get image of map
form.addEventListener("submit", event => {
    event.preventDefault();
    locationData = displayLocation();
});
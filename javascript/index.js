// api information
const apikey = "e53b0be07c46481681a335df69fb87cc";
const uriString = `https://api.ipgeolocation.io/ipgeo?apiKey=${apikey}`;


// page elements
const userInput = document.getElementById("input");
const form = document.forms[0];

// async function to get location info
const locationInfo = () => {
    const ipAddress = userInput.value;
    const rawURI = uriString + `&ip=${ipAddress}` + "&fields=state_prov,city,zipcode,latitude,longitude,isp,time_zone";
    const endppoint = encodeURI(rawURI);

    fetch (endppoint)
        .then (response => {
            if (response.ok) {
                return response.json();
            }})
        // use static google map to display location with a marker
        // separtate map stuff into a new function
        .then ( data => {
            parsedData = JSON.parse(data);
            const mapAPI = "e964de9e716b449cb3be7cacafad0fd5";
            const mapURIString = `https://maps.geoapify.com/v1/staticmap?apiKey=${mapAPI}`;
            const mapCenter =[parsedData.latitude,data.longitude];
            

        })
        
}  
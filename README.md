
## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview
A web app that allows the user to type an ip address and see its location on the map, isp,ip address, city, and current time.
### The challenge

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements on the page
- See their own IP address on the map on the initial page load
- Search for any IP addresses or domains and see the key information and location

### Screenshot

![](./Screenshot%202022-07-06%20204332.png)
![](./Screenshot%202022-07-06%20204747.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process
-look at figma design to see the proportions of the styles
-design the mosbile version
-create a rough flowchart of the javascript logic
-find apis to use and get keys
-write javascript
-make design responsive


### Built with

- Semantic HTML5 markup
- CSS custom properties
- Mobile-first workflow
- Sass
- google static maps api
- IP geolocation api
- scout app
- javascript

### What I learned

- in the HTML file, modules have to have the type of "module" to be able to use "export" and "import" statements

- when you get a json file from a api request, handle the response data within a ".then" function rather than try to use the data in a function somwhere else in the code.

-define variables for api keys in a seperate file outside of the working tree (in a file that is ignored by git basically).

-comment blocks and sections of code that do specific tasks, like making a GET request, or displaying/rendering data, etc.

To see how you can add code snippets, see below:

```js
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
```
### Continued development

-request a map size that fits the user screen by dynamically checking the window size
-create a error page that shows when something other than an ip address is typed
-create a menu n to display more information 
-constantly update the time displayed

### Useful resources

- [resource 1](https://www.codecademy.com) - This helped me learn how to access apis using GET and POST requests. I will continue to use this resource moving forward.
- [resource 2](https://bobbyhadz.com/blog/javascript-import-variables-from-another-file) - This article helped me learn how to properly hide api keys in serperate files
## Author

- Frontend Mentor - [@Nano950](https://www.frontendmentor.io/profile/Nano950)


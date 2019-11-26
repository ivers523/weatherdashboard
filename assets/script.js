const apiKey = "8f77f345ff105aec1b870529690d48f3";
const cityName = documnent.get
const queryURL = "api.openweathermap.org/data/2.5/weather?q=" + cityName + 

// get query url, axious function

axios.get(queryURL)
    .then(function (response) {
        console.log("response", response);


    });


const apiKey = "7a5f9d8af7411b1dde7d32647376929f";
let cityName = "Minneapolis"

// get query url, axious function to ensure queryurl is functioning
    // function getURL() {
    //     const queryURL = "https://api.openweathermap.org/data/2.5/forecast?id=524901&APPID="+apiKey;
    //     axios.get(queryURL)
    //         .then(function (response) {
    //             console.log(response)

    //         })
    //     }
    // getURL();

    function citySearch (){
        const cityURL = "https://api.openweathermap.org/data/2.5/weather?q="+cityName+ "&units=imperial&appid=" +apiKey;

        axios.get(cityURL)
            .then(function (response) {
                console.log(response)
                document.getElementById("weather-jumbo").setAttribute.innerHTML = [data.data.name]
            })
    };
    citySearch ();
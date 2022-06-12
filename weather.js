var urlOfAPI = "https://weatherdbi.herokuapp.com/data/weather/innopolis";

function getResponse() {
    fetch(urlOfAPI).then((response) => {
        return response.json()
    }).then((data => {
        
        // !----- Important -----!
        // Note sometimes this API crashes for unknow reasons. So please try later,
        // or please contact me if it doesn't work.
        // This code works fine.
        // Thank you...!

        document.querySelector("#comment").textContent = data.currentConditions.comment;
        document.querySelector("#dayhour").textContent = data.currentConditions.dayhour;
        document.querySelector("#humidity").textContent = data.currentConditions.humidity;
        document.querySelector("#temp").textContent = data.currentConditions.temp.c;
        document.querySelector("#wind").textContent = data.currentConditions.wind.km;
    }))
}

getResponse();

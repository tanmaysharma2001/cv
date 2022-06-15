var urlOfAPI = "https://weatherdbi.herokuapp.com/data/weather/innopolis";
var CommentElement = document.querySelector("#comment");
var DayHourElement = document.querySelector("#dayhour");
var HumidityElement = document.querySelector("#humidity");
var TempElement = document.querySelector("#temp");
var WindElement = document.querySelector("#wind");
function getData() {
    fetch(urlOfAPI).then(function (response) {
        return response.json();
    }).then((function (data) {
        // !----- Important -----!
        // Note sometimes this API crashes for unknow reasons. So please try later,
        // or please contact me if it doesn't work.
        // This code works fine.
        // Thank you...!
        CommentElement.textContent = data.currentConditions.comment;
        DayHourElement.textContent = data.currentConditions.dayhour;
        HumidityElement.textContent = data.currentConditions.humidity;
        TempElement.textContent = data.currentConditions.temp.c;
        WindElement.textContent = data.currentConditions.wind.km;
    }));
}
getData();

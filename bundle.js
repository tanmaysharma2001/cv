var urlOfAPI = "https://weatherdbi.herokuapp.com/data/weather/innopolis";
const CommentElement = document.querySelector("#comment");
const DayHourElement = document.querySelector("#dayhour");
const HumidityElement = document.querySelector("#humidity");
const TempElement = document.querySelector("#temp");
const WindElement = document.querySelector("#wind");
function getData() {
    fetch(urlOfAPI).then((response) => {
        return response.json();
    }).then((data => {
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

const dateButton = document.getElementById("date_button");
const initialText = document.getElementById("initial");
const finalText = document.getElementById("final");
const dobButton = document.getElementById("dob_button");
const inputDate = document.getElementById("input_date")
let dateOfBirth = inputDate.value;

const yearEl = document.getElementById("year");
const monthEl = document.getElementById("month");
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

const UpdateAge = () => {
    const currDate = new Date();
    const dateDiff = currDate - dateOfBirth;

    const year = Math.floor(dateDiff/(365*24*60*60*1000));
    const month = Math.floor(dateDiff/(24*60*60*1000*365)%12);
    const days = Math.floor(dateDiff/(1000*60*60*24)%30);
    const hours = Math.floor(dateDiff/(1000*60*60)%24);
    const minutes = Math.floor(dateDiff/(1000*60)%60);
    const seconds = Math.floor(dateDiff/(1000)%60);

    yearEl.innerHTML = year;
    monthEl.innerHTML = month;
    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minutesEl.innerHTML = minutes;
    secondsEl.innerHTML = seconds;
}

const SetDobHandler = () => {
    const dateString = inputDate.value;
    dateOfBirth = dateString ? new Date(dateString) : null;

    if(dateOfBirth){
        initialText.classList.add("hide");
        finalText.classList.remove("hide");
        setInterval(() =>{
            UpdateAge();
        },1000)
    }

    else{
        finalText.classList.add("hide");
        initialText.classList.remove("hide");
    }
}



SetDobHandler();

dobButton.addEventListener("click",SetDobHandler);


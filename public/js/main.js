const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');
const city_name = document.getElementById('city_name');
const temp_real_val = document.getElementById('temp_real_val');
const temp_status = document.getElementById('temp_status');

const getInfo = async (event) => {
    event.preventDefault();

    let cityVal = cityName.value; // Use the value property to get the input value

    if (cityVal === "") {
        city_name.innerText = 'Please write a proper city name';
    } else {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=ad71d867295c2e82b75fa028e2d6a030`;
            const response = await fetch(url);
            const data = await response.json();
            // console.log(data);
            const arrData = [data];
            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
            temp_real_val.innerText = arrData[0].main.temp;
            temp_status.innerText = arrData[0].weather[0].main;
        } catch {
            city_name.innerText = 'Please enter the city name properly';
        }
    }
}

submitBtn.addEventListener('click', getInfo);

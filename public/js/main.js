const submitBtn = document.getElementById("submitBtn");
const cityName = document.getElementById("cityName");
const city_name = document.getElementById("city_name");
const temp_real_val = document.getElementById("temp_real_val");
const temp_status = document.getElementById("temp_status");
const datahide = document.querySelector(".middle_layer");




const getInfo = async (event) => {
    event.preventDefault();
    let cityVal = cityName.value;


    // api.openweathermap.org / data / 2.5 / weather ? q = pune & appid=a9e30f59660c6a75761abf2e80c03a5d

    if (cityVal === "") {
        city_name.innerText = `please write the city name before search`;
        datahide.classList.add("data_hide");

    } else {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=a9e30f59660c6a75761abf2e80c03a5d`;
            const response = await fetch(url);

            const data = await response.json();

            const arrData = [data];
            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country }`;
            temp_real_val.innerText = arrData[0].main.temp;

            const tempMood = arrData[0].weather[0].main;

            // condition to check sunny or weather
            if (tempMood === "Clear") {
                temp_status.innerHTML =
                    "<i class='fas fa-sun' style= 'color: #eccc68;'><i/i>";
            }
           else if (tempMood === "Cloud") {
                temp_status.innerHTML =
                    "<i class='fas fa-cloud' style= 'color: #f1f2f6;'><i/i>";
            }
            else if (tempMood === "Rain") {
                temp_status.innerHTML =
                    "<i class='fas fa-cloud-rain' style= 'color: #a4b0be;'><i/i>";
            }
            else {
                temp_status.innerHTML =
                    "<i class='fas fa-sun' style= 'color: #eccc68;'><i/i>";
            }
            datahide.classList.remove("data_hide");
        } catch {
            city_name.innerText = `please enter the city name properly`;
            datahide.classList.add("data_hide");
        }
    }
}

submitBtn.addEventListener("click", getInfo);
function updateTime() {
  let selectedCitiesContainerElement = document.querySelector(
    "#selected-cities-container"
  );
  selectedCitiesContainerElement.innerHTML = `<div class="city-container">
            <div>
              <span class="city-name">New York City</span>
              <br />
              <span class="date">
                ${moment().tz("America/New_York").format("MMMM D, YYYY")}
              </span>
            </div>
            <div class="time">${moment()
              .tz("America/New_York")
              .format("h:mm:ss")} <small>${moment()
    .tz("America/New_York")
    .format("A")}</small>
            </div>
          </div>
          <div class="city-container">
            <div>
              <span class="city-name">Shanghai</span>
              <br />
              <span class="date">
                ${moment().tz("Asia/Shanghai").format("MMMM D, YYYY")}
              </span>
            </div>
            <div class="time">${moment()
              .tz("Asia/Shanghai")
              .format("h:mm:ss")} <small>${moment()
    .tz("Asia/Shanghai")
    .format("A")}</small>
            </div>
          </div>
          <div class="city-container">
            <div>
              <span class="city-name">Paris</span>
              <br />
              <span class="date">
                ${moment().tz("Europe/Paris").format("MMMM D, YYYY")}
              </span>
            </div>
            <div class="time">${moment()
              .tz("Europe/Paris")
              .format("h:mm:ss")} <small>${moment()
    .tz("Europe/Paris")
    .format("A")}</small>
            </div>
          </div>
          <div class="city-container">
            <div>
              <span class="city-name">Tokyo</span>
              <br />
              <span class="date">
                ${moment().tz("Asia/Tokyo").format("MMMM D, YYYY")}
              </span>
            </div>
            <div class="time">${moment()
              .tz("Asia/Tokyo")
              .format("h:mm:ss")} <small>${moment()
    .tz("Asia/Tokyo")
    .format("A")}</small>
            </div>
          </div>
          <div class="city-container">
            <div>
              <span class="city-name">Mumbai</span>
              <br />
              <span class="date">
                ${moment().tz("Asia/Kolkata").format("MMMM D, YYYY")}
              </span>
            </div>
            <div class="time">${moment()
              .tz("Asia/Kolkata")
              .format("h:mm:ss")} <small>${moment()
    .tz("Asia/Kolkata")
    .format("A")}</small>
            </div>
          </div>
          `;
}

function changeCity(event) {
  clearInterval(allCitiesInterval);

  let timezone = event.target.value;
  let cityName = timezone;

  if (timezone === "America/New_York") {
    cityName = "New York City";
  }
  if (timezone === "Asia/Shanghai") {
    cityName = "Shanghai";
  }
  if (timezone === "Europe/Paris") {
    cityName = "Paris";
  }
  if (timezone === "Asia/Tokyo") {
    cityName = "Tokyo";
  }
  if (timezone === "Asia/Kolkata") {
    cityName = "Mumbai";
  }

  let selectedCitiesContainerElement = document.querySelector(
    "#selected-cities-container"
  );
  selectedCitiesContainerElement.innerHTML = `
  <div class="city-container">
            <div>
              <span class="city-name">${cityName}</span>
              <br />
              <span class="date">
                ${moment().tz(timezone).format("MMMM D, YYYY")}
              </span>
            </div>
            <div class="time">${moment()
              .tz(timezone)
              .format("h:mm:ss")} <small>${moment()
    .tz(timezone)
    .format("A")}</small>
            </div>
          </div>`;
}

// function showAllCities() {
//   let cities = ["New York", "Shanghai", "Paris", "Tokyo", "Mumbai"];

//   cities.forEach;
//   if (city === "New York") {
//     cityTimezone = "America/New_York";
//   }

//   if (city === "Shanghai") {
//     cityTimezone = "Asia/Shanghai";
//   }

//   if (city === "Paris") {
//     cityTimezone = "Europe/Paris";
//   }

//   if (city === "Tokyo") {
//     cityTimezone = "Asia/Tokyo";
//   }

//   if (city === "Mumbai") {
//     cityTimezone = "Asia/Kolkata";
//   }

//   let allCitiesHTML = "";

// cities.forEach(function (city, index)){if (index < 4){allCitiesHTML=allCitiesHTML + `
//   <div class="city-container">
//           <div>
//             <span class="city-name">${cityTimezones.name}</span>
//             <br />
//             <span class="date">
//               ${moment().tz(${cityTimezones.timezone}).format("MMMM D, YYYY")}
//             </span>
//           </div>
//           <div class="time">${moment()
//             .tz(${cityTimezones.timezone})
//             .format("h:mm:ss")} <small>${moment()
//   .tz(${cityTimezones.timezone})
//   .format("A")}</small>
//           </div>
//         </div>`;}}

// selectedCitiesContainerElement.innerHTML = allCitiesHTML;

// function determineDisplayType(event) {
//   let timezone = event.target.value;
//   if (timezone.length < 2) {
//     showAllCities();
//     setInterval(showAllCities, 1000);
//   } else {
//     showOneCity(timezone);
//     setInterval(showOneCity(timezone), 1000);
//   }
// }

updateTime();
allCitiesInterval = setInterval(updateTime, 1000);

let citiesSelectorElement = document.querySelector("#cities-selector");
citiesSelectorElement.addEventListener("change", changeCity);
citiesSelectorElement.addEventListener(
  "change",
  (citySelectInterval = setInterval(changeCity, 1000))
);

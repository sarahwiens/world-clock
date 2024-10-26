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
  if (timezone === "current") {
    timezone = moment.tz.guess();
  }
  let cityName = timezone
    .replace("_", " ")
    .replace("Kolkata", "Mumbai")
    .split("/")[1];
  console.log(cityName);

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
          </div>
          <a href="/"><button class="all-cites" href="/">Show All Cities</button></a>`;
}

updateTime();
allCitiesInterval = setInterval(updateTime, 1000);

let citiesSelectorElement = document.querySelector("#cities-selector");
citiesSelectorElement.addEventListener("change", changeCity);

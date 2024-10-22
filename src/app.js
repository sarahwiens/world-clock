function updateNewYork() {
  let newYorkCityTime = moment().tz("America/New_York").format("h:mm:ss");
  let newYorkCityMeridiem = moment().tz("America/New_York").format("A");
  let newYorkCityDate = moment().tz("America/New_York").format("MMMM D, YYYY");
  let dateElementNewYork = document.querySelector("#date-new-york-city");
  dateElementNewYork.innerHTML = newYorkCityDate;
  let timeElementNewYork = document.querySelector("#time-new-york-city");
  timeElementNewYork.innerHTML = `${newYorkCityTime} <small>${newYorkCityMeridiem}</small>`;
}
function updateShanghai() {
  let shanghaiTime = moment().tz("Asia/Shanghai").format("h:mm:ss");
  let shanghaiMeridiem = moment().tz("Asia/Shanghai").format("A");
  let shanghaiDate = moment().tz("Asia/Shanghai").format("MMMM D, YYYY");
  let dateElementShanghai = document.querySelector("#date-shanghai");
  dateElementShanghai.innerHTML = shanghaiDate;
  let timeElementShanghai = document.querySelector("#time-shanghai");
  timeElementShanghai.innerHTML = `${shanghaiTime} <small>${shanghaiMeridiem}</small>`;
}
function updateParis() {
  let parisTime = moment().tz("Europe/Paris").format("h:mm:ss");
  let parisMeridiem = moment().tz("Europe/Paris").format("A");
  let parisDate = moment().tz("Europe/Paris").format("MMMM D, YYYY");
  let dateElementParis = document.querySelector("#date-paris");
  dateElementParis.innerHTML = parisDate;
  let timeElementParis = document.querySelector("#time-paris");
  timeElementParis.innerHTML = `${parisTime} <small>${parisMeridiem}</small>`;
}
function updateTokyo() {
  let tokyoTime = moment().tz("Asia/Tokyo").format("h:mm:ss");
  let tokyoMeridiem = moment().tz("Asia/Tokyo").format("A");
  let tokyoDate = moment().tz("Asia/Tokyo").format("MMMM D, YYYY");
  let dateElementTokyo = document.querySelector("#date-tokyo");
  dateElementTokyo.innerHTML = tokyoDate;
  let timeElementTokyo = document.querySelector("#time-tokyo");
  timeElementTokyo.innerHTML = `${tokyoTime} <small>${tokyoMeridiem}</small>`;
}
function updateMumbai() {
  let mumbaiTime = moment().tz("Asia/Kolkata").format("h:mm:ss");
  let mumbaiMeridiem = moment().tz("Asia/Kolkata").format("A");
  let mumbaiDate = moment().tz("Asia/Kolkata").format("MMMM D, YYYY");
  let dateElementMumbai = document.querySelector("#date-mumbai");
  dateElementMumbai.innerHTML = mumbaiDate;
  let timeElementMumbai = document.querySelector("#time-mumbai");
  timeElementMumbai.innerHTML = `${mumbaiTime} <small>${mumbaiMeridiem}</small>`;
}
updateNewYork();
setInterval(updateNewYork, 1000);
updateShanghai();
setInterval(updateShanghai, 1000);
updateParis();
setInterval(updateParis, 1000);
updateTokyo();
setInterval(updateTokyo, 1000);
updateMumbai();
setInterval(updateMumbai, 1000);

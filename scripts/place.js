
const tempCelsius = 10;
const windKmph = 5; 


const celsiusToFahrenheit = (celsius) => (9 / 5) * celsius + 32;


const kmphToMph = (kmph) => kmph / 1.609344;


const calculateWindChill = (tFahrenheit, wMph) => {
  return (
    35.74 +
    0.6215 * tFahrenheit -
    35.75 * Math.pow(wMph, 0.16) +
    0.4275 * tFahrenheit * Math.pow(wMph, 0.16)
  );
};


const temperatureElement = document.querySelector("#temperature");
const windSpeedElement = document.querySelector("#wind");
const windChillElement = document.querySelector("#chill");


if (temperatureElement && windSpeedElement && windChillElement) {

  const tempFahrenheit = celsiusToFahrenheit(tempCelsius).toFixed(1);
  const windMph = kmphToMph(windKmph).toFixed(1);

  temperatureElement.innerHTML = `${tempFahrenheit} °F`;
  windSpeedElement.innerHTML = `${windMph} mph`;

  if (tempFahrenheit <= 50 && windMph > 3) {
    const windChillFahrenheit = calculateWindChill(
      tempFahrenheit,
      windMph
    ).toFixed(1);
    windChillElement.innerHTML = `${windChillFahrenheit} °F`;
  } else {
    windChillElement.innerHTML = "N/A";
  }

  console.log("Temperature in Fahrenheit:", tempFahrenheit);
  console.log("Wind Speed in mph:", windMph);
  console.log("Wind Chill:", windChillElement.innerHTML);
} else {
  console.error("One or more elements not found:", {
    temperatureElement,
    windSpeedElement,
    windChillElement,
  });
}
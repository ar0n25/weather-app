const cityInput = document.getElementById('cityInput');
const searchBtn = document.getElementById('searchBtn');
const result = document.getElementById('result');

async function getWeather(city) {
  result.innerHTML = '<p>Loading...</p>';
  try {
    const res = await fetch(`/api/weather?city=${encodeURIComponent(city)}`);
    const data = await res.json();

    if (!res.ok) {
      result.innerHTML = `<p class="error">${data.error}</p>`;
      return;
    }

    result.innerHTML = `
      <p>${data.city}, ${data.country}</p>
      <p class="temp">${data.temp}°C</p>
      <p>${data.description}</p>
      <p>Feels like: ${data.feels_like}°C</p>
      <p>Humidity: ${data.humidity}%</p>
      <p>Wind: ${data.wind_speed} m/s</p>
    `;
  } catch (err) {
    result.innerHTML = `<p class="error">Something went wrong</p>`;
  }
}

searchBtn.addEventListener('click', () => {
  const city = cityInput.value.trim();
  if (city) getWeather(city);
});

cityInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') searchBtn.click();
});

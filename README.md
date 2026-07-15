# Weather App

A simple weather lookup app built with Flask and vanilla JavaScript, consuming the OpenWeatherMap API.

## Live demo
https://your-app-name.onrender.com

## Features
- Search current weather by city name
- Backend proxy keeps the API key server-side (never exposed to the client)
- Error handling for invalid cities and API failures

## Tech stack
- Python (Flask)
- HTML/CSS/JavaScript (vanilla, no framework)
- OpenWeatherMap API
- Deployed on Render

## Running locally
1. Clone the repo
2. `pip install -r requirements.txt`
3. Add your OpenWeatherMap API key to a `.env` file:
   `OPENWEATHER_API_KEY=your_key_here`
4. `python app.py`
5. Visit `http://127.0.0.1:5000`
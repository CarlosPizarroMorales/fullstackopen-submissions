# [Data for countries][00]
_Exercises 2.18-2.20_

## Usage
After cloning the repository and installing the node_modules, you will need to provide your own [OpenWeatherMap](https://openweathermap.org) API key in [this file](./src/services/countries.js#L3) for the project to function properly.

## Exercise 2.18 - Step 1
- Make an application that allow users to see information from countries.
- The user interface consists on an input::text in what the user types country names or part of them.
- While the input matches more than 10 countries the user is prompted to type a more specific query.
- If there are at least 1 and no more than 10, a list below the input shows all the countries matched.
- When there is only 1 country matching the query, the following data of the country is shown:
  - Capital,
  - Area,
  - Spoken languages
  - Flag

**NB:** the app should support the most of the countries, and some edge cases like _Sudan_ that is actually _South Sudan_ doesn't need to be supported.

- API: https://studies.cs.helsinki.fi/restcountries/api/
- Endpoints:
  - `all`	All countries
  - `name/{name}` a single country by name. Common or official.	

### Initial steps:
1. ✅ Clean the base app.
2. ✅ Install and import axios.
3. ✅ Create a piece of state `[ countries, setCountries ] = useState([])`
4. ✅ Implement useEffect to fetch data and `setCountries(resp.data)`.
5. ✅ Check data rendering.

### Improving, modularizing, and filtering
6. ✅ Create `src/services/countries.js` and move axios call.
7. ✅ Refactor `useEffect` to use `getAll` service.
8. ✅ Implement searching features: Input, search state, filtering, render filtered.
9. ✅ Refactor rendering: implement conditional rendering: 10 < x keep typing, 1 < x < 11, x = 1 show detail

## Exercise 2.19 - Step 2
Improving the app:
- When there is a list of countries, display a button next to the name so the user can click to show the info of that country without keep typing.

1. ✅ Refactor CountriesList so each country displays a button for rendering that country.
2. ✅ Refactor filter, so it can handle:
   1. Search empty '' 'please, some country's name. 
   2. newSearch === country.name.common, renders only one & handles duplicated names like Guinea or Sudan
   3. country.name.common.includes(newSearch), renders list of countries.
```jsx
// original filtering logic:
const filteredCountries = countries.filter(c => 
  c.name.common.toLowerCase().includes(newSearch))
// new logic: Even if its an IIFE, it will run every time the component 
// re-renders, ensuring only one type of return as the user types (or not).
const filteredCountries = (() => {
    // empty input
    const search = newSearch.trim().toLowerCase();
    if (search === "") return [];
    // exact match
    const exactMatch = countries.find(c => c.name.common.toLowerCase() === search);
    if (exactMatch) return [exactMatch];
    // multiple matches
    return countries.filter(c => c.name.common.toLowerCase().includes(search));
  })();  
```
3. ✅ Refactor components so App.jsx pass `setNewSearch` method as a prop through the tree.
4. ✅ Attach a click handler: `onClick={ () => setNewSearch(country.name.common) }` to the button.


## Exercise 2.20 - Step 3
- Now, add to the showed data of a country, the current weather report for its capital.
- Suggested API: https://openweathermap.org (it needs a free key)
- How to get the weather icons: https://openweathermap.org/weather-conditions#Icon-list
**NB:** you may need to use Chrome if Firefox sends a request error.
**NB:** don't save the api key in the project source. Use an environment variable. Some resources to read:
- Enviroment variables [in Vite][10]

### Enviroment
* **Example API call**: https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid={API key}
* The _response_ object has a `current` object where it is contained all the necessary data.
* `current.temperature` and `current.wind_speed` are the required fields.
* `current.weather.icon` has a code like `04d` that must be put in this url: `https://openweathermap.org/img/wn/10d@2x.png` to get the corresponding icon. The `@2x` is optional and can be up to `@4x` for larger sizes.
* **In countries api we find:** `country.capitalInfo.latlng = [-33.45, -70.67]`

1. Decide the approach:
   1. ✅ `Country.jsx::useEffect()`?
   2. `App.jsx::useState(weather)` on filtering?
2. ✅ Declare `[ weather, setWeather ] = useState({})`
3. ✅ Implement a new function in `src/services/countries.js::getWeather()`
4. ✅ Implement `Country.jsx::useEffect(getWeather())`
6. ✅ Prepare the environment: 
   1. set the prefixer, add it to gitignore
   2. set a new package.json::script `prefixenv`
   3. run before run project
7. **NOTE:** I don't know why but running the script from the npm run `script` doesn't work. I had to manually run the script before `npm run dev`
8. **UPDATE:** This is due to npm scripts running each one in its own shell. To fix the issue run `npm run dev` inside the script to ensure it can get the apikey value.
9. ✅ Correct the api call: add `unit=metric` parameter to get Celsius temperature instead Kelvin.
10. ✅ Set a conditional rendering on Country.jsx so the first run doesn't render empty weather data. For this, set `weather` initial state to `null`.
11. ✅ Extra refactor: make a `Weather.jsx` component to declutter the `Country` component



## Response sample:
```json
// https://api.openweathermap.org/data/2.5/weather?q=Santiago,cl&APPID=ka'chín!

{
  "coord": {
    "lon": -70.6483,
    "lat": -33.4569
  },
  "weather": [
    {
      "id": 803,
      "main": "Clouds",
      "description": "broken clouds",
      "icon": "04n"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 283.39,
    "feels_like": 282.04,
    "temp_min": 281.63,
    "temp_max": 284.51,
    "pressure": 1021,
    "humidity": 60,
    "sea_level": 1021,
    "grnd_level": 934
  },
  "visibility": 10000,
  "wind": {
    "speed": 5.66,
    "deg": 170
  },
  "clouds": {
    "all": 75
  },
  "dt": 1726196898,
  "sys": {
    "type": 2,
    "id": 2095708,
    "country": "CL",
    "sunrise": 1726224234,
    "sunset": 1726266784
  },
  "timezone": -10800,
  "id": 3871336,
  "name": "Santiago",
  "cod": 200
}
```

---
[00]:https://fullstackopen.com/en/part2/adding_styles_to_react_app#exercises-2-18-2-20
[10]:https://vitejs.dev/guide/env-and-mode.html
# [Data for countries][00]
_Exercises 2.18-2.20_

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



## Exercise 2.20 - Step 3
- Now, add to the showed data of a country, the current weather report for its capital.
- Suggested API: https://openweathermap.org (it needs a free key)
- How to get the weather icons: https://openweathermap.org/weather-conditions#Icon-list
**NB:** you may need to use Chrome if Firefox sends a request error.
**NB:** don't save the api key in the project source. Use an environment variable. Some resources to read:
- Enviroment variables [in Vite][10]
- 










---
[00]:https://fullstackopen.com/en/part2/adding_styles_to_react_app#exercises-2-18-2-20
[10]:https://vitejs.dev/guide/env-and-mode.html
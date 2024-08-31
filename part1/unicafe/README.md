- [Exercise UNICAFE](#exercise-unicafe)
  - [STEP 1](#step-1)
  - [STEP 2](#step-2)

# [Exercise UNICAFE][00]

## STEP 1

Like most companies, the student restaurant of the University of Helsinki [Unicafe][01] collects feedback from its customers. Your task is to implement a web application for collecting customer feedback. There are only three options for feedback: good, neutral, and bad.

The application must display the total number of collected feedback for each category. Note that your application needs to work only during a single browser session. Once you refresh the page, the collected feedback is allowed to disappear. Your app could look like this:

![imagen](./src/assets/sample-1.6.png)


It is advisable to use the same structure that is used in the material and previous exercise. Use the base code below.

```jsx
// main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(<App />)

// App.jsx
import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      code here
    </div>
  )
}

export default App
```

## STEP 2


[00]:https://fullstackopen.com/en/part1/a_more_complex_state_debugging_react_apps#exercises-1-6-1-14
[01]:https://www.unicafe.fi/

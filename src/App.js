import React, {useState, useEffect} from "react";
import Post from "./Components/Post";
import "./App.css";
import axios from "axios";
import date from "date-and-time";

function App() {
  const [post, setPost] = useState({});
  const BASE_URL = 'https://api.nasa.gov/planetary/apod?api_key=1nZRJTT4osWq35OiAIXOHJsMaxERpf42eUdEu52d';
  // const HD_QUERY_PARAMETER = '&hd=True'; - May not need that, hdurl is always included in response.data
  const [TODAY, setTODAY] = useState(date.format( new Date(), 'YYYY-MM-DD') );
  const [inputDate, setInputDate] = useState(TODAY);

  useEffect( () => {
    axios.get(`${BASE_URL}&date=${TODAY}`)
    .then( response => {
      setPost(response.data)
    })
    .catch( error => {
      debugger
    })
  }, [])

  const handleInputDateChange = (event) => {
    setInputDate(event.target.value)
    console.log('change')
  }

  const dateSubmit = (e) => {
    console.log(`Query is ${inputDate}`);

    axios.get(`${BASE_URL}&date=${inputDate}`)
    .then( response => {
      setPost(response.data)
    })
    .catch( error => {
      debugger
    })

    e.preventDefault();
  }

  return (
    <div className="App">
      <div className='header'>
        <h1>Search Nasa's Astronomy Picture of the Day archive!</h1>
        <form className='Search' onSubmit={dateSubmit} >
          <p>Search photos by date: (YYYY-MM-DD)</p>
          <input 
            type="text"
            value={inputDate}
            onChange={handleInputDateChange}
          />
          <input type="submit" value="Search"/>
        </form>
      </div>
      <Post post={post}/>
    </div>
  );
}

export default App;

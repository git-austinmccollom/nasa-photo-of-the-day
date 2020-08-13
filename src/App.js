import React, {useState, useEffect} from "react";
import Post from "./Components/Post";
import "./App.css";
import axios from "axios";
import date from "date-and-time";

function App() {
  const [post, setPost] = useState({});
  const BASE_URL = 'https://api.nasa.gov/planetary/apod?api_key=1nZRJTT4osWq35OiAIXOHJsMaxERpf42eUdEu52d';
  // const HD_QUERY_PARAMETER = '&hd=True'; - May not need that, hdurl is always included in response.data
  const TODAY = date.format(new Date(), 'YYYY-M-D');

  useEffect( () => {
    axios.get(`${BASE_URL}&date=${TODAY}`)
    .then( response => {
      setPost(response.data)
    })
    .catch( error => {
      debugger
    })
  }, [])

  return (
    <div className="App">
      <Post post={post}/>
    </div>
  );
}

export default App;

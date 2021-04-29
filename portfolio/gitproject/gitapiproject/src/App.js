import axios from 'axios';
import { useState, useEffect } from 'react';
import './App.css';


function App() {
  
  const [data, setData] = useState();
  console.log(data)

  const searchUsers = () => {
    axios.get("https://api.github.com/search/users?q=michael")
    .then((res) => {
      setData(res.data)
      console.log(res)
    })
    .catch(console.log)
  }

  useEffect(() => {
    searchUsers()
    .then((usersData) => {
      console.log(usersData)
    })
    .catch(console.log)
  })

  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
}

export default App;

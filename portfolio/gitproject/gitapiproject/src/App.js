import axios from 'axios';
import { useState, useEffect } from 'react';
import UserInfo from "./components/UserInfo"
import './App.css';


function App() {
  
  const [data, setData] = useState();
  console.log(data)

  const searchUsers = () => {
    axios.get("https://api.github.com/search/users?q=michael")
    .then((res) => {
      setData(res.data.items)
    })
    .catch(console.log)
  }

  useEffect(() => {
    searchUsers()
  }, []);

  return (
    <div className="App">
      {data.map((data) => {
        return <UserInfo data={data} key={data.id} />
      })}
    </div>
  );
}

export default App;

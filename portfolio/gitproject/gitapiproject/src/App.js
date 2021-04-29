import axios from "axios";
import { useState, useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
// import UserInfo from "./components/UserInfo";
import "./App.css";

function App() {
  const [data, setData] = useState();

  const searchUsers = () => {
    return axios.get("https://api.github.com/search/users?q=michael")
    .then((res) => {
      return res.data
    })
    .catch(console.log)
  }

  // axios.get("https://api.github.com/search/users?q=michael")
  // console.log(axios.get)

  useEffect(() => {
    searchUsers()
      .then((usersData) => {
        setData(usersData.data)
      })
      .catch(console.log)
  }, []);

  // if (data.length === 0) return <p>Page Loading</p>;
  return (
    <div>
      <h1>Hello</h1>
    </div>
    // <StyledDiv>
    //   {data.map((data) => {
    //     return <UserInfo data={data} key={data.id} />;
    //   })}
    // </StyledDiv>
  );
}


// const StyledDiv = styled.div`
//   display: flex;
//   width: 100%;
//   max-width: 800px;
//   margin: 0 auto;
//   /* border: 1px solid red; */
// `;

export default App;

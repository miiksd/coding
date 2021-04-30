import styled from "styled-components"

const UserInfo = (props) => {
  return (
    <UserDiv>
      <UserPic src={props.data.avatar_url} />
      <div>
        <NameDiv>
          <h3>name</h3>
          <h3>{props.data.login}</h3>
        </NameDiv>
        <div>
          <p>User info</p>
        </div>
        <div>
          <p>contact</p>
        </div>
      </div>
    </UserDiv>
  );
};


const UserDiv = styled.div`
  display: flex;
`;

const NameDiv = styled.div`
  display: flex;
  color: #8B949E;
`;

const UserPic = styled.img`
  width: 200px;
  border-radius: 50%;
`;



export default UserInfo;
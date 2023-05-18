import { styled } from "styled-components";
import Card from "./Card";

function Members({ teamData }) {
  return (
    <div>
      <TitleContainer>
        <h2>Members</h2>
      </TitleContainer>
      <MembersContainer>
        {teamData.map((item) => {
          return <Card item={item} />;
        })}
      </MembersContainer>
    </div>
  );
}

const TitleContainer = styled.div`
  margin-top: 20px;
  background-color: #ffcc00;
  width: 150px;
  height: 50px;
  border-radius: 10px 10px 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: #d0b134 solid;
  border-left: #d0b134 solid;
  border-right: #d0b134 solid;

  h2 {
    margin: 0;
  }
`;

const MembersContainer = styled.div`
  cursor: pointer;
  width: 100%;
  display: flex;
  border: #d0b134 groove;
  border-radius: 0 20px 20px 20px;
  height: 100%;
  padding: 20px;
  :hover {
    background-color: #ff7f00;
    transition: 0.6s;
  }
`;
export default Members;

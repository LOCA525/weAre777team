import { styled } from "styled-components";
import Card from "./Card";

function Members() {
  return (
    <div>
      <TitleContainer>
        <h2>Members</h2>
      </TitleContainer>
      <MembersContainer>
        <Card />
        <Card />
        <Card />
        <Card />
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
  display: flex;
  border: #d0b134 groove;
  border-radius: 0 20px 20px 20px;
  height: 100%;
  padding: 20px;
`;
export default Members;
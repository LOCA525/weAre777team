import { styled } from "styled-components";
function Card({ item }) {
  console.log(item);
  return (
    <CardContainer>
      <CharacterContainer>
        <img src={item.url} alt="jy" width={"90%"} />
      </CharacterContainer>
      <Mbti>{item.major}</Mbti>
      <Stack>{item.mbti}</Stack>
      <Name>{item.name}</Name>
    </CardContainer>
  );
}

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  border-radius: 10px;
  width: 24%;

  margin-right: 20px;
  max-height: 450px;
  background-color: #f1af14;
`;

const CharacterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Mbti = styled.div`
  font-size: 30px;
  font-weight: 900;
  margin-top: 20px;
`;
const Stack = styled.div`
  font-size: 30px;
  font-weight: 600;
  margin-top: 20px;
`;
const Name = styled.div`
  text-align: right;
  margin-top: 40px;
  font-size: 30px;
  font-weight: 900;
`;

export default Card;

// #FF7F00 주황색
// #D0B134 테두리색
// #F1AF14 카드색

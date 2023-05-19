import { useRecoilState } from "recoil";
import { styled } from "styled-components";
import { modalMemberData } from "../store/modalMemberData";

function Card({ item, setIsOpen, isOpen }) {
  const [, setMemberDdata] = useRecoilState(modalMemberData);
  const cardClick = () => {
    setIsOpen(!isOpen);
    setMemberDdata(item);
    // 클릭한 사람 상태값 recoil 저장.
  };
  return (
    <CardContainer onClick={cardClick}>
      <CharacterContainer character={item.url}></CharacterContainer>
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
  cursor: pointer;

  margin-right: 20px;
  max-height: 450px;
  background-color: #f1af14;
`;

const CharacterContainer = styled.div`
  width: 100%;
  height: 330px;
  background-image: url(${(props) => props.character});
  background-size: cover;
  background-repeat: no-repeat;
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

import { useEffect, useState } from "react";
import "./App.css";
import Banner from "./components/Banner";
import Members from "./components/Members";
import Title from "./components/Title";
import { styled } from "styled-components";
import axios from "axios";
import Modal from "./components/Modal";
import GuestBook from "./components/GuestBook";

function App() {
  const [teamData, setTeamData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    axios
      .get("https://team.weare777team.store/data")
      .then((data) => {
        console.log("data", data.data.result);
        setTeamData(data.data.result);
      })
      .catch(() => {
        console.log("실패");
      });
  }, []);
  return (
    <GlobalContainer>
      <AppContainer>
        <Modal openModalHandler={openModalHandler} setIsOpen={setIsOpen} isOpen={isOpen} />
        <Title />
        <Banner />
        <Members teamData={teamData} setIsOpen={setIsOpen} isOpen={isOpen} />
        <GuestBook />
      </AppContainer>
    </GlobalContainer>
  );
}

const GlobalContainer = styled.div`
  background-color: #f1eee9;
`;
const AppContainer = styled.div`
  /* 글로벌 배경색 */
  background-color: #f1eee9;
  padding: 0 20px 20px 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

export default App;

// 배경색 #F1EEE9
// 메인노랑 #FFCC00

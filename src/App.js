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
  const [render, setrender] = useState(true);
  const [teamData, setTeamData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };
  const getData = () => {
    axios
      .get("http://myweb.eba-63ucvpdw.ap-northeast-2.elasticbeanstalk.com/data")
      .then((data) => {
        setTeamData(data.data.result);
      })
      .catch(() => {
        console.log("실패");
      });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <GlobalContainer>
      <AppContainer>
        <Modal openModalHandler={openModalHandler} setIsOpen={setIsOpen} isOpen={isOpen} />
        <Title />
        <Banner />
        <Members teamData={teamData} setIsOpen={setIsOpen} isOpen={isOpen} />
        <GuestBook render={render} setrender={setrender} />
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

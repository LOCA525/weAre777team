import { useEffect, useState } from "react";
import "./App.css";
import Banner from "./components/Banner";
import Members from "./components/Members";
import Title from "./components/Title";
import { styled } from "styled-components";
import axios from "axios";

function App() {
  const [teamData, setTeamData] = useState([]);

  useEffect(() => {
    axios
      .get("http://myweb.eba-63ucvpdw.ap-northeast-2.elasticbeanstalk.com/data")
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
        <Title />
        <Banner />
        <Members teamData={teamData} />
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

import Logo from "../images/logo.png";
import { styled } from "styled-components";

function Title() {
  return (
    <TitleContainer>
      <img src={Logo} alt="logo" width={"300px"} />
    </TitleContainer>
  );
}

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default Title;

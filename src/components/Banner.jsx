import { styled } from "styled-components";
import teamBanner from "../images/teamBanner444.png";

function Banner() {
  return (
    <BannerContainer>
      <img src={teamBanner} alt="banner" height={"300px"} />
    </BannerContainer>
  );
}

const BannerContainer = styled.div`
  background-color: #ffcc00;
  border-radius: 30px;
  padding: 10px 0 10px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export default Banner;

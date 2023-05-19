import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { modalMemberData } from "../store/modalMemberData";

const Modal = ({ openModalHandler, isOpen }) => {
  const memberData = useRecoilValue(modalMemberData);
  return (
    <>
      <ModalContainer>
        <ModalBtn
          onClick={openModalHandler}
          // 클릭하면 Modal이 열린 상태(isOpen)를 boolean 타입으로 변경하는 메소드가 실행되어야 합니다.
        >
          {/* 조건부 렌더링을 활용해서 Modal이 열린 상태(isOpen이 true인 상태)일 때는 ModalBtn의 내부 텍스트가 'Opened!' 로 Modal이 닫힌 상태(isOpen이 false인 상태)일 때는 ModalBtn 의 내부 텍스트가 'Open Modal'이 되도록 구현 */}
        </ModalBtn>
        {/* 조건부 렌더링을 활용해서 Modal이 열린 상태(isOpen이 true인 상태)일 때만 모달창과 배경이 뜰 수 있게 구현 */}
        {isOpen ? (
          <ModalBackdrop onClick={openModalHandler}>
            <ModalView onClick={(e) => e.stopPropagation()}>
              <BtnContainer>
                <ExitBtn onClick={openModalHandler}>x</ExitBtn>
              </BtnContainer>
              <ContentContainer>
                <PictureContainer picture={memberData.url2} />
                <IntroduceContainer>{memberData.content}</IntroduceContainer>
              </ContentContainer>
            </ModalView>
          </ModalBackdrop>
        ) : null}
      </ModalContainer>
    </>
  );
};
const ModalContainer = styled.div`
  // Modal을 구현하는데 전체적으로 필요한 CSS를 구현
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const ModalBackdrop = styled.div`
  // Modal이 떴을 때의 배경을 깔아주는 CSS를 구현
  z-index: 1; //위치지정 요소
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const ModalBtn = styled.button`
  background-color: var(--coz-purple-600);
  text-decoration: none;
  border: none;
  padding: 20px;
  color: white;
  border-radius: 30px;
  cursor: pointer;
`;

const BtnContainer = styled.div`
  position: relative;
  :hover {
    background-color: red;
    transition: 0.5s;
  }
`;

const ExitBtn = styled(ModalBtn)`
  background-color: #ff7f00;
  border-radius: 10px;
  text-decoration: none;
  padding: 5px 10px;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0px;
  right: 0px;
`;

const ModalView = styled.div.attrs((props) => ({
  // attrs 메소드를 이용해서 아래와 같이 div 엘리먼트에 속성을 추가할 수 있다.
  role: "dialog",
}))`
  // Modal창 CSS를 구현합니다.
  padding: 20px;
  border-radius: 20px;
  width: 800px;
  height: 500px;

  background-color: #ff7f00;
  > div.desc {
    margin: 50px;
    font-size: 20px;
    color: var(--coz-purple-600);
  }
`;

const ContentContainer = styled.div`
  display: flex;
`;

const PictureContainer = styled.div`
  width: 500px;
  height: 500px;
  border-radius: 10px;
  border: #f1af14 dotted;
  background-image: url(${(props) => props.picture});
  background-size: cover;
  background-repeat: no-repeat;
`;

const IntroduceContainer = styled.div`
  border: #ffff solid;
  background-color: #ffff;
  border-radius: 10px;
  overflow-y: auto;
  height: 400px;
  padding: 20px;
  margin-top: 45px;
  margin-left: 10px;
  width: calc(100% - 500px);
  font-size: 25px;
  font-weight: 900;
`;

export default Modal;

import axios from "axios";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { styled } from "styled-components";
import { commentClickId } from "../store/commentClickId";

function DeleteModal({ deleteOpen, openDeleteHandler, getCommentApi }) {
  const [deletePassword, setDeletePassword] = useState("");
  const deleteId = useRecoilValue(commentClickId);
  useEffect(() => {
    if (deleteOpen === true) {
      document.body.style.overflow = "hidden";
    } else if (deleteOpen === false) {
      document.body.style.overflow = "unset";
    } else {
      document.body.style.overflow = "unset";
    }
  });

  const deleteSubmit = async (e) => {
    e.preventDefault();

    const commentBody = new FormData();
    commentBody.append("id_give", deleteId);
    commentBody.append("password_give", deletePassword);
    axios
      .post("http://myweb.eba-63ucvpdw.ap-northeast-2.elasticbeanstalk.com/comment/delete", commentBody)
      .then((data) => {
        alert(`${data.data.msg}`);
        setDeletePassword("");
        openDeleteHandler();
        getCommentApi();
      })
      .catch(() => {
        setDeletePassword("");
        alert("박명록삭제 실패!");
        openDeleteHandler();
        getCommentApi();
      });
  };
  return (
    <>
      <ModalContainer>
        <ModalBtn
          onClick={openDeleteHandler}
          // 클릭하면 Modal이 열린 상태(isOpen)를 boolean 타입으로 변경하는 메소드가 실행되어야 합니다.
        >
          {/* 조건부 렌더링을 활용해서 Modal이 열린 상태(isOpen이 true인 상태)일 때는 ModalBtn의 내부 텍스트가 'Opened!' 로 Modal이 닫힌 상태(isOpen이 false인 상태)일 때는 ModalBtn 의 내부 텍스트가 'Open Modal'이 되도록 구현 */}
        </ModalBtn>
        {/* 조건부 렌더링을 활용해서 Modal이 열린 상태(isOpen이 true인 상태)일 때만 모달창과 배경이 뜰 수 있게 구현 */}
        {deleteOpen ? (
          <ModalBackdrop onClick={openDeleteHandler}>
            <ModalView onClick={(e) => e.stopPropagation()}>
              <BtnContainer>
                <ExitBtn onClick={openDeleteHandler}>x</ExitBtn>
              </BtnContainer>
              <TitleContainer>방명록 삭제</TitleContainer>
              <FormContainer onSubmit={deleteSubmit}>
                <CommentForm typeof="submit">
                  <UserInfoFormForm>
                    <PasswordInput
                      onChange={(e) => {
                        setDeletePassword(e.target.value);
                      }}
                      value={deletePassword}
                      placeholder="비밀번호"
                    ></PasswordInput>
                    <UoloadBtn onClick={deleteSubmit}> 삭제</UoloadBtn>
                  </UserInfoFormForm>
                </CommentForm>
              </FormContainer>
            </ModalView>
          </ModalBackdrop>
        ) : null}
      </ModalContainer>
    </>
  );
}
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
  color: white;
  border-radius: 30px;
  cursor: pointer;
`;

const BtnContainer = styled.div`
  position: relative;
  :hover {
    opacity: 50%;
    transition: 0.3s;
  }
`;

const ExitBtn = styled(ModalBtn)`
  background-color: #ff7f00;
  border-radius: 10px;
  text-decoration: none;
  padding: 5px 10px;
  width: 30px;
  height: 30px;
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
  width: 300px;
  height: 100px;
  background-color: #ffff;

  > div.desc {
    margin: 50px;
    font-size: 20px;
    color: var(--coz-purple-600);
  }
`;

const FormContainer = styled.div`
  width: 100%;
  height: 300px;
`;

const CommentForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const UoloadBtn = styled.button`
  background-color: #ff7f00;
  width: 100%;
  font-weight: 900;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
`;

const UserInfoFormForm = styled.div`
  width: 100%;
  display: flex;
`;

const PasswordInput = styled.input`
  width: 200px;
  height: 30px;
  font-size: 15px;
  padding: 5px;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  font-size: 20px;
  font-weight: 900;
`;

export default DeleteModal;

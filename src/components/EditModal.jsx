import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { styled } from "styled-components";
import { commentClickId } from "../store/commentClickId";
import axios from "axios";

function EditModal({ isOpen, openModalHandler, getCommentApi }) {
  const [editComment, setEditComment] = useState("");
  const [editpassword, setEditPassword] = useState("");
  const editId = useRecoilValue(commentClickId);

  useEffect(() => {
    if (isOpen === true) {
      document.body.style.overflow = "hidden";
    } else if (isOpen === false) {
      document.body.style.overflow = "unset";
    } else {
      document.body.style.overflow = "unset";
    }
  });

  const editSubmit = async (e) => {
    e.preventDefault();
    if (editComment !== "") {
      const commentBody = new FormData();
      commentBody.append("id_give", editId);
      commentBody.append("password_give", editpassword);
      commentBody.append("comment_give", editComment);
      axios
        .post("https://team.weare777team.store/comment/edit", commentBody)
        .then((data) => {
          alert(`${data.data.msg}`);
          setEditComment("");
          setEditPassword("");
          openModalHandler();
          getCommentApi();
        })
        .catch(() => {
          setEditComment("");
          setEditPassword("");
          alert("박명록수정실패!");
          openModalHandler();
          getCommentApi();
        });
    } else {
      alert("한글자 이상 입력해주세요!");
    }
  };
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
              <TitleContainer>방명록 수정</TitleContainer>
              <FormContainer onSubmit={editSubmit}>
                <CommentForm typeof="submit">
                  <CommentInput
                    onChange={(e) => {
                      setEditComment(e.target.value);
                    }}
                    value={editComment}
                    placeholder="방명록을 남기세요 !"
                  ></CommentInput>
                  <UserInfoFormForm>
                    <PasswordInput
                      onChange={(e) => {
                        setEditPassword(e.target.value);
                      }}
                      value={editpassword}
                      placeholder="비밀번호"
                    ></PasswordInput>
                    <UoloadBtn onClick={editSubmit}> 수정</UoloadBtn>
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
  padding: 20px;
  color: white;
  border-radius: 30px;
  cursor: pointer;
  display: none;
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
  height: 300px;
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
const CommentInput = styled.input`
  height: 50%;
  padding: 20px;
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
  width: 100px;
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
export default EditModal;

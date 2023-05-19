import { useState } from "react";
import { styled } from "styled-components";
import EditModal from "./EditModal";
import { useRecoilState } from "recoil";
import { commentClickId } from "../store/commentClickId";
import DeleteModal from "./DeleteModal";

function GuestCards({ item, getCommentApi }) {
  const [isOpen, setIsOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [, setCommentClickId] = useRecoilState(commentClickId);
  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };
  const openDeleteHandler = () => {
    setDeleteOpen(!deleteOpen);
  };
  const commentClick = () => {
    setCommentClickId(item._id.$oid);
  };
  return (
    <div>
      <EditModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        openModalHandler={openModalHandler}
        getCommentApi={getCommentApi}
      />
      <DeleteModal
        deleteOpen={deleteOpen}
        setDeleteOpen={setDeleteOpen}
        openDeleteHandler={openDeleteHandler}
        getCommentApi={getCommentApi}
      />
      <GuestCard>
        <Header>
          <NickName>{item.name}</NickName>
          <EditButtonContainer>
            <EditBtn
              onClick={() => {
                openModalHandler();
                commentClick();
              }}
            >
              수정
            </EditBtn>
            <DeleteBtn
              onClick={() => {
                openDeleteHandler();
                commentClick();
              }}
            >
              삭제
            </DeleteBtn>
          </EditButtonContainer>
        </Header>
        <CommentBox>{item.comment}</CommentBox>
      </GuestCard>
    </div>
  );
}

const GuestCard = styled.div`
  height: 130px;
  border-radius: 10px;
  border: #ff7f00 solid;
  background-color: #ffff;
  margin-bottom: 10px;
`;
const Header = styled.div`
  height: 30px;
  border-bottom: #ff7f00 solid;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const NickName = styled.div`
  font-size: 20px;
  font-weight: 900;
  margin-left: 10px;
`;
const EditButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;
const EditBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 30px;
  font-size: 15px;
  font-weight: 900;
  margin-right: 10px;
  background-color: #ff7f00;
  color: #ffff;
  border-radius: 5px;
  cursor: pointer;
`;
const DeleteBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  font-weight: 900;
  background-color: #ff7f00;
  color: #ffff;
  width: 40px;
  border-radius: 5px;
  height: 30px;
  cursor: pointer;
`;
const CommentBox = styled.div`
  width: 100%;
  height: 100%;
  padding: 5px;
  font-weight: 600;
`;
export default GuestCards;

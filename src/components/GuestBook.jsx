import axios from "axios";
import { useEffect, useState } from "react";
import { styled } from "styled-components";
import GuestCards from "./GuestCards";

function GuestBook() {
  const [getComment, setGetComment] = useState([]);
  const [commentContent, setCommentContent] = useState("");
  const [commentNickName, setCommentNickName] = useState("");
  const [commentpassword, setCommentpassword] = useState("");

  const getCommentApi = () => {
    axios
      .get("http://myweb.eba-63ucvpdw.ap-northeast-2.elasticbeanstalk.com/comment/get")
      .then((data) => {
        setGetComment(JSON.parse(data.data.result));
      })
      .catch(() => {
        console.log("댓글 가져오기 실패");
      });
  };
  const createSubmit = async (e) => {
    e.preventDefault();
    if (commentContent !== "") {
      const commentBody = new FormData();
      commentBody.append("name_give", commentNickName);
      commentBody.append("password_give", commentpassword);
      commentBody.append("comment_give", commentContent);
      axios
        .post("http://myweb.eba-63ucvpdw.ap-northeast-2.elasticbeanstalk.com/comment/save", commentBody)
        .then((data) => {
          console.log("data", data);
          alert("방명록이 등록되었습니다.");
          setCommentContent("");
          setCommentNickName("");
          setCommentpassword("");
          getCommentApi();
        })
        .catch(() => {
          console.log("댓글 등록 실패");
        });
    } else {
      alert("한글자 이상 입력해주세요!");
    }
  };

  useEffect(() => {
    getCommentApi();
  }, []);

  return (
    <div>
      <TitleContainer>
        <h2>GuestBook</h2>
      </TitleContainer>
      <GuestsContainer>
        <GuestCardContainer>
          {getComment
            .slice(0)
            .reverse()
            .map((item) => {
              return <GuestCards item={item} getCommentApi={getCommentApi} key={item._id.$oid} />;
            })}
        </GuestCardContainer>
        <FormContainer onSubmit={createSubmit}>
          <CommentForm typeof="submit">
            <CommentInput
              onChange={(e) => {
                setCommentContent(e.target.value);
              }}
              value={commentContent}
              placeholder="방명록을 남기세요 !"
            ></CommentInput>
            <UserInfoFormForm>
              <NickNmaeInput
                onChange={(e) => {
                  setCommentNickName(e.target.value);
                }}
                value={commentNickName}
                placeholder="닉네임"
              ></NickNmaeInput>
              <PasswordInput
                onChange={(e) => {
                  setCommentpassword(e.target.value);
                }}
                value={commentpassword}
                placeholder="비밀번호"
              ></PasswordInput>
              <UoloadBtn onClick={createSubmit}> 게시</UoloadBtn>
            </UserInfoFormForm>
          </CommentForm>
        </FormContainer>
      </GuestsContainer>
    </div>
  );
}

const TitleContainer = styled.div`
  margin-top: 20px;
  background-color: #ffcc00;
  width: 150px;
  height: 50px;
  border-radius: 10px 10px 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: #d0b134 solid;
  border-left: #d0b134 solid;
  border-right: #d0b134 solid;

  h2 {
    margin: 0;
  }
`;

const GuestsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  border: #d0b134 groove;
  border-radius: 0 20px 20px 20px;
  margin-bottom: 50px;
  padding: 20px;
  height: 300px;
`;

const GuestCardContainer = styled.div`
  width: 65%;
  overflow-y: auto;
`;

const FormContainer = styled.div`
  width: 500px;
  width: 30%;
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

const NickNmaeInput = styled.input`
  width: 100px;
  height: 30px;
  font-size: 15px;
  padding: 5px;
`;

const PasswordInput = styled.input`
  width: 100px;
  height: 30px;
  font-size: 15px;
  padding: 5px;
`;

export default GuestBook;


```
# API 명세서

## 1. MBTI_get

- **URL**: `/`
- **Method**: `GET`
- **Description**: 메인 페이지를 렌더링합니다.
- **Response**: `index.html` 페이지를 반환합니다.

## 2. MBTI_data

- **URL**: `/data`
- **Method**: `GET`
- **Description**: 몽고DB에서 모든 사람의 정보를 가져옵니다.
- **Response**: JSON 형식으로 모든 사람의 정보를 반환합니다.

```json
{
  "result": [
{"Develop":"Back-end",
"Image_url":"https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FUygOy%2Fbtsgn221lFI%2FELeI9rJ3XKxUXWsMwpZDOK%2Fimg.png",
"MBTI":"INFJ",
"Name":"김지훈"}
{"Develop":"Front-end",
"Image_url":"https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbqM4GR%2Fbtsgui4FizH%2FybKHuOdkP7TysBqKLAksjk%2Fimg.png",
"MBTI":"ENFP",
"Name":"박준영"}
{"Develop":"Back-end",
"Image_url":"https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FnJ7FC%2FbtsgnhM0BHm%2F1fosr7r0NolsKoju8RZSjK%2Fimg.png",
"MBTI":"INFJ",
"Name":"최도영"}
{"Develop":"Back-end",
"Image_url":"https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FUw2dx%2FbtsguCaQpoq%2FoteIfZScqlDSgMTGYAyKk0%2Fimg.png",
"MBTI":"ENTJ",
"Name":"박정환"}
  ]
}
```

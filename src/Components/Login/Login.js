import React from "react";
import * as S from "./style";
import InputBox from "./InputBox/InputBox";

function Login(props) {
  return (
    <S.Wrapper>
      <S.LeftWrapper>
        <InputBox
          submitInput={props.submitInput}
          changeInput={props.changeInput}
        />
      </S.LeftWrapper>
      <S.Img src="https://cdn.pixabay.com/photo/2016/06/01/06/26/open-book-1428428_1280.jpg" />
    </S.Wrapper>
  );
}

export default Login;

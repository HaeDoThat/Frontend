import React from "react";
import * as S from "./style";
import InputBox from "./InputBox/InputBox";
import LoginIMG from "../../Assets/Login/LoginIMG.jpg";

function Login(props) {
  return (
    <S.Wrapper>
      <S.LeftWrapper>
        <InputBox
          submitInput={props.submitInput}
          changeInput={props.changeInput}
        />
      </S.LeftWrapper>
      <S.Img src={LoginIMG} />
    </S.Wrapper>
  );
}

export default Login;

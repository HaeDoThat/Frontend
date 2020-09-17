import React from "react";
import * as S from "./style";
import LoginIMG from "../../Assets/Login/LoginIMG.jpg";
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
      <S.Img src={LoginIMG} />
    </S.Wrapper>
  );
}

export default Login;

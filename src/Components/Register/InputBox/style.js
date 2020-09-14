import styled from "styled-components";

export const InputBoxWrapper = styled.div`
  width: 100%;
  height: 686px;
  display: flex;
  justify-content: center;
  padding-top: 20px;
`;

export const InputBoxContentWrapper = styled.div`
  width: 60%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputBoxTitle = styled.h1`
  margin-bottom: 35px;
`;

export const InputBoxInnerDiv = styled.div`
  height: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const InputBoxInput = styled.input`
  width: 535px;
  height: 40px;
  border: 1px solid #707070;
  border-radius: 20px;
  padding-left: 15px;
`;

export const InputBoxButton = styled.button`
  width: 550px;
  height: 40px;
  background-color: #112987;
  color: #ffffff;
  border: none;
  border-radius: 10px;
  margin-bottom: 50px;
  font-size: 20px;
`;

export const InputBoxDividingLine = styled.div`
  width: 550px;
  height: 1px;
  background-color: #d4cece;
  margin-bottom: 50px;
`;

export const InputBoxGoogleRegister = styled.button`
  width: 550px;
  height: 40px;
  background-color: #d8d8d8;
  color: #000000;
  border: none;
  border-radius: 10px;
`;

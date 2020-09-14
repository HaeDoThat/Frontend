import styled from "styled-components";

export const LoginWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

export const LoginLeftWrapper = styled.div`
  width: calc(100% - 800px);
  height: 754px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginBox = styled.div`
  width: 80%;
  height: 70%;
  text-align: center;
`;

export const LoginTitle = styled.h1`
  font-size: 35px;
  font-weight: bold;
  margin: 0;
  color: #00135e;
  margin-bottom: 30px;
`;

export const LoginInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: calc(100% - 50px);
  padding-left: 50px;
  margin-bottom: 20px;
`;

export const LoginInputExplanation = styled.p`
  margin: 0;
  margin-bottom: 8px;
  margin-left: 10px;
  font-size: 15px;
  color: #000000;
`;

export const LoginInput = styled.input`
  width: 400px;
  height: 40px;
  border: 1px solid #707070;
  border-radius: 10px;
`;

export const LoginLinkDiv = styled.div`
  width: calc(100% - 50px - 67px);
  height: 30px;
  display: flex;
  padding-left: 50px;
  padding-right: 67px;
  justify-content: space-between;
`;

export const LoginPasswordFind = styled.a`
  color: #00135e;
  font-size: 10px;
`;

export const LoginRegisterLink = styled.a`
  color: #00135e;
  font-size: 10px;
`;

export const LoginButton = styled.button`
  width: 408px;
  height: 40px;
  position: relative;
  left: -6px;
  background-color: #00135e;
  color: #ffffff;
  border: none;
  border-radius: 10px;
  margin-bottom: 50px;
`;

export const LoginDividingLine = styled.div`
  margin-left: 50px;
  width: 406px;
  height: 1px;
  background-color: #b8b7b7;
  margin-bottom: 50px;
`;

export const LoginRegisterButton = styled.button`
  width: 408px;
  height: 40px;
  position: relative;
  left: -6px;
  background-color: #d8d8d8;
  color: #000000;
  border: none;
  border-radius: 10px;
`;

export const LoginImg = styled.img`
  width: 1000px;
  height: 750px;
`;

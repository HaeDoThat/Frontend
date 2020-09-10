import styled from "styled-components";
import { MdArrowForward } from "react-icons/md";

export const AdsContainer = styled.div`
  width: 100%;
  height: 350px;
  background-color: #111111;
  display: flex;
  justify-content: center;
`;

export const AdsMainWrapper = styled.div`
  width: 1200px;
  height: 350px;
  display: flex;
  background-color: black;
  z-index: 50;
`;

export const AdsLeftWrapper = styled.div`
  width: 300px;
  height: 350px;
  color: white;
  margin: 0;
  display: flex;
`;

export const AdsLeftBox = styled.div`
  margin-left: 50px;
  margin-top: 50px;
  display: flex;
  width: 120px;
  height: 150px;
  border: 10px solid gray;
  color: gray;
  font-size: 25px;
  font-weight: bold;
  justify-content: center;
  align-items: center;
`;

export const AdsRightBox = styled.div`
  margin: 0;
  display: flex;
  width: 120px;
  height: 150px;
  border: 10px solid gray;
  color: gray;
  background-color: white;
  font-size: 25px;
  font-weight: bold;
  justify-content: center;
  align-items: center;
  position: relative;
  left: -50px;
  top: 100px;
  z-index: 100;
`;

export const AdsRightWrapper = styled.div`
  width: 900px;
  height: 350px;
`;

export const AdsTitle = styled.h2`
  margin: 0;
  margin-top: 50px;
  margin-left: 100px;
  font-weight: bold;
  color: white;
  width: 450px;
`;

export const AdsIntroduction = styled.p`
  font-weight: lighter;
  color: white;
  font-size: 12px;
  margin: 0;
  width: 150px;
  position: relative;
  top: 10px;
  left: 100px;
`;

export const AdsButton = styled.div`
  display: flex;
  width: 200px;
  height: 50px;
  background-color: red;
  border-radius: 50px;
  color: white;
  font-size: 20px;
  font-weight: bold;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 150px;
  left: 600px;
`;

export const AdsArrowIcon = styled(MdArrowForward)`
  position: relative;
  left: 37px;
  font-size: 25px;
`;

import styled from "styled-components";
import { MdBrightness5 } from "react-icons/md";

export const Container = styled.div`
  width: 100%;
  height: 800px;
  display: flex;
  justify-content: center;
`;

export const MainWrapper = styled.div`
  width: 1200px;
  height: 800px;
`;

export const TopWrapper = styled.div`
  width: 1200px;
  height: 150px;
`;

export const Icon = styled(MdBrightness5)`
  display: inline;
  position: relative;
  top: 50px;
  left: 30px;
`;

export const Title = styled.h2`
  display: inline-block;
  font-weight: bold;
  margin: 0;
  position: relative;
  top: 50px;
  left: 40px;
`;

export const Summary = styled.p`
  margin: 0;
  position: relative;
  top: 50px;
  left: 60px;
`;

export const BodyWrapper = styled.div`
  width: 1200px;
  height: 650px;
  display: flex;
  flex-direction: column;
`;

export const BodyTopWrapper = styled.div`
  width: 1200px;
  height: 325px;
  display: flex;
  justify-content: space-between;
`;

export const BodyBottomWrapper = styled.div`
  width: 1200px;
  height: 325px;
  display: flex;
  justify-content: space-between;
`;

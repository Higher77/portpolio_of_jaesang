import styled, { css } from "styled-components";

export const ProjectSliderContainer = styled.div`
  height: 600px;
  width: 900px;
  margin: 80px auto 80px auto;
  overflow: hidden;
`;

export const ProjectImgList = styled.div`
  display: flex;
  height: 600px;
  transform: translateX(-900px);
`;

export const ProjectImgBox = styled.div`
  position: relative;
  div {
    width: 900px;
  }
`;

export const ProjectImg = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  height: 530px;
  max-width: 800px;
  display: block;
  transform: translate(-50%, -50%);
  border: 1px solid #c8c5c5;
  border-radius: 10px;
`;

export const ButtonBox = styled.div`
  position: relative;
  bottom: 430px;
`;

export const NextButton = styled.button`
  position: relative;
  left: 860px;
  background-color: transparent;
  &:hover {
    opacity: 50%;
  }
  img {
    height: 100px;
  }
`;

export const PrevButton = styled.button`
  position: relative;
  left: 10px;
  background-color: transparent;
  &:hover {
    opacity: 50%;
  }
  img {
    height: 100px;
  }
`;

export const DotPositionBox = styled.div`
  display: inline-flex;
  gap: 20px;
  position: relative;
  bottom: 200px;
  left: 450px;
`;

interface PositionProps {
  position: number;
  imgIndex: number;
}

export const Dot = styled.div<PositionProps>`
  height: 20px;
  width: 20px;
  border: 1px solid #87898c;
  border-radius: 50%;
  background-color: ${({ position, imgIndex }) =>
    position === imgIndex ? "#97a9d0" : "#eeeeee"};
`;

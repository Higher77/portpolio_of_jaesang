import styled, { css } from "styled-components";

export const ProjectSection = styled.section`
  width: 1000px;
  margin: 300px auto 0px auto;
`;

export const ProjectTitle = styled.h1`
  font-size: 50px;
  padding-bottom: 50px;
  border-bottom: 2px solid black;
`;

export const ProjectTask = styled.section`
  margin-top: 100px;
  font-size: 25px;
  ul {
    padding-left: 25px;
    list-style-type: disc;
    list-style-position: outside;
  }

  li {
    margin-top: 30px;

    p {
      margin-top: 10px;
      margin-left: -5px;
      a {
        text-decoration-line: none;
      }
    }
  }
`;

export const ProjectTaskTitle = styled.h3`
  margin: 20px 0px 50px 0px;
  font-size: 45px;
  color: #427e9a;
`;

export const ProjectOutline = styled.div`
  display: flex;
  margin-top: 50px;
  line-height: 150%;
  gap: 10px;
  div {
    width: 15px;
    background-color: #afd2e2;
  }
`;

interface PositionProps {
  position: number;
  imgIndex: number;
}

export const ProjectExplainBox = styled.div`
  position: relative;
  bottom: 180px;
`;

const ProjectExplainStyle = css`
  width: 800px;
  padding: 0px 50px 50px 50px;
  margin: 20px auto 0px auto;
  font-size: 20px;
  border-radius: 10px;
  line-height: 130%;
  background-color: #f3f5f9;

  li {
    margin-top: 30px;
    margin-bottom: -20px;
  }

  h2 {
    padding-top: 50px;
    margin-bottom: 20px;
    color: #427e9a;
    font-size: 32px;
  }

  h3 {
    font-size: 23px;
  }
`;

export const ProjectFirstExplain = styled.div<PositionProps>`
  display: ${({ position, imgIndex }) =>
    position === imgIndex ? "block" : "none"};
  ${ProjectExplainStyle}
`;

export const ProjectSecondExplain = styled.div<PositionProps>`
  display: ${({ position, imgIndex }) =>
    position === imgIndex ? "block" : "none"};
  ${ProjectExplainStyle}
`;

export const ProjectThirdExplain = styled.div<PositionProps>`
  display: ${({ position, imgIndex }) =>
    position === imgIndex ? "block" : "none"};
  ${ProjectExplainStyle}
`;

export const ProjectReviewTitle = styled.div`
  font-size: 30px;
  color: #427e9a;
`;

export const ProjectReview = styled.div`
  padding: 50px;
  margin: 20px auto 0px auto;
  font-size: 23px;
  line-height: 130%;
  border-radius: 10px;
  background-color: #f3f5f9;

  ol {
    list-style-type: decimal;
    margin-left: 25px;
    line-height: 150%;
  }

  li {
    margin-top: 10px;
  }
`;

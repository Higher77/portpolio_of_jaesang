import styled, { css } from "styled-components";

export const MainWapper = styled.div`
  width: 1050px;
  margin: 100px auto 0px auto;
  font-family: NotoSansR;
  color: #372a28;
  zoom: 0.85;
`;

export const Header = styled.header`
  /* background-color: gray; */
`;

export const TitleBox = styled.div`
  display: flex;
`;

export const TitleTextBox = styled.div`
  position: relative;
  left: 15px;
`;

export const TitleKorText = styled.h1`
  font-family: 도시락B;
  font-size: 160px;
`;

export const TitleEngText = styled.h1`
  padding-top: 10px;
  font-family: SpartanB;
  font-size: 85px;
  letter-spacing: -4px;
`;

export const TitleImg = styled.img`
  display: block;
  height: 260px;
  width: 430px;
`;

export const TitleLine = styled.div`
  width: 1000px;
  margin: 80px auto 0px auto;
  border: 1px solid black;
`;

export const IntroduceSection = styled.section`
  width: 900px;
  padding: 50px;
  margin: 100px auto 80px auto;
  font-size: 20px;
  line-height: 120%;
  border-radius: 10px;
  background-color: #f6f3f9;
`;

export const IntroFirstText = styled.p`
  font-size: 30px;
  margin-bottom: 20px;
`;

export const SkillSection = styled.section`
  margin-top: 50px;
`;

export const SkillImg = styled.img`
  display: block;
  width: 1000px;
  margin: 0px auto 0px auto;
  background-color: blue;
`;

export const Blank = styled.div`
  height: 100px;
`;

export const InternshipReviewBox = styled.div`
  padding: 50px;
  margin: 20px auto 0px auto;
  font-size: 23px;
  line-height: 130%;
  border-radius: 10px;
  background-color: #f6f3f9;

  ol {
    list-style-type: decimal;
    margin-left: 25px;
    line-height: 150%;
  }
`;

//project

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
    }
  }
`;

export const ProjectTaskTitle = styled.h3`
  margin: 20px 0px 50px 0px;
  font-size: 35px;
  color: #427e9a;
`;

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
  img {
    height: 100px;
  }
`;

export const PrevButton = styled.button`
  position: relative;
  left: 10px;
  background-color: transparent;
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

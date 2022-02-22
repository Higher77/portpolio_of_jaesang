import styled, { css } from "styled-components";

export const MainWapper = styled.div`
  width: 1050px;
  margin: 100px auto 0px auto;
  font-family: NotoSansR;
  color: #372a28;
  zoom: 0.85;
  /* background-color: blue; */
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
  margin: 10px auto 0px auto;
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

//contact

export const ContactBox = styled.div`
  display: flex;
  gap: 200px;
  height: 100px;
  width: 900px;
  margin: 0px auto 0px auto;
`;

export const ContactSite = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 30px;
`;

export const Github = styled.a`
  background-color: white;
  height: 50px;
  width: 50px;
  img {
    display: block;
    width: 50px;
    margin-top: 5px;

    &:hover {
      opacity: 50%;
    }
  }
`;

export const Tistory = styled.a`
  background-color: white;
  height: 62px;
  width: 62px;
  img {
    display: block;
    width: 62px;
    margin-top: 10px;

    &:hover {
      opacity: 50%;
    }
  }
`;

export const Contact = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 30px;
  font-size: 20px;
`;

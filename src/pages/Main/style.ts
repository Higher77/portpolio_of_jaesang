import styled from 'styled-components';

export const MainWapper = styled.div`
  width: 1050px;
  margin: 100px auto 0px auto;
  font-family: NotoSansR;
  color: #372a28;
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
  margin: 50px auto 0px auto;
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
  width: 900px;
  margin: 0px auto 0px auto;
  background-color: blue;
`;

//internship

export const InternshipSection = styled.section`
  width: 1000px;
  margin: 250px auto 0px auto;
`;

export const InternshipTitle = styled.h1`
  font-size: 50px;
  padding-bottom: 50px;
  border-bottom: 2px solid black;
`;

export const IntershipCompanyBox = styled.div`
  display: flex;
  position: relative;
  margin-top: 80px;
`;

export const InternshipCompay = styled.h2`
  position: absolute;
  left: 60px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 40px;
  color: #e94395;
`;

export const VivaInovationImg = styled.img`
  width: 50px;
`;

export const InternshipRole = styled.h2`
  margin-top: 10px;
  font-size: 25px;
`;

export const IntershipTask = styled.section`
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

export const IntershipTaskTitle = styled.h3`
  margin: 20px 0px 50px 0px;
  font-size: 35px;
  color: #e94395;
`;

export const InternshipTaskDetail = styled.div`
  margin-top: 70px;
`;

export const Blank = styled.div`
  height: 100px;
`;

export const IntershipReview = styled.div`
  margin-top: 70px;
`;

export const InternshipReviewTitle = styled.h2`
  font-size: 30px;
  color: #e94395;
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
  display: flex;
  height: 900px;
  width: 800px;
  margin: 80px auto 80px auto;
  background-color: aliceblue;
`;

export const ProjectImgBox = styled.div`
  /* flex-basis: 500px; */
  div {
    width: 800px;
  }
  width: 800px;
  border: 1px solid red;
  /* background-color: red; */
`;

export const ProjectImg = styled.img`
  display: block;
  margin: 0px auto 0px auto;
`;

import styled from "styled-components";

export const InternshipSection = styled.section`
  width: 1000px;
  margin: 180px auto 0px auto;
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

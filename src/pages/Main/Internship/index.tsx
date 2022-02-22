import React from "react";
import * as S from "./style";
import { viva } from "assets/images";

const Internship = () => {
  return (
    <S.InternshipSection>
      <S.InternshipTitle>📂 Internship Task</S.InternshipTitle>

      <S.IntershipCompanyBox>
        <S.VivaInovationImg alt="vivainovation" src={viva} />
        <S.InternshipCompay>비바이노베이션</S.InternshipCompay>
      </S.IntershipCompanyBox>

      <S.InternshipRole>Front-end Developer Intern</S.InternshipRole>

      <S.IntershipTask>
        <S.IntershipTaskTitle>Task 1. 착한의사 약관페이지</S.IntershipTaskTitle>
        <ul>
          <li>
            <p>개발 기간 : 2021년 08월 09일 ~ 08월 13일</p>
          </li>
          <li>
            <p>개발 인원 : 프론트엔드 2인</p>
          </li>
          <li>
            <p>사용 기술 :</p>
            <p>Front-End : React, Typescript, Styled-Component, Git action</p>
            <p>Communication tool : Slack, Zeplin, Figma</p>
          </li>
          <li>
            <p>서비스 주소 : 10개의 페이지 중 2개 수록</p>
            <p>
              <a href="https://adoc-term.adoc-solution.com/location-info/recent/korean">
                https://adoc-term.adoc-solution.com/location-info/recent/korean
              </a>
            </p>

            <p>
              <a href="https://adoc-term.adoc-solution.com/privacy-statements/recent/korean">
                https://adoc-term.adoc-solution.com/privacy-statements/recent/korean
              </a>
            </p>
          </li>
        </ul>
        <S.InternshipTaskDetail>
          <ul>
            <li>
              모바일/태블릿/ 웹으로 구분하여 반응형 웹으로 제작된 페이지 입니다.
            </li>
            <li>최신약관과 영문약관이 존재하여 url로 이를 구분하였습니다.</li>
            <li>Git action을 통해 실제 서비스를 배포하였습니다.</li>
          </ul>
        </S.InternshipTaskDetail>
      </S.IntershipTask>

      <S.Blank />

      <S.IntershipTask>
        <S.IntershipTaskTitle>Task 2. Admin 건강검진 CRM</S.IntershipTaskTitle>
        <ul>
          <li>
            <p>개발 기간 : 2021년 08월 16일 ~ 08월 26일</p>
          </li>
          <li>
            <p>개발 인원 : 프론트엔드 2인</p>
          </li>
          <li>
            <p>사용 기술 :</p>
            <p>
              Front-End : React, Typescript, Redux, Styled-Component,
              React-datepicker
            </p>
            <p>Communication tool : Slack, Zeplin, Figma</p>
          </li>
        </ul>
        <S.InternshipTaskDetail>
          <ul>
            <li>
              리스트 페이지에서 각 목록을 클릭 시 상세페이지로 넘어가는 페이지
              입니다.
            </li>
            <li>리스트 페이지는 3중 필터, 상태값을 전역으로 관리합니다.</li>
            <li>
              상세 페이지는 React-datepicker를 이용하여 예약일을 확정할 수
              있습니다.
            </li>
            <li>백엔드 API를 통해 확정,취소,삭제를 할 수 있습니다.</li>
          </ul>
        </S.InternshipTaskDetail>
      </S.IntershipTask>

      <S.Blank />

      <S.IntershipReview>
        <S.InternshipReviewTitle>
          비바이노베이션 인턴 후기
        </S.InternshipReviewTitle>
        <S.InternshipReviewBox>
          <p>
            비바이노베이션에서 한달 간의 인턴을 진행하며 실제 IT 기업에서의
            업무를 경험하였습니다. <br /> 제가 그곳에서 배우고 느낀 점은 다음과
            같습니다
          </p>
          <br />
          <ol>
            <li>Figma, Zeplin을 통해 디자인팀과 소통하고 의견을 나눴습니다.</li>
            <li>실제 기업에서 사용하는 Front-end Convention을 사용했습니다.</li>
            <li>
              CI/CD라는 개념을 배우고 약관페이지를 통해 실제 서비스를
              배포하였습니다.
            </li>
            <li>개발자들의 협업과 수평적인 팀 문화를 겪었습니다.</li>
          </ol>
          <br />
          <p>
            많은 것을 배울 수 있었고 실제 서비스 되는 사이트에 약관 페이지라는
            제가 만든 코드가 실제로 배포되고 사용된다는 사실은 매우 보람찬
            결과였습니다.
          </p>
        </S.InternshipReviewBox>
      </S.IntershipReview>
    </S.InternshipSection>
  );
};

export default Internship;

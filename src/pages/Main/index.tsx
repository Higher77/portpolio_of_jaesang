import React, {
  KeyboardEvent,
  MouseEvent,
  useState,
  useRef,
  useEffect,
} from 'react';
import * as S from './style';
import {
  title,
  skill,
  viva,
  imgupload,
  navermap,
  host,
  next,
  prev,
} from 'assets/images';

const Main = () => {
  const [iltalImgIndex, setIltalImgIndex] = useState<number>(0);

  const silderContainer = useRef<HTMLDivElement>(null);

  const handleNextButton = (): void => {
    // console.log(silderContainer.current);
    if (silderContainer.current) {
      setIltalImgIndex(prev => prev + 1);
    }
  };

  useEffect(() => {
    silderContainer.current.style.transform = `translateX(-${
      900 * iltalImgIndex
    }px)`;
  }, [iltalImgIndex]);

  // console.log(currentIndex);

  const imglist = [imgupload, navermap, host];

  return (
    <>
      <S.MainWapper>
        <S.Header>
          <S.TitleBox>
            <S.TitleTextBox>
              <S.TitleKorText>최재상</S.TitleKorText>
              <S.TitleEngText>JaeSang-Choi</S.TitleEngText>
            </S.TitleTextBox>
            <S.TitleImg alt="titleimg" src={title} />
          </S.TitleBox>
          <S.TitleLine />
        </S.Header>
        <S.IntroduceSection>
          <S.IntroFirstText>
            💻 프론트엔드 개발자 '최재상'입니다.
          </S.IntroFirstText>
          <br />
          <p>
            어렸을 적부터 플래시를 사용하여 1:1 대결 게임, 음악 재생 플레이어 등
            여러 작품을 만들정도로 개발에 대한 흥미가 있었습니다.
          </p>
          <br />
          <p>
            프리랜서 일러스트레이터로서 일한 경험이 있어 시각적인 요소에 대해서
            소비자 입장에서 고려할 수 있는 시야를 갖출 수 있었습니다. 또한, 마감
            기한의 중요성을 잘 알고 단 한번도 늦은 적 없이 기간을 지켰습니다.
          </p>
          <br />
          <p>
            다른 시각에서 바라보는 것이 습관이 되있기 떄문에 코드를 짤 때에도
            같은 프론트엔드 동료 뿐만이 아니라 디자이너, 백엔드분들 등
            여러관점에서 까지 생각하며 코드를 짜려고 항상 노력하고 있습니다.
          </p>
          <br />
          <p>
            현재는 전공지식의 습득을 위해서 학점은행제를 통해 컴퓨터공학과를
            전공하고 학사를 취득 중에 있습니다.
          </p>
          <br />
          <p>
            1년 후 학사 취득을 하고나면 대학원에 진학할 계획을 하고 있습니다.
          </p>
        </S.IntroduceSection>

        <S.SkillSection>
          <S.SkillImg alt="skillimg" src={skill} />
        </S.SkillSection>

        <S.InternshipSection>
          <S.InternshipTitle>📂 Internship Task</S.InternshipTitle>

          <S.IntershipCompanyBox>
            <S.VivaInovationImg alt="vivainovation" src={viva} />
            <S.InternshipCompay>비바이노베이션</S.InternshipCompay>
          </S.IntershipCompanyBox>

          <S.InternshipRole>Front-end Developer Intern</S.InternshipRole>

          <S.IntershipTask>
            <S.IntershipTaskTitle>
              Task 1. 착한의사 약관페이지
            </S.IntershipTaskTitle>
            <ul>
              <li>
                <p>개발 기간 : 2021년 08월 09일 ~ 08월 13일</p>
              </li>
              <li>
                <p>개발 인원 : 프론트엔드 2인</p>
              </li>
              <li>
                <p>사용 기술 :</p>
                <p>
                  Front-End : React, Typescript, Styled-Component, Git action
                </p>
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
                  모바일/태블릿/ 웹으로 구분하여 반응형 웹으로 제작된 페이지
                  입니다.
                </li>
                <li>
                  최신약관과 영문약관이 존재하여 url로 이를 구분하였습니다.
                </li>
                <li>Git action을 통해 실제 서비스를 배포하였습니다.</li>
              </ul>
            </S.InternshipTaskDetail>
          </S.IntershipTask>

          <S.Blank />

          <S.IntershipTask>
            <S.IntershipTaskTitle>
              Task 2. Admin 건강검진 CRM
            </S.IntershipTaskTitle>
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
                  리스트 페이지에서 각 목록을 클릭 시 상세페이지로 넘어가는
                  페이지 입니다.
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
                업무를 경험하였습니다. <br /> 제가 그곳에서 배우고 느낀 점은
                다음과 같습니다
              </p>
              <br />
              <ol>
                <li>
                  Figma, Zeplin을 통해 디자인팀과 소통하고 의견을 나눴습니다.
                </li>
                <li>
                  실제 기업에서 사용하는 Front-end Convention을 사용했습니다.
                </li>
                <li>
                  CI/CD라는 개념을 배우고 약관페이지를 통해 실제 서비스를
                  배포하였습니다.
                </li>
                <li>개발자들의 협업과 수평적인 팀 문화를 겪었습니다.</li>
              </ol>
              <br />
              <p>
                많은 것을 배울 수 있었고 실제 서비스 되는 사이트에 약관
                페이지라는 제가 만든 코드가 실제로 배포되고 사용된다는 사실은
                매우 보람찬 결과였습니다.
              </p>
            </S.InternshipReviewBox>
          </S.IntershipReview>
        </S.InternshipSection>

        <S.ProjectSection>
          <S.ProjectTitle>📂 Project</S.ProjectTitle>
          <S.ProjectTask>
            <S.ProjectTaskTitle>✈️ ILTAL</S.ProjectTaskTitle>

            <ul>
              <li>
                <p>개발 기간 : 2021년 07월 19일 ~ 07월 30일</p>
              </li>
              <li>
                <p>개발 인원 : 프론트엔드 3인, 백엔드 3인</p>
              </li>
              <li>
                <p>사용 기술 :</p>
                <p>
                  Front-End : Javascript, React, Styled-Component, React-hook,
                  Axios, Naver map api
                </p>
                <p>
                  Back-End : Python, Django, MySQL, Bcrypt, Pyiwt, AWS, Docker
                </p>
              </li>
              <li>
                <p>
                  프로젝트 영상 : &nbsp;
                  <a href="https://www.youtube.com/watch?v=ciX2Z91KJ2I">
                    https://www.youtube.com/watch?v=ciX2Z91KJ2I
                  </a>
                </p>
              </li>
              <li>
                <p>
                  프로젝트 Git : &nbsp;
                  <a href="https://github.com/wecode-bootcamp-korea/22-2nd-iltal-frontend">
                    https://github.com/wecode-bootcamp-korea/22-2nd-iltal-frontend
                  </a>
                </p>
              </li>
            </ul>
            <S.ProjectSliderContainer ref={silderContainer}>
              <S.ProjectImgList>
                {imglist.map((img, key) => {
                  return (
                    <S.ProjectImgBox key={key}>
                      <div />
                      <S.ProjectImg src={img}></S.ProjectImg>
                    </S.ProjectImgBox>
                  );
                })}
              </S.ProjectImgList>
            </S.ProjectSliderContainer>
            <S.ButtonBox>
              <S.PrevButton>
                <img alt="prev" src={prev} />
              </S.PrevButton>
              <S.NextButton onClick={handleNextButton}>
                <img alt="next" src={next} />
              </S.NextButton>
            </S.ButtonBox>
          </S.ProjectTask>
        </S.ProjectSection>
      </S.MainWapper>
    </>
  );
};

export default Main;

import React, { useState, useRef } from "react";
import * as S from "./style";
import {
  title,
  skill,
  viva,
  imgupload,
  navermap,
  host,
  next,
  prev
} from "assets/images";

//state가 변경되면 Rerendering이 일어나므로 throttler가 초기화되므로 밖에 빼놓는다.
let throttler;

const Main = () => {
  const [iltalImgIndex, setIltalImgIndex] = useState<number>(1);

  const imgList = useRef<HTMLDivElement>(null);

  const handleNextButton = (): void => {
    if (throttler) return;

    throttler = setTimeout(() => {
      throttler = null;
    }, 1000);

    if (imgList.current) {
      setIltalImgIndex((prev) => prev + 1);
      imgList.current.style.transform = `translateX(${
        -900 * (iltalImgIndex + 1)
      }px)`;
      imgList.current.style.transition = `transform 1s`;

      if (iltalImgIndex + 1 === iltalImglist.length - 1) {
        setIltalImgIndex(1);

        setTimeout(() => {
          imgList.current.style.transform = `translateX(${-900 * 1}px)`;

          imgList.current.style.transition = `transform 0s`;
        }, 1000);
      }
    }
  };

  const handlePrevButton = (): void => {
    if (throttler) return;

    throttler = setTimeout(() => {
      throttler = null;
    }, 1000);

    if (imgList.current) {
      setIltalImgIndex((prev) => prev - 1);
      imgList.current.style.transform = `translateX(${
        -900 * (iltalImgIndex - 1)
      }px)`;
      imgList.current.style.transition = `transform 1s`;

      if (iltalImgIndex - 1 === 0) {
        setIltalImgIndex(iltalImglist.length - 2);

        setTimeout(() => {
          imgList.current.style.transform = `translateX(${
            -900 * (iltalImglist.length - 2)
          }px)`;

          imgList.current.style.transition = `transform 0s`;
        }, 1000);
      }
    }
  };

  const iltalImglist = [host, imgupload, navermap, host, imgupload];

  console.log(iltalImgIndex);

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
            <S.ProjectSliderContainer>
              <S.ProjectImgList ref={imgList}>
                {iltalImglist.map((img, key) => {
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
              <S.PrevButton onClick={handlePrevButton}>
                <img alt="prev" src={prev} />
              </S.PrevButton>
              <S.NextButton onClick={handleNextButton}>
                <img alt="next" src={next} />
              </S.NextButton>
            </S.ButtonBox>
            <S.DotPositionBox>
              {[1, 2, 3].map((value, index) => {
                return (
                  <S.Dot
                    position={value}
                    imgIndex={iltalImgIndex}
                    key={index}
                  />
                );
              })}
            </S.DotPositionBox>
            <S.ProjectExplainBox>
              <S.ProjectFirstExplain position={1} imgIndex={iltalImgIndex}>
                <h2>Feature</h2>
                <h3>파일업로드</h3>
                <ul>
                  <li>
                    이미지를 선택하면 미리보기로 볼 수 있도록 구현하였습니다.
                  </li>
                  <li>
                    파일을 업로드 한 후 백엔드에서 url를 받아오지않고 자체적으로
                    파일의 url을 가공하여 미리보기를 보여주도록 구현하였습니다.
                  </li>
                </ul>
                <h2>Takeaway</h2>
                <br />
                <p>
                  처음 파일업로드를 만들었을 때에는 백엔드로부터 이미지의 URL을
                  받아 그것을 띄우는 방법으로 미리보기를 구현하였습니다.
                  <br />
                  <br />
                  하지만 이미지가 띄워지는 속도가 느려서 어떻게 하면 이것을
                  해결할 수 있을까하는 고민이 있었고 구글링을 한 결과
                  FileReader를 이용하면 해결할 수 있다는 것을 알았고 이를 적용
                  하여 해결 할 수 있었습니다.
                </p>
              </S.ProjectFirstExplain>

              <S.ProjectSecondExplain position={2} imgIndex={iltalImgIndex}>
                <h2>Feature</h2>
                <h3>지도(Naver Map Api)</h3>
                <ul>
                  <li>
                    옵션 선택 ⇒ 선택에 맞는 좌표로 마커가 이동하도록
                    구현하였습니다.
                  </li>
                  <li>
                    마커가 이동하면 마커 위치에 따른 주소가 상세주소에
                    출력되도록 하였습니다.
                  </li>
                  <li>
                    상세주소에 직접 주소를 입력한 후 enter를 누르면 그에 따른
                    주소로 마커가 이동합니다.
                  </li>
                  <li>상세주소에 잘못된 주소를 입력시 경고창이 출력됩니다.</li>
                </ul>
                <h2>Takeaway</h2>
                <br />
                <p>
                  Naver map을 통해 단순히 화면상에 지도만을 띄우는 것만이 아니라
                  더 많은 기능을 넣어보고 싶다고 생각하였습니다.
                  <br />
                  <br />
                  Naver map Api의 react 가이드라인은 지도를 표시하는 수준정도로
                  짜여져 있었기 때문에 Jquery 를 해석한 후 React에
                  적용하였습니다.
                  <br />
                  <br />
                  구글 및 검색을 통해 모든 기능을 구현한 후 근본인 JavaScript가
                  얼마나 중요한지 알 수 있었고 어떤 방향으로 공부를 해야 할지 알
                  수 있었습니다.
                </p>
              </S.ProjectSecondExplain>

              <S.ProjectThirdExplain position={3} imgIndex={iltalImgIndex}>
                <h2>Feature</h2>
                <h3>호스트 등록</h3>
                <ul>
                  <li>
                    완료버튼을 누르면 Context로 관리중인 정보들을 post로 보내고
                    메인으로 돌아갑니다.
                  </li>
                  <li>메인에서 등록된 정보를 확인할 수 있습니다.</li>
                </ul>
                <h2>Takeaway</h2>
                <br />
                <p>
                  호스트페이지에서 작성된 모든 정보를 완료버튼을 누를 시
                  일괄적으로 보내야했습니다. 그렇기 때문에 전역상태관리를
                  사용해야했습니다.
                  <br />
                  <br />
                  다만, 시간이 여유있지 않았던 상황이었기에 상대적으로 빠르게
                  배울 수 있는 Context API를 선택하게 되었습니다.
                  <br />
                  <br />
                  사용할 때 구분하기 쉽도록 getter와 setter로 구분하였고
                  리렌더링이 일어날 때 set을 하는 함수가 바뀌지도 않았음에도
                  해당 컴포넌트의 랜더가 일어나는 성능문제를 해결하기 위해
                  Context를 두개로 분리하여 사용하였습니다.
                </p>
              </S.ProjectThirdExplain>
            </S.ProjectExplainBox>

            <S.ProjectReviewTitle>ILTAL 후기</S.ProjectReviewTitle>
            <S.ProjectReview>
              <p>
                두번째 프로젝트를 진행하며 느끼고 배운 점은 다음과 같았습니다.
              </p>
              <br />
              <ol>
                <li>React hook과 Styled-Component의 실전 사용법</li>
                <li>Axios, Naver map api와 같은 라이브러리를 적용하는 방법</li>
                <li>
                  기획을 할땐 의욕에 앞서지 않고 기술수준과 시간을 고려하여
                  합리적으로 짜야한다는 것.
                </li>
                <li>개발자들의 협업과 수평적인 팀 문화를 겪었습니다.</li>
              </ol>
              <br />
              <br />
              <p>
                이번 프로젝트에서는 저번 프로젝트에서는 사용해보지 못한
                라이브러리를 직접사용해보며 그 유용성에 대해서 배울 수
                있었습니다. <br />
                <br />
                또한, React hook과 Styled-Component를 배우고 실제로 적용함으로서
                익숙해질 수 있는 시간을 가졌습니다.
                <br />
                <br />
                기획이 얼마나 중요한지 깨달을 수 있었고 개발을 함에 있어
                핵심기능에 초점을 맞춰서 진행해야한다는 것을 확실히 인지할 수
                있었습니다.
                <br />
                <br />
                다음 프로젝트부터는 개발 초기단계부터 이를 확실하게 지키며
                진행해야겠다고 다짐하였습니다.
              </p>
            </S.ProjectReview>
          </S.ProjectTask>
        </S.ProjectSection>
      </S.MainWapper>
    </>
  );
};

export default Main;

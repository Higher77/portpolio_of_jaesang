import React, { useState } from "react";
import Slider from "../../Slider";
import * as S from "./style";
import { imgupload, navermap, host } from "assets/images";

const Iltal = () => {
  const [iltalImgIndex, setIltalImgIndex] = useState<number>(1);

  const iltalImglist = [host, imgupload, navermap, host, imgupload];
  return (
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
            Front-End : Javascript, React, Styled-Component, React-hook, Axios,
            Naver map api
          </p>
          <p>Back-End : Python, Django, MySQL, Bcrypt, Pyiwt, AWS, Docker</p>
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

      <S.ProjectOutline>
        <div></div>
        <p>
          'iltal'은 탈잉과 Airbnb를 모티브로 한 사이트입니다.
          <br />
          탈잉의 튜터와 튜티 기능을 호스트와 게스트로 바꿔 한국의 여행 및
          액티비티에 적용하였습니다.
          <br />
          프론트엔드로 프로젝트에 참여하여 호스트 페이지를 구현했습니다.
        </p>
      </S.ProjectOutline>

      <Slider imgLists={iltalImglist} setProjectImgIndex={setIltalImgIndex} />

      <S.ProjectExplainBox>
        <S.ProjectFirstExplain position={1} imgIndex={iltalImgIndex}>
          <h2>Feature</h2>
          <h3>파일업로드</h3>
          <ul>
            <li>이미지를 선택하면 미리보기로 볼 수 있도록 구현하였습니다.</li>
            <li>
              파일을 업로드 한 후 백엔드에서 url를 받아오지않고 자체적으로
              파일의 url을 가공하여 미리보기를 보여주도록 구현하였습니다.
            </li>
          </ul>
          <h2>Takeaway</h2>
          <br />
          <p>
            처음 파일업로드를 만들었을 때에는 백엔드로부터 이미지의 URL을 받아
            그것을 띄우는 방법으로 미리보기를 구현하였습니다.
            <br />
            <br />
            하지만 이미지가 띄워지는 속도가 느려서 어떻게 하면 이것을 해결할 수
            있을까하는 고민이 있었고 구글링을 한 결과 FileReader를 이용하면
            해결할 수 있다는 것을 알았고 이를 적용 하여 해결 할 수 있었습니다.
          </p>
        </S.ProjectFirstExplain>

        <S.ProjectSecondExplain position={2} imgIndex={iltalImgIndex}>
          <h2>Feature</h2>
          <h3>지도(Naver Map Api)</h3>
          <ul>
            <li>
              옵션 선택 ⇒ 선택에 맞는 좌표로 마커가 이동하도록 구현하였습니다.
            </li>
            <li>
              마커가 이동하면 마커 위치에 따른 주소가 상세주소에 출력되도록
              하였습니다.
            </li>
            <li>
              상세주소에 직접 주소를 입력한 후 enter를 누르면 그에 따른 주소로
              마커가 이동합니다.
            </li>
            <li>상세주소에 잘못된 주소를 입력시 경고창이 출력됩니다.</li>
          </ul>
          <h2>Takeaway</h2>
          <br />
          <p>
            Naver map을 통해 단순히 화면상에 지도만을 띄우는 것만이 아니라 더
            많은 기능을 넣어보고 싶다고 생각하였습니다.
            <br />
            <br />
            Naver map Api의 react 가이드라인은 지도를 표시하는 수준정도로 짜여져
            있었기 때문에 Jquery 를 해석한 후 React에 적용하였습니다.
            <br />
            <br />
            구글 및 검색을 통해 모든 기능을 구현한 후 근본인 JavaScript가 얼마나
            중요한지 알 수 있었고 어떤 방향으로 공부를 해야 할지 알 수
            있었습니다.
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
            호스트페이지에서 작성된 모든 정보를 완료버튼을 누를 시 일괄적으로
            보내야했습니다. 그렇기 때문에 전역상태관리를 사용해야했습니다.
            <br />
            <br />
            다만, 시간이 여유있지 않았던 상황이었기에 상대적으로 빠르게 배울 수
            있는 Context API를 선택하게 되었습니다.
            <br />
            <br />
            사용할 때 구분하기 쉽도록 getter와 setter로 구분하였고 리렌더링이
            일어날 때 set을 하는 함수가 바뀌지도 않았음에도 해당 컴포넌트의
            랜더가 일어나는 성능문제를 해결하기 위해 Context를 두개로 분리하여
            사용하였습니다.
          </p>
        </S.ProjectThirdExplain>
      </S.ProjectExplainBox>

      <S.ProjectReviewTitle>ILTAL 후기</S.ProjectReviewTitle>
      <S.ProjectReview>
        <p>두번째 프로젝트를 진행하며 느끼고 배운 점은 다음과 같았습니다.</p>
        <br />
        <ol>
          <li>React hook과 Styled-Component의 실전 사용법</li>
          <li>Axios, Naver map api와 같은 라이브러리를 적용하는 방법</li>
          <li>
            기획을 할땐 의욕에 앞서지 않고 기술수준과 시간을 고려하여 합리적으로
            짜야한다는 것.
          </li>
          <li>개발자들의 협업과 수평적인 팀 문화를 겪었습니다.</li>
        </ol>
        <br />
        <br />
        <p>
          이번 프로젝트에서는 저번 프로젝트에서는 사용해보지 못한 라이브러리를
          직접사용해보며 그 유용성에 대해서 배울 수 있었습니다. <br />
          <br />
          또한, React hook과 Styled-Component를 배우고 실제로 적용함으로서
          익숙해질 수 있는 시간을 가졌습니다.
          <br />
          <br />
          기획이 얼마나 중요한지 깨달을 수 있었고 개발을 함에 있어 핵심기능에
          초점을 맞춰서 진행해야한다는 것을 확실히 인지할 수 있었습니다.
          <br />
          <br />
          다음 프로젝트부터는 개발 초기단계부터 이를 확실하게 지키며
          진행해야겠다고 다짐하였습니다.
        </p>
      </S.ProjectReview>
    </S.ProjectTask>
  );
};

export default Iltal;

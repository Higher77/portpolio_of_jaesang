import React, { useState } from "react";
import Slider from "../../Slider";
import * as S from "./style";
import { starGraph, starRating, slider } from "assets/images";

const Iltal = () => {
  const [iltalImgIndex, setIltalImgIndex] = useState<number>(1);

  const iltalImglist = [slider, starGraph, starRating, slider, starGraph];
  return (
    <S.ProjectTask>
      <S.ProjectTaskTitle>🍴 WatCU</S.ProjectTaskTitle>
      <ul>
        <li>
          <p>개발 기간 : 2021년 07월 05일 ~ 07월 16일</p>
        </li>
        <li>
          <p>개발 인원 : 프론트엔드 3인, 백엔드 2인</p>
        </li>
        <li>
          <p>사용 기술 :</p>
          <p>Front-End : Javascript, React, Sass, React-modal</p>
          <p>Back-End : Python, Django</p>
        </li>
        <li>
          <p>
            프로젝트 영상 : &nbsp;
            <a href="https://www.youtube.com/watch?v=Hhl-VqsBq54">
              https://www.youtube.com/watch?v=Hhl-VqsBq54
            </a>
          </p>
        </li>
        <li>
          <p>
            프로젝트 Git : &nbsp;
            <a href="https://github.com/Higher77/watCU">
              https://github.com/Higher77/watCU
            </a>
          </p>
        </li>
      </ul>

      <S.ProjectOutline>
        <div></div>
        <p>
          watCU는 Watcha를 모티브로한 사이트입니다.
          <br />
          왓챠피디아의 기능을 활용하여 CU의 상품을 소개하는 식으로 프로젝트에
          적용하였습니다.
          <br />
          프론트엔드로 프로젝트에 참여하여 상품 디테일 페이지를 구현했습니다.
        </p>
      </S.ProjectOutline>

      <Slider imgLists={iltalImglist} setProjectImgIndex={setIltalImgIndex} />

      <S.ProjectExplainBox>
        <S.ProjectFirstExplain position={1} imgIndex={iltalImgIndex}>
          <h2>Feature</h2>
          <h3>별점 그래프</h3>
          <ul>
            <li>
              별점을 클릭할 때 실시간으로 그래프가 변동되도록 구현했습니다.
            </li>
            <li>
              그래프 변동시 transition을 이용하여 애니메이션 효과를
              추가하였습니다.
            </li>
            <li>
              가시성을 높이기 위해 가장 비율이 높은 별점은 주황색으로 나타나도록
              했습니다.
            </li>
          </ul>
          <h2>Takeaway</h2>
          <br />
          <p>
            처음으로 하는 프로젝트였기 때문에 다른 팀원들과 적극적으로 소통하고
            싶다는 생각을 하였습니다.
            <br />
            <br />
            그래서 별점과 별점그래프로 백엔드 팀원들과 데이터통신을 한다면 좋은
            경험이 될 것이라고 생각했습니다.
            <br />
            <br />
            API 데이터를 연동할 땐 팀원분들과 의사소통하는 것이 가장
            중요했습니다. 서로 알아들을 수 있도록 대화를 해야했기 때문에
            가급적이면 전문적인 용어를 쓰는 것을 지양했고 최대한 뜻을 풀어서
            의사를 전달해야 했습니다.
            <br />
            <br />
            덕분에 제가 쓰는 용어의 뜻을 다시 확일할 수 있는 기회가 되기도
            하였습니다.
          </p>
        </S.ProjectFirstExplain>

        <S.ProjectSecondExplain position={2} imgIndex={iltalImgIndex}>
          <h2>Feature</h2>
          <h3>별점</h3>
          <ul>
            <li>별을 클릭시 원하는 점수가 매겨지도록 구현했습니다.</li>
            <li>
              별점을 준 후 다시 똑같은 별점을 클릭하면 취소하기가 가능합니다.
            </li>
            <li>
              별점을 준 상태여도 마우스를 Hover하면 1점부터 5점까지 이동할 수
              있도록 구현했습니다.
            </li>
          </ul>
          <h2>Takeaway</h2>
          <br />
          <p>
            처음으로 하는 프로젝트였기 때문에 다른 팀원들과 적극적으로 소통하고
            싶다는 생각을 하였습니다.
            <br />
            <br />
            그래서 별점과 별점그래프로 백엔드 팀원들과 데이터통신을 한다면 좋은
            경험이 될 것이라고 생각했습니다.
            <br />
            <br />
            API 데이터를 연동할 땐 팀원분들과 의사소통하는 것이 가장
            중요했습니다. 서로 알아들을 수 있도록 대화를 해야했기 때문에
            가급적이면 전문적인 용어를 쓰는 것을 지양했고 최대한 뜻을 풀어서
            의사를 전달해야 했습니다.
            <br />
            <br />
            덕분에 제가 쓰는 용어의 뜻을 다시 확일할 수 있는 기회가 되기도
            하였습니다.
          </p>
        </S.ProjectSecondExplain>

        <S.ProjectThirdExplain position={3} imgIndex={iltalImgIndex}>
          <h2>Feature</h2>
          <h3>슬라이더</h3>
          <ul>
            <li>버튼을 누르면 이미지의 너비만큼 움직이도록 하였습니다.</li>
            <li>
              처음에는 이전버튼이 나타나지 않고 끝에서는 다음버튼이 나타나지
              않도록 했습니다.
            </li>
          </ul>
          <h2>Takeaway</h2>
          <br />
          <p>
            슬라이더는 라이브러리를 사용하지않고 직접 구현할 수 있다고
            판단하였고 그렇게 하는 것이 보다 많은 것을 배울 수 있다고
            생각하였습니다.
            <br />
            <br />
            공식문서를 기준으로 잡고서 슬라이더를 만드는 방법과 원리를
            살펴보았고 그 과정에서 이론만을 공부하는 것이 아닌 실전에서
            사용함으로서 몸에 직접 체화할 수 있었습니다.
            <br />
            <br />
            또한, stackoverflow, youtube, velog 등 여러 매체를 통해서 검색해보고
            저에게 필요한 정보를 취합해서 적용하는 경험도 할 수 있었습니다.
          </p>
        </S.ProjectThirdExplain>
      </S.ProjectExplainBox>

      <S.ProjectReviewTitle>WatCU 후기</S.ProjectReviewTitle>
      <S.ProjectReview>
        <p>
          처음으로 첫번째 프로젝트를 진행하며 느끼고 배운 점은 다음과
          같았습니다.
        </p>
        <br />
        <ol>
          <li>백엔드와 소통하고 API를 적용하는 경험.</li>
          <li>github를 통한 협업을 실전 프로젝트에서 적용.</li>
          <li>
            기획을 할땐 의욕에 앞서지 않고 기술수준과 시간을 고려하여 합리적으로
            짜야한다는 것.
          </li>
          <li>Sass를 사용하며 그 유용성을 직접 학습.</li>
        </ol>
        <br />
        <br />
        <p>
          이제까지 혼자서 코딩을 진행하던 것과는 다르게 팀원분들과 합을 맞춰
          진행한 첫번째 프로젝트는 매우 흥미로웠고 재밌는 경험이었습니다.
          <br />
          <br />
          특히, 별점과 별점 그래프는 데이터를 수정하고 추가하는 작업이었기
          때문에 백엔드와의 적극적인 의사소통이 필요하였습니다.
          <br />
          <br />
          처음해보는 소통이었기 때문에 낯설었지만 마지막에 그래프가 클릭에
          따라서 움직이는 모습은 저에게 정말 커다란 성취감을 안겨주었습니다.
        </p>
      </S.ProjectReview>
    </S.ProjectTask>
  );
};

export default Iltal;

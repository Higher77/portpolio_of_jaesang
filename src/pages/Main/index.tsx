import React, { useState, useRef } from "react";
import Iltal from "./Project/Iltal";
import Watcu from "./Project/Watcu";
import Internship from "./Internship";
import * as S from "./style";
import { title, skill, viva } from "assets/images";

const Main = () => {
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

        <Internship />

        <S.ProjectSection>
          <S.ProjectTitle>📂 Project</S.ProjectTitle>

          <Iltal />

          <S.Blank />
          <S.Blank />

          <Watcu />

          <S.Blank />
          <S.Blank />
          <S.Blank />
        </S.ProjectSection>
      </S.MainWapper>
    </>
  );
};

export default Main;

import React from "react";
import Iltal from "./Project/Iltal";
import Watcu from "./Project/Watcu";
import Internship from "./Internship";
import * as S from "./style";
import { title, skill, github, tistory } from "assets/images";

const Main = () => {
  return (
    <>
      <S.MainWapper>
        <S.Header>
          <S.TitleBox>
            <S.TitleTextBox>
              <S.TitleKorText>μ΅μ¬μ</S.TitleKorText>
              <S.TitleEngText>JaeSang-Choi</S.TitleEngText>
            </S.TitleTextBox>
            <S.TitleImg alt="titleimg" src={title} />
          </S.TitleBox>
          <S.ContactBox>
            <S.ContactSite>
              <S.Github href="https://github.com/Higher77" target="_blank">
                <img alt="github" src={github} />
              </S.Github>
              <S.Tistory href="https://higher77.tistory.com/" target="_blank">
                <img alt="tistory" src={tistory} />
              </S.Tistory>
            </S.ContactSite>
            <S.Contact>
              <p>π Phone : 010-2249-4178</p>
              <p>π¨ Mail : ask6743@gmail.com</p>
            </S.Contact>
          </S.ContactBox>
          <S.TitleLine />
        </S.Header>
        <S.IntroduceSection>
          <S.IntroFirstText>
            π» νλ‘ νΈμλ κ°λ°μ 'μ΅μ¬μ'μλλ€.
          </S.IntroFirstText>
          <br />
          <p>
            μ΄λ Έμ μ λΆν° νλμλ₯Ό μ¬μ©νμ¬ 1:1 λκ²° κ²μ, μμ μ¬μ νλ μ΄μ΄ λ±
            μ¬λ¬ μνμ λ§λ€μ λλ‘ κ°λ°μ λν ν₯λ―Έκ° μμμ΅λλ€.
          </p>
          <br />
          <p>
            νλ¦¬λμ μΌλ¬μ€νΈλ μ΄ν°λ‘μ μΌν κ²½νμ΄ μμ΄ μκ°μ μΈ μμμ λν΄μ
            μλΉμ μμ₯μμ κ³ λ €ν  μ μλ μμΌλ₯Ό κ°μΆ μ μμμ΅λλ€. λν, λ§κ°
            κΈ°νμ μ€μμ±μ μ μκ³  λ¨ νλ²λ λ¦μ μ  μμ΄ κΈ°κ°μ μ§μΌ°μ΅λλ€.
          </p>
          <br />
          <p>
            λ€λ₯Έ μκ°μμ λ°λΌλ³΄λ κ²μ΄ μ΅κ΄μ΄ λμκΈ° λλ¬Έμ μ½λλ₯Ό μ§€ λμλ
            κ°μ νλ‘ νΈμλ λλ£ λΏλ§μ΄ μλλΌ λμμ΄λ, λ°±μλλΆλ€ λ±
            μ¬λ¬κ΄μ μμ κΉμ§ μκ°νλ©° μ½λλ₯Ό μ§λ €κ³  ν­μ λΈλ ₯νκ³  μμ΅λλ€.
          </p>
          <br />
          <p>
            νμ¬λ μ κ³΅μ§μμ μ΅λμ μν΄μ νμ μνμ λ₯Ό ν΅ν΄ μ»΄ν¨ν°κ³΅νκ³Όλ₯Ό
            μ κ³΅νκ³  νμ¬λ₯Ό μ·¨λ μ€μ μμ΅λλ€.
          </p>
          <br />
          <p>
            1λ ν νμ¬ μ·¨λμ νκ³ λλ©΄ λνμμ μ§νν  κ³νμ νκ³  μμ΅λλ€.
          </p>
        </S.IntroduceSection>

        <S.SkillSection>
          <S.SkillImg alt="skillimg" src={skill} />
        </S.SkillSection>

        <Internship />

        <S.ProjectSection>
          <S.ProjectTitle>π Project</S.ProjectTitle>

          <Iltal />

          <S.Blank />
          <S.Blank />

          <Watcu />

          <S.Blank />
          <S.Blank />
          <S.Blank />
          <S.Blank />
        </S.ProjectSection>
      </S.MainWapper>
    </>
  );
};

export default Main;

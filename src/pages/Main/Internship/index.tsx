import React from "react";
import * as S from "./style";
import { viva } from "assets/images";

const Internship = () => {
  return (
    <S.InternshipSection>
      <S.InternshipTitle>๐ Internship Task</S.InternshipTitle>

      <S.IntershipCompanyBox>
        <S.VivaInovationImg alt="vivainovation" src={viva} />
        <S.InternshipCompay>๋น๋ฐ์ด๋ธ๋ฒ ์ด์</S.InternshipCompay>
      </S.IntershipCompanyBox>

      <S.InternshipRole>Front-end Developer Intern</S.InternshipRole>

      <S.IntershipTask>
        <S.IntershipTaskTitle>Task 1. ์ฐฉํ์์ฌ ์ฝ๊ดํ์ด์ง</S.IntershipTaskTitle>
        <ul>
          <li>
            <p>๊ฐ๋ฐ ๊ธฐ๊ฐ : 2021๋ 08์ 09์ผ ~ 08์ 13์ผ</p>
          </li>
          <li>
            <p>๊ฐ๋ฐ ์ธ์ : ํ๋ก ํธ์๋ 2์ธ</p>
          </li>
          <li>
            <p>์ฌ์ฉ ๊ธฐ์  :</p>
            <p>Front-End : React, Typescript, Styled-Component, Git action</p>
            <p>Communication tool : Slack, Zeplin, Figma</p>
          </li>
          <li>
            <p>์๋น์ค ์ฃผ์ : 10๊ฐ์ ํ์ด์ง ์ค 2๊ฐ ์๋ก</p>
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
              ๋ชจ๋ฐ์ผ/ํ๋ธ๋ฆฟ/ ์น์ผ๋ก ๊ตฌ๋ถํ์ฌ ๋ฐ์ํ ์น์ผ๋ก ์ ์๋ ํ์ด์ง ์๋๋ค.
            </li>
            <li>์ต์ ์ฝ๊ด๊ณผ ์๋ฌธ์ฝ๊ด์ด ์กด์ฌํ์ฌ url๋ก ์ด๋ฅผ ๊ตฌ๋ถํ์์ต๋๋ค.</li>
            <li>Git action์ ํตํด ์ค์  ์๋น์ค๋ฅผ ๋ฐฐํฌํ์์ต๋๋ค.</li>
          </ul>
        </S.InternshipTaskDetail>
      </S.IntershipTask>

      <S.Blank />

      <S.IntershipTask>
        <S.IntershipTaskTitle>Task 2. Admin ๊ฑด๊ฐ๊ฒ์ง CRM</S.IntershipTaskTitle>
        <ul>
          <li>
            <p>๊ฐ๋ฐ ๊ธฐ๊ฐ : 2021๋ 08์ 16์ผ ~ 08์ 26์ผ</p>
          </li>
          <li>
            <p>๊ฐ๋ฐ ์ธ์ : ํ๋ก ํธ์๋ 2์ธ</p>
          </li>
          <li>
            <p>์ฌ์ฉ ๊ธฐ์  :</p>
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
              ๋ฆฌ์คํธ ํ์ด์ง์์ ๊ฐ ๋ชฉ๋ก์ ํด๋ฆญ ์ ์์ธํ์ด์ง๋ก ๋์ด๊ฐ๋ ํ์ด์ง
              ์๋๋ค.
            </li>
            <li>๋ฆฌ์คํธ ํ์ด์ง๋ 3์ค ํํฐ, ์ํ๊ฐ์ ์ ์ญ์ผ๋ก ๊ด๋ฆฌํฉ๋๋ค.</li>
            <li>
              ์์ธ ํ์ด์ง๋ React-datepicker๋ฅผ ์ด์ฉํ์ฌ ์์ฝ์ผ์ ํ์ ํ  ์
              ์์ต๋๋ค.
            </li>
            <li>๋ฐฑ์๋ API๋ฅผ ํตํด ํ์ ,์ทจ์,์ญ์ ๋ฅผ ํ  ์ ์์ต๋๋ค.</li>
          </ul>
        </S.InternshipTaskDetail>
      </S.IntershipTask>

      <S.Blank />

      <S.IntershipReview>
        <S.InternshipReviewTitle>
          ๋น๋ฐ์ด๋ธ๋ฒ ์ด์ ์ธํด ํ๊ธฐ
        </S.InternshipReviewTitle>
        <S.InternshipReviewBox>
          <p>
            ๋น๋ฐ์ด๋ธ๋ฒ ์ด์์์ ํ๋ฌ ๊ฐ์ ์ธํด์ ์งํํ๋ฉฐ ์ค์  IT ๊ธฐ์์์์
            ์๋ฌด๋ฅผ ๊ฒฝํํ์์ต๋๋ค. <br /> ์ ๊ฐ ๊ทธ๊ณณ์์ ๋ฐฐ์ฐ๊ณ  ๋๋ ์ ์ ๋ค์๊ณผ
            ๊ฐ์ต๋๋ค
          </p>
          <br />
          <ol>
            <li>Figma, Zeplin์ ํตํด ๋์์ธํ๊ณผ ์ํตํ๊ณ  ์๊ฒฌ์ ๋๋ด์ต๋๋ค.</li>
            <li>์ค์  ๊ธฐ์์์ ์ฌ์ฉํ๋ Front-end Convention์ ์ฌ์ฉํ์ต๋๋ค.</li>
            <li>
              CI/CD๋ผ๋ ๊ฐ๋์ ๋ฐฐ์ฐ๊ณ  ์ฝ๊ดํ์ด์ง๋ฅผ ํตํด ์ค์  ์๋น์ค๋ฅผ
              ๋ฐฐํฌํ์์ต๋๋ค.
            </li>
            <li>๊ฐ๋ฐ์๋ค์ ํ์๊ณผ ์ํ์ ์ธ ํ ๋ฌธํ๋ฅผ ๊ฒช์์ต๋๋ค.</li>
          </ol>
          <br />
          <p>
            ๋ง์ ๊ฒ์ ๋ฐฐ์ธ ์ ์์๊ณ  ์ค์  ์๋น์ค ๋๋ ์ฌ์ดํธ์ ์ฝ๊ด ํ์ด์ง๋ผ๋
            ์ ๊ฐ ๋ง๋  ์ฝ๋๊ฐ ์ค์ ๋ก ๋ฐฐํฌ๋๊ณ  ์ฌ์ฉ๋๋ค๋ ์ฌ์ค์ ๋งค์ฐ ๋ณด๋์ฐฌ
            ๊ฒฐ๊ณผ์์ต๋๋ค.
          </p>
        </S.InternshipReviewBox>
      </S.IntershipReview>
    </S.InternshipSection>
  );
};

export default Internship;

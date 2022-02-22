import React, { useState, useRef } from "react";
import * as S from "./style";
import { next, prev } from "assets/images";

interface ProjectProps {
  imgLists: string[];
  setProjectImgIndex: React.Dispatch<React.SetStateAction<number>>;
}

let throttler;

const Slider = ({ imgLists, setProjectImgIndex }: ProjectProps) => {
  const [imgIndex, setImgIndex] = useState<number>(1);

  const imgList = useRef<HTMLDivElement>(null);

  const handleNextButton = (): void => {
    if (throttler) return;

    throttler = setTimeout(() => {
      throttler = null;
    }, 1000);

    if (imgList.current) {
      setImgIndex((prev) => prev + 1);
      setProjectImgIndex((prev) => prev + 1);

      imgList.current.style.transform = `translateX(${
        -900 * (imgIndex + 1)
      }px)`;
      imgList.current.style.transition = `transform 1s`;

      if (imgIndex + 1 === imgLists.length - 1) {
        setImgIndex(1);
        setProjectImgIndex(1);

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
      setImgIndex((prev) => prev - 1);
      setProjectImgIndex((prev) => prev - 1);

      imgList.current.style.transform = `translateX(${
        -900 * (imgIndex - 1)
      }px)`;
      imgList.current.style.transition = `transform 1s`;

      if (imgIndex - 1 === 0) {
        setImgIndex(imgLists.length - 2);
        setProjectImgIndex(imgLists.length - 2);

        setTimeout(() => {
          imgList.current.style.transform = `translateX(${
            -900 * (imgLists.length - 2)
          }px)`;

          imgList.current.style.transition = `transform 0s`;
        }, 1000);
      }
    }
  };

  return (
    <>
      <S.ProjectSliderContainer>
        <S.ProjectImgList ref={imgList}>
          {imgLists.map((img, key) => {
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
          return <S.Dot position={value} imgIndex={imgIndex} key={index} />;
        })}
      </S.DotPositionBox>
    </>
  );
};

export default Slider;

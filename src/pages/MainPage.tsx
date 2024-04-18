import styled from "styled-components";

export const MainPage = () => {
  return (
    <MainContainer>
      <TextContainer>
        <Text>ShinJoongWon</Text>
        <Text>Frontend developer</Text>
        <Text>
          안녕하세요, 프론트엔드 개발자가 되기위해 열정으로 쌓아가고있는
          신중원입니다 아직은 부족한 부분이 많지만 새로운 것을 시도하는 것과
          배우는 것을 좋아하기때문에 뭐든 항상 배워가는 마음가짐으로 임팩트있는
          개발자가 되기위해 노력하고 있습니다
        </Text>
      </TextContainer>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  align-items: center;
  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
`;
const Text = styled.li``;

const TextContainer = styled.ul`
  display: flex;
  flex-direction: column;
  width: 30vw;
  > :nth-child(1) {
    font-size: 25px;
  }
  > :nth-child(2) {
    font-size: 18px;
  }
  > :nth-child(3) {
    font-size: 13px;
  }
  @media (max-width: 500px) {
    width: 85vw;
  }
`;

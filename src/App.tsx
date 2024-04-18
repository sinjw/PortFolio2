import { MainPage } from "./pages/MainPage";
import { Navigate } from "./components/navigate";
import styled from "styled-components";
export function App() {
  return (
    <Container>
      <MainPage /> <Navigate />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  align-items: center;
`;

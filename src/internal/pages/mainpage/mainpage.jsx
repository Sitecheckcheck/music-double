import { Main } from '../../components/main/Main';
import { Footer } from '../../components/footer/Footer';
import GlobalStyle, { Wrapper, Container } from '../../styles';

export const MainPage = ({ setPlaylist }) => (
  <Wrapper>
    <Container>
      <GlobalStyle />
      <Main setPlaylist={setPlaylist} />
      <Footer />
    </Container>
  </Wrapper>
);

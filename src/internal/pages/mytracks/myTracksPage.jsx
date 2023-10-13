import { MyTrackMain } from '../../components/mytrackmain/mytrackmain';
import { Footer } from '../../components/footer/Footer';
import GlobalStyle, { Wrapper, Container } from '../../styles';

export const MyTracks = ({ setPlaylist }) => (
  <Wrapper>
    <Container>
      <GlobalStyle />
      <MyTrackMain setPlaylist={setPlaylist} />

      <Footer />
    </Container>
  </Wrapper>
);

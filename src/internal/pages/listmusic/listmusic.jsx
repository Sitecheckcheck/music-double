// /* eslint-disable */
import { useParams } from 'react-router-dom';
import { Footer } from '../../components/footer/Footer';
import GlobalStyle, { Wrapper, Container } from '../../styles';
import { Nav } from '../../components/nav/Nav';
import SMain from '../../components/main/mainStyle';
import { ListNames } from '../../../constans';
import { Sidebar } from '../../components/sidebar/Sidebar';
import { ListCenterBlock } from '../../components/listBlock/listCenterBlock';

export const ListMusic = ({ setPlaylist }) => {
  const params = useParams();

  const ListName = ListNames.find(
    (listname) => listname.id === Number(params.id),
  );

  return (
    <Wrapper>
      <Container>
        <GlobalStyle />
        <SMain>
          <Nav />
          <ListCenterBlock setPlaylist={setPlaylist} ListName={ListName} />
          <Sidebar />
        </SMain>
        <Footer />
      </Container>
    </Wrapper>
  );
};

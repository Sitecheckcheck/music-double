import { Route, Routes } from 'react-router-dom';
import { NotFound } from './internal/pages/not-found';
import { MainPage } from './internal/pages/mainpage/mainpage';
import { Signin } from './internal/pages/signin/signin';
import { Signup } from './internal/pages/signup/signup';
import { MyTracks } from './internal/pages/mytracks/myTracksPage';
import { ProtectedRoute } from './internal/components/protected-route';
import { ListMusic } from './internal/pages/listmusic/listmusic';

export const AppRoutes = (props) => (
  <Routes>
    <Route path="*" element={<NotFound />} />
    <Route path="signin" element={<Signin />} />
    <Route path="signup" element={<Signup />} />
    <Route element={<ProtectedRoute isAllowed={Boolean(props.token)} />}>
      <Route path="/" element={<MainPage setPlaylist={props.setPlaylist} />} />
    </Route>
    <Route element={<ProtectedRoute isAllowed={Boolean(props.token)} />}>
      <Route
        path="mytrack"
        element={<MyTracks setPlaylist={props.setPlaylist} />}
      />
    </Route>

    <Route element={<ProtectedRoute isAllowed={Boolean(props.token)} />}>
      <Route
        path="playlist/:id"
        element={<ListMusic setPlaylist={props.setPlaylist} />}
      />
    </Route>
  </Routes>
);

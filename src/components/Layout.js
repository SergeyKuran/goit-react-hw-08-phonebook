import { Container } from './Layout.styled';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { AppAuth } from './AppAuth/AppAuth';
import { Loader } from './Loader/Loader';

export const Layout = () => {
  return (
    <Container>
      <AppAuth />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

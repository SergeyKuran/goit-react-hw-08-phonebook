import { Container } from './Layout.styled';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { AppAuth } from './AppAuth/AppAuth';

export const Layout = () => {
  return (
    <Container>
      <AppAuth />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

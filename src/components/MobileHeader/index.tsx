import React from 'react';

import { Container, ProfileCircle, SearchInput, MessegeIcon } from './styles';

const MobileHeader: React.FC = () => {
  return (
      <Container>
          <ProfileCircle src="https://github.com/giljrsantos.png" />
          <SearchInput placeholder="Pesquisar" />
          <MessegeIcon />
      </Container>
  );
}

export default MobileHeader;
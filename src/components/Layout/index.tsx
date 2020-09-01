import React, { useState, useEffect } from 'react';


import { Container } from './styles';
import LeftColumn from '../LeftColumn';
import MiddleColumn from '../MiddleColumn';
import RightColumn from '../RightColumn';
import MobileHeader from '../MobileHeader';
import DesktoHeader from '../DesktoHeader';
import AdBanner from '../AdBanner';

const Layout: React.FC = () => {
  
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
  }, [])
  
  return (
      <Container>
          <MobileHeader />
          <DesktoHeader />

          <span>
              {!isLoading && <AdBanner />}
          </span>
          <main>
              <LeftColumn isLoading={isLoading} />
              <MiddleColumn isLoading={isLoading} />
              <RightColumn isLoading={isLoading} />
          </main>
      </Container>
  );
}

export default Layout;
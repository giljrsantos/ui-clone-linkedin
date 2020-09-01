import React from 'react';

import Panel from '../../Panel';

import { Container } from './styles';

const ProfilePanel: React.FC = () => {
  return (
    <Panel>
      <Container>
        <div className="profile-cover"></div>
        <img
          src="https://github.com/giljrsantos.png"
          alt="Avatar"
          className="profile-picture"
        />
        <h1>Gilberto Júnior</h1>
        <h2>Desenvolvedor Web, Asp Classic, HMTL, CSS, NodeJs, ReactJs</h2>

        <div className="separator"></div>

        <div className="key-value">
          <span className="key">Quem viu seu perfil</span>
          <span className="value">44</span>
        </div>
        <div className="key-value">
          <span className="key">Viram sua publicação</span>
          <span className="value">76</span>
        </div>
      </Container>
    </Panel>
  );
};

export default ProfilePanel;

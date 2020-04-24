import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="#newrepo">
          <img
            src="https://avatars1.githubusercontent.com/u/58253?s=460&u=a036f1d0b030a19e05692d1a61b4c27afafc5b6d&v=4"
            alt="Felipe Bueno"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="#newrepo">
          <img
            src="https://avatars1.githubusercontent.com/u/58253?s=460&u=a036f1d0b030a19e05692d1a61b4c27afafc5b6d&v=4"
            alt="Felipe Bueno"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="#newrepo">
          <img
            src="https://avatars1.githubusercontent.com/u/58253?s=460&u=a036f1d0b030a19e05692d1a61b4c27afafc5b6d&v=4"
            alt="Felipe Bueno"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;

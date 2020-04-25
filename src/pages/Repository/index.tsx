import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import { Header, RepositoryInfo, Issues } from './styles';
import logoImg from '../../assets/logo.svg';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <Header>
        <img src={logoImg} alt="Github Explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img
            src="https://avatars3.githubusercontent.com/u/69631?v=4"
            alt="avatar"
          />
          <div>
            <strong>Titulo do reositorio</strong>
            <p>descricao do repositorio</p>
          </div>
        </header>

        <ul>
          <li>
            <strong>1840</strong>
            <span>stars</span>
          </li>
          <li>
            <strong>1840</strong>
            <span>stars</span>
          </li>
          <li>
            <strong>1840</strong>
            <span>stars</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link to="/repositories/hg">
          <div>
            <strong>sdfsfs</strong>
            <p>kjhjkhkjh</p>
          </div>

          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;

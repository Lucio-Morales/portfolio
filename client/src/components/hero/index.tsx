import { useNavigate } from 'react-router-dom';
import { Content, HeroContainer } from './styles';
import profileImage from '/foto-de-perfil.jpeg';

const Hero = () => {
  const navigate = useNavigate();
  return (
    <HeroContainer>
      <img src={profileImage} alt="author-profile-image" />
      <Content>
        <h1>Lucio Morales</h1>
        <h2>Desarrollador Fullstack</h2>
        <p>
          El desarrollo de software no es solo código; es un ecosistema donde
          los seres humanos podemos expresar nuestra mayor cualidad:{' '}
          <span>la creatividad.</span>
        </p>
        <button onClick={() => navigate('/projects')}>Projects</button>
      </Content>
    </HeroContainer>
  );
};

export default Hero;

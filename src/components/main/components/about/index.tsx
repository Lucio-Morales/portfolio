// import styled from 'styled-components';
// import my_photo from './img/foto-de-perfil.jpeg';
// import {
//   FaReact,
//   FaNodeJs,
//   FaCss3Alt,
//   FaHtml5,
//   FaJsSquare,
// } from 'react-icons/fa';
// import { SiTypescript, SiPostgresql } from 'react-icons/si';

// const AboutSection = styled.section`
//   min-height: 100vh;
//   background-color: #000000;
//   color: white;
//   padding: 20px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   text-align: center;
//   padding-top: 100px;

//   img {
//     margin-top: 20px;
//     width: 200px;
//     height: 200px;
//     border-radius: 50%;
//     object-fit: cover;
//     transition: transform 0.3s ease;
//     &:hover {
//       transform: scale(1.06);
//     }
//   }

//   h3 {
//     font-size: 2.5rem;
//     border-bottom: 3px solid #1a1a1a;
//     font-weight: 500;
//     color: white;
//     margin: 20px 0 10px;
//   }

//   @media (max-width: 768px) {
//     img {
//       width: 200px;
//       height: 200px;
//     }
//     h3 {
//       font-size: 1.8rem;
//     }
//   }
// `;

// const SectionTitle = styled.h2`
//   color: #ffffff;
//   font-size: 2.2rem;
//   text-align: center;
//   margin-bottom: 40px;
//   position: relative;
//   cursor: pointer;

//   &::after {
//     content: '';
//     width: 0;
//     height: 4px;
//     background-color: tomato;
//     display: block;
//     margin: 10px auto;
//     transition: width 0.4s ease;
//   }

//   &:hover::after {
//     width: 100px;
//   }

//   @media (max-width: 768px) {
//     &::after {
//       width: 100px; /* Ancho estático en mobile */
//     }

//     &:hover::after {
//       width: 100px;
//     }
//   }
// `;

// const InfoContainer = styled.div`
//   display: flex;
//   gap: 20px;
//   max-width: 800px;
//   width: 100%;
//   margin-top: 30px;
//   justify-content: center;
//   flex-wrap: wrap;

//   @media (max-width: 768px) {
//     flex-direction: column;
//     align-items: center;
//     gap: 15px;
//   }
// `;

// const InfoBox = styled.div`
//   background-color: #1a1a1a;
//   padding: 20px;
//   width: 100%;
//   max-width: 380px;
//   color: #bbb;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
//   transition: transform 0.3s ease;
//   text-align: left;

//   &:hover {
//     transform: translateY(-5px);
//   }

//   h4 {
//     font-size: 1.5rem;
//     color: #ffffff;
//     margin-bottom: 10px;
//     position: relative;

//     &::after {
//       content: '';
//       position: absolute;
//       width: 0;
//       height: 2px;
//       background-color: #bbb;
//       bottom: -3px;
//       left: 0;
//       transition: width 0.3s ease;
//     }
//   }

//   &:hover h4::after {
//     width: 100%;
//   }

//   p {
//     font-size: 1.2rem;
//     line-height: 1.8rem;
//   }
// `;

// const IconsContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   gap: 20px;
//   margin-top: 30px;
//   flex-wrap: wrap;

//   svg {
//     font-size: 2.5rem;
//     color: #94b9ff;
//     transition: color 0.3s ease, transform 0.3s ease;
//     &:hover {
//       color: #cdffd8;
//       transform: scale(1.2);
//     }
//   }

//   @media (max-width: 768px) {
//     gap: 15px;
//     svg {
//       font-size: 2rem;
//     }
//   }
// `;

// const About = () => {
//   return (
//     <AboutSection id="about">
//       <SectionTitle>About Me</SectionTitle>
//       <img src={my_photo} alt="Lucio" />
//       <h3>Lucio Morales</h3>
//       <InfoContainer>
//         <InfoBox>
//           <h4>Mi historia 📖</h4>
//           <p>
//             A los 8 años recibí mi primera computadora y, con ella, la
//             posibilidad de conectarme a Internet. Esa fascinación que sentí
//             mientras navegaba por las distintas páginas web fue solo el comienzo
//             de mi viaje. Hoy, con 25 años, tengo el privilegio de crear las
//             mismas experiencias digitales que impactaron a ese niño.
//           </p>
//         </InfoBox>
//         <InfoBox>
//           <h4>Intereses 😊</h4>
//           <p>
//             Quiero convertirme en un profesional que aporte valor a los
//             proyectos y, con el tiempo, inspirar y ayudar a otros a crecer como
//             desarrolladores. La colaboración y el aprendizaje son fundamentales
//             para mí. Soy un optimista: voy a usar la tecnología para mejorar la
//             vida de las personas y hacer mi aporte al mundo.
//           </p>
//         </InfoBox>
//       </InfoContainer>
//       <IconsContainer>
//         <SiTypescript title="TypeScript" style={{ color: '#007acc' }} />
//         <FaReact title="React" style={{ color: '#61dafb' }} />
//         <FaNodeJs title="Node.js" style={{ color: '#8CC84B' }} />
//         <FaCss3Alt title="CSS3" style={{ color: '#1572B6' }} />
//         <FaHtml5 title="HTML5" style={{ color: '#E34F26' }} />
//         <FaJsSquare title="JavaScript" style={{ color: '#F7DF1E' }} />
//         <SiPostgresql title="PostgreSQL" style={{ color: '#336791' }} />
//       </IconsContainer>
//     </AboutSection>
//   );
// };

// export default About;

import styled from 'styled-components';
import my_photo from './img/foto-de-perfil.jpeg';
import {
  FaReact,
  FaNodeJs,
  FaCss3Alt,
  FaHtml5,
  FaJsSquare,
} from 'react-icons/fa';
import { SiTypescript, SiPostgresql } from 'react-icons/si';

const AboutSection = styled.section`
  min-height: 100vh;
  background-color: #000000;
  color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-top: 100px;

  img {
    margin-top: 20px;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    object-fit: cover;
    transition: transform 0.3s ease;
    &:hover {
      transform: scale(1.06);
    }
  }

  h3 {
    font-size: 2.5rem;
    border-bottom: 3px solid #1a1a1a;
    font-weight: 500;
    color: white;
    margin: 20px 0 10px;
  }

  @media (max-width: 768px) {
    img {
      width: 200px;
      height: 200px;
    }
    h3 {
      font-size: 1.8rem;
    }
  }
`;

const SectionTitle = styled.h2`
  color: #ffffff;
  font-size: 2.2rem;
  text-align: center;
  margin-bottom: 40px;
  position: relative;
  cursor: pointer;

  &::after {
    content: '';
    width: 0;
    height: 4px;
    background-color: tomato;
    display: block;
    margin: 10px auto;
    transition: width 0.4s ease;
  }

  &:hover::after {
    width: 100px;
  }

  @media (max-width: 768px) {
    &::after {
      width: 100px; /* Ancho estático en mobile */
    }

    &:hover::after {
      width: 100px;
    }
  }
`;

const InfoContainer = styled.div`
  display: flex;
  gap: 20px;
  max-width: 800px;
  width: 100%;
  margin-top: 30px;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }
`;

const InfoBox = styled.div`
  background-color: #1a1a1a;
  padding: 20px;
  width: 100%;
  max-width: 380px;
  color: #bbb;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;
  text-align: left;

  &:hover {
    transform: translateY(-5px);
  }

  h4 {
    font-size: 1.5rem;
    color: #ffffff;
    margin-bottom: 10px;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      width: 0;
      height: 2px;
      background-color: #bbb;
      bottom: -3px;
      left: 0;
      transition: width 0.3s ease;
    }
  }

  &:hover h4::after {
    width: 100%;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.8rem;
  }
  span {
    background-color: rgba(255, 99, 71, 0.7);
    color: black; /* Color del texto */
    padding: 2px 5px; /* Espaciado alrededor del texto */
    font-weight: bold;
  }
`;

const IconsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;
  flex-wrap: wrap;

  svg {
    font-size: 2.5rem;
    color: #94b9ff;
    transition: color 0.3s ease, transform 0.3s ease;
    &:hover {
      color: #cdffd8;
      transform: scale(1.2);
    }
  }

  @media (max-width: 768px) {
    gap: 15px;
    svg {
      font-size: 2rem;
    }
  }
`;

const About = () => {
  return (
    <AboutSection id="about">
      <SectionTitle>About Me</SectionTitle>
      <img src={my_photo} alt="Lucio" />
      <h3>Lucio Morales</h3>
      <InfoContainer>
        <InfoBox>
          <h4>Mi historia 📖</h4>
          <p>
            A los 8 años recibí mi primera computadora y, con ella, la
            posibilidad de conectarme a Internet. Esa <span>fascinación</span>{' '}
            que sentí mientras navegaba por las distintas páginas web fue solo
            el comienzo de mi viaje. Hoy, con 25 años, tengo el privilegio de
            crear las mismas <span>experiencias digitales</span> que impactaron
            a ese niño.
          </p>
        </InfoBox>
        <InfoBox>
          <h4>Intereses 😊</h4>
          <p>
            Quiero convertirme en un profesional que aporte valor a los
            proyectos y, con el tiempo, inspirar y ayudar a otros a crecer como
            desarrolladores. La <span>colaboración</span> y el{' '}
            <span>aprendizaje</span> son fundamentales para mí. Soy un
            optimista: voy a usar la <span>tecnología</span> para mejorar la
            vida de las personas y hacer mi aporte al mundo.
          </p>
        </InfoBox>
      </InfoContainer>
      <IconsContainer>
        <SiTypescript title="TypeScript" style={{ color: '#007acc' }} />
        <FaReact title="React" style={{ color: '#61dafb' }} />
        <FaNodeJs title="Node.js" style={{ color: '#8CC84B' }} />
        <FaCss3Alt title="CSS3" style={{ color: '#1572B6' }} />
        <FaHtml5 title="HTML5" style={{ color: '#E34F26' }} />
        <FaJsSquare title="JavaScript" style={{ color: '#F7DF1E' }} />
        <SiPostgresql title="PostgreSQL" style={{ color: '#336791' }} />
      </IconsContainer>
    </AboutSection>
  );
};

export default About;

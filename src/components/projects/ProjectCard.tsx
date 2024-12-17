import styled from 'styled-components';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  features: string[];
}

const CardContainer = styled.div`
  background-color: rgb(12, 12, 12);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding-bottom: 50px;
  border: 1px solid #444;
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  display: block;
`;

const CardTitle = styled.h3`
  letter-spacing: -0.1rem;
  margin-top: 15px;
  font-size: 1.7rem;
  font-weight: 400;
  color: rgb(94, 94, 94);
`;

const CardSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  width: 100%;
`;

const DescriptionBox = styled.div`
  padding: 15px;
  width: 50%;
  color: #f8f8f8;
`;

const FeaturesBox = styled.div`
  padding: 15px;
  width: 50%;
  color: #f8f8f8;

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    font-size: 1.1rem;
    margin-bottom: 10px;
  }
`;

const TechIconsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 15px;
`;

const TechIcon = styled.img`
  width: 30px;
  height: 30px;
  object-fit: contain;
  border-radius: 50%;
`;

const ButtonsContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
`;

const Button = styled.button`
  flex: 1;
  padding: 16px 0;
  background-color: rgb(12, 12, 12);
  color: white;
  border: 1px solid #444;
  border-bottom: none;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #222;
    color: #f8f8f8;
  }

  &:first-child {
    border-right: none;
    border-left: none;
  }
  &:last-child {
    border-right: none;
  }
`;

const Card: React.FC<CardProps> = ({
  title,
  description,
  imageUrl,
  technologies,
  features,
}) => {
  return (
    <CardContainer>
      <CardImage src={imageUrl} alt={title} />
      <CardTitle>{title}</CardTitle>
      <TechIconsContainer>
        {technologies.map((tech, index) => (
          <TechIcon key={index} src={tech} alt={`technology-${index}`} />
        ))}
      </TechIconsContainer>
      <CardSection>
        <DescriptionBox>
          <h4>Description</h4>
          <p>{description}</p>
        </DescriptionBox>
        <FeaturesBox>
          <h4>Features</h4>
          <ul>
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </FeaturesBox>
      </CardSection>
      <ButtonsContainer>
        <Button>Demo</Button>
        <Button>Code</Button>
      </ButtonsContainer>
    </CardContainer>
  );
};

export default Card;

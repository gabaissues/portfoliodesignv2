import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media(max-width: 800px) {

    > h1 {
    font-size: 1.2rem;
  }
    margin-top: 10rem;
    
}
`;
export const Image = styled.img`
  width: 21.875rem;
  height: 21.875rem;

  @media(max-width: 800px) {

    width: 15rem;
    height: 15rem;
    margin: 0 auto;
    
}
`;

export const Cards = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 6.25rem;
  max-width: 50rem;

  @media(max-width: 800px) {

    margin-top: 2rem;
    align-items: center;
    justify-content: center;

  }
`;
export const Card = styled.div`
  display: flex;
  width: 18.75rem;
  height: 20rem;
  padding: 1rem;
  background-color: #F6F6F6;
  justify-content: space-between;
  flex-direction: column;
  border-radius: 0.75rem;
  transition: 0.5s ease;
  margin-left: 1rem;
  margin-bottom: 1rem;

  flex: 3;

  &:hover {
    box-shadow: 0.375rem 0.375rem 0.25rem #e7e7e7;
  }

  @media(max-width: 800px) {

    margin-left: 1rem;
    margin-right: 1rem;
    
  }
`;

export const Bottom = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;
`

export const CardBottom = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Paragraph = styled.p`
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 0.75rem;
`;
export const Link = styled.a`
  margin-top: 1rem;
  display: flex;
  border-radius: 0.3rem;
  justify-content: center;
  color: #fafafa;
  text-align: center;
  background-color: #f24b95;
  font-size: 1rem;
  font-family: Poppins;
  font-weight: 600;
  text-decoration: none;
  padding: 1rem 3rem;
`;

export const TextFixed = styled.div<{
  left?: string;
  right?: string;
  top?: string;
  bottom?: string;
}>`
  position: absolute;
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  bottom: ${(props) => props.bottom};
  top: ${(props) => props.top};
  font-weight: 600;
  font-size: 1.5rem;
`;
export const Text = styled.h1<{
  fontSize?: string;
  fontWeight?: string;
  padding?: string;
  margin?: string;
  color?: string;
}>`
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  color: ${props => props.color ? props.color : '#2d2d2d'};
  font-family: Poppins;
`;

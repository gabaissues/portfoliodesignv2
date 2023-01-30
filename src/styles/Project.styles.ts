import styled from 'styled-components'

export const Main = styled.main`
  display: flex;
  flex-direction: column;

  max-width: 75rem;
  margin: 0 auto;

  video {
    height: 80vh;
  }

  @media(max-width: 800px) {

    margin: 0rem 2rem;

  }
`

export const Divider = styled.div`
  background-color: #fd328c;
  width: 4rem;
  height: .3rem;
  border-radius: 20rem;
  margin-bottom: 1rem;
`

export const Paragraph = styled.p`
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 2rem;
`

export const Back = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  margin-bottom: 2rem;

  svg {
    width: 1rem;
    margin-right: 1rem;
    height: 1rem;
  }
`

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

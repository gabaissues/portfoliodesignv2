import styled from "styled-components";

export const Formation = styled.div`
  margin-top: 5rem;
  padding: 2.5rem;
  background-color: #ededed;

  @media(max-width: 800px) {

    margin-top: 5rem;
    
}
`;
export const Divider = styled.div`
  background-color: #fd328c;
  width: 4.5rem;
  border-radius: 20rem;
  height: 0.5rem;
  margin-bottom: 1.25rem;
`;

export const List = styled.ul`
  margin-left: 1.2rem;
`;

export const Item = styled.li`
  font-size: 1.5rem;
  color: #d36e9b;
  font-weight: 600;
  margin-bottom: 0.3rem;

  &::before {
    content: "•";
    color: #d36e9b;
    display: inline-block;
    width: 0.8em;
    margin-left: -1em;
  }

  @media(max-width: 800px) {

    font-size: 1.2rem;
    
}
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

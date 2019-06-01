import styled from "styled-components"

const LinkButton = styled.a`
  padding: 0.1875rem 1rem;
  background-color: #66e2d5;
  font-size: 1rem;
  border: 0.125rem solid black;
  border-radius: 0.1875rem;
  margin: 0.5rem;
  font-weight: bold;
  text-decoration: none;
  color: black;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }

  &:focus {
    outline: transparent;
  }
`

export default LinkButton

import styled, { css } from "styled-components";

export const Container = styled.form`
  position: fixed;
  display: flex;
  background-color: var(--background);
  width: 100%;
  height: 100%;

  h1 {
    user-select: none;
  }
`;
export const Content = styled.div`
  margin: 0 auto;
  max-width: 1120px;
  display: flex;
  /* background-color: red; */
  margin-top: 2rem;
  font-size: 2rem;
  flex-direction: column;
  align-items: center;

  .option-buttons {
    display: flex;
  }

  .divider {
    width: 100px;
    height: auto;
    display: inline-block;
  }

  input {
    margin-top: 2rem;
    width: 140px;
    height: 80px;
    font-size: 2.5rem;
    text-align: center;     
}
`;

interface OptionButtonProps {
  isSelected: boolean;
}

export const OptionButton = styled.button<OptionButtonProps>`
  width: 400px;
  height: 100px;
  margin-bottom: 2rem;
  background-color: var(--dark);
  color: white;
  font-size: 1.5rem;
  font-weight: 600;
  border-radius: 0.5rem;
  border: none;
  transition: 100ms;

  ${(props) =>
    props.isSelected &&
    css`
      background-color: var(--orange);
    `}
`;

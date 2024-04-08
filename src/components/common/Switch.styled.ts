import styled from 'styled-components';

export const SwitchWrapper = styled.label`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;

  input[type='checkbox'] {
    appearance: none;
    position: relative;
    border: max(2px, 0.1em) solid ${({ theme }) => theme.COLORS['P-BUTTON2']};
    border-radius: 1.25em;
    width: 2.25em;
    height: 1.25em;
  }

  input[type='checkbox']::before {
    content: '';
    position: absolute;
    left: 0;
    top: -0.5px;
    width: 1em;
    height: 1em;
    border-radius: 50%;
    transform: scale(0.8);
    background-color: ${({ theme }) => theme.COLORS['P-BUTTON2']};
    transition: left 250ms linear;
  }

  input[type='checkbox']:checked::before {
    background-color: white;
    left: 1em;
  }

  input[type='checkbox']:checked {
    background-color: ${({ theme }) => theme.COLORS['P-BUTTON2']};
    border-color: ${({ theme }) => theme.COLORS['P-BUTTON2']};
  }
`;

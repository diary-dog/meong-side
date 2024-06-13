import styled from 'styled-components';

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 10px 30px;
  height: 100vh;
  gap: 30px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  input {
    margin-bottom: 20px;
  }
  #imageUrl {
    display: none;
  }
  label {
    cursor: pointer;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 23px;
`;

export const DefaultImage = styled.label`
  position: relative;
  background-color: ${({ theme }) => theme.COLORS['INACTIVE-BUTTON']};
  border-radius: 100%;
  width: 214px;
  height: 214px;
  cursor: pointer;

  .border {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 85px;
    height: 85px;
    background-color: white;
    border-radius: 100%;
    cursor: pointer;
  }
  .svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
  }
`;
export const GenderWrapper = styled.div`
  display: flex;
  gap: 16px;

  input[type='radio']:checked + label {
    color: black;
  }
`;
export const GenderItem = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 126px;
  height: 45px;
  padding: 7px 25px;
  gap: 8px;
  border-radius: 20px;
  cursor: pointer;
  color: ${({ theme }) => theme.COLORS['FONT-COLOR-IA']};

  &#male {
    border: 1px solid ${({ theme }) => theme.COLORS.DECO4};
  }
  &#female {
    border: 1px solid ${({ theme }) => theme.COLORS.DECO3};
  }
  input {
    display: none;
  }
  label {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    cursor: pointer;
  }
`;
export const GenderButton = styled.input`
  display: none;
`;
export const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.COLORS['P-BUTTON1']};
  margin: 5px 0;
`;

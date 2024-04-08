import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 57px;
  gap: 25px;
`;

export const Title = styled.h2`
  font-size: 30px;
  font-weight: 400;
  line-height: 38.4px;
  align-self: flex-start;
  margin-top: 19px;
`;

export const SVGWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: 15px;

  .heart {
    align-self: flex-end;
    margin-right: 55px;
    margin-bottom: 15px;
  }
  .ellipse {
    margin-top: -42px;
    z-index: -1;
  }
`;
export const ButtonTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

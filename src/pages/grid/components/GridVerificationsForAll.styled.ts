import styled from 'styled-components';

export const Container = styled.div`
  & > :first-child {
    position: fixed;
  }
`;
export const Wrapper = styled.div`
  height: calc(100vh - 200px);
  padding-top: 35px;
`;

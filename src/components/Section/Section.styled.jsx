import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  &:first-child {
    padding-top: 15px;
    padding-bottom: 15px;
    border: 1px solid black;
  }
`;

export const Title = styled.h2`
  margin-bottom: ${p => p.theme.space[3]}px;
  font-size: ${p => p.theme.fontSizes.l};
`;

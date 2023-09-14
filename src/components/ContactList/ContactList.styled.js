import styled from 'styled-components';

export const StyledList = styled.ul`
  margin: 0px;
  padding-left: 30px;
`;

export const StyledListItem = styled.li`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const StyledButton = styled.button`
  width: 50px;
  height: 30px;
  border: 1px solid #e3e6e7;
  border-radius: 8px;
  background: white;
  &:hover , &: focus {
    background-color: blue;
  }
`;

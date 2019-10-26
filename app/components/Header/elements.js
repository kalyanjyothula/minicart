import styled from 'styled-components';

export const MainHeaderContainer = styled.div`
  height: 60px;
  width: 100%;
  background: #fffffe;
  transition: box-shadow 0.15s ease;
  box-shadow: 0 1px 3px rgba(50, 50, 93, 0.15), 0 1px 0 rgba(0, 0, 0, 0.02);
  display: flex;
  align-items: center;
  padding: 0px 10px;
  justify-content: space-between;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Title = styled.h1`
  margin-left: 0.5rem;
  font-weight: 600;
  user-select: none;
  font-size: 1.88rem;
`;

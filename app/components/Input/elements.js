import styled from 'styled-components';

export const InputContainer = styled.div`
  position: relative;
  display: flex;
  border-radius: 0.25rem;
  transition: box-shadow 0.15s ease;
  box-shadow: 0 1px 3px rgba(50, 50, 93, 0.15), 0 1px 0 rgba(0, 0, 0, 0.02);
  border: 0;
  width: 100%;
  color: #8898aa;
  margin-bottom: 1rem;
  flex-wrap: wrap;
  &:hover {
    box-shadow: 0 5px 5px -5px rgba(0, 0, 0, 0.5);
  }
`;

export const IconWrapper = styled.div`
  border-radius: 0.25rem;
  background-color: #fff;
  align-items: center;
  padding: 0.625rem 0.75rem;
`;

export const TextInput = styled.input`
  margin-bottom: 0;
  border: 0;
  display: block;
  background: #ffffff;
  background-clip: padding-box;
  padding: 0.625rem 0.75rem;
  font-size: 0.875rem;
  border-radius: 0.25rem;
  flex: 1 1 auto;
  position: relative;
  ::placeholder {
    opacity: 0.4;
  }
`;

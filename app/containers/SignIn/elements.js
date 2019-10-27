import styled from 'styled-components';
import UserLogin from 'icons/UserLogin';
import Button from 'components/Button';

export const LoginWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 3rem;
`;

export const LoginContainer = styled.div`
  display: flex;
  width: 30%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 5px;
  transition: box-shadow 0.15s ease;
  background: rgb(244, 245, 247);
  padding: 1rem 0.3rem;
  box-shadow: 0 2px 2px rgba(50, 50, 93, 0.15), 0 2px 0 rgba(0, 0, 0, 0.02);
  @media screen and (max-width: 32em) {
    width: 90%;
  }
`;

export const LoginIconContainer = styled(UserLogin)`
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  height: 6rem;
  width: 6rem;
`;

export const LoginTitle = styled.div`
  font-weight: 300;
  font-size: 12px;
  color: #878987;
`;

export const LoginInputContainer = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 90%;
  margin: 1rem;
`;

export const LogInButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const LogInButton = styled(Button)`
  height: 35px;
  background: rgb(3, 54, 203);
`;

export const LinkContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  a {
    color: #878987;
    font-size: 0.94rem;
    &:hover {
      color: green;
    }
  }
`;

export const LinkButton = styled.button`
  background: transparent;
  text-decoration: underline;
`;

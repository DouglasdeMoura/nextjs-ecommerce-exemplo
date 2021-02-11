import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import Main from '../Main/Main';

const Login = () => {
  const handleOnSubmit = (event) => {
    event.preventDefault();

    const inputs = event.target.querySelectorAll('input');

    fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({
        email: inputs[0].value,
        password: inputs[1].value,
      }),
    })
      .then(async (response) => {
        localStorage.setItem('token', await response.text());
      });
  };

  return (
    <Main>
      <form onSubmit={handleOnSubmit}>
        <Input label="email" />
        <Input label="password" type="password" />
        <Button>Login</Button>
      </form>
    </Main>
  );
};

export default Login;

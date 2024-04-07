import { Button, Link, Container, Typography } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { Link as RouterLink } from 'react-router-dom';
import { TextField } from '@mui/material';

const Register = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <Container
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        marginTop: '50px',
      }}
    >
      <Container
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          alignItems: 'center',
          padding: '200px 0px',
          borderRadius: '20px',
          boxShadow: '0px 25px 50px rgba(0, 0, 0, 0.25)',
        }}
      >
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          style={{
            fontFamily: 'Arial, sans-serif',
            fontSize: '40px',
            fontWeight: 'bold',
            marginBottom: '50px',
          }}
        >
          Регистрация
        </Typography>

        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{ display: 'block', margin: '0px 235px' }}
        >
          <Controller
            name="email"
            control={control}
            defaultValue=""
            rules={{
              required: 'Email is required',
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: 'Invalid email address',
              },
            }}
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                label="Email"
                variant="outlined"
                error={Boolean(errors.email)}
                helperText={errors.email && errors.email.message}
                style={{
                  marginBottom: '24px',
                }}
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            defaultValue=""
            rules={{ required: 'Password is required' }}
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                type="password"
                label="Password"
                variant="outlined"
                error={Boolean(errors.password)}
                helperText={errors.password && errors.password.message}
                style={{ marginBottom: '54px' }}
              />
            )}
          />
          <Button
            fullWidth
            type="submit"
            variant="contained"
            color="primary"
            disableElevation
            style={{ marginBottom: '26px' }}
          >
            Регистрация
          </Button>
        </form>
        <div style={{ display: 'flex', gap: '20px' }}>
          <Typography variant="body1">Есть учетная запись? </Typography>
          <Link
            component={RouterLink}
            to="/login"
            variant="body1"
            underline="hover"
          >
            Войти
          </Link>
        </div>
      </Container>
    </Container>
  );
};

export default Register;

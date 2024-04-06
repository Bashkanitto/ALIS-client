import { useState } from 'react';
import { TextField, Button, Link } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { Link as RouterLink } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    console.log(data); // You can handle login logic here
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="rounded-xl shadow-2xl ptContainer-6 m-4 bg-inherit flex flex-col items-center justify-center w-[600px] h-[700px]">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full p-10 bg-inherit"
        >
          <div className="mb-4 w-full">
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
                  value={formData.email}
                  onChange={handleChange}
                  variant="outlined"
                  error={Boolean(errors.email)}
                  helperText={errors.email && errors.email.message}
                />
              )}
            />
          </div>
          <div className="mb-6 w-full">
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
                  value={formData.password}
                  onChange={handleChange}
                  variant="outlined"
                  error={Boolean(errors.password)}
                  helperText={errors.password && errors.password.message}
                />
              )}
            />
          </div>
          <Button
            fullWidth
            type="submit"
            variant="contained"
            color="primary"
            disableElevation
          >
            Login
          </Button>
        </form>
        <div className="mt-3 flex flex-col gap-2 md:flex-row md:gap-5">
          <span>Нет учетной записи?</span>
          <Link
            component={RouterLink}
            to="/register"
            variant="body1"
            underline="hover"
          >
            Зарегистрироваться
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;

import toast from 'react-hot-toast';

export const usernameValidate = async (values) => {
  const errors = {};

  if (!values.username) {
    toast.error('Username is required!');
    errors.username = 'Username is required!';
  } else if (values.username.includes(' ')) {
    toast.error('Username is invalid!');
    errors.username = 'Username is invalid!';
  }

  return Object.keys(errors).length ? errors : {};
}

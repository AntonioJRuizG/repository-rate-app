import * as yup from 'yup';

export const loginValidationSchema = yup.object().shape({
	email: yup
  .string()
  .email('Email must be a valid email')
  .required('E-mail is required'),
	password: yup
		.string()
		.min(5, 'Too short')
		.max(50, 'Too long')
		.required('Password is required'),
});

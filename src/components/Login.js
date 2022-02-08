import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/authContext';
import Alert from './Alert';

function Login() {
	const [user, setUser] = useState({
		email: '',
		password: '',
	});

	const { login, loginWithGoogle } = useAuth();
	const navigate = useNavigate();
	const [error, setError] = useState();

	const handleChange = ({ target: { name, value } }) => {
		setUser({ ...user, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError('');
		try {
			await login(user.email, user.password);
			navigate('/');
		} catch (e) {
			setError(e.message);
		}
	};

	const handleGoogleLogin = async () => {
		try {
			await loginWithGoogle();
			navigate('/');
		} catch (e) {
			setError(e.message);
		}
	};
	return (
		<div className='w-full max-w-xs m-auto'>
			{error && <Alert message={error} />}

			<form
				onSubmit={handleSubmit}
				className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
				<div className='mb-4'>
					<label
						htmlFor='email'
						className='block text-gray-700 text-sm font-fold mb-2'>
						Email
					</label>
					<input
						type='email'
						name='email'
						placeholder='youremail@company.com'
						id='emial'
						onChange={handleChange}
						className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
					/>
				</div>
				<div className='mb-4'>
					<label
						htmlFor='password'
						className='block text-gray-700 text-sm font-fold mb-2'>
						Password
					</label>
					<input
						type='password'
						name='password'
						placeholder='password'
						id='password'
						onChange={handleChange}
						className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
					/>
				</div>

				<button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-sm'>
					Login
				</button>
			</form>

			<button
				onClick={handleGoogleLogin}
				className='bg-slate-50 hover:bg-slate-200 text-black shadow-md rounded border-2 border-gray-300 py-2 px-4 w-full'>
				Login with Google
			</button>
		</div>
	);
}

export default Login;

import { paths } from '@routes/paths';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import { useFormik } from 'formik';
import NoImage from '@assets/human.png';
import styles from './Username.module.css';

export const Username = () => {
	const navigate = useNavigate();
	const formik = useFormik({
		initialValues: {
			username: '',
		},
		validateOnBlur: false,
		validateOnChange: false,
		onSubmit: async (values) => console.log(values),
	});

	return (
		<div className="container mx-auto">
			<div className="flex justify-center h-screen">
				<div className={styles.glass}>
					<div className="title flex flex-col items-center">
						<h4 className="text-5xl font-bold">Welcome!</h4>
						<span className="py-4 text-xl w-2/3 text-center text-gray-500">
							Enter username
						</span>
					</div>
					<form
						className="py-1"
						onSubmit={formik.handleSubmit}
					>
						<div className="profile flex justify-center py-4">
							<img
								src={NoImage}
								alt="avatar"
								className={styles.profileImg}
							/>
						</div>
						<div className="textbox flex flex-col items-center gap-6">
							<input
								type="text"
								placeholder="Username"
								className={styles.textBox}
								{...formik.getFieldProps('username')}
							/>
							<button
								type="submit"
								className=" border bg-gray-500 w-3/4 py-4 rounded-lg text-white text-xl shadow-sm text-center"
							>
								Let's go
							</button>
						</div>
						<div
							onClick={() => navigate(paths.register)}
							className="text-center py-4"
						>
							<span className="text-gray-500">
								Not a member?
								<span className="text-red-500 cursor-pointer">
									{' '}
									register now
								</span>
							</span>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

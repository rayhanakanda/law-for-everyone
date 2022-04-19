import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import googleLogo from '../../Assets/Images/icons8-google.svg';
import { useAuthState, useCreateUserWithEmailAndPassword, useSendEmailVerification, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const [createUserWithEmailAndPassword, , , error] = useCreateUserWithEmailAndPassword(auth);
    const { register, handleSubmit, formState: { errors }, trigger } = useForm();
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const [sendEmailVerification] = useSendEmailVerification(auth);
    const [user] = useAuthState(auth);
    const location = useLocation();
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/';

    const onSubmitParam = data => {
        if (data.password !== data.confirmpass) {
            toast.error("Password doesn't match!", {
                toastId: "passWrong"
            });
            return;
        }
        if (error) {
            toast.error("User already exists with this email!", {
                toastId: "emailIsInUse"
            });
            return;
        }
        createUserWithEmailAndPassword(data.email, data.password);
        sendEmailVerification();
    }
    useEffect(() => {
        if (user) {
            toast.success("Wooo! Sign Up successful", {
                toastId: "signUpSuccess"
            });
            navigate(from, { replace: true })
        }
    })
    return (
        <div className='mt-32 mb-10 w-full md:w-1/2 mx-auto custom-shadow bg-[#e8eaec] pt-10 pb-10 px-10 rounded-lg'>
            <h1 className='text-2xl md:text-3xl font-medium text-slate-500 text-center mb-10'>Please Register to Continue</h1>
            <form onSubmit={handleSubmit(onSubmitParam)}>

                <div className="grid xl:grid-cols-2 xl:gap-6">
                    <div className="relative z-0 mb-6 w-full group">
                        <input type="text" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "
                            {...register("firstname", {
                                required: true,
                                minLength: {
                                    value: 3, message: 'Minimum 3 character required'
                                }
                            })}

                            onKeyUp={() => {
                                trigger('firstname')
                            }}
                        />
                        {errors?.firstname?.type === "required" && <p className='text-red-500 text-sm'>First Name is required</p>}
                        <p className='text-red-500 text-sm'>{errors?.firstname?.message}</p>

                        <label htmlFor="floating_first_name" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
                    </div>
                    <div className="relative z-0 mb-6 w-full group">
                        <input type="text" name="floating_last_name" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "
                            {...register("lastname", {
                                required: true,
                                minLength: {
                                    value: 3, message: 'Minimum 3 character required'
                                }
                            })}

                            onKeyUp={() => {
                                trigger('lastname')
                            }}
                        />
                        {errors?.lastname?.type === "required" && <p className='text-red-500 text-sm'>Last name is required</p>}
                        <p className='text-red-500 text-sm'>{errors?.lastname?.message}</p>

                        <label htmlFor="floating_last_name" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
                    </div>


                </div>
                <div className="relative z-0 mb-6 w-full group">
                    <input type="email" name="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required=""
                        {...register("email", {
                            required: 'Email is required',
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Please enter a valid Email"
                            }
                        })}
                        onKeyUp={() => {
                            trigger('email')
                        }}
                    />
                    <p className='text-red-500 text-sm'>{errors?.email?.message}</p>

                    <label htmlFor="floating_email" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                </div>
                <div className="relative z-0 mb-6 w-full group">
                    <input type="password" name="floating_password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required=""
                        {...register('password', {
                            required: 'Password is required',
                            pattern: {
                                value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                                message: "Minimum eight characters, at least one letter and one number"
                            }
                        })}
                        onKeyUp={() => {
                            trigger('password')
                        }}
                    />
                    <p className='text-red-500 text-sm'>{errors?.password?.message}</p>

                    <label htmlFor="floating_password" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                </div>
                <div className="relative z-0 mb-6 w-full group">
                    <input type="password" name="repeat_password" id="floating_repeat_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required=""
                        {...register('confirmpass', {
                            required: 'Password is required',
                            pattern: {
                                value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                                message: "Minimum eight characters, at least one letter and one number"
                            }
                        })}
                        onKeyUp={() => {
                            trigger('confirmpass')
                        }}
                    />
                    <p className='text-red-500 text-sm'>{errors?.confirmpass?.message}</p>

                    <label htmlFor="floating_repeat_password" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm password</label>
                </div>

                <button type="submit" className="text-white md:w-1/4 bg-[#F2A540] duration-500 hover:bg-[#c96304] focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Register</button>
                <p className='font-medium mt-4 text-slate-600'>Already a member of ivent? <Link className='text-blue-700' to={'/login'}>Login Here</Link></p>
            </form>
            <div className="flex items-center my-8">
                <div className="top"></div>
                <div className="middle mx-4 text-lg">or</div>
                <div className="bottom"></div>
            </div>
            <div className="text-center">
                <button onClick={() => signInWithGoogle()} className='flex items-center mx-auto google-button rounded-lg'><img src={googleLogo} alt="" /><p className='ml-2 text-lg'>Signin with Google</p></button>
            </div>

        </div>
    );
};

export default Register;
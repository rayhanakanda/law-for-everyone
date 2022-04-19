import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const CheckOut = () => {
    const { register, handleSubmit, formState: { errors }, trigger, reset } = useForm();
    const MySwal = withReactContent(Swal)

    const onSubmitParam = data => {
        MySwal.fire({
            title: <p>Hello World</p>,
            footer: 'Copyright 2018',
            didOpen: () => {
              MySwal.clickConfirm()
            }
          }).then(() => {
            return MySwal.fire(<p>Thank you for the Order</p>)
          })
        reset()
    }
    return (
        <div className='checkout mt-[76px]'>
            <div className='mt-32 mb-10 w-full md:w-1/2 mx-auto custom-shadow bg-[#e8eaec] pt-10 pb-10 px-10 rounded-lg'>
                <h1 className='text-2xl md:text-3xl font-medium text-slate-500 text-center mb-10'>Please confirm your Order</h1>
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
                            {errors?.firstname?.type === "required" && <p className='text-red-500 text-sm'>First name is required</p>}
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
                        <input type="text" name="floating_address" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required=""
                            {...register("address", {
                                required: 'Address is required',
                                    minLength: {
                                        value: 3, message: 'Minimum 3 character required'
                                    }
                            })}
                            onKeyUp={() => {
                                trigger('address')
                            }}
                        />
                        <p className='text-red-500 text-sm'>{errors?.address?.message}</p>

                        <label htmlFor="floating_address" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your address</label>
                    </div>

                    <div className="grid xl:grid-cols-2 xl:gap-6">
                        <div className="relative z-0 mb-6 w-full group">
                            <input type="text" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="floating_phone" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "
                            {...register("phone", {
                                required: true,
                                pattern: {
                                    value: /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
                                    message: "Please enter a valid Phone number"
                                }
                            })}
                            onKeyUp={() => {
                                trigger('phone')
                            }}
                        />
                        {errors?.phone?.type === "required" && <p className='text-red-500 text-sm'>Phone number is required</p>}
                            <p className='text-red-500 text-sm'>{errors?.phone?.message}</p>
                            <label htmlFor="floating_phone" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number (123-456-7890)</label>
                        </div>
                        <div className="relative z-0 mb-6 w-full group">
                            <input type="date" name="floating_date" id="floating_company" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "
                            {...register("date", {
                                required: true
                            })}
                            onKeyUp={() => {
                                trigger('date')
                            }}
                            />
                            {errors?.date?.type === "required" && <p className='text-red-500 text-sm'>Date is required</p>}
                            <p className='text-red-500 text-sm'>{errors?.date?.message}</p>
                            <label htmlFor="floating_date" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Schedule Date</label>
                        </div>
                    </div>

                    <button type="submit" className="text-white md:w-1/4 bg-[#F2A540] duration-500 hover:bg-[#c96304] focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Submit</button>
                    
                </form>
            </div>
        </div>
    );
};

export default CheckOut;
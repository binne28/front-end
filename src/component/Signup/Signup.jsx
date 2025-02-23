import React, { useState } from "react";
import { Field, Form, Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import * as Yup from "yup";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import API__URL from "../../config";
// import "./Signup.scss";
const signupUser = async (values) => {
    const response = await axios.post(`${API__URL}/auth/register`, values, {
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.status === 201 || response.status === 200) {
        return response.data;
    } else {
        throw new Error('Đăng kí thất bại');
    }
}

function Signup() {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const showToastMessage = (isSuccess) => {
        if (isSuccess) {
            toast.success("Registered successfully!", { position: "top-right", autoClose: 1100 });
        } else {
            toast.error("Registration failed!", { position: "top-right", autoClose: 1100 });
        }
    };


    const mutation = useMutation({
        // gửi yêu cầu đăng kí
        mutationFn: signupUser,

        //nếu đăng kí thành công
        onSuccess: (data) => {
            localStorage.setItem('user', JSON.stringify(data.user));
            showToastMessage(true);
            setTimeout(() => navigate('/dang-nhap'), 1000); 
        },

        // nếu đăng kí thất bại
        onError: (error) => {
            showToastMessage(false);
            if (error.response) {
                if (error.response.status === 401) {
                    console.log('Thông tin đăng ký không hợp lệ. Vui lòng kiểm tra lại username và password');
                } else {
                    console.log(`Lỗi: ${error.response.statusText}`);
                }
            } else if (error.request) {
                console.log('Không thể kết nối tới server. Vui lòng thử lại sau.');
            } else {
                console.log(`Lỗi không xác định: ${error.message}`);
            }
        },
    });
    const validationSchema = Yup.object().shape({
        username: Yup.string()
            .min(2, "Tên người dùng phải có ít nhất 2 ký tự")
            .max(12, "Tên người dùng không được vượt quá 12 ký tự")
            .matches(
                /^[a-zA-Z0-9_]+$/,
                "Tên người dùng chỉ được chứa chữ cái, số và dấu gạch dưới"
            )
            .required("Tên người dùng là bắt buộc"),
        email: Yup.string()
            .email("Email không hợp lệ")
            .required("Email là bắt buộc"),
        password: Yup.string()
            .min(8, "Mật khẩu phải có ít nhất 8 ký tự")
            .matches(/[A-Z]/, "Mật khẩu phải chứa ít nhất một chữ hoa")
            .matches(/[a-z]/, "Mật khẩu phải chứa ít nhất một chữ thường")
            .matches(/[0-9]/, "Mật khẩu phải chứa ít nhất một chữ số")
            .matches(/[@$!%*?&#]/, "Mật khẩu phải chứa ít nhất một ký tự đặc biệt")
            .required("Mật khẩu là bắt buộc"),
    });

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 mt-[4rem]">
            <ToastContainer />
            <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
                <h1 className="text-2xl font-semibold text-center mb-4">
                    Sign up to create account
                </h1>

                <Formik
                    initialValues={{
                        username: "",
                        email: "",
                        password: "",
                    }}
                    validationSchema={validationSchema}
                    onSubmit={async (values) => {
                        try {
                            await mutation.mutateAsync(values);
                            console.log('Dang ki thanh cong');

                        } catch (error) {
                            console.log('Dang ki that bai');
                        }
                    }}
                >
                    {({ errors, touched }) => (
                        <Form>
                            <div className="mb-4">
                                <label
                                    htmlFor="username"
                                    className="block text-gray-700 font-medium mb-2"
                                >
                                    Username
                                </label>
                                <Field
                                    id="username"
                                    name="username"
                                    type="text"
                                    placeholder="Enter your username"
                                    className={`w-full p-3 border rounded-lg ${errors.username && touched.username
                                        ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                                        : "border-gray-300 focus:border-green-500 focus:ring-green-500"
                                        }`}
                                />
                                {errors.username && touched.username && (
                                    <p className="text-red-500 text-sm mt-2">
                                        {errors.username}
                                    </p>
                                )}
                            </div>

                            <div className="mb-4">
                                <label
                                    htmlFor="email"
                                    className="block text-gray-700 font-medium mb-2"
                                >
                                    Email
                                </label>
                                <Field
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="Enter your email"
                                    className={`w-full p-3 border rounded-lg ${errors.email && touched.email
                                        ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                                        : "border-gray-300 focus:border-green-500 focus:ring-green-500"
                                        }`}
                                />
                                {errors.email && touched.email && (
                                    <p className="text-red-500 text-sm mt-2">{errors.email}</p>
                                )}
                            </div>

                            <div className="mb-4 relative">
                                <label
                                    htmlFor="password"
                                    className="block text-gray-700 font-medium mb-2"
                                >
                                    Password
                                </label>
                                <Field
                                    id="password"
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Enter your password"
                                    className={`w-full p-3 border rounded-lg pr-10 ${errors.password && touched.password
                                        ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                                        : "border-gray-300 focus:border-green-500 focus:ring-green-500"
                                        }`}
                                />
                                {errors.password && touched.password && (
                                    <p className="text-red-500 text-sm mt-2">{errors.password}</p>
                                )}
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 mt-7"
                                >
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}{" "}
                                </button>
                            </div>
                            {/* type=button => type=submit*/}
                            <button
                                type="submit"
                                disabled={mutation.isPending}
                                className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
                            >
                                {mutation.isPending ? "Registering..." : "Register"}
                            </button>
                        </Form>
                    )}
                </Formik>
                <p className="mt-4 text-center text-gray-600">
                    If you have account{" "}
                    <Link to="/dang-nhap">
                        <span className="text-blue-500 hover:underline">Sign in</span>
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default Signup;

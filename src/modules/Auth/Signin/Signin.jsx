import React from 'react'
import { useForm } from 'react-hook-form'
import { useSelector, useDispatch } from 'react-redux';
import {signin} from '../../../slices/userSlice'
import { Navigate } from 'react-router-dom';

function Signin() {
  const { register, handleSubmit, formState: { errors }, } = useForm ({
    defaultValues: {
     // Khai báo các giá trị khởi tạo cho các input
     taiKhoan: "",
     matKhau: "",
    },
  })

  const { user, isLoading, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const onSubmit = (values) => {
    dispatch(signin(values));
  };

  const onError = (errors) => {
    console.log(errors);
  };
  //kiem tra neu co thong tin user => da dang nhap => dieu huong ve trang Home
  if (user) {
    return <Navigate to="/" />
  }

  return (
    <div>
    <h1>Đăng Nhập</h1>
    
    <form onSubmit={handleSubmit(onSubmit, onError)}>
        <div>
          <input
            type="text"
            placeholder="Tài Khoản"
            {...register("taiKhoan", {
              required: {
                value: true,
                message: "Tài khoản không được để trống",
              },
            })}
          />
          {errors.taiKhoan && <p>{errors.taiKhoan.message}</p>}
        </div>

        <div>
          <input
            type="password"
            placeholder="Mật khẩu"
            {...register("matKhau", {
              required: {
                value: true,
                message: "Mật khẩu không được để trống",
              },
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
                message: "Mật khẩu ít nhất 8 kí tự, phải có 1 chữ hoa, 1 chữ thường và 1 số"
              },
            })}
          />
          {errors.matKhau && <p>{errors.matKhau.message}</p>}
        </div>
            {/* hien thi loi server tra ve VD : truong hop sai tai khoan hoac mat khau  */}
          {error && <p>{error}</p>}
        <button disabled={isLoading}>Dang Nhap</button>
      </form>
  </div>
  )
}

export default Signin

// const handleSubmit = (obSubmit) => {
//   return () => {
//     // logic ...
//     obSubmit(values)
//   }
// }

// onSubmit={handleSubmit(obSubmit)}

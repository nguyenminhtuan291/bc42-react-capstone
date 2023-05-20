// import React, { useState, useEffect } from "react";

// function UserForm({ user, onSubmit, onReset }) {
//   // state quản lý giá trị của các input trong form
//   const [values, setValues] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     address: "",
//   });

//   // Hàm setup của useEffect sẽ được chạy ở sau lần render đầu tiên và sau mỗi lần render tiếp theo nếu giá trị của prop user bị thay đổi
//   useEffect(() => {
//     // Dùng giá trị mới của prop user để cập nhật cho state values
//     setValues(user);
//   }, [user]);

//   const handleChange = (evt) => {
//     const { value, name } = evt.target;

//     setValues({
//       ...values,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (evt) => {
//     // Chặn hành vi submit mặc định của form
//     evt.preventDefault();

//     // Gọi prop onSubmit và truyền vào object values, và tham số để xác định xem là cần thêm mới hay cập nhật
//     onSubmit(values, values.id ? "update" : "create");

//     // Gọi hàm handleResetForm để set giá trị trên các input về rỗng
//     handleResetForm();
//   };

//   const handleResetForm = () => {
//     setValues({
//       firstName: "",
//       lastName: "",
//       email: "",
//       address: "",
//     });
//     onReset();
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div className="mb-3">
//         <label className="form-label">First Name</label>
//         <input
//           type="text"
//           name="firstName"
//           className="form-control"
//           value={values.firstName}
//           onChange={handleChange}
//         />
//       </div>

//       <div className="mb-3">
//         <label className="form-label">Last Name</label>
//         <input
//           type="text"
//           name="lastName"
//           className="form-control"
//           value={values.lastName}
//           onChange={handleChange}
//         />
//       </div>

//       <div className="mb-3">
//         <label className="form-label">Email</label>
//         <input
//           type="email"
//           className="form-control"
//           name="email"
//           value={values.email}
//           onChange={handleChange}
//         />
//       </div>

//       <div className="mb-3">
//         <label className="form-label">Address</label>
//         <input
//           type="text"
//           className="form-control"
//           name="address"
//           value={values.address}
//           onChange={handleChange}
//         />
//       </div>

//       <button type="submit" className="btn btn-success me-2">
//         Submit
//       </button>
//       <button
//         type="button"
//         className="btn btn-secondary"
//         onClick={handleResetForm}
//       >
//         Reset
//       </button>
//     </form>
//   );
// }

// export default UserForm;

//nếu trong form có submit thi nó sẽ load lại trang kích hoạt sự kiện onsubmit , sự kiện trong js nó sẽ trả vè event , thêm dòng event.preventDefault nó sẽ chặn hành vi reload lại của button submit , do có 4 imput nên mình có 4 cái props, hàm change, hàm xử lý khi gõ evt gõ thay đổi giá trị kich hoạt onchange , handlechange y chang doom, thì mình .value, lưu giá trị state , nếu nó aray sao chép gi hiện tại of nó đi thay đổi giá trị , value of nó event  , value mình đặt giá trị state, ép luôn luôn bằng giá trị state , = giá trị state nó luôn có , khi user gõ chữ a nó kích hoạt coponent , kich hoạt onchange nhap avfo gọi vào handle change , trỏ thẻ phát sinh thẻ sự kiện, . value giá trị set chính xác lại giá trị component làm 2 việc cập nhập giá trị thuộc tính kich hoạt hiển thị component , giá trị cập nhập giá trị mới nó sẽ đưa lai giao diện , giá trị mặc định ban đầu nó hok rỗng , ban đầu , giá trị đi theo state , state nó có giá trị thì input nó có giá trị , chuyển giá trị động thì mình đưa nó vào dấu ngoặc [], event doom tới sự kiện 2 gt value, name input đặt thuộc tính name mình có thể lấy , name là , value tủy thuộc giá trị user nhập , 

import React, { useState, useEffect } from "react";

function UserForm({ user, onSubmit, onReset }) {
  // state quản lý giá trị của các input trong form
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
  });

  // Hàm setup của useEffect sẽ được chạy ở sau lần render đầu tiên và sau mỗi lần render tiếp theo nếu giá trị của prop user bị thay đổi
  useEffect(() => {
    // Dùng giá trị mới của prop user để cập nhật cho state values
    setValues(user);
  }, [user]);

  const handleChange = (evt) => {
    const { value, name } = evt.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (evt) => {
    // Chặn hành vi submit mặc định của form
    evt.preventDefault();

    // Gọi prop onSubmit và truyền vào object values
    onSubmit(values);

    // Gọi hàm handleResetForm để set giá trị trên các input về rỗng
    handleResetForm();
  };

  const handleResetForm = () => {
    setValues({
      firstName: "",
      lastName: "",
      email: "",
      address: "",
    });
    onReset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">First Name</label>
        <input
          type="text"
          name="firstName"
          className="form-control"
          value={values.firstName}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Last Name</label>
        <input
          type="text"
          name="lastName"
          className="form-control"
          value={values.lastName}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Email</label>
        <input
          type="email"
          className="form-control"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Address</label>
        <input
          type="text"
          className="form-control"
          name="address"
          value={values.address}
          onChange={handleChange}
        />
      </div>

      <button type="submit" className="btn btn-success me-2">
        Submit
      </button>
      <button
        type="button"
        className="btn btn-secondary"
        onClick={handleResetForm}
      >
        Reset
      </button>
    </form>
  );
}

export default UserForm;
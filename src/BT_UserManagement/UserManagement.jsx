// import React, { useState } from "react";
// import UserForm from "./UserForm";
// import UserList from "./UserList";

// function UserManagement() {
//   // state quản lý danh sách người dùng
//   const [users, setUsers] = useState([
//     {
//       id: 1,
//       firstName: "Dan",
//       lastName: "Nguyen",
//       email: "dan@gmail.com",
//       address: "123 Cao Thắng",
//     },
//   ]);
//   // state quản lý user đang được chọn
//   const [selectedUser, setSelectedUser] = useState({});

//   // Viết hàm xử lý nhận vào object user, thêm vào state users
//   const handleSubmit = (user, type) => {
//     if (type === "create") {
//       const id = Math.floor(Math.random() * 100);
//       setUsers([...users, { ...user, id }]);
//     } else if (type === "update") {
//       const newUsers = users.map((item) => {
//         if (item.id === user.id) {
//           return user;
//         }
//         return item;
//       });
//       setUsers(newUsers);
//     }
//   };

//   // Viết hàm xử lý nhận vào userId, xoá user có id bằng userId khỏi state users
//   const handleDeleteUser = (userId) => {
//     const newUsers = users.filter((user) => user.id !== userId);
//     setUsers(newUsers);
//   };

//   // Viết hàm xử lý nhận vào object user, và lưu vào state selectedUser
//   const handleSelectUser = (user) => {
//     setSelectedUser(user);
//   };

//   return (
//     <div className="container-fluid">
//       <h1 className="text-center text-primary">User management</h1>

//       <div className="card">
//         <div className="card-header bg-dark text-white">User Form</div>
//         <div className="card-body">
//           <UserForm
//             user={selectedUser}
//             onSubmit={handleSubmit}
//             onReset={() => setSelectedUser({})}
//           />
//         </div>
//       </div>

//       <div className="mt-4">
//         <UserList
//           users={users}
//           onDeleteUser={handleDeleteUser}
//           onSelectUser={handleSelectUser}
//         />
//       </div>
//     </div>
//   );
// }

// export default UserManagement;

import React, { useState, useEffect } from "react";
import UserForm from "./UserForm";
import UserList from "./UserList";
import axios from "axios";
import Search from "./Search";

function UserManagement() {
  // state quản lý danh sách người dùng
  const [users, setUsers] = useState([]);
  // state quản lý user đang được chọn
  const [selectedUser, setSelectedUser] = useState({});

  //State quản lý giá trị tìm kiếm
  const [searchByName, setSearchByName] = useState("");

  // Viết hàm call API để lấy danh sách users
  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        "https://63e86415ac3920ad5beb7b08.mockapi.io/api/users"
      );
      {
        params: {
          name: searchByName || undefined,
        },
      }
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [searchByName]);

  // Viết hàm xử lý nhận vào object user và thêm hoặc cập nhật user
  const handleSubmit = async (user) => {
    const { id, ...payload } = user;

    try {
      if (id) {
        // Cập nhật
        await axios.put(
          `https://63e86415ac3920ad5beb7b08.mockapi.io/api/users/${id}`,
          payload
        );
      } else {
        // Thêm mới
        await axios.post(
          "https://63e86415ac3920ad5beb7b08.mockapi.io/api/users",
          payload
        );
      }
      // Gọi hàm fetchUser sau khi call API create/update
      fetchUsers();
    } catch (error) {
      console.log(error);
    }
  };

  // Viết hàm xử lý nhận vào userId và xoá user
  const handleDeleteUser = async (userId) => {
    try {
      await axios.delete(
        `https://63e86415ac3920ad5beb7b08.mockapi.io/api/users/${userId}`
      );
      // Sau khi xoá thành công, dữ liệu chỉ mới thay đổi ở phía server
      // Cần gọi lại hàm fetchUsers để gọi API lấy danh sách users mới nhất và set lại cho state users
      fetchUsers();
    } catch (error) {
      console.log(error);
    }
  };

  // Viết hàm xử lý nhận vào object user, và lưu vào state selectedUser
  const handleSelectUser = (user) => {
    setSelectedUser(user);
  };

  // Viết hàm xử lý nhận vào giá trị searchString
  const handleSearch = (searchString) => {
    console.log(searchString);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="container-fluid">
      <h1 className="text-center text-primary">User management</h1>

      <div className="card">
        <div className="card-header bg-dark text-white">User Form</div>
        <div className="card-body">
          <UserForm
            user={selectedUser}
            onSubmit={handleSubmit}
            onReset={() => setSelectedUser({})}
          />
        </div>
      </div>

      <div className="mt-4">
        <Search onSearch={handleSearch} />
      </div>

      <div className="mt-4">
        <UserList
          users={users}
          onDeleteUser={handleDeleteUser}
          onSelectUser={handleSelectUser}
        />
      </div>
    </div>
  );
}

export default UserManagement;


//dùng put thì nó đi thay đổi giá trị state, mà thằng khơi tạo nó trực tiếp thay đổi state ,
// sau đó mình props xún hàm thông qua onSubmit thông qua props
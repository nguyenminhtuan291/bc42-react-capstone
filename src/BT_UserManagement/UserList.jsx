import React from "react";

function UserList({ users, onDeleteUser, onSelectUser }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Address</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => {
          return (
            <tr key={user.id}>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>{user.address}</td>
              <td>
                <button
                  className="btn btn-warning me-2"
                  onClick={() => onSelectUser(user)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => onDeleteUser(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default UserList;

//cần truyền tham số nên mình dùng arrow function 

// do dùng detuctring nên mình dùng ngoặc nhọn giá trị component nhận vào nên người ta dùng props , nếu dùng map nên bỏ key 
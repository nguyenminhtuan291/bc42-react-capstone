// import React from 'react'

// function Welcom(props) {
//   console.log(props);
//   return (
//     <h3>Hello {props.name} - {props.email}</h3>
//   )
// }

// export default Welcom

//áp dung kỹ thuật ES6

// import React from 'react'

// function Welcom({name, email}) {
//   console.log(props);
//   return (
//     <h3>Hello {name} - {email}</h3>
//   )
// }

// export default Welcom


//giá trj mặc định 

// function Welcome({ name = "unknow", email = "unknow" }) {
//   return (
//     <h3>
//       Hello {name} - {email}
//     </h3>
//   );
// }

//gọi component ko truyền hết thì giá nó là object rỗng, nếu gt nhận được name vs email là giá trị undefined, hok hiển thị ra giao diện cho mình thấy , kỹ thuật khai bao giá trị mặc đinh props của các component, tự động lấy gt mặc định nó sử dụng default props nếu hok truyền gi props truyển dư liệu tử cha đến con 
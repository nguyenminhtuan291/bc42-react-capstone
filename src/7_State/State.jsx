// khác trong slide nó được hướng dụng class component nó dùng state sẽ dùng function copoment 16.8 khái niệm stata nó chuyển qua function người ta sẽ làm dùng function conponent xem trong khóa học liên quan phần số 9 làm việc với state , nói về class component 

// react ra đời 6 nằm người ta, mới hỏi về function nhiều hơn class, 

// để sử dụng state trong component cái hood
// NOTE: Chương trình trên lớp sẽ tập trung học state bằng function component (Hiện đang được sử dụng nhiều), Các bạn có thể xem thêm cách sử dụng state bằng class component trong phần video xem thêm

//mảng put vào cái mảng cập nhập vào số lượng cái mảng bài tập sinh viên thêm mảng sau khi thêm mảng giao diện hok tự cập nhập lại tạo lại doom tới rồi inner gán lại ex:
//  thẻ p count id count , buton id increase , dom tới đó document.gtelement(increse).addEventlistener("click,(") => nếu mún tăng lên 1 count thì minh dom tới thằng documnt.element ('count:)
//mỗi lần thay đổi giao diện mình phải dôm toi nó rồi giao diện nó smowis thây đổi
//state tính chất nso sẽ là 1 cái hàm react hood nó giá trị khơi tạo 1 biến nó sẽ trả lại 1 gồm 2 phần tử sử dụng detruggtoring nó lấy 2 giá trị gán 2 cái biến thì nó sễ const(first, second )= str, phần tử thứu 1 là state, phần tử thứ 2 là stuck, biding map giá trị ra, set count ở dưới ra viết giá trị nội tiếng , mỗi lần click gt count thì nó sẽ tăng 1 gt nó sẽ hok cho mình trực tiếp thay đổi giá trị biến mà mình phải thông qua 1 cái hàm mới thay đổi đc cái biến này hok thể dung const ++, nó sẽ tự động chạy lại component gt of biến count đc ghi nhớ gt trươc đó nó sẽ hok bị mất đi , lý do tại sao nó tăng lên , nếu xài 1 thử biến thông thường let count = 0, click vào count += 1, thì nó sẽ =0 nó tăng gt count mà nó hok hiển thị cho mình thấy bên react hok cần doom chỉ cần dùng state nó sẽ tự động làm việc đó cho mình luôn, gt nó có reacttip phản ứng lại khi thay đổi gt of nó sẽ làm component giữ lại thông tin rồi nó đi thay đổi tip về giá trị của nó 


import React, { useState } from "react";

// useState là một hook của React dùng để tạo và quản lý state trong function component
// các đặc tính của state
//khi giá trị state nó thay đổi component nó sẽ được chạy lại (rerender từ chuyên môn ), render là jsx hiển thị trên giao diện, chạy lại 1 component nó gọi là rerender, tuy nhiên giá trị của state nó sẽ được giữ lại , đặt biên trong hàm let student array rỗng nó sẽ set lại hàm ban đầu cho mình, 
//giá trị của state sẽ được giữ lại ở các lần ở re-render, làm react hok cần doom gt nào user nó tương tác nó sẽ lưu trữ thì mình sẽ lưu trữ phần giá trị state nó sẽ cập nhập giao diện mới cho mình hok cần , hok được phép  thay đổi giá trị trực tiếp của state , thông qua cái hàm set state, hàm setter là tham số thứ 2 trong const [count, setCount] = userState(0), local storage refes nó lại thi vẫn còn , còn thằng state nó sẽ chỉ lưu trữ khi đang sử dụng , đáp ứng sự thay đổi cho giao diện liên hok cần phải doom (trong js thuần mún hiện mình phải doom ), user nó sẽ thấy đc thay đổi mới , user nó tương tác trong phải lưu trữ trong state , state nó sẽ cập nhập lại giao diện mới cho user
//Ex if else hiển thị giao diện 
//let isLoggedIn = true, (đê viết jsx ? true nó sẽ render h1 và button logout, ngược lại chưa login thì nó sẽ hiển thị please login và button )
// const [count, setCount] = useState(0);

//   let isLoggedIn = true;

//   return (
//     <div>
//       <h1>State</h1>
//       <p>Count: {count}</p>
//       <button onClick={() => setCount(count + 1)}>Increase</button>

//       <hr />

//       {isLoggedIn ? (
//         <div>
//           <h1>Welcome back!!!</h1> viết nội suy thay đổi tương ứng vào giá trị biến, biến có thay đổi bới vì nó biến thông thường nên thay đổi kệ nó, bên react chuyển biến thành state để mà nó hiển thị ra giao diện cho mình chuyển bằng hood state nó mình , chuyển const [chuyển thành giá trị 2 phần tử , 1 isLoggedIn, nguyên tác đặt tên thì nó thêm set vào trước tến State ví dụ à setIsLoggedIN, hok đc thay đổi dt trực tiếp of state mình sẽ truyền gi vè hàm mún truyền ]
//           <button onClick={() => (isLoggedIn = false)}>Logout</button>
//         </div>
//       ) : (
//         <div>
//           <h1>Please Login!!!</h1>
//           <button onClick={() => (isLoggedIn = true)}>Login</button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default State;

//chuyển qua state 

// const [count, setCount] = useState(0);

// const [isLoggedIn, setIsLoggedIn] = useState(false);

// return (
//   <div>
//     <h1>State</h1>
//     <p>Count: {count}</p>
//     <button onClick={() => setCount(count + 1)}>Increase</button>

//     <hr />

//     {isLoggedIn ? (
//       <div>
//         <h1>Welcome back!!!</h1>
//         <button onClick={() => setIsLoggedIn(false)}>Logout</button>
//       </div>
//     ) : (
//       <div>
//         <h1>Please Login!!!</h1>
//         <button onClick={() => setIsLoggedIn(true)}>Login</button>
//       </div>
//     )}
//   </div>
// );
// }

// export default State;

// function State() 
  // useState n
// State là một k

// function State() {
//   // useState nhận vào 1 tham số là giá trị khởi tạo và trả về một array gồm 2 phần tử
//   // Phần tử 1: Giá trị của state
//   // Phần tử 2: Hàm dùng để thay đổi giá trị của state
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <h1>State</h1>
//       <p>Count: {count}</p>
//       <button onClick={() => setCount(count + 1)}>Increase</button>
//     </div>
//   );
// }

// export default State;

// import React, { useState } from "react";

// // useState là một hook của React dùng để tạo và quản lý state trong function component

// function State() {
  // useState n
// Các đặc tính của state:
// - Khi giá trị của state bị thay đổi component sẽ được chạy lại (re-render)
// - Giá trị của state sẽ được giữ nguyên ở các lần re-render

//THÊM MÀU CHO ARRAY

// function State() {
//   // useState nhận vào 1 tham số là giá trị khởi tạo và trả về một array gồm 2 phần tử
//   // Phần tử 1: Giá trị của state
//   // Phần tử 2: Hàm dùng để thay đổi giá trị của state
//   // Lưu ý: Không được thay đổi trực tiếp giá trị của state, mà phải thông qua hàm setter
//   const [count, setCount] = useState(0);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const [colors, setColors] = useState(["red", "green", "blue"]);
//   const handleAddColor = () => {
//     const color = prompt("Input your color:"); // yellow
//     // Output: ["red", "green", "blue", "yellow"]

//     //thêm cái màu vào cái danh sach màu mà mình vừa nhập thêm mún thay đổi state thì mình phải gọi tới thằng seter của nó , mình phải gọi setter color string nó replace cái của mình luôn , biến array thành string , gt nso sẽ replace nó gán bằng , cái mình mún outut là phải 1 cái mảng thêm cái yellow đằng cuối việc set hok đc quyền color.put nó ko thể thay đổi trực tiếp trong state, minh tạo ra array mới mình sẽ sao chép lại array cũ rồi mình phẩy đằng sau color mình sẽ ra được kết quả mình muốn 

//     // Bởi vì không được thay đổi trực tiếp state mà phải thông qua setter nên ta không thể dùng colors.push(color)
//     // Sử dụng spread operator để sao chép những giá trị hiện có của state và thêm một phần tử mới vào
//     // => Luôn tạo ra 1 array mới và thay đổi trên nó, sau đó đưa array mới này vào hàm setter
//     //có thể viết gộp lại môt bược kinh nghiệm khi viết array
//     //  setColors([...colors, color]);
 
//     const newColors = [...colors, color]
//     setColors(newColors);
//   };

//   return (
//     <div>
//       <h1>State</h1>
//       <p>Count: {count}</p>
//       <button onClick={() => setCount(count + 1)}>Increase</button>

//       <hr />

//       {isLoggedIn ? (
//         <div>
//           <h1>Welcome back!!!</h1>
//           <button onClick={() => setIsLoggedIn(false)}>Logout</button>
//         </div>
//       ) : (
//         <div>
//           <h1>Please Login!!!</h1>
//           <button onClick={() => setIsLoggedIn(true)}>Login</button>
//         </div>
//       )}

//       <hr />
//       <p>Colors: {colors.join(", ")}</p>
//       <button onClick={handleAddColor}>Add color</button>
//       <button onClick={handleRemoveColor}>Remove color</button>
//     </div>
//   );
// }

// export default State;

//XÓA 1 MÀU BẤT KỲ TRONG ARRAY THÊM HANDELREMOVE BUTTON GIẢM BỚT PHẦN TỬ LUÔN TẠO 1 ARRAY MỚI SAU ĐÓ MỚI ĐƯA ARRAY MỚI TRONG SETTER, dùng phương pháp filter, giữ item giá trị nào đó khác color, duyệt qua giá trị color, xóa thằng green duyetj qua từng phần tử red khác green false, duyệt tiếp từng mảng , nó truyền vào mảng mới rồi nó truyền lại phần setter

function State() {
  // useState nhận vào 1 tham số là giá trị khởi tạo và trả về một array gồm 2 phần tử
  // Phần tử 1: Giá trị của state
  // Phần tử 2: Hàm dùng để thay đổi giá trị của state
  // Lưu ý: Không được thay đổi trực tiếp giá trị của state, mà phải thông qua hàm setter
  const [count, setCount] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [colors, setColors] = useState(["red", "green", "blue"]);
  const handleAddColor = () => {
    const color = prompt("Input your color:"); // yellow
    // Output: ["red", "green", "blue", "yellow"]

    // Bởi vì không được thay đổi trực tiếp state mà phải thông qua setter nên ta không thể dùng colors.push(color)
    // Sử dụng spread operator để sao chép những giá trị hiện có của state và thêm một phần tử mới vào
    // => Luôn tạo ra 1 array mới và thay đổi trên nó, sau đó đưa array mới này vào hàm setter
    setColors([...colors, color]);
  };
  const handleRemoveColor = () => {
    const color = prompt("Input your color:");
    const newColors = colors.filter((item) => item !== color);
    setColors(newColors);
  };

  return (
    <div>
      <h1>State</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>

      <hr />

      {isLoggedIn ? (
        <div>
          <h1>Welcome back!!!</h1>
          <button onClick={() => setIsLoggedIn(false)}>Logout</button>
        </div>
      ) : (
        <div>
          <h1>Please Login!!!</h1>
          <button onClick={() => setIsLoggedIn(true)}>Login</button>
        </div>
      )}

      <hr />
      <p>Colors: {colors.join(", ")}</p>
      <button onClick={handleAddColor}>Add color</button>
      <button onClick={handleRemoveColor}>Remove color</button>
    </div>
  );
}

export default State;


//cập nhập dùng update vừa tạo ra mảng mởi vừa cập nhập , dùng map duyệt qua mảng ban đầu trả mảng ban đàu cùng kich thước, có quyền thay đổi 1 phần tử trong mảng , hok cần phải thay đổi hết 
// ví dụ const products = [ id 1 , name "sungsuung " id 2 name iphone, id 3 name oppo ]
//cấp nhập 2 và trả ra mảng mới 

//const newProducts = products.map(prodcut => {
//   if(product.id === 2) {
//     return {...product tương đương id:2 , name sang sung , namrL"oppo"} nó sẽ thay đổi giá trị cuối cùng , sử dung map kết hợp với if ben trong nó 
//     mấy thằng còn lại thì mình return product, no sẽ trả minh cho mảng mới 
//   }
// })
//nhiều file html mình dùng ...... 
//đa hình duyệt mảng gọi thằng đó ra , kế thừa thằng cha, trường hợp parcel npm i -D parcel start nhiều hơn file html nó nằm trong folder admin mún parcel chạy hết 3 file thay vi đề index.hml thì minh để * html nó sẽ chạy hét cho mình còn thằng build thì nó y chang start : parcel * .html, build :parcel build **.html, nên bỏ thằng main , bỏ đường link đó nó mới chạy ra ./about/about.html, nếu mún build nhiếu thì html nó gọi tới cho mình 
//biến một mảng thành chuỗi thì mình dùng join 
//hàm mình bật lên cho user nhập vào trả lại biến color prompt 






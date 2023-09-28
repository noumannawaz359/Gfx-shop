// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Login from "./login/login";
// import Layout from "./layout/layout";
// import Home from "./home/home";
// import Dash from "./dashboard/dash";
// import Contact from "./contact/contact";
// import NewProduct from "./home/newproduct";
// import User from "./users/user";
// import SingleUser from "./users/singleuser";
// import AddUser from "./users/adduser";
// import Display from "./product-details/display";
// import AddCart from "./addcart/addcart";
// import { getToken } from "./api/token";

// function App() {
//   const isAuthenticated = !!getToken();

//   return (
//     <div>
//       <Router>
//         <Layout>
//           <Routes>
//             <Route exact path="/" element={<Home />} />
//             <Route exact path="/newproduct" element={<NewProduct />} />
//             <Route exact path="/display/:id" element={<Display />} />
//             <Route exact path="/addcart" element={<AddCart />} />
//             {isAuthenticated ? (
//               <Route exact path="/dashboard" element={<Dash />} />
//             ) : (
//               <Route exact path="/login" element={<Login />} />
//             )}
//             <Route exact path="/contact" element={<Contact />} />
//             <Route exact path="/singleuser/:id" element={<SingleUser />} />
//             <Route exact path="/adduser" element={<AddUser />} />
//             <Route exact path="/users" element={<User />} />
//           </Routes>
//         </Layout>
//       </Router>
//     </div>
//   );
// }

// export default App;

import React from "react";
import Report from "./pages/report";

function App() {
  return (
    <div>
      <Report />
    </div>
  );
}

export default App;

// import * as React from "react"
// import Counter from "./components/counter.js"

// const App = () => {
//    return (
//       <div>
//          <Counter />
//       </div>
//    )
// }
// export default App




// import React from "react";
// // import "./App.css"
// import { MyComponent } from "./MyComponent"

// function App() {
//     return (
//         <div className="App">
//             <MyComponent />
//         </div>
//     )
// }
// export default App


// import React from "react";
// // import "./App.css"
// import { Muter } from "./MyComponent"

// const App = () => {
//     return (
//         <>
//             <Muter />
//         </>
//     )
// }
// export default App

// import  * as React from "react";
// // import "./App.css"
// // import HitungManual  from "./components/HitungManual"
// import HitungRender from "./componentsmateri/HitungRender"

// const App = () => {
//     return (
//         <>
//             <HitungRender/>
//         </>
//     )
// }
// export default App


// import React from "react";
// import {BrowserRouter as router,Route, Link} from "react-router-dom";
// import AboutMe from "./Component/AboutMe";
// import Contact from "./Component/Contact";
// import Main from "./Component/Main";
// import Footer from "./Component/Footer";


// function App() {
//     return (
//         <Router>

//             <nav>
//                 <ul>
//                     <li>
//                         <link to="./">Home</link>
//                     </li>
//                     <li>
//                         <link to="/contact">Contact</link>
//                     </li>
//                     <li>
//                         <link to="/about">AboutMe</link>
//                     </li>
//                 </ul>
//             </nav>
//             <Routes>

//                 <Route index element={<Main/>}/>
//                 <Route path="about" element={<AboutMe/>}/>
//                 <Route path="contact" element={<Contact/>}/>
//             </Routes>
//         </Router>
//     );
// }


// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Home from './Component/home';
// import Destinasi from './Component/destinasi';
// import Header from './Component/header';
// import Footer from './Component/Footer';
// import detaildestinasi from './Component/detaildestinasi'

// function App() {
//   return (
//     <Router>
//       <Switch>
//         <Route path="/" exact component={Home} />
//         <Route path="/destinasi" component={Destinasi} />
//       </Switch>
//     </Router>
//   );
// }

// export default App;


import React from 'react';
import './boxmodel/app.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Selamat Datang Di Gaspol Travel</h1>
      </header>
      <main>
        <section>
          <h2>Destinasi Populer</h2>
          {/* Tambahkan komponen destinasi populer di sini */}
        </section>
        <section>
          <h2>Paket Liburan</h2>
          {/* Tambahkan komponen paket liburan di sini */}
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Travel App</p>
      </footer>
    </div>
  );
}

export default App;



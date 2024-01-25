// import './boxmodel/style.css'

// function App() {
//   return (
//     <div className="App">
//       <div className="container">

//       </div>
//       <div className="App"></div>
//       <div className="container "></div>

      

      
//     </div>
//   );
// }

// export default App;

// import React from "react"
// import Navbar from './Navbar.jsx'
// {/* <nav></nav> */}

// function Tes() {
//   return (
//      <div>
//         <Navbar />
//      </div>
//   )
// }

// export default Tes

// import React from "react";
// class App extends React.Component{
//    render() {
//       return (
//          <div>
//             <Pertama/>
//             <Kedua />
//          </div>
//       )
//    }
// }


//CONTOH MEMBUAT COMPONENT DENGAN CLASS
//NAMA COMPONENT HARUS DIAWALI UpperCase, jika tidak akan muncul error:
//Property 'pertama' does not exist on type 'JSX.IntrinsicElements'.

// class Pertama extends React.Component {
//    render() {
//       return (
//          <div>
//             <h1>Component Ke 1</h1>
//          </div>

//       )
      
//    }
// }



//


// import React from "react";
// class App extends React.Component{
//    render() {
//       return (
//          <div>
//             <pertama/>
//             <kedua />
//          </div>
//       )
//    }
// }

//CONTOH MEMBUAT COMPONENT DENGAN CLASS
//NAMA COMPONENT HARUS DIAWALI UpperCase, jika tidak akan muncul error:
//Property 'pertama' does not exist on type 'JSX.IntrinsicElements'.

// import React from "react";
// class App extends React.Component{
//    render() {
//       return (
//          <div>
//            <h1>Component ke 1</h1>
            
//          </div>
//       )
//    }
// }

//CONTOH MEMBUAT COMPONENT DENGAN FUNCTION
// function Kedua () {
//    return (
//       <div>
//          <h2>yeah..</h2>
//          <p>Ini komponen kedua</p>
//       </div>
//    )
// }

// export default App

//
// 


// import React from "react";
// import { StudentName } from "./Studentname"
// import {List} from "./list"

// const allStudents = {
//    data: [{name: "Nur Ahmad Messi"}, {name:"abdul khadir"}, {name: "Ahmad Ronaldo"}, {name: "Neymar bin Wahid saad"}]
// }

// function App() {
//    return (
//       <div className="container">
//          <StudentName />
//          <ul>
//             {allStudents.data.map(item => (
//                <List data={item} />
//             ))}
//          </ul>
//       </div>
//    )
// }

// import { FormatDate } from "./FormatDate"
// import { Message } from "./Message"
// import { MessageWithChildren } from "./MessageWithChildren"

// function App() {
//     return (
//         <div className="App">
//             <FormatDate date={new Date ()} />
//             <Message text="The from has been submited!" important={false} />
//             <MessageWithChildren important={false}>
//                 <b>The from has been submited!</b>
//                 <i>Your request will</i>
//             </MessageWithChildren>
//         </div>
        
//     )
// }
// export default App
// import * as React from "react"
// import Header from "./Header.js"

// const App = () => {
//    return (
//       <>
//          <Header/>      
//       </>
//    )
// }
// export default App


// import * as React from "react"
// import Counter from "./counter"

// const App = () => {
//    return (
//       <div>
//          <Counter />
//       </div>
//    )
// }
// export default App
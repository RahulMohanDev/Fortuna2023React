import React from 'react'
import AdminComponent from './components/admin/admin.component'

// function SayHi({ name }) {
//   return <h1 className="pink potato">Hi {name}</h1>
// }

// function SayHiAdmin({ name }) {
//   return <h1 className="pink potato">Hi admin,{name}</h1>
// }

// function App() {
//   // const [currentState,setState] = React.useState("rahul");
//   // let bulb = false;
//   // let setBulb = () => {};
//   // if(currentState === "rahul"){
//   //   const arry = React.useState(false);
//   //   bulb = arry[0];
//   //   setBulb = arry[1];
//   // }
//   // const [bubl2,setBulb2] = React.useState(false);
//   // return (
//   //   <div>
//   //     <SayHi name={currentState}></SayHi>
//   //     <button onClick={()=>{
//   //     setState("rohan");
//   //     setBulb(true);
//   //     }}>change to rohan</button>
//   //     <button onClick={()=>{setState("rahul")}}>
//   //       CHANGE TO RAHUL
//   //     </button>
//   //   </div>
//   // );
//   // api  admin = true;
//   // const admin = false;
//   // const NormalUserComponent = <SayHi name="rahul"></SayHi>;
//   // console.dir(NormalUserComponent);
//   // const AdminUserComponent = <SayHiAdmin name="rohan"></SayHiAdmin>;
//   // if(admin){
//   //   return AdminUserComponent;
//   // }else {
//   //   return NormalUserComponent;
//   // }

// }

// function AdminUserComponent(){
//   return <h1>Hi admin</h1>
// }

// function NormalUserComponent(){
//   return <h1>Hi normal user</h1>
// }

// function HomePage({admin}){
// if(admin) {
//   return <AdminUserComponent></AdminUserComponent>
// }else {
//   return <NormalUserComponent></NormalUserComponent>
// }
// }

// function App(){
//  const admin = true;
//  return(<HomePage admin={admin}></HomePage>);
// }

// list example
// function App() {
//   // api call for amazon
//   const amazonItems = [
//     { itemName: 'mobile', itemID: 4343 },
//     { itemName: 'laptop', itemId: 23 },
//     { itemName: 'test123', itemID: 44 },
//   ]
//   return (
//     <div>
//       <ol>
//         {amazonItems.map((item, index) => {
//           return <li key={item.itemID}>{item.itemName}</li>
//         })}
//       </ol>
//     </div>
//   )
// }

// function abc({name}) {

// }

// abc({name:"rahul"});

function App() {
return (<AdminComponent></AdminComponent>)
}

export default App

// <HomePage admin={true}></HomePage>
//=><adminUserComponent></adminUserComponent>

// <HomePage admin={false}></HomePage>
//=><NormalUserComponent></NormalUserComponent>

// <School></School>
// school management system
// admin =>
// teacher =>
// student =>
// parent =>

// React.createElement("div", null,
// React.createElement("div", null, "hi"),
// React.createElement("div", null, "bye"));

// React.createElement("div", null,
// React.createElement("div", null, "bye"),
// React.createElement("div", null, "bye"));

// React.createElement(type,props,...children);

// React.createElement("div", null, [
// React.createElement("div", null, "hi"),
// React.createElement("div", null, "bye")]);

// React.createElement(type,props,[array of children]);

// const arr = [{obj:{}},{},{},{},5,6,7,8,9,10];
// const arr2 = [{test:{}},2,3,4,5,6,7,8,9,10];
// if(arr2===arr){
//   console.log("equal")
// }else {
//   console.log("not equal")
// }

// [{type:div,props:null,children:train},
//   {type:div,props:null,children:gun}]

// [
//   {type:div,props:null,children:potato},
//   {type:div,props:null,children:gun}
// ]

import logo from './logo.svg';
import './App.css';

function App() {
  //Khai bao ham Chao1 nhận 1 tham số năme, in ra lời chào
  //tên đó ở console
  let chao1=({name})=>{
    console.log(`Xin chào ${name}`);
}//gọi hàm tên
chao1({name:"Tuyết"});
// viết hàm chao2 nhận 1 tham số là 1 đối tượng person
//khai báo 1 đối tuọng person có các thuộc tính id,name,age,address
let person={
    id:1,
    name:"Tuyết",
    age:19,
    address:"Quảng Ngãi"
}
//in thông tin của đối tượng person ra the Card trong React
  return (
   <>
   <h1>Xin chào mọi người</h1>
   <h2>Xin chào Tuyết</h2>
   <h3>Xin chào Tuyết, bạn 19 tuổi, sống tại Quảng Ngãi</h3>
   <button onClick={()=>chao1({name:"Tuyết"})}>Chào 1</button>
   <div className="card">
    <h2>{person.name}</h2>
    <p>Tuổi: {person.age}</p>
    <p>Địa chỉ: {person.address}</p>
    
   </div>
   </>  
  );
}

export default App;

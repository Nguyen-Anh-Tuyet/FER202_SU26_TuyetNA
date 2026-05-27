let tong =(a,b)=>{
    return a+b;
}
//gọi hàm tổng
console.log(tong(5,10));

let chao =()=>{
    console.log("Xin chào mọi người");
}
//gọi hàm chào
chao();
let chao1=({name})=>{
    console.log(`Xin chào ${name}`);
}//gọi hàm tên
chao1({name:"Tuyết"});
// viết hàm chao2 nhận 1 tham số là 1 đối tượng person
//có các thuộc tính id,name,age,address
//sau đó in ra lời chào với tên của đối tượng đó
//gọi hàm chao2 với 1 đối tượng person mẫu
let chao2=({id,name,age,address})=>
    {
    console.log(`Xin chào ${name}, bạn ${age} tuổi, sống tại ${address}`);
    }
chao2({id:1,name:"Tuyết",age:19,address:"Quảng Ngãi"});
let person={
    id:1,
    name:"Tuyết",   
    age:19,
    address:"Quảng Ngãi"
}
let chao3=(person)=> 
    {
    console.log(`Xin chào ${person.name}, bạn ${person.age} tuổi, sống tại ${person.address}`);
}
chao3(person);
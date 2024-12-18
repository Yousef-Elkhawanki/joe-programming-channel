import React from "react";
import UserList from "./UserList";
import ProductsList from "./ProductsList";
import Box from "./Box";

export default function App() {
    let x = 10; //==> State
    let myName = " joe";
    let obj = {
        name: "joe",
        age: 27,
    };
    let arr = [
        { id: 1, name: "joe" },
        { id: 2, name: "ali" },
        { id: 3, name: "shahin" },
    ];
    let products_data = [
        { id: 1, title: "laptop" },
        { id: 2, title: "Apple" },
        { id: 3, title: "watch" },
    ];
  const themeStyle = {
      color: "#1d1d1d",
      background: "#fff",
      padding: "2em",
      borderRadius: "2em",
  };
    return (
        <div>
            <h1>What is State ?</h1>
            <p>X Result is : {x}</p>
            <p>my name is :{myName}</p>
            <ul>
          <li style={{color:"red" ,fontSize:"30px" ,listStyle:"square"}}>my name is : {obj.name}</li>
                <li style={themeStyle}>my age is : {obj.age}</li>
            </ul>
            <ul>
                {arr.map((ele, index) => (
                    <UserList key={ele.id} user_name={ele.name} />
                ))}
            </ul>
            <ul>
                {products_data.map((ele) => (
                    <Box key={ele.id} auth>
                        <ProductsList product_name={ele.title}  />
                    </Box>
                ))}
            </ul>
        </div>
    );
}

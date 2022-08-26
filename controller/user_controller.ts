interface User {
  account: string,
  password: string,
  userName: string,
  birthday: Date
}

let account: string = "";
let password: string = "";
let userName: string = "";
let birthday: Date = new Date();

//Array
let colors: string[] = ['red', 'green', 'blue']
let numberarray: number[] = [1, 2, 3]

//Object literal
let user: {
  account: string,
  password: string,
  userName: string,
  birthday: Date
} = {
  account: "",
  password: "",
  userName: "",
  birthday: new Date()
};

//Function
const logNumber: (i: number) => void = (i:number) => {
  console.log(i);
}
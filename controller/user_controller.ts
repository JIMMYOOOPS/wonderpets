interface User {
  account: string;
  password: string;
  userName: string;
  birthday: Date;
}

// let account: string = '';
// let password: string = '';
// let userName: string = '';
// let birthday: Date = new Date();

//Array
let colors: string[] = ['red', 'green', 'blue'];
let numberarray: number[] = [1, 2, 3];

//Object literal
let user: User =
  // {
  //   account: string;
  //   password: string;
  //   userName: string;
  //   birthday: Date;
  // }
  {
    account: '',
    password: '',
    userName: '',
    birthday: new Date(),
  };

//Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

const adding = (a: number, b: number): number => {
  return a + b;
};

const subtract = (a: number, b: number): number => {
  return a - b;
};

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};

const { account, password }: { account: string; password: string } = user;

// string
let myName: string = 'atguigu'; // 普通字符串
let sayHi: string = `你好, 我的名字是 ${myName}。`; // 模板字符串
// myName = 2015  // error

// number
let binary: number = 0b1010; // 二进制
let octal: number = 0o744; // 八进制
let decimal: number = 10; // 十进制
let hex:number = 0xf00d; // 十六进制
let infinity:number = Infinity; // 无穷
// decimal = 'ts' // error

// boolean
let done: boolean = false; // true、false是布尔值
done = true
// done = 1 // error

// undefined
let u: undefined = undefined; // 给变量u这一undefined类型赋值undefined一般没有实际意义

// null
let n: null = null; // 给变量n这一null类型赋值null一般没有实际意义

// symbol
let s: symbol = Symbol('abc')

// bigint
let b: bigint = 2n

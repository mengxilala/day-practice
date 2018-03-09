// util.inherits是一个实现对象间原型继承的函数。
var util=require('util');
function Base(){
    this.name='base';
    this.base=1991;
    this.sayHello=function(){
        console.log('Hello'+this.name);
    };
}

Base.prototype.showName=function(){
    console.log(this.name);
};

function Sub(){
    this.name='sub';
}

util.inherits(Sub,Base);
var objBase=new Base();
objBase.showName();  //base
objBase.sayHello();  //Hello base 
console.log(objBase); //{ name: 'base', base: 1991, sayHello: [Function] } 

var objSub=new Sub();
objSub.showName();   //sub
// objSub.sayHello(); 
console.log(objSub); //{ name: 'sub' }
// 我们定义了一个基础对象Base 和一个继承自Base 的Sub，
// Base 有三个在构造函数 内定义的属性和一个原型中定义的函数，通过util.inherits 实现继承

// Sub 仅仅继承了Base 在原型中定义的函数，而构造函数内部创造的 base 属 性和 sayHello 函数都没有被 Sub 继承。
/* 
COMMMENT COLOR SCHEMES || SHIFT + OPTION + A (ON MAC) || SHIFT + ALT + A (Windows)

! Alert
? Question
& My Function
^ Some Stuff
* Highlight
~ arrow functions
TODO Colourful

*/

// ^ Question 1 - Run it using Live Server and debug it you will see clousre, and this working.

// ? https://trekinbami.medium.com/using-react-memo-and-memoization-1970eb1ed128

/* let user={
    age:8,
    tis:this,
    inc:function (){
         console.log("inc",this);
         console.log("tis",this.tis)
         this.age++;
    }
}

setTimeout(()=>{
  console.log("inside setTimeOut",this)
  user.inc();
},6000)

console.log("pointor reaches to the end")
 */



// ^  Question 2 

/* let user={
    age:8,
    tis:this,
    inc:function (){
         console.log("inc",this);
         console.log("tis",this.tis)
         this.inc++;
    }
}

setTimeout(function(){
  console.log("inside setTimeOut",this)
  user.inc();
},6000)

console.log("pointor reaches to the end")
 */



// ^  TODO Question 3

/* let user={
    age:8,
    add:function(){
        console.log("add",this);
        
        let yy=()=>{
            console.log("yy",this); 
            let rr = () => {
                console.log("rr",this); 
                            
            }
            rr();
        }
        yy();
    }
}

setTimeout(function(){
    console.log("inside setTimeOut",this)
    user.add();
  },6000)
  
console.log("pointor reaches to the end") 
 */



// ^  Question 4
/* 
let user={
    age:8,
    add:()=>{
        console.log("add",this);
        
        let yy=()=>{
            console.log("yy",this); 
            let rr = () => {
                console.log("rr",this); 
                            
            }
            rr();
        }
        yy();
    }
}

setTimeout(function(){
    console.log("inside setTimeOut",this)
    user.add();
  },6000)
  
console.log("pointor reaches to the end")
*/



// ^  Question 5
/* 
function tt(){
let user={
    age:8,
    add:()=>{
        console.log("add",this);
        
        let yy=()=>{
            console.log("yy",this); 
            let rr = () => {
                console.log("rr",this); 
                            
            }
            rr();
        }
        yy();
    }
}
user.add();
}

tt();
  
 */


// ^  Question 6
/* 
function u() {
    let user = {
        first:{
        r: ()=> {
            function A() {
                console.log("A", this);
            }

            console.log("B",this);
            A(); 
            // Calling A() directly
            // Calling A() using "this"
        }
    }}
    return user;
}
 
u().first.r();
 */



// ^  Question 7

/* let yet=()=>{
    let a={
        r:8,
        t:this,
    }
    
    console.log(a.t);
}
yet();
 */





// ^  Question 8

/* let awe={
    u:function tt(){
        let user={
            age:8,
            add:()=>{
                console.log("add",this);
            }
        }
        user.add();
    }
}
    
awe.u() */




// ^  Question 9

let user={
    yy:function(){
        console.log("yy",this); 
        let rr = function(){
            console.log("rr",this); 
                       
        }
        rr();
    }
}
 
user.yy();

//^ Question 10
/* 
function foo(){
	var a =2 ;
	this.bar();
}

function bar (){
	console.log(this.a);
}

foo();   //undefined
 */

//^Question 11
/* 
function foo(){
	console.log(this.a);
}

var obj = {
	a:2,
	foo:foo
};

obj.foo();  // 2 
     */


//^ Question 12

/* 
var john = {
	name: 'John',
	greet: function(person) {
      console.log("Hi " + person +", my name is " + this.name);
	}
}

john.greet("Mark");  // Hi Mark, my name is John

var fx = john.greet;
fx("Mark");   // Hi Mark, my name is  
 */
    



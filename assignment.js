//html content change
function java1(){
    document.getElementById("demo1").innerHTML="this is javascript change element"
        
    }


    //html attribute change

    //on light
    function java2() {
    document.getElementById("demo2").src="https://cdn1.vectorstock.com/i/1000x1000/05/10/3d-realistic-turning-on-light-bulb-icon-vector-28050510.jpg"
        
    }
    //off light
    function java3() {
        document.getElementById("demo2").src="https://media.istockphoto.com/id/502789173/photo/light-bulb-concept.jpg?s=612x612&w=0&k=20&c=vJfSDuFJf_4UsQcUsdMNUfDkkNU6Bf9cTHF-n4-Zwvs="
    }

    // style change 
    function java4() {
        document.getElementById("demon").style.display="none";
    }

    function java5() {
        document.getElementById("demon").style.display="block";
        document.getElementById("demon").src="https://i.pinimg.com/1200x/5b/22/b3/5b22b391614efb0b9cda7125bb741873.jpg";

    }

    function java6() {
        document.getElementById("demon").src="https://i.pinimg.com/originals/3f/30/6a/3f306ac1cb9b3e74f705ab191cc09821.jpg";
    }

    //document.write 

        document.write(12+3);
        
        document.write("this is a document write output")


        // function create
function new1() {
    console.log("this is a function");
}
new1()


// function parameter
function new2(name1,name2) {
    console.log(name1 +" is playing");
}

new2("lillu")
new2("kullu")
new2("vullu")


//multiple perameter

// function parameter
function new3(name3,name4,name5) {
    console.log(name3+" ,"+name4 +" ,"+name5+ "  are playing");
}

new3("lillu","hrikku","sikku")

 


// Function Return
function newfunction(a,b) {
 return(a*b);
}
var y=newfunction(4,3)

console.log(y);


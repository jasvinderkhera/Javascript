
// 51. Write a program to generate following output:-
// 5
// 5 4
// 5 4 3
// 5 4 3 2
// 5 4 3 2 1

// for(i = 5; i >=1; i--){
//     let res = ""
//     for(j = 5; j>=i; j--){
//         res = res + j
//     }
//     console.log(res)
// }


//---------------------------------------------------------------------------


// 52. Write a program to generate following output:-
// 1
// 1 0
// 1 0 1
// 1 0 1 0
// 1 0 1 0 1

// for(i=1; i<=5; i++){
//     let res = ""
//     for(j=1; j<=i; j++){
//         if(j%2 === 0){
//             res = res + "0"
//         }
//         else{
//             res = res + "1"
//         }
//     }
//     console.log(res)
// }


//---------------------------------------------------------------------------

// 54. Write a program to generate following output:-
// A B C D E
// A B C D
// A B C
// A B
// A

// for(i = 1; i <=5; i++){
//     let res = ""
//     let a = 65;
//     for(j = 5; j>=i; j--){
//         let char = String.fromCharCode(a)
//         res = res + char
//         a++
//     }
//     console.log(res)
// }


//----------------------------------------------------------------------




// 56. Write a program to generate following output:-
// 1 1 1 1 1 
// 2 2 2 2 
// 3 3 3 
// 4 4 
// 5



// for(i = 1; i <=5; i++){
//     let res = ""
//     for(j = 5; j>=i; j--){
//         res = res + i
       
//     }
//     console.log(res)
// }




//----------------------------------------------------------------------



// 57. Write a program to generate following output:-
// 5 5 5 5 5 
// 5 5 5 5 
// 5 5 5 
// 5 5 
// 5

// for(i = 1; i <=5; i++){
//     let res = ""
//     for(j = 5; j>=i; j--){
//         res = res + 5

//     }
//     console.log(res)
// }



//---------------------------------------------------------------------


// 59. Write a program to generate following output:-
// 5 5 5 5 5 
// 4 4 4 4 
// 3 3 3 
// 2 2 
// 1


// for(i = 5; i >=1; i--){
//     let res = ""
//     for(j = 1; j<=i; j++){
//         res = res + i
//     }
//     console.log(res)
// }



//-----------------------------------------------------------------------------



// 60. Write a program to generate following output:-
// 1  
// 2  4  
// 3  6  9  
// 4  8  12  16  
// 5  10  15  20  25  
// 6  12  18  24  30  36  
// 7  14  21  28  35  42  49  
// 8  16  24  32  40  48  56  64

// for(i = 1; i<=8; i++){
//     let res = ""
//     for(j = 1; j<=i; j++){
//         res = res + i*j + " "
//     }
//     console.log(res)
    
// }
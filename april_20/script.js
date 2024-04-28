// 63. Write a program to generate following output:-
// 1
// 2 1
// 3 2 1
// 4 3 2 1
// 5 4 3 2 1

// for(i = 1; i<=5; i++){
//     let res = ""
//     for(j = 1; j<= i; j++){
//         res = j + res
//     }
//     console.log(res)
// }

//-----------------------------------------------------------------------------------------

// 64. Write a program to generate following output:-
// 1 3 5 7 9
// 1 3 5 7
// 1 3 5
// 1 3
// 1

// for(i = 5; i>=1; i--){
//     let res = ""
//     for(j = 1; j<=i*2-1; j+=2){
//         res = res + j
        
//     }
//     console.log(res)
// }

//-----------------------------------------------------------------------------------------

// 66. Write a program to generate following output:-
// 1       2       3       4       5
// 2       4       6       8       10
// 3       6       9       12      15
// 4       8       12      16      20
// 5       10      15      20      25
// 6       12      18      24      30
// 7       14      21      28      35
// 8       16      24      32      40
// 9       18      27      36      45
// 10      20      30      40      50



// for(i = 1; i<= 10; i++){
//     let res = " "
//     for(j = 1; j<=5; j++){
//         res = res + j*i
//     }
//     console.log(res)
// }

//------------------------------------------------------------------------------------------

// 67. Write a program to generate following output:-
// 9
// 9 7
// 9 7 5
// 9 7 5 3
// 9 7 5 3 1


// for(i = 5; i>=1; i--){
//     let res = ""
//     for(j = 9; j>=i*2-1; j-=2){
//         res = res + " " + j
//     }
//     console.log(res)
// }

//------------------------------------------------------------------------------------------


// 68. Write a program to generate following output:-
// 9
// 7 9
// 5 7 9
// 3 5 7 9
// 1 3 5 7 9

// for(i = 5; i>=1; i--){
//     let res = ""
//     for(j = 9; j>=i*2-1; j-=2){
//         res = j + res
//     }
//     console.log(res)
// }

//-------------------------------------------------------------------------------------------


// 70. Write a program to generate following output:-
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1

// for(i = 1; i<=5; i++){
//     let res = ""
//     for(j = 1; j<=i; j++){
//         res = res + j
//     }
//     console.log(res)
// }
// for(i=4; i>=1; i--){
//         let result = ""
//         for(j=1; j<=i; j++){
//             result = result + j
//         }
//         console.log(result)
//     }

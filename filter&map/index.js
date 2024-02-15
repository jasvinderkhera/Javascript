const library = [
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', pages: 180 },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', pages: 281 },
    { title: '1984', author: 'George Orwell', pages: 328 },
    { title: 'Pride and Prejudice', author: 'Jane Austen', pages: 279 },
    { title: 'The Catcher in the Rye', author: 'J.D. Salinger', pages: 224 },
    { title: 'Animal Farm', author: 'George Orwell', pages: 112 }
  ];


// Filter for authors

 let keyofArr = library.filter(function (writer){
    return writer.author == 'George Orwell'
 });
 console.log("Filtered Data:",keyofArr)


 //Map for titles

 let bookTitle = library.map(function (titles){
    return titles.title
 })
console.log("Title of Books:",bookTitle)


// Filter all even numbers

let nums = [12, 23, 10, 7, 5, 3, 18, 9]

let oddnum = nums.filter(function(num){
    return num % 2 != 0;
})
console.log("Odd numbers:",oddnum)


// Map Number Square 

let numbers = [3,5,7,8,9,12]
let square = numbers.map(function(numb){
    return numb*numb;
})
console.log("Square of Numbers:",square)

//Map Length of Words

let words = ['apple', 'banana', 'cherry', 'pineapple']
let lengthofwords = words.map(function(word){
    return {[word]:word.length};
})
console.log("length:", lengthofwords)


// Filter products cheaper than 50

let products = [
    {product:"pen", price: 60},
    {product: "pencil", price: 20},
    {product: "pages", price: 40},
    {product: "notebook", price: 80},
    {product: "notepad", price: 45}
]

let filteredProducts = products.filter(function(item){
    return item.price < 50;
})
console.log("Products with price less than 50:",filteredProducts)

//Filter to find names starting with "A"

let names = ['Ankit', 'Sumit', 'Mohit', 'Suresh', 'Ayesha', 'Aakash']
let namesWitha = names.filter(function (nam){
    return nam.charAt(0) == 'A';
})
console.log("Names with starting letter a:", namesWitha)

 
function maximum(a,b,c){
    switch (true) {
        case (a>b && a>c):
            console.log(a, " is greater")
            break;
        case (b>a && b>c):
            console.log(b, " is greater")
            break;
        case (c>a && c>b):
            console.log(c, " is greater")
            break;
    
        default:
            break;
    }
}
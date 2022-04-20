export const my_sum = (a , b) =>{
if (a == null || b == null){
    a = 0
    b = 0
    return a+b
}

if (typeof a != "number" || typeof b != "number"){
    a = 0
    b = 0
    return a+b
}
return a+b
}
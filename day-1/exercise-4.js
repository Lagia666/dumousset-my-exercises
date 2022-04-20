export const my_size_alpha = (str) => {
    let cmp = 1;
    if(typeof str == "string"){

        while( str[cmp]){
            cmp ++;
        }
        return cmp;
    }
    else {
        return 0;
    }
}
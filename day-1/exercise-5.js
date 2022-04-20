import { my_size_alpha } from "./exercise-4.js";

export const my_array_alpha = (str) => {
    let taille = my_size_alpha(str)
    let array = []
    for (let j=0; j<taille; j++ ){
        array[j] = str[j]
    }
    return array
}

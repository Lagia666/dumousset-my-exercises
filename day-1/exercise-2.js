import { my_display_alpha } from "./exercise-1.js"

export const my_display_alpha_reverse = () => {
    let alpha_rev = ""
    for (let i = 25; i>=0 ; i--) {
        let alpha_reverse = my_display_alpha()
        alpha_rev += alpha_reverse[i]
      }
    return alpha_rev
} 
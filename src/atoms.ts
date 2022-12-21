import {atom} from "recoil";

export const isDarkAtom = atom({
    key:"isDark", //should be unique
    default: true,
})

export const locales = ["hy", "ru"]

export const languages = [
    {
        code: "hy",
        path: "/am",
        name: "Հայերեն",
    },
    // {
    //     code: "en",
    //     path: "/en",
    //     name: "Eng",
    // },
    {
        code: "ru",
        path: "/ru",
        name: "Русский",
    }
];

export const colorPalette = [
    "#38442f",
    "#708059",
    "#b6bfa1",
    "#d0d7b7",
    "#5a3924",
    "#996e50",
    "#caa787",
    "#ead9c4",
    "#f3e0d5",
    "#debfae",
];


import church from "../assets/icons/church.png";
// import drinks from "../assets/icons/drinks.png";
import registration from "../assets/icons/registration.png";
import banquet from "../assets/icons/banquet.png";
import cake from "../assets/icons/cake.png";
// import dj from "../assets/icons/dj.png";

export const agenda = [
    // {
    //     id: 1,
    //     icon: drinks,
    //     title: "bride_house",
    //     time: "bride_time",
    //     place: "bride_place"
    // },
    {
        id: 2,
        icon: church,
        title: "ceremony",
        time: "church_time",
        place: "church_location"
    },
    {
        id: 3,
        icon: banquet,
        title: "banquet",
        time: "banquet_time",
        place: "voskevas"
    },
    {
        id: 4,
        icon: registration,
        title: "registration",
        time: "registration_time",
        place: "voskevas"
    },
    {
        id: 5,
        icon: cake,
        title: "cake",
        time: "cake_time",
        place: "voskevas"
    },
    // {
    //     id: 6,
    //     icon: dj,
    //     title: "dj",
    //     time: "dj_time",
    //     place: "voskevas"
    // },
]


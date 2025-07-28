import date from "../../assets/imgs/date.png";
import church from "../../assets/imgs/church.png";
import venue from "../../assets/imgs/venue.png";
// import contact from "../../assets/imgs/contact.png";

export const data = [
    {
        id: 1,
        name: "date",
        img: date,
        text1: "wedding_date",
        text2: "",
    },
    // {
    //     id: 1,
    //     name: "bride_house",
    //     img: venue,
    //     text1: "bride_time",
    //     // text2: "",
    //     map: "location",
    //     redirect: "https://yandex.com/navi/?ol=geo&text=Tichina%20Street%201st%20Blind%20Alley,%2021&sll=44.461720,40.182169&sspn=0.006298,0.008211"
    // },
    {
        id: 2,
        name: "church",
        img: church,
        text1: "church_time",
        // text2: "church_name",
        map: "church_location",
        redirect: "https://yandex.com/maps/-/CHHenNZA"
    },
    {
        id: 3,
        name: "venue",
        img: venue,
        text1: "venue_time",
        // text2: "voskevas",
        map: "voskevas",
        redirect: "https://yandex.com/maps/-/CHHenX-Z"
    },
    // {
    //     id: 4,
    //     name: "contact",
    //     img: contact,
    //     phones: [
    //         {
    //             who: "men",
    //             tel: "+374 43 04 18 84"
    //         },
    //         {
    //             who: "women",
    //             tel: "+374 33 03 85 88"
    //         },
    //     ]
    // },
]
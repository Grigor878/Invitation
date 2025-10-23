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
        redirect: "https://yandex.com/maps/10262/yerevan/?ll=44.489176%2C40.214013&mode=poi&poi%5Bpoint%5D=44.488722%2C40.213991&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D72773735771&z=18.15"
    },
    {
        id: 3,
        name: "venue",
        img: venue,
        text1: "venue_time",
        // text2: "voskevas",
        map: "voskevas",
        redirect: "https://yandex.com/maps/org/230443572259/?ll=44.587259%2C40.193110&z=17.14"
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
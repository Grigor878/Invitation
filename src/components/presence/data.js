import date from "../../assets/imgs/date.png";
import church from "../../assets/imgs/church.png";
import venue from "../../assets/imgs/venue.png";
import contact from "../../assets/imgs/contact.png";

export const data = [
    {
        id: 1,
        name: "date",
        img: date,
        text1: "wedding_date",
        text2: ""
    },
    {
        id: 2,
        name: "church",
        img: church,
        text1: "church_time",
        text2: "church_name",
        map: "church_location",
        redirect: "https://maps.app.goo.gl/MAHqYFcR84YS2weW7"
    },
    {
        id: 3,
        name: "venue",
        img: venue,
        text1: "venue_time",
        text2: "voskevas",
        map: "venue_name",
        redirect: "https://maps.app.goo.gl/JPws6Ggnv8C2kkkt7"
    },
    {
        id: 4,
        name: "contact",
        img: contact,
        phones: [
            {
                who: "men",
                tel: "+374 99 725045"
            },
            {
                who: "women",
                tel: "+374 98 960339"
            },
        ]
    },
]
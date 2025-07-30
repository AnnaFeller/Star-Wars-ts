export const navItems = ['Home', 'About me', 'Star Wars', 'Contact' ];
// можно доьавить пункт меню
export const openingCrawl = ' It is a period of civil war.\n' +
    '                Rebel spaceships, striking\n' +
    '                from a hidden base, have won\n' +
    '                their first victory against\n' +
    '                the evil Galactic Empire.\n' +
    '\n' +
    '                During the battle, Rebel\n' +
    '                spies managed to steal secret\n' +
    '                plans to the Empire\'s\n' +
    '                ultimate weapon, the DEATH\n' +
    '                STAR, an armored space\n' +
    '                station with enough power\n' +
    '                to destroy an entire planet.\n' +
    '\n' +
    '                Pursued by the Empire\'s\n' +
    '                sinister agents, Princess\n' +
    '                Leia races home aboard her\n' +
    '                starship, custodian of the\n' +
    '                stolen plans that can save her\n' +
    '                people and restore\n' +
    '                freedom to the galaxy....'

import friend0 from '../assets/main.jpg'
import friend1 from '../assets/friend1.jpg';
import friend2 from '../assets/friend2.jpg';
import friend3 from '../assets/friend3.jpg';
import friend4 from '../assets/friend4.jpg';
import friend5 from '../assets/friend5.jpg';
import friend6 from '../assets/friend6.jpg';
import friend7 from '../assets/friend7.jpg';
import friend8 from '../assets/friend8.jpg';
import friend9 from '../assets/friend9.jpg';
export const friends = [{src:friend1},{src:friend2},{src:friend3},{src:friend4},{src:friend5},{src:friend6},{src:friend7 ,  extraClass: 'bottomLeft'},{src:friend8},{src:friend9, extraClass: 'bottomRight'}]

export const  starWarsInfo= 'Star Wars is an American epic space opera media franchise created by George Lucas, which began with the eponymous 1977 film[a] and quickly became a worldwide pop culture phenomenon. The franchise has been expanded into various films and other media, including television series, video games, novels, comic books, theme park attractions, and themed areas, comprising an all-encompassing fictional universe.[b] Star Wars is one of the highest-grossing media franchises of all time.\n' +
    '\n' +
    'The original 1977 film, retroactively subtitled Episode IV: A New Hope, was followed by the sequels Episode V: The Empire Strikes Back (1980) and Episode VI: Return of the Jedi (1983), forming the original Star Wars trilogy. Lucas later returned to the series to write and direct a prequel trilogy, consisting of Episode I: The Phantom Menace (1999), Episode II: Attack of the Clones (2002), and Episode III: Revenge of the Sith (2005). In 2012, Lucas sold his production company to Disney, relinquishing his ownership of the franchise. This led to a sequel trilogy, consisting of Episode VII: The Force Awakens (2015), Episode VIII: The Last Jedi (2017), and Episode IX: The Rise of Skywalker (2019).'

export const base_url = `https://sw-info-api.herokuapp.com`
export const version = '/v1'
export const characters = {
    luke: {
        name: "Luke Skywalker",
        img: friend0,
        url: `${base_url + version}/peoples/1`
    },
    c3po: {
        name: "C-3PO",
        img: friend2,
        url: `${base_url + version}/peoples/2`
    },
    r2d2: {
        name: "R2-D2",
        img: friend1,
        url: `${base_url + version}/peoples/3`
    },
    leia: {
        name: "Leia Organa",
        img: friend6,
        url: `${base_url + version}/peoples/5`
    },
    obi_wan: {
        name: "Obi-Wan Kenobi",
        img: friend8,
        url: `${base_url + version}/peoples/10`
    },
    chewbacca: {
        name: "Chewbacca",
        img: friend4,
        url: `${base_url + version}/peoples/13`
    },
    han_solo: {
        name: "Han Solo",
        img: friend5,
        url: `${base_url + version}/peoples/14`
    },
    yoda: {
        name: "Yoda",
        img: friend9,
        url: `${base_url + version}/peoples/0`
    },
    ewok: {
        name: "Wicket Systri Warrick",
        img: friend3,
        url: `${base_url + version}/peoples/30`
    },
    falcon: {
        name: "Millennium Falcon",
        img: friend7,
        url: `${base_url + version}/transports/10`
    }
}




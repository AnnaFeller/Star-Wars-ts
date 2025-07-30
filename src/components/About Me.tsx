import {useEffect, useState} from "react";
import {useParams} from "react-router";

interface HeroInfo {
    name: string;
    gender: string;
    birth_year: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
}
const characters: Record<string, string> = {
    luke: "1",
    c3po: "2",
    r2d2: "3",
    leia: "5",
    obi_wan: "10",
    chewbacca: "13",
    han_solo: "14",
    yoda: "0",
    ewok: "30",
};


const period_month = 30 * 24 * 60 * 60 * 1000;

const AboutMe = () => {
    const [hero, setHero] = useState<HeroInfo | null>(null);
    const {heroId} = useParams();


//имя + id
    const name =(heroId && characters[heroId] ? heroId : "luck");
    const id = characters[name];
 const idKey = `hero-${id}`

    useEffect(() => {
        const storedHero = localStorage.getItem(idKey);
        if (storedHero) {
            const heroData = JSON.parse(storedHero);
            if ((Date.now() - heroData.timestamp) < period_month) {
                setHero(heroData.payload);
                return;
            }
        }
        fetch(`https://sw-info-api.herokuapp.com/v1/peoples/${id}`)
            .then(response => response.json())
            .then(data => {
                const info: HeroInfo = {
                    name: data.name,
                    gender: data.gender,
                    birth_year: data.birth_year,
                    height: data.height,
                    mass: data.mass,
                    hair_color: data.hair_color,
                    skin_color: data.skin_color,
                    eye_color: data.eye_color,
                };
                setHero(info);
                localStorage.setItem(idKey, JSON.stringify({
                        payload: info,
                        timestamp: Date.now(),
                    })
                );
            });
    }, [id]);


    return (
        <>
            {hero && (
                <div className="text-[2em] text-justify tracking-widest leading-14 ml-8">
                    {Object.keys(hero).map(key => (
                        <p key={key}>
                            <span
                                className="text-3xl capitalize">{key.replace('_', ' ')}</span>: {hero[key as keyof HeroInfo]}
                        </p>
                    ))}
                </div>
            )}
        </>
    );
};

export default AboutMe;
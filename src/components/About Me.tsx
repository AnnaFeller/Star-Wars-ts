
import {useEffect, useState} from "react";

interface HeroInfo{
    name: string;
    gender: string;
    birth_year: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
}

const period_month = 30 * 24 * 60 * 60 * 1000;
const id = 1;

const AboutMe = () => {
    const [hero, setHero] = useState<HeroInfo | null>(null);

    useEffect(() => {
        const storedHero = localStorage.getItem("hero");
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
                localStorage.setItem(
                    "hero",
                    JSON.stringify({
                        payload: info,
                        timestamp: Date.now(),
                    })
                );
            });
    }, []);


    return (
        <>
            {hero && (
                <div className="text-[2em] text-justify tracking-widest leading-14 ml-8">
                    {Object.keys(hero).map(key => (
                        <p key={key}>
                            <span className="text-3xl capitalize">{key.replace('_', ' ')}</span>: {hero[key as keyof HeroInfo]}
                        </p>
                    ))}
                </div>
            )}
        </>
    );
};

export default AboutMe;
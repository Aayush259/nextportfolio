import React from "react";
import { WavyBackground } from "./ui/WavyBackground";
import { myHeadlines } from "@/app/globalConstants";

export function HeroSection() {
    return (
        <WavyBackground className="max-w-4xl mx-auto pb-40">
            <p className="text-lg md:text-2xl lg:text-4xl text-center font-bold">Hi, I'm</p>
            <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
                Aayush Kumar Kumawat
            </p>
            <p className="relative text-base md:text-lg mt-4 text-white font-normal text-center flex">
                {
                    myHeadlines.map(headline => (
                        <span
                            key={headline['id']}
                            className={`absolute opacity-0 animate-txt-slide-${headline['id']} w-full`}
                        >
                            {headline['line']}
                        </span>
                    ))
                }
            </p>
        </WavyBackground>
    );
}

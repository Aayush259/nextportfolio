import React from "react";
import { Spotlight } from "./ui/Spotlight";

export function About() {
    return (
        <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="white"
            />
            <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
                <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                    Get to know me
                </h1>
                <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
                    Hi, I&apos;m Aayush Kumar Kumawat, a tech enthusiast 🚀 and a passionate coder dedicated for developing innovative and user-friendly applications. With a solid foundation in JavaScript and React, I strive to create responsive and visual appealing web experiences. My GitHub tells more about it, so don&apos;t forget to check it out!
                </p>
            </div>
        </div>
    );
}

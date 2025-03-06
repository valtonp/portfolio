"use client"

import {useEffect} from "react"

const IntroAnimation = () => {

    useEffect(() => {
        const container = document.getElementById("containerIntro")
        const containerParent = document.getElementById("introContainer")
        const word = "Bienvenue"

        if (container && containerParent) {
            container.innerHTML = ""

            word.split("").forEach((letter, index) => {
                const span = document.createElement("span")
                span.classList.add("spanLetter")
                span.textContent = letter
                span.style.animationDelay = `${index * 0.1}s`
                container.appendChild(span)
            })

            setTimeout(() => {
                container.style.animation = "endIntro 2.5s ease forwards";
                setTimeout(() => {
                    containerParent.remove();
                }, 2500)
            }, 2350);
        }
    }, [])

    return (
        <div id="introContainer" className="flex justify-center items-center h-screen bg-[#212121] overflow-hidden">
            <div id="containerIntro" className="relative flex items-center justify-center">
                {/* Letters will be added here by JavaScript */}
            </div>
        </div>
    )
}

export default IntroAnimation


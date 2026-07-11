"use client";

import { useState } from "react";

export default function Home() {
  const [imageError, setImageError] = useState(false);

  // PokeAPI official artwork URL for Pikachu (highly reliable)
  const pikachuImageUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png";

  return (
    <div className="relative min-h-screen lg:h-screen flex flex-col justify-between bg-poke-bg overflow-x-hidden font-sans select-none">
      
      {/* Background Decorative Blur Spheres */}
      <div className="absolute top-[-10%] left-[-10%] w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full bg-poke-yellow/15 blur-[60px] sm:blur-[100px] -z-10" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] rounded-full bg-poke-blue/10 blur-[80px] sm:blur-[120px] -z-10" />

      {/* Background Small Deco Symbols (Stars & Sparks) */}
      <div className="absolute top-[20%] right-[45%] text-poke-yellow/30 animate-pulse hidden md:block" style={{ transform: "rotate(15deg)" }}>
        <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
          <path d="M19 10.5l-5.5-.5L11 5 8.5 10l-5.5.5 4 4-1 5.5 5-3 5 3-1-5.5 4-4z" />
        </svg>
      </div>
      <div className="absolute bottom-[25%] left-[8%] text-poke-blue/20 hidden md:block animate-bounce" style={{ animationDuration: '6s' }}>
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z" />
        </svg>
      </div>
      <div className="absolute top-[15%] left-[20%] text-poke-yellow/20 hidden md:block" style={{ transform: "rotate(-10deg)" }}>
        <svg className="w-10 h-10 fill-current" viewBox="0 0 24 24">
          <path d="M12 2L2 22h9l-2 10 13-14h-9z" />
        </svg>
      </div>
      <div className="absolute bottom-[15%] right-[20%] text-poke-blue/15 hidden md:block" style={{ transform: "rotate(45deg)" }}>
        <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
          <path d="M12 2L2 22h9l-2 10 13-14h-9z" />
        </svg>
      </div>

      {/* Header Area */}
      <header className="flex-none w-full max-w-7xl mx-auto px-6 md:px-12 py-5 sm:py-6 flex items-center justify-between z-10">
        <div className="flex items-center gap-2">
          {/* Pokéball Logo Icon */}
          <div className="w-8 h-8 rounded-full border-2 border-poke-dark-blue bg-white flex flex-col justify-between overflow-hidden relative shadow-md">
            <div className="h-1/2 bg-poke-red border-b border-poke-dark-blue w-full" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full border-2 border-poke-dark-blue bg-white flex items-center justify-center z-10">
              <div className="w-1 h-1 rounded-full bg-poke-dark-blue" />
            </div>
            <div className="h-1/2 bg-white w-full" />
          </div>
          <span className="font-jua text-2xl text-poke-dark-blue tracking-wide">
            포켓몬 탐험대
          </span>
        </div>

        {/* Navigation Menu */}
        <nav className="flex items-center gap-6">
          <ul className="hidden sm:flex items-center gap-6 md:gap-8">
            <li>
              <span className="text-gray-600 hover:text-poke-blue font-medium transition-colors cursor-pointer text-sm md:text-base">
                포켓몬 소개
              </span>
            </li>
            <li>
              <span className="text-gray-600 hover:text-poke-blue font-medium transition-colors cursor-pointer text-sm md:text-base">
                포켓몬 도감
              </span>
            </li>
          </ul>
          <span className="bg-white border-2 border-poke-blue text-poke-blue hover:bg-poke-blue hover:text-white px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 shadow-sm cursor-pointer hover:scale-105 active:scale-95">
            모험 시작
          </span>
        </nav>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 w-full py-4 lg:py-0 items-center">
          
          {/* Left Column: Title, Description, Buttons */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 md:space-y-8 animate-fade-in-up text-center lg:text-left z-10">
            <div className="space-y-3 md:space-y-4">
              {/* Category Pill Tag */}
              <div className="inline-flex items-center justify-center lg:justify-start">
                <span className="bg-poke-light-blue text-poke-blue border border-blue-200/50 px-4 py-1 rounded-full text-xs md:text-sm font-bold tracking-wide">
                  ⚡ 신나는 모험의 시작
                </span>
              </div>
              
              {/* Main Heading */}
              <h1 className="font-jua text-4xl sm:text-5xl md:text-6xl text-poke-dark-blue leading-[1.15] sm:leading-[1.15] tracking-tight">
                오늘, 어떤{" "}
                <span className="text-poke-blue relative inline-block">
                  포켓몬
                  <span className="absolute bottom-0 left-0 w-full h-[6px] bg-poke-yellow -z-10 rounded-full" />
                </span>
                을<br className="hidden sm:inline" /> 만나 볼래?
              </h1>
            </div>

            {/* Description */}
            <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">
              서로 다른 모습과 특별한 능력을 가진 포켓몬을 만나 보세요.
              <br className="hidden md:inline" /> 새로운 포켓몬과 함께 신나는 모험을 시작해요!
            </p>

            {/* Actions Buttons */}
            <div className="flex flex-row items-center justify-center lg:justify-start gap-4">
              <button 
                type="button"
                className="bg-poke-blue hover:bg-poke-blue-hover text-white text-sm sm:text-base px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold shadow-lg shadow-blue-500/20 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/30 active:scale-95 transition-all duration-300 cursor-pointer"
              >
                포켓몬 만나기
              </button>
              <button 
                type="button"
                className="bg-white text-poke-dark-blue border-2 border-poke-yellow hover:bg-poke-yellow hover:text-poke-dark-blue text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-bold shadow-md hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
              >
                포켓몬 알아보기
              </button>
            </div>
          </div>

          {/* Right Column: Featured Pokemon Image Card */}
          <div className="lg:col-span-5 flex items-center justify-center z-10 w-full">
            <div className="relative w-full max-w-[280px] sm:max-w-[340px] lg:max-w-[380px] aspect-square rounded-[2rem] bg-white/70 backdrop-blur-md border-4 border-poke-yellow shadow-2xl shadow-yellow-500/10 flex flex-col items-center justify-center animate-float overflow-hidden p-6">
              
              {/* Inner Decorative Background Rings */}
              <div className="absolute w-[80%] h-[80%] rounded-full border border-dashed border-poke-yellow/30 -z-10 animate-spin" style={{ animationDuration: '60s' }} />
              <div className="absolute w-[60%] h-[60%] rounded-full bg-poke-light-blue/40 -z-10" />

              {/* Conditionally Render Image or Placeholder */}
              {!imageError ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={pikachuImageUrl}
                  alt="피카츄"
                  className="w-[75%] h-[75%] object-contain select-none pointer-events-none drop-shadow-[0_10px_15px_rgba(255,203,5,0.3)]"
                  onError={() => setImageError(true)}
                  loading="eager"
                />
              ) : (
                /* Fallback Clean Placeholder */
                <div className="w-full h-full flex flex-col items-center justify-center space-y-4">
                  <div className="w-16 h-16 rounded-full border-4 border-dashed border-poke-blue/40 flex items-center justify-center animate-pulse">
                    <svg className="w-8 h-8 text-poke-blue/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="font-jua text-lg text-poke-dark-blue/60">
                    포켓몬 이미지
                  </span>
                </div>
              )}

              {/* Pokemon Small Label Inside Card */}
              <div className="absolute bottom-4 bg-white/90 border border-poke-yellow/50 px-4 py-1 rounded-full shadow-sm">
                <span className="font-jua text-xs text-poke-dark-blue flex items-center gap-1">
                  ⚡ <span>No.0025 피카츄</span>
                </span>
              </div>
            </div>
          </div>

        </div>
      </main>

      {/* Footer Area */}
      <footer className="flex-none py-4 text-center text-xs text-gray-400 font-medium">
        © 2026 포켓몬 탐험대. All Rights Reserved.
      </footer>
      
    </div>
  );
}

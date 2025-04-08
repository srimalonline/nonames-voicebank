'use client';
import React, { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";

export default function Home() {
  useEffect(() => { 
    gsap.timeline()
    .fromTo(".girl-image", { opacity: 0, y: 350 }, { opacity: 1, y: 200 },)
    .fromTo(".boy-image", { opacity: 0, y: 250 }, { opacity: 1, y: 200 }, '-=0.2')
    .fromTo(".mic-image", { opacity: 0, y: 100 }, { opacity: 1, y: 60 }, '-=0.4')
    .fromTo("h1", { opacity: 0, y: 50 },{opacity:1,y:0,stagger:0.8}, "<+=0.5")
    .fromTo(".select-voice", { opacity: 0, y: 50 },{opacity:1,y:0}, "<+=1")
    .to(".girl-image", { x:1,repeat:-1, yoyo:true, ease:"none",duration:3 },"<-=2")
    .to(".boy-image", { x:1,repeat:-1, yoyo:true, ease:"none",duration:6 },"<-=2")
    .to(".mic-image", { scale:1.3,repeat:-1, yoyo:true, ease:"none",duration:5 },"<-=2")
  }, []);
  return (
      <div className="flex flex-row">
        {/* First Column: Images */}
        <div className="flex flex-row w-1/2 overflow-hidden h-full relative">
          <Image
            src="/images/girl.svg"
            alt="Voice Bank Logo"
            width={500}
            height={300}
            className="z-2 girl-image"

          />
          <Image
            src="/images/boy.svg"
            alt="Voice Bank Logo"
            width={250}
            height={300}
            className="z-1 boy-image"
          />
          <Image
            src="/images/mic.svg"
            alt="Voice Bank Logo"
            width={250}
            height={300}
            className="z-2 mic-image"
          />
          
        </div>

        {/* Second Column: Text and Buttons */}
        <div className="flex flex-col w-1/2 items-start justify-center p-10">
          <h1 className="text-7xl font-bold mb-4">The Power of Voice,
             </h1>
          <h1 className="text-7xl font-bold mb-4">
             The Art of Expression</h1>
          <Link className="bg-white text-black px-8 py-3 rounded-4xl mb-2 text-5xl mt-3 select-voice"
          href="/voice">
            Select Voice
          </Link>
        </div>
      </div>
  );
}

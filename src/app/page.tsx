"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import logo from "./../../public/fruits_image.jpg";
import { useState, useEffect, useRef } from "react";
import kteam from "./../../public/team_3.jpg";
import jteam from "./../../public/team_2.jpg";
import vteam from "./../../public/team_1.jpg";
import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut } from "@clerk/nextjs";


export default function Home() {
  const [isImageVisible, setIsImageVisible] = useState(false);
  const [isAboutVisible, setIsAboutVisible] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsImageVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsAboutVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentAboutRef = aboutRef.current;
    if (currentAboutRef) {
      observer.observe(currentAboutRef);
    }

    return () => {
      if (currentAboutRef) {
        observer.unobserve(currentAboutRef);
      }
    };
  }, []);

  return (
    <div>
      {/* Home */}
      <Navbar />
      <div className="h-screen grid lg:grid-cols-2 grid-cols-1 gap-2">
        <div className=" flex flex-col  gap-4 items-center justify-center h-full">
          <h1 className="scroll-m-0 text-7xl font-extrabold tracking-tight lg:text-8xl ">
            Plate Plan
          </h1>
          <h3
            className="scroll-m-0 text-2xl tracking-tight"
            style={{ fontStyle: "italic !important" }}
          >
            Eat Well, Feel Great
          </h3>
          <Link href="/signin">
            <Button className="lg:mt-40">Start Now</Button>
          </Link>

          {/* Scroll Button */}
        </div>
        <div className="flex items-center   justify-center">
          <Image
            src={logo}
            alt="plate"
            className={`object-contain brightness-75 h-full transition-opacity duration-1000 ease-in-out ${
              isImageVisible ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>
      </div>

      <div>
      
      {/* About Us Section */}
      <div className="py-16 px-8 bg-grey text-center">
        <h2 className="text-5xl font-bold mb-8">About PlatePlan</h2>

        {/* Mission Statement */}
        <div className="mb-16">
          <h3 className="text-3xl font-semibold">Our Mission</h3>
          <p className="mt-4 max-w-4xl mx-auto">
            At PlatePlan, we are passionate about empowering individuals to make
            informed decisions about their nutrition. Our mission is to provide
            easy-to-use tools and accurate information to help you achieve your
            health and wellness goals.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <div className="text-4xl mb-4">🍏</div>
            <h4 className="text-xl dark:text-gray-800 font-bold">Personalized Tracking</h4>
            <p className="mt-2 text-gray-800">
              Personalized nutrition plans and tracking tools crafted to suit 
              your unique lifestyle and objectives.
            </p>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <div className="text-4xl mb-4">🥕</div>
            <h4 className="text-xl text-gray-800 font-bold ">Extensive Food Database</h4>
            <p className="mt-2 text-gray-800">
              Access a vast and comprehensive database of foods, offering 
              complete and detailed nutritional insights.
            </p>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <div className="text-4xl mb-4">🌿</div>
            <h4 className="text-xl text-gray-800 font-bold">Expert Insights</h4>
            <p className="mt-2 text-gray-800">
              Receive regular tips and expert articles to support informed 
              and healthier dietary decisions.
            </p>
          </div>
        </div>
      </div>

      {/* Meet the Team Section */}
      <div className="py-16 px-8 bg-gray-100">
        <h2 className="text-5xl font-bold text-gray-800 text-center mb-8">Meet the Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="flex flex-col items-center">
            <Image
              src={kteam}
              alt="Khehla Dlamini"
              className="rounded-full mb-4"
              width={150}
              height={150}
            />
            <h3 className="text-2xl text-gray-800 font-bold">Khehla Dlamini</h3>
            <p className="text-xl text-gray-700">Project Manager, UI/UX Designer</p>
          </div>

          <div className="flex flex-col items-center">
            <Image
              src={vteam}
              alt="Valrite Ehachi"
              className="rounded-full mb-4"
              width={150}
              height={150}
            />
            <h3 className="text-2xl text-gray-800 font-bold">Valrite Ehachi</h3>
            <p className="text-xl text-gray-700">Frontend Developer & Writer</p>
          </div>

          <div className="flex flex-col items-center">
            <Image
              src={jteam}
              alt="Joseph Karanja"
              className="rounded-full mb-4"
              width={150}
              height={150}
            />
            <h3 className="text-2xl text-gray-800 font-bold">Joseph Karanja</h3>
            <p className="text-xl text-gray-700">Backend Developer & QA Engineer</p>
          </div>
        </div>
      </div>
    </div>
    </div>  
  );
}

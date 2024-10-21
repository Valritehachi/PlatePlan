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
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { GlassWater, Weight } from "lucide-react";

export default function Home() {
  const [isImageVisible, setIsImageVisible] = useState(false);
  const [isAboutVisible, setIsAboutVisible] = useState(false);
  const [isFeaturesVisible, setIsFeaturesVisible] = useState(false);
  const [isTeamVisible, setIsTeamVisible] = useState(false);

  const aboutRef = useRef(null);
  const featuresRef = useRef(null);
  const teamRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsImageVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === aboutRef.current) {
              setIsAboutVisible(true);
            } else if (entry.target === featuresRef.current) {
              setIsFeaturesVisible(true);
            } else if (entry.target === teamRef.current) {
              setIsTeamVisible(true);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentAboutRef = aboutRef.current;
    const currentFeaturesRef = featuresRef.current;
    const currentTeamRef = teamRef.current;

    if (currentAboutRef) observer.observe(currentAboutRef);
    if (currentFeaturesRef) observer.observe(currentFeaturesRef);
    if (currentTeamRef) observer.observe(currentTeamRef);

    return () => {
      if (currentAboutRef) observer.unobserve(currentAboutRef);
      if (currentFeaturesRef) observer.unobserve(currentFeaturesRef);
      if (currentTeamRef) observer.unobserve(currentTeamRef);
    };
  }, []);

  return (
    <div>
      {/* Home */}
      <Navbar />
      <div className="h-screen grid lg:grid-cols-2 grid-cols-1 gap-2">
        <div className="flex flex-col gap-4 items-center justify-center h-full">
          <h1 className="scroll-m-0 text-7xl font-extrabold tracking-tight lg:text-8xl">
            Plate Plan
          </h1>
          <h3 className="scroll-m-0 text-2xl tracking-tight">
            Eat Well, Feel Great
          </h3>
          <Link href="/signin">
            <Button className="lg:mt-40">Start Now</Button>
          </Link>
        </div>
        <div className="flex items-center justify-center">
          <Image
            src={logo}
            alt="plate"
            className={`object-contain brightness-75 h-full transition-opacity duration-1000 ease-in-out ${
              isImageVisible ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>
      </div>

      {/* About Us Section */}
      <div
        ref={aboutRef}
        className={`py-16 px-8 bg-grey text-center transition-opacity duration-1000 ease-in-out ${
          isAboutVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <h2 className="text-5xl font-bold mb-8">About PlatePlan</h2>
        <div className="mb-16">
          <h3 className="text-3xl font-semibold">Our Mission</h3>
          <p className="mt-4 max-w-4xl mx-auto">
            At PlatePlan, we are passionate about empowering individuals to make
            informed decisions about their nutrition. Our mission is to provide
            easy-to-use tools and accurate information to help you achieve your
            health and wellness goals.
          </p>
        </div>
      </div>

      {/* Feature Cards */}
      <div
        ref={featuresRef}
        className={`py-16 px-8 bg-accent transition-opacity duration-1000 ease-in-out ${
          isFeaturesVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="bg-accent p-6 rounded-md shadow-lg flex flex-col gap-2">
            <div className="flex justify-center mb-2">
              <GlassWater className="h-full" />
            </div>
            <h4 className="text-xl text-accent-foreground font-bold">
              Track Water Intake
            </h4>
            <p className="mt-2 text-accent-foreground">
              Set daily water intake goals and keep track of your daily water
              consumption while visualizing your progress in a charts.
            </p>
          </div>

          <div className="bg-accent p-6 rounded-md shadow-lg flex flex-col gap-2">
            <div className="flex justify-center mb-2">
              <Image
                src="/nutritionx.png"
                alt="food"
                width={200}
                height={50}
                className="h-10 w-40"
              />
            </div>
            <h4 className="text-xl text-accent-foreground font-bold">
              Extensive Food Database
            </h4>
            <p className="mt-2 text-accent-foreground">
              Easily log your meals by searching a vast database of food items
              through the Nutritionix API.
            </p>
          </div>

          <div className="bg-accent p-6 rounded-md shadow-lg flex flex-col gap-2">
            <div className="flex justify-center mb-2">
              <Weight className="h-full" />
            </div>
            <h4 className="text-xl text-accent-foreground font-bold">
              Track your weight
            </h4>
            <p className="mt-2 text-accent-foreground">
              Log your weight regularly to monitor progress. View your history
              through graphs
            </p>
          </div>
        </div>
      </div>

      <div
        ref={teamRef}
        className={`py-16 px-8 bg-accent transition-opacity duration-1000 ease-in-out ${
          isTeamVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <h2 className="text-5xl font-bold text-accent-foreground text-center mb-8">
          Meet the Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <Image
              src={kteam}
              alt="Khehla Dlamini"
              className="rounded-full mb-4"
              width={150}
              height={150}
            />
            <h3 className="text-2xl  font-bold">Khehla Dlamini</h3>
            <p className="text-lg text-muted-foreground">
              Project Manager, UI/UX Designer
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Image
              src={vteam}
              alt="Valrite Ehachi"
              className="rounded-full mb-4"
              width={150}
              height={150}
            />
            <h3 className="text-2xl  font-bold">Valrite Ehachi</h3>
            <p className="text-lg text-muted-foreground">
              Frontend Developer & Writer
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Image
              src={jteam}
              alt="Khehla Dlamini"
              className="rounded-full mb-4"
              width={150}
              height={150}
            />
            <h3 className="text-2xl  font-bold">Joseph Karanja</h3>
            <p className="text-lg text-muted-foreground">
              Backend Developer & QA Engineer
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

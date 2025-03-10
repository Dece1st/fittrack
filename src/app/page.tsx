"use client";
import VantaBackground from "@components/VantaBackground"
import { Orbitron } from "next/font/google";
import Login from "@components/Login"
import SignUp from "@components/SignUp"

const orbitron = Orbitron({ subsets: ["latin"] });

const Home = () => {
    return (
        <div className="h-screen w-screen">
            <VantaBackground />
            <div className="absolute w-[75%] h-[50%] left-[12.5%] top-[25%]">
                <img src="EvolveFitnessSmall.svg" alt="Logo"/>
                <p className={`${orbitron.className} text-white text-[1.3rem] w-[50%] ml-5.5 mt-8`}>
                    Unlock your potential and be the best version of yourself.
                    Create an account account now to start your journey.
                </p>
                <Login /><SignUp className="ml-8" />
            </div>
        </div>
    );
}

export default Home;
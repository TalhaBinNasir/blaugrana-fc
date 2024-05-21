"use client";

import Image from "next/image";
import Club from "./club/club";
import Trophies from "./trophies/trophies";
import Teams from "./additionalTeams/teams";
import { useState } from "react";

const ClubProfile = () => {
  const activeButtonClass =
    "flex inline-block text-xl bg-yellow-700 justify-between rounded-full bg-warning px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#e4a11b] transition duration-150 ease-in-out hover:bg-warning-600 hover:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.3),0_4px_18px_0_rgba(228,161,27,0.2)] focus:bg-warning-600 focus:shadow-[0_8px_9px_-4p";
  const inactiveButtonClass =
    "flex inline-block text-xl justify-between rounded-full bg-warning px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#e4a11b] transition duration-150 ease-in-out hover:bg-warning-600 hover:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.3),0_4px_18px_0_rgba(228,161,27,0.2)] focus:bg-warning-600 focus:shadow-[0_8px_9px_-4p";
  const [selectedOption, setSelectedOption] = useState("club");
  return (
    <div className="min-h-screen bg-barca-bg-3 bg-cover p-4">
      <div className="flex flex-col justify-center items-center pb-4">
        <div className="flex justify-between items-center space-x-6">
          <button
            type="button"
            className={
              selectedOption === "club"
                ? activeButtonClass
                : inactiveButtonClass
            }
            onClick={() => {
              setSelectedOption("club");
            }}
          >
            <div className="pr-2">Club</div>
            <div>
              <img src="/favicon.ico" alt="barca" height={30} width={30} />
            </div>
          </button>
          <button
            type="button"
            className={
              selectedOption === "trophies"
                ? activeButtonClass
                : inactiveButtonClass
            }
            onClick={() => {
              setSelectedOption("trophies");
            }}
          >
            <div className="pr-2">Trophies</div>
            <div>
              <img src="/trophy.png" alt="cup" height={30} width={30} />
            </div>
          </button>
          <button
            type="button"
            className={
              selectedOption === "teams"
                ? activeButtonClass
                : inactiveButtonClass
            }
            onClick={() => {
              setSelectedOption("teams");
            }}
          >
            <div className="pr-2">Teams</div>
            <div>
              <img src="/team.png" alt="team" height={30} width={30} />
            </div>
          </button>
        </div>
      </div>
      <div className="flex backdrop-blur-lg bg-black/30">
        {selectedOption === "club" ? (
          <Club />
        ) : selectedOption === "trophies" ? (
          <Trophies />
        ) : (
          <Teams />
        )}
      </div>
    </div>
  );
};

export default ClubProfile;

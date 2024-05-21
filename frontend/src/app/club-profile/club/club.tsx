"use client";
import Image from "next/image";
import {
  selectClubFacts,
  selectHistoricImages,
  selectStadium,
} from "../clubProfileSlice";
import { useAppSelector } from "@/lib/hooks";

const Club = () => {
  const facts = useAppSelector(selectClubFacts);
  const stadium = useAppSelector(selectStadium);
  const images = useAppSelector(selectHistoricImages);
  console.log(images);

  return (
    <div className="flex flex-col w-full p-4">
      <div className="flex w-full justify-between pb-10">
        <div className="flex flex-col justify-between text-2xl">
          <div>{`Club Name: ${facts.fullName}`}</div>
          <div>{`City: ${facts.city}`}</div>
          <div>{`Country: ${facts.countryName}`}</div>
          <div>{`Founding Date: ${facts.founding}`}</div>
          <div>
            {"Official Website: "}
            <a target="_blank" href={`https://www.${facts.homepage}`}>
              {facts.homepage}
            </a>
          </div>
          <div>{`Phone Number: ${facts.phone}`}</div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Image
            src="/favicon.ico"
            width={200}
            height={200}
            alt="FC Barcelona Logo"
          />
          <div className="text-md">Team logo</div>
        </div>
      </div>
      <div className="flex w-full justify-between">
        <div className="flex flex-col justify-between text-2xl">
          <div>{`Stadium Name: ${stadium.name}`}</div>
          <div>{`Capacity: ${stadium.seats}`}</div>
          <div>{`Address: ${stadium.street}`}</div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Image
            loader={() => stadium.image}
            src={stadium.image}
            width={300}
            height={300}
            alt="Stadium Image"
          />
          <div className="text-md">{stadium.name}</div>
        </div>
      </div>
      <div className="flex">
        <div className="flex flex-row justify-center items-center">
          {images?.map((i) => {
            return (
              <Image
                loader={() => i}
                src={i}
                width={100}
                height={100}
                alt="img"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Club;

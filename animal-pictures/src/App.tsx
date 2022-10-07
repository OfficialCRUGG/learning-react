import { useState } from "react";
import AnimalButton from "./components/AnimalButton";
import ReloadButton from "./components/ReloadButton";

export interface Animal {
  id: string;
  name: string;
  getImage: () => string;
}

export default function App() {
  const animals = [
    {
      id: "capy",
      name: "Capybara",
      getImage: () => {
        return "https://api.capy.lol/v1/capybara";
      },
    },
    {
      id: "dog",
      name: "Dog",
      getImage: () => {
        return "https://place.dog/1280/720";
      },
    },
  ];

  const [activeAnimal, setAnimal] = useState<string>("capy");

  return (
    <>
      <div className="flex justify-center items-center py-5 space-x-5">
        {animals.map((animal) => (
          <AnimalButton key={animal.id} animal={animal} setAnimal={setAnimal} active={animal.id === activeAnimal} />
        ))}
        <ReloadButton />
      </div>
      <div className="flex justify-center items-center py-5">
        <img className="rounded-md max-h-9/10" src={animals.find((animal) => animal.id === activeAnimal)?.getImage()} alt="" />
      </div>
    </>
  );
}

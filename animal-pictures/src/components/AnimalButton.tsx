import { Animal } from "../App";

export default function AnimalButton({
  animal,
  setAnimal,
  active,
}: {
  animal: Animal;
  setAnimal: (animal: string) => void;
  active: boolean;
}) {
  function clickHandler() {
    setAnimal(animal.id);
  }

  return (
    <div
      className={`bg-black ${
        active ? "bg-opacity-25 scale-110" : "bg-opacity-10 hover:bg-opacity-20 scale-100 hover:scale-105"
      } transition duration-250 py-2 px-4 cursor-pointer rounded-md`}
      onClick={clickHandler}
    >
      {animal.name}
    </div>
  );
}

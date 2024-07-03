import { useMemo } from "react";
import { useAppStore } from "../Stores/useAppStore";
import DrinkCard from "../Components/DrinkCard";

export default function IndexPage() {
  const drinks = useAppStore((state) => state.drinks);
  const hasDrinks = useMemo(() => drinks.drinks.length > 0, [drinks]);
  return (
    <>
      {hasDrinks ? (
        <>
          <h1 className="text-6xl font-extrabold">Recipes</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 my-10 gap-10">
            {drinks.drinks.map((drink) => (
              <DrinkCard key={drink.idDrink} drink={drink} />
            ))}
          </div>
        </>
      ) : (
        <>
          <p className="my-10 text-center text-2xl">
            There is not recipes available yet, search for a new consultant
          </p>
        </>
      )}
    </>
  );
}
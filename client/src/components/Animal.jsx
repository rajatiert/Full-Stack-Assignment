"use client"
import { useState, useEffect } from "react";
import EditAnimalModal from "@/components/modals/updateAnimalModal";
import { MdModeEditOutline } from "react-icons/md";
import Loader from "./Loader/Loader";

const Animal = ({ allAnimals, setAllAnimalsArray }) => {
    const [openEditAnimalModal, setOpenEditAnimalModal] = useState(false);
    const [selectedAnimal, setSelectedAnimal] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (allAnimals) {
            setIsLoading(false);
        }
    }, [allAnimals]);

    return (
        <>
            <div className="flex flex-col gap-4 w-full p-4 ">
                <h1 className="text-2xl font-medium w-full">Favorite Animals</h1>
                {isLoading ? (
                    <div className="flex mt-8 min-w-full justify-center items-end">
                        <Loader />
                    </div>
                ) : (
                    <div className="grid grid-cols-2 gap-4 overflow-auto">
                        {allAnimals.map((animal, index) => (
                            <div key={index} className="border px-4 py-2 rounded-lg shadow-lg">
                                <div className="flex justify-between">
                                    <h2 className="text-lg font-medium">{animal.name}</h2>
                                    <div onClick={() => { setOpenEditAnimalModal(true); setSelectedAnimal(animal) }}>
                                        <MdModeEditOutline />
                                    </div>
                                </div>
                                <p><span className="text-sm font-medium">Species:</span> {animal.species}</p>
                                <p><span className="text-sm font-medium">Habitat:</span> {animal.habitat}</p>
                                <p><span className="text-sm font-medium">Lifespan:</span> {animal.lifespan}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <EditAnimalModal
                open={openEditAnimalModal}
                setOpen={setOpenEditAnimalModal}
                animal={selectedAnimal}
                setAnimal={setAllAnimalsArray}
                allAnimals={allAnimals}
            />
        </>
    );
}

export default Animal;

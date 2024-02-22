"use client"
import { useState, useEffect } from "react";
import EditAnimalModal from "@/components/updateAnimalModal";
import { MdModeEditOutline } from "react-icons/md";


const Two = ({ allAnimals , setAllAnimalsArray}) => {

    const [openEditAnimalModal, setOpenEditAnimalModal] = useState(false);
    const [selectedAnimal, setSelectedAnimal] = useState([]);

    console.log("open edit value  = ", openEditAnimalModal)

    return (
        <>
        <EditAnimalModal  open={openEditAnimalModal} setOpen={setOpenEditAnimalModal} animal={selectedAnimal} setAnimal = {setAllAnimalsArray} allAnimals={allAnimals}/>
        <div className="flex flex-col gap-4 w-full p-4 ">
            <h1 className="text-2xl font-medium w-full">Favorite Animals</h1>
            <div className="grid grid-cols-2 gap-4 overflow-auto">
                {allAnimals.map((animal, index) => (
                    <div key={index} className="border p-4">
                        <div className="flex justify-between"> <><h2 className="text-lg font-medium">{animal.name}</h2></> <div onClick={()=>{setOpenEditAnimalModal(true);setSelectedAnimal(animal)}}><MdModeEditOutline /></div> </div>
                        <p><span className="text-sm font-medium">Species:</span> {animal.species}</p>
                        <p><span className="text-sm font-medium">Habitat:</span> {animal.habitat}</p>
                        <p><span className="text-sm font-medium">Lifespan:</span> {animal.lifespan}</p>
                    </div>
                ))}
            </div>
        </div>
        </>
    );
}

export default Two;
import { useState } from 'react';
import AddBookModal from './modals/AddBookModal';
import AddAnimalModal from './modals/addAnimalModal';

const AddContent = ({ allBooks, allAnimals, setBook, setAnimal ,apiCall}) => {
    const [isBookModalOpen, setIsBookModalOpen] = useState(false);
    const [isAnimalModalOpen, setIsAnimalModalOpen] = useState(false);

    const openBookModal = () => {
        setIsBookModalOpen(true);
    };

    const openAnimalModal = () => {
        setIsAnimalModalOpen(true);
    };

    return (
        <> <AddBookModal
            open={isBookModalOpen}
            setOpen={setIsBookModalOpen}
            setBooks={setBook}
            allBooks={allBooks}
        />
 
            <AddAnimalModal
                open={isAnimalModalOpen}
                setOpen={setIsAnimalModalOpen}
                setAnimals={setAnimal}
                allAnimals={allAnimals}
            />
            <div className="p-4 w-full">
                <h1 className="text-3xl font-semibold mb-4 text-[#4D8FAC]">Add Books or Animals</h1>
                <div className="flex flex-col gap-4 w-full">
                    <div className="flex gap-4 items-center justify-between">
                        <div className="text-xl font-semibold">Add New Book To The List</div>
                        <div>
                            <button onClick={openBookModal} className="bg-black text-white px-3 py-2 rounded-lg">
                                Add Book
                            </button>
                        </div>
                    </div>

                    <div className="flex  gap-4 items-center justify-between">
                        <div className="text-xl font-semibold">Add New Animal To The List</div>
                        <div>
                            <button onClick={openAnimalModal} className="bg-black text-white px-3 py-2 rounded-lg">
                                Add Animal
                            </button>
                        </div>
                    </div>
                    <div className="flex gap-4 items-center justify-between">
                        <div className="text-xl font-semibold">Add api called </div>
                        <div>
                            <div className="bg-black text-white px-3 py-2 rounded-lg">
                                {apiCall?.add} Times
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-4 items-center justify-between">
                        <div className="text-xl font-semibold">Update api called </div>
                        <div>
                            <div className="bg-black text-white px-3 py-2 rounded-lg">
                                {apiCall?.update} Times
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddContent;

import { useState } from 'react';
import AddBookModal from './AddBookModal';
import AddAnimalModal from './AddAnimalModal';

const Three = ({ allBooks, allAnimals, setBook, setAnimal }) => {
    const [isBookModalOpen, setIsBookModalOpen] = useState(false);
    const [isAnimalModalOpen, setIsAnimalModalOpen] = useState(false);

    const openBookModal = () => {
        setIsBookModalOpen(true);
    };

    const openAnimalModal = () => {
        setIsAnimalModalOpen(true);
    };

    return (
        <div className="container mx-auto mt-8">
            <h1 className="text-3xl font-bold mb-4">Add Books or Animals</h1>
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
            </div>
            {/* Render AddBookModal */}
            <AddBookModal
                open={isBookModalOpen}
                setOpen={setIsBookModalOpen}
                setBook={setBook}
                allBooks={allBooks}
            />
            {/* Render AddAnimalModal */}
            <AddAnimalModal
                open={isAnimalModalOpen}
                setOpen={setIsAnimalModalOpen}
                setAnimal={setAnimal}
                allAnimals={allAnimals}
            />
        </div>
    );
};

export default Three;

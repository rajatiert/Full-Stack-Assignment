export const updateAnimalArray = (allAnimalsArray,setAnimal,updatedAnimal) => {
    const animalIndex = allAnimalsArray.findIndex(animal => animal._id === updatedAnimal._id);
   
    if (animalIndex !== -1) {

        const updatedAnimalsArray = [...allAnimalsArray];
        updatedAnimalsArray[animalIndex] = updatedAnimal; 
        setAnimal(updatedAnimalsArray);
    }
};


export const updateBookArray = (allBooksArray, setBooks, updatedBook) => {
    const bookIndex = allBooksArray.findIndex(book => book._id === updatedBook._id);
   
    if (bookIndex !== -1) {
        const updatedBooksArray = [...allBooksArray];
        updatedBooksArray[bookIndex] = updatedBook; 
        setBooks(updatedBooksArray);
    }
};
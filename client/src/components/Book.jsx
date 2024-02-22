"use client"
import { useEffect, useState } from "react";
import EditBookModal from "./modals/updateBooksModal";
import AddBookModal from "./modals/AddBookModal"; 
import { MdModeEditOutline, MdAdd } from "react-icons/md"; 
import Loader from "./Loader/Loader";

const Book = ({ allBooks, setAllBooksArray }) => {
    const [openEditBookModal, setOpenEditBookModal] = useState(false);
    const [selectedBook, setSelectedBook] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (allBooks)
            setIsLoading(false);
    }, [allBooks]);

    return (
        <>
            <div className="flex flex-col gap-4 w-full p-4  justify-between">
                <h1 className="text-2xl font-medium w-full">Favorite Books</h1>

                {!isLoading ? (
                    <div className="grid grid-cols-2 w-full justify-center gap-4 overflow-auto">
                        {allBooks.map((book, index) => (
                            <div key={index} className="border px-4 py-2 shadow-lg rounded-lg">
                                <div className="flex justify-between">
                                    <h2 className="text-lg font-medium">{book?.title}</h2>
                                    <div onClick={() => {
                                        setSelectedBook(book);
                                        setOpenEditBookModal(true);
                                    }}>
                                        <MdModeEditOutline />
                                    </div>
                                </div>
                                <p><span className="text-sm font-medium">Author:</span> {book.author}</p>
                                <p><span className=" text-sm font-medium">Genre:</span> {book.genre}</p>
                                <p><span className=" text-sm font-medium">Year:</span> {book.year}</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="flex mt-8 min-w-full justify-center items-end">
                        <Loader />
                    </div>
                )}
            </div>

            <EditBookModal
                open={openEditBookModal}
                setOpen={setOpenEditBookModal}
                book={selectedBook}
                setBook={setAllBooksArray}
                allBooks={allBooks}
            />
        </>
    );
}

export default Book;

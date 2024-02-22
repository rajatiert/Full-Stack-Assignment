"use server"
import Sidebar from "@/components/Sidebar";
import HomeContainer from "@/components/Home";
import { getAllBooks , getAllAnimals } from "@/api/api";

export default async function Home() {

  const allBooks = await getAllBooks();
  const allAnimals = await getAllAnimals();

  return (
    <div className="flex gap-2">
      <div>
        <Sidebar/>
      </div>
      <div className=" flex flex-col w-full h-screen ">
        <HomeContainer allBooks = {allBooks} allAnimals = {allAnimals} />
      </div>
    </div>
  );
}

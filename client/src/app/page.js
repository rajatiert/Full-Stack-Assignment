
import Sidebar from "@/components/Sidebar/Sidebar";
import HomeContainer from "@/components/Home";
import { getAllBooks , getAllAnimals } from "@/api/api";

export default  function Home() {


  return (
    <div className="flex gap-2">
      <div>
        <Sidebar/>
      </div>
      <div className=" flex flex-col w-full h-screen ">
        <HomeContainer  />
      </div>
    </div>
  );
}

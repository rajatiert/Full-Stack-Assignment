"use client"
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import Book from "./Book";
import Animal from "./Animal";
import AddContent from "./AddContent";
import Header from "./Header/Header";
import { useState, useEffect } from "react";
import {  getAllAnimals , getAllBooks , getApiCalls} from "@/api/api";

const fetchData = async (setAllBooksArray,setAllAnimalsArray )=>{

    const allBooks = await getAllBooks();
    setAllBooksArray(allBooks)
    const allAnimals = await getAllAnimals();
    setAllAnimalsArray(allAnimals)
  

}

const fetchApiCount = async (setApiCalls)=>{
    const count  = await getApiCalls();
    setApiCalls(count);
}

const HomeContainer = ({  }) => {

    const [allBooksArray, setAllBooksArray] = useState([]);
    const [allAnimalsArray, setAllAnimalsArray] = useState([]);
    const [apiCall , setApiCalls] = useState(null);

    useEffect(()=>{
      fetchData(setAllBooksArray, setAllAnimalsArray);
    },[])

    useEffect(()=>{
        fetchApiCount(setApiCalls);
    },[allAnimalsArray , allBooksArray])

    return (
        <div className="w-full px-4 sm:px-6 lg:px-8 flex flex-col gap-4 ">
            <Header />
            <div className="flex flex-col w-full h-screen border-[1px] border-[#CFCFCF] rounded-lg ">
                <PanelGroup className="" autoSaveId="example" direction="vertical">
                    <Panel defaultSizePercentage={50}>
                        <PanelGroup autoSaveId="example2" direction="horizontal">
                            <Panel className="border-r-4 border-black" defaultSizePercentage={50}>
                                <Book allBooks={allBooksArray} setAllBooksArray={setAllBooksArray} />
                            </Panel>
                            <PanelResizeHandle className="border-r-2 border-black" />
                            <Panel defaultSizePercentage={50}>
                                <Animal allAnimals={allAnimalsArray} setAllAnimalsArray={setAllAnimalsArray} />
                            </Panel>
                        </PanelGroup>
                        
                    </Panel>
                    <PanelResizeHandle className="border-b-2 border-black" />
                    <Panel defaultSizePercentage={50}>
                        <AddContent allBooks={allBooksArray} allAnimals={allAnimalsArray} setBook={setAllBooksArray} setAnimal={setAllAnimalsArray} apiCall = {apiCall} />
                    </Panel>
                  
                </PanelGroup>
            </div>
        </div>
    );
}

export default HomeContainer;

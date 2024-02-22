"use client"
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import One from "@/components/One";
import Two from "@/components/Two";
import Three from "@/components/Three";
import Header from "./Header";
import { useState, useEffect } from "react";
import { updateAnimal } from "@/api/api";

const HomeContainer = ({ allBooks, allAnimals }) => {

    const [allBooksArray, setAllBooksArray] = useState([]);
    const [allAnimalsArray, setAllAnimalsArray] = useState([]);

    useEffect(() => {
        setAllBooksArray(allBooks);
    }, [allBooks])

    useEffect(() => {
        setAllAnimalsArray(allAnimals);
    }, [allAnimals])

    return (
        <div className="w-full px-4 sm:px-6 lg:px-8 flex flex-col gap-4 ">
            <Header />
            <div className="flex flex-col w-full h-screen border-[1px] border-[#CFCFCF] rounded-lg ">
                <PanelGroup className="" autoSaveId="example" direction="vertical">
                    <Panel defaultSizePercentage={50}>
                        <PanelGroup autoSaveId="example2" direction="horizontal">
                            <Panel className="border-r-4 border-black" defaultSizePercentage={50}>
                                <One allBooks={allBooksArray} setAllBooksArray={setAllBooksArray} />
                            </Panel>
                            <PanelResizeHandle className="border-r-2 border-black" />
                            <Panel defaultSizePercentage={50}>
                                <Two allAnimals={allAnimalsArray} setAllAnimalsArray={setAllAnimalsArray} />
                            </Panel>
                        </PanelGroup>
                        
                    </Panel>
                    <PanelResizeHandle className="border-b-2 border-black" />
                    <Panel defaultSizePercentage={50}>
                        <Three allBooks={allBooksArray} allAnimals={allAnimalsArray} setBook={setAllBooksArray} setAnimal={setAllAnimalsArray} />
                    </Panel>
                  
                </PanelGroup>
            </div>
        </div>
    );
}

export default HomeContainer;

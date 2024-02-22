const Header = ()=>{
    return  <div className='flex flex-col gap-4 pt-5'>
    <div className='flex px-0  flex-row w-full justify-between'>
        <div className="flex flex-col gap-2 w-full">
            <div className="flex flex-col gap-1">
                <h1 className="text-3xl font-bold  leading-6 text-[#4D8FAC] " >DataNeuron</h1>
                <p className="text-zing-gray-500 font-light">Scaling the development of AI models by providing better data and explainability of AI</p>
            </div>
        </div>
    </div>
    <div className="w-full border-[1px] border-[#CFCFCF]"></div>
</div>;
}

export default Header;
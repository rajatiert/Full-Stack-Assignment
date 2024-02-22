import Image from "next/image"
const Loader = ()=>{
    return <div className="w-full flex flex-col justify-center rounded-b-lg items-center">
        <Image src="loading.svg" width="100" height="100" alt="loader" />
        <p>Fetching Data,it could take <span className="font-bold"> few seconds first time </span></p>
    </div>
}


export default Loader;
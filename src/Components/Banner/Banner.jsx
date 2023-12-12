import { FaDownload} from "react-icons/fa";

const PDF_File='../../../public/kudrot-e-khoda-resume.pdf';
const Banner = () => {
 const downloadFile=(url)=>{
    const fileName=url.split('public/').pop();
        const aTag=document.createElement('a');
        aTag.href=url;
        aTag.setAttribute('download',fileName);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
 }

    return (
        <div >
             <div className="flex items-center justify-between">
               
            <div className="max-w-xl mx-auto">
                <h3 className="text-[#474747] text-3xl ">Hi, I am</h3>
                <h1 className="text-3xl md:text-5xl font-medium md:font-bold">Md. Kudrot-E-Khoda</h1>
                <p className="text-xl mt-4">A Mern Stack developer on a mission to hone my skills and knowledge in the vast world of technology! <br />
                <span className="text-[#fd670a] font-bold mt-2">Final Year Student | Department of CSE</span>
                 </p>
                <button onClick={()=>{downloadFile(PDF_File)}} className="btn bg-[#fd670a] text-white hover:bg-[#0afd6f] hover:text-[#fd670a] text-center text-2xl font-semibold mt-3"> <FaDownload /> Download CV</button>
            </div>
            
            <div className="">

                <img src="https://i.ibb.co/Wvpp8M1/header-bg.png" alt="" />
            </div>
        </div>
        </div>
    );
};

export default Banner;
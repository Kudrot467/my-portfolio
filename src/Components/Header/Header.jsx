import Banner from "../Banner/Banner";
import Navbar from "../Navbar/Navbar";

const Header = () => {
    return (
        <div className="bg-[#fff3f3]">
             <Navbar></Navbar>
             <Banner></Banner>
        </div>
    );
};

export default Header;
import Menu from "./Menu";
import Modal from "./Modal";

const Hero = () => {
    return (
        <>
            <div className="absolute top-[20px] left-[20px] md:top-[60px] md:left-[100px]" id="Hero">
                <h1 className="drop-shadow-md text-primary md:text-[60px]"><span className="text-[30px]">Hi,</span><br />
                    My name is Arian
                </h1>
                <p className="text-white mt-6 text-[20px]">Welcome to my Portfolio</p>
            </div>

            <div className="absolute bottom-[20px] right-[20px] " id="Hero">
                <p className="hidden md:block text-white mt-6 text-[20px]">
                    To explore this rocket from various angles,
                    <span><br />simply left-click on it and drag your cursor around.</span>
                </p>
            </div>
            <div className="md:hidden block">
                <Modal />
            </div>
            <Menu />
        </>
    );
};
export default Hero;
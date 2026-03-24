import './styles/App.css'
import {IarrowLeft, IarrowRight} from "../commonSrc/icons/iconsFunc.tsx";

function SideBar() {
  return (
    <div className="fixed top-10 left-0 h-[90%] w-4 bg-forth-dark z-[9999] rounded-r-2xl ">
      <div className="flex flex-col items-center justify-center h-full cursor-pointer">
        <IarrowLeft size={9} />
        <IarrowRight size={9} />
      </div>
    </div>
  );
}

export default SideBar

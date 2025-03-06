import Sidebar from "@/components/layout/sidebar";
import MainContent from "@/components/layout/main-content";

export default function Portfolio() {
    return (
        <div className="flex flex-row h-screen w-screen bg-[#212121] overflow-hidden flex-1">
            <Sidebar/>
            <MainContent/>
        </div>


    )
}
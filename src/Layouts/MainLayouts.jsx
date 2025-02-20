import { Outlet } from "react-router-dom";

const MainLayouts = () => {
    return (
        <div>
            <div className="min-h-screen">
                <Outlet/>
            </div>
        </div>
    );
};

export default MainLayouts;
import Header from "./Header";
import Slidebar from "./Slidebar";

function DefaultLayout({children}){
    return(
        <div>
            <Header />
            <div className="Container">
                <Slidebar />
                <div className="Content">
                    {children}
                </div>
            </div>
        </div>
    )
} 
export default DefaultLayout
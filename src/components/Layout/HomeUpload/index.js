import Header from "../component/Header"

function UploadHeaderLayout({children}){
    return(
        <div>
            <Header />
            <div className="Container">
                <div className="Content">
                    {children}
                </div>
            </div>
        </div>
    )
} 
export default UploadHeaderLayout
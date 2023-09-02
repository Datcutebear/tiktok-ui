import Header from "../component/Header"
import PropTypes from 'prop-types';

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

UploadHeaderLayout.propTypes = {
    children: PropTypes.node.isRequired,
}
export default UploadHeaderLayout
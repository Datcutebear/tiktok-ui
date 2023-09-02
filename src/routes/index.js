import config from '~/configs' 

import Home from "~/pages/home";
import Following from "~/pages/Following";
import Profile from "~/pages/Profile";
import Upload from "~/pages/Upload";
import UploadHeaderLayout from "~/layouts/HomeUpload";
import Search from "~/pages/Search";


const privateRoutes = [
    
]

const publicRoutes = [
    {path: config.routes.home, element: Home},
    {path: config.routes.following, element:Following},
    {path: config.routes.profile, element:Profile},   
    {path: config.routes.upload, element:Upload, layout: UploadHeaderLayout},
    {path: config.routes.search, element:Search, layout: null}
]

export {privateRoutes, publicRoutes}
import routesConfig from '~/configs/routes' 

import Home from "~/pages/home";
import Following from "~/pages/Following";
import Profile from "~/pages/Profile";
import Upload from "~/pages/Upload";
import UploadHeaderLayout from "~/components/Layout/HomeUpload";
import Search from "~/pages/Search";


const privateRoutes = [
    
]

const publicRoutes = [
    {path: routesConfig.home, element: Home},
    {path: routesConfig.following, element:Following},
    {path: routesConfig.profile, element:Profile},   
    {path: routesConfig.upload, element:Upload, layout: UploadHeaderLayout},
    {path: routesConfig.search, element:Search, layout: null}
]

export {privateRoutes, publicRoutes}
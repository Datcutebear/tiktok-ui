import Home from "~/pages/home";
import Following from "~/pages/Following";
import Profile from "~/pages/Profile";
import Upload from "~/pages/Upload";
import UploadHeaderLayout from "~/components/Layout/HomeUpload";
import Search from "~/pages/Search";

const privateRoutes = [
    
]

const publicRoutes = [
    {path: '/', component: Home},
    {path: '/following', component:Following},
    {path: '/profile', component:Profile},
    {path: '/upload', component:Upload, layout: UploadHeaderLayout},
    {path: '/search', component:Search, layout: null}
]

export {privateRoutes, publicRoutes}
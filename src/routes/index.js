import Home from '~/pages/Home'
import {HeaderOnly} from '~/components/Layout'
import Following  from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';

const publicRoutes = [
    {path : '/', component : Home},
    {path : '/following', component : Following},
    {path : '/profile', component : Profile},
    {path : '/upload', component : Upload ,layout : HeaderOnly},
]

const privateRoutes = [


]

export {publicRoutes, privateRoutes}
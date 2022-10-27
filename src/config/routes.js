import GeneralLayout from "../Layouts/GeneralLayout";
import SignIn from "../pages/Admin/signIn";
import Contact from "../pages/contact";
import Home from '../pages/home'
import NotFound from '../pages/notfound/notFound'

const routesAdmin = [
    {
        path: "/admin",
        layout: GeneralLayout,
        component: SignIn
    },
    {
        path: "/admin/contact",
        layout: GeneralLayout,
        component: Contact
    }
]
const routesGeneral = [
    {
        path: "/",
        layout: GeneralLayout,
        component: Home
    },
    {
        path: "*",
        layout: GeneralLayout,
        component: NotFound
    }
]
const projectRoutes = [...routesAdmin, ...routesGeneral]
export default projectRoutes
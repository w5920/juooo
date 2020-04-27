import Home from '../../views/Index/Home'
import TheatreList from '../../views/Index/TheatreList'
import Eticket from '../../views/Index/Eticket'
import Myjuooo from '../../views/Index/Myjuooo'

export default [
    {
        path: '/TheatreList',
        component: TheatreList
    },
    {
        path: '/Eticket',
        component: Eticket,
        meta: { isAuthorization: true }
    },
    {
        path: '/Myjuooo',
        component: Myjuooo,
        meta: { isAuthorization: true },
    },
    {
        path: '/',
        exact: true,
        component: Home
    },
]
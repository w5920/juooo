import Index from '../views/Index'
import indexRouter from './Index/index'
import homeRouter from './Home'
import theatreRouter from './TheatreList'
import eticketRouter from './Eticket'
import myjuoooRouter from './Myjuooo'
import Error from '../views/Error'
export default [
    ...homeRouter,
    ...theatreRouter,
    ...eticketRouter,
    ...myjuoooRouter,
    {
        path: '/error',
        component: Error
    },
    {
        path: '/',
        component: Index,
        children: [
            ...indexRouter
        ]
    }

]
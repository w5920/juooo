import Index from '../views/Index'
import indexRouter from './Index/index'
import homeRouter from './Home'
import theatreRouter from './TheatreList'
import eticketRouter from './Eticket'
import myjuoooRouter from './Myjuooo'
import loginRouter from './Login'
import Error from '../views/Error'
export default [
    ...homeRouter,
    ...theatreRouter,
    ...eticketRouter,
    ...myjuoooRouter,
    ...loginRouter,
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
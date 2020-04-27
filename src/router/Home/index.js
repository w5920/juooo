import Activity from '../../views/Home/Activity'
import Calendar from '../../views/Home/Calendar'
import Cardproduct from '../../views/Home/Cardproduct'
import Integral from '../../views/Home/Integral'
import Plus from '../../views/Home/Plus'
import SelectCity from '../../views/Home/SelectCity'
import Vip from '../../views/Home/Vip'
import ShowDetail from '../../views/Home/ShowDetail'
export default [
    {
        path: '/Activity',
        component: Activity
    },
    {
        path: '/Calendar',
        component: Calendar
    },
    {
        path: '/Cardproduct',
        component: Cardproduct
    },
    {
        path: '/Integral',
        component: Integral
    },
    {
        path: '/Plus',
        component: Plus
    },
    {
        path: '/SelectCity',
        component: SelectCity
    },
    {
        path: '/Vip',
        component: Vip
    },
    {
        path: '/ShowDetail',
        component: ShowDetail
    },
]
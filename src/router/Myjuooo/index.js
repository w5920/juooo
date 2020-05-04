import BuyPlus from '../../views/MyJuooo/BuyPlus'
import Feedback from '../../views/MyJuooo/Feedback'
import MyOrderList from '../../views/MyJuooo/MyOrderList'
import MyWallet from '../../views/MyJuooo/MyWallet'
import VIP from '../../views/MyJuooo/VIP'
import Points from '../../views/MyJuooo/Points'
import Certification from '../../views/MyJuooo/Certification'
import Coupon from '../../views/MyJuooo/Coupon'
import MyAddress from '../../views/MyJuooo/MyAddress'
import MyBalance from '../../views/MyJuooo/MyBalance'
import Mysecurity from '../../views/MyJuooo/Mysecurity'
import AboutUs from '../../views/MyJuooo/Mysecurity/AboutUs'
import MyAccountSafefrom from '../../views/MyJuooo/Mysecurity/myAccountSafe'

export default [
    {
        path: '/BuyPlus',
        component: BuyPlus
    },
    {
        path: '/VIP',
        component: VIP
    },
    {
        path: '/Feedback',
        component: Feedback
    },
    {
        path: '/MyOrderList',
        component: MyOrderList
    },
    {
        path: '/MyWallet',
        component: MyWallet
    },
    {
        path: '/Points',
        component: Points
    },
    {
        path: '/Myjuooo/Coupon',
        component: Coupon
    },
    {
        path: '/Myjuooo/MyBalance',
        component: MyBalance
    },
    {
        path: '/Myjuooo/MyAddress',
        component: MyAddress
    },
    {
        path: '/Myjuooo/Mysecurity',
        component: Mysecurity
    },
    {
        path: '/Myjuooo/Certification',
        component: Certification
    },
    {
        path: '/Myjuooo/AboutUs',
        component: AboutUs
    },
    {
        path: '/Myjuooo/MyAccountSafefrom',
        component: MyAccountSafefrom
    },
]
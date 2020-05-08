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
import MyAccountSafe from '../../views/MyJuooo/Mysecurity/myAccountSafe'
import UserProtocol from '../../views/MyJuooo/Mysecurity/UserProtocol'
export default [
    {
        path: '/BuyPlus',
        component: BuyPlus,
    },
    {
        path: '/VIP',
        component: VIP,
    },
    {
        path: '/Feedback',
        component: Feedback,
    },
    {
        path: '/MyOrderList',
        component: MyOrderList,
        meta: { isAuthorization: true }
    },
    {
        path: '/MyWallet',
        component: MyWallet,
        meta: { isAuthorization: true }
    },
    {
        path: '/Points',
        component: Points,
    },
    {
        path: '/Myjuooo/Coupon',
        component: Coupon,
        meta: { isAuthorization: true }
    },
    {
        path: '/Myjuooo/MyBalance',
        component: MyBalance,
        meta: { isAuthorization: true }
    },
    {
        path: '/Myjuooo/MyAddress/',
        component: MyAddress,
        meta: { isAuthorization: true }
    },
    {
        path: '/Myjuooo/Mysecurity',
        component: Mysecurity,
        meta: { isAuthorization: true }
    },
    {
        path: '/Myjuooo/Certification',
        component: Certification,
        meta: { isAuthorization: true }
    },
    {
        path: '/Myjuooo/AboutUs',
        component: AboutUs,
        meta: { isAuthorization: true }
    },
    {
        path: '/Myjuooo/MyAccountSafe',
        component: MyAccountSafe,
        meta: { isAuthorization: true }
    },
    {
        path: '/Myjuooo/UserProtocol',
        component: UserProtocol,
        meta: { isAuthorization: true }
    },
]
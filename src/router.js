import BodyPage from './components/BodyPage.vue'
import PaymentMethod from './components/HandlingTariff/PaymentMethod.vue'
import PaymentDetails from './components/HandlingTariff/PaymentDetails.vue'
import PaymentWorkspace from "@/components/HandlingTariff/PaymentWorkspace"
import PersonalAccount from "@/components/PersonalAccount/PersonalAccount.vue"
import PersonalProfile from "@/components/PersonalAccount/PersonalProfile";
import PersonalMethod from "@/components/PersonalAccount/PersonalMethod";
import NotFound from "@/components/NotFound";

export const routes = [
    {
        path: '/main',
        name: 'BodyPage',
        component: BodyPage,
        meta: {
            title: 'Личный кабинет'
        }
    },
    {
        path: '/method',
        name: 'PaymentMethod',
        component: PaymentMethod,
        props: true,
        meta: {
            title: 'Выберите способ оплаты'
        }
    },
    {
        path: '/details',
        name: 'PaymentDetails',
        component: PaymentDetails,
        props: true,
        meta: {
            title: 'Реквизиты для оплаты'
        }
    },
    {
        path: '/workspace',
        name: 'PaymentWorkspace',
        component: PaymentWorkspace,
        meta: {
            title: 'Установите URL-адрес'
        }
    },
    {
        path: '/cabinet',
        name: 'PersonalAccount',
        component: PersonalAccount,
        props: true,
        meta: {
            title: 'Профиль'
        },
        children: [
            {
                path: 'profile',
                name: 'Profile',
                component: PersonalProfile,
                meta: {
                    title: 'Профиль'
                }
            },
            {
                path: 'method',
                name: 'Method',
                component: PersonalMethod,
                meta: {
                    title: 'Способы оплаты'
                }
            }
        ]
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound,
        meta: {
            title: '404'
        }
    }
]
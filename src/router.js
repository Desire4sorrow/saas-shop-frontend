import HomePage from './components/HomePage.vue'
import PaymentMethod from './components/HandlingTariff/PaymentMethod.vue'
import PaymentDetails from './components/HandlingTariff/PaymentDetails.vue'
import PaymentWorkspace from "@/components/HandlingTariff/PaymentWorkspace";

export const routes = [
    {
        path: '/account',
        name: 'HomePage',
        component: HomePage,
    },
    {
        path: '/account/method',
        name: 'PaymentMethod',
        component: PaymentMethod,
    },
    {
        path: '/account/details',
        name: 'PaymentDetails',
        component: PaymentDetails,
        props: true
    },
    {
        path: '/account/workspace',
        name: 'PaymentWorkspace',
        component: PaymentWorkspace,
        props: true
    },
]
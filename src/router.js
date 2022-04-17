import HomePage from './components/HomePage.vue'
import PaymentMethod from './components/PaymentMethod.vue'
import PaymentDetails from './components/PaymentDetails.vue'

export const routes = [
    {
        path: '/account',
        name: HomePage,
        component: HomePage,
    },
    {
        path: '/account/method',
        name: PaymentMethod,
        component: PaymentMethod,
    },
    {
        path: '/account/details',
        name: PaymentDetails,
        component: PaymentDetails,
    }
]
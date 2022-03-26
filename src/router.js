import HomePage from './components/HomePage.vue'
import PaymentMethod from './components/PaymentMethod.vue'
import PaymentDetails from './components/PaymentDetails.vue'
import SignIn from './components/SignIn.vue'
import PersonalPage from './components/PersonalPage.vue'

export const routes = [
    {
        path: '/',
        name: HomePage,
        component: HomePage,
    },
    {
        path: '/method',
        name: PaymentMethod,
        component: PaymentMethod,
    },
    {
        path: '/details',
        name: PaymentDetails,
        component: PaymentDetails,
    },
    {
        path: '/signin',
        name: SignIn,
        component: SignIn,
    },
    {
        path: '/profile',
        name: PersonalPage,
        component: PersonalPage,
    }
]
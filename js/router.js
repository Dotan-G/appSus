import homePage from './pages/home-page.js'
import mailApp from './apps/mail/pages/email-app.js'
import keepApp from './apps/keep/pages/keep-app.js'
import mailDetails from './apps/mail/pages/mail-details.js'


const routes = [
    {
        path: '/',
        component: homePage
    },
    {
        path: '/mail',
        component: mailApp
    },
    {
        path: '/keep',
        component: keepApp
    },
    {
        path: '/mail/:mailId',
        component: mailDetails
    },
]

export const router = new VueRouter({ routes })
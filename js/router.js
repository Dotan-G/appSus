import homePage from './pages/home-page.js'
import mailApp from './apps/mail/pages/email-app.js'
import keepApp from './apps/keep/pages/keep-app.js'
import mailDetails from './apps/mail/pages/mail-details.js'
import mailStarred from './apps/mail/pages/mail-starred.js'


const routes = [
    {
        path: '/',
        component: homePage
    },
    {
        path: '/mail',
        component: mailApp,
        children: [
            {
                path: ':mailId',
                component: mailDetails
            },
            {
                path: '/starred',
                component: mailStarred
            }
        ]
    },
    {
        path: '/keep',
        component: keepApp
    },
]

export const router = new VueRouter({ routes })
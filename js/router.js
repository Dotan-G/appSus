import homePage from './pages/home-page.js'
import mailApp from './apps/mail/pages/email-app.js'
import keepApp from './apps/keep/pages/keep-app.js'
// import bookApp from './apps/book/'


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
    // {
    //     path: '/book',
    //     component: bookApp
    // },
]

export const router = new VueRouter({ routes })
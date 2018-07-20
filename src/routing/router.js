import Vue from 'vue'
import Router from 'vue-router'
import UserProfile from '../views/UserProfile'
import NotFound from '../views/NotFound.vue'
import App from '../App'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'APP',
            component: UserProfile,
            children: [
                {
                    path: 'user/:username',
                    name: 'USER_DETAIL',
                    component: UserProfile
                },
                // {
                //     path: '*',
                //     name: 'NOT_FOUND',
                //     component: NotFound,
                //     redirect: {
                //         name: 'USER_DETAIL',
                //         params: {
                //             username: 'AmitMundra54'
                //         }
                //     }
                // }
            ]
        }
    ]

})

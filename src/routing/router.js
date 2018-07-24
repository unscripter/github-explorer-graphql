import Vue from 'vue'
import Router from 'vue-router'
import LoadingComponent from '@/components/Loading'
import ErrorComponent from '@/components/Error'

Vue.use(Router)

const loadView = view => import(`@/views/${view}.vue`)


export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'APP',
            component: () => loadView('UserDetail'),
            children: [
                {
                    path: 'user/:username',
                    name: 'USER_DETAIL',
                    component: () => loadView('UserDetail')
                },
                {
                    path: 'user/username/:reponame',
                    name: 'REPO_DETAIL',
                    component: () => loadView('RepoDetail'),
                },
                {
                    path: '*',
                    name: 'NOT_FOUND',
                    component: () => loadView('NotFound'),
                    redirect: {
                        name: 'USER_DETAIL',
                        params: {
                            username: 'AmitMundra54'
                        }
                    }
                }
            ]
        }
    ]

})

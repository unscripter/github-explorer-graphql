import Vue from 'vue'
import Router from 'vue-router'
import { lazyLoadView } from '@/utils/dynamicLoading'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'APP',
            component: () => lazyLoadView('UserDetail'),
            children: [
                {
                    path: 'user/:username',
                    name: 'USER_DETAIL',
                    component: () => lazyLoadView('UserDetail')
                },
                {
                    path: 'user/username/:reponame',
                    name: 'REPO_DETAIL',
                    component: () => lazyLoadView('RepoDetail'),
                },
                {
                    path: '*',
                    name: 'NOT_FOUND',
                    component: () => lazyLoadView('NotFound'),
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

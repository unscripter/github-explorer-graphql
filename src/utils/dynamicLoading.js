import LoadingComponent from '@/components/Loading'
import ErrorComponent from '@/components/Error'

const loadView = view => import(`@/views/${view}.vue`);
const loadComponent = component => import(`@/components/${component}.vue`)


export const lazyLoadView = AsyncView => {
  debugger;
    const AsyncHandler = () => ({
      component: loadView(AsyncView),
      loading: LoadingComponent,
      error: ErrorComponent,
      delay: 200,
      timeout: 10000,
    })
  
    return Promise.resolve({
      functional: true,
      render(h, { data, children }) {
        // Transparently pass any props or children
        // to the view component.
        return h(AsyncHandler, data, children)
      },
    })
  }

  export const lazyLoadComponent = AsyncView => {
    debugger
    const AsyncHandler = () => ({
      component: loadComponent(AsyncView),
      loading: LoadingComponent,
      error: ErrorComponent,
      delay: 200,
      timeout: 10000,
    })
  
    return Promise.resolve({
      functional: true,
      render(h, { data, children }) {
        return h(AsyncHandler, data, children)
      },
    })
  }
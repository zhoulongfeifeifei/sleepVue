import Vue from 'vue'
import Router from 'vue-router'
import patientLogin from '@/components/patient/patientLogin'
import index from '@/components/index'
import patientIndex from '@/components/patient/patientIndex'
import mine from '@/components/mine/mine'
import myProfile from '@/components/mine/myProfile'
import expertsBar from '@/components/expertsBar/expertsBar'
Vue.use(Router)
const router = new Router({
    routes: [{
            path: '/',
            name: 'patientLogin',
            component: patientLogin
        },
        {
            path: '/index',
            name: 'index',
            component: index
        },
        {
            // path: '/patientIndex/:id/:dataId',
            path: '/patientIndex',
            name: 'patientIndex',
            component: patientIndex
        },
        {
            path: '/mine',
            name: 'mine',
            component: mine
        },
        {
            path: '/myProfile',
            name: 'myProfile',
            component: myProfile
        },
        {
            path: '/expertsBar',
            name: 'expertsBar',
            component: expertsBar
        }
    ]
})
export default router
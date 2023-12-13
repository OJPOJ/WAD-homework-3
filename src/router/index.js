import {createRouter, createWebHashHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView  from "../views/LoginView.vue";
import SignupView from "../views/SignupView.vue";
import ContactsView from "../views/ContactsView.vue";
import AddPost from "../views/AddPost.vue";
import auth from "../auth";

const routes = [{
    path: '/',
    name: 'Home',
    component: HomeView,
    beforeEnter: async(to, from, next) => {
        let authResult = await auth.authenticated();
        if (!authResult) {
            next('/login')
        } else {
            next();
        }
    }
}, {
    path: '/login',
    name: 'login',
    component: LoginView
},{
    path: '/signup',
    name: 'Signup',
    component: SignupView
}, {
    path: "/contacts",
    name: "Contacts",
    component: ContactsView
}, {
    path: "/addpost",
    name: "AddPost",
    component: AddPost,
    beforeEnter: async(to, from, next) => {
        let authResult = await auth.authenticated();
        if (!authResult) {
            next('/login')
        } else {
            next();
        }
    }
}]

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router
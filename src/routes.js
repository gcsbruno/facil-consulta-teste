import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router ({
    routes: [
        {
            path: "/",
            name: "Página 1",
            component: () => import("./views/Pagina1")
        },
        {
            path: "/Pagina2",
            name: "Página 2",
            component: () => import("./views/Pagina2")
        },
        {
            path: "/Pagina3",
            name: "Pagina 3",
            component: () => import("./views/Pagina3")
        },
        {
            path: "/Pagina4",
            name: "Pagina 4",
            component: () => import("./views/Pagina4")
        }

    ]
})
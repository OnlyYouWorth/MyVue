import VueRouter from "vue-router";
import Home from "../pages/Home.vue";
import About from "../pages/About.vue";
import News from "@/pages/News.vue";
import Message from "@/pages/Message.vue";
import Detail from "@/pages/Detail.vue";


const router = new VueRouter({
    routes: [
        {
            path: "/home",
            component: Home,
            children: [
                {
                    path: "news",
                    component: News
                },
                {
                    path: "message",
                    component: Message,
                    children: [
                        {
                            path: "detail",
                            component: Detail
                        }
                    ]
                }
            ]
        },
        {
            path: "/about",
            component: About
        },
    ]

})

export default router

import Vue from 'vue'
import Router from 'vue-router'

// import custom created components
import Home from '../components/Home'
import SearchResults from '../components/SearchResults.vue'
import CarouselImage from '../components/CarouselImage.vue'
import UploadImage from '../components/UploadImage'
import DisplayGroup from '../components/DisplayGroup'
import CreateGroup from '../components/CreateGroup'
import UpdateGroup from '../components/UpdateGroup'
import Registration from '../components/User/Registration.vue'
import UserLogin from '../components/User/Login'
import Profile from '../components/User/Profile'
import EditImage from '../components/EditImage'
import UserImages from '../components/UserImage'
import Chat from '../components/Chat'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path:'/register',
            name:'Registration',
            component:Registration
        },
        {
            path:'/login',
            name:'UserLogin',
            component:UserLogin
        },
        {
            path:'/profile',
            name:'Profile',
            component:Profile
        },
        {
            path:'/profile/images',
            name:'UserImages',
            component:UserImages
        },
        {
            path:'/search-results',
            name:'SearchResults',
            component:SearchResults
        },
        {
            path:'/carousel-image/:id/:type',
            name:'CarouselImage',
            component:CarouselImage
        },
        {
            path:'/upload-image',
            name:'UploadImage',
            component:UploadImage
        },
        {
            path:'/group-display',
            name:'DisplayGroup',
            component: DisplayGroup
        },
        {
            path:'/create-group',
            name:'CreateGroup',
            component:CreateGroup
        },
        {
            path:'/update-group/:id',
            name:'EditGroup',
            component:UpdateGroup
        },
        {
            path:'/edit-image/:id',
            name:'EditImage',
            component:EditImage
        },
        {
            path:'/chat/:groupId',
            name:'Chat',
            component:Chat
        },
    ],
    mode:'history'
})

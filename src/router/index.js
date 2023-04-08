import { createRouter, createWebHistory } from 'vue-router'
import ProfileView from '../views/ProfileView.vue'
import SkillsView from '../views/SkillsView.vue'
import TechView from '../views/TechView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import PersonalityView from '../views/PersonalityView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'profile',
      component: ProfileView
    },
    {
      path: '/skills',
      name: 'skills',
      component: SkillsView
    },
    {
      path: '/tech',
      name: 'technologies',
      component: TechView
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsView
    },
    {
      path: '/personal-info',
      name: 'personal info',
      component: PersonalityView
    }
  ]
})

export default router

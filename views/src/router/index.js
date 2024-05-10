import { createRouter, createWebHistory } from 'vue-router'
import StudentsDashboard  from '../views/students/StudentsDashboard.vue'
import StudentsRegistrationView  from '../views/students/StudentsRegistrationView.vue'
import StudentsDetailView from '../views/students/StudentsDetailView.vue'
import StudentsView from '../views/students/StudentsView.vue'
import DepartmentsView from './../views/departments/DepartmentsView.vue'
import StaffRegistrationView from '../views/staff/StaffRegistrationView.vue'
import StaffDetailView from '../views/staff/StaffDetailView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'StudentDashBoard',
      component: StudentsDashboard 
    },
    {
      path: '/students/register',
      name: 'StudentsRegistrationView',
      component: StudentsRegistrationView
    },
    {
      path: '/students/studentsView',
      name: 'StudentsView',
      component: StudentsView
    },
    {
      path: '/students/detail',
      name: 'StudentsDetailView',
      component: StudentsDetailView
    } 

    {
      path: '/staff/register',
      name: 'StaffRegistrationView',
      component: StudentsRegistrationView
    },
    {
      path: '/staff/detail',
      name: 'StaffDetailView',
      component: StaffDetailView
    } 
  ]
})

export default router

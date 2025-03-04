import UserService from '@/services/user'

export default [
  {path: '/', component: () => import('layouts/home'), meta: {breadcrumb: 'Home'}, children: [
    {path: '', redirect: 'projects' },
    {path: 'projects', component: () => import('pages/projects'), meta: {breadcrumb: 'Projects'}, children: [
        {path: '', name:'projects', component: () => import('pages/projects/list')},
        {path: ':projectId', component: () => import('pages/projects/details'), meta: {breadcrumb: 'Project Details'}, children: [
            {path: '', redirect: 'general'},
            {path: 'general', name:'general', component: () => import('pages/projects/details/general')},
            {path: 'scopes', name:'scopes', component: () => import('pages/projects/details/scopes')},
            {path: 'documents', name:'documents', component: () => import('pages/projects/details/documents')},
            {path: 'reports', name:'reports', component: () => import('pages/projects/details/reports')},
            {path: 'submit-report', name:'submitReport', component: () => import('pages/projects/details/submit-report')},
        ]},
    ]},
    {path: 'datas', component: () => import('pages/datas'), meta: {breadcrumb: 'Datas'}, children: [
      {path: '', redirect: 'users'},
      {path: 'users', component: () => import('pages/datas/users')},
      {path: 'clients', component: () => import('pages/datas/clients')},
      {path: 'companies', component: () => import('pages/datas/companies')},
      {path: 'templates', component: () => import('pages/datas/templates')},
      {path: 'reports', component: () => import('pages/datas/reports')},
      {path: 'vulnerabilities', component: () => import('pages/datas/vulnerabilities')},
      {path: 'variables', component: () => import('pages/datas/variables')},
    ]},
    {path: 'data', component: () => import('pages/data'), meta: {breadcrumb: 'Datas'}, children: [
      {path: '', redirect: 'collaborators'},
      {path: 'collaborators', component: () => import('pages/data/collaborators')},
      {path: 'companies', component: () => import('pages/data/companies')},
      {path: 'clients', component: () => import('pages/data/clients')},
      {path: 'templates', component: () => import('pages/data/templates')},   
      {path: 'dump', component: () => import('pages/data/dump')},
      {path: 'custom', component: () => import('pages/data/custom')}
    ]},
    {path: 'vulnerabilities', component: () => import('pages/vulnerabilities'), meta: {breadcrumb: 'Vulnerabilities'}},
    {path: 'profile', component: () => import('pages/profile')},
    {path: 'settings', component: () => import('pages/settings')},
    {path: '403', name: '403', component: () => import('pages/403')},
    {path: '404', name: '404', component: () => import('pages/404')}
  ]},
  {path: '/login', component: () => import('pages/login')},
  {path: '*', redirect: '/'}
]



export default {
  path: '/',
  name: 'home',
  component: 'Layout',
  childrens: [
    {
      path: '',
      name: 'index',
      component: 'home',
    },
  ]
}
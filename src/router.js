import Index from './views/Index.vue';
import Test from './views/Test.vue';
import User from './views/User.vue';
import NullUser from './views/NullUser';
import BUser from './views/BUser';
import N from './views/N';

export default {
  routes: [
    {
      path: '*',
      component: N
    },
    {
      path: '',
      redirect: '/index'
    }, {
      path: '/index',
      component: Index
    }, {
      path: '/test',
      component: Test
    }, {
      path: '/users/:id',
      component: NullUser,
      children: [
        {
          path: '',
          components: {
            default: User,
            n: BUser
          }
        }, {
          path: 'x',
          components: {
            default: N,
            n: BUser
          }
        }
      ]
    }
  ]
};

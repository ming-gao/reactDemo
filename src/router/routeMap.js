import Loadable from 'react-loadable';
import Loading from '../components/Loading'

const Dashboard = Loadable({loader: () => import(/*webpackChunkName:'Dashboard'*/'../pages/Dashboard'),loading: Loading});

// eslint-disable-next-line
export default [
    { path: "/dashboard", component: Dashboard, roles: ["admin","editor","guest"] },
];

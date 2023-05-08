import { HomePage } from '../pages';
import { basePath } from './paths';

const routes = [
  {
    name: 'base',
    path: basePath,
    elem: <HomePage />,
  },
];

export { routes };

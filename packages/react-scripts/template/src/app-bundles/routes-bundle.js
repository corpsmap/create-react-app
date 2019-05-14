import { createRouteBundle } from 'redux-bundler';
import Home from '../containers/home';

export default createRouteBundle({
  '/': Home,
  '*': NotFound
})
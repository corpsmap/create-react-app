import { createRouteBundle } from 'redux-bundler';
import Home from '../containers/home';
import NotFound from '../containers/not-found';

export default createRouteBundle({
  '/': Home,
  '*': NotFound
})
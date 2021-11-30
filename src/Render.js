import {useRoutes} from 'hookrouter';
import Routes from './router'

function Render() {
  const routeResult = useRoutes(Routes)
  return routeResult
}

export default Render;

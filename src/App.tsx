import routes from '~react-pages';
import { useRoutes } from 'react-router-dom';

function App() {

  return (
      <div>
          {useRoutes(routes)}
      </div>
  )
}

export default App

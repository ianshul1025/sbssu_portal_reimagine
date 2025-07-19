import { RouterProvider } from 'react-router-dom'
import router from './routes/AppRoutes'

const App = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <RouterProvider router={router} />
    </div>
  )
}

export default App

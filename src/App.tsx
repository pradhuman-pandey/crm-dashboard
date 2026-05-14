import './App.css'
import DashboardLayout from './components/layout/DashboardLayout/DashboardLayout'
import { DashboardProvider } from './context/DashboardContext'
import DashboardPage from './pages/Dashboard/Dashboard'
function App() {
  

  return (
    <>
    <DashboardProvider>
    <DashboardLayout>
    <DashboardPage/>
    </DashboardLayout>
    </DashboardProvider>
    </>
  )
}

export default App

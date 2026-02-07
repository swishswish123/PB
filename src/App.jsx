import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ProjectDetail from './pages/ProjectDetail'
import CGM from './pages/work/CGM'
import JHU from './pages/work/JHU'
import Udacity from './pages/work/Udacity'

function App() {
return (
<Routes>
<Route path="/" element={<Home />} />
<Route path="/projects/:id" element={<ProjectDetail />} />
<Route path="/work-experience/CGM" element={<CGM />} />
<Route path="/work-experience/JHU" element={<JHU />} />
<Route path="/work-experience/Udacity" element={<Udacity />} />


</Routes>
)
}

export default App
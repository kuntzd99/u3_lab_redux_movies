import './styles/App.css'
import Movies from './components/Movies'
import MovieDetails from './components/MovieDetails'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div className="App">
      <h1>Movies</h1>
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/:id" element={<MovieDetails />} />
      </Routes>
    </div>
  )
}

export default App

import { useEffect } from 'react'
import { connect } from 'react-redux'
import { LoadMovies } from '../store/actions/MovieAction'
import { POSTER_PATH } from '../globals'
import { Link } from 'react-router-dom'

const mapStateToProps = ({ movieState }) => {
  return { movieState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovies: () => dispatch(LoadMovies())
  }
}

const Movies = (props) => {
  useEffect(() => {
    props.fetchMovies()
  }, [])

  return (
    <div className="movies">
      {props.movieState.movies.map((movie) => (
        <div key={movie.id}>
          <Link to={`/${movie.id}`}>
            <h3>{movie.original_title}</h3>
            <img src={`${POSTER_PATH}${movie.backdrop_path}`} alt="poster" />
          </Link>
        </div>
      ))}
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Movies)

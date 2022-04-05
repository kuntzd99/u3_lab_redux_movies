import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { LoadMovieDetails } from '../store/actions/MovieAction'
import { POSTER_PATH } from '../globals'

const mapStateToProps = ({ movieDetailsState }) => {
  return { movieDetailsState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovieDetails: (id) => dispatch(LoadMovieDetails(id))
  }
}

const MovieDetails = (props) => {
  const { id } = useParams()

  useEffect(() => {
    props.fetchMovieDetails(id)
  }, [id])

  return (
    <div>
      <h1>{props.movieDetailsState.movieDetails.title}</h1>
      <img
        src={`${POSTER_PATH}${props.movieDetailsState.movieDetails.poster_path}`}
        alt="poster"
      />
      <p>{props.movieDetailsState.movieDetails.overview}</p>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails)

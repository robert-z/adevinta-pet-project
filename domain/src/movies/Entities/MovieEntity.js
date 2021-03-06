import {Entity} from '@s-ui/domain'

class MovieEntity extends Entity {
  constructor({
    id,
    title,
    overview,
    releaseDate,
    voteAverage,
    voteCount,
    posterPath
  }) {
    super()

    this._id = id
    this._title = title
    this._overview = overview
    this._releaseDate = releaseDate
    this._voteAverage = voteAverage
    this._voteCount = voteCount
    this._posterPath = posterPath
  }

  toJSON = () => ({
    id: this._id,
    title: this._title,
    overview: this._overview,
    releaseDate: this._releaseDate,
    voteAverage: this._voteAverage,
    voteCount: this._voteCount,
    posterPath: this._posterPath
  })
}

export default MovieEntity

import { useFetchPhotos } from './reactQueryCustomHooks'

const Gallery = () => {
  const { isPending, isError, data } = useFetchPhotos()

  if (isPending) {
    return (
      <section className="image-container">
        <h4>Loading...</h4>
      </section>
    )
  }

  if (isError) {
    return (
      <section className="image-container">
        <h4>Error...</h4>
      </section>
    )
  }
  const results = data.results
  if (results.lenght < 1) {
    return (
      <section className="image-container">
        <h4>no results</h4>
      </section>
    )
  }
  return (
    <section className="image-container">
      {results.map((item) => {
        const { id, urls } = item
        const url = item?.urls?.regular
        return <img className="img" key={id} src={url} />
      })}
    </section>
  )
}
export default Gallery

import { useGlobalContext } from './context'

const SearchForm = () => {
  const { setSearchQuery } = useGlobalContext()
  const handleSubmit = (e) => {
    e.preventDefault()
    const searchValue = e.target.elements.search.value
    if (!searchValue) return
    setSearchQuery(searchValue)
  }
  return (
    <section>
      <h1 className="title">Unsplash Images</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          className="form-input search-input"
          placeholder="cat"
          name="search"
          type="text"
        />
        <button className="btn" type="submit">
          Search
        </button>
      </form>
    </section>
  )
}
export default SearchForm

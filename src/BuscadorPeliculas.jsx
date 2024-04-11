import { useState } from "react"


export const BuscadorPeliculas = () => {
    const urlBase = 'https://api.themoviedb.org3/search/movie'
    const API_KEY = 'acf5472e45e436d5026bfd4c5e792981'


 const [busqueda, SetBusqueda] = useState('')

 const [peliculas, setPeliculas] = useState('')

 const handleInputChange = (e) => {
    SetBusqueda(e.target.value)
 }

 const handleSubmit = (e) => {
    e.preventDefault()
    fetchPeliculas()
 }

 const fetchPeliculas = async () => {
    try {
        const response = await fetch(`${urlBase}?query=${busqueda}&api_Key=${API_KEY}`)
        const data = await response.json()
        setPeliculas(data)
    } catch (error) {
        console.error('Ha ocurrido un error: ',error)
    }
 }

  return (
    <div className="container">
        <h1 className="title">Buscador de películas</h1>

        <form onSubmit={handleSubmit}>
            <input type="text"
            placeholder="Escribí película"
            value={busqueda}
            onChange={handleInputChange}
            />
            <button type="submit" className="search-button">Buscar</button>
        </form>

        <div className="movie-list">
            {peliculas.map((pelicula) => (
            
            <div key={pelicula.id} className="movie-card"> 
                <img src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`} alt={pelicula.title} />
                <h2>{pelicula.title}</h2>
                <p>{pelicula.overview}</p>
            </div>

            ))}
        </div>
    </div>
  )
}

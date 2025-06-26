import { useState } from 'react'
import './App.css'
import type { PokemonProps } from './interfaces'
import { Chart } from './components/Chart'
import { View } from './components/View'
import { API_URL } from './contstants/contstants'

function App() {
  const [pokemonId, setPokemonId] = useState('')
  const [pokemonData, setPokemonData] = useState<PokemonProps | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleFetchPokemon = async () => {
    try {
      const response = await fetch(API_URL + pokemonId)
      const data = await response.json()
      console.log('response data:', data);
      setPokemonData(data)
      setError(null)
    } catch(err) {
      setPokemonData(null)
      setError("存在しないポケモンの情報が入力されました。")
      console.log("err:", err);
    }
  }

  return (
    <>
      <div>
        <h1>ポケモン図鑑</h1>
        <div className='search'>
          <input type="text" value={pokemonId} onChange={(e) => setPokemonId(e.target.value)} />
          <button type='button' onClick={handleFetchPokemon}>検索</button>
        </div>

        {error && <p>{error}</p>}
        {pokemonData && (
          <div className='pokemonView'> 
            <View {...pokemonData} />
            <Chart {...pokemonData} />
          </div>
        )}
      </div>
    </>
  )
}

export default App



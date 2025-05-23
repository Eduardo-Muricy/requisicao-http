// import { useEffect } from 'react'
import { useState } from 'react'
import './App.css'
import { useFetch } from './hooks/useFetch'

const url = 'http://localhost:3000/products'

function App() {
  //const [products, setProducts] = useState([])


const {data: items}= useFetch(url)

  /* useEffect(() => {
    async function getData() {
      const res = await fetch(url)
      const data = await res.json()
      setProducts(data)
    }

    getData()
  }, []) */

  const [name, setName] = useState('')
  const [price, setPrice] = useState('')


  const handleSubmit = async (e) => {
    e.preventDefault()

    const product = {
      name,
      price
    }
      const res = await fetch(url,{
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(product)
      })
      console.log(res)
  }



  return (
    <div>
      {items && items.map((product) => (
        <ul key={product.map}>
          <li> Produto:{product.name}</li>
          <li>preço: R${product.price * 5.20}</li>
        </ul>
      ))}

      <div  className='form-container '>
        <form onSubmit={handleSubmit}>

          <input type="text" placeholder='nome' value={name} onChange={(e) => setName(e.target.value)} />

          <input type="text" placeholder='preco' value={price} onChange={(e) => setPrice(e.target.value)} />

          <input type="submit" value="Enviar" />
        </form>
      </div>

    </div>
  )
}

export default App

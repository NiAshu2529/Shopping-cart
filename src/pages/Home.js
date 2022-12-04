import React from 'react'
import Product from '../components/Product'

const Home = () => {
  return (
    <>
    <h2 className="heading">Welcome to my store </h2><section>
          <h3>Products</h3>
          <Product />
      </section>
      </>

  )
}

export default Home
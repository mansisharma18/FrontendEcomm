import React from 'react'
import Header from './Header'
import "./Home.css"
import Product from './Product'

const Home = () => {
  return (
    <div>
      <Header/>
        <div className="home">

          
       <img
       className="home__image"
        src="amazon_img1.jpg"
        alt="amazon img"/>

        <div className="home__row">

    <Product 
    id='1'
    title='Healthcare products: How constant care provides best results'

    rating={5}
    price={222}
    image='https://m.media-amazon.com/images/I/41yinKzfimL._AC_SY400_.jpg'
                   />


<Product 
    id='1'
    title='Healthcare products: How constant care provides best results'

    rating={5}
    price={222}
    image='https://m.media-amazon.com/images/I/41RKmGSwLRL._AC_SY400_.jpg'
                   />


                   </div>



                   
        <div className="home__row">

<Product 
id='1'
title='Healthcare products: How constant care provides best results'

rating={5}
price={222}
image='https://m.media-amazon.com/images/I/31C-On2VUxL._AC_SY400_.jpg'
               />


<Product 
id='1'
title='Healthcare products: How constant care provides best results'

rating={5}
price={222}
image='https://m.media-amazon.com/images/I/516osUm7cIL._AC_SY400_.jpg'
               />

<Product 
id='1'
title='Healthcare products: How constant care provides best results'

rating={5}
price={222}
image='https://m.media-amazon.com/images/I/71bTr7BrZmL._AC_SY400_.jpg'
               />


               </div>
       </div>
        
        </div>
  )
}

export default Home
import React from 'react'
import women from '../women/w1'
import women from '../women/w2'
import women from '../women/w3'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'


const women =()=>{
    return(

        <div>
            <Header/>
<div class="container">
  <div class="row">
    <div class="col-sm">
      <W1/>
    </div>
    <div class="col-sm">
     <W2/>
    </div>
    <div class="col-sm">
      <W3/>
    </div>
  </div>
</div>
<Footer/>

        </div>
    )
}
export default women
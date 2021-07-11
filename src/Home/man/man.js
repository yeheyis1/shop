import React from 'react'
import man from '../man/m1'
import man from '../man/m2'
import man from '../man/m3'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const man=()=> {
return(



<div>
<Header/>
<div class="container">
  <div class="row">
    <div class="col-sm">
      <M1/>
    </div>
    <div class="col-sm">
      <M2/>
    </div>
    <div class="col-sm">
     <M3/>
    </div>
  </div>
</div>
<Footer/>
</div>
  )

}
export default man
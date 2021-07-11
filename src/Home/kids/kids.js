import React from 'react'
import kcard1 from '../kids/kcard1'
import kcard2 from '../kids/kcard2'
import kcard3 from '../kids/kcard3'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'


const kids =()=> {

    return(


        <div>
          <Header/>
            <div class="container">
  <div class="row">
    <div class="col-sm">
      <Kcard1/>
    </div>
    <div class="col-sm">
      <Kcard2/>
    </div>
    <div class="col-sm">
      <Kcard3/>
    </div>
  </div>
</div>
<Footer/>
        </div>

    )
}
export default kids
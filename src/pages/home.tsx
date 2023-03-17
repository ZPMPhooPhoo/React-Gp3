import React from 'react'
import Logo from '../components/home/logo'
import Menu from '../components/home/menu'
import Mvisual from '../components/home/visual'
import Footer from '../components/footer'

const Home = () => {
  return (
    <div className="wrap">
      <div className="bg">
        <header>
          <div className="l-wrap-outer">
            <div className="l-wrap-inner">
              <nav>
                <Logo />
                <Menu />
              </nav>
            </div>
          </div>
        </header>
        <div className="p-mainvisual">
          <div className="l-wrap-outer">
            <div className="l-wrap-inner">
              <Mvisual />
            </div>
          </div>
        </div>
      </div>
      
      {/* <section id="login">
        <Form/>
      </section> */}
      <Footer />
    </div>
  )
}

export default Home
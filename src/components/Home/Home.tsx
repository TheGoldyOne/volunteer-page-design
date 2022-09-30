import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import './Home.scss'

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <div className="hero">
          <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Firefox_logo%2C_2019.svg/1200px-Firefox_logo%2C_2019.svg.png" alt="Logo" />
          <div className="title">
            WOLONTARIUSZE FIREFOX
          </div>
        </div>

        <div className="newsFeed">
          <div className="container">
            <h1>Aktualności</h1>
            <div className="news">
              <div className="newsItem">
                <div className="title">Lorem ipsum dolor sit amet.</div>
              </div>
              <div className="newsItem">
                <div className="title">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, totam?</div>
              </div>
              <div className="newsItem">
                <div className="title">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, rerum! Odit ex soluta animi rem.
                </div>
              </div>
            </div>
          </div>
        </div>


      </main>
      <Footer />
    </div>
  )
}

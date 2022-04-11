import React from 'react'
import './footer.css'

function Footer() {

    const [help, setHelp] = React.useState(false)
    const [about, setAbout] = React.useState(false)
    const [more, setMore] = React.useState(false)
    const [shopping, setShopping] = React.useState(false)


    function toggleHelp() {
        setHelp(prevState => !prevState)
        setAbout(false)
        setMore(false)
        setShopping(false)
    }

    function toggleAbout() {
        setAbout(prevState => !prevState)
        setHelp(false)
        setMore(false)
        setShopping(false)
    }

    function toggleMore() {
        setMore(prevState => !prevState)
        setAbout(false)
        setHelp(false)
        setShopping(false)
    }

    function toggleShopping() {
        setShopping(prevState => !prevState)
        setAbout(false)
        setMore(false)
        setHelp(false)
    }


  return (
    <>
        <footer >
        <div className="footer-container">
            <div className='footer-list'>
                <div className="footer-list-header">
                    <h3>HELP & INFORMATION</h3>
                    <h2 onClick={toggleHelp}>{ help ? '-' : '+'}</h2>
                </div>
                { help ? <div style={{display:'block', transitionDelay:'1s'}} className="footer-list-list">
                    <p>Help</p>
                    <p>Track order</p>
                    <p>Delivery & returns</p>
                    <p>Premier delivery</p>
                    <p>15% student discount</p>
                </div>
                :
                <div className="footer-list-list">
                    <p>Help</p>
                    <p>Track order</p>
                    <p>Delivery & returns</p>
                    <p>Premier delivery</p>
                    <p>15% student discount</p>
                </div>
                }
            </div>
            <div className='footer-list'>
                <div className="footer-list-header">
                    <h3>ABOUT</h3>
                    <h2 onClick={toggleAbout}>{ about ? '-' : '+'}</h2>
                </div>
                { about ? <div style={{display:'block', transitionDelay:'1s'}} className="footer-list-list">
                    <p>Help</p>
                    <p>Track order</p>
                    <p>Delivery & returns</p>
                    <p>Premier delivery</p>
                    <p>15% student discount</p>
                </div>
                :
                <div className="footer-list-list">
                    <p>Help</p>
                    <p>Track order</p>
                    <p>Delivery & returns</p>
                    <p>Premier delivery</p>
                    <p>15% student discount</p>
                </div>
                }
            </div>
            <div className='footer-list'>
                <div className="footer-list-header">
                    <h3>MORE FROM US</h3>
                    <h2 onClick={toggleMore}>{ more ? '-' : '+'}</h2>
                </div>
                { more ? <div style={{display:'block', transitionDelay:'1s'}} className="footer-list-list">
                    <p>Help</p>
                    <p>Track order</p>
                    <p>Delivery & returns</p>
                    <p>Premier delivery</p>
                    <p>15% student discount</p>
                </div>
                :
                <div className="footer-list-list">
                    <p>Help</p>
                    <p>Track order</p>
                    <p>Delivery & returns</p>
                    <p>Premier delivery</p>
                    <p>15% student discount</p>
                </div>
                }
            </div>
            <div className='footer-list'>
                <div className="footer-list-header">
                    <h3>SHOPPING FROM:</h3>
                    <h2 onClick={toggleShopping}>{ shopping ? '-' : '+'}</h2>
                </div>
                { shopping ? <div style={{display:'block', transitionDelay:'1s'}} className="footer-list-list">
                    <p>Help</p>
                    <p>Track order</p>
                    <p>Delivery & returns</p>
                    <p>Premier delivery</p>
                    <p>15% student discount</p>
                </div>
                :
                <div className="footer-list-list">
                    <p>Help</p>
                    <p>Track order</p>
                    <p>Delivery & returns</p>
                    <p>Premier delivery</p>
                    <p>15% student discount</p>
                </div>
                }
            </div>
        </div>

    </footer>

    <div className="footer-owner">
        <p>© 2022 thenelson</p>
        <div className="div">
            <p>Privacy & Cookies |</p>
            <p> T<span>s</span>&C<span>s</span> |</p>
            <p>Accessibility</p>
        </div>
    </div>
    </>
  )
}

export default Footer
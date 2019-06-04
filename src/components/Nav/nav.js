import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import popup from './popup'
import reservations_icon_blue from './../Images/images/reservations_icon_blue.png'
import reservations_icon_white from './../Images/images/reservations_icon_white.png'
import search_icon_blue from './../Images/images/search_icon_blue.png'
import search_icon_white from './../Images/images/search_icon_white.png'
import mylistings_icon_blue from './../Images/images/listing_icon_blue.png'
import mylistings_icon_white from './../Images/images/listing_icon_white.png'


 class Nav extends Component {
    constructor(props) {
        super(props)

        this.state = {
            pop_up: false,
            selected:''
        }
        this.handlePopup = this.handlePopup.bind(this)
        this.setFalse = this.setFalse.bind(this)
    }

    handlePopup() {
        this.setState({ popup: !this.state.pop_up })
        
    }
    setFalse() {
        this.setState({ popup: false })
    }
    


    render() {
        return (
            <div>
                <div className='nav'>

                {window.location.href.includes('/search') ? 
                    <Link to='/search'><img alt='' src={search_icon_blue} className='size'/></Link>
                  :
                    <Link to='/search'><img alt='' src={search_icon_white} className='size'/></Link>
                }

                {window.location.href.includes('/mylistings') ?
                    <Link to='/mylistings'><img alt='' src={mylistings_icon_blue} className='size' style={{height: '30px',width:'30px', marginTop:'9px'}}/></Link>
                  :
                    <Link to='/mylistings'><img alt='' src={mylistings_icon_white} className='size' style={{height: '30px',width:'30px', marginTop:'9px'}}/></Link>
                }

                {window.location.href.includes('/reservations') ?
                    <Link to='/reservations'><img alt='' src={reservations_icon_blue} className='size'style={{height: '40px', marginTop:'5px',width:'40px'}}/></Link>
                  :
                    <Link to='/reservations'><img alt='' src={reservations_icon_white} className='size'style={{height: '40px', marginTop:'5px',width:'40px'}}/></Link>
                }
                    {/* <img src={Menu_icon} alt='' className='size' onClick={this.handlePopup} style={{height: '40px', marginTop:'5px',width:'40px'}}/> */}
                    <div onClick = {this.handlePopup} className = {this.state.popup ? 'barbox barbox1' : 'barbox'}>
                        <div className = {this.state.popup ? 'bar bar1' : 'bar'}></div> 
                        <div className = {this.state.popup ? 'bar bar2' : 'bar'}></div> 
                    </div>
                </div >
                <popup handlePopup={this.state.popup} />
            </div >
        )
    }
}

export default Nav;


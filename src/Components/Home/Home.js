import React from 'react'
import Product from '../Products/Product'
import './Home.css'

const Home = () => {
    return (
        <>
            <div className="home">
                <div className='home__container'>
                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Beauty/GW/Aug/ATF/EOSS-GW-PC-Bunk._CB630308543_.jpg" alt="home img" />
                </div>

                <div className="home__row">
                    <Product
                        title='Amazon Pay | Book tickets'
                        price={20000}
                        desc='Browse through the wide range of home décor products online at Amazon India. Buy home décor articles like clocks, decorative stickers, photo frames, home fragrances, artwork, artifical flora, mirrors, candle holders, vases, wind chimes and much more at affordable prices online at Amazon.in.'
                        img='https://m.media-amazon.com/images/G/31/img19/AMS/Houseads/Laptops-Sept2019._CB436595915_.jpg'
                        rating={3}
                    />
                    <Product
                        title='Car & bike | Up to 60% off'
                        price={26000}
                        desc='Buy Your clearance appliance and get upto 70% off Lorem ipsum dolor sit, amet consectetur adipisicing elit. In sed soluta explicabo earum, quam cumque.'
                        img='https://images-eu.ssl-images-amazon.com/images/G/31/img22/Electronics/Clearance/Clearance_store_Desktop_CC_1x._SY304_CB628315133_.jpg'
                        rating={5} />
                    <Product
                        title='Shop by Category'
                        price={34000}
                        desc='Oneplus Bullets Z2 Bluetooth Wireless in Ear Earphones with Mic, Bombastic Bass - 12.4 Mm Drivers, 10 Mins Charge - 20 Hrs Music,'
                        img='https://m.media-amazon.com/images/I/51UhwaQXCpL._SX569_.jpg'
                        rating={2} />

                </div>
                <hr />
                <div className="home__row">
                    <Product
                        title='Up to 60% off | Styles for Men'
                        price={30000}
                        desc='Scott International Men"s Regular Fit T-Shirt (Pack of 3)'
                        img='https://m.media-amazon.com/images/I/71vp8Lec9JL._UX466_.jpg'
                        rating={2} />
                    <Product
                        title='One plus | Mobile'
                        desc='OnePlus Nord 2T 5G (Jade Fog, 8GB RAM, 128GB Storage) - Extra INR 3000 Exchange'
                        img='https://m.media-amazon.com/images/I/61ahn9N38zL._SX569_.jpg'
                        rating={2} />
                </div>
                <hr />
                <div className="home__row">
                    <Product
                        title='Frequently repurchased in Grocery'
                        price={20000}
                        desc='Bellaxia Highball Glasses Tall Drinking Glasses 350ML Cocktail Glass Set Lead-Free Crystal Glassware. Bourbon or Whiskey Glass Cup, Bar, Iced Tea, Water, Mojito and Tom Collins Glasses '
                        img='https://m.media-amazon.com/images/I/71kk+3P3ljL._SX425_.jpg'
                        rating={4} />
                </div>
                <hr />
            </div>
        </>
    )
}

export default Home

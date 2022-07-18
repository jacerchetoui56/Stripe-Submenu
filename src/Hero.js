import React from 'react'
import { useGlobalContext } from './Context'
import phoneImg from './images/phone.svg'

export default function Hero() {
    const { closeSubmenu } = useGlobalContext();
    return (
        <section className='hero'>
            <div className="hero-center" onMouseOver={() => closeSubmenu()}>
                <article className="hero-info">
                    <h1>Payments infratructure for the internet</h1>
                    <p>
                        Millions of companies of all sizes-form startups to fortune 500-use Stripe to collect payments on their products and services.
                    </p>
                    <button className="btn">
                        Start</button>                </article>
                <article className="hero-images">
                    <img src={phoneImg} alt="" />
                </article>
            </div>
        </section>
    )
}

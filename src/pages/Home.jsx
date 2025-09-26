import React from 'react'
import Hero from '../components/Hero/Hero'
import Book from '../components/Book/Book'
import Team from '../components/Team/Team'
import Contact from '../components/Contact/Contact'

function Main() {
    return (
        <main>
            <section id='home'>
                <Hero />
            </section>
            <Book />
            <Team />
            <Contact />
        </main>
    )
}

function Home() {
    return (
        <div>
            <Main />
        </div>
    )
}

export default Home
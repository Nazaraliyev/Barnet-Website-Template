import React from 'react'
import HomeAbout from './HomeAbout'
import HomeBusiness from './HomeBusiness'
import HomeGalery from './HomeGalery'
import HomeQuality from './HomeQuality'
import HomeTeams from './HomeTeams'

function Home() {
    return (
        <main>
            <HomeAbout />
            <HomeQuality />
            <HomeBusiness />
            <HomeTeams />
            <HomeGalery />
        </main>
    )
}

export default Home

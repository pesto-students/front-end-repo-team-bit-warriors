import React from 'react';
import SearchBox from '../components/SearchBox';
import ThumbnailText from '../components/ThumbnailText'


const Home = () => {
    const thumnailHeader = "Discover your shopping paradise"
    return (
        <>
            <ThumbnailText text={thumnailHeader}/>
            <main>
                <SearchBox/>
            </main>
        </>
    )
}

export default Home;

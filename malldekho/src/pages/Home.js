import React, {useState, useEffect} from 'react';
import SearchBox from '../components/SearchBox';
import ThumbnailText from '../components/ThumbnailText'


const Home = () => {
    const thumnailHeader = "Discover your shopping paradise"
        const [malls, setMalls] = useState([]); // State to store the fetched malls

    
        useEffect(() => {
            // Fetch the data once the component mounts
            async function fetchData() {
                try {
                    const mallsData = await MallService.fetchAllMalls();
                    setMalls(mallsData);
                } catch (error) {
                    console.error("Error fetching malls:", error);
                }   
            }
    
            fetchData();
        }, [malls]); // Empty dependency array ensures the effect runs only once
    
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

import React, { Component } from 'react'
import NewsSlider from '../widgets/NewsSlider/slider';
import NewsList from '../widgets/NewsList/newsList'; 
import VideosList from '../widgets/VideosList/videosList';
const Home = () => {
    return (
        <div>
            <NewsSlider
                type="featured"
                start={0}
                amount={3}
                settings={{
                    dots: false
                }}
            />

            
            <NewsList
                type="card"
                loadmore={true}
                start={3}
                amount={3}
    
            />

            <VideosList
              type="card"
              title={true}
              loadmore={true}
              start={0}
              amount={3}
            />

            {/* <NewsSlider
                type="featured"
                start={0}
                amount={3}
                settings={{
                    dots: true
                }}
            /> */}
        </div>
    )
}

export default Home;
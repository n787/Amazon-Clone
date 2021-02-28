import React from 'react'
import './Home.css';
import Product from './Product';
function Home() {
    return (
        <div className="home">
            <img className="homeImage" src="https://th.bing.com/th/id/OIP.paeM_XIEbQ-UpHx6WGF0cgHaE8?w=243&h=180&c=7&o=5&pid=1.7" alt=""/>

           <div className="homeRow">
            <Product
                id='1111'
                title="How Constant Innovation Creates your skin clean"
                price={11.36}
                rating={5}
                image="https://th.bing.com/th/id/OIP.OIqV-Cdkr7S3WjfsITGUowHaHa?w=168&h=180&c=7&o=5&pid=1.7"
                />
                <Product
                id='2222'
                title="How Constant Innovation Creates your skin clean"
                price={11.36}
                rating={5}
                image ="https://th.bing.com/th/id/OIP.r1hCFU-WDmz6FDzmfLdRgwHaE8?w=242&h=180&c=7&o=5&pid=1.7"
                />
            </div>
            <div className="homeRow">
            <Product
                id='3333'
                title="How Constant Innovation Creates your skin clean"
                price={11.36}
                rating={5}
                image="https://th.bing.com/th/id/OIP.gfFaT9v6OWZ9qV6dTvVUBAHaGY?w=195&h=180&c=7&o=5&pid=1.7"
                />
                <Product
                id='44444'
                title="How Constant Innovation Creates your skin clean"
                price={11.36}
                rating={5}
                image="https://th.bing.com/th/id/OIP.ILNQa-etyX8G3rN47T4hNwHaEq?w=248&h=180&c=7&o=5&pid=1.7"
                />
                <Product
                id='5555'
                title="How Constant Innovation Creates your skin clean"
                price={11.36}
                rating={5}
                image="https://th.bing.com/th/id/OIP.qczInDc1nmPPNXqaxJ2lwwFFDA?w=267&h=180&c=7&o=5&pid=1.7"
                />
            </div>
            <div className="homeRow">
            <Product
                id='66666'
                title="How Constant Innovation Creates your skin clean"
                price={11.36}
                rating={5}
                image="https://th.bing.com/th/id/OIP.9ggbxZF5Nb5hhIihRmW8RQHaGk?w=223&h=198&c=7&o=5&pid=1.7"                />
            </div>
            
        </div>
    )
}

export default Home

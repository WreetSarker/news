import React, { useEffect, useState } from 'react';
import Articles from '../Articles/Articles';
import './Home.css'

const Home = () => {
    const [articles, setArticles] = useState([]);
    useEffect(() => {
        fetch('https://spaceflightnewsapi.net/api/v2/articles')
            .then(resp => resp.json())
            .then(data => setArticles(data))
    }, []);
    console.log(articles);
    return (

        <div>
            <h2 className="articles-header">Latest News</h2>
            {
                articles.map(article => <Articles article={article}></Articles>)
            }
        </div>
    );
};

export default Home;
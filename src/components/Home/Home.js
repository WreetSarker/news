import React, { useEffect, useState } from 'react';
import Articles from '../Articles/Articles';

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
            {
                articles.map(article => <Articles article={article}></Articles>)
            }
        </div>
    );
};

export default Home;
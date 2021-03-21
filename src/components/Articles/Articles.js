import React from 'react';
import { useHistory } from 'react-router';
import './Articles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Articles = (props) => {
    const { imageUrl, newsSite, publishedAt, summary, title, url } = props.article;
    const history = useHistory();
    const handleNews = (url) => {
        history.push(`news/${url}`)
    }
    return (
        <div className="article-holder">
            <div className="info">
                <img style={{ width: '160px' }} src={imageUrl} alt="" />
                <h3>{title}</h3>
                <h4>{newsSite}</h4>
                <p>{summary}</p>
                <button onClick={() => handleNews(url)} className="find-btn">FIND OUT MORE <FontAwesomeIcon className="right-arrow" icon={faChevronRight} /></button>
            </div>
        </div>
    );
};

export default Articles;
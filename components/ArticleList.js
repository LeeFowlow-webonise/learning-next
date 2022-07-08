import React from 'react';
import ArticleItem from './ArticleItem';
import articleStyles from '../styles/article.module.css';

const ArticleList = ({ articles }) => {
    return (
      <div className={articleStyles.grid}>
            {articles.map((article) => (
            <ArticleItem article={article}/>//eslint-disable-line
        ))}        
      </div>
    )
  }
  
  export default ArticleList
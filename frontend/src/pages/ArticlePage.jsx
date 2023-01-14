import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import NotFoundPage from "./NotFoundPage";
import articles from "../data/articles-data";

const ArticlePage = () => {
  const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });

  const { articleId } = useParams();
  const article = articles.find((article) => article.name === articleId);

  useEffect(() => {
    const loadInfo = async () => {
      const response = await axios.get(`/api/articles/${articleId}`);
      const newArticleInfo = response.data;
      setArticleInfo(newArticleInfo);
    };

    loadInfo();
  }, []); // eslint-disable-line

  if (!article) {
    return <NotFoundPage />;
  }
  return (
    <>
      <h1>{article.title}</h1>
      <p>This article has {articleInfo.upvotes} upvotes!</p>
      {article.content.map((par, index) => (
        <p key={`${index}-${par}`}>{par}</p>
      ))}
    </>
  );
};

export default ArticlePage;

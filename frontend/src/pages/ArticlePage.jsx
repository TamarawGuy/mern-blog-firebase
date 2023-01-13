import { useParams } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";
import articles from "../data/articles-data";

const ArticlePage = () => {
  const { articleId } = useParams();
  const article = articles.find((article) => article.name === articleId);

  if (!article) {
    return <NotFoundPage />;
  }
  return (
    <>
      <h1>{article.title}</h1>
      {article.content.map((par, index) => (
        <p key={`${index}-${par}`}>{par}</p>
      ))}
    </>
  );
};

export default ArticlePage;

import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

// đinh nghĩa dynamic param mình định nghĩa thê snaog thì minh nhận vào cái đó 
function ArticleDetails() {
  const [article, setArticle] = useState();
  const { id } = useParams();

  useEffect(() => {
    // Dùng id của bài viết để call API
    const article = data.find((item) => item.id === id);
    setArticle(article);
  }, [id]);

  if (!article) return null;

  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.description}</p>
    </div>
  );
}

export default ArticleDetails
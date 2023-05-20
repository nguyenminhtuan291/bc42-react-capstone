import React from 'react'
import data from './data.json'
import { Link, useNavigate, } from 'react-router-dom';



function ArticleList() {

  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="row">
        {data.map((item) => {
          return (
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">{item.title}</h4>
                <p className="card-text">{item.description}</p>
                {/* <Link to={`/articles/${item.id}`}>Details</Link> */}
                {/* tạo thẻ a */}
                {/* link hay navigate có dấu / thì nó sẽ replace domain thêm đoạn to /article thay mới hoàn toàn , nếu hok có /đằng trước nó sẽ nối thêm vào sau thôi   */}
                <button
                  className="btn btn-primary"
                  // onClick={() => navigate(`/articles/${item.id}`)}
                  onClick={() => navigate(item.id)}
                >
                  Details
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ArticleList
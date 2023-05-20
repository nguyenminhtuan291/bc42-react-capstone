import React from 'react'
import Header from './Header'
import Banner from './Banner'
import ProductList from './ProductList'
import Footer from './Footer'

//nếu hok gửi ý quay về component click banner quay lại shop thì nó sẽ ra, số lương vscode nó nhớ giới hạn quay lại ckick gợi nhớ thì nó quay lại nhó cho mình

function Shop() {
  return (
    <div>
      <Header/>
      <Banner/>
      <ProductList/>
      <Footer/>
    </div>
  );
}

export default Shop
import React from 'react'

import styles from './Child.module.scss'
// gõ chữ imp xong tag ra sẽ viết import nhanh hớn
// nó sẽ tự sinh ra chuỗi heading khác cách thông thường người ta dùng cách module này trong react
function Child() {
  return (
    <div>
    <h1 className="heading">Child Style</h1>
    <h1 className={styles.heading}>Child CSS Module</h1>
  </div>
  )
}

export default Child
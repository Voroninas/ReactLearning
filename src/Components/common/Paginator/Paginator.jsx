import React from 'react'
import styles from './Paginator.module.css'

const Paginator = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
  let pages = []
  let endPages = []
  /*for (let i = 1; i <= pagesCount; i++) {*/
  // too many pages from server, i cut it
  for (let i = 1; i <= 5; i++) {
    pages.push(i)
  }

  for (let i = pagesCount - 3; i <= pagesCount; i++) {
    endPages.push(i)
  }

  return (<>
    {/*<span className={props.currentPage === p && styles.selectedPage}
          onClick={(e) => { props.onPageChanged(p) }}>{p} </span>*/}
    < div >
    {
      pages.map(p => {
        return <span className={props.currentPage === p ? styles.selectedPage : styles.unselectedPage}
          onClick={(e) => { props.onPageChanged(p) }}>{p} </span>
      })
    }
      {/*// it`s mine piece*/ }
      ...
{
  endPages.map(p => {
    return <span className={props.currentPage === p ? styles.selectedPage : styles.unselectedPage}
      onClick={(e) => { props.onPageChanged(p) }}> {p}</span>
  })
}
{/* // it`s mine piece
      ... {<span className={props.currentPage === pagesCount && styles.selectedPage}
          onClick={(e) => { props.onPageChanged(pagesCount) }}>{pagesCount}</span>}*/}
<div>Итого {pagesCount} страниц, всего пользователей: {props.totalUsersCount}</div>
    </div ></>)
}

export default Paginator;
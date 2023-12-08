
import CardList from '@/components/cardList/cardList'
import CategoryList from '@/components/categoryList/CategoryList'
import Featured from '@/components/featured/Featured'
import Menu from '@/components/menu/Menu'
import Image from 'next/image'
import styles from "./homepage.module.css"

export default function Home({searchParams}) {
  const page = parseInt(searchParams.page) || 1;
  
  return (
   <div>
    <Featured/>
    <CategoryList />
    <div className={styles.content}>
      <CardList page={page}/>
      {/* <Menu/> */}

    </div>
   </div>
  )
}

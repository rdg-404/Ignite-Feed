import './global.css'
import { Header } from "./components/Header"
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'

import styles from './App.module.css'

export function App() {



  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <div>
            <Post />
            <Post />
          </div> 
        </main>
      </div>
    </div>
    
  )
}

import './global.css'
import { Header } from "./components/Header"

import styles from './App.module.css'
import { Sidebar } from './components/Sidebar'

export function App() {



  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <h1>feed de posts</h1>
        </main>
      </div>
    </div>
    
  )
}

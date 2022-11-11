import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';

export function Comment (){
    return (
        <div className={styles.comment}>
            <img src="https://github.com/rdg-404.png"  />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Rodrigo Paiva</strong>
                            <time title="09 de Novembro às 23:50:00" dateTime='2022-11-09 23:50:12'>Cerca de 1h atrás</time>
                       </div>

                       <button title='Deletar comentário'>
                            <Trash size={20}/>
                       </button>
                    </header>

                    <p>Muito bom Devon, parabéns!! 👏👏</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp/>
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>

        
    )
}
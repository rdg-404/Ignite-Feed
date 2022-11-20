import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

export function Comment ({ content }){
    return (
        <div className={styles.comment}>
           <Avatar 
                hasBorder={false} 
                src="https://github.com/diego3g.png"
           />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Diego Fernandes</strong>
                            <time title="09 de Novembro às 23:50:00" dateTime='2022-11-09 23:50:12'>Cerca de 1h atrás</time>
                       </div>

                       <button title='Deletar comentário'>
                            <Trash size={24}/>
                       </button>
                    </header>

                    <p>{content}</p>
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
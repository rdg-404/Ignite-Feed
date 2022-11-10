import styles from './Post.module.css';

export function Post(){
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/rdg-404.png" />
                    <div className={styles.authorInfo}>
                        <strong>Rodrigo Paiva</strong>
                        <span>FrontEnd Developer</span>
                    </div>
                </div>

                <time title="09 de Novembro às 23:50:00" dateTime='2022-11-09 23:50:12'>Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p><a href="">jane.design/doctorcare</a></p>
                <p>
                    <a href="">#novoprojeto </a> {' '}
                    <a href="">#nlw </a>{' '}
                    <a href="">#rocketseat </a>
                </p>
            </div>
        </article>
    )
}
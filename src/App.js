import Div100vh from 'react-div-100vh'
import styles from './App.module.css';

function Link({
  external = false,
  href,
  children,
  className
}) {
  return (
    <a 
    className={className}
      href={href}
      rel={external ? 'noopener nofollow' : ''}
    >
      {children}
    </a>
  );
}

function App() {
  return (
    <Div100vh>
      <div className={styles.app}>
        <div className={styles.page}>
          <header className={styles.layout}>
            <img 
              alt="Profile"
              className={styles.profilePicture}
              src='https://i.imgur.com/iHXeY1G.jpg'
            />
            <div>
              <span>Jim Carrey</span>
              <h1>Canadian-American actor, comedian, writer, producer, and artist.</h1>
            </div>
          </header>

          <div 
            className={styles.spacer}
          />

          <main className={styles.layout}>
            <aside>
              <h2>Projects</h2>
              <ul>
                <li>
                  {'🐬 '}
                  <Link href="#" external>
                    Ace Ventura
                  </Link>
                </li>

                <li>
                  {'🙏 '}
                  <Link href="#" external>
                    Bruce Almighty
                  </Link>
                </li>

                <li>
                  {'🤪 '}
                  <Link href="#" external>
                    Dumb and Dumber
                  </Link>
                </li>

                <li>
                  {'📺 '}
                  <Link href="#" external>
                    The Trueman Show
                  </Link>
                </li>

                
              </ul>
            </aside>
            <article>
              <h2>Background</h2>
              <p>Comedian and actor Jim Carrey was born in Newmarket, Ontario, Canada, on January 17, 1962. Carrey relocated to Los Angeles to pursue comedy, eventually landing a spot on the sketch comedy show In Living Color. He went on to huge box office success in comedies, including Ace Ventura: Pet Detective and The Mask, and delivered acclaimed dramatic performances in The Truman Show, Man on the Moon, and Eternal Sunshine of the Spotless Mind. His later films include Kick Ass 2 and Dumb and Dumber To.</p>
              <Link
                href="mailto:jim"
              />
            </article>
          </main>
        </div>
      </div>
    </Div100vh>
  );
}

export default App;

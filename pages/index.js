import { useCallback, useEffect, useState } from 'react'
import Button from '../components/Button'
import ClickCount from '../components/ClickCount'
import styles from '../styles/home.module.css'
function throwError() {
  console.log(
    // The function body() is not defined
    document.body()
  )
}

function Home() {
  const [count, setCount] = useState(0)
  const increment = useCallback(() => {
    setCount((v) => v + 1)
  }, [setCount])

  useEffect(() => {
    const r = setInterval(() => {
      increment()
    }, 1000)

    return () => {
      clearInterval(r)
    }
  }, [increment])

  return (
    <main className={styles.main}>
      <a href='https://joebiden.com/'> Fuck JD Vance</a>
      <ul>
        <li>"I’m a Never Trump guy" - J.D. Vance </li>
        <li> "My God, what an idiot - J.D. Vance </li>
        <li> "I'm going to vote third party because I can't stomach Trump. I think that he's noxious and is leading the white working class to a very dark place." - J.D. Vance</li>
        <li> "At the end of the day, do you believe Donald Trump, who always tells the truth - just kidding, or do you believe that woman on the tape." - J.D. Vance</li>
        <li> "I can't stand Trump because I think he's a fraud, I think he's a total fraud who is exploiting these people." - J.D. Vance</li>
        <li> "If I feel like Trump has a really good chance of winning, then I might have to hold my nose and vote for Hillary Clinton." - J.D. Vance</li>
      </ul>
    </main>
  )
}

export default Home

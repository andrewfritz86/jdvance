import styles from '../styles/home.module.css';
import Head from 'next/head';

function Banner() {
  return (
    <div className={styles.banner}>
      <p className={styles.bannerCopy}>
        <a
          className={styles.link}
          href="https://action.aclu.org/give/pm-donate-to-aclu"
        >
          Click Here to Help!
        </a>{' '}
      </p>
    </div>
  );
}

function Home() {
  return (
    <>
      <Head>
        <title>Fuck JD Vance</title>
        <meta name="description" content="Fuck JD Vance" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner />
      <main className={styles.main}>
        <h1 className={styles.header}> Fuck JD Vance</h1>
        <div className={styles.imageWrapper}>
          <img
            className={styles.image}
            src="https://www.thetimes.com/imageserver/image/%2Fmethode%2Fsundaytimes%2Fprod%2Fweb%2Fbin%2Fb87338f2-6253-11e7-b338-63ebc461703c.jpg?crop=2250%2C1500%2C0%2C0"
          />
        </div>
        <div className={styles.quotes}>
          <h2> JD Vance on Donald Trump:</h2>
          <ul>
            <li>"I’m a Never Trump guy" </li>
            <li> "My God, what an idiot </li>
            <li>
              "I'm going to vote third party because I can't stomach Trump. I
              think that he's noxious and is leading the white working class to
              a very dark place."
            </li>
            <li>
              "At the end of the day, do you believe Donald Trump, who always
              tells the truth - just kidding, or do you believe that woman on
              the tape."
            </li>
            <li>
              "I can't stand Trump because I think he's a fraud, I think he's a
              total fraud who is exploiting these people."
            </li>
            <li>
              "If I feel like Trump has a really good chance of winning, then I
              might have to hold my nose and vote for Hillary Clinton."
            </li>
          </ul>
        </div>
        <div className={styles.quotes}>
          <h2> JD Vance on George Soros:</h2>
          <ul>
            <li>
              “Every day George Soros sends a 747 to Columbus to load up
              disproportionately Black women to get them to go have abortions in
              California.”
            </li>
          </ul>
        </div>
        <div className={styles.quotes}>
          <h2> JD Vance on Reality:</h2>
          <ul>
            <li>
              "If I have to create stories so that the American media actually
              pays attention to the suffering of the American people, then
              that’s what I’m going to do."
            </li>
          </ul>
        </div>
        <div className={styles.quotes}>
          <h2> JD Vance on the Opioid Crisis:</h2>
          <ul>
            <li>
              "If you wanted to kill a bunch of MAGA voters in the middle of the
              heartland, how better than to target them and their kids with this
              deadly fentanyl?"
            </li>
          </ul>
        </div>
        <div className={styles.quotes}>
          <h2> JD Vance on DIET Mountain Dew:</h2>
          <ul>
            <li>
              "I had a Diet Mountain Dew yesterday and one today, and I’m sure
              they’re going to call that racist too. But — it’s good.”
            </li>
          </ul>
        </div>
        <div className={styles.quotes}>
          <h2> JD Vance on Paul Krugman, Women and Cats:</h2>
          <ul>
            <li>
              "Paul Krugman is one of many weird cat ladies who have too much
              power in our country. We should change this."
            </li>
          </ul>
        </div>
        <div className={styles.quotes}>
          <h2> JD Vance on Fashion:</h2>
          <ul>
            <li className={styles.noBullet}>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbQz-CfRuhP9rR7W6VBd_O9POM8sbNOHQPAQ&s" />
            </li>
          </ul>
        </div>
      </main>
    </>
  );
}

export default Home;

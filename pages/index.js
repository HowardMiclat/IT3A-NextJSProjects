import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>My Nextjs Blog</title>
      </Head>
      <section className={utilStyles.headingMd}>
       <p>Introduce yourself.  What are your hobbies, favourite music, favourite food, and other things you can tell me about yourself? <strong> I am Jerome Howard S. Miclat, My hobbies are playing video games and building computers. My current favorite music is music by Keshi, Chappell Roan, The 1975, and Valley. My favourite food would be Beef Bulalo, Beef KareKare and Pork Katsudon. Additional things to know about me is that I learn quickly as long as the topic is explained well. </strong></p>
       <p> Why did you take up IT? <strong> Not my first choice, but It is also within my interests so I stopped chasing after a medical profession to make way for my sister. I don't really feel that I regret it since I am enjoying myself in this course.
       </strong></p>
       <p>What career do you see yourself exploring after graduation?<strong> Mostly freelancing and probably a cybersecurity career. I also see myself assisting in machine-learning or AI-training for a while.
       </strong></p>
       <p>What do you expect to learn in this subject? <strong> I expect to learn lessons that will help me in the future in terms of practicality, mindset and attitude in approaching IT related situations. I'll try my best to make my time here valuable so that I benefit the most.
       </strong></p>
       <p>What topics you want to be discussed in this subject?<strong> Anything in the curriculum as long as it is taught well and maintains my enthusiasm. In-depth lessons are also appreciated.
       </strong></p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
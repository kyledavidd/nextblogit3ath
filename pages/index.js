import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
       <hr></hr>
        <p>
          (Hello! I'm <strong><em>Yhuan Kyle David</em></strong>, a 3rd year BSIT student at the University of the Assumption. I'm from San Matias, Santo Tomas, Pampanga. My hobbies are playing video games and reading anime manga. I enjoy listening to old music like The Eagles, Queen and many other artists. My favorite food is pizza. I love dogs, and I have one named Olatut.</p>

          <hr></hr>

          
          <p>I took up IT because there’s a lot of opportunities in this industry and it's also a high paying job.
          </p>

          <hr></hr>

          <p>I hope that I work in the IT industry and will try different fields in IT and see what's best for me.</p>

          <hr></hr>

          <p>I want to learn more about how to create a website and learn the basics of how to make one and eventually get better at it.</p> 

          <hr></hr>

          <p>The topics I want to learn more is about web development and all the applications that are going to be used.</p>
          
                    
           
            (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        
      </section>
    </Layout>
  );
}
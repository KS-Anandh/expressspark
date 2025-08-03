import React from 'react'
import Intro from '../components/Intro'
import EnquiryForm from '../components/EnquiryForm'
import { Helmet } from "react-helmet";

const Home = () => {
  
  return (
    <>
    <Helmet>
     
        <title> Home – Learn Robotics, Coding & STEM</title>

        <meta
          name="description"
          content="Express Spark provides hands-on Robotics, Coding, and STEM education for students. Join our school programs, test series, and workshops."
        />

        <meta property="og:title" content=" Home – Robotics & STEM for Students" />
        <meta
          property="og:description"
          content="Join Express Spark for cutting-edge learning in Robotics, Coding, IoT and more – from school to real-world skills."
        />
        <meta property="og:url" content="https://www.expressspark.in" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.atlantaparent.com/wp-content/uploads/2018/01/iStock-653876434.jpg" />
      
     

        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Express Spark",
              "url": "https://www.expressspark.in",
              "alternateName": "ExpressSpark"
            }
          `}
        </script>
      </Helmet>
    <div className='home' >
      
       <Intro/>  
    </div>
    </>
  )
}

export default Home
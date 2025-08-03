import React, { useEffect } from 'react'
import AboutCompany from '../components/AboutCompany'
import { Helmet } from "react-helmet";

const AboutUs = () => {

  return (
    <>
    <Helmet>
        <title> About Us – Learn Robotics, Coding & STEM</title>
        <meta
          name="description"
          content="Express Spark provides hands-on Robotics, Coding, and STEM education for students. Join our school programs, test series, and workshops."
        />
        <meta property="og:title" content=" About Us – Robotics & STEM for Students" />
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
    <div className='about-company'>
        <AboutCompany bg={["lightgrey","grey","black"]}/>
    </div>
    </>
  )
}

export default AboutUs
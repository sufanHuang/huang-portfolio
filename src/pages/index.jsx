import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/renderprops-addons.cjs'

// Components
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'

// Elements
import Inner from '../elements/Inner'
import { Title, BigTitle, Subtitle } from '../elements/Titles'

// Views
import Hero from '../views/Hero'
import Projects from '../views/Projects'
import About from '../views/About'
import Contact from '../views/Contact'

import avatar from '../images/avatar.jpg'

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`

const Index = () => (
  <>
    <Layout />
    <Parallax pages={5}>
      <Hero offset={0}>
        <Avatar src={avatar} alt="sufan" />
        <BigTitle> Sufan Huang
          <h4>Des Moines IA</h4>
        </BigTitle>
        <Subtitle>I am a Full-stack programmer.</Subtitle>
        <hr />
        <Title>Skills</Title>
        <AboutDesc>
          <h3>Technologies:</h3>
          <h4>HTML, CSS, Javascript, React and Gatsby for frontend development; Node, express, AWS DynamoDB, S3, API Gateway, SQL for backend technologies. </h4>
          <h3>Tools:</h3>
          <h4>Git, Github, APIs, Serverless, IntelliJ, Netlify, Heroku CircleCi to develop and deploy apps and websites. </h4>
        </AboutDesc>
      </Hero>
      <Projects offset={1}>
        <Title>Projects-Click for Details</Title>
        <ProjectsWrapper>
          <ProjectCard
            title="Weather App"
            link="https://github.com/sufanHuang/weather-react-app"
            bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
          >
            This is my first project to learn about retrieving data from APIs. I used react/bootstrap/weather APIs.
          </ProjectCard>
          <ProjectCard
            title="Recipe Search"
            link="https://github.com/sufanHuang/recipe-app"
            bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
          >
            This app helps me to solidify my experience with API as well as learning about react-router. I used react/bootstrap/API.
          </ProjectCard>
          <ProjectCard
            title="Todo APP"
            link="https://github.com/sufanHuang/todo-app"
            bg="linear-gradient(to right, #009245 0%, #FCEE21 100%)"
          >
            This is my first project to connect a frontend react UI with backend mySQL database using node and Express.
          </ProjectCard>
          <ProjectCard
            title="Reading-log App"
            link="https://github.com/sufanHuang/reading-log-app"
            bg="linear-gradient(to right, #D585FF 0%, #00FFEE 100%)"
          >
            An app that allows users to add, modify, delete the books the read, using react, bootstrap, firebase as backend.
          </ProjectCard>
          <ProjectCard
            title="Lunch-Count App"
            link="https://github.com/sufanHuang/Lunch-Count-App"
            bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
          >
            An app that allows users to add, modify, delete numbers of lunch counts, using react, semantic-UI, mySQL is used as backend.
          </ProjectCard>
          <ProjectCard
            title="Swallow-products-fullstack App"
            link="https://github.com/sufanHuang/swallow-products-fullstack"
            bg="linear-gradient(to right, #009245 0%, #FCEE21 100%)"
          >
            A small business website that displays current products, recipes and about the company pages. It also allows business owen to add, modify delete their products. React, reactstrap are used for frontend. Backend technology includes AWS dynamoDB, S3, API Gateway and serverless.
          </ProjectCard>
        </ProjectsWrapper>
      </Projects>
      <About offset={3}>
        <Title>About</Title>
        <h1 className="text-primary">I HAVE WORKED AS:</h1>
        <AboutDesc>
          <div>
            <div className="card-body">
              <h6 className="text-primary">Full-Stack Developer (2018-present)</h6>
              <ul>
                <li>Study programming close to 2000 hours through Udemy, Freecodecamp, various Youtube channels.</li>
                <li>Develop web apps from beginning to deployment.</li>
                <li>Research new technologies for use in projects.</li>
                <li>Keep abreast of emerging technologies, software and trends and project applications.</li>
              </ul>
              <h6 className="text-primary">Teacher- Des Moines Public School District (2012-2018)</h6>
              <ul>
                <li>Develop and maintain program websites using weebly,wordpress,FTP server technologies.</li>
                <li>Develop Prek-5 Chinese language and culture curriculum for IB school.</li>
                <li>Develop static web page contents using Storyline software. </li>
                <li>Provide 6-10 classes daily.</li>
                <li>Provide formative and summative assessments based on student learning.</li>
                <li> Communicate with parents for both academy learning and behavior.</li>
              </ul>

              <h6 className="text-primary">Curriculum Developer-University of Kansas 2010-2012</h6>
              <ul>
                <li> Use virtual technology to deliver curriculum and instruction.</li>
                <li> Create and implement effective and rigorous Club program.</li>
              </ul>

              <h6 className="text-primary">Administrative Assistant - ZTE (USA), Inc. KS  2010 </h6>
              <ul>
                <li>Provide daily administrative services.</li>
                <li>Compile monthly financial report.</li>
                <li>Coordinate meetings & recruiting.</li>
              </ul>
            </div>
          </div>
        </AboutDesc>
        <hr />
        <AboutHero>
          <h1>EDUCATION</h1>
        </AboutHero>
        <AboutDesc>
          <ul>
            <li>AWS Cloud Practitioner Certification  2019/9 </li>
            <li> MA in Education   - University of Kansas  2010</li>
            <li>BA in English - Shenzhen University, China  2008  </li>
          </ul>
        </AboutDesc>
        <hr />
        <AboutHero>
          <h1>HONORS</h1>
        </AboutHero>
        <AboutDesc>
          <ul>
            <li>Case Speaker - International Law Moot Court Competition, Washington, D.C.  2007</li>
            <li>1st Prize Award Winner - International Law Competition,  China    2007 </li>
          </ul>
        </AboutDesc>
      </About>
      <Contact offset={4}>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
            Email:  sufanhk@gmail.com.
            <br/>
            Find me on other platforms:{' '}
            <a href="https://github.com/sufanHuang">Github</a> &{' '}
            <a href="https://www.linkedin.com/in/sufan-huang-1829301b/">LinkedIn</a>
          </ContactText>
        </Inner>
        <Footer>
          &copy; 2019 by Sufan Huang Using Gatsby Starter Portfolio{' '}
        </Footer>
      </Contact>
    </Parallax>
  </>
)

export default Index

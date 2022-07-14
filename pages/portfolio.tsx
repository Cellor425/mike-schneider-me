import { ReactElement } from 'react'
import PageTitle from '../components/atoms/pageTitle'
import Layout from '../components/templates/layout'
import Modal from '../components/templates/modal'
import ProfileCardBlock from '../components/templates/profileCardBlock'
import { NextPageWithLayout } from './_app'

const Portfolio: NextPageWithLayout  = () => {
  return (
    <div className='flex flex-col w-full py-10 justify-center'>
      <PageTitle title='My Portfolio'/>
        <div className='flex flex-col w-full m-auto px-5 space-y-5 divide-rai-bone'>
          <ProfileCardBlock>
            <Modal title='Pizza Shop App' 
                   imgsrc='/csharp.webp' 
                   link='https://github.com/Cellor425/Pizza-Maker-Program-2018-OOP-Design'
                   content='A simple WPF application to demonstrate the use of OOP design patterns.'>
              <div className='flex flex-row'>
                <div className='flex flex-col'>
                  <h3 className='text-xl underline underline-offset-2'>Technology</h3>
                  <ul className='text-sm divide-y divide-dashed'>
                    <li>C#</li>
                    <li>WPF</li>
                  </ul>
                </div>
                <div className='text-sm px-5'>
                  The Pizza Maker application is a program that allows a user to create a custom pizza with multiple ingredients from putting the pizza together to cooking the pizza and finalizing the pizza for pickup.
                  The application has three main parts that contribute to the whole: the pizza states, the ingredients, and the pizza objects.  The pizza states handle the changing of the pizza as it is built and cooked.  
                  The ingredients are objects that can be added to the pizza object.  The pizza objects are the glue that holds the ingredients and state information as well as a template to calculate the total cost of the pizza when all is said and done.
                </div>
              </div>
            </Modal>
            <Modal title='Media Monkey' 
                   imgsrc='/netcore.webp' 
                   link='https://github.com/Cellor425/MM'
                   content='A media upload application made using ASP.NET Core and EntityFramework.'>
              <div className='flex flex-row'>
                <div className='flex flex-col'>
                  <h3 className='text-xl underline underline-offset-2'>Technology</h3>
                  <ul className='text-sm divide-y divide-dashed'>
                    <li>C#</li>
                    <li>.NET Core</li>
                    <li>Entity Framework</li>
                    <li>FTP</li>
                  </ul>
                </div>
                <div className='text-sm px-5'>
                  Media Monkey is team project that I lead and contributed on in my second year at Northcentral Technical College. The project is an attempt to recreate the core functionality of a website like YouTube while learning
                  .NET Core. Some of the functionality of the application includes administrator views/actions, robust and secure user account creation and management for state handling, interfacing with an FTP to upload and present
                  media. My main contribution for the project was the setup of the core backend funcitonality and organizing the sprints for the team.
                </div>
              </div>
            </Modal>
            <Modal title='Backup Saves CLI' 
                   imgsrc='/csharp.webp' 
                   link='https://github.com/Cellor425/BackupSaves'
                   content='Command line app that utilizes API calls and file moving to backup steam games.'>
              <div className='flex flex-row'>
                <div className='flex flex-col'>
                  <h3 className='text-xl underline underline-offset-2'>Technology</h3>
                  <ul className='text-sm divide-y divide-dashed'>
                    <li>C#</li>
                    <li>CLI</li>
                    <li>.NET Core</li>
                  </ul>
                </div>
                <div className='text-sm px-5'>
                  Created from the tragedy of loosing a 250+hr save after I had to unexpectedly clean install my OS, this application uses a simple command line interface to perform an automated backup of Steam and Ubisoft game saves.
                  It utilizes SteamAPI to get a list of owned games and search for the directory containing those games. It then recursively copys all files to a designated alternate location. All actions taken are logged by writing to a text file
                  at the backup location.
                </div>
              </div>
            </Modal>
            <Modal title='Product Angular App Demo' 
                   imgsrc='/angular.webp' 
                   link='https://github.com/Cellor425/AngularExample'
                   content='A basic Angular application to demonstrate how data binding works.'>
              <div className='flex flex-row'>
                <div className='flex flex-col'>
                  <h3 className='text-xl underline underline-offset-2'>Technology</h3>
                  <ul className='text-sm divide-y divide-dashed'>
                    <li>TypeScript</li>
                    <li>Angular</li>
                  </ul>
                </div>
                <div className='text-sm px-5'>
                  This application is a demonstration of how model binding works in Angular. The application simply performs some CRUD operations on a product list.
                </div>
              </div>
            </Modal>
            <Modal title='Quiz App' 
                   imgsrc='/php.webp' 
                   link='https://github.com/Cellor425/Quiz-App'
                   content='A simple SSR quiz application built using php.'>
              <div className='flex flex-row'>
                <div className='flex flex-col'>
                  <h3 className='text-xl underline underline-offset-2'>Technology</h3>
                  <ul className='text-sm divide-y divide-dashed'>
                    <li>php</li>
                    <li>Apache</li>
                  </ul>
                </div>
                <div className='text-sm px-5'>
                  The Quiz App is a simple demonstration of how php is used to make a SSR application. The app includes the use of state for user management and templates for page generation.
                </div>
              </div>
            </Modal>
            <Modal title='Personal Website' 
                   imgsrc='/nextjs.webp' 
                   link='https://github.com/Cellor425/mike-schneider-me'
                   content='A personal website built using Next.js and Tailwind CSS. You are using this now!'>
              <div className='flex flex-row'>
                <div className='flex flex-col'>
                  <h3 className='text-xl underline underline-offset-2'>Technology</h3>
                  <ul className='text-sm divide-y divide-dashed'>
                    <li>TypeScript</li>
                    <li>Next.js</li>
                    <li>Tailwind CSS</li>
                    <li>AWS Hosting</li>
                  </ul>
                </div>
                <div className='text-sm px-5'>
                  This website was a personal undertaking to learn the Next.js and Tailwind CSS frameworks and to demonstrate front end development. It is served from an AWS bucket as a SSG application.
                </div>
              </div>
            </Modal>
          </ProfileCardBlock>
        </div>
    </div>
  )
}

export default Portfolio

Portfolio.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
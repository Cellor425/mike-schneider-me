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
            <Modal title='Pizza Shop App' imgsrc='/csharp.webp' link='https://github.com/Cellor425/Pizza-Maker-Program-2018-OOP-Design'>
              I don't know man. I just found the shit on the floor. It was smeared everywhere.
            </Modal>
            <Modal title='Media Monkey' imgsrc='/netcore.webp' link='https://github.com/Cellor425/MM'>
              I don't know man. I just found the shit on the floor. It was smeared everywhere.
            </Modal>
            <Modal title='Backup Saves CML' imgsrc='/csharp.webp' link='https://github.com/Cellor425/BackupSaves'>
              I don't know man. I just found the shit on the floor. It was smeared everywhere.
            </Modal>
            <Modal title='Product Angular App Demo' imgsrc='/angular.webp' link='https://github.com/Cellor425/AngularExample'>
              I don't know man. I just found the shit on the floor. It was smeared everywhere.
            </Modal>
            <Modal title='Quiz App' imgsrc='/php.webp' link='https://github.com/Cellor425/CNMT310'>
              I don't know man. I just found the shit on the floor. It was smeared everywhere.
            </Modal>
            <Modal title='Personal Website' imgsrc='/nextjs.webp' link=''>
              I don't know man. I just found the shit on the floor. It was smeared everywhere.
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
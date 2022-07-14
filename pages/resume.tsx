import { ReactElement } from 'react'
import BackToTop from '../components/atoms/backToTop'
import PageTitle from '../components/atoms/pageTitle'
import { Tabs } from '../components/templates/tabs'
import Layout from '../components/templates/layout'
import { NextPageWithLayout } from './_app'

const Resume: NextPageWithLayout  = () => {
  return (
    <div className='flex flex-col w-5/6 mx-auto py-10'>
      <PageTitle title='My Resume' />
      <Tabs color='rai-green' />
      <BackToTop />
    </div>
  )
}

export default Resume

Resume.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
import React from 'react'
import Header from '../../components/Header'
import { Tabs } from 'antd';
import Adminintro from './Adminintro';
import AdminAbout from './AdminAbout';
import { useSelector } from 'react-redux';
import AdminSidebar from './AdminSidebar';
import AdminContact from './AdminContact';
import AdminExperience from './AdminExperience';


const { TabPane }= Tabs;
function Admin() {
  const {portfolioData} = useSelector((state)=>state.root);

  return (
    <div className="">
        <Header />
        {portfolioData && 
      <div className="mt-5 p-5">
        <Tabs defaultActiveKey='1'>
            <TabPane tab="Intro" key="1">
                <Adminintro />
            </TabPane>
            <TabPane tab="About" key="2">
                <AdminAbout />
            </TabPane>
            <TabPane tab="Links" key="3">
                <AdminSidebar />
            </TabPane>
            <TabPane tab="Contact" key="4">
                <AdminContact />
            </TabPane>
            <TabPane tab="Experience" key="5">
                <AdminExperience />
            </TabPane>
        </Tabs>
      </div> }
    </div>
  )
}

export default Admin

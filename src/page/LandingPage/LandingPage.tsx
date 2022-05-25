import React, {useState, useEffect} from 'react'
import BodyContainer from "../../component/container/BodyContainer";
import SidebarContainer from "../../component/sidebar/SidebarContainer";
import ContentsData from '../../utils/Data.json'

const LandingPage = () =>{ 
  return (
  <div className="Container">
    {ContentsData.map(( data, index ) => (
      <div className='bodycontants' key={index}>
        <BodyContainer BodyContants={data}/>
        {data.link && <SidebarContainer  SideBarData={data.sidebar} />}
      </div>
    ))}
  </div>
);
}
export default LandingPage
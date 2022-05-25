import * as React from "react";
import {SideBar} from '../../types'
import {Card} from 'react-bootstrap';  

interface SideBarDataProps {
  SideBarData: SideBar;
}

const SidebarContainer: React.FC<SideBarDataProps> = ({SideBarData}) => {
  return (
  <div className="sidebar">
    <Card style={{ width: '18rem' }}>
      <div className="left_card"></div>
      {SideBarData.image && <img src={SideBarData.image} className="card-img" alt="..."></img>}
      {SideBarData.video && <video className="card-video" controls> <source src="movie.mp4" type="video/mp4" /></video>}
      <Card.Body>
        <div className="side_area">
          <div className="icon_username">EA</div>
          <div className="side_contant">
            <div>{SideBarData.name}</div>
            <div>{SideBarData.description}</div>
            <div>{SideBarData.datetime}</div>
          </div>
        </div>
      </Card.Body>
      <div className="card_input_group"><input className="card_input" type="text" placeholder="Repay"/></div>
    </Card>
    
  </div>
); }
export default SidebarContainer
import React, {useState, useEffect,useLayoutEffect} from "react";
import {BodyContants} from '../../types'
import {Card} from 'react-bootstrap';  


interface ContantProps {
    BodyContants: BodyContants;
  }

const BodyContainer: React.FC<ContantProps> = ({BodyContants}) => {
    const [showModal, setShowModal] = useState(false);
        const [size, setSize] = useState(0);
        useLayoutEffect(() => {
          function updateSize() {
            setSize(window.innerWidth);
          }
          window.addEventListener('resize', updateSize);
          updateSize();
          
        }, []);
    const handleModal = () => {
        setShowModal(!showModal);
        
    }
    return(
    <div className="main_contaner">
            {BodyContants.text}
            <div className="hover" onClick={handleModal}>
                {BodyContants.link}
            </div>
            {
                showModal && size<760 && (
                <div className="card_modal"  >
                    <Card style={{ width: '18rem' }}>
                        <div className="close_modal" onClick={handleModal}>&times;</div>
                        {BodyContants.sidebar.image && <img src={BodyContants.sidebar.image} className="card-img" alt="..."></img>}
                        {BodyContants.sidebar.video && <video className="card-video" controls> <source src={BodyContants.sidebar.video} type="video/mp4" /></video>}

                        <Card.Body>
                            <div className="side_area">
                            <div className="icon_username">EA</div>
                            <div className="side_contant">
                                <div>{BodyContants.sidebar.name}</div>
                                <div>{BodyContants.sidebar.description}</div>
                                <div>{BodyContants.sidebar.datetime}</div>
                            </div>
                            </div>
                        </Card.Body>
                        <div className="card_input_group"><input className="card_input" type="text" placeholder="Repay"/></div>
                    </Card>
                </div>
                )
            }
            

            
    </div>
    );}
export default BodyContainer
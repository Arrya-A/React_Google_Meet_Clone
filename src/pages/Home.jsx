import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { ButtonGroup, Container, Dropdown, DropdownButton } from 'react-bootstrap'

function Home() {
  return (
    <>
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-5 p-5 m-3" style={{ border: '1px solid black', height: '100vh' }}>
            <img className='mb-3' src="https://storage.googleapis.com/googwebreview.appspot.com/grow-ext-cloud-images-uploads/7uffzv9dk4sn-3dAGxdfnn2dy6LPNvOTYRx-8be390cd801f65e46a67dec3941d7c86-Google_Meet_Logo_x2_5E4DE7D1.svg" alt="" />
            <h1 style={{fontSize:'55px', fontWeight:'600'}}>Video calls with anyone, anywhere</h1>
            <p className='mb-3 fs-5 text-secondary'>Stay connected and collaborate with friends, family and colleagues no matter where you are.</p>
            <div className='d-flex'>
              <div>
                <button className='btn btn-primary me-2 custom-button'>Sign in</button>
              </div>
              <div className='mb-5'>
                <ButtonGroup className='custom-buttongroup mx-3 px-2 py-1'>
                  <DropdownButton as={ButtonGroup} title="Try Meet for work  " id="bg-nested-dropdown">
                    <Dropdown.Item eventKey="1">For small business</Dropdown.Item>
                    <Dropdown.Item eventKey="2">For enterprise</Dropdown.Item>
                  </DropdownButton>
                </ButtonGroup>
              </div>

              


            </div>
            <div className='d-flex pt-3'>
                <p>Join a meeting now</p>
                <a className='ms-4' href='#'>Enter code <FontAwesomeIcon icon={faCircleInfo} size='sm' className='ms-3' /></a>
              </div>
          </div>
          <div className="col-md-5 " style={{ border: '1px solid black', height: '100vh' }}>
            <img src="https://lh3.googleusercontent.com/ymE-oI_G6XpO7K6hL4asEjjhdRl23BOB-ytyvZ6ExQ-Mhkzp9AgMiQsQXU8Vzsjk3H3syNRdv-Qy_3Q_mkxsj0IzxG7ESJvW0AXEig=e365-pa-nu-rw-w1416" alt="" style={{height:'100px'}} />
          </div>
          <div className="col-md-1"></div>

        </div>
    </>
  )
}

export default Home
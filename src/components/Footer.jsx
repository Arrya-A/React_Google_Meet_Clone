import { faInstagram, faLinkedin, faSquareFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faGlobe, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import image from '../assets/logo_footer.png'



function Footer() {
  return (
    <>
      <div className='gray-text'>
        <div className="row py-5 ">
          <div className="col-md-1"></div>
          <div className="col-md-2">
            <p>Follow our Blog</p>
          </div>
          <div className="col-md-2 d-flex justify-content-between">
            <FontAwesomeIcon icon={faTwitter} size="xl" />
            <FontAwesomeIcon icon={faYoutube} size="xl" />
            <FontAwesomeIcon icon={faLinkedin} size="xl" />
            <FontAwesomeIcon icon={faInstagram} size="xl" />
            <FontAwesomeIcon icon={faSquareFacebook} size="xl" />
          </div>
          <div className="col-md-2">

          </div>
          <div className="col-md-4">
            <form>
              <div className='searchContainer w-75'>
                <FontAwesomeIcon icon={faMagnifyingGlass} className='searchButton me-2' />
                <input
                  type="text"
                  placeholder="Search this site"
                  className='searchInput'
                />

              </div>
            </form>
          </div>
          <div className="col-md-1"></div>
        </div>
        <hr style={{ width: '83%', margin: 'auto' }} />


        <div className="row py-5">
          <div className="col-md-1"></div>
          <div className="col-md-2">
            <h6>Included applications</h6>
            <p>Gmail</p>
            <p>Meet</p>
            <p>Chat</p>
            <p>Calendar</p>
            <p>Drive</p>
            <p>Docs</p>
            <p>Sheets</p>
            <p>Slides</p>
            <p>Forms</p>
            <p>Sites</p>
            <p>Keep</p>
            <p>Apps Script</p>
          </div>
          <div className="col-md-2">
            <h6>Security and management</h6>
            <p>Admin</p>
            <p>Endpoint</p>
            <p>Vault</p>
            <p>Work Insights</p>

            <h6 className='mt-4'>Solutions</h6>
            <p>New Business</p>
            <p>Small Business</p>
            <p>Enterprise</p>
            <p>Education</p>
            <p>Nonprofits</p>
            <p>Artificial Intelligence</p>
          </div>
          <div className="col-md-2">
            <h6>Pricing</h6>
            <p>Compare pricing plans</p>

            <h6 className='mt-4'>Add ons</h6>
            <p>Gemini for Workspace</p>
            <p>AppSheet</p>
          </div>
          <div className="col-md-2">
            <h6>Resources</h6>
            <p>Working remotely</p>
            <p>Security</p>
            <p>FAQs</p>
            <p>Partners</p>
            <p>Marketplace</p>
            <p>Integrations</p>
            <p>Training & Certification</p>
            <p>Refer Google Workspace</p>
          </div>
          <div className="col-md-2">
            <h6>Learning and support</h6>
            <p>Admin Help</p>
            <p>Setup and Deployment Center</p>
            <p>Learning Center for Users</p>
            <p>Forums for Admins</p>
            <p>Google Workspace Dashboard</p>
            <p>Find a Google Workspace Partner</p>
            <p>Join the community of IT Admins</p>
            <p>Press</p>

            <h6 className='mt-4'>More from Google</h6>
            <p>Google Cloud</p>
            <p>Chrome Enterprise</p>
            <p>Google Business Solutions</p>
            <p>Google Ads</p>
            <p>Business Messages</p>
            <p>Join User Studies</p>
          </div>
          <div className="col-md-1"></div>
        </div>

        <hr style={{ width: '83%', margin: 'auto' }} />


        <div className="row py-5">
          <div className="col-md-1"></div>
          <div className="col-md-10 d-flex justify-content-between">
            <div className='d-flex '>
              <img src={image}
                width="90"
                height="30" />
              <p className='ms-4'>About Google</p>
              <p className='ms-4'>Google Products</p>
              <p className='ms-4'>Privacy</p>
              <p className='ms-4'>Terms</p>
            </div>
            <div>
              <p><FontAwesomeIcon icon={faGlobe} size='lg' className='me-2' />English - India</p>
            </div>
          </div>


          <div className="col-md-1"></div>
        </div>
      </div>
    </>
  )
}

export default Footer
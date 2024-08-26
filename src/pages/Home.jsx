import { height } from '@fortawesome/free-brands-svg-icons/fa42Group'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { ButtonGroup, Container, Dropdown, DropdownButton } from 'react-bootstrap'

function Home() {
  return (
    <>
      {/* section 1 */}
      <div className="row mt-5">
        <div className="col-md-1"></div>
        <div className="col-md-5 p-5 m-3" style={{ height: '100vh' }}>
          <img className='mb-3' src="https://storage.googleapis.com/googwebreview.appspot.com/grow-ext-cloud-images-uploads/7uffzv9dk4sn-3dAGxdfnn2dy6LPNvOTYRx-8be390cd801f65e46a67dec3941d7c86-Google_Meet_Logo_x2_5E4DE7D1.svg" alt="" />
          <h1 style={{ fontSize: '55px', fontWeight: '600' }}>Video calls with anyone, anywhere</h1>
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
        <div className="col-md-5 mt-3 ps-0 ms-0" style={{ height: '100vh' }}>
          <img src="https://lh3.googleusercontent.com/ymE-oI_G6XpO7K6hL4asEjjhdRl23BOB-ytyvZ6ExQ-Mhkzp9AgMiQsQXU8Vzsjk3H3syNRdv-Qy_3Q_mkxsj0IzxG7ESJvW0AXEig=e365-pa-nu-rw-w1416" alt="" style={{ height: '75%' }} />
        </div>
        <div className="col-md-1"></div>
      </div>



      {/* section 2 */}
      <div className="row" style={{ height: '70vh' }}>
        <div className="col-md-1"></div>
        <div className="col-md-5 mt-3 ps-0 ms-0" style={{ height: '100vh' }}>
          <img src="https://lh3.googleusercontent.com/d2tc-nf-842eRDF3C5bc6F9muUpq2khc8CBlzKd8j6yuk39ttqD8lpifek7NKGQWAqy1TcpfzPr8LvBbzHBsFzmnkJ76--5-jNj30g=e365-pa-nu-rw-w1508" alt="" style={{ height: '55%' }} />
        </div>
        <div className="col-md-5 p-5 mx-5 mt-3 " style={{ height: '100vh' }}>
          <h1 className='mx-5'>Experience rich,<br />
            collaborative <br />
            meetings with Gemini</h1>
          <p className='mb-3 text-secondary mx-5'>Look and sound your best with studio look, studio sound and studio lighting. Connect in 15+ languages with translated captions. Use "take notes for me" for meeting details and action items (coming soon). Try all this and more to unlock the power of generative AI with <span><a href='#'>Gemini for Google Workspace</a></span>.</p>
        </div>

        <div className="col-md-1"></div>
      </div>



      {/* section 3 */}
      <div className="row" style={{ height: '70vh' }}>
        <div className="col-md-1"></div>

        <div className="col-md-4 p-5 m-3" style={{ height: '100vh' }}>
          <h1 className='mt-5'>Connect with <br />
            others in more ways</h1>
          <p className='mb-3 text-secondary'>Whether scheduled or spontaneous, in real-time calls or exchanging video messages, Google Meet helps you connect in the ways that work best for you.</p>
        </div>
        <div className="col-md-6 mt-3 ps-0 ms-0" style={{ height: '100vh' }}>
          <img src="https://lh3.googleusercontent.com/aM4x2N6e11btK30KARTNai1pQtu8PQoG5-ZUWxJFGfvP_P2l6mP4hfnOLstKgLPmo6fuv2p-3veWcmdWB-mpCvf4Rem7L6KmOY6eqFFd=e365-pa-nu-rw-w1508" alt="" style={{ height: '57%' }} />
        </div>

        <div className="col-md-1"></div>
      </div>



      {/* section 4 */}
      <div className="row" style={{ height: '70vh' }}>
        <div className="col-md-1"></div>
        <div className="col-md-5 mt-3 ps-0 ms-0" style={{ height: '100vh' }}>
          <img src="https://lh3.googleusercontent.com/CFCZLdZPy7CX9QjvIkII27Iio7TtE7iIpXgcdGjAU20_q9muWaU-3TV60u7w6SDuGjsReUsuf9q4OKCxHLUxz93XByL8-zEgvN-CDA=e365-pa-nu-rw-w1508" alt="" style={{ height: '57%' }} />
        </div>
        <div className="col-md-5 p-5 m-3" style={{ height: '100vh' }}>
          <h1 className='mt-5 ms-5 pt-5'>Meet on any device</h1>
          <p className='mx-5 mb-3 text-secondary'>Join on your mobile phone or tablet via the Google Meet app, available on the <span><a href='#'>app store</a></span> and <span><a href='#'>Play Store</a></span>. Or connect from your computer browser – no software install needed.</p>
        </div>

        <div className="col-md-1"></div>
      </div>

      <div className='text-center'>
        <h1 className='mt-5'>Built for better conversations</h1>
        <p className='fs-5 text-secondary'>Meet handles the details so that you can focus on connecting.</p>
      </div>


      {/* section 5 */}
      <div className="row" style={{ height: '80vh' }}>
        <div className="col-md-1"></div>
        <div className="col-md-5 mt-5 ps-5 ms-5" style={{ height: '100vh' }}>
          <img src="https://lh3.googleusercontent.com/fAghi5G1_qYY-QMqYXgsgnihV-FWAlhADf_LTR6JJIY4cUOFUpANz7BsFQ-Nj8mj10v7t6qdaGUzxfxpyWZh6SVen028KGpvECE-TyE=e365-pa-nu-s0" alt="" style={{ height: '65%' }} />
        </div>
        <div className="col-md-5 p-5 mt-5 " style={{ height: '100vh' }}>
          <h5 className='fs-5 text-secondary ms-5 mt-5'>High-quality video</h5>
          <p className='text-secondary ms-5 mb-5'>Enjoy up to 1080p video quality1, studio lighting (premium feature) and add a stylised background.</p>
          <h5 className='fs-5 text-secondary ms-5 mb-5'>Noise cancellation</h5>
          <h5 className='fs-5 text-secondary ms-5'>Live captions</h5>
        </div>

        <div className="col-md-1"></div>
      </div>


      <div className='text-center'>
        <h1 className='mt-5'>Do more, together</h1>
        <p className='fs-5 text-secondary'>Seamlessly collaborate with integrations across Google Workspace.

        </p>
      </div>


      {/* section 6 */}
      <div className="row p-5 m-5" style={{ height: '70vh' }}>
        <div className="col-md-1"></div>
        <div className="col-md-5" style={{ height: '100vh' }}>
          <h5 className='fs-5 text-secondary mt-5 pt-5'>Collaborate together</h5>
          <p className='text-secondary mb-5'>Collaborate in context by meeting directly from Google Docs, Sheets and Slides.</p>
          <h5 className=' text-secondary mb-5'>Plan together</h5>
          <h5 className=' text-secondary'>Ideate together</h5>
        </div>
        <div className="col-md-5" style={{ height: '100vh' }}>
          <img src="https://lh3.googleusercontent.com/Mb_8r1dXB_TkjcWfUrz6NvLYJDKte3Q9qWB9O0C7DKO3BbGvWq2nC0ocaRmJ8ZbRpW-pSizV-FT3Diy4rEmA5TDbnnNwnwPIng6lR3x6=e365-pa-nu-s0" alt="" style={{ height: '65%' }} />
        </div>


        <div className="col-md-1"></div>
      </div>



      {/* section 7 */}
      <div className="row  " style={{ height: '70vh' }}>
        <div className="col-md-1"></div>
        <div className="col-md-5 d-flex  align-items-center justify-content-center" style={{ height: '100vh' }}>
          <img src="https://lh3.googleusercontent.com/ZgI-764BB-3qOD-vWLfQNxeBvgGhx6hx9UOLBUvJGyT8wgF85sVd43mKc396FIkotPyb21UJhxTjQqZmWbdW8sIT4nZCdd8QUJEkbF0=e365-pa-nu-rw-w1508" alt="" style={{ height: '55%' }} />
        </div>
        <div className="col-md-5 d-flex flex-column align-items-left justify-content-center" style={{ height: '100vh' }}>
          <h1 className='px-5 mx-5'>Enjoy every moment</h1>
          <p className='px-5 mx-5 mb-3 text-secondary'>Make your time together fun. Watch YouTube videos, listen to music and play games with Meet live sharing2. Enjoy interactive features like effects and emoji reactions.</p>
        </div>

        <div className="col-md-1"></div>
      </div>



      {/* section 8 */}
      <div className="row">
        <div className="col-md-1"></div>

        <div className="col-md-5 d-flex flex-column align-items-left justify-content-center" style={{ height: '100vh' }}>
          <h1 className='px-5 mx-5'>Stay safe</h1>
          <p className='px-5 mx-5 mb-3 text-secondary'>Your data is <span><a href='#'>encrypted</a></span> by default, and an array of safety measures – like advanced encryption, anti-abuse measures and privacy <span><a href='#'>controls</a></span> – keep your data private.</p>
        </div>
        <div className="col-md-5  d-flex  align-items-center justify-content-center" style={{ height: '100vh' }}>
          <img src="https://lh3.googleusercontent.com/FSiUlE1hsn95GJol-ua_dGIVanjIADqcKtTxWTiy1elte1xxekfeXY1xNb2Xth36hdmIqI4n-6_Tf_UCIP2_Kq4FVHwUc8Vp3-UAAXE=e365-pa-nu-rw-w1509" alt="" style={{ height: '60%' }} />
        </div>
        <div className="col-md-1"></div>
      </div>



      {/* section 9 */}

      <div className='d-flex flex-column align-items-center'>
        <h1 className='mb-3'>Do more with premium features</h1>
        <p className='fs-5 text-secondary mb-5'>Sign up for a <span><a href='#'>Google Workspace</a></span> or <span><a href='#'>Google One Premium</a></span> plan to access premium features.</p>
        <div className="row justify-content-center">
          <div className="col-md-3 d-flex flex-column align-items-center">
            <img className='border rounded-4' src="https://lh3.googleusercontent.com/fHN3JHHapWf7spxzp_YpeLn2JGzhVHCk7NK3pQuatpLdVn_17amKogZsvLJvET4H17auxQX2nlGROUMRZaPNCrPQ0jR7K3d1aGO4FQ=e365-pa-nu-rw-w739" alt="" style={{ width: '100%' }} />
            <h5 className='fs-4 mt-5 mb-3'>Meet longer</h5>
            <p className='text-secondary text-center'>Hold group calls for up to 24 hours.</p>
          </div>
          <div className="col-md-3 d-flex flex-column align-items-center">
            <img className='border rounded-4' src="https://lh3.googleusercontent.com/oiG87znGRoz_vVSJJ30MxHrxI2WF5DsB0s_AhaOxjUrbsjTYMtFrMXMFfBaUHGrZXwu06UtJhFAye4M5Y4e5fikfLmUHSO7CRgyK0_A4=e365-pa-nu-rw-w739" alt="" style={{ width: '100%' }} />
            <h5 className='fs-4 mt-5 mb-3'>Keep a record </h5>
            <p className='text-secondary text-center'>Use recordings and transcripts to capture what was discussed.</p>
          </div>
          <div className="col-md-3 d-flex flex-column align-items-center">
            <img className='border rounded-4' src="https://lh3.googleusercontent.com/6msBm09DkKs-7_H3DFKzrMP8zyNcOczPb2K3wJRMcBBlI1_PVXmiL2ifouthpYuAI6T2IhEFFXFenRc4HTZ6_nxTWEeS7SsSI4aPRA=e365-pa-nu-rw-w739" alt="" style={{ width: '100%' }} />
            <h5 className='fs-4 mt-5 mb-3'>Host larger meetings</h5>
            <p className='text-secondary text-center'>Add up to 1,000 participants.</p>
          </div>
        </div>
      </div>


      <div className="container" style={{ backgroundColor: 'whitesmoke' }}>
        <div className='d-flex flex-column justify-content-center align-items-center'>
          <img className='mt-5 pt-5 mb-4' src="https://storage.googleapis.com/googwebreview.appspot.com/grow-ext-cloud-images-uploads/7uffzv9dk4sn-7DGlDaxHMDNkZ4FFvC8weI-706204003ec5a1470c2b195befa63f2c-Meet_07124B34.svg" alt="" style={{ width: '100px' }} />
          <h1 className='mb-4'>Connect on Google Meet</h1>

          <button className='btn btn-primary custom-button mb-3' style={{ paddingLeft: '70px', paddingRight: '70px' }}>Sign in</button>

          <div className='mb-5 pb-5'>
            <ButtonGroup className='custom-buttongroup'>
              <DropdownButton as={ButtonGroup} title="Try Meet for work" id="bg-nested-dropdown">
                <Dropdown.Item eventKey="1">For small business</Dropdown.Item>
                <Dropdown.Item eventKey="2">For enterprise</Dropdown.Item>
              </DropdownButton>
            </ButtonGroup>
          </div>




        </div>
      </div>



      <div className="row pt-5">
        <div className="col-md-2"></div>
        <div className="col-md-8">
          <hr />
          <p style={{ fontSize: '12px' }}><sup>1 </sup> Bandwidth permitting. Google Meet automatically adjusts to the highest video quality possible based on your bandwidth.</p>
          <p style={{ fontSize: '12px' }}><sup>2 </sup> Requires a YouTube Premium membership.</p>
        </div>
        <div className="col-md-2"></div>
      </div>


      <div className='d-flex align-items-center justify-content-center' style={{ backgroundColor: 'whitesmoke' }}>
        

        <form className='w-50 p-5 m-5'>
        <h3 className='mb-4'>Sign up for the Google Workspace newsletter</h3>
          <input type="email" placeholder='Enter your mail address' className='form-control' />
          <div className='d-flex mt-4'>
            <input type="checkbox" className='checkbox'/>
            <p className='ms-3' style={{fontSize:'12px'}}>Also sign me up for Google Cloud emails with news, product updates, event information, special offers, and more. (Optional and you can unsubscribe at a later time).</p>
            </div>
            <p style={{fontSize:'12px'}}>I understand that my personal data will be processed in accordance with Google’s <span><a href='#'>Privacy Policy</a></span>.</p>
            <div className='text-end'>
              <button className='btn btn-primary me-2 custom-button'>Sign up</button>
            </div>
        </form>
      </div>

    </>
  )
}

export default Home
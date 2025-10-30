import React from 'react'
import { Link } from 'react-router-dom'
Link

function Landing() {
  return (
    <div>
      {/* landing */}
      <section style={{ height: '100vh', width: '100%', backgroundImage: "url('https://www.cpasitesolutions.com/cpa-websites/wp-content/uploads/2024/06/local-seo-for-bookeepers-1.png')", backgroundAttachment: 'fixed', backgroundPosition: 'top', backgroundSize: 'cover' }} className='container-fluid row align-items-center' >
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4 shadow border rounded mt-5 text-center py-5" style={{ backgroundColor: "rgba(255,255,255,0.5)" }}>
            <h3>Designed to get hired.
              Your skills, your story, your next job - all in one.</h3>
            <Link to={'/resume'} className='btn text-white' style={{ backgroundColor: 'purple' }}>Make Yor Resume</Link>
          </div>
          <div className="col-md-4"></div>
        </div>
      </section>
      {/* tool */}

      <section className='m-5'>
        <h1 className='text-center'>Tools</h1>
        <div className="container row align-items-center">
          <div className="col-6">
            <h3>Resume</h3>
            <p>Create unlimited new resumes and easily edit them afterwards.</p>

            <h3> Cover Letters</h3>
            <p>  Easily write professional cover letters.</p>

            <h3> Jobs</h3>
            <p>Automatically receive new and relevant job postings.</p>

            <h3> Applications</h3>
            <p> Effortlessly manage and track your job applications in an organized manner.</p>
          </div>
          <div className="col-md-6">
            <img className='img-fluid' src="https://cdn-images.zety.com/images/zety/landings/builder/resume-builder-jumbotron-image@3x.png" alt="" />
          </div>
        </div>
      </section>

      {/* image */}
      <section style={{ height: '500px', backgroundPosition: 'top', width: '100%', backgroundImage: "url('https://www.icu.ac.jp/en/assets/img/academics/ph_gs_ma_01.jpg')", backgroundSize: 'cover', backgroundAttachment: 'fixed' }}>

      </section>
      {/* testimony */}
      <section className='m-5'>
        <h1 className='text-center'>Testimony</h1>
        <div className="row container mt-1 p-5">
          <div className="col-md-5">
            <h3 className='text-center my-3'>Trusted by professionals worldwide.</h3>
            <p className='fs-5' style={{ textAlign: 'justify' }}>At LiveCareer, we don't just help you create résumés — we help you land the job. Whether you're a seasoned professional or just starting out, our tools are designed to get results.
            </p>
            <p className='fs-5' style={{ textAlign: 'justify' }}>In fact, users who used LiveCareer reported getting hired an average of 48 days faster.</p>
            <p className='fs-5' style={{ textAlign: 'justify' }}>Join thousands of job-seekers who’ve fast-tracked their careers with a résumé that truly stands out.</p>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-6 p-5 ">
            <div className='row mb-1'>
             <div className="col-md-3">
              <img style={{width:'100%'}} src="https://png.pngtree.com/thumb_back/fw800/background/20230316/pngtree-biometric-passport-photo-of-attractive-femalenatural-look-healthy-skin-photo-image_50880378.jpg" alt="p1" />
             </div>
             <div className="col-md-3">
              <img style={{width:'100%'}} src="https://png.pngtree.com/thumb_back/fw800/background/20230316/pngtree-biometric-passport-photo-of-attractive-femalenatural-look-healthy-skin-photo-image_50880378.jpg" alt="p1" />
             </div>
             <div className="col-md-3">
              <img style={{width:'100%'}} src="https://png.pngtree.com/thumb_back/fw800/background/20230316/pngtree-biometric-passport-photo-of-attractive-femalenatural-look-healthy-skin-photo-image_50880378.jpg" alt="p1" />
             </div>
             <div className="col-md-3">
              <img style={{width:'100%'}} src="https://png.pngtree.com/thumb_back/fw800/background/20230316/pngtree-biometric-passport-photo-of-attractive-femalenatural-look-healthy-skin-photo-image_50880378.jpg" alt="p1" />
             </div>
            </div>
             <div className='row mb-1'>
             <div className="col-md-3">
              <img style={{width:'100%'}} src="https://png.pngtree.com/thumb_back/fw800/background/20230316/pngtree-biometric-passport-photo-of-attractive-femalenatural-look-healthy-skin-photo-image_50880378.jpg" alt="p1" />
             </div>
             <div className="col-md-3">
              <img style={{width:'100%'}} src="https://png.pngtree.com/thumb_back/fw800/background/20230316/pngtree-biometric-passport-photo-of-attractive-femalenatural-look-healthy-skin-photo-image_50880378.jpg" alt="p1" />
             </div>
             <div className="col-md-3">
              <img style={{width:'100%'}} src="https://png.pngtree.com/thumb_back/fw800/background/20230316/pngtree-biometric-passport-photo-of-attractive-femalenatural-look-healthy-skin-photo-image_50880378.jpg" alt="p1" />
             </div>
             <div className="col-md-3">
              <img style={{width:'100%'}} src="https://png.pngtree.com/thumb_back/fw800/background/20230316/pngtree-biometric-passport-photo-of-attractive-femalenatural-look-healthy-skin-photo-image_50880378.jpg" alt="p1" />
             </div>
            </div>
             <div className='row mb-1'>
             <div className="col-md-3">
              <img style={{width:'100%'}} src="https://png.pngtree.com/thumb_back/fw800/background/20230316/pngtree-biometric-passport-photo-of-attractive-femalenatural-look-healthy-skin-photo-image_50880378.jpg" alt="p1" />
             </div>
             <div className="col-md-3">
              <img style={{width:'100%'}} src="https://png.pngtree.com/thumb_back/fw800/background/20230316/pngtree-biometric-passport-photo-of-attractive-femalenatural-look-healthy-skin-photo-image_50880378.jpg" alt="p1" />
             </div>
             <div className="col-md-3">
              <img style={{width:'100%'}} src="https://png.pngtree.com/thumb_back/fw800/background/20230316/pngtree-biometric-passport-photo-of-attractive-femalenatural-look-healthy-skin-photo-image_50880378.jpg" alt="p1" />
             </div>
             <div className="col-md-3">
              <img style={{width:'100%'}} src="https://png.pngtree.com/thumb_back/fw800/background/20230316/pngtree-biometric-passport-photo-of-attractive-femalenatural-look-healthy-skin-photo-image_50880378.jpg" alt="p1" />
             </div>
            </div>
             <div className='row mb-1'>
             <div className="col-md-3">
              <img style={{width:'100%'}} src="https://png.pngtree.com/thumb_back/fw800/background/20230316/pngtree-biometric-passport-photo-of-attractive-femalenatural-look-healthy-skin-photo-image_50880378.jpg" alt="p1" />
             </div>
             <div className="col-md-3">
              <img style={{width:'100%'}} src="https://png.pngtree.com/thumb_back/fw800/background/20230316/pngtree-biometric-passport-photo-of-attractive-femalenatural-look-healthy-skin-photo-image_50880378.jpg" alt="p1" />
             </div>
             <div className="col-md-3">
              <img style={{width:'100%'}} src="https://png.pngtree.com/thumb_back/fw800/background/20230316/pngtree-biometric-passport-photo-of-attractive-femalenatural-look-healthy-skin-photo-image_50880378.jpg" alt="p1" />
             </div>
             <div className="col-md-3">
              <img style={{width:'100%'}} src="https://png.pngtree.com/thumb_back/fw800/background/20230316/pngtree-biometric-passport-photo-of-attractive-femalenatural-look-healthy-skin-photo-image_50880378.jpg" alt="p1" />
             </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Landing
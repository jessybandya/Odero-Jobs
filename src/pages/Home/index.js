import React from 'react'

function Home() {
  return (
    <div>
    {/* Header Area Start */}
    <header className="jobguru-header-area stick-top forsticky">
      <div className="menu-animation">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-2">
              <div className="site-logo">
                <a href="index-2.html">
                  <img src="assets/img/logo.png" alt="jobguru" className="non-stick-logo" />
                  <img src="assets/img/logo-2.png" alt="jobguru" className="stick-logo" />
                </a>
              </div>
              {/* Responsive Menu Start */}
              <div className="jobguru-responsive-menu" />
              {/* Responsive Menu Start */}
            </div>
            <div className="col-lg-6">
              <div className="header-menu">
                <nav id="navigation">
                  <ul id="jobguru_navigation">
                    <li className="active has-children">
                      <a href="#">home</a>
                      <ul>
                        <li><a href="index-2.html">Home 1</a></li>
                        <li><a href="index-3.html">Home 2</a></li>
                      </ul>
                    </li>
                    <li className=" has-children">
                      <a href="#">for candidates</a>
                      <ul>
                        <li className="has-inner-child">
                          <a href="#">browse jobs</a>
                          <ul>
                            <li><a href="browse-jobs.html">full page grid</a></li>
                            <li><a href="job-grid-sidebar.html">grid sidebar</a></li>
                            <li><a href="job-list-sidebar.html">list sidebar</a></li>
                          </ul>
                        </li>
                        <li><a href="browse-categories.html">Browse Categories</a></li>
                        <li><a href="browse-companies.html">browse companies</a></li>
                        <li><a href="single-candidates.html">candidates details</a></li>
                        <li><a href="submit-resume.html">submit resume</a></li>
                        <li className="has-inner-child">
                          <a href="#">candidate dashboard</a>
                          <ul>
                            <li><a href="candidate-dashboard.html">Candidate dashboard</a></li>
                            <li><a href="candidate-profile.html">Candidate profile</a></li>
                            <li><a href="message.html">messages</a></li>
                            <li><a href="manage-jobs.html">manage jobs</a></li>
                            <li><a href="candidate-earnings.html">earnings</a></li>
                            <li><a href="change-password.html">change password</a></li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="has-children">
                      <a href="#">for employers</a>
                      <ul>
                        <li><a href="browse-candidates.html">Browse Candidates</a></li>
                        <li><a href="single-company.html">company details</a></li>
                        <li><a href="post-job.html">Post A job</a></li>
                        <li className="has-inner-child">
                          <a href="#">employer dashboard</a>
                          <ul>
                            <li><a href="employer-dashboard.html">employer dashboard</a></li>
                            <li><a href="company-profile.html">company profile</a></li>
                            <li><a href="message.html">messages</a></li>
                            <li><a href="manage-candidates.html">manage candidates</a></li>
                            <li><a href="transaction.html">transaction</a></li>
                            <li><a href="change-password.html">change password</a></li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="has-children">
                      <a href="#">pages</a>
                      <ul>
                        <li><a href="about.html">About us</a></li>
                        <li className="has-inner-child">
                          <a href="#">blog</a>
                          <ul>
                            <li><a href="blog.html">blog</a></li>
                            <li><a href="single-blog.html">single blog</a></li>
                          </ul>
                        </li>
                        <li><a href="job-page.html">job page</a></li>
                        <li><a href="login.html">login</a></li>
                        <li><a href="register.html">register</a></li>
                        <li><a href="contact.html">contact us</a></li>
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="header-right-menu">
                <ul>
                  <li><a href="post-job.html" className="post-jobs">Post jobs</a></li>
                  <li><a href="register.html"><i className="fa fa-user" />sign up</a></li>
                  <li><a href="login.html"><i className="fa fa-lock" />login</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    {/* Header Area End */}
    {/* Banner Area Start */}
    <section className="jobguru-banner-area">
      <div className="banner-slider owl-carousel">
        <div className="banner-single-slider slider-item-1">
          <div className="slider-offset" />
        </div>
        <div className="banner-single-slider slider-item-2">
          <div className="slider-offset" />
        </div>
      </div>
      <div className="banner-text">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="banner-search">
                <h2>Hire expert freelancers.</h2>
                <h4>We have 1542 job offers for you! </h4>
                <form>
                  <div className="banner-form-box">
                    <div className="banner-form-input">
                      <input type="text" placeholder="Job Title, Keywords, or Phrase" />
                    </div>
                    <div className="banner-form-input">
                      <input type="text" placeholder="City, State or ZIP" />
                    </div>
                    <div className="banner-form-input">
                      <select className="banner-select">
                        <option selected>Select Sector</option>
                        <option value={1}>Design &amp; multimedia</option>
                        <option value={2}>Programming &amp; tech</option>
                        <option value={3}>Accounting/finance</option>
                        <option value={4}>content writting</option>
                        <option value={5}>Training</option>
                        <option value={6}>Digital Marketing</option>
                      </select>
                    </div>
                    <div className="banner-form-input">
                      <button type="submit"><i className="fa fa-search" /></button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Banner Area End */}
    {/* Categories Area Start */}
    <section className="jobguru-categories-area section_70">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="site-heading">
              <h2>top Trending <span>Categories</span></h2>
              <p>A better career is out there. We'll help you find it. We're your first step to becoming everything you want to be.</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <a href="#" className="single-category-holder account_cat">
              <div className="category-holder-icon">
                <i className="fa fa-briefcase" />
              </div>
              <div className="category-holder-text">
                <h3>Accounting &amp; Finance</h3>
              </div>
              <img src="assets/img/account_cat.jpg" alt="category" />
            </a>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <a href="#" className="single-category-holder design_cat">
              <div className="category-holder-icon">
                <i className="fa fa-pencil-square-o" />
              </div>
              <div className="category-holder-text">
                <h3>Design, Art &amp; Multimedia</h3>
              </div>
              <img src="assets/img/design_art.jpg" alt="category" />
            </a>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <a href="#" className="single-category-holder restaurant_cat">
              <div className="category-holder-icon">
                <i className="fa fa-cutlery" />
              </div>
              <div className="category-holder-text">
                <h3>Restaurant / Food Service</h3>
              </div>
              <img src="assets/img/restaurent.jpg" alt="category" />
            </a>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <a href="#" className="single-category-holder tech_cat">
              <div className="category-holder-icon">
                <i className="fa fa-code" />
              </div>
              <div className="category-holder-text">
                <h3>Programming &amp; Tech</h3>
              </div>
              <img src="assets/img/programing_cat.jpg" alt="category" />
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <a href="#" className="single-category-holder data_cat">
              <div className="category-holder-icon">
                <i className="fa fa-bar-chart" />
              </div>
              <div className="category-holder-text">
                <h3>Data Science &amp; Analitycs</h3>
              </div>
              <img src="assets/img/data_cat.png" alt="category" />
            </a>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <a href="#" className="single-category-holder writing_cat">
              <div className="category-holder-icon">
                <i className="fa fa-pencil" />
              </div>
              <div className="category-holder-text">
                <h3>Writing / Translations</h3>
              </div>
              <img src="assets/img/writing_cat.jpg" alt="category" />
            </a>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <a href="#" className="single-category-holder edu_cat">
              <div className="category-holder-icon">
                <i className="fa fa-graduation-cap" />
              </div>
              <div className="category-holder-text">
                <h3>Education / Training</h3>
              </div>
              <img src="assets/img/edu_cat.jpg" alt="category" />
            </a>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <a href="#" className="single-category-holder sale_cat">
              <div className="category-holder-icon">
                <i className="fa fa-bullhorn" />
              </div>
              <div className="category-holder-text">
                <h3>sales / marketing</h3>
              </div>
              <img src="assets/img/sale_cat.png" alt="category" />
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="load-more">
              <a href="#" className="jobguru-btn">browse all categories</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Categories Area End */}
    {/* Inner Hire Area Start */}
    <section className="jobguru-inner-hire-area section_100">
      <div className="hire_circle" />
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="inner-hire-left">
              <h3>Hire an employee</h3>
              <p>placerat congue dui rhoncus sem et blandit .et consectetur Fusce nec nunc lobortis lorem ultrices facilisis. Ut dapibus placerat blandit nunc.congue dui rhoncus sem et blandit .et consectetur Fusce nec nunc lobortis lorem ultrices facilisis. Ut dapibus placerat blandi </p>
              <a href="#" className="jobguru-btn-3">sign up as company</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Inner Hire Area End */}
    {/* Job Tab Area Start */}
    <section className="jobguru-job-tab-area section_70">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="site-heading">
              <h2>Companies &amp; <span>job offers</span></h2>
              <p>It's easy. Simply post a job you need completed and receive competitive bids from freelancers within minutes</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className=" job-tab">
              <ul className="nav nav-pills job-tab-switch" id="pills-tab" role="tablist">
                <li className="nav-item">
                  <a className="nav-link active" id="pills-companies-tab" data-bs-toggle="pill" href="#pills-companies" role="tab" aria-controls="pills-companies" aria-selected="true">top Companies</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" id="pills-job-tab" data-bs-toggle="pill" href="#pills-job" role="tab" aria-controls="pills-job" aria-selected="false">job openning</a>
                </li>
              </ul>
            </div>
            <div className="tab-content" id="pills-tabContent">
              <div className="tab-pane fade show active" id="pills-companies" role="tabpanel" aria-labelledby="pills-companies-tab">
                <div className="top-company-tab">
                  <ul>
                    <li>
                      <div className="top-company-list">
                        <div className="company-list-logo">
                          <a href="#">
                            <img src="assets/img/company-logo-4.png" alt="company list 1" />
                          </a>
                        </div>
                        <div className="company-list-details">
                          <h3><a href="#">jamulai - consulting &amp; finance Co.</a></h3>
                          <p className="company-state"><i className="fa fa-map-marker" /> Chicago, Michigan</p>
                          <p className="open-icon"><i className="fa fa-briefcase" />32 open position</p>
                          <p className="varify"><i className="fa fa-check" />Verified</p>
                          <p className="rating-company">4.9</p>
                        </div>
                        <div className="company-list-btn">
                          <a href="#" className="jobguru-btn">view profile</a>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="top-company-list">
                        <div className="company-list-logo">
                          <a href="#">
                            <img src="assets/img/company-logo-2.png" alt="company list 1" />
                          </a>
                        </div>
                        <div className="company-list-details">
                          <h3><a href="#">Buildo - construction Co.</a></h3>
                          <p className="company-state"><i className="fa fa-map-marker" /> Chicago, Michigan</p>
                          <p className="open-icon"><i className="fa fa-briefcase" />32 open position</p>
                          <p className="varify"><i className="fa fa-check" />Verified</p>
                          <p className="rating-company">4.2</p>
                        </div>
                        <div className="company-list-btn">
                          <a href="#" className="jobguru-btn">view profile</a>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="top-company-list">
                        <div className="company-list-logo">
                          <a href="#">
                            <img src="assets/img/company-logo-3.png" alt="company list 1" />
                          </a>
                        </div>
                        <div className="company-list-details">
                          <h3><a href="#">palms - school &amp; college.</a></h3>
                          <p className="company-state"><i className="fa fa-map-marker" /> Chicago, Michigan</p>
                          <p className="open-icon"><i className="fa fa-briefcase" />32 open position</p>
                          <p className="varify"><i className="fa fa-check" />Verified</p>
                          <p className="rating-company">4.6</p>
                        </div>
                        <div className="company-list-btn">
                          <a href="#" className="jobguru-btn">view profile</a>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="top-company-list">
                        <div className="company-list-logo">
                          <a href="#">
                            <img src="assets/img/company-logo-1.png" alt="company list 1" />
                          </a>
                        </div>
                        <div className="company-list-details">
                          <h3><a href="#">finance - consulting &amp; business Co.</a></h3>
                          <p className="company-state"><i className="fa fa-map-marker" /> Chicago, Michigan</p>
                          <p className="open-icon"><i className="fa fa-briefcase" />32 open position</p>
                          <p className="varify"><i className="fa fa-check" />Verified</p>
                          <p className="rating-company">4.9</p>
                        </div>
                        <div className="company-list-btn">
                          <a href="#" className="jobguru-btn">view profile</a>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="tab-pane fade" id="pills-job" role="tabpanel" aria-labelledby="pills-job-tab">
                <div className="top-company-tab">
                  <ul>
                    <li>
                      <div className="top-company-list">
                        <div className="company-list-logo">
                          <a href="#">
                            <img src="assets/img/company-logo-1.png" alt="company list 1" />
                          </a>
                        </div>
                        <div className="company-list-details">
                          <h3><a href="#">Regional Sales Manager</a></h3>
                          <p className="company-state"><i className="fa fa-map-marker" /> Chicago, Michigan</p>
                          <p className="open-icon"><i className="fa fa-clock-o" />2 minutes ago</p>
                          <p className="varify"><i className="fa fa-check" />Fixed price : $1200-$2000</p>
                          <p className="rating-company">4.1</p>
                        </div>
                        <div className="company-list-btn">
                          <a href="#" className="jobguru-btn">bid now</a>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="top-company-list">
                        <div className="company-list-logo">
                          <a href="#">
                            <img src="assets/img/company-logo-4.png" alt="company list 1" />
                          </a>
                        </div>
                        <div className="company-list-details">
                          <h3><a href="#">C Developer (Senior) C .Net</a></h3>
                          <p className="company-state"><i className="fa fa-map-marker" /> Chicago, Michigan</p>
                          <p className="open-icon"><i className="fa fa-clock-o" />2 minutes ago</p>
                          <p className="varify"><i className="fa fa-check" />Fixed price : $800-$1200</p>
                          <p className="rating-company">3.1</p>
                        </div>
                        <div className="company-list-btn">
                          <a href="#" className="jobguru-btn">bid now</a>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="top-company-list">
                        <div className="company-list-logo">
                          <a href="#">
                            <img src="assets/img/company-logo-3.png" alt="company list 1" />
                          </a>
                        </div>
                        <div className="company-list-details">
                          <h3><a href="#">Asst. Teacher</a></h3>
                          <p className="company-state"><i className="fa fa-map-marker" /> Chicago, Michigan</p>
                          <p className="open-icon"><i className="fa fa-clock-o" />3 minutes ago</p>
                          <p className="varify"><i className="fa fa-check" />Fixed price : $800-$1200</p>
                          <p className="rating-company">4.3</p>
                        </div>
                        <div className="company-list-btn">
                          <a href="#" className="jobguru-btn">bid now</a>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="top-company-list">
                        <div className="company-list-logo">
                          <a href="#">
                            <img src="assets/img/company-logo-2.png" alt="company list 1" />
                          </a>
                        </div>
                        <div className="company-list-details">
                          <h3><a href="#">civil engineer</a></h3>
                          <p className="company-state"><i className="fa fa-map-marker" /> Chicago, Michigan</p>
                          <p className="open-icon"><i className="fa fa-clock-o" />30 minutes ago</p>
                          <p className="varify"><i className="fa fa-check" />Fixed price : $2000-$2500</p>
                          <p className="rating-company">3.7</p>
                        </div>
                        <div className="company-list-btn">
                          <a href="#" className="jobguru-btn">bid now</a>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="load-more">
              <a href="#" className="jobguru-btn">browse more listing</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Job Tab Area End */}
    {/* Video Area Start */}
    <section className="jobguru-video-area section_100">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="video-container">
              <h2>Hire experts freelancers today for <br /> any job, any time.</h2>
              <div className="video-btn">
                <a className="popup-youtube" href="https://www.youtube.com/watch?v=k-R6AFn9-ek">
                  <i className="fa fa-play" />
                  how it works
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Video Area End */}
    {/* How Works Area Start */}
    <section className="how-works-area section_70">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="site-heading">
              <h2>how it <span>works</span></h2>
              <p>It's easy. Simply post a job you need completed and receive competitive bids from freelancers within minutes</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="how-works-box box-1">
              <img src="assets/img/arrow-right-top.png" alt="works" />
              <div className="works-box-icon">
                <i className="fa fa-user" />
              </div>
              <div className="works-box-text">
                <p>sign up</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="how-works-box box-2">
              <img src="assets/img/arrow-right-bottom.png" alt="works" />
              <div className="works-box-icon">
                <i className="fa fa-gavel" />
              </div>
              <div className="works-box-text">
                <p>post job</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="how-works-box box-3">
              <div className="works-box-icon">
                <i className="fa fa-thumbs-up" />
              </div>
              <div className="works-box-text">
                <p>choose expert</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* How Works Area End */}
    {/* Blog Area Start */}
    <section className="jobguru-blog-area section_70">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="site-heading">
              <h2>Recent From <span>Blog</span></h2>
              <p>It's easy. Simply post a job you need completed and receive competitive bids from freelancers within minutes</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-12">
            <a href="#">
              <div className="single-blog">
                <div className="blog-image">
                  <img src="assets/img/blog-1.jpg" alt="blog image" />
                  <p><span> 21</span> July</p>
                </div>
                <div className="blog-text">
                  <h3>If you're having trouble coming up with</h3>
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-md-12">
            <a href="#">
              <div className="single-blog">
                <div className="blog-image">
                  <img src="assets/img/blog-2.jpg" alt="blog image" />
                  <p><span> 21</span> July</p>
                </div>
                <div className="blog-text">
                  <h3>details about Apple’s new iPad Pro models</h3>
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-md-12">
            <a href="#">
              <div className="single-blog">
                <div className="blog-image">
                  <img src="assets/img/blog-3.jpg" alt="blog image" />
                  <p><span> 21</span> July</p>
                </div>
                <div className="blog-text">
                  <h3>what are those Steps to be a Successful developer</h3>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
    {/* Blog Area End */}
    {/* Footer Area Start */}
    <footer className="jobguru-footer-area">
      <div className="footer-top section_50">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="single-footer-widget">
                <div className="footer-logo">
                  <a href="index-2.html">
                    <img src="assets/img/logo.png" alt="jobguru logo" />
                  </a>
                </div>
                <p>Aliquip exa consequat dui aut repahend vouptate elit cilum fugiat pariatur lorem dolor cit amet consecter adipisic elit sea vena eiusmod nulla</p>
                <ul className="footer-social">
                  <li><a href="#" className="fb"><i className="fa fa-facebook" /></a></li>
                  <li><a href="#" className="twitter"><i className="fa fa-twitter" /></a></li>
                  <li><a href="#" className="linkedin"><i className="fa fa-linkedin" /></a></li>
                  <li><a href="#" className="gp"><i className="fa fa-google-plus" /></a></li>
                  <li><a href="#" className="skype"><i className="fa fa-skype" /></a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-footer-widget">
                <h3>recent post</h3>
                <div className="latest-post-footer clearfix">
                  <div className="latest-post-footer-left">
                    <img src="assets/img/footer-post-2.jpg" alt="post" />
                  </div>
                  <div className="latest-post-footer-right">
                    <h4><a href="#">Website design trends for 2018</a></h4>
                    <p>January 14 - 2018</p>
                  </div>
                </div>
                <div className="latest-post-footer clearfix">
                  <div className="latest-post-footer-left">
                    <img src="assets/img/footer-post-3.jpg" alt="post" />
                  </div>
                  <div className="latest-post-footer-right">
                    <h4><a href="#">UI experts and modern designs</a></h4>
                    <p>January 12 - 2018</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-footer-widget">
                <h3>main links</h3>
                <ul>
                  <li><a href="#"><i className="fa fa-angle-double-right " /> About jobguru</a></li>
                  <li><a href="#"><i className="fa fa-angle-double-right " /> Delivery Information</a></li>
                  <li><a href="#"><i className="fa fa-angle-double-right " /> Terms &amp; Conditions</a></li>
                  <li><a href="#"><i className="fa fa-angle-double-right " /> Customer support</a></li>
                  <li><a href="#"><i className="fa fa-angle-double-right " /> Contact with an expert</a></li>
                  <li><a href="#"><i className="fa fa-angle-double-right " /> community updates</a></li>
                  <li><a href="#"><i className="fa fa-angle-double-right " /> upcoming updates</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-footer-widget footer-contact">
                <h3>Contact Info</h3>
                <p><i className="fa fa-map-marker" /> 4257 Street, SunnyVale, USA </p>
                <p><i className="fa fa-phone" /> 012-3456-789</p>
                <p><i className="fa fa-envelope-o" /> info@jobguru.com</p>
                <p><i className="fa fa-envelope-o" /> info@jobguru.com</p>
                <p><i className="fa fa-fax" /> 112-3456-7898</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="copyright-left">
                <p>Copyright © 2018 Themescare. All Rights Reserved</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    {/* Footer Area End */}
    {/*Jquery js*/}
    {/*Bootstrap js*/}
    {/*Bootstrap Datepicker js*/}
    {/*Perfect Scrollbar js*/}
    {/*Owl-Carousel js*/}
    {/*SlickNav js*/}
    {/*Magnific js*/}
    {/*Select2 js*/}
    {/*jquery-ui js*/}
    {/*Jarallax js*/}
    {/*Main js*/}
  </div>
  )
}

export default Home
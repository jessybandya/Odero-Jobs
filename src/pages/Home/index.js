import React from 'react'

function Home() {
  return (
    <div>
    <div>
    {/* Preloader Start */}
    <div className="preloader">
      <div className="utf-preloader">
        <span />
        <span />
        <span />
        <span />		
      </div>
    </div>
    {/* Preloader End */}
    {/* Wrapper */}
    <div id="wrapper"> 
      {/* Header Container */}
      <header id="utf-header-container-block"> 
        <div id="header">
          <div className="container"> 
            <div className="utf-left-side"> 
              <div id="logo"> <a href="index-1.html"><img src="images/logo.png" alt="" /></a> </div>
              <nav id="navigation">
                <ul id="responsive">
                  <li><a href="#" className="current">Home</a>
                    <ul className="dropdown-nav">
                      <li className="active"><a href="index-1.html"><i className="icon-feather-chevron-right" /> Home Version One</a></li>
                      <li><a href="index-2.html"><i className="icon-feather-chevron-right" /> Home Version Two</a></li>
                      <li><a href="index-3.html"><i className="icon-feather-chevron-right" /> Home Version Three</a></li>
                      <li><a href="index-4.html"><i className="icon-feather-chevron-right" /> Home Version Four</a></li>
                    </ul>
                  </li>
                  <li><a href="#">Find Jobs</a>
                    <ul className="dropdown-nav">
                      <li><a href="#"><i className="icon-feather-chevron-right" /> Browse Jobs</a>
                        <ul className="dropdown-nav">
                          <li><a href="jobs-list-layout-leftside.html"><i className="icon-feather-chevron-right" /> Jobs List Left Sidebar</a></li>
                          <li><a href="jobs-list-layout-rightside.html"><i className="icon-feather-chevron-right" /> Jobs List Right Sidebar</a></li>
                          <li><a href="jobs-listing-with-map.html"><i className="icon-feather-chevron-right" /> Jobs List With Map</a></li>
                        </ul>
                      </li>
                      <li><a href="browse-companies.html"><i className="icon-feather-chevron-right" /> Browse Companies</a></li>
                      <li><a href="single-job-page.html"><i className="icon-feather-chevron-right" /> Jobs Detail Page</a></li>
                      <li><a href="single-company-profile.html"><i className="icon-feather-chevron-right" /> Company Profile Detail</a></li>
                      <li><a href="#"><i className="icon-feather-chevron-right" /> Freelancer Tasks</a>
                        <ul className="dropdown-nav">
                          <li><a href="freelancers-bidding-tasks-list.html"><i className="icon-feather-chevron-right" /> Freelancer Bidding Task</a></li>
                          <li><a href="freelancers-user-list-layout.html"><i className="icon-feather-chevron-right" /> Freelancer User List</a></li>
                          <li><a href="single-freelancers-task-page.html"><i className="icon-feather-chevron-right" /> Freelancer Task Detail</a></li>
                          <li><a href="single-freelancer-profile.html"><i className="icon-feather-chevron-right" /> Freelancer Profile Detail</a></li>
                        </ul>
                      </li>				  
                    </ul>
                  </li>
                  <li><a href="#">User Panel</a>
                    <ul className="dropdown-nav">
                      <li><a href="dashboard.html"><i className="icon-feather-chevron-right" /> Dashboard</a></li>
                      <li><a href="dashboard-jobs-post.html"><i className="icon-feather-chevron-right" /> Manage Jobs Post</a></li> 
                      <li><a href="dashboard-manage-jobs.html"><i className="icon-feather-chevron-right" /> Manage Jobs</a></li>
                      <li><a href="dashboard-manage-resume.html"><i className="icon-feather-chevron-right" /> Manage Resume</a></li>
                      <li><a href="dashboard-bookmarks.html"><i className="icon-feather-chevron-right" /> Bookmarks Jobs</a></li>
                      <li><a href="dashboard-manage-tasks.html"><i className="icon-feather-chevron-right" /> Freelancer Tasks</a>
                        <ul className="dropdown-nav">
                          <li><a href="dashboard-freelancer-manage-tasks-list.html"><i className="icon-feather-chevron-right" /> Freelancer Manage Tasks</a></li>
                          <li><a href="dashboard-manage-bidders-list.html"><i className="icon-feather-chevron-right" /> Freelancer Manage Bidders</a></li>
                          <li><a href="dashboard-freelancer-active-bids.html"><i className="icon-feather-chevron-right" /> Freelancer Active Bids</a></li>
                          <li><a href="dashboard-freelancer-add-post-bids.html"><i className="icon-feather-chevron-right" /> Freelancer Post Bids</a></li>
                        </ul>
                      </li>
                      <li><a href="dashboard-reviews.html"><i className="icon-feather-chevron-right" /> Reviews</a></li>
                      <li><a href="dashboard-my-profile.html"><i className="icon-feather-chevron-right" /> My Profile</a></li>
                    </ul>
                  </li>
                  <li><a href="#">Pages</a>
                    <ul className="dropdown-nav">
                      <li><a href="about-us.html"><i className="icon-feather-chevron-right" /> About Us</a></li>	
                      <li><a href="login.html"><i className="icon-feather-chevron-right" /> Login</a></li>
                      <li><a href="register.html"><i className="icon-feather-chevron-right" /> Sign Up</a></li>
                      <li><a href="checkout-page.html"><i className="icon-feather-chevron-right" /> Order Checkout</a></li>
                      <li><a href="order-confirmation.html"><i className="icon-feather-chevron-right" /> Order Confirmation</a></li>
                      <li><a href="invoice-template.html"><i className="icon-feather-chevron-right" /> Invoice Template</a></li>
                      <li><a href="user-elements.html"><i className="icon-feather-chevron-right" /> User Elements</a></li>
                      <li><a href="icons-cheatsheet.html"><i className="icon-feather-chevron-right" /> Icons Cheatsheet</a></li>
                      <li><a href="faq-page.html"><i className="icon-feather-chevron-right" /> FAQ Page</a></li>	
                      <li><a href="pages-404.html"><i className="icon-feather-chevron-right" /> 404 Page</a></li>
                    </ul>
                  </li>
                  <li><a href="#">Blog</a>
                    <ul className="dropdown-nav">
                      <li><a href="blog-right-sidebar.html"><i className="icon-feather-chevron-right" /> Blog List Right Sidebar</a></li>
                      <li><a href="blog-left-sidebar.html"><i className="icon-feather-chevron-right" /> Blog List Left Sidebar</a></li>
                      <li><a href="blog-post-right-sidebar.html"><i className="icon-feather-chevron-right" /> Blog Detail Right Sidebar</a></li>
                      <li><a href="blog-post-left-sidebar.html"><i className="icon-feather-chevron-right" /> Blog Detail Left Sidebar</a></li>                  
                    </ul>
                  </li>
                  <li><a href="contact.html">Contact</a></li>
                </ul>
              </nav>
              <div className="clearfix" />                    
            </div>
            <div className="utf-right-side"> 
              <div className="utf-header-widget-item"> <a href="#utf-signin-dialog-block" className="popup-with-zoom-anim log-in-button"><i className="icon-feather-log-in" /> <span>Sign In</span></a> </div>	
              <div className="utf-header-widget-item"> 
                <div className="utf-header-notifications user-menu">
                  <div className="utf-header-notifications-trigger user-profile-title"> 
                    <a href="#">
                      <div className="user-avatar status-online"><img src="images/user_small_1.jpg" alt="" /> </div>	
                      <div className="user-name">Hi, John!</div>	
                    </a> 
                  </div>
                  <div className="utf-header-notifications-dropdown-block"> 
                    <ul className="utf-user-menu-dropdown-nav">
                      <li><a href="dashboard.html"><i className="icon-material-outline-dashboard" /> Dashboard</a></li>
                      <li><a href="dashboard-jobs-post.html"><i className="icon-line-awesome-user-secret" /> Manage Jobs Post</a></li>
                      <li><a href="dashboard-manage-jobs.html"><i className="icon-material-outline-group" /> Manage Jobs</a></li>
                      <li><a href="dashboard-bookmarks.html"><i className="icon-material-outline-star-border" /> Bookmarks Jobs</a></li>
                      <li><a href="dashboard-my-profile.html"><i className="icon-feather-user" /> My Profile</a></li>
                      <li><a href="index-1.html"><i className="icon-material-outline-power-settings-new" /> Logout</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <span className="mmenu-trigger">
                <button className="hamburger utf-hamburger-collapse-item" type="button"> <span className="utf-hamburger-box-item"> <span className="utf-hamburger-inner-item" /> </span> </button>
              </span> 
            </div>
          </div>
        </div>
      </header>
      <div className="clearfix" />
      {/* Header Container / End */}
      {/* Intro Banner  */} 
      <div className="intro-banner" data-background-image="images/home-background-01.jpg">
        <div className="container"> 
          <div className="row">
            <div className="col-md-12">
              <div className="utf-banner-headline-text-part">
                <h3>Find Nearby Jobs <span className="typed-words" /></h3>
                <span>It is a Long Established Fact That a Reader Will be Distracted by The Readable.</span> 
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="utf-intro-banner-search-form-block margin-top-40"> 
                <div className="utf-intro-search-field-item">
                  <i className="icon-feather-search" />
                  <input id="intro-keywords" type="text" placeholder="Search Jobs Keywords..." />
                </div>
                <div className="utf-intro-search-field-item">
                  <select className="selectpicker default" data-live-search="true" data-selected-text-format="count" data-size={5} title="Select Location">
                    <option>Afghanistan</option>
                    <option>Albania</option>
                    <option>Algeria</option>
                    <option>Brazil</option>
                    <option>Burundi</option>
                    <option>Bulgaria</option>
                    <option>Germany</option>
                    <option>Grenada</option>
                    <option>Guatemala</option>
                    <option>Iceland</option>
                  </select>
                </div>
                <div className="utf-intro-search-field-item">
                  <select className="selectpicker default" data-live-search="true" data-selected-text-format="count" data-size={5} title="All Categories">
                    <option>Customer Service</option>
                    <option>Data Analytics</option>
                    <option>Web Designing</option>
                    <option>Software Developing</option>
                    <option>Networking</option>
                    <option>Sales &amp; Marketing</option>
                  </select>
                </div>
                <div className="utf-intro-search-button">
                  <button className="button ripple-effect" onclick="window.location.href='jobs-list-layout-leftside.html'"><i className="icon-material-outline-search" /> Search Jobs</button>
                </div>
              </div>
              <p className="utf-trending-silver-item"><span className="utf-trending-black-item">Trending Jobs Keywords:</span> <a href="#">Web Designer</a>  <a href="#">Web Developer</a>  <a href="#">Graphic Designer</a>  <a href="#">PHP Developer</a>  <a href="#">IOS Developer</a>  <a href="#">Android Developer</a></p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <ul className="intro-stats margin-top-45 hide-under-992px">
                <li><i className="icon-material-outline-business-center" /> <sub className="counter_item"><strong className="counter">18,955</strong> <span>Live Jobs Posted</span></sub> </li>
                <li><i className="icon-material-outline-assignment" /> <sub className="counter_item"><strong className="counter">11,088</strong> <span>Jobs Candidate</span></sub> </li>
                <li><i className="icon-material-outline-library-books" /> <sub className="counter_item"><strong className="counter">10,758</strong> <span>Companies Jobs</span></sub> </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Jobs Category Boxes */}
      <div className="section margin-top-60 margin-bottom-60">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="utf-section-headline-item centered margin-top-0 margin-bottom-40">
                <span>Jobs Categories</span>
                <h3>Top Trending Categories</h3>
                <div className="utf-headline-display-inner-item">Jobs Categories</div>
                <p className="utf-slogan-text">Lorem Ipsum is simply dummy text printing and type setting industry Lorem Ipsum been industry standard dummy text ever since when unknown printer took a galley.</p>
              </div>
              <div className="utf-categories-container-block"> 
                <a href="jobs-list-layout-leftside.html" className="utf-category-box">
                  <div className="utf-opening-position-counter-item">10 Openings</div>
                  <div className="utf-category-box-icon-item"> <i className="icon-line-awesome-bullhorn" /> </div>
                  <div className="utf-category-box-content">
                    <h3>Design, Art &amp; Multimedia</h3>
                  </div>
                  <div className="utf-category-box-counter-item">8,188 Jobs</div>
                </a> 
                <a href="jobs-list-layout-leftside.html" className="utf-category-box">
                  <div className="utf-opening-position-counter-item">15 Openings</div>
                  <div className="utf-category-box-icon-item"> <i className="icon-line-awesome-graduation-cap" /> </div>
                  <div className="utf-category-box-content">
                    <h3>Education &amp; Training</h3>
                  </div>
                  <div className="utf-category-box-counter-item">5,244 Jobs</div>
                </a> 
                <a href="jobs-list-layout-leftside.html" className="utf-category-box">
                  <div className="utf-opening-position-counter-item">12 Openings</div>
                  <div className="utf-category-box-icon-item"> <i className="icon-line-awesome-line-chart" /> </div>
                  <div className="utf-category-box-content">
                    <h3>Accounting / Finance</h3>
                  </div>
                  <div className="utf-category-box-counter-item">6,258 Jobs</div>
                </a> 
                <a href="jobs-list-layout-leftside.html" className="utf-category-box">
                  <div className="utf-opening-position-counter-item">20 Openings</div>
                  <div className="utf-category-box-icon-item"> <i className="icon-line-awesome-users" /> </div>
                  <div className="utf-category-box-content">
                    <h3>Human Resource</h3>
                  </div>
                  <div className="utf-category-box-counter-item">1,224 Jobs</div>
                </a> 
                <a href="jobs-list-layout-leftside.html" className="utf-category-box">
                  <div className="utf-opening-position-counter-item">25 Openings</div>
                  <div className="utf-category-box-icon-item"> <i className="icon-feather-phone-call" /> </div>
                  <div className="utf-category-box-content">
                    <h3>Telecommunications</h3>
                  </div>
                  <div className="utf-category-box-counter-item">3,258 Jobs</div>
                </a> 
                <a href="jobs-list-layout-leftside.html" className="utf-category-box">
                  <div className="utf-opening-position-counter-item">18 Openings</div>
                  <div className="utf-category-box-icon-item"> <i className="icon-line-awesome-cutlery" /> </div>
                  <div className="utf-category-box-content">
                    <h3>Restaurant / Food Service</h3>
                  </div>
                  <div className="utf-category-box-counter-item">5,138 Jobs</div>
                </a> 
                <a href="jobs-list-layout-leftside.html" className="utf-category-box">
                  <div className="utf-opening-position-counter-item">38 Openings</div>
                  <div className="utf-category-box-icon-item"> <i className="icon-line-awesome-building" /> </div>
                  <div className="utf-category-box-content">
                    <h3>Construction / Facilities</h3>
                  </div>
                  <div className="utf-category-box-counter-item">2,580 Jobs</div>
                </a> 
                <a href="jobs-list-layout-leftside.html" className="utf-category-box">
                  <div className="utf-opening-position-counter-item">23 Openings</div>
                  <div className="utf-category-box-icon-item"> <i className="icon-line-awesome-user-md" /> </div>
                  <div className="utf-category-box-content">
                    <h3>Health</h3>
                  </div>
                  <div className="utf-category-box-counter-item">2,360 Jobs</div>
                </a> 
              </div>
              <div className="utf-centered-button margin-top-10">
                <a href="jobs-categorie-one.html" className="button utf-ripple-effect-dark utf-button-sliding-icon margin-top-20">View All Categories <i className="icon-feather-chevron-right" /></a> 
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Jobs Category Boxes / End */} 
      {/* Latest Jobs */}
      <div className="section gray padding-top-60 padding-bottom-60">
        <div className="container">
          <div className="row">
            <div className="col-xl-12"> 
              <div className="utf-section-headline-item centered margin-top-0 margin-bottom-40">
                <span>Latest Jobs Post</span>
                <h3>Jobs You May Be Interested</h3>
                <div className="utf-headline-display-inner-item">Latest Jobs Post</div>
                <p className="utf-slogan-text">Lorem Ipsum is simply dummy text printing and type setting industry Lorem Ipsum been industry standard dummy text ever since when unknown printer took a galley.</p>
              </div>
              <div className="utf-listings-container-part compact-list-layout margin-top-35"> 
                <a href="single-job-page.html" className="utf-job-listing utf-apply-button-item"> 
                  <div className="utf-job-listing-details"> 
                    <div className="utf-job-listing-company-logo"> <img src="images/company_logo_1.png" alt="" /> </div>
                    <div className="utf-job-listing-description">
                      <span className="dashboard-status-button utf-job-status-item green"><i className="icon-material-outline-business-center" /> Full Time</span>
                      <h3 className="utf-job-listing-title">Web Designer, Graphic Designer, UI/UX Designer &amp; Art</h3>
                      <div className="utf-job-listing-footer">
                        <ul>
                          <li><i className="icon-feather-briefcase" /> Graphic Designer</li>
                          <li><i className="icon-material-outline-account-balance-wallet" /> $35000-$38000</li>
                          <li><i className="icon-material-outline-location-on" /> Drive Potsdam, NY 676</li>
                          <li><i className="icon-material-outline-access-time" /> 15 Minute Ago</li>
                        </ul>
                      </div>
                    </div>
                    <span className="list-apply-button ripple-effect">Browse Job <i className="icon-line-awesome-bullhorn" /></span> 
                  </div>
                </a> 
                <a href="single-job-page.html" className="utf-job-listing utf-apply-button-item"> 
                  <div className="utf-job-listing-details"> 
                    <div className="utf-job-listing-company-logo"> <img src="images/company_logo_2.png" alt="" /> </div>
                    <div className="utf-job-listing-description">
                      <span className="dashboard-status-button utf-job-status-item green"><i className="icon-material-outline-business-center" /> Full Time</span>
                      <h3 className="utf-job-listing-title">PHP Developer, Team of PHP &amp; IT Co <span className="utf-verified-badge" title="Verified" data-tippy-placement="top" /></h3>
                      <div className="utf-job-listing-footer">
                        <ul>
                          <li><i className="icon-feather-briefcase" /> UI/UX Designer</li>
                          <li><i className="icon-material-outline-account-balance-wallet" /> $35000-$38000</li>
                          <li><i className="icon-material-outline-location-on" /> Drive Potsdam, NY 676</li>
                          <li><i className="icon-material-outline-access-time" /> 25 Minute Ago</li>
                        </ul>
                      </div>
                    </div>
                    <span className="list-apply-button ripple-effect">Browse Job <i className="icon-line-awesome-bullhorn" /></span> 
                  </div>
                </a> 
                <a href="single-job-page.html" className="utf-job-listing utf-apply-button-item"> 
                  <div className="utf-job-listing-details"> 
                    <div className="utf-job-listing-company-logo"> <img src="images/company_logo_3.png" alt="" /> </div>
                    <div className="utf-job-listing-description">
                      <span className="dashboard-status-button utf-job-status-item yellow"><i className="icon-material-outline-business-center" /> Part Time</span>
                      <h3 className="utf-job-listing-title">Website Developer &amp; Software Developer</h3>
                      <div className="utf-job-listing-footer">
                        <ul>
                          <li><i className="icon-feather-briefcase" /> Software Developer</li>
                          <li><i className="icon-material-outline-account-balance-wallet" /> $35000-$38000</li>
                          <li><i className="icon-material-outline-location-on" /> Drive Potsdam, NY 676</li>
                          <li><i className="icon-material-outline-access-time" /> 38 Minute Ago</li>
                        </ul>
                      </div>
                    </div>
                    <span className="list-apply-button ripple-effect">Browse Job <i className="icon-line-awesome-bullhorn" /></span> 
                  </div>
                </a> 
                <a href="single-job-page.html" className="utf-job-listing utf-apply-button-item"> 
                  <div className="utf-job-listing-details"> 
                    <div className="utf-job-listing-company-logo"> <img src="images/company_logo_4.png" alt="" /> </div>
                    <div className="utf-job-listing-description">
                      <span className="dashboard-status-button utf-job-status-item green"><i className="icon-material-outline-business-center" /> Full Time</span>
                      <h3 className="utf-job-listing-title">Application Developer &amp; Web Designer <span className="utf-verified-badge" title="Verified" data-tippy-placement="top" /></h3>
                      <div className="utf-job-listing-footer">
                        <ul>
                          <li><i className="icon-feather-briefcase" /> Web Developer</li>
                          <li><i className="icon-material-outline-account-balance-wallet" /> $35000-$38000</li>
                          <li><i className="icon-material-outline-location-on" /> Drive Potsdam, NY 676</li>
                          <li><i className="icon-material-outline-access-time" /> 55 Minute Ago</li>
                        </ul>
                      </div>
                    </div>
                    <span className="list-apply-button ripple-effect">Browse Job <i className="icon-line-awesome-bullhorn" /></span> 
                  </div>
                </a> 
                <a href="single-job-page.html" className="utf-job-listing utf-apply-button-item"> 
                  <div className="utf-job-listing-details"> 
                    <div className="utf-job-listing-company-logo"> <img src="images/company_logo_5.png" alt="" /> </div>
                    <div className="utf-job-listing-description">
                      <span className="dashboard-status-button utf-job-status-item green"><i className="icon-material-outline-business-center" /> Full Time</span>
                      <h3 className="utf-job-listing-title">IT Department Manager &amp; Blogger-Entrepenour</h3>
                      <div className="utf-job-listing-footer">
                        <ul>
                          <li><i className="icon-feather-briefcase" /> Android Developer</li>
                          <li><i className="icon-material-outline-account-balance-wallet" /> $35000-$38000</li>
                          <li><i className="icon-material-outline-location-on" /> Drive Potsdam, NY 676</li>
                          <li><i className="icon-material-outline-access-time" /> 1 Days Ago</li>
                        </ul>
                      </div>
                    </div>
                    <span className="list-apply-button ripple-effect">Browse Job <i className="icon-line-awesome-bullhorn" /></span> 
                  </div>
                </a> 
                <a href="single-job-page.html" className="utf-job-listing utf-apply-button-item"> 
                  <div className="utf-job-listing-details"> 
                    <div className="utf-job-listing-company-logo"> <img src="images/company_logo_6.png" alt="" /> </div>
                    <div className="utf-job-listing-description">
                      <span className="dashboard-status-button utf-job-status-item green"><i className="icon-material-outline-business-center" /> Full Time</span>
                      <h3 className="utf-job-listing-title">Frontend/Backendd Developer</h3>
                      <div className="utf-job-listing-footer">
                        <ul>
                          <li><i className="icon-feather-briefcase" /> IOS Developer</li>
                          <li><i className="icon-material-outline-account-balance-wallet" /> $35000-$38000</li>
                          <li><i className="icon-material-outline-location-on" /> Drive Potsdam, NY 676</li>
                          <li><i className="icon-material-outline-access-time" /> 1 Days Ago</li>
                        </ul>
                      </div>
                    </div>
                    <span className="list-apply-button ripple-effect">Browse Job <i className="icon-line-awesome-bullhorn" /></span> 
                  </div>
                </a>
              </div>
              <div className="utf-centered-button margin-top-10">
                <a href="jobs-list-layout-leftside.html" className="button utf-ripple-effect-dark utf-button-sliding-icon margin-top-20">Browse All Jobs <i className="icon-feather-chevron-right" /></a> 
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Latest Jobs / End */} 
      {/* Photo Section */}
      <div className="utf-photo-section-block" data-background-image="images/section-background.jpg">
        <div className="text-content white-font">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-12 col-sm-12">
                <h2>Download Browse Hundreds of Jobs</h2>
                <p>Lorem Ipsum is simply dummy text of printing and type setting industry. Lorem Ipsum been industry standard dummy text ever since, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic type setting, remaining essentially unchanged. It was popularised.</p>						
                <ul className="utf-download-text">
                  <li>
                    <a href="#" title="Windows App" data-tippy-placement="top">
                      <i className="icon-line-awesome-windows" />
                      <span>Windows</span>
                      <p>Available Now</p>
                    </a>
                  </li>
                  <li>
                    <a href="#" title="App Store" data-tippy-placement="top">
                      <i className="icon-line-awesome-apple" />
                      <span>App Store</span>
                      <p>Available Now</p>
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Google Play" data-tippy-placement="top">
                      <i className="icon-line-awesome-android" />
                      <span>Google Play</span>
                      <p>Get in On</p>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="download-img">
                  <img src="images/mockup3.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Photo Section / End */} 
      {/* Testimonials */}
      <div className="section gray padding-top-65 padding-bottom-65">
        <div className="container">
          <div className="row">
            <div className="col-xl-12"> 
              <div className="utf-section-headline-item centered margin-top-0 margin-bottom-30">
                <span>Clients Say About Us</span>
                <h3>Candidates Testimonials</h3>
                <div className="utf-headline-display-inner-item">Clients Say About Us</div>
                <p className="utf-slogan-text">Lorem Ipsum is simply dummy text printing and type setting industry Lorem Ipsum been industry standard dummy text ever since when unknown printer took a galley.</p>
              </div>
            </div>
          </div>
        </div>
        {/* Categories Carousel */}
        <div className="utf-carousel-container-block">
          <div className="utf-testimonial-carousel-block testimonials"> 
            <div className="utf-carousel-review-item">
              <div className="utf-testimonial-box">
                <div className="utf-testimonial-avatar-photo"> <img src="images/user_small_1.jpg" alt="" /> </div>
                <div className="utf-testimonial-author-utf-detail-item">
                  <h4>John Williams</h4>
                  <span>Graphics Designer</span> 
                </div>
                <div className="testimonial">Lorem Ipsum is simply dummy text of printing and type setting industry. Lorem Ipsum been industry standard dummy text ever since, when an unknown printer took a galley of type and laboris nisi ut aliquip ex minim veniam scrambled it to make a type specimen book. It has survived not only five into electronic type setting popularised.</div>
              </div>
            </div>
            <div className="utf-carousel-review-item">
              <div className="utf-testimonial-box">
                <div className="utf-testimonial-avatar-photo"> <img src="images/user_small_2.jpg" alt="" /> </div>
                <div className="utf-testimonial-author-utf-detail-item">
                  <h4>John Williams</h4>
                  <span>IOS Developer</span> 
                </div>
                <div className="testimonial">Lorem Ipsum is simply dummy text of printing and type setting industry. Lorem Ipsum been industry standard dummy text ever since, when an unknown printer took a galley of type and laboris nisi ut aliquip ex minim veniam scrambled it to make a type specimen book. It has survived not only five into electronic type setting popularised.</div>
              </div>
            </div>
            <div className="utf-carousel-review-item">
              <div className="utf-testimonial-box">
                <div className="utf-testimonial-avatar-photo"> <img src="images/user_small_3.jpg" alt="" /> </div>
                <div className="utf-testimonial-author-utf-detail-item">
                  <h4>John Williams</h4>
                  <span>Android Developer</span> 
                </div>
                <div className="testimonial">Lorem Ipsum is simply dummy text of printing and type setting industry. Lorem Ipsum been industry standard dummy text ever since, when an unknown printer took a galley of type and laboris nisi ut aliquip ex minim veniam scrambled it to make a type specimen book. It has survived not only five into electronic type setting popularised.</div>
              </div>
            </div>
            <div className="utf-carousel-review-item">
              <div className="utf-testimonial-box">
                <div className="utf-testimonial-avatar-photo"> <img src="images/user_small_1.jpg" alt="" /> </div>
                <div className="utf-testimonial-author-utf-detail-item">
                  <h4>John Williams</h4>
                  <span>Web Developer</span> 
                </div>
                <div className="testimonial">Lorem Ipsum is simply dummy text of printing and type setting industry. Lorem Ipsum been industry standard dummy text ever since, when an unknown printer took a galley of type and laboris nisi ut aliquip ex minim veniam scrambled it to make a type specimen book. It has survived not only five into electronic type setting popularised.</div>
              </div>
            </div>
            <div className="utf-carousel-review-item">
              <div className="utf-testimonial-box">
                <div className="utf-testimonial-avatar-photo"> <img src="images/user_small_2.jpg" alt="" /> </div>
                <div className="utf-testimonial-author-utf-detail-item">
                  <h4>John Williams</h4>
                  <span>UI/UX Designer</span> 
                </div>
                <div className="testimonial">Lorem Ipsum is simply dummy text of printing and type setting industry. Lorem Ipsum been industry standard dummy text ever since, when an unknown printer took a galley of type and laboris nisi ut aliquip ex minim veniam scrambled it to make a type specimen book. It has survived not only five into electronic type setting popularised.</div>
              </div>
            </div>
          </div>
        </div>    
      </div>
      {/* Testimonials / End */} 
      {/* Start Section Callout */}
      <div className="jbm-section-callout">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-6 col-md-6 col-xs-12 callout-bg-1 callout-section-left pos-relative">
              <div className="callout-bg" />
              <div className="jbm-callout-in jbm-callout-in-padding pull-right">
                <div className="jbm-section-title margin-top-80 margin-bottom-80">
                  <h2>Find Your Browse Companies</h2>
                  <span className="section-tit-line" />
                  <p>Lorem Ipsum is simply dummy text of printing and type setting industry. Lorem Ipsum been industry standard dummy text ever since, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                  <a href="browse-companies.html" className="button utf-ripple-effect-dark utf-button-sliding-icon margin-top-10">Browse Companies <i className="icon-feather-chevrons-right" /></a>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-md-6 col-xs-12 callout-bg-2 callout-section-right pos-relative">
              <div className="callout-bg" />
              <div className="jbm-callout-in jbm-callout-in-padding pull-left">
                <div className="jbm-section-title margin-bottom-80 margin-top-80">
                  <h2>Find Your Browse Jobs</h2>
                  <span className="section-tit-line" />
                  <p>Lorem Ipsum is simply dummy text of printing and type setting industry. Lorem Ipsum been industry standard dummy text ever since, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                  <a href="jobs-list-layout-leftside.html" className="button utf-ripple-effect-dark utf-button-sliding-icon margin-top-10">Browse Jobs <i className="icon-feather-chevrons-right" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Section Callout */}
      {/* Start Need Any Help */}
      <section className="section padding-top-65 padding-bottom-75">
        <div className="container">
          <div className="col-xl-12">
            <div className="utf-section-headline-item centered margin-top-0 margin-bottom-40">
              <span>Business Help Service</span>
              <h3>Need Any Help?</h3>
              <div className="utf-headline-display-inner-item">Business Help Service</div>
              <p className="utf-slogan-text">Lorem Ipsum is simply dummy text printing and type setting industry Lorem Ipsum been industry standard dummy text ever since when unknown printer took a galley.</p>
            </div>
          </div>
          <div className="row need-help-area justify-content-center">
            <div className="col-xl-4">
              <div className="info-box-1">
                <div className="utf-icon-box-circle">
                  <div className="utf-icon-box-circle-inner"> <i className="icon-brand-rocketchat" /></div>
                </div>	
                <h4>Chat to Us Online</h4>
                <p>Chat to us online if you have any question.</p>
                <a href="javascript:void(0);" className="button utf-ripple-effect-dark utf-button-sliding-icon margin-top-10">Click Here to Chat <i className="icon-feather-chevrons-right" /></a> 
              </div>
            </div>
            <div className="col-xl-4">
              <div className="info-box-1">
                <div className="utf-icon-box-circle">
                  <div className="utf-icon-box-circle-inner"> <i className="icon-feather-phone" /></div>
                </div>	
                <h4>Our Support Agent</h4>
                <p>Our support agent will work with you to meet your lending needs.</p>
                <a href="contact.html" className="button utf-ripple-effect-dark utf-button-sliding-icon margin-top-10">Contact Us <i className="icon-feather-chevrons-right" /></a> 
              </div>
            </div>
            <div className="col-xl-4">
              <div className="info-box-1">
                <div className="utf-icon-box-circle">
                  <div className="utf-icon-box-circle-inner"> <i className="icon-brand-bimobject" /></div>
                </div> 
                <h4>Read Latest Blog Post</h4>
                <p>Visit our Blog page and know more about news and career tips</p>
                <a href="blog-right-sidebar.html" className="button utf-ripple-effect-dark utf-button-sliding-icon margin-top-10">Read Blog Post <i className="icon-feather-chevrons-right" /></a> 
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Need Any Help */}
      {/* Counters */}
      <div className="section gradient_item_area padding-top-70 padding-bottom-75">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="utf-section-headline-item centered margin-top-0 margin-bottom-40">
                <span>Success Business Award</span>
                <h3>Our Success &amp; Award</h3>
                <div className="utf-headline-display-inner-item">Success Business Award</div>
                <p className="utf-slogan-text">Lorem Ipsum is simply dummy text printing and type setting industry Lorem Ipsum been industry standard dummy text ever since when unknown printer took a galley.</p>
              </div>
            </div>
            <div className="col-xl-12 counter_inner_block">
              <div className="utf-counters-container-aera"> 
                <div className="col-xl-3">
                  <div className="utf-single-counter"> <i className="icon-feather-briefcase" />
                    <div className="utf-counter-inner-item">
                      <h3><span className="counter">12,376</span></h3>
                      <span className="utf-counter-title">Live Jobs</span> 
                    </div>
                  </div>
                </div>
                <div className="col-xl-3">	
                  <div className="utf-single-counter"> <i className="icon-feather-users" />
                    <div className="utf-counter-inner-item">
                      <h3><span className="counter">89,562</span></h3>
                      <span className="utf-counter-title">Jobs Candidate</span> 
                    </div>
                  </div>
                </div>
                <div className="col-xl-3">	
                  <div className="utf-single-counter"> <i className="icon-material-outline-textsms" />
                    <div className="utf-counter-inner-item">
                      <h3><span className="counter">28,166</span></h3>
                      <span className="utf-counter-title">Active Resume</span> 
                    </div>
                  </div>
                </div>
                <div className="col-xl-3">	
                  <div className="utf-single-counter"> <i className="icon-material-outline-location-city" />
                    <div className="utf-counter-inner-item">
                      <h3><span className="counter">8,966</span></h3>
                      <span className="utf-counter-title">Companies</span> 
                    </div>
                  </div>
                </div>	
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Counters / End */} 
      {/* Subscribe Block Start */}
      <section className="utf_cta_area_item utf_cta_area2_block">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="utf_subscribe_block">
                <div className="col-xl-8 col-md-7">
                  <div className="section-heading">
                    <h2 className="utf_sec_title_item utf_sec_title_item2">Subscribe to Our Newsletter!</h2>
                    <p className="utf_sec_meta">Subscribe to get latest updates and information.</p>
                  </div>
                </div>
                <div className="col-xl-4 col-md-5">
                  <div className="contact-form-action">
                    <form method="post">
                      <i className="icon-material-baseline-mail-outline" />
                      <input className="form-control" type="email" placeholder="Enter your email" required />
                      <button className="utf_theme_btn" type="submit">Subscribe</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Subscribe Block End */}
      {/* Footer */}
      <div id="footer"> 
        <div className="utf-footer-section-item-block">
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-md-12">
                <div className="utf-footer-item-links">
                  <a href="index-1.html"><img className="footer-logo" src="images/footer_logo.png" alt="" /></a>
                  <p>Lorem Ipsum is simply dummy text of printing and type setting industry. Lorem Ipsum been industry standard dummy text ever since, when unknown printer took a galley type scrambled.</p>								
                </div>
              </div>
              <div className="col-xl-2 col-md-3 col-sm-6">
                <div className="utf-footer-item-links">
                  <h3>Job Categories</h3>
                  <ul>
                    <li><a href="jobs-list-layout-leftside.html"><i className="icon-feather-chevron-right" /> <span>Developement</span></a></li>
                    <li><a href="jobs-list-layout-leftside.html"><i className="icon-feather-chevron-right" /> <span>Designing</span></a></li>
                    <li><a href="jobs-list-layout-leftside.html"><i className="icon-feather-chevron-right" /> <span>Marketing</span></a></li>
                    <li><a href="jobs-list-layout-leftside.html"><i className="icon-feather-chevron-right" /> <span>Data Analytics</span></a></li>				
                    <li><a href="#"><i className="icon-feather-chevron-right" /> <span>Post New Job</span></a></li>				
                  </ul>
                </div>
              </div>
              <div className="col-xl-2 col-md-3 col-sm-6">
                <div className="utf-footer-item-links">
                  <h3>Job Type</h3>
                  <ul>
                    <li><a href="jobs-list-layout-leftside.html"><i className="icon-feather-chevron-right" /> <span>Work from Home</span></a></li>
                    <li><a href="jobs-list-layout-leftside.html"><i className="icon-feather-chevron-right" /> <span>Internship Job</span></a></li>
                    <li><a href="jobs-list-layout-leftside.html"><i className="icon-feather-chevron-right" /> <span>Freelancer Job</span></a></li>
                    <li><a href="jobs-list-layout-leftside.html"><i className="icon-feather-chevron-right" /> <span>Part Time Job</span></a></li>
                    <li><a href="jobs-list-layout-leftside.html"><i className="icon-feather-chevron-right" /> <span>Full Time Job</span></a></li>					
                  </ul>
                </div>
              </div>
              <div className="col-xl-2 col-md-3 col-sm-6">
                <div className="utf-footer-item-links">
                  <h3>Resources</h3>
                  <ul>
                    <li><a href="#"><i className="icon-feather-chevron-right" /> <span>My Account</span></a></li>
                    <li><a href="#"><i className="icon-feather-chevron-right" /> <span>Support</span></a></li>
                    <li><a href="#"><i className="icon-feather-chevron-right" /> <span>How It Works</span></a></li>
                    <li><a href="#"><i className="icon-feather-chevron-right" /> <span>Underwriting</span></a></li>
                    <li><a href="#"><i className="icon-feather-chevron-right" /> <span>Employers</span></a></li>                
                  </ul>
                </div>
              </div>
              <div className="col-xl-2 col-md-3 col-sm-6">
                <div className="utf-footer-item-links">
                  <h3>Quick Links</h3>
                  <ul>
                    <li><a href="jobs-list-layout-leftside.html"><i className="icon-feather-chevron-right" /> <span>Jobs Listing</span></a></li>
                    <li><a href="about-us.html"><i className="icon-feather-chevron-right" /> <span>About Us</span></a></li>
                    <li><a href="contact.html"><i className="icon-feather-chevron-right" /> <span>Contact Us</span></a></li>
                    <li><a href="privacy-policy.html"><i className="icon-feather-chevron-right" /> <span>Privacy Policy</span></a></li>
                    <li><a href="terms-condition.html"><i className="icon-feather-chevron-right" /> <span>Term &amp; Condition</span></a></li>
                  </ul>
                </div>
              </div>          
            </div>
          </div>
        </div>
        {/* Footer Copyrights */}
        <div className="utf-footer-copyright-item">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">Copyright © 2021 All Rights Reserved.</div>
            </div>
          </div>
        </div>
        {/* Footer Copyrights / End */}     
      </div>
      {/* Footer / End */}   
    </div>
    {/* Wrapper / End */} 
    {/* Sign In Popup */}
    <div id="utf-signin-dialog-block" className="zoom-anim-dialog mfp-hide dialog-with-tabs"> 
      <div className="utf-signin-form-part">
        <ul className="utf-popup-tabs-nav-item">
          <li><a href="#login">Log In</a></li>
          <li><a href="#register">Register</a></li>
        </ul>
        <div className="utf-popup-container-part-tabs"> 
          {/* Login */}
          <div className="utf-popup-tab-content-item" id="login"> 
            <div className="utf-welcome-text-item">
              <h3>Welcome Back Sign in to Continue</h3>
              <span>Don't Have an Account? <a href="#" className="register-tab">Sign Up!</a></span> 
            </div>
            <form method="post" id="login-form">
              <div className="utf-no-border">
                <input type="text" className="utf-with-border" name="emailaddress" id="emailaddress" placeholder="Email Address" required />
              </div>
              <div className="utf-no-border">
                <input type="password" className="utf-with-border" name="password" id="password" placeholder="Password" required />
              </div>
              <div className="checkbox margin-top-0">
                <input type="checkbox" id="two-step" />
                <label htmlFor="two-step"><span className="checkbox-icon" /> Remember Me</label>
              </div>
              <a href="forgot-password.html" className="forgot-password">Forgot Password?</a>
            </form>
            <button className="button full-width utf-button-sliding-icon ripple-effect" type="submit" form="login-form">Log In <i className="icon-feather-chevron-right" /></button>
            <div className="utf-social-login-separator-item"><span>Or Login in With</span></div>
            <div className="utf-social-login-buttons-block">
              <button className="facebook-login ripple-effect"><i className="icon-brand-facebook-f" /> Facebook</button>
              <button className="google-login ripple-effect"><i className="icon-brand-google" /> Google</button>
              <button className="twitter-login ripple-effect"><i className="icon-brand-twitter" /> Twitter</button>
            </div>
          </div>
          {/* Register */}
          <div className="utf-popup-tab-content-item" id="register"> 
            <div className="utf-welcome-text-item">
              <h3>Create your Account!</h3>
              <span>Don't Have an Account? <a href="#" className="register-tab">Sign Up!</a></span> 
            </div>        
            <form method="post" id="utf-register-account-form">
              <div className="utf-no-border">
                <input type="text" className="utf-with-border" name="name" id="name" placeholder="User Name" required />
              </div>
              <div className="utf-no-border">
                <input type="text" className="utf-with-border" name="emailaddress-register" id="emailaddress-register" placeholder="Email Address" required />
              </div>
              <div className="utf-no-border margin-bottom-20">
                <select className="selectpicker utf-with-border" data-size={5} title="Select Jobs">
                  <option>Web Designer</option>
                  <option>Web Developer</option>
                  <option>Graphic Designer</option>
                  <option>Android Developer</option>
                  <option>IOS Developer</option>
                  <option>UI/UX Designer</option>
                  <option>Graphics Designer</option>				
                </select>
              </div>
              <div className="utf-no-border" title="Should be at least 8 characters long" data-tippy-placement="bottom">
                <input type="password" className="utf-with-border" name="password-register" id="password-register" placeholder="Password" required />
              </div>
              <div className="utf-no-border">
                <input type="password" className="utf-with-border" name="password-repeat-register" id="password-repeat-register" placeholder="Repeat Password" required />
              </div>
              <div className="checkbox margin-top-0">
                <input type="checkbox" id="two-step0" />
                <label htmlFor="two-step0"><span className="checkbox-icon" /> I Have Read and Agree to the <a href="#">Terms &amp; Conditions</a></label>
              </div>
            </form>
            <button className="margin-top-10 button full-width utf-button-sliding-icon ripple-effect" type="submit" form="utf-register-account-form">Register <i className="icon-feather-chevron-right" /></button>
          </div>
        </div>
      </div>
    </div>
    {/* Sign In Popup / End */} 
    {/* Scripts */} 
  </div>
    </div>
  )
}

export default Home
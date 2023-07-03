import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
url: any ="https://www.linkedin.com/in/vinayone/";
fiverr_profile : any;
  constructor() {
	this.fiverr_profile = `
	<div itemscope itemtype='http://schema.org/Person' class='fiverr-seller-widget' style='display: inline-block;'>
						 <a itemprop='url' href=https://www.fiverr.com/vinayone_india rel="nofollow" target="_blank" style='display: inline-block;'>
							<div class='fiverr-seller-content' id='fiverr-seller-widget-content-e74c8b6a-cc5a-48ea-9e4e-493771de8eec' itemprop='contentURL' style='display: none;'></div>
							<div id='fiverr-widget-seller-data' style='display: none;'>
								<div itemprop='name' >vinayone_india</div>
								<div itemscope itemtype='http://schema.org/Organization'><span itemprop='name'>Fiverr</span></div>
								<div itemprop='jobtitle'>Seller</div>
								<div itemprop='description'>I have 8 years of experience into Web Application Development. I worked for various Multinational Companies like Cisco & Philips. My skills include HTML5, CSS3, JavaScript, Angular, Node & PHP. I can create any kind of web application from static to dynamic, simple to complex enterprise level. </div>
							</div>
						</a>
					</div>
  `;
   }

   getlinkedInProfile(){
	window.open(this.url,'_blank');
  }

  ngOnInit() {
	 // document.getElementById('linkedIn').innerHTML = "<div class='LI-profile-badge'  data-version='v1' data-size='large' data-locale='en_US' data-type='vertical' data-theme='light' data-vanity='vinayone'><a class='LI-simple-link' target='_new' href='https://in.linkedin.com/in/vinayone?trk=profile-badge'>Vinay Kumar Munda</a></div>";
	
  }

}

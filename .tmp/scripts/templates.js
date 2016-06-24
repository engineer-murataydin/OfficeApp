angular.module("Pocapp").run(["$templateCache", function($templateCache) {$templateCache.put("appload/appload.html","<!-- A Parent View that will be shown after the Splashscreen and Before the Dashboard / Home page -->\n<ion-view view-title=\"Appload\">\n  <ion-content>\n    <h1>Loading...</h1>\n  </ion-content>\n</ion-view>\n");
$templateCache.put("dashboard/dashboard.html","<ion-view view-title=\"\" ng-class=\"{\'mainstyle-contacts\' : dashboard.subject == \'contacts\', \'mainstyle-projects\' : dashboard.subject == \'projects\', \'mainstyle-news\' : dashboard.subject == \'news\'}\">\n	<img class=\"img-main-logo\" src=\"images/ciber.png\">\n	<ion-content>\n		<div class=\"list list-inset search-bar\">\n			<label class=\"item item-input\">\n				<i class=\"icon ion-search placeholder-icon\"></i>\n				<input type=\"text\" placeholder=\"Search\" ng-model=\"dashboard.searchQuery\" ng-keyup=\"dashboard.getSearchResult()\">\n      		</label>\n		</div>\n\n		<div class=\"row tab-bar-custom\">\n			<div class=\"col col-33 text-center custom-tab-bar-item\" ng-class=\"dashboard.subject == \'contacts\' ? \'active-subject\' : \'inactive-subject\'\"\n				ng-click=\"dashboard.changeSubject(\'contacts\')\"><span>Contacts</span></div>\n			<div class=\"col col-33 text-center custom-tab-bar-item\" ng-class=\"dashboard.subject == \'projects\' ? \'active-subject\' : \'inactive-subject\'\"\n				ng-click=\"dashboard.changeSubject(\'projects\')\"><span>Projects</span></div>\n			<div class=\"col col-33 text-center custom-tab-bar-item\" ng-class=\"dashboard.subject == \'news\' ? \'active-subject\' : \'inactive-subject\'\"\n				ng-click=\"dashboard.changeSubject(\'news\')\"><span>News</span></div>\n		</div>\n\n		<ion-scroll class=\"scroll-style\" zooming=\"false\" direction=\"y\">\n			<!-- Contacts -->\n			<div ng-show=\"dashboard.subject == \'contacts\'\">\n				<div ng-hide=\"dashboard.contacts.length >= \'0\'\">\n					<div class=\"search-bar-contact\">\n						<h2>Find your collegue</h2>\n						<label class=\"item item-input search-bar\">\n						<i class=\"icon ion-search placeholder-icon\"></i>\n						<input type=\"text\" placeholder=\"Search\" ng-model=\"dashboard.searchQuery\" ng-keyup=\"dashboard.getSearchResult()\">\n					</label>\n					</div>\n				</div>\n				<div class=\"list\">\n					<div class=\"item item-avatar custom-item-contacts\" ng-repeat=\"(contactIndex, contact) in dashboard.contacts\">\n						<img class=\"img-profile-photo\" src=\"{{contact.profilephoto}}\" ng-click=\"!dashboard.disabeld && dashboard.contactMenuToggle( contactIndex )\">\n						<div id=\"contact_togglemenu_{{contactIndex}}\">\n							<div id=\"contact_{{contactIndex}}\">\n								<div id=\"contact-icon-container_{{contactIndex}}\" class=\"contact-icon-container\">\n									<div ng-repeat=\"(channelIndex, channel) in contact.channels\" id=\"animation_{{contactIndex}}_{{$index}}\" class=\"contact-icons contact-icon-bg-{{channel.type}}\">\n										<!-- Email -->\n										<div ng-show=\"channel.type == \'email\'\" ng-click=\"dashboard.sendMail( \'{{channel.value}}\' )\" style=\"width: 100%; height: 100%;\"></div>\n										<!-- Telephone -->\n										<div ng-show=\"channel.type == \'mobileNumber\'\" ng-click=\"dashboard.callPerson( \'{{channel.value}}\' )\" style=\"width: 100%; height: 100%;\"></div>\n										<!-- LinkedIn -->\n										<div ng-show=\"channel.type == \'linkedIn\'\" ng-click=\"dashboard.linkedIn( \'{{channel.value}}\' )\" style=\"width: 100%; height: 100%;\"></div>\n									</div>\n								</div>\n							</div>\n						</div>\n						<div ui-sref=\"Pocapp.userprofile({empId: contact.employeeId})\">\n							<h2>{{contact.firstname + \" \" + contact.lastname}}</h2>\n							<p>{{contact.role}}</p>\n						</div>\n\n					</div>\n				</div>\n			</div>\n\n			<!-- Projects -->\n			<div ng-show=\"dashboard.subject == \'projects\'\">\n				<div class=\"list\">\n					<div class=\"item item-thumbnail-left custom-item-projects\" ng-repeat=\"project in dashboard.projects | filter: dashboard.searchQuery\"\n						ui-sref=\"Pocapp.projectdetail({pId: project.projectId})\">\n						<img src=\"{{project.projectMainPhoto}}\">\n						<h2>{{project.title}}</h2>\n						<p>{{project.year + \', \' + project.unit + \' \' + project.team}}</p>\n					</div>\n				</div>\n			</div>\n\n			<!-- News -->\n			<div ng-show=\"dashboard.subject == \'news\'\">\n				<!--<div class=\"list\">\n				<div class=\"item item-thumbnail-left custom-item-news\" ng-repeat=\"news in dashboard.news | filter: dashboard.searchQuery\" ui-sref=\"Pocapp.newsdetail({nId: news.newsId})\">\n					<img src=\"{{news.newsMainPhoto}}\">\n					<h2>{{news.title}}</h2>\n					<p>{{news.author + \', \' + news.createDate + \', \' + news.year}}</p>\n				</div>\n			</div>-->\n				<div ng-repeat=\"news in dashboard.news | filter: dashboard.searchQuery\" ui-sref=\"Pocapp.newsdetail({nId: news.newsId})\">\n					<div class=\"card\">\n						<div class=\"item item-text-wrap custom-item-news\">\n							<h2>{{news.title}}</h2>\n							<p>{{news.author + \', \' + news.createDate + \', \' + news.year}}</p>\n							<br/>\n							<p>{{news.description_short}}</p>\n						</div>\n					</div>\n				</div>\n			</div>\n		</ion-scroll>\n\n	</ion-content>\n</ion-view>\n");
$templateCache.put("newsdetail/newsdetail.html","<ion-view class=\"mainstyle-news\" view-title=\"News\">\n    <ion-nav-title>{{newsdetail.data.title}}</ion-nav-title>\n    <ion-content>\n\n        <image-zoom-gallery images=\"newsdetail.allImages\"></image-zoom-gallery>\n\n        <div class=\"row\">\n            <div class=\"col\">\n                <h2>{{newsdetail.data.title}}</h2>\n                <p>{{newsdetail.data.author + \', \' + newsdetail.data.createDate + \', \' + newsdetail.data.year}}</p>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col\">\n                <p>{{newsdetail.data.description_long}}</p>\n            </div>\n        </div>\n\n    </ion-content>\n</ion-view>");
$templateCache.put("projectdetail/projectdetail.html","<ion-view>\n<ion-view class=\"mainstyle-projects\" data-cache=\"false\">\n    <ion-nav-title>{{projectdetail.data.title}}</ion-nav-title>\n    <ion-content>\n        <ion-refresher pulling-text=\"Pull to refresh...\" on-refresh=\"projectdetail.projectDetailRefresh()\">\n        </ion-refresher>\n\n        <div>\n            <image-zoom-gallery galleryId=\"projectDetail\" images=\"projectdetail.allImages\"></image-zoom-gallery>\n        </div>\n\n        <div class=\"row tab-bar-custom\">\n            <div class=\"col col-33 text-center custom-tab-bar-item\" ng-class=\"projectdetail.subject == \'project\' ? \'active-subject\' : \'inactive-subject\'\"\n                ng-click=\"projectdetail.changeSubject(\'project\')\"><span>Project<span></div>\n            <div class=\"col col-33 text-center custom-tab-bar-item\" ng-class=\"projectdetail.subject == \'team\' ? \'active-subject\' : \'inactive-subject\'\"\n                ng-click=\"projectdetail.changeSubject(\'team\')\"><span>Team</span></div>\n            <div class=\"col col-33 text-center custom-tab-bar-item\" ng-class=\"projectdetail.subject == \'links\' ? \'active-subject\' : \'inactive-subject\'\"\n                ng-click=\"projectdetail.changeSubject(\'links\')\"><span>Links</span></div>\n        </div>\n\n    </ion-content>\n</ion-view>\n");
$templateCache.put("userprofile/userprofile.html","<ion-view view-title=\"User Profile\" class=\"background-contacts-details\">\n	<ion-content>\n		<div class=\"list\">\n			<div class=\"item item-avatar\">\n				<img id=\"profilephoto\" src=\"{{userprofile.data.profilephoto}}\">\n				<h2>{{userprofile.data.firstname + \" \" + userprofile.data.lastname}}</h2>\n				<p>{{userprofile.data.role}}</p>\n			</div>\n\n			<div class=\"item item-icon-left\">\n				<i class=\"icon ion-calendar\"></i> {{userprofile.data.dateOfBirth}}\n				<span class=\"item-note\">\n					Birthdate\n				</span>\n			</div>\n			<div class=\"item item-icon-left\">\n				<i class=\"icon ion-flag\"></i> {{userprofile.data.nationality}}\n				<span class=\"item-note\">\n					Nationality\n				</span>\n			</div>\n			<div class=\"item item-icon-left\">\n				<i class=\"icon ion-iphone\"></i> {{userprofile.data.mobileNumber}}\n				<span class=\"item-note\">\n					Mobile number\n				</span>\n			</div>\n			<div class=\"item item-icon-left\">\n				<i class=\"icon ion-android-call\"></i> {{userprofile.data.phoneNumber}}\n				<span class=\"item-note\">\n					Phone number\n				</span>\n			</div>\n			<div class=\"item item-icon-left\">\n				<i class=\"icon ion-email\"></i> {{userprofile.data.email}}\n				<span class=\"item-note\">\n					Email\n				</span>\n			</div>\n			<div class=\"item item-icon-left\">\n				<i class=\"icon ion-location\"></i> {{userprofile.data.company}}\n				<span class=\"item-note\">\n					Company\n				</span>\n			</div>\n			<div class=\"item item-icon-left\">\n				<i class=\"icon ion-home\"></i> {{userprofile.data.department}}\n				<span class=\"item-note\">\n					Department\n				</span>\n			</div>\n			<div class=\"item item-icon-left\">\n				<i class=\"icon ion-android-expand\"></i> {{userprofile.data.unit}}\n				<span class=\"item-note\">\n					Unit\n				</span>\n			</div>\n			<div class=\"item item-icon-left\">\n				<i class=\"icon ion-ios-people\"></i> {{userprofile.data.team}}\n				<span class=\"item-note\">\n					Team\n				</span>\n			</div>\n			<div class=\"item item-icon-left\">\n				<i class=\"icon ion-person\"></i> {{userprofile.data.manager}}\n				<span class=\"item-note\">\n					Manager\n				</span>\n			</div>\n			<div class=\"item item-icon-left\">\n				<i class=\"icon ion-person\"></i> {{userprofile.deviceinfo}}\n				<span class=\"item-note\">\n					Device platform\n				</span>\n			</div>\n			<button ng-click=\"userprofile.storeContact()\">Voeg contact toe</button>\n		</div>\n	</ion-content>\n</ion-view>\n");
$templateCache.put("core/layout/layout.html","<ion-side-menus enable-menu-with-back-views=\"false\">\n  <ion-side-menu-content>\n    <ion-nav-bar class=\"bar-positive\">\n      <ion-nav-back-button></ion-nav-back-button>\n      <ion-nav-buttons side=\"left\">\n        <button class=\"button button-icon button-clear ion-navicon\" menu-toggle=\"left\"></button>\n      </ion-nav-buttons>\n    </ion-nav-bar>\n    <!-- Parent Nav View, child views are loaded in the appContent view -->\n    <!-- To remove the Side Menu, remove all the code on this page expect for <ion-nav-view name=\"appContent\"></ion-nav-view> -->\n    <ion-nav-view name=\"appContent\"></ion-nav-view>\n  </ion-side-menu-content>\n\n  <ion-side-menu side=\"left\">\n    <ion-list>\n      <ion-item menu-close ui-sref=\"Pocapp.dashboard\">\n        Dashboard\n      </ion-item>\n    </ion-list>\n  </ion-side-menu>\n</ion-side-menus>\n");
$templateCache.put("common/features/imagezoomgallery/imagezoomgallery-lightbox.html","<div class=\"modal image-modal transparent\" on-swipe-down=\"closeModal()\">\n    <div class=\"bar bar-clear\">\n        <div class=\"h1 title\"></div>\n        <button class=\"button button-clear button-positive\" ng-click=\"closeModal()\">\n            <i class=\"icon ion-close-circled\"></i>\n        </button>\n    </div>\n    <ion-slide-box on-slide-changed=\"slideChanged(index)\" active-slide=\"activeSlide\">\n        <ion-slide ng-repeat=\"image in allImages\">\n\n            <ion-scroll direction=\"xy\" scrollbar-x=\"false\" scrollbar-y=\"false\" zooming=\"true\" min-zoom=\"{{zoomMin}}\" style=\"width: 100%; height: 100%\"\n                delegate-handle=\"scrollHandle{{$index}}\" on-scroll=\"updateSlideStatus(activeSlide)\" on-release=\"updateSlideStatus(activeSlide)\">\n\n                <div class=\"image\" style=\"background-image: url( {{image.src}} )\"></div>\n\n            </ion-scroll>\n        </ion-slide>\n    </ion-slide-box>\n</div>");
$templateCache.put("common/features/imagezoomgallery/imagezoomgallery.html","<div id=\"imagezoomid\">\n    <a class=\"item item-list-detail custom-item-slider\">\n        <ion-scroll direction=\"x\">\n            <img ng-repeat=\"image in allImages\" ng-src=\"{{image.src}}\" ng-click=\"showImages($index)\" class=\"image-list-thumb\" />\n        </ion-scroll>\n    </a>\n</div>");}]);
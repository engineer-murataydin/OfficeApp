angular.module("Pocapp").run(["$templateCache", function($templateCache) {$templateCache.put("appload/appload.html","<!-- A Parent View that will be shown after the Splashscreen and Before the Dashboard / Home page -->\n<ion-view view-title=\"Appload\">\n  <ion-content>\n    <h1>Loading...</h1>\n  </ion-content>\n</ion-view>\n");
$templateCache.put("dashboard/dashboard.html","<ion-view view-title=\"Dashboard\">\n	<ion-content>\n		<div class=\"list list-inset\">\n			<label class=\"item item-input\">\n				<i class=\"icon ion-search placeholder-icon\"></i>\n				<input type=\"text\" placeholder=\"Search\" ng-model=\"dashboard.searchQuery\" ng-keyup=\"dashboard.getSearchResult()\">\n      		</label>\n		</div>\n\n		<div class=\"row\">\n			<div class=\"col col-33 text-center\" ng-class=\"dashboard.subject == \'contacts\' ? \'active-subject\' : \'\'\" ng-click=\"dashboard.changeSubject(\'contacts\')\">Contacts</div>\n			<div class=\"col col-33 text-center\" ng-class=\"dashboard.subject == \'projects\' ? \'active-subject\' : \'\'\" ng-click=\"dashboard.changeSubject(\'projects\')\">Projects</div>\n			<div class=\"col col-33 text-center\" ng-class=\"dashboard.subject == \'news\' ? \'active-subject\' : \'\'\" ng-click=\"dashboard.changeSubject(\'news\')\">News</div>\n		</div>\n\n		<div ng-show=\"dashboard.subject == \'contacts\'\">\n			<div class=\"list\">\n				<div class=\"item item-avatar\" ng-repeat=\"contact in dashboard.contacts\" ui-sref=\"Pocapp.userprofile({empId: contact.employeeId})\">\n					<img src=\"{{contact.profilephoto}}\">\n					<h2>{{contact.firstname + \" \" + contact.lastname}}</h2>\n					<p>{{contact.role}}</p>\n				</div>\n			</div>\n		</div>\n\n		<div ng-show=\"dashboard.subject == \'projects\'\">\n			<div class=\"list\">\n				<div class=\"item item-thumbnail-left\" ng-repeat=\"project in dashboard.projects | filter: dashboard.searchQuery\" ui-sref=\"Pocapp.projectdetail({pId: project.projectId})\">\n					<img src=\"{{project.projectMainPhoto}}\">\n					<h2>{{project.title}}</h2>\n					<p>{{project.year + \', \' + project.unit + \' \' + project.team}}</p>\n					<!--<p>{{project.tags}}</p>-->\n				</div>\n			</div>\n		</div>\n\n	</ion-content>\n</ion-view>");
$templateCache.put("projectdetail/projectdetail.html","<ion-view view-title=\"Project Detail\">\r\n    <ion-content>\r\n        <!--{{projectdetail.data}}-->\r\n\r\n        <div class=\"list card\">\r\n\r\n            <div class=\"item\">\r\n                <!--<img src=\"{{projectdetail.data.projectMainPhoto}}\">-->\r\n                <h2>{{projectdetail.data.title}}</h2>\r\n                <p>{{projectdetail.data.year + \', \' + projectdetail.data.unit + \' \' + projectdetail.data.team}}</p>\r\n            </div>\r\n\r\n            <a class=\"item item-list-detail\">\r\n                <ion-scroll direction=\"x\">\r\n                    <img ng-repeat=\"image in projectdetail.allImages\" ng-src=\"{{image.src}}\" ng-click=\"projectdetail.showImages($index)\" class=\"image-list-thumb\"/>\r\n                </ion-scroll>\r\n            </a>\r\n\r\n            <!--<a class=\"item item-icon-left assertive\" href=\"#\">\r\n                <i class=\"icon ion-music-note\"></i> Start listening\r\n            </a>-->\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col col-33 text-center\" ng-class=\"projectdetail.subject == \'project\' ? \'active-subject\' : \'\'\" ng-click=\"projectdetail.changeSubject(\'project\')\">Project</div>\r\n            <div class=\"col col-33 text-center\" ng-class=\"projectdetail.subject == \'team\' ? \'active-subject\' : \'\'\" ng-click=\"projectdetail.changeSubject(\'team\')\">Team</div>\r\n            <div class=\"col col-33 text-center\" ng-class=\"projectdetail.subject == \'links\' ? \'active-subject\' : \'\'\" ng-click=\"projectdetail.changeSubject(\'links\')\">Links</div>\r\n        </div>\r\n\r\n    </ion-content>\r\n</ion-view>");
$templateCache.put("template/template-gallery-zoomview.html","<div class=\"modal image-modal transparent\" on-swipe-down=\"closeModal()\">\r\n    <ion-slide-box on-slide-changed=\"slideChanged(index)\" active-slide=\"activeSlide\">\r\n        <ion-slide ng-repeat=\"image in projectdetail.allImages\">\r\n\r\n            <ion-scroll direction=\"xy\" scrollbar-x=\"false\" scrollbar-y=\"false\" zooming=\"true\" min-zoom=\"{{zoomMin}}\" style=\"width: 100%; height: 100%\"\r\n                delegate-handle=\"scrollHandle{{$index}}\" on-scroll=\"updateSlideStatus(activeSlide)\" on-release=\"updateSlideStatus(activeSlide)\">\r\n\r\n                <div class=\"image\" style=\"background-image: url( {{image.src}} )\"></div>\r\n\r\n            </ion-scroll>\r\n        </ion-slide>\r\n    </ion-slide-box>\r\n</div>");
$templateCache.put("userprofile/userprofile.html","<ion-view view-title=\"User Profile\">\n	<ion-content>\n		<!--{{userprofile.data}}-->\n		<div class=\"list\">\n			<div class=\"item item-avatar\">\n				<img src=\"{{userprofile.data.profilephoto}}\">\n				<h2>{{userprofile.data.firstname + \" \" + userprofile.data.lastname}}</h2>\n				<p>{{userprofile.data.role}}</p>\n			</div>\n			<div class=\"item item-icon-left\">\n				<i class=\"icon ion-calendar\"></i> {{userprofile.data.dateOfBirth}}\n				<span class=\"item-note\">\n					Birthdate\n				</span>\n			</div>\n			<div class=\"item item-icon-left\">\n				<i class=\"icon ion-flag\"></i> {{userprofile.data.nationality}}\n				<span class=\"item-note\">\n					Nationality\n				</span>\n			</div>\n			<div class=\"item item-icon-left\">\n				<i class=\"icon ion-iphone\"></i> {{userprofile.data.mobileNumber}}\n				<span class=\"item-note\">\n					Mobile number\n				</span>\n			</div>\n			<div class=\"item item-icon-left\">\n				<i class=\"icon ion-android-call\"></i> {{userprofile.data.phoneNumber}}\n				<span class=\"item-note\">\n					Phone number\n				</span>\n			</div>\n			<div class=\"item item-icon-left\">\n				<i class=\"icon ion-email\"></i> {{userprofile.data.email}}\n				<span class=\"item-note\">\n					Email\n				</span>\n			</div>\n			<div class=\"item item-icon-left\">\n				<i class=\"icon ion-location\"></i> {{userprofile.data.company}}\n				<span class=\"item-note\">\n					Company\n				</span>\n			</div>\n			<div class=\"item item-icon-left\">\n				<i class=\"icon ion-home\"></i> {{userprofile.data.department}}\n				<span class=\"item-note\">\n					Department\n				</span>\n			</div>\n			<div class=\"item item-icon-left\">\n				<i class=\"icon ion-android-expand\"></i> {{userprofile.data.unit}}\n				<span class=\"item-note\">\n					Unit\n				</span>\n			</div>\n			<div class=\"item item-icon-left\">\n				<i class=\"icon ion-ios-people\"></i> {{userprofile.data.team}}\n				<span class=\"item-note\">\n					Team\n				</span>\n			</div>\n			<div class=\"item item-icon-left\">\n				<i class=\"icon ion-person\"></i> {{userprofile.data.manager}}\n				<span class=\"item-note\">\n					Manager\n				</span>\n			</div>\n		</div>\n	</ion-content>\n</ion-view>");
$templateCache.put("core/layout/layout.html","<ion-side-menus enable-menu-with-back-views=\"false\">\n  <ion-side-menu-content>\n    <ion-nav-bar class=\"bar-light\">\n      <ion-nav-back-button></ion-nav-back-button>\n      <ion-nav-buttons side=\"left\">\n        <button class=\"button button-icon button-clear ion-navicon\" menu-toggle=\"left\"></button>\n      </ion-nav-buttons>\n    </ion-nav-bar>\n    <!-- Parent Nav View, child views are loaded in the appContent view -->\n    <!-- To remove the Side Menu, remove all the code on this page expect for <ion-nav-view name=\"appContent\"></ion-nav-view> -->\n    <ion-nav-view name=\"appContent\"></ion-nav-view>\n  </ion-side-menu-content>\n\n  <ion-side-menu side=\"left\">\n    <ion-list>\n      <ion-item menu-close ui-sref=\"Pocapp.dashboard\">\n        Dashboard\n      </ion-item>\n    </ion-list>\n  </ion-side-menu>\n</ion-side-menus>");}]);
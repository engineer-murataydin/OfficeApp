angular.module("Pocapp").run(["$templateCache", function($templateCache) {$templateCache.put("appload/appload.html","<!-- A Parent View that will be shown after the Splashscreen and Before the Dashboard / Home page -->\r\n<ion-view view-title=\"Appload\">\r\n  <ion-content>\r\n    <h1>Loading...</h1>\r\n  </ion-content>\r\n</ion-view>\r\n");
$templateCache.put("dashboard/dashboard.html","<ion-view hide-nav-bar=\"true\" view-title=\"\" ng-class=\"{\'mainstyle-contacts\' : dashboard.subject == \'contacts\', \'mainstyle-projects\' : dashboard.subject == \'projects\', \'mainstyle-news\' : dashboard.subject == \'news\'}\">\r\n    <div class=\"main-logo\"></div>\r\n    <ion-content scroll=\"false\">\r\n        <div class=\"row tab-bar-custom\">\r\n            <div class=\"col col-33 text-center custom-tab-bar-item\" ng-class=\"dashboard.subject == \'contacts\' ? \'active-subject\' : \'inactive-subject\'\" ng-click=\"dashboard.changeSubject(\'contacts\')\">\r\n                <span>Contacts</span>\r\n            </div>\r\n            <div class=\"col col-33 text-center custom-tab-bar-item\" ng-class=\"dashboard.subject == \'projects\' ? \'active-subject\' : \'inactive-subject\'\" ng-click=\"dashboard.changeSubject(\'projects\')\">\r\n                <span>Projects</span>\r\n            </div>\r\n            <div class=\"col col-33 text-center custom-tab-bar-item\" ng-class=\"dashboard.subject == \'news\' ? \'active-subject\' : \'inactive-subject\'\" ng-click=\"dashboard.changeSubject(\'news\')\">\r\n                <span>News</span>\r\n            </div>\r\n        </div>\r\n\r\n        <div ng-show=\"dashboard.subject == \'contacts\'\" style=\"padding-bottom: 20px;\">\r\n            <div id=\"searchbar\" class=\"search-bar-contact\">\r\n                <h2 id=\"searchbar-h2\">Find your collegue</h2>\r\n                <label id=\"searchbar-label\" class=\"item item-input search-bar\">\r\n                    <i class=\"icon ion-search placeholder-icon\"></i>\r\n                    <input id=\"searchbar-contact\" type=\"text\" placeholder=\"Search\" ng-model=\"dashboard.searchQuery\" ng-keyup=\"dashboard.getSearchResult()\">\r\n                </label>\r\n            </div>\r\n        </div>\r\n\r\n        <ion-scroll class=\"scroll-style\" zooming=\"false\" direction=\"y\">\r\n            <!-- Contacts -->\r\n            <div ng-show=\"dashboard.subject == \'contacts\'\">\r\n                <div class=\"list\">\r\n                    <div class=\"item item-avatar custom-item-contacts\" ng-repeat=\"(contactIndex, contact) in dashboard.contacts\">\r\n                        <img class=\"img-profile-photo\" src=\"{{contact.profilephoto}}\" ng-click=\"!dashboard.disabeld && dashboard.contactMenuToggle( contactIndex )\">\r\n                        <div id=\"contact_togglemenu_{{contactIndex}}\">\r\n                            <div id=\"contact_{{contactIndex}}\">\r\n                                <div id=\"contact-icon-container_{{contactIndex}}\" class=\"contact-icon-container\">\r\n                                    <div ng-show=\"channel.value.length > \'0\' || channel.value.length != \'\'\" ng-repeat=\"(channelIndex, channel) in contact.channels\" id=\"animation_{{contactIndex}}_{{$index}}\" class=\"contact-icons contact-icon-bg-{{channel.type}}\">\r\n                                        <!-- Email -->\r\n                                        <div ng-show=\"channel.type == \'email\'\" ng-click=\"dashboard.sendMail( \'{{channel.value}}\' )\" style=\"width: 100%; height: 100%;\"></div>\r\n                                        <!-- Telephone -->\r\n                                        <div ng-show=\"channel.type == \'mobileNumber\'\" ng-click=\"dashboard.callPerson( \'{{channel.value}}\' )\" style=\"width: 100%; height: 100%;\"></div>\r\n                                        <!-- LinkedIn -->\r\n                                        <div ng-show=\"channel.type == \'linkedIn\'\" ng-click=\"dashboard.linkedIn( \'{{channel.value}}\' )\" style=\"width: 100%; height: 100%;\"></div>\r\n                                        <!-- Skype -->\r\n                                        <div ng-show=\"channel.type == \'skype\'\" ng-click=\"dashboard.skype( \'{{channel.value}}\', \'\', $event )\" style=\"width: 100%; height: 100%;\"></div>\r\n                                        <!-- storeContact -->\r\n                                        <div ng-show=\"channel.type == \'storeContact\'\" ng-click=\"dashboard.storeContact( \'{{channel.value}}\' )\" style=\"width: 100%; height: 100%;\"></div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div ui-sref=\"Pocapp.userprofile({empId: contact.employeeId})\">\r\n                            <h2>{{contact.firstname + \" \" + contact.lastname}}</h2>\r\n                            <p>{{contact.role}}</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <!-- Projects -->\r\n            <div ng-show=\"dashboard.subject == \'projects\'\">\r\n                <div class=\"list\">\r\n                    <div class=\"item item-thumbnail-left custom-item-projects\" ng-repeat=\"project in dashboard.projects | filter: dashboard.searchQuery\" ui-sref=\"Pocapp.projectdetail({pId: project.projectId})\">\r\n                        <img src=\"{{project.projectMainPhoto}}\">\r\n                        <h2>{{project.title}}</h2>\r\n                        <p>{{project.year + \', \' + project.unit + \' \' + project.team}}</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <!-- News -->\r\n            <div ng-show=\"dashboard.subject == \'news\'\">\r\n                <div ng-repeat=\"news in dashboard.news | filter: dashboard.searchQuery\" ui-sref=\"Pocapp.newsdetail({nId: news.newsId})\">\r\n                    <div class=\"list\">\r\n                        <div class=\"item item-thumbnail-left custom-item-projects\">\r\n                            <img src=\"../images/ciber-inc-logo.jpg\">\r\n                            <h2>{{news.title}}</h2>\r\n                            <p>{{news.author + \', \' + news.createDate + \', \' + news.year}}</p>\r\n                            <p>{{news.description_short}}</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </ion-scroll>\r\n\r\n    </ion-content>\r\n</ion-view>\r\n");
$templateCache.put("dashboard/skype-contact.html","<ion-popover-view class=\"custom-popover\" style=\"background: red !important; height: auto !important;\">\r\n        <div class=\"list\">\r\n            <div class=\"item item-avatar\" ng-repeat=\"skype in dashboard.skypeChannels\" ng-click=\"dashboard.openSkype(skype.name, skype.type)\">\r\n                <img ng-src=\"{{skype.type == \'skype\' ? \'images/skype-logo.png\' : \'images/skype-for-business-logo.png\'}}\">\r\n                <h2>{{skype.name}}</h2>\r\n                <p>{{skype.type == \'skype\' ? \'Skype\' : \'Skype for Business\'}}</p>\r\n            </div>\r\n        </div>\r\n</ion-popover-view>\r\n");
$templateCache.put("newsdetail/newsdetail.html","<ion-view hide-nav-bar=\"false\" class=\"mainstyle-news\" data-cache=\"false\" cache-view=\"false\">\n\n    <ion-nav-title>{{newsdetail.data.title}}</ion-nav-title>\n\n    <ion-content style=\"margin-top: 0px; background-color: #ffffff\" shrinking-header>\n\n        <ion-refresher pulling-text=\"Pull to refresh...\" on-refresh=\"newsdetail.newsDetailRefresh()\"></ion-refresher>\n\n        <img src=\"../images/slider/slider_one.jpeg\" height=\"40%\" width=\"100%\" style=\"margin-top: 40px;\"/>\n\n        <div class=\"row\">\n            <div class=\"col\">\n                <h3>{{newsdetail.data.title}}</h3>\n                <p>\n                    <i class=\"icon ion-android-time\"></i>\n                    {{newsdetail.data.createDate + \', \' + newsdetail.data.year + \' - \' + newsdetail.data.author}}\n                </p>\n            </div>\n            <div class=\"col-10\">\n              <p>\n                <i class=\"icon ion-android-mail\"></i>\n              </p>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col\">\n                <p>{{newsdetail.data.description_long}}</p>\n            </div>\n        </div>\n\n        <image-zoom-gallery images=\"newsdetail.allImages\"></image-zoom-gallery>\n\n    </ion-content>\n</ion-view>\n");
$templateCache.put("projectdetail/projectdetail.html","<ion-view hide-nav-bar=\"false\" class=\"mainstyle-projects\" data-cache=\"false\" cache-view=\"false\">\r\n    <ion-nav-title>{{projectdetail.data.title}}</ion-nav-title>\r\n\r\n    <ion-content style=\"margin-top: 0px; background-color: #ffffff\" shrinking-header>\r\n\r\n        <ion-refresher pulling-text=\"Pull to refresh...\" on-refresh=\"projectdetail.projectDetailRefresh()\"></ion-refresher>\r\n\r\n        <img src=\"../images/slider/slider_one.jpeg\" height=\"40%\" width=\"100%\" style=\"margin-top: 40px;\"/>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col\">\r\n                <h3>{{projectdetail.data.title}}</h3>\r\n                <p>\r\n                    <i class=\"icon ion-android-time\"></i>\r\n                    {{projectdetail.data.createDate + \', \' + projectdetail.data.year + \' - \' + projectdetail.data.unit}}\r\n                </p>\r\n            </div>\r\n            <div class=\"col-10\">\r\n              <p>\r\n                <i class=\"icon ion-android-mail\"></i>\r\n              </p>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col\">\r\n                <p>{{projectdetail.data.description_long}}</p>\r\n            </div>\r\n        </div>\r\n\r\n        <div>\r\n            <image-zoom-gallery galleryId=\"projectDetail\" images=\"projectdetail.allImages\"></image-zoom-gallery>\r\n        </div>\r\n\r\n    </ion-content>\r\n</ion-view>\r\n");
$templateCache.put("userprofile/userprofile.html","<ion-view view-title=\"Contact details\" class=\"mainstyle-contacts\">\n\n    <div></div>\n\n    <ion-content scroll=\"false\">\n\n        <div class=\"list\" style=\"margin-bottom: 0px;\">\n            <br/>\n            <div class=\"custom-profile-area\">\n                <img id=\"profilephoto\" src=\"{{userprofile.data.profilephoto}}\" style=\"border: 5px solid white;\">\n                <h2>{{userprofile.data.firstname + \" \" + userprofile.data.lastname}}</h2>\n                <p>{{userprofile.data.role}}</p>\n            </div>\n        </div>\n\n        <div class=\"row tab-bar-custom\" style=\"margin-top: 20px;\">\n            <div class=\"col col-50 text-center custom-tab-bar-item\" ng-class=\"userprofile.subject == \'personal\' ? \'active-subject\' : \'inactive-subject\'\" ng-click=\"userprofile.changeSubject(\'personal\')\">\n                <span>Personal</span>\n            </div>\n            <div class=\"col col-50 text-center custom-tab-bar-item\" ng-class=\"userprofile.subject == \'company\' ? \'active-subject\' : \'inactive-subject\'\" ng-click=\"userprofile.changeSubject(\'company\')\">\n                <span>Company</span>\n            </div>\n        </div>\n\n        <ion-scroll class=\"scroll-style\" zooming=\"false\" direction=\"y\">\n\n            <div ng-show=\"userprofile.subject == \'personal\'\">\n                <div class=\"list\">\n                    <a class=\"item item-icon-right custom-item\" ng-click=\"userprofile.callPerson(userprofile.data.mobileNumber)\">\n                        <i class=\"icon ion-android-phone-portrait\"></i>\n                        {{userprofile.data.mobileNumber}}\n                    </a>\n                    <a class=\"item item-icon-right custom-item\" ng-click=\"userprofile.callPerson(userprofile.data.phoneNumber)\">\n                        <i class=\"icon ion-ios-telephone\"></i>\n                        {{userprofile.data.phoneNumber}}\n                    </a>\n                    <a class=\"item item-icon-right custom-item\" ng-click=\"userprofile.sendMail(userprofile.data.email)\">\n                        <i class=\"icon ion-email\"></i>\n                        {{userprofile.data.email}}\n                    </a>\n                    <a ng-repeat=\"skypeAccount in userprofile.data.skype\" class=\"item item-icon-right custom-item\" ng-click=\"userprofile.openSkype(skypeAccount.name)\">\n                        <i ng-class=\"{\'icon ion-social-skype\' : skypeAccount.type == \'skype\', \'icon ion-social-skype-outline\' : skypeAccount.type == \'skype4business\'}\"></i>\n                        {{skypeAccount.name}}\n                    </a>\n                    <!-- <a class=\"item item-icon-right custom-item\" href=\"#\">\n                        <i class=\"icon ion-social-skype\"></i>\n                        skype\n                    </a>\n                    <a  class=\"item item-icon-right custom-item\" href=\"#\">\n                        <i class=\"icon ion-social-skype-outline\"></i>\n                        skype4business\n                    </a> -->\n                    <a ng-show=\"userprofile.data.linkedIn != \'\'\" class=\"item item-icon-right custom-item\" ng-click=\"userprofile.linkedIn(userprofile.data.linkedIn)\">\n                        <i class=\"icon ion-social-linkedin\"></i>\n                        {{userprofile.data.linkedIn}}\n                    </a>\n                    <br/>\n                    <div>\n                        <ion-slide-box show-pager=\"false\">\n                            <ion-slide>\n                                <div class=\"list\">\n                                    <a class=\"item item-thumbnail-left\" href=\"#\">\n                                        <img src=\"cover.jpg\">\n                                        <h2>Pretty Hate Machine</h2>\n                                        <p>Nine Inch Nails</p>\n                                    </a>\n                                </div>\n                            </ion-slide>\n                            <ion-slide>\n                                <div class=\"list\">\n                                    <a class=\"item item-thumbnail-left\" href=\"#\">\n                                        <img src=\"cover.jpg\">\n                                        <h2>Pretty Hate Machine</h2>\n                                        <p>Nine Inch Nails</p>\n                                    </a>\n                                </div>\n                            </ion-slide>\n                        </ion-slide-box>\n                    </div>\n                    <div class=\"row\" style=\"position: relative; height: 44px !important;\"></div>\n                </div>\n            </div>\n\n            <div ng-show=\"userprofile.subject == \'company\'\">\n                <div class=\"list\">\n                    <a class=\"item custom-item\">\n                        {{userprofile.data.company}}\n                    </a>\n                    <a class=\"item custom-item\">\n                        {{userprofile.data.department}}\n                        {{userprofile.data.unit}}\n                        {{userprofile.data.team}}\n                    </a>\n                    <a class=\"item custom-item\">\n                        {{userprofile.data.manager}}\n                    </a>\n                </div>\n            </div>\n\n        </ion-scroll>\n\n    </ion-content>\n\n    <div>\n        <div class=\"bar bar-footer\" ng-click=\"userprofile.storeContact()\" style=\"margin: auto; background: transparent;\">\n            <button class=\"button button-balanced icon ion-ios-plus-outline\" style=\"width: 90%; text-align: center; margin: auto;\">\n                Add to Contacts\n            </button>\n        </div>\n    </div>\n\n</ion-view>\n");
$templateCache.put("core/layout/layout.html","<!-- <ion-side-menus enable-menu-with-back-views=\"false\"> -->\n<!-- <ion-side-menu-content> -->\n<ion-nav-bar class=\"bar-positive\" shrinking-header>\n    <ion-nav-back-button></ion-nav-back-button>\n    <ion-nav-buttons side=\"right\">\n        <information></information>\n        <button class=\"button button-icon button-clear ion-chevron-right\" style=\"margin-top: 10px;\" ng-click=\"layout.closeInformation()\" ng-hide=\"layout.showGoBackButton\"></button>\n    </ion-nav-buttons>\n</ion-nav-bar>\n<!-- Parent Nav View, child views are loaded in the appContent view -->\n<!-- To remove the Side Menu, remove all the code on this page expect for <ion-nav-view name=\"appContent\"></ion-nav-view> -->\n<!-- <ion-nav-view name=\"appContent\" class=\"mainstyle\"></ion-nav-view> -->\n<!-- </ion-side-menu-content> -->\n\n<!--<ion-side-menu side=\"left\" style=\"background-color: #F2F2F2;\">\n    <div class=\"bar bar-header\">\n      <div class=\"h1 title\" style=\"margin-top: 10px;\">About</div>\n      <button menu-close class=\"button button-clear button-positive ion-chevron-right\" style=\"margin-top: 10px;\"></button>\n    </div>\n    <ion-list>\n      <ion-item>\n      </ion-item>\n    </ion-list>\n</ion-side-menu>-->\n<!-- </ion-side-menus> -->\n<!-- <div>\n    <header bgColor=\"{{layout.headerBackgroundColor}}\" showBackButton=\"{{layout.showBackButton}}\"></header>\n</div> -->\n<ion-nav-view name=\"appContent\" class=\"mainstyle\"></ion-nav-view>\n");
$templateCache.put("common/features/fakestatusbar/fakestatusbar.html","<div class=\"fake-statusbar\">\r\n    <div class=\"pull-left\">Carrier</div>\n    <div class=\"time\">3:30 PM</div>\n    <div class=\"pull-right\">50%</div>\n</div>\r\n");
$templateCache.put("common/features/header/header.html","<div class=\"bar bar-header bar-dark\" style=\"background-color: {{backgroundColor}}\">\n    <button class=\"button button-icon icon ion-ios-arrow-left\" ng-click=\"myGoBack()\" ng-hide=\"hideGoBackButton\"> Back</button>\n    <div class=\"h1 title\">Header Buttons</div>\n    <information></information>\n</div>\n");
$templateCache.put("common/features/imagezoomgallery/imagezoomgallery-lightbox.html","<div class=\"modal image-modal transparent\" on-swipe-down=\"closeModal()\">\r\n    <div class=\"bar bar-clear\">\r\n        <div class=\"h1 title\"></div>\r\n        <button class=\"button button-clear button-positive\" ng-click=\"closeModal()\">\r\n            <i class=\"icon ion-close-circled\"></i>\r\n        </button>\r\n    </div>\r\n    <ion-slide-box on-slide-changed=\"slideChanged(index)\" active-slide=\"activeSlide\">\r\n        <ion-slide ng-repeat=\"image in allImages\">\r\n\r\n            <ion-scroll direction=\"xy\" scrollbar-x=\"false\" scrollbar-y=\"false\" zooming=\"true\" min-zoom=\"{{zoomMin}}\" style=\"width: 100%; height: 100%\"\r\n                delegate-handle=\"scrollHandle{{$index}}\" on-scroll=\"updateSlideStatus(activeSlide)\" on-release=\"updateSlideStatus(activeSlide)\">\r\n\r\n                <div class=\"image\" style=\"background-image: url( {{image.src}} )\"></div>\r\n\r\n            </ion-scroll>\r\n        </ion-slide>\r\n    </ion-slide-box>\r\n</div>");
$templateCache.put("common/features/imagezoomgallery/imagezoomgallery.html","<div id=\"imagezoomid\">\r\n    <a class=\"item item-list-detail custom-item-slider\">\r\n        <ion-scroll direction=\"x\">\r\n            <img ng-repeat=\"image in allImages\" ng-src=\"{{image.src}}\" ng-click=\"showImages($index)\" class=\"image-list-thumb\" />\r\n        </ion-scroll>\r\n    </a>\r\n</div>\r\n");
$templateCache.put("common/features/information/information.html","<div>\r\n    <button class=\"button button-icon button-clear ion-ios-information-outline\" style=\"margin-top: 10px;\" ng-click=\"openModal()\"></button>\r\n    <script id=\"my-modal.html\" type=\"text/ng-template\">\r\n        <ion-modal-view>\r\n            <ion-view view-title=\"About\" class=\"mainstyle-information\" hide-back-button=\"true\">\r\n                <ion-header-bar class=\"custom-bar-header\">\r\n                    <h1 class=\"title\">About</h1>\r\n                    <button class=\"button button-clear button-primary\" ng-click=\"closeModal()\">Close</button>\r\n                </ion-header-bar>\r\n                <ion-content>\r\n                    <div class=\"list card information-page-layout\">\r\n\r\n                        <div class=\"item item-image transparent\">\r\n                            <img src=\"../images/ciber.png\">\r\n                            <br/></br/>\r\n                    </div>\r\n\r\n                    <div class=\"item transparent\" style=\"width:auto; margin:0 auto;\">\r\n                        <h2 style=\"color: #8D878D; text-align: center\">Whitelabel Office App</h2>\r\n                    </div>\r\n\r\n                    <div class=\"item transparent\" style=\"width:auto; margin:0 auto; white-space:normal;\">\r\n                        <p style=\"color: #8D878D; text-align: center\">\r\n                            This nameless app has been created by and for ciber employees to quickly search and share contact details, projects and newsitems.\r\n                        </p>\r\n                    </div>\r\n                </div>\r\n                <div class=\"list\">\r\n                    <a class=\"item item-icon-left\" href=\"#\">\r\n                        <i class=\"icon ion-loop\"></i>\r\n                        Version\r\n                        <span class=\"item-note\">\r\n                            0.12\r\n                        </span>\r\n                    </a>\r\n                    <a class=\"item item-icon-left\" href=\"#\">\r\n                        <i class=\"icon ion-calendar\"></i>\r\n                        Release date\r\n                        <span class=\"item-note\">\r\n                            30-08-2017\r\n                        </span>\r\n                    </a>\r\n                    <a class=\"item item-icon-left\" href=\"#\">\r\n                        <i class=\"icon ion-briefcase\"></i>\r\n                        Project\r\n                        <span class=\"item-note\">\r\n                            Whitelabel Office App\r\n                        </span>\r\n                    </a>\r\n                </div>\r\n            </ion-content>\r\n        </ion-view>\r\n\r\n    </ion-modal-view>\r\n</script>\r\n</div>\r\n");}]);
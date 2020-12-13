(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n\r\n  <ion-toolbar>\r\n\r\n    <ion-title>LOGIN</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content no-padding>\r\n  <div>\r\n    <ion-list>\r\n\r\n\r\n      <ion-item (click)=\"login()\">\r\n        <ion-label>로그인(login)</ion-label>\r\n      </ion-item>\r\n    \r\n    </ion-list>\r\n\r\n  </div>\r\n\r\n</ion-content>"

/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-home {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxccHJvamVjdHNcXGNvcmRvdmEtcGx1Z2luLWtha2FvLXNkay1leGFtcGxlXFxpb25pYzQvc3JjXFxhcHBcXGhvbWVcXGhvbWUucGFnZS5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EsWUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFwcC1ob21lIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59IiwiYXBwLWhvbWUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDEwMCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var kakao_sdk_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! kakao-sdk/ngx */ "./node_modules/kakao-sdk/ngx/index.js");



var HomePage = /** @class */ (function () {
    function HomePage(_kakaoCordovaSDK) {
        this._kakaoCordovaSDK = _kakaoCordovaSDK;
        this.message = '';
        this.isKakaoLogin = false;
        this.uploadImageUrl = '';
        //your template id and arguments
        this.customTemplate = {
            templateId: '9570',
            arguments: {
                title: 'title for test',
                description: 'description for description',
                like: '5000000',
            },
        };
        // your plus friend id
        this.plusFriendTemplate = {
            plusFriendId: '_xcLqmC',
        };
    }
    HomePage.prototype.ngOnInit = function () { };
    HomePage.prototype.postStory = function () {
        var _this = this;
        console.log('kakao postStory');
        this.message = '';
        var postStoryUrlInfo = {
            title: 'Sample',
            desc: 'Sample 입니다.',
            imageURLs: [
                'http://mud-kage.kakao.co.kr/dn/RY8ZN/btqgOGzITp3/uCM1x2xu7GNfr7NS9QvEs0/kakaolink40_original.png',
                'http://mud-kage.kakao.co.kr/dn/RY8ZN/btqgOGzITp3/uCM1x2xu7GNfr7NS9QvEs0/kakaolink40_original.png',
            ],
            type: kakao_sdk_ngx__WEBPACK_IMPORTED_MODULE_2__["ScrapType"].ScrapTypeVideo,
        };
        var postStoryConfig = {
            post: 'Sample Story Posting https://www.youtube.com/watch?v=XUX1jtTKkKs',
            appver: '1.0',
            urlinfo: postStoryUrlInfo,
        };
        this._kakaoCordovaSDK
            .postStory(postStoryConfig)
            .then(function (res) {
            _this.message = JSON.stringify(res);
            console.info(_this.message);
        }, function (err) {
            _this.message = JSON.stringify(err);
            console.error(_this.message);
        })
            .catch(function (err) {
            _this.message = JSON.stringify(err);
            console.error(_this.message);
        });
    };
    HomePage.prototype.deleteUploadedImage = function () {
        var _this = this;
        console.log('kakao deleteUploadedImage');
        this.message = '';
        var deleteImageConfig = {
            url: this.uploadImageUrl,
        };
        this._kakaoCordovaSDK
            .deleteUploadedImage(deleteImageConfig)
            .then(function (res) {
            _this.message = JSON.stringify(res);
            _this.uploadImageUrl = '';
            console.info(_this.message);
        }, function (err) {
            _this.message = JSON.stringify(err);
            console.error(_this.message);
        })
            .catch(function (err) {
            _this.message = JSON.stringify(err);
            console.error(_this.message);
        });
    };
    HomePage.prototype.uploadImage = function (fileOrUrl, url) {
        var _this = this;
        console.log('kakao uploadImage');
        this.message = '';
        var uploadImageConfig = {
            fileOrUrl: fileOrUrl ? fileOrUrl : 'file',
            url: url ? url : '',
        };
        this._kakaoCordovaSDK
            .uploadImage(uploadImageConfig)
            .then(function (res) {
            _this.message = JSON.stringify(res);
            _this.uploadImageUrl = res;
            console.info(_this.message);
        }, function (err) {
            _this.message = JSON.stringify(err);
            console.error(_this.message);
        })
            .catch(function (err) {
            _this.message = JSON.stringify(err);
            console.error(_this.message);
        });
    };
    HomePage.prototype.sendLinkCustom = function () {
        var _this = this;
        console.log('kakao sendLinkCustom');
        this.message = '';
        var values = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.customTemplate);
        values.arguments.description = 'message from sendLinkCustom()';
        this._kakaoCordovaSDK
            .sendLinkCustom(values)
            .then(function (res) {
            _this.message = JSON.stringify(res);
            console.info(_this.message);
        }, function (err) {
            _this.message = JSON.stringify(err);
            console.error(_this.message);
        })
            .catch(function (err) {
            _this.message = JSON.stringify(err);
            console.error(_this.message);
        });
    };
    HomePage.prototype.sendLinkScrap = function () {
        var _this = this;
        console.log('kakao sendLinkScrap');
        this.message = '';
        var scrapTemplate = {
            url: 'https://www.naver.com',
        };
        this._kakaoCordovaSDK
            .sendLinkScrap(scrapTemplate)
            .then(function (res) {
            _this.message = JSON.stringify(res);
            console.info(_this.message);
        }, function (err) {
            _this.message = JSON.stringify(err);
            console.error(_this.message);
        })
            .catch(function (err) {
            _this.message = JSON.stringify(err);
            console.error(_this.message);
        });
    };
    HomePage.prototype.sendLinkText = function () {
        var _this = this;
        console.log('kakao sendLinkText');
        this.message = '';
        var textLink = {
            webURL: 'https://www.naver.com',
            mobileWebURL: 'https://www.naver.com',
        };
        var textButtons1 = {
            title: 'button1',
            link: {
                mobileWebURL: 'https://www.naver.com',
            },
        };
        var textButtons2 = {
            title: 'button2',
            link: {
                iosExecutionParams: 'param1=value1&param2=value2',
                androidExecutionParams: 'param1=value1&param2=value2',
            },
        };
        var textTemplate = {
            text: 'Text Template Test',
            link: textLink,
            buttonTitle: '',
            buttons: [textButtons1, textButtons2],
        };
        this._kakaoCordovaSDK
            .sendLinkText(textTemplate)
            .then(function (res) {
            _this.message = JSON.stringify(res);
            console.info(_this.message);
        }, function (err) {
            _this.message = JSON.stringify(err);
            console.error(_this.message);
        })
            .catch(function (err) {
            _this.message = JSON.stringify(err);
            console.error(_this.message);
        });
    };
    HomePage.prototype.sendLinkCommerce = function () {
        var _this = this;
        console.log('kakao sendLinkCommerce');
        this.message = '';
        var commerceContent = {
            title: 'Ivory long dress (4 Color)',
            link: {
                mobileWebURL: 'https://www.naver.com',
            },
            imageURL: 'http://mud-kage.kakao.co.kr/dn/RY8ZN/btqgOGzITp3/uCM1x2xu7GNfr7NS9QvEs0/kakaolink40_original.png',
        };
        var commerceCommerce = {
            regularPrice: 208800,
            discountPrice: 146160,
            discountRate: 30,
        };
        var commerceButtons1 = {
            title: '구매하기',
            link: {
                mobileWebURL: 'https://www.naver.com',
            },
        };
        var commerceButtons2 = {
            title: '공유하기',
            link: {
                iosExecutionParams: 'param1=value1&param2=value2',
                androidExecutionParams: 'param1=value1&param2=value2',
            },
        };
        var commerceTemplate = {
            content: commerceContent,
            commerce: commerceCommerce,
            buttons: [commerceButtons1, commerceButtons2],
            buttonTitle: '웹으로 보자',
        };
        this._kakaoCordovaSDK
            .sendLinkCommerce(commerceTemplate)
            .then(function (res) {
            _this.message = JSON.stringify(res);
            console.info(_this.message);
        }, function (err) {
            _this.message = JSON.stringify(err);
            console.error(_this.message);
        })
            .catch(function (err) {
            _this.message = JSON.stringify(err);
            console.error(_this.message);
        });
    };
    HomePage.prototype.sendLinkLocation = function () {
        var _this = this;
        console.log('kakao sendLinkLocation');
        this.message = '';
        var locationContent = {
            title: '카카오 판교오피스',
            desc: '카카오 판교오피스 위치입니다.',
            link: {
                mobileWebURL: 'https://www.naver.com',
            },
            imageURL: 'http://mud-kage.kakao.co.kr/dn/bSbH9w/btqgegaEDfW/vD9KKV0hEintg6bZT4v4WK/kakaolink40_original.png',
        };
        var locationSocial = {
            likeCount: 50,
            sharedCount: 1234,
        };
        var locationTemplate = {
            content: locationContent,
            address: '성남시 분당구 판교역로 235',
            addressTitle: '"카카오 판교오피스',
            social: locationSocial,
            buttonTitle: '웹으로 보자',
        };
        this._kakaoCordovaSDK
            .sendLinkLocation(locationTemplate)
            .then(function (res) {
            _this.message = JSON.stringify(res);
            console.info(_this.message);
        }, function (err) {
            _this.message = JSON.stringify(err);
            console.error(_this.message);
        })
            .catch(function (err) {
            _this.message = JSON.stringify(err);
            console.error(_this.message);
        });
    };
    HomePage.prototype.sendLinkList = function () {
        var _this = this;
        console.log('kakao sendLinkList');
        this.message = '';
        var listHeaderLink = {
            webURL: 'https://www.naver.com',
            mobileWebURL: 'https://www.naver.com',
        };
        var listContent1 = {
            title: '자전거 라이더를 위한 공간',
            desc: '매거진',
            link: listHeaderLink,
            imageURL: 'http://mud-kage.kakao.co.kr/dn/QNvGY/btqfD0SKT9m/k4KUlb1m0dKPHxGV8WbIK1/openlink_640x640s.jpg',
        };
        var listContent2 = {
            title: '비쥬얼이 끝내주는 오레오 카푸치노',
            desc: '매거진',
            link: listHeaderLink,
            imageURL: 'http://mud-kage.kakao.co.kr/dn/boVWEm/btqfFGlOpJB/mKsq9z6U2Xpms3NztZgiD1/openlink_640x640s.jpg',
        };
        var listContent3 = {
            title: '감성이 가득한 분위기',
            desc: '매거진',
            link: listHeaderLink,
            imageURL: 'http://mud-kage.kakao.co.kr/dn/NTmhS/btqfEUdFAUf/FjKzkZsnoeE4o19klTOVI1/openlink_640x640s.jpg',
        };
        var listButtons1 = {
            title: 'button1',
            link: {
                mobileWebURL: 'https://www.naver.com',
            },
        };
        var listButtons2 = {
            title: 'button2',
            link: {
                iosExecutionParams: 'param1=value1&param2=value2',
                androidExecutionParams: 'param1=value1&param2=value2',
            },
        };
        var listTemplate = {
            headerTitle: 'List Template Test',
            headerLink: listHeaderLink,
            contents: [listContent1, listContent2, listContent3],
            buttonTitle: '',
            buttons: [listButtons1, listButtons2],
        };
        this._kakaoCordovaSDK
            .sendLinkList(listTemplate)
            .then(function (res) {
            _this.message = JSON.stringify(res);
            console.info(_this.message);
        }, function (err) {
            _this.message = JSON.stringify(err);
            console.error(_this.message);
        })
            .catch(function (err) {
            _this.message = JSON.stringify(err);
            console.error(_this.message);
        });
    };
    HomePage.prototype.sendLinkFeed = function () {
        var _this = this;
        console.log('kakao sendLinkFeed');
        this.message = '';
        var feedLink = {
            webURL: 'https://www.naver.com',
        };
        var feedSocial = {
            likeCount: 50,
        };
        var feedButtons1 = {
            title: 'button1',
            link: {
                mobileWebURL: 'https://www.naver.com',
            },
        };
        var feedButtons2 = {
            title: 'button2',
            link: {
                iosExecutionParams: 'param1=value1&param2=value2',
                androidExecutionParams: 'param1=value1&param2=value2',
            },
        };
        var feedContent = {
            title: 'title',
            link: feedLink,
            imageURL: 'http://mud-kage.kakao.co.kr/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png',
        };
        var feedTemplate = {
            content: feedContent,
            social: feedSocial,
            buttons: [feedButtons1, feedButtons2],
        };
        this._kakaoCordovaSDK
            .sendLinkFeed(feedTemplate)
            .then(function (res) {
            _this.message = JSON.stringify(res);
            console.info(_this.message);
        }, function (err) {
            _this.message = JSON.stringify(err);
            console.error(_this.message);
        })
            .catch(function (err) {
            _this.message = JSON.stringify(err);
            console.error(_this.message);
        });
    };
    HomePage.prototype.requestMe = function () {
        var _this = this;
        console.log('kakao requestMe');
        this.message = '';
        this._kakaoCordovaSDK
            .requestMe()
            .then(function (res) {
            _this.message = JSON.stringify(res);
            console.info(_this.message);
        }, function (err) {
            _this.message = JSON.stringify(err);
            console.error(_this.message);
        })
            .catch(function (err) {
            _this.message = JSON.stringify(err);
            console.error(_this.message);
        });
    };
    HomePage.prototype.getAccessToken = function () {
        var _this = this;
        console.log('kakao getAccessToken');
        this.message = '';
        this._kakaoCordovaSDK
            .getAccessToken()
            .then(function (res) {
            _this.message = JSON.stringify(res);
            console.info(_this.message);
        }, function (err) {
            _this.message = JSON.stringify(err);
            console.error(_this.message);
        })
            .catch(function (err) {
            _this.message = JSON.stringify(err);
            console.error(_this.message);
        });
    };
    HomePage.prototype.updateScopes = function () {
        var _this = this;
        console.log('kakao updateScopes');
        this.message = '';
        var values = {
            targetScopes: ['account_email', 'age_range', 'gender'],
        };
        this._kakaoCordovaSDK
            .updateScopes(values)
            .then(function (res) {
            _this.message = JSON.stringify(res);
            console.info(_this.message);
        }, function (err) {
            _this.message = JSON.stringify(err);
            console.error(_this.message);
        })
            .catch(function (err) {
            _this.message = JSON.stringify(err);
            console.error(_this.message);
        });
    };
    HomePage.prototype.checkScopeStatus = function () {
        var _this = this;
        console.log('kakao checkScopeStatus');
        this.message = '';
        var values = {
            targetScopes: ['account_email', 'age_range', 'gender'],
        };
        this._kakaoCordovaSDK
            .checkScopeStatus(values)
            .then(function (res) {
            _this.message = JSON.stringify(res);
            console.info(_this.message);
        }, function (err) {
            _this.message = JSON.stringify(err);
            console.error(_this.message);
        })
            .catch(function (err) {
            _this.message = JSON.stringify(err);
            console.error(_this.message);
        });
    };
    HomePage.prototype.requestSendMemo = function () {
        var _this = this;
        console.log('kakao requestSendMemo');
        this.message = '';
        var values = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.customTemplate);
        values.arguments.description = 'message from requestSendMemo()';
        this._kakaoCordovaSDK
            .requestSendMemo(values)
            .then(function (res) {
            _this.message = JSON.stringify(res);
            console.info(_this.message);
        }, function (err) {
            _this.message = JSON.stringify(err);
            console.error(_this.message);
        })
            .catch(function (err) {
            _this.message = JSON.stringify(err);
            console.error(_this.message);
        });
    };
    HomePage.prototype.addPlusFriend = function () {
        var _this = this;
        console.log('kakao addPlusFriend');
        this.message = '';
        this._kakaoCordovaSDK
            .addPlusFriend(this.plusFriendTemplate)
            .then(function (res) {
            _this.message = JSON.stringify(res);
            console.info(_this.message);
        }, function (err) {
            _this.message = JSON.stringify(err);
            console.error(_this.message);
        })
            .catch(function (err) {
            _this.message = JSON.stringify(err);
            console.error(_this.message);
        });
    };
    HomePage.prototype.chatPlusFriend = function () {
        var _this = this;
        console.log('kakao chatPlusFriend');
        this.message = '';
        this._kakaoCordovaSDK
            .chatPlusFriend(this.plusFriendTemplate)
            .then(function (res) {
            _this.message = JSON.stringify(res);
            console.info(_this.message);
        }, function (err) {
            _this.message = JSON.stringify(err);
            console.error(_this.message);
        })
            .catch(function (err) {
            _this.message = JSON.stringify(err);
            console.error(_this.message);
        });
    };
    HomePage.prototype.chatPlusFriendUrl = function () {
        var _this = this;
        console.log('kakao chatPlusFriendUrl');
        this.message = '';
        this._kakaoCordovaSDK
            .chatPlusFriendUrl(this.plusFriendTemplate)
            .then(function (res) {
            _this.message = JSON.stringify(res);
            console.info(_this.message);
        }, function (err) {
            _this.message = JSON.stringify(err);
            console.error(_this.message);
        })
            .catch(function (err) {
            _this.message = JSON.stringify(err);
            console.error(_this.message);
        });
    };
    HomePage.prototype.unlinkApp = function () {
        var _this = this;
        console.log('kakao unlink');
        this.message = '';
        this._kakaoCordovaSDK
            .unlinkApp()
            .then(function (res) {
            _this.isKakaoLogin = false;
            _this.message = '';
            console.info(_this.message);
        }, function (err) {
            _this.message = JSON.stringify(err);
            console.error(_this.message);
        })
            .catch(function (err) {
            _this.message = JSON.stringify(err);
            console.error(_this.message);
        });
    };
    HomePage.prototype.logout = function () {
        var _this = this;
        console.log('kakao logout');
        this.message = '';
        this._kakaoCordovaSDK
            .logout()
            .then(function (res) {
            _this.isKakaoLogin = false;
            _this.message = '';
            console.info(_this.message);
        }, function (err) {
            _this.message = JSON.stringify(err);
            console.error(_this.message);
        })
            .catch(function (err) {
            _this.message = JSON.stringify(err);
            console.error(_this.message);
        });
    };
    HomePage.prototype.login = function () {
        var _this = this;
        console.log('kakao login');
        this.message = '';
        var values = {
            authTypes: [kakao_sdk_ngx__WEBPACK_IMPORTED_MODULE_2__["AuthTypes"].AuthTypeTalk, kakao_sdk_ngx__WEBPACK_IMPORTED_MODULE_2__["AuthTypes"].AuthTypeStory, kakao_sdk_ngx__WEBPACK_IMPORTED_MODULE_2__["AuthTypes"].AuthTypeAccount],
        };
        // values.authTypes = [AuthTypes.AuthTypeTalk];
        this._kakaoCordovaSDK
            .login(values)
            .then(function (res) {
            _this.isKakaoLogin = true;
            _this.message = JSON.stringify(res);
            console.info(_this.message);
        }, function (err) {
            _this.message = JSON.stringify(err);
            console.error(_this.message);
        })
            .catch(function (err) {
            _this.message = JSON.stringify(err);
            console.error(_this.message);
        });
    };
    HomePage.ctorParameters = function () { return [
        { type: kakao_sdk_ngx__WEBPACK_IMPORTED_MODULE_2__["KakaoCordovaSDK"] }
    ]; };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [kakao_sdk_ngx__WEBPACK_IMPORTED_MODULE_2__["KakaoCordovaSDK"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module-es5.js.map
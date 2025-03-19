var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/fslightbox/index.js
var require_fslightbox = __commonJS({
  "node_modules/fslightbox/index.js"(exports, module) {
    !function(e, t) {
      if ("object" == typeof exports && "object" == typeof module)
        module.exports = t();
      else if ("function" == typeof define && define.amd)
        define([], t);
      else {
        var n = t();
        for (var o in n)
          ("object" == typeof exports ? exports : e)[o] = n[o];
      }
    }(window, function() {
      return function(e) {
        var t = {};
        function n(o) {
          if (t[o])
            return t[o].exports;
          var i = t[o] = { i: o, l: false, exports: {} };
          return e[o].call(i.exports, i, i.exports, n), i.l = true, i.exports;
        }
        return n.m = e, n.c = t, n.d = function(e2, t2, o) {
          n.o(e2, t2) || Object.defineProperty(e2, t2, { enumerable: true, get: o });
        }, n.r = function(e2) {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e2, "__esModule", { value: true });
        }, n.t = function(e2, t2) {
          if (1 & t2 && (e2 = n(e2)), 8 & t2)
            return e2;
          if (4 & t2 && "object" == typeof e2 && e2 && e2.__esModule)
            return e2;
          var o = /* @__PURE__ */ Object.create(null);
          if (n.r(o), Object.defineProperty(o, "default", { enumerable: true, value: e2 }), 2 & t2 && "string" != typeof e2)
            for (var i in e2)
              n.d(o, i, function(t3) {
                return e2[t3];
              }.bind(null, i));
          return o;
        }, n.n = function(e2) {
          var t2 = e2 && e2.__esModule ? function() {
            return e2.default;
          } : function() {
            return e2;
          };
          return n.d(t2, "a", t2), t2;
        }, n.o = function(e2, t2) {
          return Object.prototype.hasOwnProperty.call(e2, t2);
        }, n.p = "", n(n.s = 0);
      }([function(e, t, n) {
        "use strict";
        n.r(t);
        var o, i = "fslightbox-", r = "".concat(i, "styles"), s = "".concat(i, "cursor-grabbing"), a = "".concat(i, "full-dimension"), c = "".concat(i, "flex-centered"), l = "".concat(i, "open"), u = "".concat(i, "transform-transition"), d = "".concat(i, "absoluted"), f = "".concat(i, "slide-btn"), p = "".concat(f, "-container"), h = "".concat(i, "fade-in"), m = "".concat(i, "fade-out"), g = h + "-strong", v = m + "-strong", b = "".concat(i, "opacity-"), x = "".concat(b, "1"), y = "".concat(i, "source");
        function w(e2) {
          return (w = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e3) {
            return typeof e3;
          } : function(e3) {
            return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : typeof e3;
          })(e2);
        }
        function S(e2) {
          var t2 = e2.stageIndexes, n2 = e2.core.stageManager, o2 = e2.props.sources.length - 1;
          n2.getPreviousSlideIndex = function() {
            return 0 === t2.current ? o2 : t2.current - 1;
          }, n2.getNextSlideIndex = function() {
            return t2.current === o2 ? 0 : t2.current + 1;
          }, n2.updateStageIndexes = 0 === o2 ? function() {
          } : 1 === o2 ? function() {
            0 === t2.current ? (t2.next = 1, delete t2.previous) : (t2.previous = 0, delete t2.next);
          } : function() {
            t2.previous = n2.getPreviousSlideIndex(), t2.next = n2.getNextSlideIndex();
          }, n2.i = o2 <= 2 ? function() {
            return true;
          } : function(e3) {
            var n3 = t2.current;
            if (0 === n3 && e3 === o2 || n3 === o2 && 0 === e3)
              return true;
            var i2 = n3 - e3;
            return -1 === i2 || 0 === i2 || 1 === i2;
          };
        }
        "object" === ("undefined" == typeof document ? "undefined" : w(document)) && ((o = document.createElement("style")).className = r, o.appendChild(document.createTextNode(".fslightbox-absoluted{position:absolute;top:0;left:0}.fslightbox-fade-in{animation:fslightbox-fade-in .3s cubic-bezier(0,0,.7,1)}.fslightbox-fade-out{animation:fslightbox-fade-out .3s ease}.fslightbox-fade-in-strong{animation:fslightbox-fade-in-strong .3s cubic-bezier(0,0,.7,1)}.fslightbox-fade-out-strong{animation:fslightbox-fade-out-strong .3s ease}@keyframes fslightbox-fade-in{from{opacity:.65}to{opacity:1}}@keyframes fslightbox-fade-out{from{opacity:.35}to{opacity:0}}@keyframes fslightbox-fade-in-strong{from{opacity:.3}to{opacity:1}}@keyframes fslightbox-fade-out-strong{from{opacity:1}to{opacity:0}}.fslightbox-cursor-grabbing{cursor:grabbing}.fslightbox-full-dimension{width:100%;height:100%}.fslightbox-open{overflow:hidden;height:100%}.fslightbox-flex-centered{display:flex;justify-content:center;align-items:center}.fslightbox-opacity-0{opacity:0!important}.fslightbox-opacity-1{opacity:1!important}.fslightbox-scrollbarfix{padding-right:17px}.fslightbox-transform-transition{transition:transform .3s}.fslightbox-container{font-family:Arial,sans-serif;position:fixed;top:0;left:0;background:linear-gradient(rgba(30,30,30,.9),#000 1810%);touch-action:pinch-zoom;z-index:1000000000;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}.fslightbox-container *{box-sizing:border-box}.fslightbox-svg-path{transition:fill .15s ease;fill:#ddd}.fslightbox-nav{height:45px;width:100%;position:absolute;top:0;left:0}.fslightbox-slide-number-container{display:flex;justify-content:center;align-items:center;position:relative;height:100%;font-size:15px;color:#d7d7d7;z-index:0;max-width:55px;text-align:left}.fslightbox-slide-number-container .fslightbox-flex-centered{height:100%}.fslightbox-slash{display:block;margin:0 5px;width:1px;height:12px;transform:rotate(15deg);background:#fff}.fslightbox-toolbar{position:absolute;z-index:3;right:0;top:0;height:100%;display:flex;background:rgba(35,35,35,.65)}.fslightbox-toolbar-button{height:100%;width:45px;cursor:pointer}.fslightbox-toolbar-button:hover .fslightbox-svg-path{fill:#fff}.fslightbox-slide-btn-container{display:flex;align-items:center;padding:12px 12px 12px 6px;position:absolute;top:50%;cursor:pointer;z-index:3;transform:translateY(-50%)}@media (min-width:476px){.fslightbox-slide-btn-container{padding:22px 22px 22px 6px}}@media (min-width:768px){.fslightbox-slide-btn-container{padding:30px 30px 30px 6px}}.fslightbox-slide-btn-container:hover .fslightbox-svg-path{fill:#f1f1f1}.fslightbox-slide-btn{padding:9px;font-size:26px;background:rgba(35,35,35,.65)}@media (min-width:768px){.fslightbox-slide-btn{padding:10px}}@media (min-width:1600px){.fslightbox-slide-btn{padding:11px}}.fslightbox-slide-btn-container-previous{left:0}@media (max-width:475.99px){.fslightbox-slide-btn-container-previous{padding-left:3px}}.fslightbox-slide-btn-container-next{right:0;padding-left:12px;padding-right:3px}@media (min-width:476px){.fslightbox-slide-btn-container-next{padding-left:22px}}@media (min-width:768px){.fslightbox-slide-btn-container-next{padding-left:30px}}@media (min-width:476px){.fslightbox-slide-btn-container-next{padding-right:6px}}.fslightbox-down-event-detector{position:absolute;z-index:1}.fslightbox-slide-swiping-hoverer{z-index:4}.fslightbox-invalid-file-wrapper{font-size:22px;color:#eaebeb;margin:auto}.fslightbox-video{object-fit:cover}.fslightbox-youtube-iframe{border:0}.fslightboxl{display:block;margin:auto;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:67px;height:67px}.fslightboxl div{box-sizing:border-box;display:block;position:absolute;width:54px;height:54px;margin:6px;border:5px solid;border-color:#999 transparent transparent transparent;border-radius:50%;animation:fslightboxl 1.2s cubic-bezier(.5,0,.5,1) infinite}.fslightboxl div:nth-child(1){animation-delay:-.45s}.fslightboxl div:nth-child(2){animation-delay:-.3s}.fslightboxl div:nth-child(3){animation-delay:-.15s}@keyframes fslightboxl{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.fslightbox-source{position:relative;z-index:2;opacity:0}")), document.head.appendChild(o));
        function L(e2) {
          var t2, n2 = e2.props, o2 = 0, i2 = {};
          this.getSourceTypeFromLocalStorageByUrl = function(e3) {
            return t2[e3] ? t2[e3] : r2(e3);
          }, this.handleReceivedSourceTypeForUrl = function(e3, n3) {
            if (false === i2[n3] && (o2--, "invalid" !== e3 ? i2[n3] = e3 : delete i2[n3], 0 === o2)) {
              !function(e4, t3) {
                for (var n4 in t3)
                  e4[n4] = t3[n4];
              }(t2, i2);
              try {
                localStorage.setItem("fslightbox-types", JSON.stringify(t2));
              } catch (e4) {
              }
            }
          };
          var r2 = function(e3) {
            o2++, i2[e3] = false;
          };
          if (n2.disableLocalStorage)
            this.getSourceTypeFromLocalStorageByUrl = function() {
            }, this.handleReceivedSourceTypeForUrl = function() {
            };
          else {
            try {
              t2 = JSON.parse(localStorage.getItem("fslightbox-types"));
            } catch (e3) {
            }
            t2 || (t2 = {}, this.getSourceTypeFromLocalStorageByUrl = r2);
          }
        }
        function A(e2, t2, n2, o2) {
          e2.data;
          var i2 = e2.elements.sources, r2 = n2 / o2, s2 = 0;
          this.adjustSize = function() {
            if ((s2 = e2.mw / r2) < e2.mh)
              return n2 < e2.mw && (s2 = o2), a2();
            s2 = o2 > e2.mh ? e2.mh : o2, a2();
          };
          var a2 = function() {
            i2[t2].style.width = s2 * r2 + "px", i2[t2].style.height = s2 + "px";
          };
        }
        function C(e2, t2) {
          var n2 = this, o2 = e2.collections.sourceSizers, i2 = e2.elements, r2 = i2.sourceAnimationWrappers, s2 = i2.sources, a2 = e2.isl, c2 = e2.resolve;
          function l2(e3, n3) {
            o2[t2] = c2(A, [t2, e3, n3]), o2[t2].adjustSize();
          }
          this.runActions = function(e3, o3) {
            a2[t2] = true, s2[t2].classList.add(x), r2[t2].classList.add(g), r2[t2].removeChild(r2[t2].firstChild), l2(e3, o3), n2.runActions = l2;
          };
        }
        function E(e2, t2) {
          var n2, o2 = this, i2 = e2.elements.sources, r2 = e2.props, s2 = (0, e2.resolve)(C, [t2]);
          this.handleImageLoad = function(e3) {
            var t3 = e3.target, n3 = t3.naturalWidth, o3 = t3.naturalHeight;
            s2.runActions(n3, o3);
          }, this.handleVideoLoad = function(e3) {
            var t3 = e3.target, o3 = t3.videoWidth, i3 = t3.videoHeight;
            n2 = true, s2.runActions(o3, i3);
          }, this.handleNotMetaDatedVideoLoad = function() {
            n2 || o2.handleYoutubeLoad();
          }, this.handleYoutubeLoad = function() {
            var e3 = 1920, t3 = 1080;
            r2.maxYoutubeDimensions && (e3 = r2.maxYoutubeDimensions.width, t3 = r2.maxYoutubeDimensions.height), s2.runActions(e3, t3);
          }, this.handleCustomLoad = function() {
            var e3 = i2[t2], n3 = e3.offsetWidth, r3 = e3.offsetHeight;
            n3 && r3 ? s2.runActions(n3, r3) : setTimeout(o2.handleCustomLoad);
          };
        }
        function F(e2, t2, n2) {
          var o2 = e2.elements.sources, i2 = e2.props.customClasses, r2 = i2[t2] ? i2[t2] : "";
          o2[t2].className = n2 + " " + r2;
        }
        function I(e2, t2) {
          var n2 = e2.elements.sources, o2 = e2.props.customAttributes;
          for (var i2 in o2[t2])
            n2[t2].setAttribute(i2, o2[t2][i2]);
        }
        function N(e2, t2) {
          var n2 = e2.collections.sourceLoadHandlers, o2 = e2.elements, i2 = o2.sources, r2 = o2.sourceAnimationWrappers, s2 = e2.props.sources;
          i2[t2] = document.createElement("img"), F(e2, t2, y), i2[t2].src = s2[t2], i2[t2].onload = n2[t2].handleImageLoad, I(e2, t2), r2[t2].appendChild(i2[t2]);
        }
        function z(e2, t2) {
          var n2 = e2.collections.sourceLoadHandlers, o2 = e2.elements, i2 = o2.sources, r2 = o2.sourceAnimationWrappers, s2 = e2.props, a2 = s2.sources, c2 = s2.videosPosters;
          i2[t2] = document.createElement("video"), F(e2, t2, y), i2[t2].src = a2[t2], i2[t2].onloadedmetadata = function(e3) {
            n2[t2].handleVideoLoad(e3);
          }, i2[t2].controls = true, I(e2, t2), c2[t2] && (i2[t2].poster = c2[t2]);
          var l2 = document.createElement("source");
          l2.src = a2[t2], i2[t2].appendChild(l2), setTimeout(n2[t2].handleNotMetaDatedVideoLoad, 3e3), r2[t2].appendChild(i2[t2]);
        }
        function T(e2, t2) {
          var n2 = e2.collections.sourceLoadHandlers, o2 = e2.elements, r2 = o2.sources, s2 = o2.sourceAnimationWrappers, a2 = e2.props.sources;
          r2[t2] = document.createElement("iframe"), F(e2, t2, "".concat(y, " ").concat(i, "youtube-iframe"));
          var c2 = a2[t2], l2 = c2.split("?")[1];
          r2[t2].src = "https://www.youtube.com/embed/".concat(c2.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/)[2], "?").concat(l2 || ""), r2[t2].allowFullscreen = true, I(e2, t2), s2[t2].appendChild(r2[t2]), n2[t2].handleYoutubeLoad();
        }
        function P(e2, t2) {
          var n2 = e2.collections.sourceLoadHandlers, o2 = e2.elements, i2 = o2.sources, r2 = o2.sourceAnimationWrappers, s2 = e2.props.sources;
          i2[t2] = s2[t2], F(e2, t2, "".concat(i2[t2].className, " ").concat(y)), r2[t2].appendChild(i2[t2]), n2[t2].handleCustomLoad();
        }
        function k(e2, t2) {
          var n2 = e2.elements, o2 = n2.sources, r2 = n2.sourceAnimationWrappers;
          e2.props.sources;
          o2[t2] = document.createElement("div"), o2[t2].className = "".concat(i, "invalid-file-wrapper ").concat(c), o2[t2].innerHTML = "Invalid source", r2[t2].classList.add(g), r2[t2].removeChild(r2[t2].firstChild), r2[t2].appendChild(o2[t2]);
        }
        function R(e2) {
          var t2 = e2.collections, n2 = t2.sourceLoadHandlers, o2 = t2.sourcesRenderFunctions, i2 = e2.core.sourceDisplayFacade, r2 = e2.resolve;
          this.runActionsForSourceTypeAndIndex = function(t3, s2) {
            var a2;
            switch ("invalid" !== t3 && (n2[s2] = r2(E, [s2])), t3) {
              case "image":
                a2 = N;
                break;
              case "video":
                a2 = z;
                break;
              case "youtube":
                a2 = T;
                break;
              case "custom":
                a2 = P;
                break;
              default:
                a2 = k;
            }
            o2[s2] = function() {
              return a2(e2, s2);
            }, i2.displaySourcesWhichShouldBeDisplayed();
          };
        }
        function H(e2, t2, n2) {
          var o2 = e2.props, i2 = o2.types, r2 = o2.type, s2 = o2.sources;
          this.getTypeSetByClientForIndex = function(e3) {
            var t3;
            return i2 && i2[e3] ? t3 = i2[e3] : r2 && (t3 = r2), t3;
          }, this.retrieveTypeWithXhrForIndex = function(e3) {
            !function(e4, t3) {
              var n3 = document.createElement("a");
              n3.href = e4;
              var o3 = n3.hostname;
              if ("www.youtube.com" === o3 || "youtu.be" === o3)
                return t3("youtube");
              var i3 = new XMLHttpRequest();
              i3.onreadystatechange = function() {
                if (4 !== i3.readyState) {
                  if (2 === i3.readyState) {
                    var e5, n4 = i3.getResponseHeader("content-type");
                    switch (n4.slice(0, n4.indexOf("/"))) {
                      case "image":
                        e5 = "image";
                        break;
                      case "video":
                        e5 = "video";
                        break;
                      default:
                        e5 = "invalid";
                    }
                    i3.onreadystatechange = null, i3.abort(), t3(e5);
                  }
                } else
                  t3("invalid");
              }, i3.open("GET", e4), i3.send();
            }(s2[e3], function(o3) {
              t2.handleReceivedSourceTypeForUrl(o3, s2[e3]), n2.runActionsForSourceTypeAndIndex(o3, e3);
            });
          };
        }
        function W(e2, t2) {
          var n2 = e2.core.stageManager, o2 = e2.elements, i2 = o2.smw, r2 = o2.sourceWrappersContainer, s2 = e2.props, l2 = 0, f2 = document.createElement("div");
          function p2(e3) {
            f2.style.transform = "translateX(".concat(e3 + l2, "px)"), l2 = 0;
          }
          function h2() {
            return (1 + s2.slideDistance) * innerWidth;
          }
          f2.className = "".concat(d, " ").concat(a, " ").concat(c), f2.s = function() {
            f2.style.display = "flex";
          }, f2.h = function() {
            f2.style.display = "none";
          }, f2.a = function() {
            f2.classList.add(u);
          }, f2.d = function() {
            f2.classList.remove(u);
          }, f2.n = function() {
            f2.style.removeProperty("transform");
          }, f2.v = function(e3) {
            return l2 = e3, f2;
          }, f2.ne = function() {
            p2(-h2());
          }, f2.z = function() {
            p2(0);
          }, f2.p = function() {
            p2(h2());
          }, n2.i(t2) || f2.h(), i2[t2] = f2, r2.appendChild(f2), function(e3, t3) {
            var n3 = e3.elements, o3 = n3.smw, i3 = n3.sourceAnimationWrappers, r3 = document.createElement("div"), s3 = document.createElement("div");
            s3.className = "fslightboxl";
            for (var a2 = 0; a2 < 3; a2++) {
              var c2 = document.createElement("div");
              s3.appendChild(c2);
            }
            r3.appendChild(s3), o3[t3].appendChild(r3), i3[t3] = r3;
          }(e2, t2);
        }
        function D(e2, t2, n2, o2) {
          var r2 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
          r2.setAttributeNS(null, "width", t2), r2.setAttributeNS(null, "height", t2), r2.setAttributeNS(null, "viewBox", n2);
          var s2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
          return s2.setAttributeNS(null, "class", "".concat(i, "svg-path")), s2.setAttributeNS(null, "d", o2), r2.appendChild(s2), e2.appendChild(r2), r2;
        }
        function M(e2, t2) {
          var n2 = document.createElement("div");
          return n2.className = "".concat(i, "toolbar-button ").concat(c), n2.title = t2, e2.appendChild(n2), n2;
        }
        function O(e2, t2) {
          var n2 = document.createElement("div");
          n2.className = "".concat(i, "toolbar"), t2.appendChild(n2), function(e3, t3) {
            var n3 = e3.componentsServices, o2 = e3.data, i2 = e3.fs, r2 = "M4.5 11H3v4h4v-1.5H4.5V11zM3 7h1.5V4.5H7V3H3v4zm10.5 6.5H11V15h4v-4h-1.5v2.5zM11 3v1.5h2.5V7H15V3h-4z", s2 = M(t3);
            s2.title = "Enter fullscreen";
            var a2 = D(s2, "20px", "0 0 18 18", r2);
            n3.ofs = function() {
              o2.ifs = true, s2.title = "Exit fullscreen", a2.setAttributeNS(null, "width", "24px"), a2.setAttributeNS(null, "height", "24px"), a2.setAttributeNS(null, "viewBox", "0 0 950 1024"), a2.firstChild.setAttributeNS(null, "d", "M682 342h128v84h-212v-212h84v128zM598 810v-212h212v84h-128v128h-84zM342 342v-128h84v212h-212v-84h128zM214 682v-84h212v212h-84v-128h-128z");
            }, n3.xfs = function() {
              o2.ifs = false, s2.title = "Enter fullscreen", a2.setAttributeNS(null, "width", "20px"), a2.setAttributeNS(null, "height", "20px"), a2.setAttributeNS(null, "viewBox", "0 0 18 18"), a2.firstChild.setAttributeNS(null, "d", r2);
            }, s2.onclick = i2.t;
          }(e2, n2), function(e3, t3) {
            var n3 = M(t3, "Close");
            n3.onclick = e3.core.lightboxCloser.closeLightbox, D(n3, "20px", "0 0 24 24", "M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z");
          }(e2, n2);
        }
        function j(e2) {
          var t2 = e2.props.sources, n2 = e2.elements.container, o2 = document.createElement("div");
          o2.className = "".concat(i, "nav"), n2.appendChild(o2), O(e2, o2), t2.length > 1 && function(e3, t3) {
            var n3 = e3.componentsServices, o3 = e3.props.sources, r2 = (e3.stageIndexes, document.createElement("div"));
            r2.className = "".concat(i, "slide-number-container");
            var s2 = document.createElement("div");
            s2.className = c;
            var a2 = document.createElement("span");
            n3.setSlideNumber = function(e4) {
              return a2.innerHTML = e4;
            };
            var l2 = document.createElement("span");
            l2.className = "".concat(i, "slash");
            var u2 = document.createElement("div");
            u2.innerHTML = o3.length, r2.appendChild(s2), s2.appendChild(a2), s2.appendChild(l2), s2.appendChild(u2), t3.appendChild(r2), setTimeout(function() {
              s2.offsetWidth > 55 && (r2.style.justifyContent = "flex-start");
            });
          }(e2, o2);
        }
        function X(e2, t2, n2, o2) {
          var i2 = e2.elements.container, r2 = n2.charAt(0).toUpperCase() + n2.slice(1), s2 = document.createElement("div");
          s2.className = "".concat(p, " ").concat(p, "-").concat(n2), s2.title = "".concat(r2, " slide"), s2.onclick = t2, function(e3, t3) {
            var n3 = document.createElement("div");
            n3.className = "".concat(f, " ").concat(c), D(n3, "20px", "0 0 20 20", t3), e3.appendChild(n3);
          }(s2, o2), i2.appendChild(s2);
        }
        function B(e2) {
          var t2 = e2.core, n2 = t2.lightboxCloser, o2 = t2.slideChangeFacade, i2 = e2.fs;
          this.listener = function(e3) {
            switch (e3.key) {
              case "Escape":
                n2.closeLightbox();
                break;
              case "ArrowLeft":
                o2.changeToPrevious();
                break;
              case "ArrowRight":
                o2.changeToNext();
                break;
              case "F11":
                e3.preventDefault(), i2.t();
            }
          };
        }
        function q(e2) {
          var t2 = e2.elements, n2 = e2.sourcePointerProps, o2 = e2.stageIndexes;
          function i2(e3, o3) {
            t2.smw[e3].v(n2.swipedX)[o3]();
          }
          this.runActionsForEvent = function(e3) {
            var r2, a2, c2;
            t2.container.contains(t2.slideSwipingHoverer) || t2.container.appendChild(t2.slideSwipingHoverer), r2 = t2.container, a2 = s, (c2 = r2.classList).contains(a2) || c2.add(a2), n2.swipedX = e3.screenX - n2.downScreenX;
            var l2 = o2.previous, u2 = o2.next;
            i2(o2.current, "z"), void 0 !== l2 && n2.swipedX > 0 ? i2(l2, "ne") : void 0 !== u2 && n2.swipedX < 0 && i2(u2, "p");
          };
        }
        function V(e2) {
          var t2 = e2.props.sources, n2 = e2.resolve, o2 = e2.sourcePointerProps, i2 = n2(q);
          1 === t2.length ? this.listener = function() {
            o2.swipedX = 1;
          } : this.listener = function(e3) {
            o2.isPointering && i2.runActionsForEvent(e3);
          };
        }
        function U(e2) {
          var t2 = e2.core.slideIndexChanger, n2 = e2.elements.smw, o2 = e2.stageIndexes, i2 = e2.sws;
          function r2(e3) {
            var t3 = n2[o2.current];
            t3.a(), t3[e3]();
          }
          function s2(e3, t3) {
            void 0 !== e3 && (n2[e3].s(), n2[e3][t3]());
          }
          this.runPositiveSwipedXActions = function() {
            var e3 = o2.previous;
            if (void 0 === e3)
              r2("z");
            else {
              r2("p");
              var n3 = o2.next;
              t2.changeTo(e3);
              var a2 = o2.previous;
              i2.d(a2), i2.b(n3), r2("z"), s2(a2, "ne");
            }
          }, this.runNegativeSwipedXActions = function() {
            var e3 = o2.next;
            if (void 0 === e3)
              r2("z");
            else {
              r2("ne");
              var n3 = o2.previous;
              t2.changeTo(e3);
              var a2 = o2.next;
              i2.d(a2), i2.b(n3), r2("z"), s2(a2, "p");
            }
          };
        }
        function _(e2, t2) {
          e2.contains(t2) && e2.removeChild(t2);
        }
        function Y(e2) {
          var t2 = e2.core.lightboxCloser, n2 = e2.elements, o2 = e2.resolve, i2 = e2.sourcePointerProps, r2 = o2(U);
          this.runNoSwipeActions = function() {
            _(n2.container, n2.slideSwipingHoverer), i2.isSourceDownEventTarget || t2.closeLightbox(), i2.isPointering = false;
          }, this.runActions = function() {
            i2.swipedX > 0 ? r2.runPositiveSwipedXActions() : r2.runNegativeSwipedXActions(), _(n2.container, n2.slideSwipingHoverer), n2.container.classList.remove(s), i2.isPointering = false;
          };
        }
        function J(e2) {
          var t2 = e2.resolve, n2 = e2.sourcePointerProps, o2 = t2(Y);
          this.listener = function() {
            n2.isPointering && (n2.swipedX ? o2.runActions() : o2.runNoSwipeActions());
          };
        }
        function G(e2) {
          var t2 = this, n2 = e2.core, o2 = n2.eventsDispatcher, i2 = n2.globalEventsController, r2 = n2.scrollbarRecompensor, s2 = e2.data, a2 = e2.elements, c2 = e2.fs, u2 = e2.props, d2 = e2.sourcePointerProps;
          this.isLightboxFadingOut = false, this.runActions = function() {
            t2.isLightboxFadingOut = true, a2.container.classList.add(v), i2.removeListeners(), u2.exitFullscreenOnClose && s2.ifs && c2.x(), setTimeout(function() {
              t2.isLightboxFadingOut = false, d2.isPointering = false, a2.container.classList.remove(v), document.documentElement.classList.remove(l), r2.removeRecompense(), document.body.removeChild(a2.container), o2.dispatch("onClose");
            }, 270);
          };
        }
        function $(e2, t2) {
          var n2 = e2.classList;
          n2.contains(t2) && n2.remove(t2);
        }
        function K(e2) {
          var t2, n2, o2;
          n2 = (t2 = e2).core.eventsDispatcher, o2 = t2.props, n2.dispatch = function(e3) {
            o2[e3] && o2[e3]();
          }, function(e3) {
            var t3 = e3.componentsServices, n3 = e3.data, o3 = e3.fs, i2 = ["fullscreenchange", "webkitfullscreenchange", "mozfullscreenchange", "MSFullscreenChange"];
            function r2(e4) {
              for (var t4 = 0; t4 < i2.length; t4++)
                document[e4](i2[t4], s2);
            }
            function s2() {
              document.fullscreenElement || document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement ? t3.ofs() : t3.xfs();
            }
            o3.o = function() {
              t3.ofs();
              var e4 = document.documentElement;
              e4.requestFullscreen ? e4.requestFullscreen() : e4.mozRequestFullScreen ? e4.mozRequestFullScreen() : e4.webkitRequestFullscreen ? e4.webkitRequestFullscreen() : e4.msRequestFullscreen && e4.msRequestFullscreen();
            }, o3.x = function() {
              t3.xfs(), document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.msExitFullscreen && document.msExitFullscreen();
            }, o3.t = function() {
              n3.ifs ? o3.x() : o3.o();
            }, o3.l = function() {
              r2("addEventListener");
            }, o3.q = function() {
              r2("removeEventListener");
            };
          }(e2), function(e3) {
            var t3 = e3.core, n3 = t3.globalEventsController, o3 = t3.windowResizeActioner, i2 = e3.fs, r2 = e3.resolve, s2 = r2(B), a2 = r2(V), c2 = r2(J);
            n3.attachListeners = function() {
              document.addEventListener("pointermove", a2.listener), document.addEventListener("pointerup", c2.listener), addEventListener("resize", o3.runActions), document.addEventListener("keydown", s2.listener), i2.l();
            }, n3.removeListeners = function() {
              document.removeEventListener("pointermove", a2.listener), document.removeEventListener("pointerup", c2.listener), removeEventListener("resize", o3.runActions), document.removeEventListener("keydown", s2.listener), i2.q();
            };
          }(e2), function(e3) {
            var t3 = e3.core.lightboxCloser, n3 = (0, e3.resolve)(G);
            t3.closeLightbox = function() {
              n3.isLightboxFadingOut || n3.runActions();
            };
          }(e2), function(e3) {
            var t3 = e3.data, n3 = e3.core.scrollbarRecompensor;
            function o3() {
              document.body.offsetHeight > innerHeight && (document.body.style.marginRight = t3.scrollbarWidth + "px");
            }
            n3.addRecompense = function() {
              "complete" === document.readyState ? o3() : addEventListener("load", function() {
                o3(), n3.addRecompense = o3;
              });
            }, n3.removeRecompense = function() {
              document.body.style.removeProperty("margin-right");
            };
          }(e2), function(e3) {
            var t3 = e3.core, n3 = t3.slideChangeFacade, o3 = t3.slideIndexChanger, i2 = t3.stageManager;
            e3.props.sources.length > 1 ? (n3.changeToPrevious = function() {
              o3.jumpTo(i2.getPreviousSlideIndex());
            }, n3.changeToNext = function() {
              o3.jumpTo(i2.getNextSlideIndex());
            }) : (n3.changeToPrevious = function() {
            }, n3.changeToNext = function() {
            });
          }(e2), function(e3) {
            var t3 = e3.componentsServices, n3 = e3.core, o3 = n3.slideIndexChanger, i2 = n3.sourceDisplayFacade, r2 = n3.stageManager, s2 = e3.elements, a2 = s2.smw, c2 = s2.sourceAnimationWrappers, l2 = e3.isl, u2 = e3.stageIndexes, d2 = e3.sws;
            o3.changeTo = function(e4) {
              u2.current = e4, r2.updateStageIndexes(), t3.setSlideNumber(e4 + 1), i2.displaySourcesWhichShouldBeDisplayed();
            }, o3.jumpTo = function(e4) {
              var t4 = u2.previous, n4 = u2.current, i3 = u2.next, s3 = l2[n4], f2 = l2[e4];
              o3.changeTo(e4);
              for (var p2 = 0; p2 < a2.length; p2++)
                a2[p2].d();
              d2.d(n4), d2.c(), requestAnimationFrame(function() {
                requestAnimationFrame(function() {
                  var e5 = u2.previous, o4 = u2.next;
                  function p3() {
                    r2.i(n4) ? n4 === u2.previous ? a2[n4].ne() : n4 === u2.next && a2[n4].p() : (a2[n4].h(), a2[n4].n());
                  }
                  s3 && c2[n4].classList.add(m), f2 && c2[u2.current].classList.add(h), d2.a(), void 0 !== e5 && e5 !== n4 && a2[e5].ne(), a2[u2.current].n(), void 0 !== o4 && o4 !== n4 && a2[o4].p(), d2.b(t4), d2.b(i3), l2[n4] ? setTimeout(p3, 260) : p3();
                });
              });
            };
          }(e2), function(e3) {
            var t3 = e3.core.sourcesPointerDown, n3 = e3.elements, o3 = n3.smw, i2 = n3.sources, r2 = e3.sourcePointerProps, s2 = e3.stageIndexes;
            t3.listener = function(e4) {
              "VIDEO" !== e4.target.tagName && e4.preventDefault(), r2.isPointering = true, r2.downScreenX = e4.screenX, r2.swipedX = 0;
              var t4 = i2[s2.current];
              t4 && t4.contains(e4.target) ? r2.isSourceDownEventTarget = true : r2.isSourceDownEventTarget = false;
              for (var n4 = 0; n4 < o3.length; n4++)
                o3[n4].d();
            };
          }(e2), function(e3) {
            var t3 = e3.collections.sourcesRenderFunctions, n3 = e3.core.sourceDisplayFacade, o3 = e3.props, i2 = e3.stageIndexes;
            function r2(e4) {
              t3[e4] && (t3[e4](), delete t3[e4]);
            }
            n3.displaySourcesWhichShouldBeDisplayed = function() {
              if (o3.loadOnlyCurrentSource)
                r2(i2.current);
              else
                for (var e4 in i2)
                  r2(i2[e4]);
            };
          }(e2), function(e3) {
            var t3 = e3.core.stageManager, n3 = e3.elements, o3 = n3.smw, i2 = n3.sourceAnimationWrappers, r2 = e3.isl, s2 = e3.stageIndexes, a2 = e3.sws;
            a2.a = function() {
              for (var e4 in s2)
                o3[s2[e4]].s();
            }, a2.b = function(e4) {
              void 0 === e4 || t3.i(e4) || (o3[e4].h(), o3[e4].n());
            }, a2.c = function() {
              for (var e4 in s2)
                a2.d(s2[e4]);
            }, a2.d = function(e4) {
              if (r2[e4]) {
                var t4 = i2[e4];
                $(t4, g), $(t4, h), $(t4, m);
              }
            };
          }(e2), function(e3) {
            var t3 = e3.collections.sourceSizers, n3 = e3.core.windowResizeActioner, o3 = (e3.data, e3.elements.smw), i2 = e3.props.sourceMargin, r2 = e3.stageIndexes, s2 = 1 - 2 * i2;
            n3.runActions = function() {
              innerWidth > 992 ? e3.mw = s2 * innerWidth : e3.mw = innerWidth, e3.mh = s2 * innerHeight;
              for (var n4 = 0; n4 < o3.length; n4++)
                o3[n4].d(), t3[n4] && t3[n4].adjustSize();
              var i3 = r2.previous, a2 = r2.next;
              void 0 !== i3 && o3[i3].ne(), void 0 !== a2 && o3[a2].p();
            };
          }(e2);
        }
        function Q(e2) {
          var t2 = e2.componentsServices, n2 = e2.core, o2 = n2.eventsDispatcher, r2 = n2.globalEventsController, s2 = n2.scrollbarRecompensor, c2 = n2.sourceDisplayFacade, u2 = n2.stageManager, f2 = n2.windowResizeActioner, p2 = e2.data, h2 = e2.elements, m2 = (e2.props, e2.stageIndexes), v2 = e2.sws;
          function b2() {
            var t3, n3;
            p2.i = true, p2.scrollbarWidth = function() {
              var e3 = document.createElement("div"), t4 = e3.style, n4 = document.createElement("div");
              t4.visibility = "hidden", t4.width = "100px", t4.msOverflowStyle = "scrollbar", t4.overflow = "scroll", n4.style.width = "100%", document.body.appendChild(e3);
              var o3 = e3.offsetWidth;
              e3.appendChild(n4);
              var i2 = n4.offsetWidth;
              return document.body.removeChild(e3), o3 - i2;
            }(), K(e2), h2.container = document.createElement("div"), h2.container.className = "".concat(i, "container ").concat(a, " ").concat(g), function(e3) {
              var t4 = e3.elements;
              t4.slideSwipingHoverer = document.createElement("div"), t4.slideSwipingHoverer.className = "".concat(i, "slide-swiping-hoverer ").concat(a, " ").concat(d);
            }(e2), j(e2), function(e3) {
              var t4 = e3.core.sourcesPointerDown, n4 = e3.elements, o3 = e3.props.sources, i2 = document.createElement("div");
              i2.className = "".concat(d, " ").concat(a), n4.container.appendChild(i2), i2.addEventListener("pointerdown", t4.listener), n4.sourceWrappersContainer = i2;
              for (var r3 = 0; r3 < o3.length; r3++)
                W(e3, r3);
            }(e2), e2.props.sources.length > 1 && (n3 = (t3 = e2).core.slideChangeFacade, X(t3, n3.changeToPrevious, "previous", "M18.271,9.212H3.615l4.184-4.184c0.306-0.306,0.306-0.801,0-1.107c-0.306-0.306-0.801-0.306-1.107,0L1.21,9.403C1.194,9.417,1.174,9.421,1.158,9.437c-0.181,0.181-0.242,0.425-0.209,0.66c0.005,0.038,0.012,0.071,0.022,0.109c0.028,0.098,0.075,0.188,0.142,0.271c0.021,0.026,0.021,0.061,0.045,0.085c0.015,0.016,0.034,0.02,0.05,0.033l5.484,5.483c0.306,0.307,0.801,0.307,1.107,0c0.306-0.305,0.306-0.801,0-1.105l-4.184-4.185h14.656c0.436,0,0.788-0.353,0.788-0.788S18.707,9.212,18.271,9.212z"), X(t3, n3.changeToNext, "next", "M1.729,9.212h14.656l-4.184-4.184c-0.307-0.306-0.307-0.801,0-1.107c0.305-0.306,0.801-0.306,1.106,0l5.481,5.482c0.018,0.014,0.037,0.019,0.053,0.034c0.181,0.181,0.242,0.425,0.209,0.66c-0.004,0.038-0.012,0.071-0.021,0.109c-0.028,0.098-0.075,0.188-0.143,0.271c-0.021,0.026-0.021,0.061-0.045,0.085c-0.015,0.016-0.034,0.02-0.051,0.033l-5.483,5.483c-0.306,0.307-0.802,0.307-1.106,0c-0.307-0.305-0.307-0.801,0-1.105l4.184-4.185H1.729c-0.436,0-0.788-0.353-0.788-0.788S1.293,9.212,1.729,9.212z")), function(e3) {
              for (var t4 = e3.props.sources, n4 = e3.resolve, o3 = n4(L), i2 = n4(R), r3 = n4(H, [o3, i2]), s3 = 0; s3 < t4.length; s3++)
                if ("string" == typeof t4[s3]) {
                  var a2 = r3.getTypeSetByClientForIndex(s3);
                  if (a2)
                    i2.runActionsForSourceTypeAndIndex(a2, s3);
                  else {
                    var c3 = o3.getSourceTypeFromLocalStorageByUrl(t4[s3]);
                    c3 ? i2.runActionsForSourceTypeAndIndex(c3, s3) : r3.retrieveTypeWithXhrForIndex(s3);
                  }
                } else
                  i2.runActionsForSourceTypeAndIndex("custom", s3);
            }(e2), o2.dispatch("onInit");
          }
          e2.open = function() {
            var n3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, i2 = m2.previous, a2 = m2.current, d2 = m2.next;
            m2.current = n3, p2.i || S(e2), u2.updateStageIndexes(), p2.i ? (v2.c(), v2.a(), v2.b(i2), v2.b(a2), v2.b(d2), o2.dispatch("onShow")) : b2(), c2.displaySourcesWhichShouldBeDisplayed(), t2.setSlideNumber(n3 + 1), document.body.appendChild(h2.container), document.documentElement.classList.add(l), s2.addRecompense(), r2.attachListeners(), f2.runActions(), h2.smw[m2.current].n(), o2.dispatch("onOpen");
          };
        }
        function Z(e2, t2, n2) {
          return (Z = ee() ? Reflect.construct.bind() : function(e3, t3, n3) {
            var o2 = [null];
            o2.push.apply(o2, t3);
            var i2 = new (Function.bind.apply(e3, o2))();
            return n3 && te(i2, n3.prototype), i2;
          }).apply(null, arguments);
        }
        function ee() {
          if ("undefined" == typeof Reflect || !Reflect.construct)
            return false;
          if (Reflect.construct.sham)
            return false;
          if ("function" == typeof Proxy)
            return true;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
            })), true;
          } catch (e2) {
            return false;
          }
        }
        function te(e2, t2) {
          return (te = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e3, t3) {
            return e3.__proto__ = t3, e3;
          })(e2, t2);
        }
        function ne(e2) {
          return function(e3) {
            if (Array.isArray(e3))
              return oe(e3);
          }(e2) || function(e3) {
            if ("undefined" != typeof Symbol && null != e3[Symbol.iterator] || null != e3["@@iterator"])
              return Array.from(e3);
          }(e2) || function(e3, t2) {
            if (!e3)
              return;
            if ("string" == typeof e3)
              return oe(e3, t2);
            var n2 = Object.prototype.toString.call(e3).slice(8, -1);
            "Object" === n2 && e3.constructor && (n2 = e3.constructor.name);
            if ("Map" === n2 || "Set" === n2)
              return Array.from(e3);
            if ("Arguments" === n2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
              return oe(e3, t2);
          }(e2) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }();
        }
        function oe(e2, t2) {
          (null == t2 || t2 > e2.length) && (t2 = e2.length);
          for (var n2 = 0, o2 = new Array(t2); n2 < t2; n2++)
            o2[n2] = e2[n2];
          return o2;
        }
        function ie() {
          for (var e2 = document.getElementsByTagName("a"), t2 = function(t3) {
            if (!e2[t3].hasAttribute("data-fslightbox"))
              return "continue";
            var n3 = e2[t3].hasAttribute("data-href") ? e2[t3].getAttribute("data-href") : e2[t3].getAttribute("href");
            if (!n3)
              return console.warn('The "data-fslightbox" attribute was set without the "href" attribute.'), "continue";
            var o3 = e2[t3].getAttribute("data-fslightbox");
            fsLightboxInstances[o3] || (fsLightboxInstances[o3] = new FsLightbox());
            var i2 = null;
            "#" === n3.charAt(0) ? (i2 = document.getElementById(n3.substring(1)).cloneNode(true)).removeAttribute("id") : i2 = n3, fsLightboxInstances[o3].props.sources.push(i2), fsLightboxInstances[o3].elements.a.push(e2[t3]);
            var r2 = fsLightboxInstances[o3].props.sources.length - 1;
            e2[t3].onclick = function(e3) {
              e3.preventDefault(), fsLightboxInstances[o3].open(r2);
            }, d2("types", "data-type"), d2("videosPosters", "data-video-poster"), d2("customClasses", "data-class"), d2("customClasses", "data-custom-class");
            for (var s2 = ["href", "data-fslightbox", "data-href", "data-type", "data-video-poster", "data-class", "data-custom-class"], a2 = e2[t3].attributes, c2 = fsLightboxInstances[o3].props.customAttributes, l2 = 0; l2 < a2.length; l2++)
              if (-1 === s2.indexOf(a2[l2].name) && "data-" === a2[l2].name.substr(0, 5)) {
                c2[r2] || (c2[r2] = {});
                var u2 = a2[l2].name.substr(5);
                c2[r2][u2] = a2[l2].value;
              }
            function d2(n4, i3) {
              e2[t3].hasAttribute(i3) && (fsLightboxInstances[o3].props[n4][r2] = e2[t3].getAttribute(i3));
            }
          }, n2 = 0; n2 < e2.length; n2++)
            t2(n2);
          var o2 = Object.keys(fsLightboxInstances);
          window.fsLightbox = fsLightboxInstances[o2[o2.length - 1]];
        }
        window.FsLightbox = function() {
          var e2 = this;
          this.props = { sources: [], customAttributes: [], customClasses: [], types: [], videosPosters: [], sourceMargin: 0.05, slideDistance: 0.3 }, this.data = { isFullscreenOpen: false, scrollbarWidth: 0 }, this.isl = [], this.sourcePointerProps = { downScreenX: null, isPointering: false, isSourceDownEventTarget: false, swipedX: 0 }, this.stageIndexes = {}, this.elements = { a: [], container: null, slideSwipingHoverer: null, smw: [], sourceWrappersContainer: null, sources: [], sourceAnimationWrappers: [] }, this.componentsServices = { setSlideNumber: function() {
          } }, this.resolve = function(t2) {
            var n2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
            return n2.unshift(e2), Z(t2, ne(n2));
          }, this.collections = { sourceLoadHandlers: [], sourcesRenderFunctions: [], sourceSizers: [] }, this.core = { eventsDispatcher: {}, globalEventsController: {}, lightboxCloser: {}, lightboxUpdater: {}, scrollbarRecompensor: {}, slideChangeFacade: {}, slideIndexChanger: {}, sourcesPointerDown: {}, sourceDisplayFacade: {}, stageManager: {}, windowResizeActioner: {} }, this.fs = {}, this.sws = {}, Q(this), this.close = function() {
            return e2.core.lightboxCloser.closeLightbox();
          };
        }, window.fsLightboxInstances = {}, ie(), window.refreshFsLightbox = function() {
          for (var e2 in fsLightboxInstances) {
            var t2 = fsLightboxInstances[e2].props;
            fsLightboxInstances[e2] = new FsLightbox(), fsLightboxInstances[e2].props = t2, fsLightboxInstances[e2].props.sources = [], fsLightboxInstances[e2].elements.a = [];
          }
          ie();
        };
      }]);
    });
  }
});

// resources/js/index.js
var import_fslightbox = __toESM(require_fslightbox(), 1);
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vbm9kZV9tb2R1bGVzL2ZzbGlnaHRib3gvaW5kZXguanMiLCAiLi4vanMvaW5kZXguanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIiFmdW5jdGlvbihlLHQpe2lmKFwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlKW1vZHVsZS5leHBvcnRzPXQoKTtlbHNlIGlmKFwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZClkZWZpbmUoW10sdCk7ZWxzZXt2YXIgbj10KCk7Zm9yKHZhciBvIGluIG4pKFwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP2V4cG9ydHM6ZSlbb109bltvXX19KHdpbmRvdywoZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24oZSl7dmFyIHQ9e307ZnVuY3Rpb24gbihvKXtpZih0W29dKXJldHVybiB0W29dLmV4cG9ydHM7dmFyIGk9dFtvXT17aTpvLGw6ITEsZXhwb3J0czp7fX07cmV0dXJuIGVbb10uY2FsbChpLmV4cG9ydHMsaSxpLmV4cG9ydHMsbiksaS5sPSEwLGkuZXhwb3J0c31yZXR1cm4gbi5tPWUsbi5jPXQsbi5kPWZ1bmN0aW9uKGUsdCxvKXtuLm8oZSx0KXx8T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsdCx7ZW51bWVyYWJsZTohMCxnZXQ6b30pfSxuLnI9ZnVuY3Rpb24oZSl7XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmU3ltYm9sLnRvU3RyaW5nVGFnJiZPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxTeW1ib2wudG9TdHJpbmdUYWcse3ZhbHVlOlwiTW9kdWxlXCJ9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KX0sbi50PWZ1bmN0aW9uKGUsdCl7aWYoMSZ0JiYoZT1uKGUpKSw4JnQpcmV0dXJuIGU7aWYoNCZ0JiZcIm9iamVjdFwiPT10eXBlb2YgZSYmZSYmZS5fX2VzTW9kdWxlKXJldHVybiBlO3ZhciBvPU9iamVjdC5jcmVhdGUobnVsbCk7aWYobi5yKG8pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLFwiZGVmYXVsdFwiLHtlbnVtZXJhYmxlOiEwLHZhbHVlOmV9KSwyJnQmJlwic3RyaW5nXCIhPXR5cGVvZiBlKWZvcih2YXIgaSBpbiBlKW4uZChvLGksZnVuY3Rpb24odCl7cmV0dXJuIGVbdF19LmJpbmQobnVsbCxpKSk7cmV0dXJuIG99LG4ubj1mdW5jdGlvbihlKXt2YXIgdD1lJiZlLl9fZXNNb2R1bGU/ZnVuY3Rpb24oKXtyZXR1cm4gZS5kZWZhdWx0fTpmdW5jdGlvbigpe3JldHVybiBlfTtyZXR1cm4gbi5kKHQsXCJhXCIsdCksdH0sbi5vPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLHQpfSxuLnA9XCJcIixuKG4ucz0wKX0oW2Z1bmN0aW9uKGUsdCxuKXtcInVzZSBzdHJpY3RcIjtuLnIodCk7dmFyIG8saT1cImZzbGlnaHRib3gtXCIscj1cIlwiLmNvbmNhdChpLFwic3R5bGVzXCIpLHM9XCJcIi5jb25jYXQoaSxcImN1cnNvci1ncmFiYmluZ1wiKSxhPVwiXCIuY29uY2F0KGksXCJmdWxsLWRpbWVuc2lvblwiKSxjPVwiXCIuY29uY2F0KGksXCJmbGV4LWNlbnRlcmVkXCIpLGw9XCJcIi5jb25jYXQoaSxcIm9wZW5cIiksdT1cIlwiLmNvbmNhdChpLFwidHJhbnNmb3JtLXRyYW5zaXRpb25cIiksZD1cIlwiLmNvbmNhdChpLFwiYWJzb2x1dGVkXCIpLGY9XCJcIi5jb25jYXQoaSxcInNsaWRlLWJ0blwiKSxwPVwiXCIuY29uY2F0KGYsXCItY29udGFpbmVyXCIpLGg9XCJcIi5jb25jYXQoaSxcImZhZGUtaW5cIiksbT1cIlwiLmNvbmNhdChpLFwiZmFkZS1vdXRcIiksZz1oK1wiLXN0cm9uZ1wiLHY9bStcIi1zdHJvbmdcIixiPVwiXCIuY29uY2F0KGksXCJvcGFjaXR5LVwiKSx4PVwiXCIuY29uY2F0KGIsXCIxXCIpLHk9XCJcIi5jb25jYXQoaSxcInNvdXJjZVwiKTtmdW5jdGlvbiB3KGUpe3JldHVybih3PVwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmXCJzeW1ib2xcIj09dHlwZW9mIFN5bWJvbC5pdGVyYXRvcj9mdW5jdGlvbihlKXtyZXR1cm4gdHlwZW9mIGV9OmZ1bmN0aW9uKGUpe3JldHVybiBlJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJmUuY29uc3RydWN0b3I9PT1TeW1ib2wmJmUhPT1TeW1ib2wucHJvdG90eXBlP1wic3ltYm9sXCI6dHlwZW9mIGV9KShlKX1mdW5jdGlvbiBTKGUpe3ZhciB0PWUuc3RhZ2VJbmRleGVzLG49ZS5jb3JlLnN0YWdlTWFuYWdlcixvPWUucHJvcHMuc291cmNlcy5sZW5ndGgtMTtuLmdldFByZXZpb3VzU2xpZGVJbmRleD1mdW5jdGlvbigpe3JldHVybiAwPT09dC5jdXJyZW50P286dC5jdXJyZW50LTF9LG4uZ2V0TmV4dFNsaWRlSW5kZXg9ZnVuY3Rpb24oKXtyZXR1cm4gdC5jdXJyZW50PT09bz8wOnQuY3VycmVudCsxfSxuLnVwZGF0ZVN0YWdlSW5kZXhlcz0wPT09bz9mdW5jdGlvbigpe306MT09PW8/ZnVuY3Rpb24oKXswPT09dC5jdXJyZW50Pyh0Lm5leHQ9MSxkZWxldGUgdC5wcmV2aW91cyk6KHQucHJldmlvdXM9MCxkZWxldGUgdC5uZXh0KX06ZnVuY3Rpb24oKXt0LnByZXZpb3VzPW4uZ2V0UHJldmlvdXNTbGlkZUluZGV4KCksdC5uZXh0PW4uZ2V0TmV4dFNsaWRlSW5kZXgoKX0sbi5pPW88PTI/ZnVuY3Rpb24oKXtyZXR1cm4hMH06ZnVuY3Rpb24oZSl7dmFyIG49dC5jdXJyZW50O2lmKDA9PT1uJiZlPT09b3x8bj09PW8mJjA9PT1lKXJldHVybiEwO3ZhciBpPW4tZTtyZXR1cm4tMT09PWl8fDA9PT1pfHwxPT09aX19XCJvYmplY3RcIj09PShcInVuZGVmaW5lZFwiPT10eXBlb2YgZG9jdW1lbnQ/XCJ1bmRlZmluZWRcIjp3KGRvY3VtZW50KSkmJigobz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIikpLmNsYXNzTmFtZT1yLG8uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCIuZnNsaWdodGJveC1hYnNvbHV0ZWR7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDowfS5mc2xpZ2h0Ym94LWZhZGUtaW57YW5pbWF0aW9uOmZzbGlnaHRib3gtZmFkZS1pbiAuM3MgY3ViaWMtYmV6aWVyKDAsMCwuNywxKX0uZnNsaWdodGJveC1mYWRlLW91dHthbmltYXRpb246ZnNsaWdodGJveC1mYWRlLW91dCAuM3MgZWFzZX0uZnNsaWdodGJveC1mYWRlLWluLXN0cm9uZ3thbmltYXRpb246ZnNsaWdodGJveC1mYWRlLWluLXN0cm9uZyAuM3MgY3ViaWMtYmV6aWVyKDAsMCwuNywxKX0uZnNsaWdodGJveC1mYWRlLW91dC1zdHJvbmd7YW5pbWF0aW9uOmZzbGlnaHRib3gtZmFkZS1vdXQtc3Ryb25nIC4zcyBlYXNlfUBrZXlmcmFtZXMgZnNsaWdodGJveC1mYWRlLWlue2Zyb217b3BhY2l0eTouNjV9dG97b3BhY2l0eToxfX1Aa2V5ZnJhbWVzIGZzbGlnaHRib3gtZmFkZS1vdXR7ZnJvbXtvcGFjaXR5Oi4zNX10b3tvcGFjaXR5OjB9fUBrZXlmcmFtZXMgZnNsaWdodGJveC1mYWRlLWluLXN0cm9uZ3tmcm9te29wYWNpdHk6LjN9dG97b3BhY2l0eToxfX1Aa2V5ZnJhbWVzIGZzbGlnaHRib3gtZmFkZS1vdXQtc3Ryb25ne2Zyb217b3BhY2l0eToxfXRve29wYWNpdHk6MH19LmZzbGlnaHRib3gtY3Vyc29yLWdyYWJiaW5ne2N1cnNvcjpncmFiYmluZ30uZnNsaWdodGJveC1mdWxsLWRpbWVuc2lvbnt3aWR0aDoxMDAlO2hlaWdodDoxMDAlfS5mc2xpZ2h0Ym94LW9wZW57b3ZlcmZsb3c6aGlkZGVuO2hlaWdodDoxMDAlfS5mc2xpZ2h0Ym94LWZsZXgtY2VudGVyZWR7ZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyfS5mc2xpZ2h0Ym94LW9wYWNpdHktMHtvcGFjaXR5OjAhaW1wb3J0YW50fS5mc2xpZ2h0Ym94LW9wYWNpdHktMXtvcGFjaXR5OjEhaW1wb3J0YW50fS5mc2xpZ2h0Ym94LXNjcm9sbGJhcmZpeHtwYWRkaW5nLXJpZ2h0OjE3cHh9LmZzbGlnaHRib3gtdHJhbnNmb3JtLXRyYW5zaXRpb257dHJhbnNpdGlvbjp0cmFuc2Zvcm0gLjNzfS5mc2xpZ2h0Ym94LWNvbnRhaW5lcntmb250LWZhbWlseTpBcmlhbCxzYW5zLXNlcmlmO3Bvc2l0aW9uOmZpeGVkO3RvcDowO2xlZnQ6MDtiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudChyZ2JhKDMwLDMwLDMwLC45KSwjMDAwIDE4MTAlKTt0b3VjaC1hY3Rpb246cGluY2gtem9vbTt6LWluZGV4OjEwMDAwMDAwMDA7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lOy13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjp0cmFuc3BhcmVudH0uZnNsaWdodGJveC1jb250YWluZXIgKntib3gtc2l6aW5nOmJvcmRlci1ib3h9LmZzbGlnaHRib3gtc3ZnLXBhdGh7dHJhbnNpdGlvbjpmaWxsIC4xNXMgZWFzZTtmaWxsOiNkZGR9LmZzbGlnaHRib3gtbmF2e2hlaWdodDo0NXB4O3dpZHRoOjEwMCU7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDowfS5mc2xpZ2h0Ym94LXNsaWRlLW51bWJlci1jb250YWluZXJ7ZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyO3Bvc2l0aW9uOnJlbGF0aXZlO2hlaWdodDoxMDAlO2ZvbnQtc2l6ZToxNXB4O2NvbG9yOiNkN2Q3ZDc7ei1pbmRleDowO21heC13aWR0aDo1NXB4O3RleHQtYWxpZ246bGVmdH0uZnNsaWdodGJveC1zbGlkZS1udW1iZXItY29udGFpbmVyIC5mc2xpZ2h0Ym94LWZsZXgtY2VudGVyZWR7aGVpZ2h0OjEwMCV9LmZzbGlnaHRib3gtc2xhc2h7ZGlzcGxheTpibG9jazttYXJnaW46MCA1cHg7d2lkdGg6MXB4O2hlaWdodDoxMnB4O3RyYW5zZm9ybTpyb3RhdGUoMTVkZWcpO2JhY2tncm91bmQ6I2ZmZn0uZnNsaWdodGJveC10b29sYmFye3Bvc2l0aW9uOmFic29sdXRlO3otaW5kZXg6MztyaWdodDowO3RvcDowO2hlaWdodDoxMDAlO2Rpc3BsYXk6ZmxleDtiYWNrZ3JvdW5kOnJnYmEoMzUsMzUsMzUsLjY1KX0uZnNsaWdodGJveC10b29sYmFyLWJ1dHRvbntoZWlnaHQ6MTAwJTt3aWR0aDo0NXB4O2N1cnNvcjpwb2ludGVyfS5mc2xpZ2h0Ym94LXRvb2xiYXItYnV0dG9uOmhvdmVyIC5mc2xpZ2h0Ym94LXN2Zy1wYXRoe2ZpbGw6I2ZmZn0uZnNsaWdodGJveC1zbGlkZS1idG4tY29udGFpbmVye2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7cGFkZGluZzoxMnB4IDEycHggMTJweCA2cHg7cG9zaXRpb246YWJzb2x1dGU7dG9wOjUwJTtjdXJzb3I6cG9pbnRlcjt6LWluZGV4OjM7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTUwJSl9QG1lZGlhIChtaW4td2lkdGg6NDc2cHgpey5mc2xpZ2h0Ym94LXNsaWRlLWJ0bi1jb250YWluZXJ7cGFkZGluZzoyMnB4IDIycHggMjJweCA2cHh9fUBtZWRpYSAobWluLXdpZHRoOjc2OHB4KXsuZnNsaWdodGJveC1zbGlkZS1idG4tY29udGFpbmVye3BhZGRpbmc6MzBweCAzMHB4IDMwcHggNnB4fX0uZnNsaWdodGJveC1zbGlkZS1idG4tY29udGFpbmVyOmhvdmVyIC5mc2xpZ2h0Ym94LXN2Zy1wYXRoe2ZpbGw6I2YxZjFmMX0uZnNsaWdodGJveC1zbGlkZS1idG57cGFkZGluZzo5cHg7Zm9udC1zaXplOjI2cHg7YmFja2dyb3VuZDpyZ2JhKDM1LDM1LDM1LC42NSl9QG1lZGlhIChtaW4td2lkdGg6NzY4cHgpey5mc2xpZ2h0Ym94LXNsaWRlLWJ0bntwYWRkaW5nOjEwcHh9fUBtZWRpYSAobWluLXdpZHRoOjE2MDBweCl7LmZzbGlnaHRib3gtc2xpZGUtYnRue3BhZGRpbmc6MTFweH19LmZzbGlnaHRib3gtc2xpZGUtYnRuLWNvbnRhaW5lci1wcmV2aW91c3tsZWZ0OjB9QG1lZGlhIChtYXgtd2lkdGg6NDc1Ljk5cHgpey5mc2xpZ2h0Ym94LXNsaWRlLWJ0bi1jb250YWluZXItcHJldmlvdXN7cGFkZGluZy1sZWZ0OjNweH19LmZzbGlnaHRib3gtc2xpZGUtYnRuLWNvbnRhaW5lci1uZXh0e3JpZ2h0OjA7cGFkZGluZy1sZWZ0OjEycHg7cGFkZGluZy1yaWdodDozcHh9QG1lZGlhIChtaW4td2lkdGg6NDc2cHgpey5mc2xpZ2h0Ym94LXNsaWRlLWJ0bi1jb250YWluZXItbmV4dHtwYWRkaW5nLWxlZnQ6MjJweH19QG1lZGlhIChtaW4td2lkdGg6NzY4cHgpey5mc2xpZ2h0Ym94LXNsaWRlLWJ0bi1jb250YWluZXItbmV4dHtwYWRkaW5nLWxlZnQ6MzBweH19QG1lZGlhIChtaW4td2lkdGg6NDc2cHgpey5mc2xpZ2h0Ym94LXNsaWRlLWJ0bi1jb250YWluZXItbmV4dHtwYWRkaW5nLXJpZ2h0OjZweH19LmZzbGlnaHRib3gtZG93bi1ldmVudC1kZXRlY3Rvcntwb3NpdGlvbjphYnNvbHV0ZTt6LWluZGV4OjF9LmZzbGlnaHRib3gtc2xpZGUtc3dpcGluZy1ob3ZlcmVye3otaW5kZXg6NH0uZnNsaWdodGJveC1pbnZhbGlkLWZpbGUtd3JhcHBlcntmb250LXNpemU6MjJweDtjb2xvcjojZWFlYmViO21hcmdpbjphdXRvfS5mc2xpZ2h0Ym94LXZpZGVve29iamVjdC1maXQ6Y292ZXJ9LmZzbGlnaHRib3gteW91dHViZS1pZnJhbWV7Ym9yZGVyOjB9LmZzbGlnaHRib3hse2Rpc3BsYXk6YmxvY2s7bWFyZ2luOmF1dG87cG9zaXRpb246YWJzb2x1dGU7dG9wOjUwJTtsZWZ0OjUwJTt0cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsLTUwJSk7d2lkdGg6NjdweDtoZWlnaHQ6NjdweH0uZnNsaWdodGJveGwgZGl2e2JveC1zaXppbmc6Ym9yZGVyLWJveDtkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjU0cHg7aGVpZ2h0OjU0cHg7bWFyZ2luOjZweDtib3JkZXI6NXB4IHNvbGlkO2JvcmRlci1jb2xvcjojOTk5IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O2JvcmRlci1yYWRpdXM6NTAlO2FuaW1hdGlvbjpmc2xpZ2h0Ym94bCAxLjJzIGN1YmljLWJlemllciguNSwwLC41LDEpIGluZmluaXRlfS5mc2xpZ2h0Ym94bCBkaXY6bnRoLWNoaWxkKDEpe2FuaW1hdGlvbi1kZWxheTotLjQ1c30uZnNsaWdodGJveGwgZGl2Om50aC1jaGlsZCgyKXthbmltYXRpb24tZGVsYXk6LS4zc30uZnNsaWdodGJveGwgZGl2Om50aC1jaGlsZCgzKXthbmltYXRpb24tZGVsYXk6LS4xNXN9QGtleWZyYW1lcyBmc2xpZ2h0Ym94bHswJXt0cmFuc2Zvcm06cm90YXRlKDApfTEwMCV7dHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpfX0uZnNsaWdodGJveC1zb3VyY2V7cG9zaXRpb246cmVsYXRpdmU7ei1pbmRleDoyO29wYWNpdHk6MH1cIikpLGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobykpO2Z1bmN0aW9uIEwoZSl7dmFyIHQsbj1lLnByb3BzLG89MCxpPXt9O3RoaXMuZ2V0U291cmNlVHlwZUZyb21Mb2NhbFN0b3JhZ2VCeVVybD1mdW5jdGlvbihlKXtyZXR1cm4gdFtlXT90W2VdOnIoZSl9LHRoaXMuaGFuZGxlUmVjZWl2ZWRTb3VyY2VUeXBlRm9yVXJsPWZ1bmN0aW9uKGUsbil7aWYoITE9PT1pW25dJiYoby0tLFwiaW52YWxpZFwiIT09ZT9pW25dPWU6ZGVsZXRlIGlbbl0sMD09PW8pKXshZnVuY3Rpb24oZSx0KXtmb3IodmFyIG4gaW4gdCllW25dPXRbbl19KHQsaSk7dHJ5e2xvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZnNsaWdodGJveC10eXBlc1wiLEpTT04uc3RyaW5naWZ5KHQpKX1jYXRjaChlKXt9fX07dmFyIHI9ZnVuY3Rpb24oZSl7bysrLGlbZV09ITF9O2lmKG4uZGlzYWJsZUxvY2FsU3RvcmFnZSl0aGlzLmdldFNvdXJjZVR5cGVGcm9tTG9jYWxTdG9yYWdlQnlVcmw9ZnVuY3Rpb24oKXt9LHRoaXMuaGFuZGxlUmVjZWl2ZWRTb3VyY2VUeXBlRm9yVXJsPWZ1bmN0aW9uKCl7fTtlbHNle3RyeXt0PUpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJmc2xpZ2h0Ym94LXR5cGVzXCIpKX1jYXRjaChlKXt9dHx8KHQ9e30sdGhpcy5nZXRTb3VyY2VUeXBlRnJvbUxvY2FsU3RvcmFnZUJ5VXJsPXIpfX1mdW5jdGlvbiBBKGUsdCxuLG8pe2UuZGF0YTt2YXIgaT1lLmVsZW1lbnRzLnNvdXJjZXMscj1uL28scz0wO3RoaXMuYWRqdXN0U2l6ZT1mdW5jdGlvbigpe2lmKChzPWUubXcvcik8ZS5taClyZXR1cm4gbjxlLm13JiYocz1vKSxhKCk7cz1vPmUubWg/ZS5taDpvLGEoKX07dmFyIGE9ZnVuY3Rpb24oKXtpW3RdLnN0eWxlLndpZHRoPXMqcitcInB4XCIsaVt0XS5zdHlsZS5oZWlnaHQ9cytcInB4XCJ9fWZ1bmN0aW9uIEMoZSx0KXt2YXIgbj10aGlzLG89ZS5jb2xsZWN0aW9ucy5zb3VyY2VTaXplcnMsaT1lLmVsZW1lbnRzLHI9aS5zb3VyY2VBbmltYXRpb25XcmFwcGVycyxzPWkuc291cmNlcyxhPWUuaXNsLGM9ZS5yZXNvbHZlO2Z1bmN0aW9uIGwoZSxuKXtvW3RdPWMoQSxbdCxlLG5dKSxvW3RdLmFkanVzdFNpemUoKX10aGlzLnJ1bkFjdGlvbnM9ZnVuY3Rpb24oZSxvKXthW3RdPSEwLHNbdF0uY2xhc3NMaXN0LmFkZCh4KSxyW3RdLmNsYXNzTGlzdC5hZGQoZyksclt0XS5yZW1vdmVDaGlsZChyW3RdLmZpcnN0Q2hpbGQpLGwoZSxvKSxuLnJ1bkFjdGlvbnM9bH19ZnVuY3Rpb24gRShlLHQpe3ZhciBuLG89dGhpcyxpPWUuZWxlbWVudHMuc291cmNlcyxyPWUucHJvcHMscz0oMCxlLnJlc29sdmUpKEMsW3RdKTt0aGlzLmhhbmRsZUltYWdlTG9hZD1mdW5jdGlvbihlKXt2YXIgdD1lLnRhcmdldCxuPXQubmF0dXJhbFdpZHRoLG89dC5uYXR1cmFsSGVpZ2h0O3MucnVuQWN0aW9ucyhuLG8pfSx0aGlzLmhhbmRsZVZpZGVvTG9hZD1mdW5jdGlvbihlKXt2YXIgdD1lLnRhcmdldCxvPXQudmlkZW9XaWR0aCxpPXQudmlkZW9IZWlnaHQ7bj0hMCxzLnJ1bkFjdGlvbnMobyxpKX0sdGhpcy5oYW5kbGVOb3RNZXRhRGF0ZWRWaWRlb0xvYWQ9ZnVuY3Rpb24oKXtufHxvLmhhbmRsZVlvdXR1YmVMb2FkKCl9LHRoaXMuaGFuZGxlWW91dHViZUxvYWQ9ZnVuY3Rpb24oKXt2YXIgZT0xOTIwLHQ9MTA4MDtyLm1heFlvdXR1YmVEaW1lbnNpb25zJiYoZT1yLm1heFlvdXR1YmVEaW1lbnNpb25zLndpZHRoLHQ9ci5tYXhZb3V0dWJlRGltZW5zaW9ucy5oZWlnaHQpLHMucnVuQWN0aW9ucyhlLHQpfSx0aGlzLmhhbmRsZUN1c3RvbUxvYWQ9ZnVuY3Rpb24oKXt2YXIgZT1pW3RdLG49ZS5vZmZzZXRXaWR0aCxyPWUub2Zmc2V0SGVpZ2h0O24mJnI/cy5ydW5BY3Rpb25zKG4scik6c2V0VGltZW91dChvLmhhbmRsZUN1c3RvbUxvYWQpfX1mdW5jdGlvbiBGKGUsdCxuKXt2YXIgbz1lLmVsZW1lbnRzLnNvdXJjZXMsaT1lLnByb3BzLmN1c3RvbUNsYXNzZXMscj1pW3RdP2lbdF06XCJcIjtvW3RdLmNsYXNzTmFtZT1uK1wiIFwiK3J9ZnVuY3Rpb24gSShlLHQpe3ZhciBuPWUuZWxlbWVudHMuc291cmNlcyxvPWUucHJvcHMuY3VzdG9tQXR0cmlidXRlcztmb3IodmFyIGkgaW4gb1t0XSluW3RdLnNldEF0dHJpYnV0ZShpLG9bdF1baV0pfWZ1bmN0aW9uIE4oZSx0KXt2YXIgbj1lLmNvbGxlY3Rpb25zLnNvdXJjZUxvYWRIYW5kbGVycyxvPWUuZWxlbWVudHMsaT1vLnNvdXJjZXMscj1vLnNvdXJjZUFuaW1hdGlvbldyYXBwZXJzLHM9ZS5wcm9wcy5zb3VyY2VzO2lbdF09ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKSxGKGUsdCx5KSxpW3RdLnNyYz1zW3RdLGlbdF0ub25sb2FkPW5bdF0uaGFuZGxlSW1hZ2VMb2FkLEkoZSx0KSxyW3RdLmFwcGVuZENoaWxkKGlbdF0pfWZ1bmN0aW9uIHooZSx0KXt2YXIgbj1lLmNvbGxlY3Rpb25zLnNvdXJjZUxvYWRIYW5kbGVycyxvPWUuZWxlbWVudHMsaT1vLnNvdXJjZXMscj1vLnNvdXJjZUFuaW1hdGlvbldyYXBwZXJzLHM9ZS5wcm9wcyxhPXMuc291cmNlcyxjPXMudmlkZW9zUG9zdGVycztpW3RdPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ2aWRlb1wiKSxGKGUsdCx5KSxpW3RdLnNyYz1hW3RdLGlbdF0ub25sb2FkZWRtZXRhZGF0YT1mdW5jdGlvbihlKXtuW3RdLmhhbmRsZVZpZGVvTG9hZChlKX0saVt0XS5jb250cm9scz0hMCxJKGUsdCksY1t0XSYmKGlbdF0ucG9zdGVyPWNbdF0pO3ZhciBsPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzb3VyY2VcIik7bC5zcmM9YVt0XSxpW3RdLmFwcGVuZENoaWxkKGwpLHNldFRpbWVvdXQoblt0XS5oYW5kbGVOb3RNZXRhRGF0ZWRWaWRlb0xvYWQsM2UzKSxyW3RdLmFwcGVuZENoaWxkKGlbdF0pfWZ1bmN0aW9uIFQoZSx0KXt2YXIgbj1lLmNvbGxlY3Rpb25zLnNvdXJjZUxvYWRIYW5kbGVycyxvPWUuZWxlbWVudHMscj1vLnNvdXJjZXMscz1vLnNvdXJjZUFuaW1hdGlvbldyYXBwZXJzLGE9ZS5wcm9wcy5zb3VyY2VzO3JbdF09ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlmcmFtZVwiKSxGKGUsdCxcIlwiLmNvbmNhdCh5LFwiIFwiKS5jb25jYXQoaSxcInlvdXR1YmUtaWZyYW1lXCIpKTt2YXIgYz1hW3RdLGw9Yy5zcGxpdChcIj9cIilbMV07clt0XS5zcmM9XCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9cIi5jb25jYXQoYy5tYXRjaCgvXi4qKHlvdXR1LmJlXFwvfHZcXC98dVxcL1xcd1xcL3xlbWJlZFxcL3x3YXRjaFxcP3Y9fFxcJnY9KShbXiNcXCZcXD9dKikuKi8pWzJdLFwiP1wiKS5jb25jYXQobHx8XCJcIiksclt0XS5hbGxvd0Z1bGxzY3JlZW49ITAsSShlLHQpLHNbdF0uYXBwZW5kQ2hpbGQoclt0XSksblt0XS5oYW5kbGVZb3V0dWJlTG9hZCgpfWZ1bmN0aW9uIFAoZSx0KXt2YXIgbj1lLmNvbGxlY3Rpb25zLnNvdXJjZUxvYWRIYW5kbGVycyxvPWUuZWxlbWVudHMsaT1vLnNvdXJjZXMscj1vLnNvdXJjZUFuaW1hdGlvbldyYXBwZXJzLHM9ZS5wcm9wcy5zb3VyY2VzO2lbdF09c1t0XSxGKGUsdCxcIlwiLmNvbmNhdChpW3RdLmNsYXNzTmFtZSxcIiBcIikuY29uY2F0KHkpKSxyW3RdLmFwcGVuZENoaWxkKGlbdF0pLG5bdF0uaGFuZGxlQ3VzdG9tTG9hZCgpfWZ1bmN0aW9uIGsoZSx0KXt2YXIgbj1lLmVsZW1lbnRzLG89bi5zb3VyY2VzLHI9bi5zb3VyY2VBbmltYXRpb25XcmFwcGVycztlLnByb3BzLnNvdXJjZXM7b1t0XT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLG9bdF0uY2xhc3NOYW1lPVwiXCIuY29uY2F0KGksXCJpbnZhbGlkLWZpbGUtd3JhcHBlciBcIikuY29uY2F0KGMpLG9bdF0uaW5uZXJIVE1MPVwiSW52YWxpZCBzb3VyY2VcIixyW3RdLmNsYXNzTGlzdC5hZGQoZyksclt0XS5yZW1vdmVDaGlsZChyW3RdLmZpcnN0Q2hpbGQpLHJbdF0uYXBwZW5kQ2hpbGQob1t0XSl9ZnVuY3Rpb24gUihlKXt2YXIgdD1lLmNvbGxlY3Rpb25zLG49dC5zb3VyY2VMb2FkSGFuZGxlcnMsbz10LnNvdXJjZXNSZW5kZXJGdW5jdGlvbnMsaT1lLmNvcmUuc291cmNlRGlzcGxheUZhY2FkZSxyPWUucmVzb2x2ZTt0aGlzLnJ1bkFjdGlvbnNGb3JTb3VyY2VUeXBlQW5kSW5kZXg9ZnVuY3Rpb24odCxzKXt2YXIgYTtzd2l0Y2goXCJpbnZhbGlkXCIhPT10JiYobltzXT1yKEUsW3NdKSksdCl7Y2FzZVwiaW1hZ2VcIjphPU47YnJlYWs7Y2FzZVwidmlkZW9cIjphPXo7YnJlYWs7Y2FzZVwieW91dHViZVwiOmE9VDticmVhaztjYXNlXCJjdXN0b21cIjphPVA7YnJlYWs7ZGVmYXVsdDphPWt9b1tzXT1mdW5jdGlvbigpe3JldHVybiBhKGUscyl9LGkuZGlzcGxheVNvdXJjZXNXaGljaFNob3VsZEJlRGlzcGxheWVkKCl9fWZ1bmN0aW9uIEgoZSx0LG4pe3ZhciBvPWUucHJvcHMsaT1vLnR5cGVzLHI9by50eXBlLHM9by5zb3VyY2VzO3RoaXMuZ2V0VHlwZVNldEJ5Q2xpZW50Rm9ySW5kZXg9ZnVuY3Rpb24oZSl7dmFyIHQ7cmV0dXJuIGkmJmlbZV0/dD1pW2VdOnImJih0PXIpLHR9LHRoaXMucmV0cmlldmVUeXBlV2l0aFhockZvckluZGV4PWZ1bmN0aW9uKGUpeyFmdW5jdGlvbihlLHQpe3ZhciBuPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO24uaHJlZj1lO3ZhciBvPW4uaG9zdG5hbWU7aWYoXCJ3d3cueW91dHViZS5jb21cIj09PW98fFwieW91dHUuYmVcIj09PW8pcmV0dXJuIHQoXCJ5b3V0dWJlXCIpO3ZhciBpPW5ldyBYTUxIdHRwUmVxdWVzdDtpLm9ucmVhZHlzdGF0ZWNoYW5nZT1mdW5jdGlvbigpe2lmKDQhPT1pLnJlYWR5U3RhdGUpe2lmKDI9PT1pLnJlYWR5U3RhdGUpe3ZhciBlLG49aS5nZXRSZXNwb25zZUhlYWRlcihcImNvbnRlbnQtdHlwZVwiKTtzd2l0Y2gobi5zbGljZSgwLG4uaW5kZXhPZihcIi9cIikpKXtjYXNlXCJpbWFnZVwiOmU9XCJpbWFnZVwiO2JyZWFrO2Nhc2VcInZpZGVvXCI6ZT1cInZpZGVvXCI7YnJlYWs7ZGVmYXVsdDplPVwiaW52YWxpZFwifWkub25yZWFkeXN0YXRlY2hhbmdlPW51bGwsaS5hYm9ydCgpLHQoZSl9fWVsc2UgdChcImludmFsaWRcIil9LGkub3BlbihcIkdFVFwiLGUpLGkuc2VuZCgpfShzW2VdLChmdW5jdGlvbihvKXt0LmhhbmRsZVJlY2VpdmVkU291cmNlVHlwZUZvclVybChvLHNbZV0pLG4ucnVuQWN0aW9uc0ZvclNvdXJjZVR5cGVBbmRJbmRleChvLGUpfSkpfX1mdW5jdGlvbiBXKGUsdCl7dmFyIG49ZS5jb3JlLnN0YWdlTWFuYWdlcixvPWUuZWxlbWVudHMsaT1vLnNtdyxyPW8uc291cmNlV3JhcHBlcnNDb250YWluZXIscz1lLnByb3BzLGw9MCxmPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7ZnVuY3Rpb24gcChlKXtmLnN0eWxlLnRyYW5zZm9ybT1cInRyYW5zbGF0ZVgoXCIuY29uY2F0KGUrbCxcInB4KVwiKSxsPTB9ZnVuY3Rpb24gaCgpe3JldHVybigxK3Muc2xpZGVEaXN0YW5jZSkqaW5uZXJXaWR0aH1mLmNsYXNzTmFtZT1cIlwiLmNvbmNhdChkLFwiIFwiKS5jb25jYXQoYSxcIiBcIikuY29uY2F0KGMpLGYucz1mdW5jdGlvbigpe2Yuc3R5bGUuZGlzcGxheT1cImZsZXhcIn0sZi5oPWZ1bmN0aW9uKCl7Zi5zdHlsZS5kaXNwbGF5PVwibm9uZVwifSxmLmE9ZnVuY3Rpb24oKXtmLmNsYXNzTGlzdC5hZGQodSl9LGYuZD1mdW5jdGlvbigpe2YuY2xhc3NMaXN0LnJlbW92ZSh1KX0sZi5uPWZ1bmN0aW9uKCl7Zi5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcInRyYW5zZm9ybVwiKX0sZi52PWZ1bmN0aW9uKGUpe3JldHVybiBsPWUsZn0sZi5uZT1mdW5jdGlvbigpe3AoLWgoKSl9LGYuej1mdW5jdGlvbigpe3AoMCl9LGYucD1mdW5jdGlvbigpe3AoaCgpKX0sbi5pKHQpfHxmLmgoKSxpW3RdPWYsci5hcHBlbmRDaGlsZChmKSxmdW5jdGlvbihlLHQpe3ZhciBuPWUuZWxlbWVudHMsbz1uLnNtdyxpPW4uc291cmNlQW5pbWF0aW9uV3JhcHBlcnMscj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLHM9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtzLmNsYXNzTmFtZT1cImZzbGlnaHRib3hsXCI7Zm9yKHZhciBhPTA7YTwzO2ErKyl7dmFyIGM9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtzLmFwcGVuZENoaWxkKGMpfXIuYXBwZW5kQ2hpbGQocyksb1t0XS5hcHBlbmRDaGlsZChyKSxpW3RdPXJ9KGUsdCl9ZnVuY3Rpb24gRChlLHQsbixvKXt2YXIgcj1kb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFwic3ZnXCIpO3Iuc2V0QXR0cmlidXRlTlMobnVsbCxcIndpZHRoXCIsdCksci5zZXRBdHRyaWJ1dGVOUyhudWxsLFwiaGVpZ2h0XCIsdCksci5zZXRBdHRyaWJ1dGVOUyhudWxsLFwidmlld0JveFwiLG4pO3ZhciBzPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXCJwYXRoXCIpO3JldHVybiBzLnNldEF0dHJpYnV0ZU5TKG51bGwsXCJjbGFzc1wiLFwiXCIuY29uY2F0KGksXCJzdmctcGF0aFwiKSkscy5zZXRBdHRyaWJ1dGVOUyhudWxsLFwiZFwiLG8pLHIuYXBwZW5kQ2hpbGQocyksZS5hcHBlbmRDaGlsZChyKSxyfWZ1bmN0aW9uIE0oZSx0KXt2YXIgbj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO3JldHVybiBuLmNsYXNzTmFtZT1cIlwiLmNvbmNhdChpLFwidG9vbGJhci1idXR0b24gXCIpLmNvbmNhdChjKSxuLnRpdGxlPXQsZS5hcHBlbmRDaGlsZChuKSxufWZ1bmN0aW9uIE8oZSx0KXt2YXIgbj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO24uY2xhc3NOYW1lPVwiXCIuY29uY2F0KGksXCJ0b29sYmFyXCIpLHQuYXBwZW5kQ2hpbGQobiksZnVuY3Rpb24oZSx0KXt2YXIgbj1lLmNvbXBvbmVudHNTZXJ2aWNlcyxvPWUuZGF0YSxpPWUuZnMscj1cIk00LjUgMTFIM3Y0aDR2LTEuNUg0LjVWMTF6TTMgN2gxLjVWNC41SDdWM0gzdjR6bTEwLjUgNi41SDExVjE1aDR2LTRoLTEuNXYyLjV6TTExIDN2MS41aDIuNVY3SDE1VjNoLTR6XCIscz1NKHQpO3MudGl0bGU9XCJFbnRlciBmdWxsc2NyZWVuXCI7dmFyIGE9RChzLFwiMjBweFwiLFwiMCAwIDE4IDE4XCIscik7bi5vZnM9ZnVuY3Rpb24oKXtvLmlmcz0hMCxzLnRpdGxlPVwiRXhpdCBmdWxsc2NyZWVuXCIsYS5zZXRBdHRyaWJ1dGVOUyhudWxsLFwid2lkdGhcIixcIjI0cHhcIiksYS5zZXRBdHRyaWJ1dGVOUyhudWxsLFwiaGVpZ2h0XCIsXCIyNHB4XCIpLGEuc2V0QXR0cmlidXRlTlMobnVsbCxcInZpZXdCb3hcIixcIjAgMCA5NTAgMTAyNFwiKSxhLmZpcnN0Q2hpbGQuc2V0QXR0cmlidXRlTlMobnVsbCxcImRcIixcIk02ODIgMzQyaDEyOHY4NGgtMjEydi0yMTJoODR2MTI4ek01OTggODEwdi0yMTJoMjEydjg0aC0xMjh2MTI4aC04NHpNMzQyIDM0MnYtMTI4aDg0djIxMmgtMjEydi04NGgxMjh6TTIxNCA2ODJ2LTg0aDIxMnYyMTJoLTg0di0xMjhoLTEyOHpcIil9LG4ueGZzPWZ1bmN0aW9uKCl7by5pZnM9ITEscy50aXRsZT1cIkVudGVyIGZ1bGxzY3JlZW5cIixhLnNldEF0dHJpYnV0ZU5TKG51bGwsXCJ3aWR0aFwiLFwiMjBweFwiKSxhLnNldEF0dHJpYnV0ZU5TKG51bGwsXCJoZWlnaHRcIixcIjIwcHhcIiksYS5zZXRBdHRyaWJ1dGVOUyhudWxsLFwidmlld0JveFwiLFwiMCAwIDE4IDE4XCIpLGEuZmlyc3RDaGlsZC5zZXRBdHRyaWJ1dGVOUyhudWxsLFwiZFwiLHIpfSxzLm9uY2xpY2s9aS50fShlLG4pLGZ1bmN0aW9uKGUsdCl7dmFyIG49TSh0LFwiQ2xvc2VcIik7bi5vbmNsaWNrPWUuY29yZS5saWdodGJveENsb3Nlci5jbG9zZUxpZ2h0Ym94LEQobixcIjIwcHhcIixcIjAgMCAyNCAyNFwiLFwiTSA0LjcwNzAzMTIgMy4yOTI5Njg4IEwgMy4yOTI5Njg4IDQuNzA3MDMxMiBMIDEwLjU4NTkzOCAxMiBMIDMuMjkyOTY4OCAxOS4yOTI5NjkgTCA0LjcwNzAzMTIgMjAuNzA3MDMxIEwgMTIgMTMuNDE0MDYyIEwgMTkuMjkyOTY5IDIwLjcwNzAzMSBMIDIwLjcwNzAzMSAxOS4yOTI5NjkgTCAxMy40MTQwNjIgMTIgTCAyMC43MDcwMzEgNC43MDcwMzEyIEwgMTkuMjkyOTY5IDMuMjkyOTY4OCBMIDEyIDEwLjU4NTkzOCBMIDQuNzA3MDMxMiAzLjI5Mjk2ODggelwiKX0oZSxuKX1mdW5jdGlvbiBqKGUpe3ZhciB0PWUucHJvcHMuc291cmNlcyxuPWUuZWxlbWVudHMuY29udGFpbmVyLG89ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtvLmNsYXNzTmFtZT1cIlwiLmNvbmNhdChpLFwibmF2XCIpLG4uYXBwZW5kQ2hpbGQobyksTyhlLG8pLHQubGVuZ3RoPjEmJmZ1bmN0aW9uKGUsdCl7dmFyIG49ZS5jb21wb25lbnRzU2VydmljZXMsbz1lLnByb3BzLnNvdXJjZXMscj0oZS5zdGFnZUluZGV4ZXMsZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSk7ci5jbGFzc05hbWU9XCJcIi5jb25jYXQoaSxcInNsaWRlLW51bWJlci1jb250YWluZXJcIik7dmFyIHM9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtzLmNsYXNzTmFtZT1jO3ZhciBhPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO24uc2V0U2xpZGVOdW1iZXI9ZnVuY3Rpb24oZSl7cmV0dXJuIGEuaW5uZXJIVE1MPWV9O3ZhciBsPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO2wuY2xhc3NOYW1lPVwiXCIuY29uY2F0KGksXCJzbGFzaFwiKTt2YXIgdT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO3UuaW5uZXJIVE1MPW8ubGVuZ3RoLHIuYXBwZW5kQ2hpbGQocykscy5hcHBlbmRDaGlsZChhKSxzLmFwcGVuZENoaWxkKGwpLHMuYXBwZW5kQ2hpbGQodSksdC5hcHBlbmRDaGlsZChyKSxzZXRUaW1lb3V0KChmdW5jdGlvbigpe3Mub2Zmc2V0V2lkdGg+NTUmJihyLnN0eWxlLmp1c3RpZnlDb250ZW50PVwiZmxleC1zdGFydFwiKX0pKX0oZSxvKX1mdW5jdGlvbiBYKGUsdCxuLG8pe3ZhciBpPWUuZWxlbWVudHMuY29udGFpbmVyLHI9bi5jaGFyQXQoMCkudG9VcHBlckNhc2UoKStuLnNsaWNlKDEpLHM9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtzLmNsYXNzTmFtZT1cIlwiLmNvbmNhdChwLFwiIFwiKS5jb25jYXQocCxcIi1cIikuY29uY2F0KG4pLHMudGl0bGU9XCJcIi5jb25jYXQocixcIiBzbGlkZVwiKSxzLm9uY2xpY2s9dCxmdW5jdGlvbihlLHQpe3ZhciBuPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7bi5jbGFzc05hbWU9XCJcIi5jb25jYXQoZixcIiBcIikuY29uY2F0KGMpLEQobixcIjIwcHhcIixcIjAgMCAyMCAyMFwiLHQpLGUuYXBwZW5kQ2hpbGQobil9KHMsbyksaS5hcHBlbmRDaGlsZChzKX1mdW5jdGlvbiBCKGUpe3ZhciB0PWUuY29yZSxuPXQubGlnaHRib3hDbG9zZXIsbz10LnNsaWRlQ2hhbmdlRmFjYWRlLGk9ZS5mczt0aGlzLmxpc3RlbmVyPWZ1bmN0aW9uKGUpe3N3aXRjaChlLmtleSl7Y2FzZVwiRXNjYXBlXCI6bi5jbG9zZUxpZ2h0Ym94KCk7YnJlYWs7Y2FzZVwiQXJyb3dMZWZ0XCI6by5jaGFuZ2VUb1ByZXZpb3VzKCk7YnJlYWs7Y2FzZVwiQXJyb3dSaWdodFwiOm8uY2hhbmdlVG9OZXh0KCk7YnJlYWs7Y2FzZVwiRjExXCI6ZS5wcmV2ZW50RGVmYXVsdCgpLGkudCgpfX19ZnVuY3Rpb24gcShlKXt2YXIgdD1lLmVsZW1lbnRzLG49ZS5zb3VyY2VQb2ludGVyUHJvcHMsbz1lLnN0YWdlSW5kZXhlcztmdW5jdGlvbiBpKGUsbyl7dC5zbXdbZV0udihuLnN3aXBlZFgpW29dKCl9dGhpcy5ydW5BY3Rpb25zRm9yRXZlbnQ9ZnVuY3Rpb24oZSl7dmFyIHIsYSxjO3QuY29udGFpbmVyLmNvbnRhaW5zKHQuc2xpZGVTd2lwaW5nSG92ZXJlcil8fHQuY29udGFpbmVyLmFwcGVuZENoaWxkKHQuc2xpZGVTd2lwaW5nSG92ZXJlcikscj10LmNvbnRhaW5lcixhPXMsKGM9ci5jbGFzc0xpc3QpLmNvbnRhaW5zKGEpfHxjLmFkZChhKSxuLnN3aXBlZFg9ZS5zY3JlZW5YLW4uZG93blNjcmVlblg7dmFyIGw9by5wcmV2aW91cyx1PW8ubmV4dDtpKG8uY3VycmVudCxcInpcIiksdm9pZCAwIT09bCYmbi5zd2lwZWRYPjA/aShsLFwibmVcIik6dm9pZCAwIT09dSYmbi5zd2lwZWRYPDAmJmkodSxcInBcIil9fWZ1bmN0aW9uIFYoZSl7dmFyIHQ9ZS5wcm9wcy5zb3VyY2VzLG49ZS5yZXNvbHZlLG89ZS5zb3VyY2VQb2ludGVyUHJvcHMsaT1uKHEpOzE9PT10Lmxlbmd0aD90aGlzLmxpc3RlbmVyPWZ1bmN0aW9uKCl7by5zd2lwZWRYPTF9OnRoaXMubGlzdGVuZXI9ZnVuY3Rpb24oZSl7by5pc1BvaW50ZXJpbmcmJmkucnVuQWN0aW9uc0ZvckV2ZW50KGUpfX1mdW5jdGlvbiBVKGUpe3ZhciB0PWUuY29yZS5zbGlkZUluZGV4Q2hhbmdlcixuPWUuZWxlbWVudHMuc213LG89ZS5zdGFnZUluZGV4ZXMsaT1lLnN3cztmdW5jdGlvbiByKGUpe3ZhciB0PW5bby5jdXJyZW50XTt0LmEoKSx0W2VdKCl9ZnVuY3Rpb24gcyhlLHQpe3ZvaWQgMCE9PWUmJihuW2VdLnMoKSxuW2VdW3RdKCkpfXRoaXMucnVuUG9zaXRpdmVTd2lwZWRYQWN0aW9ucz1mdW5jdGlvbigpe3ZhciBlPW8ucHJldmlvdXM7aWYodm9pZCAwPT09ZSlyKFwielwiKTtlbHNle3IoXCJwXCIpO3ZhciBuPW8ubmV4dDt0LmNoYW5nZVRvKGUpO3ZhciBhPW8ucHJldmlvdXM7aS5kKGEpLGkuYihuKSxyKFwielwiKSxzKGEsXCJuZVwiKX19LHRoaXMucnVuTmVnYXRpdmVTd2lwZWRYQWN0aW9ucz1mdW5jdGlvbigpe3ZhciBlPW8ubmV4dDtpZih2b2lkIDA9PT1lKXIoXCJ6XCIpO2Vsc2V7cihcIm5lXCIpO3ZhciBuPW8ucHJldmlvdXM7dC5jaGFuZ2VUbyhlKTt2YXIgYT1vLm5leHQ7aS5kKGEpLGkuYihuKSxyKFwielwiKSxzKGEsXCJwXCIpfX19ZnVuY3Rpb24gXyhlLHQpe2UuY29udGFpbnModCkmJmUucmVtb3ZlQ2hpbGQodCl9ZnVuY3Rpb24gWShlKXt2YXIgdD1lLmNvcmUubGlnaHRib3hDbG9zZXIsbj1lLmVsZW1lbnRzLG89ZS5yZXNvbHZlLGk9ZS5zb3VyY2VQb2ludGVyUHJvcHMscj1vKFUpO3RoaXMucnVuTm9Td2lwZUFjdGlvbnM9ZnVuY3Rpb24oKXtfKG4uY29udGFpbmVyLG4uc2xpZGVTd2lwaW5nSG92ZXJlciksaS5pc1NvdXJjZURvd25FdmVudFRhcmdldHx8dC5jbG9zZUxpZ2h0Ym94KCksaS5pc1BvaW50ZXJpbmc9ITF9LHRoaXMucnVuQWN0aW9ucz1mdW5jdGlvbigpe2kuc3dpcGVkWD4wP3IucnVuUG9zaXRpdmVTd2lwZWRYQWN0aW9ucygpOnIucnVuTmVnYXRpdmVTd2lwZWRYQWN0aW9ucygpLF8obi5jb250YWluZXIsbi5zbGlkZVN3aXBpbmdIb3ZlcmVyKSxuLmNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKHMpLGkuaXNQb2ludGVyaW5nPSExfX1mdW5jdGlvbiBKKGUpe3ZhciB0PWUucmVzb2x2ZSxuPWUuc291cmNlUG9pbnRlclByb3BzLG89dChZKTt0aGlzLmxpc3RlbmVyPWZ1bmN0aW9uKCl7bi5pc1BvaW50ZXJpbmcmJihuLnN3aXBlZFg/by5ydW5BY3Rpb25zKCk6by5ydW5Ob1N3aXBlQWN0aW9ucygpKX19ZnVuY3Rpb24gRyhlKXt2YXIgdD10aGlzLG49ZS5jb3JlLG89bi5ldmVudHNEaXNwYXRjaGVyLGk9bi5nbG9iYWxFdmVudHNDb250cm9sbGVyLHI9bi5zY3JvbGxiYXJSZWNvbXBlbnNvcixzPWUuZGF0YSxhPWUuZWxlbWVudHMsYz1lLmZzLHU9ZS5wcm9wcyxkPWUuc291cmNlUG9pbnRlclByb3BzO3RoaXMuaXNMaWdodGJveEZhZGluZ091dD0hMSx0aGlzLnJ1bkFjdGlvbnM9ZnVuY3Rpb24oKXt0LmlzTGlnaHRib3hGYWRpbmdPdXQ9ITAsYS5jb250YWluZXIuY2xhc3NMaXN0LmFkZCh2KSxpLnJlbW92ZUxpc3RlbmVycygpLHUuZXhpdEZ1bGxzY3JlZW5PbkNsb3NlJiZzLmlmcyYmYy54KCksc2V0VGltZW91dCgoZnVuY3Rpb24oKXt0LmlzTGlnaHRib3hGYWRpbmdPdXQ9ITEsZC5pc1BvaW50ZXJpbmc9ITEsYS5jb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSh2KSxkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShsKSxyLnJlbW92ZVJlY29tcGVuc2UoKSxkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGEuY29udGFpbmVyKSxvLmRpc3BhdGNoKFwib25DbG9zZVwiKX0pLDI3MCl9fWZ1bmN0aW9uICQoZSx0KXt2YXIgbj1lLmNsYXNzTGlzdDtuLmNvbnRhaW5zKHQpJiZuLnJlbW92ZSh0KX1mdW5jdGlvbiBLKGUpe3ZhciB0LG4sbztuPSh0PWUpLmNvcmUuZXZlbnRzRGlzcGF0Y2hlcixvPXQucHJvcHMsbi5kaXNwYXRjaD1mdW5jdGlvbihlKXtvW2VdJiZvW2VdKCl9LGZ1bmN0aW9uKGUpe3ZhciB0PWUuY29tcG9uZW50c1NlcnZpY2VzLG49ZS5kYXRhLG89ZS5mcyxpPVtcImZ1bGxzY3JlZW5jaGFuZ2VcIixcIndlYmtpdGZ1bGxzY3JlZW5jaGFuZ2VcIixcIm1vemZ1bGxzY3JlZW5jaGFuZ2VcIixcIk1TRnVsbHNjcmVlbkNoYW5nZVwiXTtmdW5jdGlvbiByKGUpe2Zvcih2YXIgdD0wO3Q8aS5sZW5ndGg7dCsrKWRvY3VtZW50W2VdKGlbdF0scyl9ZnVuY3Rpb24gcygpe2RvY3VtZW50LmZ1bGxzY3JlZW5FbGVtZW50fHxkb2N1bWVudC53ZWJraXRJc0Z1bGxTY3JlZW58fGRvY3VtZW50Lm1vekZ1bGxTY3JlZW58fGRvY3VtZW50Lm1zRnVsbHNjcmVlbkVsZW1lbnQ/dC5vZnMoKTp0LnhmcygpfW8ubz1mdW5jdGlvbigpe3Qub2ZzKCk7dmFyIGU9ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O2UucmVxdWVzdEZ1bGxzY3JlZW4/ZS5yZXF1ZXN0RnVsbHNjcmVlbigpOmUubW96UmVxdWVzdEZ1bGxTY3JlZW4/ZS5tb3pSZXF1ZXN0RnVsbFNjcmVlbigpOmUud2Via2l0UmVxdWVzdEZ1bGxzY3JlZW4/ZS53ZWJraXRSZXF1ZXN0RnVsbHNjcmVlbigpOmUubXNSZXF1ZXN0RnVsbHNjcmVlbiYmZS5tc1JlcXVlc3RGdWxsc2NyZWVuKCl9LG8ueD1mdW5jdGlvbigpe3QueGZzKCksZG9jdW1lbnQuZXhpdEZ1bGxzY3JlZW4/ZG9jdW1lbnQuZXhpdEZ1bGxzY3JlZW4oKTpkb2N1bWVudC5tb3pDYW5jZWxGdWxsU2NyZWVuP2RvY3VtZW50Lm1vekNhbmNlbEZ1bGxTY3JlZW4oKTpkb2N1bWVudC53ZWJraXRFeGl0RnVsbHNjcmVlbj9kb2N1bWVudC53ZWJraXRFeGl0RnVsbHNjcmVlbigpOmRvY3VtZW50Lm1zRXhpdEZ1bGxzY3JlZW4mJmRvY3VtZW50Lm1zRXhpdEZ1bGxzY3JlZW4oKX0sby50PWZ1bmN0aW9uKCl7bi5pZnM/by54KCk6by5vKCl9LG8ubD1mdW5jdGlvbigpe3IoXCJhZGRFdmVudExpc3RlbmVyXCIpfSxvLnE9ZnVuY3Rpb24oKXtyKFwicmVtb3ZlRXZlbnRMaXN0ZW5lclwiKX19KGUpLGZ1bmN0aW9uKGUpe3ZhciB0PWUuY29yZSxuPXQuZ2xvYmFsRXZlbnRzQ29udHJvbGxlcixvPXQud2luZG93UmVzaXplQWN0aW9uZXIsaT1lLmZzLHI9ZS5yZXNvbHZlLHM9cihCKSxhPXIoViksYz1yKEopO24uYXR0YWNoTGlzdGVuZXJzPWZ1bmN0aW9uKCl7ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJtb3ZlXCIsYS5saXN0ZW5lciksZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJ1cFwiLGMubGlzdGVuZXIpLGFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIixvLnJ1bkFjdGlvbnMpLGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIscy5saXN0ZW5lciksaS5sKCl9LG4ucmVtb3ZlTGlzdGVuZXJzPWZ1bmN0aW9uKCl7ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJtb3ZlXCIsYS5saXN0ZW5lciksZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJ1cFwiLGMubGlzdGVuZXIpLHJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIixvLnJ1bkFjdGlvbnMpLGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIscy5saXN0ZW5lciksaS5xKCl9fShlKSxmdW5jdGlvbihlKXt2YXIgdD1lLmNvcmUubGlnaHRib3hDbG9zZXIsbj0oMCxlLnJlc29sdmUpKEcpO3QuY2xvc2VMaWdodGJveD1mdW5jdGlvbigpe24uaXNMaWdodGJveEZhZGluZ091dHx8bi5ydW5BY3Rpb25zKCl9fShlKSxmdW5jdGlvbihlKXt2YXIgdD1lLmRhdGEsbj1lLmNvcmUuc2Nyb2xsYmFyUmVjb21wZW5zb3I7ZnVuY3Rpb24gbygpe2RvY3VtZW50LmJvZHkub2Zmc2V0SGVpZ2h0PmlubmVySGVpZ2h0JiYoZG9jdW1lbnQuYm9keS5zdHlsZS5tYXJnaW5SaWdodD10LnNjcm9sbGJhcldpZHRoK1wicHhcIil9bi5hZGRSZWNvbXBlbnNlPWZ1bmN0aW9uKCl7XCJjb21wbGV0ZVwiPT09ZG9jdW1lbnQucmVhZHlTdGF0ZT9vKCk6YWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwoZnVuY3Rpb24oKXtvKCksbi5hZGRSZWNvbXBlbnNlPW99KSl9LG4ucmVtb3ZlUmVjb21wZW5zZT1mdW5jdGlvbigpe2RvY3VtZW50LmJvZHkuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJtYXJnaW4tcmlnaHRcIil9fShlKSxmdW5jdGlvbihlKXt2YXIgdD1lLmNvcmUsbj10LnNsaWRlQ2hhbmdlRmFjYWRlLG89dC5zbGlkZUluZGV4Q2hhbmdlcixpPXQuc3RhZ2VNYW5hZ2VyO2UucHJvcHMuc291cmNlcy5sZW5ndGg+MT8obi5jaGFuZ2VUb1ByZXZpb3VzPWZ1bmN0aW9uKCl7by5qdW1wVG8oaS5nZXRQcmV2aW91c1NsaWRlSW5kZXgoKSl9LG4uY2hhbmdlVG9OZXh0PWZ1bmN0aW9uKCl7by5qdW1wVG8oaS5nZXROZXh0U2xpZGVJbmRleCgpKX0pOihuLmNoYW5nZVRvUHJldmlvdXM9ZnVuY3Rpb24oKXt9LG4uY2hhbmdlVG9OZXh0PWZ1bmN0aW9uKCl7fSl9KGUpLGZ1bmN0aW9uKGUpe3ZhciB0PWUuY29tcG9uZW50c1NlcnZpY2VzLG49ZS5jb3JlLG89bi5zbGlkZUluZGV4Q2hhbmdlcixpPW4uc291cmNlRGlzcGxheUZhY2FkZSxyPW4uc3RhZ2VNYW5hZ2VyLHM9ZS5lbGVtZW50cyxhPXMuc213LGM9cy5zb3VyY2VBbmltYXRpb25XcmFwcGVycyxsPWUuaXNsLHU9ZS5zdGFnZUluZGV4ZXMsZD1lLnN3cztvLmNoYW5nZVRvPWZ1bmN0aW9uKGUpe3UuY3VycmVudD1lLHIudXBkYXRlU3RhZ2VJbmRleGVzKCksdC5zZXRTbGlkZU51bWJlcihlKzEpLGkuZGlzcGxheVNvdXJjZXNXaGljaFNob3VsZEJlRGlzcGxheWVkKCl9LG8uanVtcFRvPWZ1bmN0aW9uKGUpe3ZhciB0PXUucHJldmlvdXMsbj11LmN1cnJlbnQsaT11Lm5leHQscz1sW25dLGY9bFtlXTtvLmNoYW5nZVRvKGUpO2Zvcih2YXIgcD0wO3A8YS5sZW5ndGg7cCsrKWFbcF0uZCgpO2QuZChuKSxkLmMoKSxyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKGZ1bmN0aW9uKCl7cmVxdWVzdEFuaW1hdGlvbkZyYW1lKChmdW5jdGlvbigpe3ZhciBlPXUucHJldmlvdXMsbz11Lm5leHQ7ZnVuY3Rpb24gcCgpe3IuaShuKT9uPT09dS5wcmV2aW91cz9hW25dLm5lKCk6bj09PXUubmV4dCYmYVtuXS5wKCk6KGFbbl0uaCgpLGFbbl0ubigpKX1zJiZjW25dLmNsYXNzTGlzdC5hZGQobSksZiYmY1t1LmN1cnJlbnRdLmNsYXNzTGlzdC5hZGQoaCksZC5hKCksdm9pZCAwIT09ZSYmZSE9PW4mJmFbZV0ubmUoKSxhW3UuY3VycmVudF0ubigpLHZvaWQgMCE9PW8mJm8hPT1uJiZhW29dLnAoKSxkLmIodCksZC5iKGkpLGxbbl0/c2V0VGltZW91dChwLDI2MCk6cCgpfSkpfSkpfX0oZSksZnVuY3Rpb24oZSl7dmFyIHQ9ZS5jb3JlLnNvdXJjZXNQb2ludGVyRG93bixuPWUuZWxlbWVudHMsbz1uLnNtdyxpPW4uc291cmNlcyxyPWUuc291cmNlUG9pbnRlclByb3BzLHM9ZS5zdGFnZUluZGV4ZXM7dC5saXN0ZW5lcj1mdW5jdGlvbihlKXtcIlZJREVPXCIhPT1lLnRhcmdldC50YWdOYW1lJiZlLnByZXZlbnREZWZhdWx0KCksci5pc1BvaW50ZXJpbmc9ITAsci5kb3duU2NyZWVuWD1lLnNjcmVlblgsci5zd2lwZWRYPTA7dmFyIHQ9aVtzLmN1cnJlbnRdO3QmJnQuY29udGFpbnMoZS50YXJnZXQpP3IuaXNTb3VyY2VEb3duRXZlbnRUYXJnZXQ9ITA6ci5pc1NvdXJjZURvd25FdmVudFRhcmdldD0hMTtmb3IodmFyIG49MDtuPG8ubGVuZ3RoO24rKylvW25dLmQoKX19KGUpLGZ1bmN0aW9uKGUpe3ZhciB0PWUuY29sbGVjdGlvbnMuc291cmNlc1JlbmRlckZ1bmN0aW9ucyxuPWUuY29yZS5zb3VyY2VEaXNwbGF5RmFjYWRlLG89ZS5wcm9wcyxpPWUuc3RhZ2VJbmRleGVzO2Z1bmN0aW9uIHIoZSl7dFtlXSYmKHRbZV0oKSxkZWxldGUgdFtlXSl9bi5kaXNwbGF5U291cmNlc1doaWNoU2hvdWxkQmVEaXNwbGF5ZWQ9ZnVuY3Rpb24oKXtpZihvLmxvYWRPbmx5Q3VycmVudFNvdXJjZSlyKGkuY3VycmVudCk7ZWxzZSBmb3IodmFyIGUgaW4gaSlyKGlbZV0pfX0oZSksZnVuY3Rpb24oZSl7dmFyIHQ9ZS5jb3JlLnN0YWdlTWFuYWdlcixuPWUuZWxlbWVudHMsbz1uLnNtdyxpPW4uc291cmNlQW5pbWF0aW9uV3JhcHBlcnMscj1lLmlzbCxzPWUuc3RhZ2VJbmRleGVzLGE9ZS5zd3M7YS5hPWZ1bmN0aW9uKCl7Zm9yKHZhciBlIGluIHMpb1tzW2VdXS5zKCl9LGEuYj1mdW5jdGlvbihlKXt2b2lkIDA9PT1lfHx0LmkoZSl8fChvW2VdLmgoKSxvW2VdLm4oKSl9LGEuYz1mdW5jdGlvbigpe2Zvcih2YXIgZSBpbiBzKWEuZChzW2VdKX0sYS5kPWZ1bmN0aW9uKGUpe2lmKHJbZV0pe3ZhciB0PWlbZV07JCh0LGcpLCQodCxoKSwkKHQsbSl9fX0oZSksZnVuY3Rpb24oZSl7dmFyIHQ9ZS5jb2xsZWN0aW9ucy5zb3VyY2VTaXplcnMsbj1lLmNvcmUud2luZG93UmVzaXplQWN0aW9uZXIsbz0oZS5kYXRhLGUuZWxlbWVudHMuc213KSxpPWUucHJvcHMuc291cmNlTWFyZ2luLHI9ZS5zdGFnZUluZGV4ZXMscz0xLTIqaTtuLnJ1bkFjdGlvbnM9ZnVuY3Rpb24oKXtpbm5lcldpZHRoPjk5Mj9lLm13PXMqaW5uZXJXaWR0aDplLm13PWlubmVyV2lkdGgsZS5taD1zKmlubmVySGVpZ2h0O2Zvcih2YXIgbj0wO248by5sZW5ndGg7bisrKW9bbl0uZCgpLHRbbl0mJnRbbl0uYWRqdXN0U2l6ZSgpO3ZhciBpPXIucHJldmlvdXMsYT1yLm5leHQ7dm9pZCAwIT09aSYmb1tpXS5uZSgpLHZvaWQgMCE9PWEmJm9bYV0ucCgpfX0oZSl9ZnVuY3Rpb24gUShlKXt2YXIgdD1lLmNvbXBvbmVudHNTZXJ2aWNlcyxuPWUuY29yZSxvPW4uZXZlbnRzRGlzcGF0Y2hlcixyPW4uZ2xvYmFsRXZlbnRzQ29udHJvbGxlcixzPW4uc2Nyb2xsYmFyUmVjb21wZW5zb3IsYz1uLnNvdXJjZURpc3BsYXlGYWNhZGUsdT1uLnN0YWdlTWFuYWdlcixmPW4ud2luZG93UmVzaXplQWN0aW9uZXIscD1lLmRhdGEsaD1lLmVsZW1lbnRzLG09KGUucHJvcHMsZS5zdGFnZUluZGV4ZXMpLHY9ZS5zd3M7ZnVuY3Rpb24gYigpe3ZhciB0LG47cC5pPSEwLHAuc2Nyb2xsYmFyV2lkdGg9ZnVuY3Rpb24oKXt2YXIgZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLHQ9ZS5zdHlsZSxuPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7dC52aXNpYmlsaXR5PVwiaGlkZGVuXCIsdC53aWR0aD1cIjEwMHB4XCIsdC5tc092ZXJmbG93U3R5bGU9XCJzY3JvbGxiYXJcIix0Lm92ZXJmbG93PVwic2Nyb2xsXCIsbi5zdHlsZS53aWR0aD1cIjEwMCVcIixkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGUpO3ZhciBvPWUub2Zmc2V0V2lkdGg7ZS5hcHBlbmRDaGlsZChuKTt2YXIgaT1uLm9mZnNldFdpZHRoO3JldHVybiBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGUpLG8taX0oKSxLKGUpLGguY29udGFpbmVyPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksaC5jb250YWluZXIuY2xhc3NOYW1lPVwiXCIuY29uY2F0KGksXCJjb250YWluZXIgXCIpLmNvbmNhdChhLFwiIFwiKS5jb25jYXQoZyksZnVuY3Rpb24oZSl7dmFyIHQ9ZS5lbGVtZW50czt0LnNsaWRlU3dpcGluZ0hvdmVyZXI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSx0LnNsaWRlU3dpcGluZ0hvdmVyZXIuY2xhc3NOYW1lPVwiXCIuY29uY2F0KGksXCJzbGlkZS1zd2lwaW5nLWhvdmVyZXIgXCIpLmNvbmNhdChhLFwiIFwiKS5jb25jYXQoZCl9KGUpLGooZSksZnVuY3Rpb24oZSl7dmFyIHQ9ZS5jb3JlLnNvdXJjZXNQb2ludGVyRG93bixuPWUuZWxlbWVudHMsbz1lLnByb3BzLnNvdXJjZXMsaT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2kuY2xhc3NOYW1lPVwiXCIuY29uY2F0KGQsXCIgXCIpLmNvbmNhdChhKSxuLmNvbnRhaW5lci5hcHBlbmRDaGlsZChpKSxpLmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyZG93blwiLHQubGlzdGVuZXIpLG4uc291cmNlV3JhcHBlcnNDb250YWluZXI9aTtmb3IodmFyIHI9MDtyPG8ubGVuZ3RoO3IrKylXKGUscil9KGUpLGUucHJvcHMuc291cmNlcy5sZW5ndGg+MSYmKG49KHQ9ZSkuY29yZS5zbGlkZUNoYW5nZUZhY2FkZSxYKHQsbi5jaGFuZ2VUb1ByZXZpb3VzLFwicHJldmlvdXNcIixcIk0xOC4yNzEsOS4yMTJIMy42MTVsNC4xODQtNC4xODRjMC4zMDYtMC4zMDYsMC4zMDYtMC44MDEsMC0xLjEwN2MtMC4zMDYtMC4zMDYtMC44MDEtMC4zMDYtMS4xMDcsMEwxLjIxLDkuNDAzQzEuMTk0LDkuNDE3LDEuMTc0LDkuNDIxLDEuMTU4LDkuNDM3Yy0wLjE4MSwwLjE4MS0wLjI0MiwwLjQyNS0wLjIwOSwwLjY2YzAuMDA1LDAuMDM4LDAuMDEyLDAuMDcxLDAuMDIyLDAuMTA5YzAuMDI4LDAuMDk4LDAuMDc1LDAuMTg4LDAuMTQyLDAuMjcxYzAuMDIxLDAuMDI2LDAuMDIxLDAuMDYxLDAuMDQ1LDAuMDg1YzAuMDE1LDAuMDE2LDAuMDM0LDAuMDIsMC4wNSwwLjAzM2w1LjQ4NCw1LjQ4M2MwLjMwNiwwLjMwNywwLjgwMSwwLjMwNywxLjEwNywwYzAuMzA2LTAuMzA1LDAuMzA2LTAuODAxLDAtMS4xMDVsLTQuMTg0LTQuMTg1aDE0LjY1NmMwLjQzNiwwLDAuNzg4LTAuMzUzLDAuNzg4LTAuNzg4UzE4LjcwNyw5LjIxMiwxOC4yNzEsOS4yMTJ6XCIpLFgodCxuLmNoYW5nZVRvTmV4dCxcIm5leHRcIixcIk0xLjcyOSw5LjIxMmgxNC42NTZsLTQuMTg0LTQuMTg0Yy0wLjMwNy0wLjMwNi0wLjMwNy0wLjgwMSwwLTEuMTA3YzAuMzA1LTAuMzA2LDAuODAxLTAuMzA2LDEuMTA2LDBsNS40ODEsNS40ODJjMC4wMTgsMC4wMTQsMC4wMzcsMC4wMTksMC4wNTMsMC4wMzRjMC4xODEsMC4xODEsMC4yNDIsMC40MjUsMC4yMDksMC42NmMtMC4wMDQsMC4wMzgtMC4wMTIsMC4wNzEtMC4wMjEsMC4xMDljLTAuMDI4LDAuMDk4LTAuMDc1LDAuMTg4LTAuMTQzLDAuMjcxYy0wLjAyMSwwLjAyNi0wLjAyMSwwLjA2MS0wLjA0NSwwLjA4NWMtMC4wMTUsMC4wMTYtMC4wMzQsMC4wMi0wLjA1MSwwLjAzM2wtNS40ODMsNS40ODNjLTAuMzA2LDAuMzA3LTAuODAyLDAuMzA3LTEuMTA2LDBjLTAuMzA3LTAuMzA1LTAuMzA3LTAuODAxLDAtMS4xMDVsNC4xODQtNC4xODVIMS43MjljLTAuNDM2LDAtMC43ODgtMC4zNTMtMC43ODgtMC43ODhTMS4yOTMsOS4yMTIsMS43MjksOS4yMTJ6XCIpKSxmdW5jdGlvbihlKXtmb3IodmFyIHQ9ZS5wcm9wcy5zb3VyY2VzLG49ZS5yZXNvbHZlLG89bihMKSxpPW4oUikscj1uKEgsW28saV0pLHM9MDtzPHQubGVuZ3RoO3MrKylpZihcInN0cmluZ1wiPT10eXBlb2YgdFtzXSl7dmFyIGE9ci5nZXRUeXBlU2V0QnlDbGllbnRGb3JJbmRleChzKTtpZihhKWkucnVuQWN0aW9uc0ZvclNvdXJjZVR5cGVBbmRJbmRleChhLHMpO2Vsc2V7dmFyIGM9by5nZXRTb3VyY2VUeXBlRnJvbUxvY2FsU3RvcmFnZUJ5VXJsKHRbc10pO2M/aS5ydW5BY3Rpb25zRm9yU291cmNlVHlwZUFuZEluZGV4KGMscyk6ci5yZXRyaWV2ZVR5cGVXaXRoWGhyRm9ySW5kZXgocyl9fWVsc2UgaS5ydW5BY3Rpb25zRm9yU291cmNlVHlwZUFuZEluZGV4KFwiY3VzdG9tXCIscyl9KGUpLG8uZGlzcGF0Y2goXCJvbkluaXRcIil9ZS5vcGVuPWZ1bmN0aW9uKCl7dmFyIG49YXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0/YXJndW1lbnRzWzBdOjAsaT1tLnByZXZpb3VzLGE9bS5jdXJyZW50LGQ9bS5uZXh0O20uY3VycmVudD1uLHAuaXx8UyhlKSx1LnVwZGF0ZVN0YWdlSW5kZXhlcygpLHAuaT8odi5jKCksdi5hKCksdi5iKGkpLHYuYihhKSx2LmIoZCksby5kaXNwYXRjaChcIm9uU2hvd1wiKSk6YigpLGMuZGlzcGxheVNvdXJjZXNXaGljaFNob3VsZEJlRGlzcGxheWVkKCksdC5zZXRTbGlkZU51bWJlcihuKzEpLGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaC5jb250YWluZXIpLGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKGwpLHMuYWRkUmVjb21wZW5zZSgpLHIuYXR0YWNoTGlzdGVuZXJzKCksZi5ydW5BY3Rpb25zKCksaC5zbXdbbS5jdXJyZW50XS5uKCksby5kaXNwYXRjaChcIm9uT3BlblwiKX19ZnVuY3Rpb24gWihlLHQsbil7cmV0dXJuKFo9ZWUoKT9SZWZsZWN0LmNvbnN0cnVjdC5iaW5kKCk6ZnVuY3Rpb24oZSx0LG4pe3ZhciBvPVtudWxsXTtvLnB1c2guYXBwbHkobyx0KTt2YXIgaT1uZXcoRnVuY3Rpb24uYmluZC5hcHBseShlLG8pKTtyZXR1cm4gbiYmdGUoaSxuLnByb3RvdHlwZSksaX0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX1mdW5jdGlvbiBlZSgpe2lmKFwidW5kZWZpbmVkXCI9PXR5cGVvZiBSZWZsZWN0fHwhUmVmbGVjdC5jb25zdHJ1Y3QpcmV0dXJuITE7aWYoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSlyZXR1cm4hMTtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBQcm94eSlyZXR1cm4hMDt0cnl7cmV0dXJuIEJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLFtdLChmdW5jdGlvbigpe30pKSksITB9Y2F0Y2goZSl7cmV0dXJuITF9fWZ1bmN0aW9uIHRlKGUsdCl7cmV0dXJuKHRlPU9iamVjdC5zZXRQcm90b3R5cGVPZj9PYmplY3Quc2V0UHJvdG90eXBlT2YuYmluZCgpOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIGUuX19wcm90b19fPXQsZX0pKGUsdCl9ZnVuY3Rpb24gbmUoZSl7cmV0dXJuIGZ1bmN0aW9uKGUpe2lmKEFycmF5LmlzQXJyYXkoZSkpcmV0dXJuIG9lKGUpfShlKXx8ZnVuY3Rpb24oZSl7aWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmbnVsbCE9ZVtTeW1ib2wuaXRlcmF0b3JdfHxudWxsIT1lW1wiQEBpdGVyYXRvclwiXSlyZXR1cm4gQXJyYXkuZnJvbShlKX0oZSl8fGZ1bmN0aW9uKGUsdCl7aWYoIWUpcmV0dXJuO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBlKXJldHVybiBvZShlLHQpO3ZhciBuPU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChlKS5zbGljZSg4LC0xKTtcIk9iamVjdFwiPT09biYmZS5jb25zdHJ1Y3RvciYmKG49ZS5jb25zdHJ1Y3Rvci5uYW1lKTtpZihcIk1hcFwiPT09bnx8XCJTZXRcIj09PW4pcmV0dXJuIEFycmF5LmZyb20oZSk7aWYoXCJBcmd1bWVudHNcIj09PW58fC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKXJldHVybiBvZShlLHQpfShlKXx8ZnVuY3Rpb24oKXt0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKX0oKX1mdW5jdGlvbiBvZShlLHQpeyhudWxsPT10fHx0PmUubGVuZ3RoKSYmKHQ9ZS5sZW5ndGgpO2Zvcih2YXIgbj0wLG89bmV3IEFycmF5KHQpO248dDtuKyspb1tuXT1lW25dO3JldHVybiBvfWZ1bmN0aW9uIGllKCl7Zm9yKHZhciBlPWRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYVwiKSx0PWZ1bmN0aW9uKHQpe2lmKCFlW3RdLmhhc0F0dHJpYnV0ZShcImRhdGEtZnNsaWdodGJveFwiKSlyZXR1cm5cImNvbnRpbnVlXCI7dmFyIG49ZVt0XS5oYXNBdHRyaWJ1dGUoXCJkYXRhLWhyZWZcIik/ZVt0XS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWhyZWZcIik6ZVt0XS5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpO2lmKCFuKXJldHVybiBjb25zb2xlLndhcm4oJ1RoZSBcImRhdGEtZnNsaWdodGJveFwiIGF0dHJpYnV0ZSB3YXMgc2V0IHdpdGhvdXQgdGhlIFwiaHJlZlwiIGF0dHJpYnV0ZS4nKSxcImNvbnRpbnVlXCI7dmFyIG89ZVt0XS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWZzbGlnaHRib3hcIik7ZnNMaWdodGJveEluc3RhbmNlc1tvXXx8KGZzTGlnaHRib3hJbnN0YW5jZXNbb109bmV3IEZzTGlnaHRib3gpO3ZhciBpPW51bGw7XCIjXCI9PT1uLmNoYXJBdCgwKT8oaT1kb2N1bWVudC5nZXRFbGVtZW50QnlJZChuLnN1YnN0cmluZygxKSkuY2xvbmVOb2RlKCEwKSkucmVtb3ZlQXR0cmlidXRlKFwiaWRcIik6aT1uLGZzTGlnaHRib3hJbnN0YW5jZXNbb10ucHJvcHMuc291cmNlcy5wdXNoKGkpLGZzTGlnaHRib3hJbnN0YW5jZXNbb10uZWxlbWVudHMuYS5wdXNoKGVbdF0pO3ZhciByPWZzTGlnaHRib3hJbnN0YW5jZXNbb10ucHJvcHMuc291cmNlcy5sZW5ndGgtMTtlW3RdLm9uY2xpY2s9ZnVuY3Rpb24oZSl7ZS5wcmV2ZW50RGVmYXVsdCgpLGZzTGlnaHRib3hJbnN0YW5jZXNbb10ub3BlbihyKX0sZChcInR5cGVzXCIsXCJkYXRhLXR5cGVcIiksZChcInZpZGVvc1Bvc3RlcnNcIixcImRhdGEtdmlkZW8tcG9zdGVyXCIpLGQoXCJjdXN0b21DbGFzc2VzXCIsXCJkYXRhLWNsYXNzXCIpLGQoXCJjdXN0b21DbGFzc2VzXCIsXCJkYXRhLWN1c3RvbS1jbGFzc1wiKTtmb3IodmFyIHM9W1wiaHJlZlwiLFwiZGF0YS1mc2xpZ2h0Ym94XCIsXCJkYXRhLWhyZWZcIixcImRhdGEtdHlwZVwiLFwiZGF0YS12aWRlby1wb3N0ZXJcIixcImRhdGEtY2xhc3NcIixcImRhdGEtY3VzdG9tLWNsYXNzXCJdLGE9ZVt0XS5hdHRyaWJ1dGVzLGM9ZnNMaWdodGJveEluc3RhbmNlc1tvXS5wcm9wcy5jdXN0b21BdHRyaWJ1dGVzLGw9MDtsPGEubGVuZ3RoO2wrKylpZigtMT09PXMuaW5kZXhPZihhW2xdLm5hbWUpJiZcImRhdGEtXCI9PT1hW2xdLm5hbWUuc3Vic3RyKDAsNSkpe2Nbcl18fChjW3JdPXt9KTt2YXIgdT1hW2xdLm5hbWUuc3Vic3RyKDUpO2Nbcl1bdV09YVtsXS52YWx1ZX1mdW5jdGlvbiBkKG4saSl7ZVt0XS5oYXNBdHRyaWJ1dGUoaSkmJihmc0xpZ2h0Ym94SW5zdGFuY2VzW29dLnByb3BzW25dW3JdPWVbdF0uZ2V0QXR0cmlidXRlKGkpKX19LG49MDtuPGUubGVuZ3RoO24rKyl0KG4pO3ZhciBvPU9iamVjdC5rZXlzKGZzTGlnaHRib3hJbnN0YW5jZXMpO3dpbmRvdy5mc0xpZ2h0Ym94PWZzTGlnaHRib3hJbnN0YW5jZXNbb1tvLmxlbmd0aC0xXV19d2luZG93LkZzTGlnaHRib3g9ZnVuY3Rpb24oKXt2YXIgZT10aGlzO3RoaXMucHJvcHM9e3NvdXJjZXM6W10sY3VzdG9tQXR0cmlidXRlczpbXSxjdXN0b21DbGFzc2VzOltdLHR5cGVzOltdLHZpZGVvc1Bvc3RlcnM6W10sc291cmNlTWFyZ2luOi4wNSxzbGlkZURpc3RhbmNlOi4zfSx0aGlzLmRhdGE9e2lzRnVsbHNjcmVlbk9wZW46ITEsc2Nyb2xsYmFyV2lkdGg6MH0sdGhpcy5pc2w9W10sdGhpcy5zb3VyY2VQb2ludGVyUHJvcHM9e2Rvd25TY3JlZW5YOm51bGwsaXNQb2ludGVyaW5nOiExLGlzU291cmNlRG93bkV2ZW50VGFyZ2V0OiExLHN3aXBlZFg6MH0sdGhpcy5zdGFnZUluZGV4ZXM9e30sdGhpcy5lbGVtZW50cz17YTpbXSxjb250YWluZXI6bnVsbCxzbGlkZVN3aXBpbmdIb3ZlcmVyOm51bGwsc213OltdLHNvdXJjZVdyYXBwZXJzQ29udGFpbmVyOm51bGwsc291cmNlczpbXSxzb3VyY2VBbmltYXRpb25XcmFwcGVyczpbXX0sdGhpcy5jb21wb25lbnRzU2VydmljZXM9e3NldFNsaWRlTnVtYmVyOmZ1bmN0aW9uKCl7fX0sdGhpcy5yZXNvbHZlPWZ1bmN0aW9uKHQpe3ZhciBuPWFyZ3VtZW50cy5sZW5ndGg+MSYmdm9pZCAwIT09YXJndW1lbnRzWzFdP2FyZ3VtZW50c1sxXTpbXTtyZXR1cm4gbi51bnNoaWZ0KGUpLFoodCxuZShuKSl9LHRoaXMuY29sbGVjdGlvbnM9e3NvdXJjZUxvYWRIYW5kbGVyczpbXSxzb3VyY2VzUmVuZGVyRnVuY3Rpb25zOltdLHNvdXJjZVNpemVyczpbXX0sdGhpcy5jb3JlPXtldmVudHNEaXNwYXRjaGVyOnt9LGdsb2JhbEV2ZW50c0NvbnRyb2xsZXI6e30sbGlnaHRib3hDbG9zZXI6e30sbGlnaHRib3hVcGRhdGVyOnt9LHNjcm9sbGJhclJlY29tcGVuc29yOnt9LHNsaWRlQ2hhbmdlRmFjYWRlOnt9LHNsaWRlSW5kZXhDaGFuZ2VyOnt9LHNvdXJjZXNQb2ludGVyRG93bjp7fSxzb3VyY2VEaXNwbGF5RmFjYWRlOnt9LHN0YWdlTWFuYWdlcjp7fSx3aW5kb3dSZXNpemVBY3Rpb25lcjp7fX0sdGhpcy5mcz17fSx0aGlzLnN3cz17fSxRKHRoaXMpLHRoaXMuY2xvc2U9ZnVuY3Rpb24oKXtyZXR1cm4gZS5jb3JlLmxpZ2h0Ym94Q2xvc2VyLmNsb3NlTGlnaHRib3goKX19LHdpbmRvdy5mc0xpZ2h0Ym94SW5zdGFuY2VzPXt9LGllKCksd2luZG93LnJlZnJlc2hGc0xpZ2h0Ym94PWZ1bmN0aW9uKCl7Zm9yKHZhciBlIGluIGZzTGlnaHRib3hJbnN0YW5jZXMpe3ZhciB0PWZzTGlnaHRib3hJbnN0YW5jZXNbZV0ucHJvcHM7ZnNMaWdodGJveEluc3RhbmNlc1tlXT1uZXcgRnNMaWdodGJveCxmc0xpZ2h0Ym94SW5zdGFuY2VzW2VdLnByb3BzPXQsZnNMaWdodGJveEluc3RhbmNlc1tlXS5wcm9wcy5zb3VyY2VzPVtdLGZzTGlnaHRib3hJbnN0YW5jZXNbZV0uZWxlbWVudHMuYT1bXX1pZSgpfX1dKX0pKTsiLCAiaW1wb3J0IGZzbGlnaHRib3ggZnJvbSAnZnNsaWdodGJveCc7XG5cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQSxLQUFDLFNBQVMsR0FBRSxHQUFFO0FBQUMsVUFBRyxZQUFVLE9BQU8sV0FBUyxZQUFVLE9BQU87QUFBTyxlQUFPLFVBQVEsRUFBRTtBQUFBLGVBQVUsY0FBWSxPQUFPLFVBQVEsT0FBTztBQUFJLGVBQU8sQ0FBQyxHQUFFLENBQUM7QUFBQSxXQUFNO0FBQUMsWUFBSSxJQUFFLEVBQUU7QUFBRSxpQkFBUSxLQUFLO0FBQUUsV0FBQyxZQUFVLE9BQU8sVUFBUSxVQUFRLEdBQUcsQ0FBQyxJQUFFLEVBQUUsQ0FBQztBQUFBLE1BQUM7QUFBQSxJQUFDLEVBQUUsUUFBUSxXQUFVO0FBQUMsYUFBTyxTQUFTLEdBQUU7QUFBQyxZQUFJLElBQUUsQ0FBQztBQUFFLGlCQUFTLEVBQUUsR0FBRTtBQUFDLGNBQUcsRUFBRSxDQUFDO0FBQUUsbUJBQU8sRUFBRSxDQUFDLEVBQUU7QUFBUSxjQUFJLElBQUUsRUFBRSxDQUFDLElBQUUsRUFBQyxHQUFFLEdBQUUsR0FBRSxPQUFHLFNBQVEsQ0FBQyxFQUFDO0FBQUUsaUJBQU8sRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLFNBQVEsR0FBRSxFQUFFLFNBQVEsQ0FBQyxHQUFFLEVBQUUsSUFBRSxNQUFHLEVBQUU7QUFBQSxRQUFPO0FBQUMsZUFBTyxFQUFFLElBQUUsR0FBRSxFQUFFLElB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LENBQUMsR0FBRSxzQkFBcUIsQ0FBQyxFQUFDLEdBQUUsS0FBSyxLQUFHLENBQUMsR0FBRSxLQUFLLE1BQUksQ0FBQyxHQUFFLEVBQUUsSUFBSSxHQUFFLEtBQUssUUFBTSxXQUFVO0FBQUMsbUJBQU9GLEdBQUUsS0FBSyxlQUFlLGNBQWM7QUFBQSxVQUFDO0FBQUEsUUFBQyxHQUFFLE9BQU8sc0JBQW9CLENBQUMsR0FBRSxHQUFHLEdBQUUsT0FBTyxvQkFBa0IsV0FBVTtBQUFDLG1CQUFRQSxNQUFLLHFCQUFvQjtBQUFDLGdCQUFJQyxLQUFFLG9CQUFvQkQsRUFBQyxFQUFFO0FBQU0sZ0NBQW9CQSxFQUFDLElBQUUsSUFBSSxjQUFXLG9CQUFvQkEsRUFBQyxFQUFFLFFBQU1DLElBQUUsb0JBQW9CRCxFQUFDLEVBQUUsTUFBTSxVQUFRLENBQUMsR0FBRSxvQkFBb0JBLEVBQUMsRUFBRSxTQUFTLElBQUUsQ0FBQztBQUFBLFVBQUM7QUFBQyxhQUFHO0FBQUEsUUFBQztBQUFBLE1BQUMsQ0FBQyxDQUFDO0FBQUEsSUFBQyxDQUFFO0FBQUE7QUFBQTs7O0FDQWw4NkIsd0JBQXVCOyIsCiAgIm5hbWVzIjogWyJlIiwgInQiLCAibiIsICJvIiwgImkiLCAiciIsICJzIiwgImEiLCAiYyIsICJsIiwgImYiLCAicCIsICJoIiwgInUiLCAiZCIsICJtIiwgInYiLCAiYiJdCn0K

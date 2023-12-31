/*! For license information please see app.min.js.LICENSE.txt */
(() => {
  "use strict";
  var e = function () {
    return (
      (e =
        Object.assign ||
        function (e) {
          for (var t, i = 1, s = arguments.length; i < s; i++)
            for (var n in (t = arguments[i]))
              Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
          return e;
        }),
      e.apply(this, arguments)
    );
  };
  var t = "lgAfterAppendSlide",
    i = "lgInit",
    s = "lgHasVideo",
    n = "lgContainerResize",
    o = "lgUpdateSlides",
    r = "lgAfterAppendSubHtml",
    l = "lgBeforeOpen",
    a = "lgAfterOpen",
    d = "lgSlideItemLoad",
    c = "lgBeforeSlide",
    u = "lgAfterSlide",
    g = "lgPosterClick",
    h = "lgDragStart",
    m = "lgDragMove",
    p = "lgDragEnd",
    f = "lgBeforeNextSlide",
    y = "lgBeforePrevSlide",
    v = "lgBeforeClose",
    b = "lgAfterClose",
    w = {
      mode: "lg-slide",
      easing: "ease",
      speed: 400,
      licenseKey: "0000-0000-000-0000",
      height: "100%",
      width: "100%",
      addClass: "",
      startClass: "lg-start-zoom",
      backdropDuration: 300,
      container: "",
      startAnimationDuration: 400,
      zoomFromOrigin: !0,
      hideBarsDelay: 0,
      showBarsAfter: 1e4,
      slideDelay: 0,
      supportLegacyBrowser: !0,
      allowMediaOverlap: !1,
      videoMaxSize: "1280-720",
      loadYouTubePoster: !0,
      defaultCaptionHeight: 0,
      ariaLabelledby: "",
      ariaDescribedby: "",
      resetScrollPosition: !0,
      hideScrollbar: !1,
      closable: !0,
      swipeToClose: !0,
      closeOnTap: !0,
      showCloseIcon: !0,
      showMaximizeIcon: !1,
      loop: !0,
      escKey: !0,
      keyPress: !0,
      trapFocus: !0,
      controls: !0,
      slideEndAnimation: !0,
      hideControlOnEnd: !1,
      mousewheel: !1,
      getCaptionFromTitleOrAlt: !0,
      appendSubHtmlTo: ".lg-sub-html",
      subHtmlSelectorRelative: !1,
      preload: 2,
      numberOfSlideItemsInDom: 10,
      selector: "",
      selectWithin: "",
      nextHtml: "",
      prevHtml: "",
      index: 0,
      iframeWidth: "100%",
      iframeHeight: "100%",
      iframeMaxWidth: "100%",
      iframeMaxHeight: "100%",
      download: !0,
      counter: !0,
      appendCounterTo: ".lg-toolbar",
      swipeThreshold: 50,
      enableSwipe: !0,
      enableDrag: !0,
      dynamic: !1,
      dynamicEl: [],
      extraProps: [],
      exThumbImage: "",
      isMobile: void 0,
      mobileSettings: { controls: !1, showCloseIcon: !1, download: !1 },
      plugins: [],
      strings: {
        closeGallery: "Close gallery",
        toggleMaximize: "Toggle maximize",
        previousSlide: "Previous slide",
        nextSlide: "Next slide",
        download: "Download",
        playVideo: "Play video",
        mediaLoadingFailed: "Oops... Failed to load content...",
      },
    };
  var S = (function () {
    function e(e) {
      return (
        (this.cssVenderPrefixes = [
          "TransitionDuration",
          "TransitionTimingFunction",
          "Transform",
          "Transition",
        ]),
        (this.selector = this._getSelector(e)),
        (this.firstElement = this._getFirstEl()),
        this
      );
    }
    return (
      (e.generateUUID = function () {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
          /[xy]/g,
          function (e) {
            var t = (16 * Math.random()) | 0;
            return ("x" == e ? t : (3 & t) | 8).toString(16);
          },
        );
      }),
      (e.prototype._getSelector = function (e, t) {
        return (
          void 0 === t && (t = document),
          "string" != typeof e
            ? e
            : ((t = t || document),
              "#" === e.substring(0, 1)
                ? t.querySelector(e)
                : t.querySelectorAll(e))
        );
      }),
      (e.prototype._each = function (e) {
        return this.selector
          ? (void 0 !== this.selector.length
              ? [].forEach.call(this.selector, e)
              : e(this.selector, 0),
            this)
          : this;
      }),
      (e.prototype._setCssVendorPrefix = function (e, t, i) {
        var s = t.replace(/-([a-z])/gi, function (e, t) {
          return t.toUpperCase();
        });
        -1 !== this.cssVenderPrefixes.indexOf(s)
          ? ((e.style[s.charAt(0).toLowerCase() + s.slice(1)] = i),
            (e.style["webkit" + s] = i),
            (e.style["moz" + s] = i),
            (e.style["ms" + s] = i),
            (e.style["o" + s] = i))
          : (e.style[s] = i);
      }),
      (e.prototype._getFirstEl = function () {
        return this.selector && void 0 !== this.selector.length
          ? this.selector[0]
          : this.selector;
      }),
      (e.prototype.isEventMatched = function (e, t) {
        var i = t.split(".");
        return e
          .split(".")
          .filter(function (e) {
            return e;
          })
          .every(function (e) {
            return -1 !== i.indexOf(e);
          });
      }),
      (e.prototype.attr = function (e, t) {
        return void 0 === t
          ? this.firstElement
            ? this.firstElement.getAttribute(e)
            : ""
          : (this._each(function (i) {
              i.setAttribute(e, t);
            }),
            this);
      }),
      (e.prototype.find = function (e) {
        return I(this._getSelector(e, this.selector));
      }),
      (e.prototype.first = function () {
        return this.selector && void 0 !== this.selector.length
          ? I(this.selector[0])
          : I(this.selector);
      }),
      (e.prototype.eq = function (e) {
        return I(this.selector[e]);
      }),
      (e.prototype.parent = function () {
        return I(this.selector.parentElement);
      }),
      (e.prototype.get = function () {
        return this._getFirstEl();
      }),
      (e.prototype.removeAttr = function (e) {
        var t = e.split(" ");
        return (
          this._each(function (e) {
            t.forEach(function (t) {
              return e.removeAttribute(t);
            });
          }),
          this
        );
      }),
      (e.prototype.wrap = function (e) {
        if (!this.firstElement) return this;
        var t = document.createElement("div");
        return (
          (t.className = e),
          this.firstElement.parentNode.insertBefore(t, this.firstElement),
          this.firstElement.parentNode.removeChild(this.firstElement),
          t.appendChild(this.firstElement),
          this
        );
      }),
      (e.prototype.addClass = function (e) {
        return (
          void 0 === e && (e = ""),
          this._each(function (t) {
            e.split(" ").forEach(function (e) {
              e && t.classList.add(e);
            });
          }),
          this
        );
      }),
      (e.prototype.removeClass = function (e) {
        return (
          this._each(function (t) {
            e.split(" ").forEach(function (e) {
              e && t.classList.remove(e);
            });
          }),
          this
        );
      }),
      (e.prototype.hasClass = function (e) {
        return !!this.firstElement && this.firstElement.classList.contains(e);
      }),
      (e.prototype.hasAttribute = function (e) {
        return !!this.firstElement && this.firstElement.hasAttribute(e);
      }),
      (e.prototype.toggleClass = function (e) {
        return this.firstElement
          ? (this.hasClass(e) ? this.removeClass(e) : this.addClass(e), this)
          : this;
      }),
      (e.prototype.css = function (e, t) {
        var i = this;
        return (
          this._each(function (s) {
            i._setCssVendorPrefix(s, e, t);
          }),
          this
        );
      }),
      (e.prototype.on = function (t, i) {
        var s = this;
        return this.selector
          ? (t.split(" ").forEach(function (t) {
              Array.isArray(e.eventListeners[t]) || (e.eventListeners[t] = []),
                e.eventListeners[t].push(i),
                s.selector.addEventListener(t.split(".")[0], i);
            }),
            this)
          : this;
      }),
      (e.prototype.once = function (e, t) {
        var i = this;
        return (
          this.on(e, function () {
            i.off(e), t(e);
          }),
          this
        );
      }),
      (e.prototype.off = function (t) {
        var i = this;
        return this.selector
          ? (Object.keys(e.eventListeners).forEach(function (s) {
              i.isEventMatched(t, s) &&
                (e.eventListeners[s].forEach(function (e) {
                  i.selector.removeEventListener(s.split(".")[0], e);
                }),
                (e.eventListeners[s] = []));
            }),
            this)
          : this;
      }),
      (e.prototype.trigger = function (e, t) {
        if (!this.firstElement) return this;
        var i = new CustomEvent(e.split(".")[0], { detail: t || null });
        return this.firstElement.dispatchEvent(i), this;
      }),
      (e.prototype.load = function (e) {
        var t = this;
        return (
          fetch(e)
            .then(function (e) {
              return e.text();
            })
            .then(function (e) {
              t.selector.innerHTML = e;
            }),
          this
        );
      }),
      (e.prototype.html = function (e) {
        return void 0 === e
          ? this.firstElement
            ? this.firstElement.innerHTML
            : ""
          : (this._each(function (t) {
              t.innerHTML = e;
            }),
            this);
      }),
      (e.prototype.append = function (e) {
        return (
          this._each(function (t) {
            "string" == typeof e
              ? t.insertAdjacentHTML("beforeend", e)
              : t.appendChild(e);
          }),
          this
        );
      }),
      (e.prototype.prepend = function (e) {
        return (
          this._each(function (t) {
            t.insertAdjacentHTML("afterbegin", e);
          }),
          this
        );
      }),
      (e.prototype.remove = function () {
        return (
          this._each(function (e) {
            e.parentNode.removeChild(e);
          }),
          this
        );
      }),
      (e.prototype.empty = function () {
        return (
          this._each(function (e) {
            e.innerHTML = "";
          }),
          this
        );
      }),
      (e.prototype.scrollTop = function (e) {
        return void 0 !== e
          ? ((document.body.scrollTop = e),
            (document.documentElement.scrollTop = e),
            this)
          : window.pageYOffset ||
              document.documentElement.scrollTop ||
              document.body.scrollTop ||
              0;
      }),
      (e.prototype.scrollLeft = function (e) {
        return void 0 !== e
          ? ((document.body.scrollLeft = e),
            (document.documentElement.scrollLeft = e),
            this)
          : window.pageXOffset ||
              document.documentElement.scrollLeft ||
              document.body.scrollLeft ||
              0;
      }),
      (e.prototype.offset = function () {
        if (!this.firstElement) return { left: 0, top: 0 };
        var e = this.firstElement.getBoundingClientRect(),
          t = I("body").style().marginLeft;
        return {
          left: e.left - parseFloat(t) + this.scrollLeft(),
          top: e.top + this.scrollTop(),
        };
      }),
      (e.prototype.style = function () {
        return this.firstElement
          ? this.firstElement.currentStyle ||
              window.getComputedStyle(this.firstElement)
          : {};
      }),
      (e.prototype.width = function () {
        var e = this.style();
        return (
          this.firstElement.clientWidth -
          parseFloat(e.paddingLeft) -
          parseFloat(e.paddingRight)
        );
      }),
      (e.prototype.height = function () {
        var e = this.style();
        return (
          this.firstElement.clientHeight -
          parseFloat(e.paddingTop) -
          parseFloat(e.paddingBottom)
        );
      }),
      (e.eventListeners = {}),
      e
    );
  })();
  function I(e) {
    return (
      (function () {
        if ("function" == typeof window.CustomEvent) return !1;
        window.CustomEvent = function (e, t) {
          t = t || { bubbles: !1, cancelable: !1, detail: null };
          var i = document.createEvent("CustomEvent");
          return i.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), i;
        };
      })(),
      Element.prototype.matches ||
        (Element.prototype.matches =
          Element.prototype.msMatchesSelector ||
          Element.prototype.webkitMatchesSelector),
      new S(e)
    );
  }
  var C = [
    "src",
    "sources",
    "subHtml",
    "subHtmlUrl",
    "html",
    "video",
    "poster",
    "slideName",
    "responsive",
    "srcset",
    "sizes",
    "iframe",
    "downloadUrl",
    "download",
    "width",
    "facebookShareUrl",
    "tweetText",
    "iframeTitle",
    "twitterShareUrl",
    "pinterestShareUrl",
    "pinterestText",
    "fbHtml",
    "disqusIdentifier",
    "disqusUrl",
  ];
  function x(e) {
    return "href" === e
      ? "src"
      : (e = (e =
          (e = e.replace("data-", "")).charAt(0).toLowerCase() +
          e.slice(1)).replace(/-([a-z])/g, function (e) {
          return e[1].toUpperCase();
        }));
  }
  var E = function (e, t, i, s) {
      void 0 === i && (i = 0);
      var n = I(e).attr("data-lg-size") || s;
      if (n) {
        var o = n.split(",");
        if (o[1])
          for (var r = window.innerWidth, l = 0; l < o.length; l++) {
            var a = o[l];
            if (parseInt(a.split("-")[2], 10) > r) {
              n = a;
              break;
            }
            l === o.length - 1 && (n = a);
          }
        var d = n.split("-"),
          c = parseInt(d[0], 10),
          u = parseInt(d[1], 10),
          g = t.width(),
          h = t.height() - i,
          m = Math.min(g, c),
          p = Math.min(h, u),
          f = Math.min(m / c, p / u);
        return { width: c * f, height: u * f };
      }
    },
    T = function (e, t, i, s, n) {
      if (n) {
        var o = I(e).find("img").first();
        if (o.get()) {
          var r = t.get().getBoundingClientRect(),
            l = r.width,
            a = t.height() - (i + s),
            d = o.width(),
            c = o.height(),
            u = o.style(),
            g =
              (l - d) / 2 -
              o.offset().left +
              (parseFloat(u.paddingLeft) || 0) +
              (parseFloat(u.borderLeft) || 0) +
              I(window).scrollLeft() +
              r.left,
            h =
              (a - c) / 2 -
              o.offset().top +
              (parseFloat(u.paddingTop) || 0) +
              (parseFloat(u.borderTop) || 0) +
              I(window).scrollTop() +
              i;
          return (
            "translate3d(" +
            (g *= -1) +
            "px, " +
            (h *= -1) +
            "px, 0) scale3d(" +
            d / n.width +
            ", " +
            c / n.height +
            ", 1)"
          );
        }
      }
    },
    L = function (e, t, i, s, n, o) {
      return (
        '<div class="lg-video-cont lg-has-iframe" style="width:' +
        e +
        "; max-width:" +
        i +
        "; height: " +
        t +
        "; max-height:" +
        s +
        '">\n                    <iframe class="lg-object" frameborder="0" ' +
        (o ? 'title="' + o + '"' : "") +
        ' src="' +
        n +
        '"  allowfullscreen="true"></iframe>\n                </div>'
      );
    },
    O = function (e, t, i, s, n, o) {
      var r =
          "<img " +
          i +
          " " +
          (s ? 'srcset="' + s + '"' : "") +
          "  " +
          (n ? 'sizes="' + n + '"' : "") +
          ' class="lg-object lg-image" data-index="' +
          e +
          '" src="' +
          t +
          '" />',
        l = "";
      o &&
        (l = ("string" == typeof o ? JSON.parse(o) : o).map(function (e) {
          var t = "";
          return (
            Object.keys(e).forEach(function (i) {
              t += " " + i + '="' + e[i] + '"';
            }),
            "<source " + t + "></source>"
          );
        }));
      return "" + l + r;
    },
    P = function (e) {
      for (var t = [], i = [], s = "", n = 0; n < e.length; n++) {
        var o = e[n].split(" ");
        "" === o[0] && o.splice(0, 1), i.push(o[0]), t.push(o[1]);
      }
      for (var r = window.innerWidth, l = 0; l < t.length; l++)
        if (parseInt(t[l], 10) > r) {
          s = i[l];
          break;
        }
      return s;
    },
    A = function (e) {
      return !!e && !!e.complete && 0 !== e.naturalWidth;
    },
    q = function (e, t, i, s, n) {
      return (
        '<div class="lg-video-cont ' +
        (n && n.youtube
          ? "lg-has-youtube"
          : n && n.vimeo
          ? "lg-has-vimeo"
          : "lg-has-html5") +
        '" style="' +
        i +
        '">\n                <div class="lg-video-play-button">\n                <svg\n                    viewBox="0 0 20 20"\n                    preserveAspectRatio="xMidYMid"\n                    focusable="false"\n                    aria-labelledby="' +
        s +
        '"\n                    role="img"\n                    class="lg-video-play-icon"\n                >\n                    <title>' +
        s +
        '</title>\n                    <polygon class="lg-video-play-icon-inner" points="1,0 20,10 1,20"></polygon>\n                </svg>\n                <svg class="lg-video-play-icon-bg" viewBox="0 0 50 50" focusable="false">\n                    <circle cx="50%" cy="50%" r="20"></circle></svg>\n                <svg class="lg-video-play-icon-circle" viewBox="0 0 50 50" focusable="false">\n                    <circle cx="50%" cy="50%" r="20"></circle>\n                </svg>\n            </div>\n            ' +
        (t || "") +
        '\n            <img class="lg-object lg-video-poster" src="' +
        e +
        '" />\n        </div>'
      );
    },
    M = function (e) {
      var t = e.querySelectorAll(
        'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])',
      );
      return [].filter.call(t, function (e) {
        var t = window.getComputedStyle(e);
        return "none" !== t.display && "hidden" !== t.visibility;
      });
    },
    B = function (e, t, i, s) {
      var n = [],
        o = (function () {
          for (var e = 0, t = 0, i = arguments.length; t < i; t++)
            e += arguments[t].length;
          var s = Array(e),
            n = 0;
          for (t = 0; t < i; t++)
            for (var o = arguments[t], r = 0, l = o.length; r < l; r++, n++)
              s[n] = o[r];
          return s;
        })(C, t);
      return (
        [].forEach.call(e, function (e) {
          for (var t = {}, r = 0; r < e.attributes.length; r++) {
            var l = e.attributes[r];
            if (l.specified) {
              var a = x(l.name),
                d = "";
              o.indexOf(a) > -1 && (d = a), d && (t[d] = l.value);
            }
          }
          var c = I(e),
            u = c.find("img").first().attr("alt"),
            g = c.attr("title"),
            h = s ? c.attr(s) : c.find("img").first().attr("src");
          (t.thumb = h),
            i && !t.subHtml && (t.subHtml = g || u || ""),
            (t.alt = u || g || ""),
            n.push(t);
        }),
        n
      );
    },
    D = function () {
      return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    },
    k = function (e, t, i) {
      if (!e)
        return t
          ? { html5: !0 }
          : void console.error(
              "lightGallery :- data-src is not provided on slide item " +
                (i + 1) +
                ". Please make sure the selector property is properly configured. More info - https://www.lightgalleryjs.com/demos/html-markup/",
            );
      var s = e.match(
          /\/\/(?:www\.)?youtu(?:\.be|be\.com|be-nocookie\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)([\&|?][\S]*)*/i,
        ),
        n = e.match(
          /\/\/(?:www\.)?(?:player\.)?vimeo.com\/(?:video\/)?([0-9a-z\-_]+)(.*)?/i,
        ),
        o = e.match(
          /https?:\/\/(.+)?(wistia\.com|wi\.st)\/(medias|embed)\/([0-9a-z\-_]+)(.*)/,
        );
      return s ? { youtube: s } : n ? { vimeo: n } : o ? { wistia: o } : void 0;
    },
    z = 0,
    V = (function () {
      function C(e, t) {
        if (
          ((this.lgOpened = !1),
          (this.index = 0),
          (this.plugins = []),
          (this.lGalleryOn = !1),
          (this.lgBusy = !1),
          (this.currentItemsInDom = []),
          (this.prevScrollTop = 0),
          (this.bodyPaddingRight = 0),
          (this.isDummyImageRemoved = !1),
          (this.dragOrSwipeEnabled = !1),
          (this.mediaContainerPosition = { top: 0, bottom: 0 }),
          !e)
        )
          return this;
        if (
          (z++,
          (this.lgId = z),
          (this.el = e),
          (this.LGel = I(e)),
          this.generateSettings(t),
          this.buildModules(),
          this.settings.dynamic &&
            void 0 !== this.settings.dynamicEl &&
            !Array.isArray(this.settings.dynamicEl))
        )
          throw "When using dynamic mode, you must also define dynamicEl as an Array.";
        return (
          (this.galleryItems = this.getItems()),
          this.normalizeSettings(),
          this.init(),
          this.validateLicense(),
          this
        );
      }
      return (
        (C.prototype.generateSettings = function (t) {
          if (
            ((this.settings = e(e({}, w), t)),
            this.settings.isMobile &&
            "function" == typeof this.settings.isMobile
              ? this.settings.isMobile()
              : D())
          ) {
            var i = e(
              e({}, this.settings.mobileSettings),
              this.settings.mobileSettings,
            );
            this.settings = e(e({}, this.settings), i);
          }
        }),
        (C.prototype.normalizeSettings = function () {
          this.settings.slideEndAnimation &&
            (this.settings.hideControlOnEnd = !1),
            this.settings.closable || (this.settings.swipeToClose = !1),
            (this.zoomFromOrigin = this.settings.zoomFromOrigin),
            this.settings.dynamic && (this.zoomFromOrigin = !1),
            this.settings.container ||
              (this.settings.container = document.body),
            (this.settings.preload = Math.min(
              this.settings.preload,
              this.galleryItems.length,
            ));
        }),
        (C.prototype.init = function () {
          var e = this;
          this.addSlideVideoInfo(this.galleryItems),
            this.buildStructure(),
            this.LGel.trigger(i, { instance: this }),
            this.settings.keyPress && this.keyPress(),
            setTimeout(function () {
              e.enableDrag(), e.enableSwipe(), e.triggerPosterClick();
            }, 50),
            this.arrow(),
            this.settings.mousewheel && this.mousewheel(),
            this.settings.dynamic || this.openGalleryOnItemClick();
        }),
        (C.prototype.openGalleryOnItemClick = function () {
          for (
            var e = this,
              t = function (t) {
                var s = i.items[t],
                  n = I(s),
                  o = S.generateUUID();
                n.attr("data-lg-id", o).on(
                  "click.lgcustom-item-" + o,
                  function (i) {
                    i.preventDefault();
                    var n = e.settings.index || t;
                    e.openGallery(n, s);
                  },
                );
              },
              i = this,
              s = 0;
            s < this.items.length;
            s++
          )
            t(s);
        }),
        (C.prototype.buildModules = function () {
          var e = this;
          this.settings.plugins.forEach(function (t) {
            e.plugins.push(new t(e, I));
          });
        }),
        (C.prototype.validateLicense = function () {
          this.settings.licenseKey
            ? "0000-0000-000-0000" === this.settings.licenseKey &&
              console.warn(
                "lightGallery: " +
                  this.settings.licenseKey +
                  " license key is not valid for production use",
              )
            : console.error("Please provide a valid license key");
        }),
        (C.prototype.getSlideItem = function (e) {
          return I(this.getSlideItemId(e));
        }),
        (C.prototype.getSlideItemId = function (e) {
          return "#lg-item-" + this.lgId + "-" + e;
        }),
        (C.prototype.getIdName = function (e) {
          return e + "-" + this.lgId;
        }),
        (C.prototype.getElementById = function (e) {
          return I("#" + this.getIdName(e));
        }),
        (C.prototype.manageSingleSlideClassName = function () {
          this.galleryItems.length < 2
            ? this.outer.addClass("lg-single-item")
            : this.outer.removeClass("lg-single-item");
        }),
        (C.prototype.buildStructure = function () {
          var e = this;
          if (!(this.$container && this.$container.get())) {
            var t = "",
              i = "";
            this.settings.controls &&
              (t =
                '<button type="button" id="' +
                this.getIdName("lg-prev") +
                '" aria-label="' +
                this.settings.strings.previousSlide +
                '" class="lg-prev lg-icon"> ' +
                this.settings.prevHtml +
                ' </button>\n                <button type="button" id="' +
                this.getIdName("lg-next") +
                '" aria-label="' +
                this.settings.strings.nextSlide +
                '" class="lg-next lg-icon"> ' +
                this.settings.nextHtml +
                " </button>"),
              ".lg-item" !== this.settings.appendSubHtmlTo &&
                (i =
                  '<div class="lg-sub-html" role="status" aria-live="polite"></div>');
            var s = "";
            this.settings.allowMediaOverlap && (s += "lg-media-overlap ");
            var n = this.settings.ariaLabelledby
                ? 'aria-labelledby="' + this.settings.ariaLabelledby + '"'
                : "",
              o = this.settings.ariaDescribedby
                ? 'aria-describedby="' + this.settings.ariaDescribedby + '"'
                : "",
              r =
                "lg-container " +
                this.settings.addClass +
                " " +
                (document.body !== this.settings.container ? "lg-inline" : ""),
              l =
                this.settings.closable && this.settings.showCloseIcon
                  ? '<button type="button" aria-label="' +
                    this.settings.strings.closeGallery +
                    '" id="' +
                    this.getIdName("lg-close") +
                    '" class="lg-close lg-icon"></button>'
                  : "",
              a = this.settings.showMaximizeIcon
                ? '<button type="button" aria-label="' +
                  this.settings.strings.toggleMaximize +
                  '" id="' +
                  this.getIdName("lg-maximize") +
                  '" class="lg-maximize lg-icon"></button>'
                : "",
              d =
                '\n        <div class="' +
                r +
                '" id="' +
                this.getIdName("lg-container") +
                '" tabindex="-1" aria-modal="true" ' +
                n +
                " " +
                o +
                ' role="dialog"\n        >\n            <div id="' +
                this.getIdName("lg-backdrop") +
                '" class="lg-backdrop"></div>\n\n            <div id="' +
                this.getIdName("lg-outer") +
                '" class="lg-outer lg-use-css3 lg-css3 lg-hide-items ' +
                s +
                ' ">\n\n              <div id="' +
                this.getIdName("lg-content") +
                '" class="lg-content">\n                <div id="' +
                this.getIdName("lg-inner") +
                '" class="lg-inner">\n                </div>\n                ' +
                t +
                '\n              </div>\n                <div id="' +
                this.getIdName("lg-toolbar") +
                '" class="lg-toolbar lg-group">\n                    ' +
                a +
                "\n                    " +
                l +
                "\n                    </div>\n                    " +
                (".lg-outer" === this.settings.appendSubHtmlTo ? i : "") +
                '\n                <div id="' +
                this.getIdName("lg-components") +
                '" class="lg-components">\n                    ' +
                (".lg-sub-html" === this.settings.appendSubHtmlTo ? i : "") +
                "\n                </div>\n            </div>\n        </div>\n        ";
            I(this.settings.container).append(d),
              document.body !== this.settings.container &&
                I(this.settings.container).css("position", "relative"),
              (this.outer = this.getElementById("lg-outer")),
              (this.$lgComponents = this.getElementById("lg-components")),
              (this.$backdrop = this.getElementById("lg-backdrop")),
              (this.$container = this.getElementById("lg-container")),
              (this.$inner = this.getElementById("lg-inner")),
              (this.$content = this.getElementById("lg-content")),
              (this.$toolbar = this.getElementById("lg-toolbar")),
              this.$backdrop.css(
                "transition-duration",
                this.settings.backdropDuration + "ms",
              );
            var c = this.settings.mode + " ";
            this.manageSingleSlideClassName(),
              this.settings.enableDrag && (c += "lg-grab "),
              this.outer.addClass(c),
              this.$inner.css(
                "transition-timing-function",
                this.settings.easing,
              ),
              this.$inner.css(
                "transition-duration",
                this.settings.speed + "ms",
              ),
              this.settings.download &&
                this.$toolbar.append(
                  '<a id="' +
                    this.getIdName("lg-download") +
                    '" target="_blank" rel="noopener" aria-label="' +
                    this.settings.strings.download +
                    '" download class="lg-download lg-icon"></a>',
                ),
              this.counter(),
              I(window).on(
                "resize.lg.global" +
                  this.lgId +
                  " orientationchange.lg.global" +
                  this.lgId,
                function () {
                  e.refreshOnResize();
                },
              ),
              this.hideBars(),
              this.manageCloseGallery(),
              this.toggleMaximize(),
              this.initModules();
          }
        }),
        (C.prototype.refreshOnResize = function () {
          if (this.lgOpened) {
            var e = this.galleryItems[this.index].__slideVideoInfo;
            this.mediaContainerPosition = this.getMediaContainerPosition();
            var t = this.mediaContainerPosition,
              i = t.top,
              s = t.bottom;
            if (
              ((this.currentImageSize = E(
                this.items[this.index],
                this.outer,
                i + s,
                e && this.settings.videoMaxSize,
              )),
              e && this.resizeVideoSlide(this.index, this.currentImageSize),
              this.zoomFromOrigin && !this.isDummyImageRemoved)
            ) {
              var o = this.getDummyImgStyles(this.currentImageSize);
              this.outer
                .find(".lg-current .lg-dummy-img")
                .first()
                .attr("style", o);
            }
            this.LGel.trigger(n);
          }
        }),
        (C.prototype.resizeVideoSlide = function (e, t) {
          var i = this.getVideoContStyle(t);
          this.getSlideItem(e).find(".lg-video-cont").attr("style", i);
        }),
        (C.prototype.updateSlides = function (e, t) {
          if (
            (this.index > e.length - 1 && (this.index = e.length - 1),
            1 === e.length && (this.index = 0),
            e.length)
          ) {
            var i = this.galleryItems[t].src;
            (this.galleryItems = e),
              this.updateControls(),
              this.$inner.empty(),
              (this.currentItemsInDom = []);
            var s = 0;
            this.galleryItems.some(function (e, t) {
              return e.src === i && ((s = t), !0);
            }),
              (this.currentItemsInDom = this.organizeSlideItems(s, -1)),
              this.loadContent(s, !0),
              this.getSlideItem(s).addClass("lg-current"),
              (this.index = s),
              this.updateCurrentCounter(s),
              this.LGel.trigger(o);
          } else this.closeGallery();
        }),
        (C.prototype.getItems = function () {
          if (((this.items = []), this.settings.dynamic))
            return this.settings.dynamicEl || [];
          if ("this" === this.settings.selector) this.items.push(this.el);
          else if (this.settings.selector)
            if ("string" == typeof this.settings.selector)
              if (this.settings.selectWithin) {
                var e = I(this.settings.selectWithin);
                this.items = e.find(this.settings.selector).get();
              } else
                this.items = this.el.querySelectorAll(this.settings.selector);
            else this.items = this.settings.selector;
          else this.items = this.el.children;
          return B(
            this.items,
            this.settings.extraProps,
            this.settings.getCaptionFromTitleOrAlt,
            this.settings.exThumbImage,
          );
        }),
        (C.prototype.shouldHideScrollbar = function () {
          return (
            this.settings.hideScrollbar &&
            document.body === this.settings.container
          );
        }),
        (C.prototype.hideScrollbar = function () {
          if (this.shouldHideScrollbar()) {
            this.bodyPaddingRight = parseFloat(I("body").style().paddingRight);
            var e = document.documentElement.getBoundingClientRect(),
              t = window.innerWidth - e.width;
            I(document.body).css(
              "padding-right",
              t + this.bodyPaddingRight + "px",
            ),
              I(document.body).addClass("lg-overlay-open");
          }
        }),
        (C.prototype.resetScrollBar = function () {
          this.shouldHideScrollbar() &&
            (I(document.body).css(
              "padding-right",
              this.bodyPaddingRight + "px",
            ),
            I(document.body).removeClass("lg-overlay-open"));
        }),
        (C.prototype.openGallery = function (e, t) {
          var i = this;
          if ((void 0 === e && (e = this.settings.index), !this.lgOpened)) {
            (this.lgOpened = !0),
              this.outer.removeClass("lg-hide-items"),
              this.hideScrollbar(),
              this.$container.addClass("lg-show");
            var s = this.getItemsToBeInsertedToDom(e, e);
            this.currentItemsInDom = s;
            var n = "";
            s.forEach(function (e) {
              n = n + '<div id="' + e + '" class="lg-item"></div>';
            }),
              this.$inner.append(n),
              this.addHtml(e);
            var o = "";
            this.mediaContainerPosition = this.getMediaContainerPosition();
            var r = this.mediaContainerPosition,
              d = r.top,
              c = r.bottom;
            this.settings.allowMediaOverlap ||
              this.setMediaContainerPosition(d, c);
            var u = this.galleryItems[e].__slideVideoInfo;
            this.zoomFromOrigin &&
              t &&
              ((this.currentImageSize = E(
                t,
                this.outer,
                d + c,
                u && this.settings.videoMaxSize,
              )),
              (o = T(t, this.outer, d, c, this.currentImageSize))),
              (this.zoomFromOrigin && o) ||
                (this.outer.addClass(this.settings.startClass),
                this.getSlideItem(e).removeClass("lg-complete"));
            var g = this.settings.zoomFromOrigin
              ? 100
              : this.settings.backdropDuration;
            setTimeout(function () {
              i.outer.addClass("lg-components-open");
            }, g),
              (this.index = e),
              this.LGel.trigger(l),
              this.getSlideItem(e).addClass("lg-current"),
              (this.lGalleryOn = !1),
              (this.prevScrollTop = I(window).scrollTop()),
              setTimeout(function () {
                if (i.zoomFromOrigin && o) {
                  var t = i.getSlideItem(e);
                  t.css("transform", o),
                    setTimeout(function () {
                      t
                        .addClass("lg-start-progress lg-start-end-progress")
                        .css(
                          "transition-duration",
                          i.settings.startAnimationDuration + "ms",
                        ),
                        i.outer.addClass("lg-zoom-from-image");
                    }),
                    setTimeout(function () {
                      t.css("transform", "translate3d(0, 0, 0)");
                    }, 100);
                }
                setTimeout(function () {
                  i.$backdrop.addClass("in"),
                    i.$container.addClass("lg-show-in");
                }, 10),
                  setTimeout(function () {
                    i.settings.trapFocus &&
                      document.body === i.settings.container &&
                      i.trapFocus();
                  }, i.settings.backdropDuration + 50),
                  (i.zoomFromOrigin && o) ||
                    setTimeout(function () {
                      i.outer.addClass("lg-visible");
                    }, i.settings.backdropDuration),
                  i.slide(e, !1, !1, !1),
                  i.LGel.trigger(a);
              }),
              document.body === this.settings.container &&
                I("html").addClass("lg-on");
          }
        }),
        (C.prototype.getMediaContainerPosition = function () {
          if (this.settings.allowMediaOverlap) return { top: 0, bottom: 0 };
          var e = this.$toolbar.get().clientHeight || 0,
            t = this.outer.find(".lg-components .lg-sub-html").get(),
            i =
              this.settings.defaultCaptionHeight || (t && t.clientHeight) || 0,
            s = this.outer.find(".lg-thumb-outer").get();
          return { top: e, bottom: (s ? s.clientHeight : 0) + i };
        }),
        (C.prototype.setMediaContainerPosition = function (e, t) {
          void 0 === e && (e = 0),
            void 0 === t && (t = 0),
            this.$content.css("top", e + "px").css("bottom", t + "px");
        }),
        (C.prototype.hideBars = function () {
          var e = this;
          setTimeout(function () {
            e.outer.removeClass("lg-hide-items"),
              e.settings.hideBarsDelay > 0 &&
                (e.outer.on("mousemove.lg click.lg touchstart.lg", function () {
                  e.outer.removeClass("lg-hide-items"),
                    clearTimeout(e.hideBarTimeout),
                    (e.hideBarTimeout = setTimeout(function () {
                      e.outer.addClass("lg-hide-items");
                    }, e.settings.hideBarsDelay));
                }),
                e.outer.trigger("mousemove.lg"));
          }, this.settings.showBarsAfter);
        }),
        (C.prototype.initPictureFill = function (e) {
          if (this.settings.supportLegacyBrowser)
            try {
              picturefill({ elements: [e.get()] });
            } catch (e) {
              console.warn(
                "lightGallery :- If you want srcset or picture tag to be supported for older browser please include picturefil javascript library in your document.",
              );
            }
        }),
        (C.prototype.counter = function () {
          if (this.settings.counter) {
            var e =
              '<div class="lg-counter" role="status" aria-live="polite">\n                <span id="' +
              this.getIdName("lg-counter-current") +
              '" class="lg-counter-current">' +
              (this.index + 1) +
              ' </span> /\n                <span id="' +
              this.getIdName("lg-counter-all") +
              '" class="lg-counter-all">' +
              this.galleryItems.length +
              " </span></div>";
            this.outer.find(this.settings.appendCounterTo).append(e);
          }
        }),
        (C.prototype.addHtml = function (e) {
          var t, i;
          if (
            (this.galleryItems[e].subHtmlUrl
              ? (i = this.galleryItems[e].subHtmlUrl)
              : (t = this.galleryItems[e].subHtml),
            !i)
          )
            if (t) {
              var s = t.substring(0, 1);
              ("." !== s && "#" !== s) ||
                (t =
                  this.settings.subHtmlSelectorRelative &&
                  !this.settings.dynamic
                    ? I(this.items).eq(e).find(t).first().html()
                    : I(t).first().html());
            } else t = "";
          if (".lg-item" !== this.settings.appendSubHtmlTo)
            i
              ? this.outer.find(".lg-sub-html").load(i)
              : this.outer.find(".lg-sub-html").html(t);
          else {
            var n = I(this.getSlideItemId(e));
            i
              ? n.load(i)
              : n.append('<div class="lg-sub-html">' + t + "</div>");
          }
          null != t &&
            ("" === t
              ? this.outer
                  .find(this.settings.appendSubHtmlTo)
                  .addClass("lg-empty-html")
              : this.outer
                  .find(this.settings.appendSubHtmlTo)
                  .removeClass("lg-empty-html")),
            this.LGel.trigger(r, { index: e });
        }),
        (C.prototype.preload = function (e) {
          for (
            var t = 1;
            t <= this.settings.preload && !(t >= this.galleryItems.length - e);
            t++
          )
            this.loadContent(e + t, !1);
          for (var i = 1; i <= this.settings.preload && !(e - i < 0); i++)
            this.loadContent(e - i, !1);
        }),
        (C.prototype.getDummyImgStyles = function (e) {
          return e
            ? "width:" +
                e.width +
                "px;\n                margin-left: -" +
                e.width / 2 +
                "px;\n                margin-top: -" +
                e.height / 2 +
                "px;\n                height:" +
                e.height +
                "px"
            : "";
        }),
        (C.prototype.getVideoContStyle = function (e) {
          return e
            ? "width:" +
                e.width +
                "px;\n                height:" +
                e.height +
                "px"
            : "";
        }),
        (C.prototype.getDummyImageContent = function (e, t, i) {
          var s;
          if ((this.settings.dynamic || (s = I(this.items).eq(t)), s)) {
            var n = void 0;
            if (
              !(n = this.settings.exThumbImage
                ? s.attr(this.settings.exThumbImage)
                : s.find("img").first().attr("src"))
            )
              return "";
            var o =
              "<img " +
              i +
              ' style="' +
              this.getDummyImgStyles(this.currentImageSize) +
              '" class="lg-dummy-img" src="' +
              n +
              '" />';
            return (
              e.addClass("lg-first-slide"),
              this.outer.addClass("lg-first-slide-loading"),
              o
            );
          }
          return "";
        }),
        (C.prototype.setImgMarkup = function (e, t, i) {
          var s = this.galleryItems[i],
            n = s.alt,
            o = s.srcset,
            r = s.sizes,
            l = s.sources,
            a = n ? 'alt="' + n + '"' : "",
            d =
              '<picture class="lg-img-wrap"> ' +
              (this.isFirstSlideWithZoomAnimation()
                ? this.getDummyImageContent(t, i, a)
                : O(i, e, a, o, r, l)) +
              "</picture>";
          t.prepend(d);
        }),
        (C.prototype.onSlideObjectLoad = function (e, t, i, s) {
          var n = e.find(".lg-object").first();
          A(n.get()) || t
            ? i()
            : (n.on("load.lg error.lg", function () {
                i && i();
              }),
              n.on("error.lg", function () {
                s && s();
              }));
        }),
        (C.prototype.onLgObjectLoad = function (e, t, i, s, n, o) {
          var r = this;
          this.onSlideObjectLoad(
            e,
            o,
            function () {
              r.triggerSlideItemLoad(e, t, i, s, n);
            },
            function () {
              e.addClass("lg-complete lg-complete_"),
                e.html(
                  '<span class="lg-error-msg">' +
                    r.settings.strings.mediaLoadingFailed +
                    "</span>",
                );
            },
          );
        }),
        (C.prototype.triggerSlideItemLoad = function (e, t, i, s, n) {
          var o = this,
            r = this.galleryItems[t],
            l = n && "video" === this.getSlideType(r) && !r.poster ? s : 0;
          setTimeout(function () {
            e.addClass("lg-complete lg-complete_"),
              o.LGel.trigger(d, { index: t, delay: i || 0, isFirstSlide: n });
          }, l);
        }),
        (C.prototype.isFirstSlideWithZoomAnimation = function () {
          return !(
            this.lGalleryOn ||
            !this.zoomFromOrigin ||
            !this.currentImageSize
          );
        }),
        (C.prototype.addSlideVideoInfo = function (e) {
          var t = this;
          e.forEach(function (e, i) {
            (e.__slideVideoInfo = k(e.src, !!e.video, i)),
              e.__slideVideoInfo &&
                t.settings.loadYouTubePoster &&
                !e.poster &&
                e.__slideVideoInfo.youtube &&
                (e.poster =
                  "//img.youtube.com/vi/" +
                  e.__slideVideoInfo.youtube[1] +
                  "/maxresdefault.jpg");
          });
        }),
        (C.prototype.loadContent = function (e, i) {
          var n = this,
            o = this.galleryItems[e],
            r = I(this.getSlideItemId(e)),
            l = o.poster,
            a = o.srcset,
            d = o.sizes,
            c = o.sources,
            u = o.src,
            g = o.video,
            h = g && "string" == typeof g ? JSON.parse(g) : g;
          if (o.responsive) {
            var m = o.responsive.split(",");
            u = P(m) || u;
          }
          var p = o.__slideVideoInfo,
            f = "",
            y = !!o.iframe,
            v = !this.lGalleryOn,
            b = 0;
          if (
            (v &&
              (b =
                this.zoomFromOrigin && this.currentImageSize
                  ? this.settings.startAnimationDuration + 10
                  : this.settings.backdropDuration + 10),
            !r.hasClass("lg-loaded"))
          ) {
            if (p) {
              var w = this.mediaContainerPosition,
                S = w.top,
                C = w.bottom,
                x = E(
                  this.items[e],
                  this.outer,
                  S + C,
                  p && this.settings.videoMaxSize,
                );
              f = this.getVideoContStyle(x);
            }
            if (y) {
              var T = L(
                this.settings.iframeWidth,
                this.settings.iframeHeight,
                this.settings.iframeMaxWidth,
                this.settings.iframeMaxHeight,
                u,
                o.iframeTitle,
              );
              r.prepend(T);
            } else if (l) {
              var A = "";
              v &&
                this.zoomFromOrigin &&
                this.currentImageSize &&
                (A = this.getDummyImageContent(r, e, ""));
              T = q(l, A || "", f, this.settings.strings.playVideo, p);
              r.prepend(T);
            } else if (p) {
              T = '<div class="lg-video-cont " style="' + f + '"></div>';
              r.prepend(T);
            } else if ((this.setImgMarkup(u, r, e), a || c)) {
              var M = r.find(".lg-object");
              this.initPictureFill(M);
            }
            (l || p) &&
              this.LGel.trigger(s, {
                index: e,
                src: u,
                html5Video: h,
                hasPoster: !!l,
              }),
              this.LGel.trigger(t, { index: e }),
              this.lGalleryOn &&
                ".lg-item" === this.settings.appendSubHtmlTo &&
                this.addHtml(e);
          }
          var B = 0;
          b && !I(document.body).hasClass("lg-from-hash") && (B = b),
            this.isFirstSlideWithZoomAnimation() &&
              (setTimeout(function () {
                r.removeClass(
                  "lg-start-end-progress lg-start-progress",
                ).removeAttr("style");
              }, this.settings.startAnimationDuration + 100),
              r.hasClass("lg-loaded") ||
                setTimeout(function () {
                  if ("image" === n.getSlideType(o)) {
                    var t = o.alt,
                      i = t ? 'alt="' + t + '"' : "";
                    if (
                      (r
                        .find(".lg-img-wrap")
                        .append(O(e, u, i, a, d, o.sources)),
                      a || c)
                    ) {
                      var s = r.find(".lg-object");
                      n.initPictureFill(s);
                    }
                  }
                  ("image" === n.getSlideType(o) ||
                    ("video" === n.getSlideType(o) && l)) &&
                    (n.onLgObjectLoad(r, e, b, B, !0, !1),
                    n.onSlideObjectLoad(
                      r,
                      !(!p || !p.html5 || l),
                      function () {
                        n.loadContentOnFirstSlideLoad(e, r, B);
                      },
                      function () {
                        n.loadContentOnFirstSlideLoad(e, r, B);
                      },
                    ));
                }, this.settings.startAnimationDuration + 100)),
            r.addClass("lg-loaded"),
            (this.isFirstSlideWithZoomAnimation() &&
              ("video" !== this.getSlideType(o) || l)) ||
              this.onLgObjectLoad(r, e, b, B, v, !(!p || !p.html5 || l)),
            (this.zoomFromOrigin && this.currentImageSize) ||
              !r.hasClass("lg-complete_") ||
              this.lGalleryOn ||
              setTimeout(function () {
                r.addClass("lg-complete");
              }, this.settings.backdropDuration),
            (this.lGalleryOn = !0),
            !0 === i &&
              (r.hasClass("lg-complete_")
                ? this.preload(e)
                : r
                    .find(".lg-object")
                    .first()
                    .on("load.lg error.lg", function () {
                      n.preload(e);
                    }));
        }),
        (C.prototype.loadContentOnFirstSlideLoad = function (e, t, i) {
          var s = this;
          setTimeout(function () {
            t.find(".lg-dummy-img").remove(),
              t.removeClass("lg-first-slide"),
              s.outer.removeClass("lg-first-slide-loading"),
              (s.isDummyImageRemoved = !0),
              s.preload(e);
          }, i + 300);
        }),
        (C.prototype.getItemsToBeInsertedToDom = function (e, t, i) {
          var s = this;
          void 0 === i && (i = 0);
          var n = [],
            o = Math.max(i, 3);
          o = Math.min(o, this.galleryItems.length);
          var r = "lg-item-" + this.lgId + "-" + t;
          if (this.galleryItems.length <= 3)
            return (
              this.galleryItems.forEach(function (e, t) {
                n.push("lg-item-" + s.lgId + "-" + t);
              }),
              n
            );
          if (e < (this.galleryItems.length - 1) / 2) {
            for (var l = e; l > e - o / 2 && l >= 0; l--)
              n.push("lg-item-" + this.lgId + "-" + l);
            var a = n.length;
            for (l = 0; l < o - a; l++)
              n.push("lg-item-" + this.lgId + "-" + (e + l + 1));
          } else {
            for (l = e; l <= this.galleryItems.length - 1 && l < e + o / 2; l++)
              n.push("lg-item-" + this.lgId + "-" + l);
            for (a = n.length, l = 0; l < o - a; l++)
              n.push("lg-item-" + this.lgId + "-" + (e - l - 1));
          }
          return (
            this.settings.loop &&
              (e === this.galleryItems.length - 1
                ? n.push("lg-item-" + this.lgId + "-0")
                : 0 === e &&
                  n.push(
                    "lg-item-" +
                      this.lgId +
                      "-" +
                      (this.galleryItems.length - 1),
                  )),
            -1 === n.indexOf(r) && n.push("lg-item-" + this.lgId + "-" + t),
            n
          );
        }),
        (C.prototype.organizeSlideItems = function (e, t) {
          var i = this,
            s = this.getItemsToBeInsertedToDom(
              e,
              t,
              this.settings.numberOfSlideItemsInDom,
            );
          return (
            s.forEach(function (e) {
              -1 === i.currentItemsInDom.indexOf(e) &&
                i.$inner.append('<div id="' + e + '" class="lg-item"></div>');
            }),
            this.currentItemsInDom.forEach(function (e) {
              -1 === s.indexOf(e) && I("#" + e).remove();
            }),
            s
          );
        }),
        (C.prototype.getPreviousSlideIndex = function () {
          var e = 0;
          try {
            var t = this.outer.find(".lg-current").first().attr("id");
            e = parseInt(t.split("-")[3]) || 0;
          } catch (t) {
            e = 0;
          }
          return e;
        }),
        (C.prototype.setDownloadValue = function (e) {
          if (this.settings.download) {
            var t = this.galleryItems[e];
            if (!1 === t.downloadUrl || "false" === t.downloadUrl)
              this.outer.addClass("lg-hide-download");
            else {
              var i = this.getElementById("lg-download");
              this.outer.removeClass("lg-hide-download"),
                i.attr("href", t.downloadUrl || t.src),
                t.download && i.attr("download", t.download);
            }
          }
        }),
        (C.prototype.makeSlideAnimation = function (e, t, i) {
          var s = this;
          this.lGalleryOn && i.addClass("lg-slide-progress"),
            setTimeout(
              function () {
                s.outer.addClass("lg-no-trans"),
                  s.outer
                    .find(".lg-item")
                    .removeClass("lg-prev-slide lg-next-slide"),
                  "prev" === e
                    ? (t.addClass("lg-prev-slide"), i.addClass("lg-next-slide"))
                    : (t.addClass("lg-next-slide"),
                      i.addClass("lg-prev-slide")),
                  setTimeout(function () {
                    s.outer.find(".lg-item").removeClass("lg-current"),
                      t.addClass("lg-current"),
                      s.outer.removeClass("lg-no-trans");
                  }, 50);
              },
              this.lGalleryOn ? this.settings.slideDelay : 0,
            );
        }),
        (C.prototype.slide = function (e, t, i, s) {
          var n = this,
            o = this.getPreviousSlideIndex();
          if (
            ((this.currentItemsInDom = this.organizeSlideItems(e, o)),
            !this.lGalleryOn || o !== e)
          ) {
            var r = this.galleryItems.length;
            if (!this.lgBusy) {
              this.settings.counter && this.updateCurrentCounter(e);
              var l = this.getSlideItem(e),
                a = this.getSlideItem(o),
                d = this.galleryItems[e],
                g = d.__slideVideoInfo;
              if (
                (this.outer.attr("data-lg-slide-type", this.getSlideType(d)),
                this.setDownloadValue(e),
                g)
              ) {
                var h = this.mediaContainerPosition,
                  m = h.top,
                  p = h.bottom,
                  f = E(
                    this.items[e],
                    this.outer,
                    m + p,
                    g && this.settings.videoMaxSize,
                  );
                this.resizeVideoSlide(e, f);
              }
              if (
                (this.LGel.trigger(c, {
                  prevIndex: o,
                  index: e,
                  fromTouch: !!t,
                  fromThumb: !!i,
                }),
                (this.lgBusy = !0),
                clearTimeout(this.hideBarTimeout),
                this.arrowDisable(e),
                s || (e < o ? (s = "prev") : e > o && (s = "next")),
                t)
              ) {
                this.outer
                  .find(".lg-item")
                  .removeClass("lg-prev-slide lg-current lg-next-slide");
                var y = void 0,
                  v = void 0;
                r > 2
                  ? ((y = e - 1),
                    (v = e + 1),
                    ((0 === e && o === r - 1) || (e === r - 1 && 0 === o)) &&
                      ((v = 0), (y = r - 1)))
                  : ((y = 0), (v = 1)),
                  "prev" === s
                    ? this.getSlideItem(v).addClass("lg-next-slide")
                    : this.getSlideItem(y).addClass("lg-prev-slide"),
                  l.addClass("lg-current");
              } else this.makeSlideAnimation(s, l, a);
              this.lGalleryOn
                ? setTimeout(
                    function () {
                      n.loadContent(e, !0),
                        ".lg-item" !== n.settings.appendSubHtmlTo &&
                          n.addHtml(e);
                    },
                    this.settings.speed +
                      50 +
                      (t ? 0 : this.settings.slideDelay),
                  )
                : this.loadContent(e, !0),
                setTimeout(
                  function () {
                    (n.lgBusy = !1),
                      a.removeClass("lg-slide-progress"),
                      n.LGel.trigger(u, {
                        prevIndex: o,
                        index: e,
                        fromTouch: t,
                        fromThumb: i,
                      });
                  },
                  (this.lGalleryOn ? this.settings.speed + 100 : 100) +
                    (t ? 0 : this.settings.slideDelay),
                );
            }
            this.index = e;
          }
        }),
        (C.prototype.updateCurrentCounter = function (e) {
          this.getElementById("lg-counter-current").html(e + 1 + "");
        }),
        (C.prototype.updateCounterTotal = function () {
          this.getElementById("lg-counter-all").html(
            this.galleryItems.length + "",
          );
        }),
        (C.prototype.getSlideType = function (e) {
          return e.__slideVideoInfo ? "video" : e.iframe ? "iframe" : "image";
        }),
        (C.prototype.touchMove = function (e, t, i) {
          var s = t.pageX - e.pageX,
            n = t.pageY - e.pageY,
            o = !1;
          if (
            (this.swipeDirection
              ? (o = !0)
              : Math.abs(s) > 15
              ? ((this.swipeDirection = "horizontal"), (o = !0))
              : Math.abs(n) > 15 &&
                ((this.swipeDirection = "vertical"), (o = !0)),
            o)
          ) {
            var r = this.getSlideItem(this.index);
            if ("horizontal" === this.swipeDirection) {
              null == i || i.preventDefault(),
                this.outer.addClass("lg-dragging"),
                this.setTranslate(r, s, 0);
              var l = r.get().offsetWidth,
                a = (15 * l) / 100 - Math.abs((10 * s) / 100);
              this.setTranslate(
                this.outer.find(".lg-prev-slide").first(),
                -l + s - a,
                0,
              ),
                this.setTranslate(
                  this.outer.find(".lg-next-slide").first(),
                  l + s + a,
                  0,
                );
            } else if (
              "vertical" === this.swipeDirection &&
              this.settings.swipeToClose
            ) {
              null == i || i.preventDefault(),
                this.$container.addClass("lg-dragging-vertical");
              var d = 1 - Math.abs(n) / window.innerHeight;
              this.$backdrop.css("opacity", d);
              var c = 1 - Math.abs(n) / (2 * window.innerWidth);
              this.setTranslate(r, 0, n, c, c),
                Math.abs(n) > 100 &&
                  this.outer
                    .addClass("lg-hide-items")
                    .removeClass("lg-components-open");
            }
          }
        }),
        (C.prototype.touchEnd = function (e, t, i) {
          var s,
            n = this;
          "lg-slide" !== this.settings.mode && this.outer.addClass("lg-slide"),
            setTimeout(function () {
              n.$container.removeClass("lg-dragging-vertical"),
                n.outer
                  .removeClass("lg-dragging lg-hide-items")
                  .addClass("lg-components-open");
              var o = !0;
              if ("horizontal" === n.swipeDirection) {
                s = e.pageX - t.pageX;
                var r = Math.abs(e.pageX - t.pageX);
                s < 0 && r > n.settings.swipeThreshold
                  ? (n.goToNextSlide(!0), (o = !1))
                  : s > 0 &&
                    r > n.settings.swipeThreshold &&
                    (n.goToPrevSlide(!0), (o = !1));
              } else if ("vertical" === n.swipeDirection) {
                if (
                  ((s = Math.abs(e.pageY - t.pageY)),
                  n.settings.closable && n.settings.swipeToClose && s > 100)
                )
                  return void n.closeGallery();
                n.$backdrop.css("opacity", 1);
              }
              if (
                (n.outer.find(".lg-item").removeAttr("style"),
                o && Math.abs(e.pageX - t.pageX) < 5)
              ) {
                var l = I(i.target);
                n.isPosterElement(l) && n.LGel.trigger(g);
              }
              n.swipeDirection = void 0;
            }),
            setTimeout(function () {
              n.outer.hasClass("lg-dragging") ||
                "lg-slide" === n.settings.mode ||
                n.outer.removeClass("lg-slide");
            }, this.settings.speed + 100);
        }),
        (C.prototype.enableSwipe = function () {
          var e = this,
            t = {},
            i = {},
            s = !1,
            n = !1;
          this.settings.enableSwipe &&
            (this.$inner.on("touchstart.lg", function (i) {
              e.dragOrSwipeEnabled = !0;
              var s = e.getSlideItem(e.index);
              (!I(i.target).hasClass("lg-item") &&
                !s.get().contains(i.target)) ||
                e.outer.hasClass("lg-zoomed") ||
                e.lgBusy ||
                1 !== i.touches.length ||
                ((n = !0),
                (e.touchAction = "swipe"),
                e.manageSwipeClass(),
                (t = { pageX: i.touches[0].pageX, pageY: i.touches[0].pageY }));
            }),
            this.$inner.on("touchmove.lg", function (o) {
              n &&
                "swipe" === e.touchAction &&
                1 === o.touches.length &&
                ((i = { pageX: o.touches[0].pageX, pageY: o.touches[0].pageY }),
                e.touchMove(t, i, o),
                (s = !0));
            }),
            this.$inner.on("touchend.lg", function (o) {
              if ("swipe" === e.touchAction) {
                if (s) (s = !1), e.touchEnd(i, t, o);
                else if (n) {
                  var r = I(o.target);
                  e.isPosterElement(r) && e.LGel.trigger(g);
                }
                (e.touchAction = void 0), (n = !1);
              }
            }));
        }),
        (C.prototype.enableDrag = function () {
          var e = this,
            t = {},
            i = {},
            s = !1,
            n = !1;
          this.settings.enableDrag &&
            (this.outer.on("mousedown.lg", function (i) {
              e.dragOrSwipeEnabled = !0;
              var n = e.getSlideItem(e.index);
              (I(i.target).hasClass("lg-item") || n.get().contains(i.target)) &&
                (e.outer.hasClass("lg-zoomed") ||
                  e.lgBusy ||
                  (i.preventDefault(),
                  e.lgBusy ||
                    (e.manageSwipeClass(),
                    (t = { pageX: i.pageX, pageY: i.pageY }),
                    (s = !0),
                    (e.outer.get().scrollLeft += 1),
                    (e.outer.get().scrollLeft -= 1),
                    e.outer.removeClass("lg-grab").addClass("lg-grabbing"),
                    e.LGel.trigger(h))));
            }),
            I(window).on("mousemove.lg.global" + this.lgId, function (o) {
              s &&
                e.lgOpened &&
                ((n = !0),
                (i = { pageX: o.pageX, pageY: o.pageY }),
                e.touchMove(t, i),
                e.LGel.trigger(m));
            }),
            I(window).on("mouseup.lg.global" + this.lgId, function (o) {
              if (e.lgOpened) {
                var r = I(o.target);
                n
                  ? ((n = !1), e.touchEnd(i, t, o), e.LGel.trigger(p))
                  : e.isPosterElement(r) && e.LGel.trigger(g),
                  s &&
                    ((s = !1),
                    e.outer.removeClass("lg-grabbing").addClass("lg-grab"));
              }
            }));
        }),
        (C.prototype.triggerPosterClick = function () {
          var e = this;
          this.$inner.on("click.lg", function (t) {
            !e.dragOrSwipeEnabled &&
              e.isPosterElement(I(t.target)) &&
              e.LGel.trigger(g);
          });
        }),
        (C.prototype.manageSwipeClass = function () {
          var e = this.index + 1,
            t = this.index - 1;
          this.settings.loop &&
            this.galleryItems.length > 2 &&
            (0 === this.index
              ? (t = this.galleryItems.length - 1)
              : this.index === this.galleryItems.length - 1 && (e = 0)),
            this.outer
              .find(".lg-item")
              .removeClass("lg-next-slide lg-prev-slide"),
            t > -1 && this.getSlideItem(t).addClass("lg-prev-slide"),
            this.getSlideItem(e).addClass("lg-next-slide");
        }),
        (C.prototype.goToNextSlide = function (e) {
          var t = this,
            i = this.settings.loop;
          e && this.galleryItems.length < 3 && (i = !1),
            this.lgBusy ||
              (this.index + 1 < this.galleryItems.length
                ? (this.index++,
                  this.LGel.trigger(f, { index: this.index }),
                  this.slide(this.index, !!e, !1, "next"))
                : i
                ? ((this.index = 0),
                  this.LGel.trigger(f, { index: this.index }),
                  this.slide(this.index, !!e, !1, "next"))
                : this.settings.slideEndAnimation &&
                  !e &&
                  (this.outer.addClass("lg-right-end"),
                  setTimeout(function () {
                    t.outer.removeClass("lg-right-end");
                  }, 400)));
        }),
        (C.prototype.goToPrevSlide = function (e) {
          var t = this,
            i = this.settings.loop;
          e && this.galleryItems.length < 3 && (i = !1),
            this.lgBusy ||
              (this.index > 0
                ? (this.index--,
                  this.LGel.trigger(y, { index: this.index, fromTouch: e }),
                  this.slide(this.index, !!e, !1, "prev"))
                : i
                ? ((this.index = this.galleryItems.length - 1),
                  this.LGel.trigger(y, { index: this.index, fromTouch: e }),
                  this.slide(this.index, !!e, !1, "prev"))
                : this.settings.slideEndAnimation &&
                  !e &&
                  (this.outer.addClass("lg-left-end"),
                  setTimeout(function () {
                    t.outer.removeClass("lg-left-end");
                  }, 400)));
        }),
        (C.prototype.keyPress = function () {
          var e = this;
          I(window).on("keydown.lg.global" + this.lgId, function (t) {
            e.lgOpened &&
              !0 === e.settings.escKey &&
              27 === t.keyCode &&
              (t.preventDefault(),
              e.settings.allowMediaOverlap &&
              e.outer.hasClass("lg-can-toggle") &&
              e.outer.hasClass("lg-components-open")
                ? e.outer.removeClass("lg-components-open")
                : e.closeGallery()),
              e.lgOpened &&
                e.galleryItems.length > 1 &&
                (37 === t.keyCode && (t.preventDefault(), e.goToPrevSlide()),
                39 === t.keyCode && (t.preventDefault(), e.goToNextSlide()));
          });
        }),
        (C.prototype.arrow = function () {
          var e = this;
          this.getElementById("lg-prev").on("click.lg", function () {
            e.goToPrevSlide();
          }),
            this.getElementById("lg-next").on("click.lg", function () {
              e.goToNextSlide();
            });
        }),
        (C.prototype.arrowDisable = function (e) {
          if (!this.settings.loop && this.settings.hideControlOnEnd) {
            var t = this.getElementById("lg-prev"),
              i = this.getElementById("lg-next");
            e + 1 === this.galleryItems.length
              ? i.attr("disabled", "disabled").addClass("disabled")
              : i.removeAttr("disabled").removeClass("disabled"),
              0 === e
                ? t.attr("disabled", "disabled").addClass("disabled")
                : t.removeAttr("disabled").removeClass("disabled");
          }
        }),
        (C.prototype.setTranslate = function (e, t, i, s, n) {
          void 0 === s && (s = 1),
            void 0 === n && (n = 1),
            e.css(
              "transform",
              "translate3d(" +
                t +
                "px, " +
                i +
                "px, 0px) scale3d(" +
                s +
                ", " +
                n +
                ", 1)",
            );
        }),
        (C.prototype.mousewheel = function () {
          var e = this,
            t = 0;
          this.outer.on("wheel.lg", function (i) {
            if (i.deltaY && !(e.galleryItems.length < 2)) {
              i.preventDefault();
              var s = new Date().getTime();
              s - t < 1e3 ||
                ((t = s),
                i.deltaY > 0
                  ? e.goToNextSlide()
                  : i.deltaY < 0 && e.goToPrevSlide());
            }
          });
        }),
        (C.prototype.isSlideElement = function (e) {
          return (
            e.hasClass("lg-outer") ||
            e.hasClass("lg-item") ||
            e.hasClass("lg-img-wrap")
          );
        }),
        (C.prototype.isPosterElement = function (e) {
          var t = this.getSlideItem(this.index)
            .find(".lg-video-play-button")
            .get();
          return (
            e.hasClass("lg-video-poster") ||
            e.hasClass("lg-video-play-button") ||
            (t && t.contains(e.get()))
          );
        }),
        (C.prototype.toggleMaximize = function () {
          var e = this;
          this.getElementById("lg-maximize").on("click.lg", function () {
            e.$container.toggleClass("lg-inline"), e.refreshOnResize();
          });
        }),
        (C.prototype.invalidateItems = function () {
          for (var e = 0; e < this.items.length; e++) {
            var t = I(this.items[e]);
            t.off("click.lgcustom-item-" + t.attr("data-lg-id"));
          }
        }),
        (C.prototype.trapFocus = function () {
          var e = this;
          this.$container.get().focus({ preventScroll: !0 }),
            I(window).on("keydown.lg.global" + this.lgId, function (t) {
              if (e.lgOpened && ("Tab" === t.key || 9 === t.keyCode)) {
                var i = M(e.$container.get()),
                  s = i[0],
                  n = i[i.length - 1];
                t.shiftKey
                  ? document.activeElement === s &&
                    (n.focus(), t.preventDefault())
                  : document.activeElement === n &&
                    (s.focus(), t.preventDefault());
              }
            });
        }),
        (C.prototype.manageCloseGallery = function () {
          var e = this;
          if (this.settings.closable) {
            var t = !1;
            this.getElementById("lg-close").on("click.lg", function () {
              e.closeGallery();
            }),
              this.settings.closeOnTap &&
                (this.outer.on("mousedown.lg", function (i) {
                  var s = I(i.target);
                  t = !!e.isSlideElement(s);
                }),
                this.outer.on("mousemove.lg", function () {
                  t = !1;
                }),
                this.outer.on("mouseup.lg", function (i) {
                  var s = I(i.target);
                  e.isSlideElement(s) &&
                    t &&
                    (e.outer.hasClass("lg-dragging") || e.closeGallery());
                }));
          }
        }),
        (C.prototype.closeGallery = function (e) {
          var t = this;
          if (!this.lgOpened || (!this.settings.closable && !e)) return 0;
          this.LGel.trigger(v),
            this.settings.resetScrollPosition &&
              !this.settings.hideScrollbar &&
              I(window).scrollTop(this.prevScrollTop);
          var i,
            s = this.items[this.index];
          if (this.zoomFromOrigin && s) {
            var n = this.mediaContainerPosition,
              o = n.top,
              r = n.bottom,
              l = this.galleryItems[this.index],
              a = l.__slideVideoInfo,
              d = l.poster,
              c = E(s, this.outer, o + r, a && d && this.settings.videoMaxSize);
            i = T(s, this.outer, o, r, c);
          }
          this.zoomFromOrigin && i
            ? (this.outer.addClass("lg-closing lg-zoom-from-image"),
              this.getSlideItem(this.index)
                .addClass("lg-start-end-progress")
                .css(
                  "transition-duration",
                  this.settings.startAnimationDuration + "ms",
                )
                .css("transform", i))
            : (this.outer.addClass("lg-hide-items"),
              this.outer.removeClass("lg-zoom-from-image")),
            this.destroyModules(),
            (this.lGalleryOn = !1),
            (this.isDummyImageRemoved = !1),
            (this.zoomFromOrigin = this.settings.zoomFromOrigin),
            clearTimeout(this.hideBarTimeout),
            (this.hideBarTimeout = !1),
            I("html").removeClass("lg-on"),
            this.outer.removeClass("lg-visible lg-components-open"),
            this.$backdrop.removeClass("in").css("opacity", 0);
          var u =
            this.zoomFromOrigin && i
              ? Math.max(
                  this.settings.startAnimationDuration,
                  this.settings.backdropDuration,
                )
              : this.settings.backdropDuration;
          return (
            this.$container.removeClass("lg-show-in"),
            setTimeout(function () {
              t.zoomFromOrigin &&
                i &&
                t.outer.removeClass("lg-zoom-from-image"),
                t.$container.removeClass("lg-show"),
                t.resetScrollBar(),
                t.$backdrop
                  .removeAttr("style")
                  .css(
                    "transition-duration",
                    t.settings.backdropDuration + "ms",
                  ),
                t.outer.removeClass("lg-closing " + t.settings.startClass),
                t.getSlideItem(t.index).removeClass("lg-start-end-progress"),
                t.$inner.empty(),
                t.lgOpened && t.LGel.trigger(b, { instance: t }),
                t.$container.get() && t.$container.get().blur(),
                (t.lgOpened = !1);
            }, u + 100),
            u + 100
          );
        }),
        (C.prototype.initModules = function () {
          this.plugins.forEach(function (e) {
            try {
              e.init();
            } catch (e) {
              console.warn(
                "lightGallery:- make sure lightGallery module is properly initiated",
              );
            }
          });
        }),
        (C.prototype.destroyModules = function (e) {
          this.plugins.forEach(function (t) {
            try {
              e ? t.destroy() : t.closeGallery && t.closeGallery();
            } catch (e) {
              console.warn(
                "lightGallery:- make sure lightGallery module is properly destroyed",
              );
            }
          });
        }),
        (C.prototype.refresh = function (e) {
          this.settings.dynamic || this.invalidateItems(),
            (this.galleryItems = e || this.getItems()),
            this.updateControls(),
            this.openGalleryOnItemClick(),
            this.LGel.trigger(o);
        }),
        (C.prototype.updateControls = function () {
          this.addSlideVideoInfo(this.galleryItems),
            this.updateCounterTotal(),
            this.manageSingleSlideClassName();
        }),
        (C.prototype.destroyGallery = function () {
          this.destroyModules(!0),
            this.settings.dynamic || this.invalidateItems(),
            I(window).off(".lg.global" + this.lgId),
            this.LGel.off(".lg"),
            this.$container.remove();
        }),
        (C.prototype.destroy = function () {
          var e = this.closeGallery(!0);
          return (
            e
              ? setTimeout(this.destroyGallery.bind(this), e)
              : this.destroyGallery(),
            e
          );
        }),
        C
      );
    })();
  const _ = function (e, t) {
      return new V(e, t);
    },
    H = document.querySelectorAll("[data-gallery]");
  H.length &&
    H.forEach((e) => {
      _(e, { licenseKey: "7EC452A9-0CFD441C-BD984C7C-17C8456E", speed: 500 });
    }),
    (window.FLS = !0),
    $(function () {
      if (null !== document.querySelector(".dropdown-item")) {
        const t = document.querySelectorAll(".dropdown-item"),
          i = document.querySelectorAll(".dropdown-list-info");
        t.forEach((e, s) => {
          e.addEventListener("click", () => {
            return (
              (e = s),
              i.forEach((t, i) => {
                (t.style.position = i === e ? "relative" : "absolute"),
                  (t.style.visibility = i === e ? "visible" : "hidden"),
                  (t.style.opacity = i === e ? "1" : "0"),
                  (t.style.transition = i === e ? "ease 1s" : "ease 0s");
              }),
              void t.forEach((t, i) => {
                t.classList.toggle("active", i === e);
              })
            );
            var e;
          });
        });
      }
      if (null !== document.querySelectorAll(".element-animation2")) {
        function s(e) {
          e.forEach((e) => {
            e.isIntersecting
              ? e.target.classList.add("_active")
              : e.target.classList.remove("_active");
          });
        }
        let n = new IntersectionObserver(s, { threshold: [0.7] }),
          o = document.querySelectorAll(".element-animation2");
        for (let r of o) n.observe(r);
      }
      if (null !== document.querySelectorAll(".element-animation3")) {
        function l(e) {
          e.forEach((e) => {
            e.isIntersecting
              ? e.target.classList.add("_active")
              : e.target.classList.remove("_active");
          });
        }
        let a = new IntersectionObserver(l, { threshold: [0] }),
          d = document.querySelectorAll(".element-animation3");
        for (let c of d) a.observe(c);
      }
      if (null !== document.querySelector(".btn-important-info")) {
        const u = document.querySelectorAll(".btn-important-info"),
          g = document.querySelectorAll(".important-info_content");
        u.forEach((e, t) => {
          e.addEventListener("click", () => {
            return (
              (e = t),
              g.forEach((t, i) => {
                (t.style.position = i === e ? "relative" : "absolute"),
                  (t.style.visibility = i === e ? "visible" : "hidden"),
                  (t.style.opacity = i === e ? "1" : "0"),
                  (t.style.transition = i === e ? "ease 1s" : "ease 0s");
              }),
              void u.forEach((t, i) => {
                t.classList.toggle("active", i === e);
              })
            );
            var e;
          });
        });
      }
      if (
        null !== document.querySelectorAll(".scroll") &&
        document.documentElement.clientWidth > 1200
      ) {
        function h() {
          const e = document.querySelectorAll(".scroll"),
            t = new IntersectionObserver(
              (e) => {
                e.forEach((e) => {
                  if (
                    e.isIntersecting &&
                    !e.target.classList.contains("visible")
                  ) {
                    e.target.classList.add("visible");
                    const i = e.target.offsetHeight - window.innerHeight,
                      s = e.target.offsetTop + i;
                    window.scrollTo({ top: s, behavior: "smooth" }),
                      setTimeout(() => {
                        e.target.classList.remove("visible"),
                          t.unobserve(e.target);
                      }, 5e3);
                  }
                });
              },
              { threshold: 0.6 },
            );
          e.forEach((e) => {
            t.observe(e);
          });
        }
        h(), window.addEventListener("scroll", h);
      }
      if (
        (null !== document.querySelector(".main-carousel") &&
          $(".main-carousel").flickity({ draggable: !0 }),
        null !== document.querySelector(".myEvent-Home-swiper"))
      ) {
        if (
          document
            .querySelector(".myEvent-Home-swiper2")
            .classList.contains("autoplay")
        ) {
          var e = new Swiper(".myEvent-Home-swiper", {
            spaceBetween: 11,
            freeMode: !0,
            watchSlidesProgress: !0,
            breakpoints: {
              300: { slidesPerView: 1.5 },
              390: { slidesPerView: 2.2 },
              768: { slidesPerView: 3 },
              1268: { slidesPerView: 5 },
              1600: { slidesPerView: 6.5 },
            },
          });
          new Swiper(".myEvent-Home-swiper2", {
            spaceBetween: 10,
            allowTouchMove: !1,
            autoplay: { delay: 5e3, disableOnInteraction: !1 },
            thumbs: { swiper: e },
          });
        } else
          (e = new Swiper(".myEvent-Home-swiper", {
            spaceBetween: 11,
            freeMode: !0,
            watchSlidesProgress: !0,
            breakpoints: {
              300: { slidesPerView: 1.5 },
              390: { slidesPerView: 2.2 },
              768: { slidesPerView: 3 },
              1268: { slidesPerView: 5 },
              1600: { slidesPerView: 6.5 },
            },
          })),
            new Swiper(".myEvent-Home-swiper2", {
              spaceBetween: 10,
              allowTouchMove: !1,
              thumbs: { swiper: e },
            });
      }
      if (null !== document.querySelector(".mySwiper-facebook-swiper"))
        e = new Swiper(".mySwiper-facebook-swiper", {
          spaceBetween: 12,
          initialSlide: 2,
          effect: "slide",
          speed: 1e4,
          simulateTouch: !0,
          autoplay: { delay: 0, disableOnInteraction: !1 },
          freeMode: { enabled: !0 },
          navigation: {
            nextEl: ".swiper-button-next-facebook-swiper",
            prevEl: ".swiper-button-prev-facebook-swiper",
          },
          loop: !0,
          breakpoints: {
            300: { slidesPerView: 1.5 },
            390: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1268: { slidesPerView: 3.5 },
            1600: { slidesPerView: 4 },
          },
        });
      if (null !== document.querySelector(".mySwiper-youtube-swiper"))
        e = new Swiper(".mySwiper-youtube-swiper", {
          spaceBetween: 12,
          navigation: {
            nextEl: ".swiper-button-next-youtube-swiper",
            prevEl: ".swiper-button-prev-youtube-swiper",
          },
          loop: !0,
          effect: "slide",
          speed: 1e4,
          simulateTouch: !0,
          autoplay: { delay: 0, disableOnInteraction: !1 },
          freeMode: { enabled: !0 },
          breakpoints: {
            300: { slidesPerView: 1.5 },
            390: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1268: { slidesPerView: 3.5 },
            1600: { slidesPerView: 4 },
          },
        });
      if (null !== document.querySelector(".mySwiper-youtube-nof-swiper"))
        e = new Swiper(".mySwiper-youtube-nof-swiper", {
          spaceBetween: 12,
          initialSlide: 2,
          navigation: {
            nextEl: ".swiper-button-next-youtube-nof-swiper",
            prevEl: ".swiper-button-prev-youtube-nof-swiper",
          },
          loop: !0,
          effect: "slide",
          speed: 1e4,
          simulateTouch: !0,
          autoplay: { delay: 0, disableOnInteraction: !1 },
          freeMode: { enabled: !0 },
          breakpoints: {
            300: { slidesPerView: 1.5 },
            390: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1268: { slidesPerView: 3.5 },
            1600: { slidesPerView: 4 },
          },
        });
      if (null !== document.querySelector(".myHome-swiper"))
        (e = new Swiper(".myHome-swiper", {
          spaceBetween: 11,
          autoHeight: !0,
          freeMode: !0,
          watchSlidesProgress: !0,
          breakpoints: {
            300: { slidesPerView: 1.5 },
            390: { slidesPerView: 2.2 },
            768: { slidesPerView: 3 },
            1268: { slidesPerView: 5 },
            1600: { slidesPerView: 6.5 },
          },
        })),
          new Swiper(".myHome-swiper2", {
            spaceBetween: 10,
            allowTouchMove: !1,
            autoHeight: !0,
            autoplay: { delay: 5e3, disableOnInteraction: !1 },
            thumbs: { swiper: e },
          });
      if (null !== document.querySelector(".mySwiperPartners"))
        e = new Swiper(".mySwiperPartners", {
          loop: !0,
          centeredSlides: !0,
          autoHeight: !0,
          initialSlide: 2,
          autoplay: { delay: 5e3, disableOnInteraction: !1 },
          navigation: {
            nextEl: ".swiper-button-next-partners",
            prevEl: ".swiper-button-prev-partners",
          },
          breakpoints: {
            320: { slidesPerView: 1.5, spaceBetween: 0 },
            520: { slidesPerView: 2, spaceBetween: 0 },
            650: { slidesPerView: 2.5, spaceBetween: 0 },
            768: { slidesPerView: 3.5, spaceBetween: 0 },
            1e3: { spaceBetween: 0, slidesPerView: 4.5 },
            1268: { spaceBetween: 0, slidesPerView: 5.5 },
            1600: { spaceBetween: 0, slidesPerView: 6.5 },
          },
        });
      if (null !== document.querySelector(".mySwiper-gallery"))
        (e = new Swiper(".mySwiper-gallery", {
          centeredSlides: !0,
          speed: 700,
          loop: !0,
          allowTouchMove: !1,
          watchSlidesProgress: !0,
          breakpoints: {
            380: { slidesPerView: 1.2 },
            520: { slidesPerView: 1.4 },
            768: { slidesPerView: 1.8 },
            1080: { slidesPerView: 2.2 },
            1300: { slidesPerView: 2.2 },
          },
          navigation: {
            nextEl: ".swiper-button-next-mySwiper",
            prevEl: ".swiper-button-prev-mySwiper",
          },
        })),
          (e = new Swiper(".mySwiper2-gallery", {
            loop: !0,
            speed: 700,
            allowTouchMove: !1,
            navigation: {
              nextEl: ".swiper-button-next-mySwiper",
              prevEl: ".swiper-button-prev-mySwiper",
            },
            thumbs: { swiper: e },
          }));
      if (null !== document.querySelector(".mySwiperEvents"))
        e = new Swiper(".mySwiperEvents", {
          centeredSlides: !0,
          initialSlide: 1,
          loop: !0,
          effect: "slide",
          speed: 1e3,
          simulateTouch: !0,
          autoplay: { delay: 5e3, disableOnInteraction: !1 },
          freeMode: { enabled: !0 },
          navigation: {
            nextEl: ".swiper-button-next-mySwiperEvents",
            prevEl: ".swiper-button-prev-mySwiperEvents",
          },
          breakpoints: {
            320: { slidesPerView: 1.5 },
            390: { slidesPerView: 2 },
            768: { slidesPerView: 2 },
            1268: { slidesPerView: 2.5 },
            1600: { slidesPerView: 3 },
          },
        });
      if (null !== document.querySelector(".odometer0")) {
        function m() {
          if (
            document.querySelector(".odometer0").classList.contains("_active")
          ) {
            const e = document.querySelector(".odometer0");
            new Odometer({ el: e, value: 0, format: "d" }).update(
              e.getAttribute("data-value"),
            );
          } else {
            const e = document.querySelector(".odometer0");
            new Odometer({ el: e, value: 0, format: "d" }).update(0);
          }
        }
        setInterval(m, 100);
      }
      if (null !== document.querySelector(".odometer1")) {
        function p() {
          if (
            document.querySelector(".odometer1").classList.contains("_active")
          ) {
            const e = document.querySelector(".odometer1");
            new Odometer({ el: e, value: 0, format: "d" }).update(
              e.getAttribute("data-value"),
            );
          } else {
            const e = document.querySelector(".odometer1");
            new Odometer({ el: e, value: 0, format: "d" }).update(0);
          }
        }
        setInterval(p, 100);
      }
      if (null !== document.querySelector(".odometer2")) {
        function f() {
          if (
            document.querySelector(".odometer2").classList.contains("_active")
          ) {
            const e = document.querySelector(".odometer2");
            new Odometer({ el: e, value: 0, format: "d" }).update(
              e.getAttribute("data-value"),
            );
          } else {
            const e = document.querySelector(".odometer2");
            new Odometer({ el: e, value: 0, format: "d" }).update(0);
          }
        }
        setInterval(f, 100);
      }
      if (null !== document.querySelector(".odometer3")) {
        function y() {
          if (
            document.querySelector(".odometer3").classList.contains("_active")
          ) {
            const e = document.querySelector(".odometer3");
            new Odometer({ el: e, value: 0, format: "d" }).update(
              e.getAttribute("data-value"),
            );
          } else {
            const e = document.querySelector(".odometer3");
            new Odometer({ el: e, value: 0, format: "d" }).update(0);
          }
        }
        setInterval(y, 100);
      }
      if (null !== document.querySelector(".odometer4")) {
        function v() {
          if (
            document.querySelector(".odometer4").classList.contains("_active")
          ) {
            const e = document.querySelector(".odometer4");
            new Odometer({ el: e, value: 0, format: "d" }).update(
              e.getAttribute("data-value"),
            );
          } else {
            const e = document.querySelector(".odometer4");
            new Odometer({ el: e, value: 0, format: "d" }).update(0);
          }
        }
        setInterval(v, 100);
      }
      if (null !== document.querySelector(".hamburgermenu")) {
        const b = document.querySelector(".nav-list"),
          w = document.querySelector(".hamburgermenu");
        function S() {
          window.addEventListener("scroll", function () {
            window.scrollY >= 200
              ? w.classList.add("bg")
              : w.classList.remove("bg");
          });
        }
        w.addEventListener("click", function () {
          w.classList.toggle("open"), b.classList.toggle("active");
        }),
          S();
      }
      if (null !== document.querySelector(".slot-machine5")) {
        const I = setInterval(C, 100);
        function C() {
          document
            .querySelector(".slot-machine5")
            .classList.contains("_active") && (x(), clearInterval(I));
        }
        function x() {
          const e = document.getElementById("number-date-13").textContent,
            t = document.getElementById("number-date-23").textContent,
            i = document.getElementById("number-date-33").textContent,
            s = document.getElementById("number-date-43").textContent;
          var n,
            o = 2500,
            r = 700,
            l = [],
            a = [],
            d = (4444).toString(),
            c = [],
            u = [
              ["1", e, "3", "4", "5", "6", "7", "8", "9", "0"],
              ["1", t, "2", "4", "5", "6", "7", "8", "9", "0"],
              ["1", i, "2", "3", "4", "5", "7", "8", "9", "0"],
              ["1", s, "2", "3", "4", "5", "7", "8", "9", "0"],
              [],
            ],
            g = document.querySelectorAll(".reel5");
          function h(e) {
            n || (n = e);
            for (var t = e - n || 0, i = 0; i < 5; ++i)
              g[i].scrollTop =
                ((l[i] / o / 2) * (o - t) * (o - t) + c[i]) % r | 0;
            t < o ? requestAnimationFrame(h) : (n = void 0);
          }
          !(function () {
            for (var e = 0; e < g.length; e++)
              g[e].innerHTML =
                '<div class="reel5-holder"><p>' +
                u[e].join("</p><p>") +
                '</p></div><div class="reel5-holder"><p>' +
                u[e].join("</p><p>") +
                '</p></div><div class="reel5-door">0</div>';
            document.querySelectorAll(".reel5-door").forEach(function (e) {
              e.style.display = "none";
            }),
              (e = 0);
            for (var t = d.length; e < t; e += 1) {
              var i = (parseInt(0 | +d.charAt(e)) * r) / 10 - (r / 10) * 2;
              c[e] = i >= 0 ? i : r - r / 10;
            }
            for (var s = 0; s < 5; ++s)
              (l[s] = Math.random() + 0.7),
                (a[s] = (((10 * Math.random()) | 0) * r) / 10);
            h();
          })();
        }
      }
      if (null !== document.querySelector(".slot-machine4")) {
        const E = setInterval(T, 100);
        function T() {
          document
            .querySelector(".slot-machine4")
            .classList.contains("_active") && (L(), clearInterval(E));
        }
        function L() {
          const e = document.getElementById("number-date-12").textContent,
            t = document.getElementById("number-date-22").textContent,
            i = document.getElementById("number-date-32").textContent;
          var s,
            n = 2500,
            o = 700,
            r = [],
            l = [],
            a = (444).toString(),
            d = [],
            c = [
              ["1", e, "3", "4", "5", "6", "7", "8", "9", "0"],
              ["1", t, "2", "4", "5", "6", "7", "8", "9", "0"],
              ["1", i, "2", "3", "4", "5", "7", "8", "9", "0"],
              [],
            ],
            u = document.querySelectorAll(".reel4");
          function g(e) {
            s || (s = e);
            for (var t = e - s || 0, i = 0; i < 4; ++i)
              u[i].scrollTop =
                ((r[i] / n / 2) * (n - t) * (n - t) + d[i]) % o | 0;
            t < n ? requestAnimationFrame(g) : (s = void 0);
          }
          !(function () {
            for (var e = 0; e < u.length; e++)
              u[e].innerHTML =
                '<div class="reel4-holder"><p>' +
                c[e].join("</p><p>") +
                '</p></div><div class="reel4-holder"><p>' +
                c[e].join("</p><p>") +
                '</p></div><div class="reel4-door">0</div>';
            document.querySelectorAll(".reel4-door").forEach(function (e) {
              e.style.display = "none";
            }),
              (e = 0);
            for (var t = a.length; e < t; e += 1) {
              var i = (parseInt(0 | +a.charAt(e)) * o) / 10 - (o / 10) * 2;
              d[e] = i >= 0 ? i : o - o / 10;
            }
            for (var s = 0; s < 4; ++s)
              (r[s] = Math.random() + 0.7),
                (l[s] = (((10 * Math.random()) | 0) * o) / 10);
            g();
          })();
        }
      }
      if (null !== document.querySelector(".slot-machine3")) {
        const O = setInterval(P, 100);
        function P() {
          document
            .querySelector(".slot-machine3")
            .classList.contains("_active") && (A(), clearInterval(O));
        }
        function A() {
          const e = document.getElementById("number-date-1").textContent,
            t = document.getElementById("number-date-2").textContent;
          var i,
            s = 2500,
            n = 700,
            o = [],
            r = [],
            l = (44).toString(),
            a = [],
            d = [
              ["1", e, "3", "4", "5", "6", "7", "8", "9", "0"],
              ["1", t, "2", "4", "5", "6", "7", "8", "9", "0"],
              [],
            ],
            c = document.querySelectorAll(".reel3");
          function u(e) {
            i || (i = e);
            for (var t = e - i || 0, r = 0; r < 3; ++r)
              c[r].scrollTop =
                ((o[r] / s / 2) * (s - t) * (s - t) + a[r]) % n | 0;
            t < s ? requestAnimationFrame(u) : (i = void 0);
          }
          !(function () {
            for (var e = 0; e < c.length; e++)
              c[e].innerHTML =
                '<div class="reel3-holder"><p>' +
                d[e].join("</p><p>") +
                '</p></div><div class="reel3-holder"><p>' +
                d[e].join("</p><p>") +
                '</p></div><div class="reel3-door">0</div>';
            document.querySelectorAll(".reel3-door").forEach(function (e) {
              e.style.display = "none";
            }),
              (e = 0);
            for (var t = l.length; e < t; e += 1) {
              var i = (parseInt(0 | +l.charAt(e)) * n) / 10 - (n / 10) * 2;
              a[e] = i >= 0 ? i : n - n / 10;
            }
            for (var s = 0; s < 3; ++s)
              (o[s] = Math.random() + 0.7),
                (r[s] = (((10 * Math.random()) | 0) * n) / 10);
            u();
          })();
        }
      }
      if (null !== document.querySelector(".slot-machine")) {
        const q = setInterval(M, 100);
        function M() {
          document
            .querySelector(".slot-machine")
            .classList.contains("_active") && (B(), clearInterval(q));
        }
        function B() {
          const e = document.getElementById("myNumber1").textContent;
          var t,
            i = 3500,
            s = 700,
            n = [],
            o = [],
            r = (2).toString(),
            l = [],
            a = [["1", e, "3", "4", "5", "6", "7", "8", "9", "0"], []],
            d = document.querySelectorAll(".reel");
          function c(e) {
            t || (t = e);
            for (var o = e - t || 0, r = 0; r < 2; ++r)
              d[r].scrollTop =
                ((n[r] / i / 2) * (i - o) * (i - o) + l[r]) % s | 0;
            o < i ? requestAnimationFrame(c) : (t = void 0);
          }
          !(function () {
            for (var e = 0; e < d.length; e++)
              d[e].innerHTML =
                '<div class="reel-holder"><p>' +
                a[e].join("</p><p>") +
                '</p></div><div class="reel-holder"><p>' +
                a[e].join("</p><p>") +
                '</p></div><div class="reel-door">0</div>';
            document.querySelectorAll(".reel-door").forEach(function (e) {
              e.style.display = "none";
            }),
              (e = 0);
            for (var t = r.length; e < t; e += 1) {
              var i = (parseInt(0 | +r.charAt(e)) * s) / 10 - (s / 10) * 2;
              l[e] = i >= 0 ? i : s - s / 10;
            }
            for (var u = 0; u < 2; ++u)
              (n[u] = Math.random() + 0.7),
                (o[u] = (((10 * Math.random()) | 0) * s) / 10);
            c();
          })();
        }
      }
      if (null !== document.querySelector(".main_rise12")) {
        const D = setInterval(k, 100);
        function k() {
          document
            .querySelector(".slot-machine2")
            .classList.contains("_active") && (z(), clearInterval(D));
        }
        function z() {
          const e = document.getElementById("number-date-1").textContent,
            t = document.getElementById("number-date-2").textContent,
            i = document.getElementById("number-date-3").textContent,
            s = document.getElementById("number-date-4").textContent,
            n = document.getElementById("number-date-5").textContent,
            o = document.getElementById("number-date-6").textContent,
            r = document.getElementById("number-date-7").textContent,
            l = document.getElementById("number-date-8").textContent;
          var a,
            d = 2500,
            c = 700,
            u = [],
            g = [],
            h = (22222222).toString(),
            m = [],
            p = [
              ["1", e, "3", "4", "5", "6", "7", "8", "9", "0"],
              ["1", t, "2", "4", "5", "6", "7", "8", "9", "0"],
              ["1", i, "2", "3", "4", "5", "7", "8", "9", "0"],
              ["1", s, "3", "4", "5", "6", "7", "8", "9", "0"],
              ["1", n, "2", "4", "5", "6", "7", "8", "9", "0"],
              ["1", o, "2", "3", "4", "5", "7", "8", "9", "0"],
              ["1", r, "3", "4", "5", "6", "7", "8", "9", "0"],
              ["1", l, "2", "3", "4", "5", "7", "8", "9", "0"],
            ],
            f = document.querySelectorAll(".reel2");
          function y(e) {
            a || (a = e);
            for (var t = e - a || 0, i = 0; i < 8; ++i)
              f[i].scrollTop =
                ((u[i] / d / 2) * (d - t) * (d - t) + m[i]) % c | 0;
            t < d ? requestAnimationFrame(y) : (a = void 0);
          }
          !(function () {
            for (var e = 0; e < f.length; e++)
              f[e].innerHTML =
                '<div class="reel2-holder"><p>' +
                p[e].join("</p><p>") +
                '</p></div><div class="reel2-holder"><p>' +
                p[e].join("</p><p>") +
                '</p></div><div class="reel2-door">0</div>';
            document.querySelectorAll(".reel2-door").forEach(function (e) {
              e.style.display = "none";
            }),
              (e = 0);
            for (var t = h.length; e < t; e += 1) {
              var i = (parseInt(0 | +h.charAt(e)) * c) / 10 - (c / 10) * 2;
              m[e] = i >= 0 ? i : c - c / 10;
            }
            for (var s = 0; s < 8; ++s)
              (u[s] = Math.random() + 0.7),
                (g[s] = (((10 * Math.random()) | 0) * c) / 10);
            y();
          })();
        }
      }
      if (null !== document.querySelector(".btn-team")) {
        const V = document.querySelectorAll(".btn-team"),
          _ = document.querySelectorAll(".team_content");
        V.forEach((e, t) => {
          e.addEventListener("click", () => {
            return (
              (e = t),
              _.forEach((t, i) => {
                (t.style.position = i === e ? "relative" : "absolute"),
                  (t.style.visibility = i === e ? "visible" : "hidden"),
                  (t.style.opacity = i === e ? "1" : "0"),
                  (t.style.transition = i === e ? "ease 1s" : "ease 0s");
              }),
              void V.forEach((t, i) => {
                t.classList.toggle("active", i === e);
              })
            );
            var e;
          });
        });
      }
      if (null !== document.querySelector(".main_video")) {
        if (
          (window.innerWidth ||
            document.documentElement.clientWidth ||
            document.body.clientWidth) > 768
        ) {
          gsap.registerPlugin(ScrollTrigger),
            gsap.defaults({ ease: "none", duration: 1 });
          let H = gsap.timeline({ defaults: { duration: 30 }, paused: !0 });
          H.from(".video_title", {
            scale: 1,
            x: "150%",
            duration: 18,
            ease: Power1.easeInOut,
          }),
            H.to(".video_title", {
              y: "20.35%",
              x: "-42.6%",
              fontSize: "10000px",
              ease: "none",
              duration: 10,
            }),
            H.from(".video_circle", { r: "0%", ease: "none", duration: 1 }),
            H.to(".video_circle", { r: "100%", ease: "none", duration: 1 }),
            ScrollTrigger.create({
              animation: H,
              trigger: ".main_video",
              start: "top top",
              end: "400%",
              scrub: 1,
              pin: !0,
            });
        }
      }
      if (null !== document.getElementById("video")) {
        const G =
            window.innerWidth ||
            document.documentElement.clientWidth ||
            document.body.clientWidth,
          F = document.getElementById("video");
        (F.style.width = "auto"), (F.style.height = "100%");
        F.getBBox().width < G
          ? ((F.style.width = "100%"), (F.style.height = "auto"))
          : ((F.style.width = "auto"), (F.style.height = "100%"));
      }
      if (null !== document.querySelector(".mySwiper2-gallery")) {
        const N =
            window.innerWidth ||
            document.documentElement.clientWidth ||
            document.body.clientWidth,
          j = document.querySelector(".mySwiper-gallery"),
          W = document.querySelector(".mySwiper2-gallery"),
          R = j.querySelector(".swiper-slide-active"),
          Y = R.offsetWidth - 10,
          U = R.offsetHeight;
        (W.style.width = `${Y}px`),
          (W.style.height = `${U}px`),
          gsap.registerPlugin(ScrollTrigger),
          gsap.defaults({ ease: "none", duration: 1 });
        let X = gsap.timeline({ defaults: { duration: 10 }, paused: !0 });
        N <= 768
          ? X.from(".mySwiper2-gallery", {
              marginTop: "20vh",
              width: "100%",
              height: "100%",
              borderRadius: "0px",
              duration: 5,
              ease: Power1.easeInOut,
            })
          : X.from(".mySwiper2-gallery", {
              width: "100%",
              height: "100%",
              borderRadius: "0px",
              duration: 5,
              ease: Power1.easeInOut,
            }),
          X.from(".mySwiper-gallery", {
            opacity: 0,
            duration: 5,
            ease: Power1.easeInOut,
          }),
          ScrollTrigger.create({
            animation: X,
            trigger: ".main_gallery",
            start: "top top",
            end: "200%",
            scrub: 1,
            pin: !0,
          });
      }
      if (null !== document.querySelector(".selLabel")) {
        const K = document.querySelector(".selLabel"),
          Z = document.querySelector(".dropdown"),
          J = document.querySelector(".cd-dropdown"),
          Q = document.querySelectorAll(".dropdown-list li");
        K.addEventListener("click", function () {
          Z.classList.toggle("active");
        }),
          Q.forEach(function (e) {
            e.addEventListener("click", function () {
              (K.textContent = e.textContent),
                (J.value = e.textContent),
                Z.classList.remove("active");
            });
          });
      }
      if (null !== document.querySelector(".events-cart")) {
        function ee() {
          let e = document.querySelectorAll(".events-cart").length,
            t = 6;
          document.querySelectorAll(".events-cart").forEach(function (e) {
            e.classList.add("d-none");
          }),
            document
              .querySelectorAll(".events-cart:nth-child(-n+" + t + ")")
              .forEach(function (e) {
                e.classList.remove("d-none");
              }),
            document
              .querySelector(".btn-more1")
              .addEventListener("click", function (i) {
                i.preventDefault(),
                  (t = t + 3 <= e ? t + 3 : e),
                  setTimeout(
                    function () {
                      document
                        .querySelectorAll(
                          ".events-cart:nth-child(-n+" + t + ")",
                        )
                        .forEach(function (e) {
                          e.classList.remove("d-none");
                        }),
                        document.querySelectorAll(".events-cart:not(.d-none)")
                          .length == e && this.parentNode.removeChild(this);
                    }.bind(this),
                    500,
                  );
              });
        }
        ee();
      }
      if (null !== document.querySelector(".external-events-cart")) {
        function te() {
          let e = document.querySelectorAll(".external-events-cart").length,
            t = 6;
          document
            .querySelectorAll(".external-events-cart")
            .forEach(function (e) {
              e.classList.add("d-none");
            }),
            document
              .querySelectorAll(".external-events-cart:nth-child(-n+" + t + ")")
              .forEach(function (e) {
                e.classList.remove("d-none");
              }),
            document
              .querySelector(".btn-more2")
              .addEventListener("click", function (i) {
                i.preventDefault(),
                  (t = t + 3 <= e ? t + 3 : e),
                  setTimeout(
                    function () {
                      document
                        .querySelectorAll(
                          ".external-events-cart:nth-child(-n+" + t + ")",
                        )
                        .forEach(function (e) {
                          e.classList.remove("d-none");
                        }),
                        document.querySelectorAll(
                          ".external-events-cart:not(.d-none)",
                        ).length == e && this.parentNode.removeChild(this);
                    }.bind(this),
                    500,
                  );
              });
        }
        te();
      }
      setTimeout(() => {
        let e = new IntersectionObserver(
            function (e) {
              e.forEach((e) => {
                e.isIntersecting && e.target.classList.add("_active");
              });
            },
            { threshold: [0.5] },
          ),
          t = document.querySelectorAll(".element-animation");
        for (let i of t) e.observe(i);
      }, 1e3);
    });
})();

!(function (t) {
    Math.abs, Math.max, Math.min;
    var e = Math.round;
    function i(t) {
        var e = document.createElement("div");
        return e.setAttribute("data-tag", t), e;
    }
    function o(t, e, i) {
        return i < t ? t : i > e ? e : i;
    }
    function h(t, e, i) {
        for (var o in t) {
            t[o].style[e] = i;
        }
    }
    function l(t, e, i) {
        t.style[e] = i;
    }
    function n(t, e) {
        for (var i in t) {
            t[i].classList.add(e);
        }
    }
    function r(t, e, i) {
        t.addEventListener(e, i);
    }
    function p(t, e) {
        for (var i in t) {
            var o = t[i];
            e.appendChild(o);
        }
    }
    function d(t, e) {
        e.appendChild(t);
    }
    function f(t) {
        var e = t.getBoundingClientRect(),
            i = x();
        return { top: e.top + i.top, left: e.left + i.left, width: e.right - e.left, height: e.bottom - e.top };
    }
    function x() {
        return { top: t.scrollY || t.scrollTop || document.getElementsByTagName("html")[0].scrollTop, left: t.scrollX || t.scrollLeft || document.getElementsByTagName("html")[0].scrollLeft };
    }
    t.scrollY || t.scrollTop || document.getElementsByTagName("html")[0].scrollTop;
    t.lAreaSelector = function (t, s) {
        var m,
            g = (function (t, e) {
                for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
                return t;
            })({ classPrefix: "areaselect", zIndex: 100, onSelectChange: function () {} }, s),
            a = !1,
            c = document.getElementById(t),
            u = 10,
            y = i("box"),
            w = i("area"),
            b = { left: i("left"), right: i("right"), top: i("top"), bottom: i("bottom") },
            v = {
                "left-top": i("left-top"),
                "mid-top": i("mid-top"),
                "right-top": i("right-top"),
                "mid-left": i("mid-left"),
                "mid-right": i("mid-right"),
                "left-bottom": i("left-bottom"),
                "mid-bottom": i("mid-bottom"),
                "right-bottom": i("right-bottom"),
            },
            z = { x1: 0, y1: 0, x2: 0, y2: 0, width: 0, height: 0 },
            E = "",
            S = { x: 0, y: 0 };
        function T() {
            return z;
        }
        function I(t, e, i, h) {
            return (z.x1 = o(0, m.width, t)), (z.y1 = o(0, m.height, e)), (z.x2 = o(t, m.width, t + i)), (z.y2 = o(e, m.height, e + h)), (z.width = z.x2 - z.x1), (z.height = z.y2 - z.y1), A(), z;
        }
        function L(t) {
            return t.toElement.hasAttribute("data-tag") && (E = t.toElement.getAttribute("data-tag")), t.preventDefault(), t.stopPropagation(), !0;
        }
        function P(t) {
            E = "area";
            var e = x(),
                i = t.clientX + e.left - m.left,
                o = t.clientY + e.top - m.top;
            (S.x = i), (S.y = o);
        }
        function B(t) {
            console.log("mouse:" + E);
            var e = x(),
                i = T(),
                h = t.clientX + e.left - m.left,
                l = t.clientY + e.top - m.top;
            if ("area" == E) I((n = o(0, m.width - i.width, i.x1 + h - S.x)), (r = o(0, m.height - i.height, i.y1 + l - S.y)), i.width, i.height), (S.x = h), (S.y = l);
            else if ("left-top" == E) I((n = o(0, i.x2 - u, h - u / 2)), (r = o(0, i.y2 - u, l - u / 2)), i.x2 - n, i.y2 - r);
            else if ("mid-top" == E) I((n = i.x1), (r = o(0, i.y2 - u, l - u / 2)), i.x2 - n, i.y2 - r);
            else if ("right-top" == E) I((n = i.x1), (r = o(0, i.y2 - u, l - u / 2)), (p = o(i.x1 + u, m.width, h + u / 2)) - n, (d = i.y2) - r);
            else if ("mid-left" == E) I((n = o(0, i.x2 - u, h - u / 2)), (r = i.y1), (p = i.x2) - n, (d = i.y2) - r);
            else if ("mid-right" == E) I((n = i.x1), (r = i.y1), (p = o(i.x1 + u, m.width, h + u / 2)) - n, (d = i.y2) - r);
            else if ("left-bottom" == E) I((n = o(0, i.x2 - u, h - u / 2)), (r = i.y1), (p = i.x2) - n, (d = o(i.y1 + u, m.height, l + u / 2)) - r);
            else if ("mid-bottom" == E) {
                var n, r;
                I((n = i.x1), (r = i.y1), (p = i.x2) - n, (d = o(i.y1 + u, m.height, l + u / 2)) - r);
            } else if ("right-bottom" == E) {
                var p = o(i.x1 + u, m.width, h + u / 2),
                    d = o(i.y1 + u, m.height, l + u / 2);
                I(i.x1, i.y1, p - i.x1, d - i.y1);
            }
        }
        function C(t) {
            E = "";
        }
        function A() {
            (m = f(c)),
                l(y, "top", m.top + "px"),
                l(y, "left", m.left + "px"),
                l(y, "width", m.width + "px"),
                l(y, "height", m.height + "px"),
                l(w, "top", z.y1 + "px"),
                l(w, "left", z.x1 + "px"),
                l(w, "width", z.width + "px"),
                l(w, "height", z.height + "px"),
                l(v["left-top"], "top", "0px"),
                l(v["left-top"], "left", "0px"),
                l(v["mid-top"], "top", "0px"),
                l(v["mid-top"], "left", e(z.width / 2 - u / 2) + "px"),
                l(v["right-top"], "top", "0px"),
                l(v["right-top"], "left", z.width - u + "px"),
                l(v["mid-left"], "top", e(z.height / 2 - u / 2) + "px"),
                l(v["mid-left"], "left", "0px"),
                l(v["mid-right"], "top", e(z.height / 2 - u / 2) + "px"),
                l(v["mid-right"], "left", z.width - u + "px"),
                l(v["left-bottom"], "top", e(z.height - u) + "px"),
                l(v["left-bottom"], "left", "0px"),
                l(v["mid-bottom"], "top", e(z.height - u) + "px"),
                l(v["mid-bottom"], "left", e(z.width / 2 - u / 2) + "px"),
                l(v["right-bottom"], "top", e(z.height - u) + "px"),
                l(v["right-bottom"], "left", z.width - u + "px"),
                l(b.left, "top", "0px"),
                l(b.left, "left", "0px"),
                l(b.left, "width", z.x1 + "px"),
                l(b.left, "height", m.height + "px"),
                l(b.right, "top", "0px"),
                l(b.right, "left", z.x2 + "px"),
                l(b.right, "width", m.width - z.x2 + "px"),
                l(b.right, "height", m.height + "px"),
                l(b.top, "top", "0px"),
                l(b.top, "left", z.x1 + "px"),
                l(b.top, "width", z.width + "px"),
                l(b.top, "height", z.y1 + "px"),
                l(b.bottom, "top", z.y2 + "px"),
                l(b.bottom, "left", z.x1 + "px"),
                l(b.bottom, "width", z.width + "px"),
                l(b.bottom, "height", m.height - z.y2 + "px"),
                g.onSelectChange(T());
        }
        (this.hide = function () {
            y.style.display = "none";
        }),
            (this.show = function () {
                var t, e;
                (y.style.display = "block"),
                    a ||
                        ((m = f(c)),
                        (z.x1 = o(0, m.width, 15)),
                        (z.y1 = o(0, m.height, 15)),
                        (z.x2 = o(z.x1, m.width, m.width - 15)),
                        (z.y2 = o(z.y1, m.height, m.height - 15)),
                        (z.width = z.x2 - z.x1),
                        (z.height = z.y2 - z.x1),
                        p(v, w),
                        d(w, y),
                        p(b, y),
                        d(y, document.querySelector("body")),
                        n(v, g.classPrefix + "-handle"),
                        h(v, "position", "absolute"),
                        h(v, "fontSize", 0),
                        h(v, "zIndex", g.zIndex + 1 || 1),
                        h(v, "width", "10px"),
                        h(v, "height", "10px"),
                        l(v["left-top"], "cursor", "nw-resize"),
                        l(v["mid-top"], "cursor", "n-resize"),
                        l(v["right-top"], "cursor", "ne-resize"),
                        l(v["mid-left"], "cursor", "e-resize"),
                        l(v["mid-right"], "cursor", "e-resize"),
                        l(v["left-bottom"], "cursor", "ne-resize"),
                        l(v["mid-bottom"], "cursor", "n-resize"),
                        l(v["right-bottom"], "cursor", "nw-resize"),
                        l(y, "visibility", ""),
                        l(y, "zIndex", g.zIndex),
                        l(y, "position", "absolute"),
                        h(b, "visibility", ""),
                        n(b, g.classPrefix + "-outer"),
                        h(b, "position", "absolute"),
                        (t = w),
                        (e = g.classPrefix + "-selection"),
                        t.classList.add(e),
                        l(w, "position", "absolute"),
                        l(w, "cursor", "move"),
                        (function (t, e, i) {
                            for (var o in t) t[o].addEventListener(e, i);
                        })(v, "mousedown", L),
                        r(w, "mousedown", P),
                        r(y, "mousemove", B),
                        r(y, "mouseup", C),
                        (a = !0)),
                    A();
            }),
            (this.getSelection = T),
            (this.setSelection = I);
    };
})(window);

var last1msg = "",
    last2msg = "";
function serializeForm(e) {
    var t = document.getElementById(e);
    if (!t || "FORM" !== t.nodeName) return [];
    var n,
        o,
        i = [];
    for (n = t.elements.length - 1; n >= 0; n -= 1)
        if ("" !== t.elements[n].id || "" !== t.elements[n].name)
            switch (t.elements[n].nodeName) {
                case "INPUT":
                    switch (t.elements[n].type) {
                        case "text":
                        case "hidden":
                        case "password":
                        case "button":
                        case "reset":
                        case "submit":
                            i.push(t.elements[n].id + "=" + encodeURIComponent(t.elements[n].value));
                            break;
                        case "checkbox":
                        case "radio":
                            t.elements[n].checked && i.push(t.elements[n].name + "=" + encodeURIComponent(t.elements[n].value));
                    }
                    break;
                case "TEXTAREA":
                    i.push(t.elements[n].name + "=" + encodeURIComponent(t.elements[n].value));
                    break;
                case "SELECT":
                    switch (t.elements[n].type) {
                        case "select-one":
                            i.push(t.elements[n].id + "=" + encodeURIComponent(t.elements[n].value));
                            break;
                        case "select-multiple":
                            for (o = t.elements[n].options.length - 1; o >= 0; o -= 1) t.elements[n].options[o].selected && i.push(t.elements[n].name + "=" + encodeURIComponent(t.elements[n].options[o].value));
                    }
                    break;
                case "BUTTON":
                    t.elements[n].type;
            }
    return i;
}
function getInputValueById(e) {
    return document.getElementById(e).value;
}
function getInputIntValueById(e) {
    return parseInt(document.getElementById(e).value);
}
function setInputValueById(e, t) {
    document.getElementById(e).value = t;
}
function getRadioInputValueByName(e) {
    for (var t = document.getElementsByName(e), n = 0, o = t.length; n < o; n++) if (t[n].checked) return t[n].value;
    return "";
}
function outputInfo(e) {
    document.getElementById("outputArea").innerHTML = e;
}
function outputInfoToEl(e, t) {
    document.getElementById(e).innerHTML = t;
}
function openTab(e, t) {
    var n, o, i;
    for (o = document.getElementsByClassName("tabcontent"), n = 0; n < o.length; n++) o[n].style.display = "none";
    for (i = document.getElementsByClassName("tablinks"), n = 0; n < i.length; n++) i[n].className = i[n].className.replace(" active", "");
    (document.getElementById(t).style.display = "block"), (e.currentTarget.className += " active");
}
function getActiveTab() {
    var e, t;
    for (t = document.getElementsByClassName("tabcontent"), e = 0; e < t.length; e++) if ("block" == t[e].style.display) return t[e].id;
}
function getActiveJsLoadingEl() {
    var e, t;
    for (t = document.getElementsByClassName("tabcontent2"), e = 0; e < t.length; e++) if ("block" == t[e].style.display) return t[e].querySelector(".JSLoadingEl");
}
function openTab2(e, t) {
    var n, o, i;
    for (o = document.getElementsByClassName("tabcontent2"), n = 0; n < o.length; n++) o[n].style.display = "none";
    for (i = document.getElementsByClassName("tablinks2"), n = 0; n < i.length; n++) i[n].className = i[n].className.replace(" active", "");
    (document.getElementById(t).style.display = "block"), (e.currentTarget.className += " active"), funTabActive(t), (curTabName = t);
}
function getActiveTab2() {
    var e, t;
    for (t = document.getElementsByClassName("tabcontent2"), e = 0; e < t.length; e++) if ("block" == t[e].style.display) return t[e].id;
}
function outputCMDlog(e) {}
function SecondsTotime(e) {
    var t = new Date(0);
    return t.setMilliseconds(1e3 * e), t.toISOString().substr(11, 12);
}
function setElHtml(e, t) {
    document.getElementById(e).innerHTML = t;
}
function setElClick(e, t) {
    document.getElementById(e).addEventListener("click", t);
}
function setElobClick(e, t) {
    e.addEventListener("click", t);
}
function makeElClick(e) {
    document.getElementById(e).click();
}
function getInputValueById(e) {
    return document.getElementById(e).value;
}
function setInputValueById(e, t) {
    document.getElementById(e).value = t;
}
function setEleEventByClass(e, t, n) {
    for (var o = document.getElementsByClassName(e), i = 0; i < o.length; i++) o[i].addEventListener(t, n, !1);
}
function setEleEventByID(e, t, n) {
    document.getElementById(e).addEventListener(t, n);
}
function setClassElClick(e, t) {
    for (var n = document.getElementsByClassName(e), o = 0; o < n.length; o++) n[o].addEventListener("click", t, !1);
}
function timeToSeconds(e) {
    var t = e.split(":");
    return 60 * parseFloat(t[0]) * 60 + 60 * parseFloat(t[1]) + parseFloat(t[2]) + parseFloat("0." + t[3]);
}
!(function (e) {
    e.lModalBox = function () {
        (this.init = function (e, t) {
            (this.elID = e), (this.className = t);
            var n = document.querySelector("#" + e + " .close");
            n &&
                (n.onclick = function () {
                    this.parentNode.parentNode.style.display = "none";
                });
        }),
            (this.show = function () {
                for (var e = document.getElementsByClassName(this.className), t = 0; t < e.length; ++t) e[t].style.display = "none";
                document.getElementById(this.elID).style.display = "block";
            }),
            (this.hide = function () {
                document.getElementById(this.elID).style.display = "none";
            });
    };
})(window);
var prent_stop = !1,
    prent_startT = 0,
    prent_ffmpegJSFileSize = 15489040,
    netspeed = 1024,
    loadingEl = null;
function prent_process() {
    var e;
    (e = (((Date.now() - prent_startT) * netspeed * 100) / prent_ffmpegJSFileSize).toFixed(2)) >= 99 && (e = 99.99),
        console.log("load ffmpeg js:" + e + "%"),
        (loadingEl.innerHTML = e.toString() + "%"),
        prent_stop
            ? ((loadingEl.innerHTML = ""), console.log("prent_stop true"))
            : (setTimeout(function () {
                  prent_process();
              }, 200),
              console.log("setTimeout prent_process"));
}
function video_convertAd(e, t, n, o, i, l, a) {
    var s,
        r,
        u = "input." + n.split(".").pop(),
        d = /Duration: (.*?), /,
        c = /time=(.*?) /,
        m = /([0-9]{1,3}) fps/,
        p = /frame=(\s*[0-9]+) /;
    (netspeed = 1),
        testNetspeed(),
        (prent_stop = !1),
        (prent_startT = Date.now()),
        setTimeout(function () {
            prent_process();
        }, 200),
        "webm" == e.toLowerCase() ? (audioworker = new Worker("/js/ff-worker.php?outputFormat=" + e)) : (audioworker = new Worker("/js/ff-worker-wasm.php?outputFormat=" + e)),
        (audioworker.onmessage = function (e) {
            var t = e.data;
            if ("ready" === t.type && window.File && window.FileList && window.FileReader);
            else if ("stdout" == t.type) {
                if ((console.log(t.data), outputCMDlog(t.data), a())) return audioworker.terminate(), void l("");
            } else if ("stderr" == t.type) {
                if ((console.log(t.data), outputCMDlog(t.data), a())) return audioworker.terminate(), void l("");
                if ((s || (d.exec(t.data) && (s = timeToSeconds(d.exec(t.data)[1]))), r || (m.exec(t.data) && (r = parseInt(m.exec(t.data)[1]))), r && s && p.exec(t.data))) {
                    var n = parseInt(p.exec(t.data)[1]);
                    i((n / (s * r)) * 100);
                } else if (c.exec(t.data)) {
                    var o = timeToSeconds(c.exec(t.data)[1]);
                    s && i((o / s) * 100);
                }
                prent_stop = !0;
            } else if ("onExit" == t.type) t.outputFile.byteLength > 0 ? l(t.outputFile, t.outFileName) : l(null);
            else if ("done" == t.type)
                if (t.data.length > 0) {
                    var u = t.data.code,
                        f = Object.keys(t.data.outputFiles);
                    if (0 == u && f.length > 0 && t.data.outputFiles[f[0]].byteLength > 0) {
                        var g = f[0],
                            y = t.data.outputFiles[g];
                        l(y, g);
                    } else l(null);
                } else l(null);
        });
    var arguments;
    (arguments = (o = o.replace("INPUT", u)).split(" ")), audioworker.postMessage({ type: "command", arguments: arguments, files: [{ name: u, data: t }] }), (t = null);
}
function formatChange(curEncoder) {
    var xhr = new XMLHttpRequest(),
        url = "/formatset.php?format=" + curEncoder;
    xhr.open("GET", url),
        (xhr.onload = function () {
            if (200 === xhr.status) {
                var x = xhr.responseText,
                    xset = document.getElementById("formatSetDiv");
                eval(x);
            } else console.log("Request failed.  Returned status of " + xhr.status);
        }),
        xhr.send();
}
function g_formatChange(curEncoder) {
    var xhr = new XMLHttpRequest(),
        url = "/g_formatset.php?format=" + curEncoder;
    xhr.open("GET", url),
        (xhr.onload = function () {
            if (200 === xhr.status) {
                var x = xhr.responseText,
                    xset = document.getElementById("formatSetDiv");
                eval(x);
            } else console.log("Request failed.  Returned status of " + xhr.status);
        }),
        xhr.send();
}
function btnFormat_Click() {
    formatChange(getRadioInputValueByName("format"));
}
function g_btnFormat_Click() {
    // g_formatChange(getRadioInputValueByName("g_format"));
}
function btnResolution_Click() {
    setInputValueById("reseize_vsize", getRadioInputValueByName("resolution"));
}
function btnFPS_Click() {
    setInputValueById("reseize_vfps", getRadioInputValueByName("fps"));
}
function getDuration(e, t) {
    var n = /Duration: (.*?), /,
        o = "",
        i = getRadioInputValueByName("format");
    (netspeed = 1),
        testNetspeed(),
        (loadingEl = getActiveJsLoadingEl()),
        (prent_stop = !1),
        (prent_startT = Date.now()),
        setTimeout(function () {
            prent_process();
        }, 200);
    var l = new Worker("/js/ff-worker.php?outputFormat=" + i);
    l.onmessage = function (e) {
        var i = e.data;
        ("ready" === i.type && window.File && window.FileList && window.FileReader) ||
            ("stdout" == i.type
                ? (console.log("stdout:"), console.log(i.data))
                : "stderr" == i.type
                ? (console.log("stderr:"), console.log(i.data), n.exec(i.data) && (o = timeToSeconds(n.exec(i.data)[1])), (prent_stop = !0))
                : "done" == i.type && t(o));
    };
    var arguments,
        a = "input." + i;
    (arguments = []).push("-i"), arguments.push(a), l.postMessage({ type: "command", arguments: arguments, files: [{ name: a, data: e }] });
}
function getBriate(e, t, n) {
    return ((8192 * parseFloat(t)) / e - parseInt(n)).toFixed(2).toString() + "k";
}
function rangeSlider(e, t) {
    var n,
        o,
        i = document.getElementById(e),
        l = i.children[0],
        a = 10,
        s = !1;
    function r(e) {
        s && e.pageX >= o && e.pageX <= o + n && ((l.style.left = e.pageX - o - a + "px"), "function" == typeof t && t(Math.round(((e.pageX - o) / n) * 100)));
    }
    (l.style.width = a + "px"),
        (l.style.left = i.offsetWidth - a + "px"),
        (l.style.marginLeft = a / 2 + "px"),
        i.addEventListener("mousedown", function (e) {
            return (n = this.offsetWidth), (o = this.offsetLeft), (s = !0), r(e), !1;
        }),
        document.addEventListener("mousemove", function (e) {
            r(e);
        }),
        document.addEventListener("mouseup", function () {
            s = !1;
        });
}
function setStartTime(e) {
    document.getElementById("vcutstart").value = SecondsTotime(e);
}
function setEndTime(e) {
    document.getElementById("vcutsend").value = SecondsTotime(e);
}
var videoForLoadImg = null;
function generateThumbs() {
    document.getElementById("trimBar").style.display = "block";
    var e = document.getElementById("thumbsBar");
    e.innerHTML = "";
    var t,
        n = e.clientWidth,
        o = gVDuration,
        l = Math.ceil(n / 80),
        a = o / l;
    for (i = 0; i < l; i++) {
        var s = document.createElement("img");
        0 == i ? ((t = s), (s.ptime = "0.1")) : (s.ptime = (i * a).toString()), (s.width = 80), (s.height = 50), e.appendChild(s);
    }
    gLoadIndex = 0;
    var r = document.getElementById("thumbsBar").getBoundingClientRect();
    (document.getElementById("trimBar").style.height = r.height + 20 + "px"),
        (document.getElementById("posLine").style.height = r.height + "px"),
        (document.getElementById("posLine").style.left = r.width / 2 + "px"),
        (document.getElementById("leftPos").style.height = r.height + "px"),
        (document.getElementById("leftPos").style.left = "0px"),
        (document.getElementById("leftMask").style.height = r.height + "px"),
        (document.getElementById("leftMask").style.left = "0px"),
        (document.getElementById("leftMask").style.width = "0px"),
        (document.getElementById("rightPos").style.height = r.height + "px"),
        (document.getElementById("rightPos").style.left = r.width - 4 + "px"),
        (document.getElementById("rightMask").style.height = r.height + "px"),
        (document.getElementById("rightMask").style.left = r.width - 4 + "px"),
        (document.getElementById("rightMask").style.width = "0px"),
        setStartTime(0),
        setEndTime(gVDuration),
        loadThumbFun(t);
}
function loadThumbFun(e) {
    null != e
        ? (null == videoForLoadImg &&
              (videoForLoadImg = document.createElement("video")).addEventListener("canplay", function () {
                  const e = document.createElement("canvas");
                  (e.width = this.videoWidth), (e.height = this.videoHeight), e.getContext("2d").drawImage(this, 0, 0, e.width, e.height);
                  const t = e.toDataURL();
                  var n = videoForLoadImg.curImg;
                  (n.src = t), loadThumbFun(n.nextSibling);
              }),
          (videoForLoadImg.curImg = e),
          (videoForLoadImg.src = gfileURL + "#t=" + e.ptime))
        : (videoForLoadImg = null);
}
function funTabActive(e) {
    if (("fun_crop" == e ? inputFile && lareaSelector.show() : lareaSelector.hide(), "fun_cut" == e && inputFile && gfileURL && "" == document.getElementById("thumbsBar").innerHTML && generateThumbs(), "fun_compress" == e && inputFile)) {
        var t = (gFileSize / 1024 / 1024).toFixed(2);
        if ("" == getInputValueById("vfilesize")) {
            setInputValueById("vfilesize", t + "M");
            var n = document.getElementById("outFileSize");
            n.children[0].style.left = n.offsetWidth - 10 + "px";
        }
    }
}
function cancel_converter() {
    return gCancelProcess;
}
function loadOtherFormatVideo(e, t, n) {
    var o = new FileReader();
    (o.onload = function (o) {
        var i = this.result,
            l = new Uint8Array(i);
        (i = null), (this.result = null);
        (gCancelProcess = !1),
            (loadingEl = document.getElementById("otherloadjs")),
            video_convertAd(
                "mp4",
                l,
                e.name,
                "-i INPUT -ab 128k -ar 48000 -ac 2 -c:a libmp3lame -c:v libx264 -x264opts cabac=1:ref=2:subme=6:me_range=16:chroma_me=1:trellis=1:chroma_qp_offset=-2:bframes=3:b_pyramid=2:b_adapt=1:b_bias=0:weightb=1:open_gop=0:weightp=1:keyint=250:keyint_min=15:scenecut=40:intra_refresh=0:rc_lookahead=30:mbtree=1:qpmax=69:qpstep=4 output.MP4",
                function (e) {
                    var n = rangeValue(0, 100, e);
                    outputInfoToEl(t, str_readingFile + " <i class='fa fa-spin5 animate-spin'></i>" + toDecimal2(n) + "%");
                },
                function (e, o) {
                    if ("" == e) outputInfoToEl(t, "");
                    else if (e) {
                        var i = new Blob([e]),
                            a = window.URL.createObjectURL(i);
                        n(a), (e = null), (i = null);
                    } else outputInfoToEl(t, "<i class='fa fa-info-circled-alt'></i>" + str_convertFailed);
                    l = null;
                },
                cancel_converter
            ),
            (l = null);
    }),
        o.readAsArrayBuffer(e);
}
function rangeValue(e, t, n) {
    return n < e ? e : n > t ? t : n;
}
function toDecimal2(e) {
    var t = parseFloat(e);
    if (isNaN(t)) return !1;
    var n = (t = Math.round(100 * e) / 100).toString(),
        o = n.indexOf(".");
    for (o < 0 && ((o = n.length), (n += ".")); n.length <= o + 2; ) n += "0";
    return n;
}
function debounce(e) {
    var t;
    return function (n) {
        t && clearTimeout(t), (t = setTimeout(e, 100, n));
    };
}

function cutVideoAndSendToServer(){
    //Get start time
    
    var startTime = timeToSeconds(document.getElementById("vcutstart").value);
    var endTime = timeToSeconds(document.getElementById("vcutsend").value);

    //Get End time
    alert("Trim the video : " + startTime + " to " + endTime);
}
var rightIsDown = !1,
    leftIsDown = !1,
    leftActive = !0,
    settingModal,
    curTabName = "",
    windowWidth = 0,
    inputFile;
function bReady() {
    (window.File && window.FileReader && window.FileList && window.Blob) || outputInfo(str_browserNotSupport), (windowWidth = window.innerWidth);
    var e = document.getElementById("filedropzone");
    function t() {
        var e = document.getElementById("videoplay");
        (document.getElementById("playmsg").innerHTML = ""), document.getElementById("tabVideoPreview").click(), document.getElementById("defaultOpen").click();
        var t = inputFile.type;
        "video/quicktime" == t ? (t = "video/mp4") : "video/3gpp" == t && (t = "video/xxx");
        var n = e.canPlayType(t);
        n = "" === n ? "no" : n;
        if ("no" === n)
            outputInfoToEl("playmsg", ""),
                loadOtherFormatVideo(inputFile, "playmsg", function (t) {
                    (e.src = t), (gfileURL = t), outputInfoToEl("playmsg", "");
                });
        else {
            var o = URL.createObjectURL(inputFile);
            (e.src = o), (gfileURL = o);
        }
        (gFileSize = inputFile.size), setElHtml("sliderMin", "0M"), setElHtml("sliderMax", (gFileSize / 1024 / 1024).toFixed(2) + "M");
    }
    function n() {
        var e = document.getElementById("leftPos").getBoundingClientRect(),
            t = document.getElementById("rightPos").getBoundingClientRect(),
            n = timeToSeconds(document.getElementById("vcutstart").value),
            o = document.getElementById("trimBar").getBoundingClientRect().width,
            i = (n * o) / gVDuration;
        i < 0 || i > t.x || ((document.getElementById("leftPos").style.left = i + "px"), (document.getElementById("leftMask").style.width = i + "px"));
        var l = timeToSeconds(document.getElementById("vcutsend").value),
            a = (l * o) / gVDuration;
        return (
            a < e.x || a > o - 4 || ((document.getElementById("rightPos").style.left = a + "px"), (document.getElementById("rightMask").style.left = a + "px"), (document.getElementById("rightMask").style.width = o - a + "px")),
            { s: n, e: l }
        );
    }
    function o(e, t) {
        if (inputFile) {
            outputInfoToEl(e, "<i class='fa fa-spin5 animate-spin'></i>" + str_readingFile);
            var n = new FileReader();
            (n.onload = function (e) {
                var n = this.result;
                (array = new Uint8Array(n)), t(array);
            }),
                n.readAsArrayBuffer(inputFile);
        } else outputInfoToEl(e, "<i class='fa fa-info-circled-alt'></i>" + str_pleaseLoadFile);
    }
    // function i(e, t, n, o, i) {
    //     setElHtml(i, ""), outputInfoToEl(i, "<i class='fa fa-spin5 animate-spin'></i>" + str_init1 + "<br><small>" + str_init2 + "</small>");
    //     var l = new XMLHttpRequest(),
    //         a =
    //             "https://dev-api.gifbuz.com/cutVideo?" +
    //             (function (e, t, n) {
    //                 return "funName=" + t + "&inputformat=" + inputFile.name.split(".").pop() + "&duration=" + e.toString() + "&" + serializeForm(n).join("&") + "&" + serializeForm("g_frmoptions").join("&");
    //             })(t, n, o);
    //     l.open("GET", a),
    //         (l.onload = function () {
    //             if (200 === l.status) {
    //                 var t = l.responseText;
    //                 "ok!!" !== t.substr(0, 4) && (console.log("get cmd failed."), outputInfoToEl(i, "<i class='fa fa-cancel-circled'></i>" + str_convertFailed));
    //                 var o = t.substr(4),
    //                     a = getRadioInputValueByName("g_format"),
    //                     s = 1;
    //                 if (("fun_convert" == n && (a = getRadioInputValueByName("format")), "fun_cut" == n)) {
    //                     var r = timeToSeconds(getInputValueById("vcutstart")),
    //                         u = timeToSeconds(getInputValueById("vcutsend"));
    //                     s = rangeValue(0, 1, (u - r) / gVDuration);
    //                 }
    //                 (gCancelProcess = !1),
    //                     (loadingEl = getActiveJsLoadingEl()),
    //                     video_convertAd(
    //                         a,
    //                         e,
    //                         inputFile.name,
    //                         o,
    //                         function (e) {
    //                             console.log(e);
    //                             var t = e;
    //                             "fun_cut" == n && (t /= s),
    //                                 (t = toDecimal2((t = rangeValue(0, 100, t)))),
    //                                 outputInfoToEl(
    //                                     i,
    //                                     "<i class='fa fa-spin5 animate-spin'></i>" + t + "%...<a class='linkBtn' href='javascript:gCancelProcess = true;' title='" + str_cancelProcess + "'><i class='fa fa-cancel-circled'></i></a>"
    //                                 );
    //                         },
    //                         function (t, n) {
    //                             if ("" == t) outputInfoToEl(i, "");
    //                             else if (t) {
    //                                 var o = new Blob([t]),
    //                                     l = window.URL.createObjectURL(o),
    //                                     a = (t.byteLength / 1024 / 1024).toFixed(2).toString(),
    //                                     s = "<i class='fa fa-ok fa-2x'></i><br>" + str_converSuccess + "<a download='" + n + "' href='" + l + "'>" + str_clicktoSave + "(output..." + n.split(".").pop() + "," + a + "M)</a>";
    //                                 outputInfoToEl(i, s), "undefined" != typeof pplike_manualshowlike && pplike_manualshowlike(), (t = null), (o = null);
    //                             } else outputInfoToEl(i, "<i class='fa fa-info-circled-alt'></i>" + str_convertFailed);
    //                             e = null;
    //                         },
    //                         cancel_converter
    //                     ),
    //                     (e = null);
    //             } else console.log("Request failed.  Returned status of " + l.status);
    //         }),
    //         l.send();
    // }
    function l(e) {
        setInputValueById("crop_x", Math.round(e.x1)), setInputValueById("crop_y", Math.round(e.y1)), setInputValueById("crop_width", Math.round(e.width)), setInputValueById("crop_height", Math.round(e.height));
    }
    e.addEventListener("dragover", function (e) {
        e.stopPropagation(), e.preventDefault(), (e.dataTransfer.dropEffect = "copy");
    }),
        e.addEventListener("drop", function (e) {
            e.stopPropagation(), e.preventDefault();
            for (var n, o = e.dataTransfer.files, i = 0; (n = o[i]); i++) {
                (inputFile = n), t();
                break;
            }
        }),
        document.getElementById("bfile").addEventListener(
            "change",
            function (e) {
                for (var n, o = e.target.files, i = 0; (n = o[i]); i++) {
                    (inputFile = n), t();
                    break;
                }
            },
            !1
        ),
        document.getElementById("openFileBtn").addEventListener(
            "click",
            function () {
                document.getElementById("bfile").click();
            },
            !1
        ),
        document.getElementById("bfile").addEventListener(
            "click",
            function () {
                this.value = null;
            },
            !1
        ),
        document.getElementById("closeVideoPreview").addEventListener(
            "click",
            function () {
                (document.getElementById("videoplay").src = ""),
                    document.getElementById("tabFileOpen").click(),
                    (document.getElementById("thumbsBar").innerHTML = ""),
                    (document.getElementById("trimBar").style.display = "none"),
                    lareaSelector.hide(),
                    (inputFile = null),
                    (gVDuration = 0),
                    (gfileURL = null),
                    (gLoadIndex = 0),
                    (gFileSize = 0),
                    (gCancelProcess = !0);
            },
            !1
        ),
        document.getElementById("videoplay").addEventListener("loadedmetadata", function () {
            (gVDuration = this.duration), generateThumbs();
        }),
        window.addEventListener(
            "resize",
            debounce(function (e) {
                null != inputFile &&
                    windowWidth != window.innerWidth &&
                    ((windowWidth = window.innerWidth), "fun_crop" == curTabName && lareaSelector.show(), "fun_cut" == curTabName ? generateThumbs() : (document.getElementById("thumbsBar").innerHTML = ""));
            })
        ),
        document.getElementById("thumbsBar").addEventListener(
            "click",
            function (e) {
                var t = this.getBoundingClientRect();
                console.log("tclick clientx:" + e.clientX + "offestX:" + e.offsetX), (document.getElementById("posLine").style.left = e.clientX - t.x + "px");
                var n = ((e.clientX - t.x) * gVDuration) / parseInt(this.clientWidth);
                document.getElementById("videoplay").currentTime = n;
            },
            !1
        ),
        document.getElementById("leftPos").addEventListener(
            "mousedown",
            function (e) {
                (leftIsDown = !0), (leftActive = !0);
            },
            !0
        ),
        document.getElementById("rightPos").addEventListener(
            "mousedown",
            function (e) {
                (rightIsDown = !0), (leftActive = !1);
            },
            !0
        ),
        document.addEventListener(
            "mouseup",
            function () {
                leftIsDown = rightIsDown = !1;
            },
            !0
        ),
        document.getElementById("trimBar").addEventListener(
            "mousemove",
            function (e) {
                e.preventDefault();
                var t,
                    n = this.getBoundingClientRect(),
                    o = n.width,
                    i = n.x,
                    l = document.getElementById("leftPos").getBoundingClientRect(),
                    a = document.getElementById("rightPos").getBoundingClientRect();
                (leftIsDown || rightIsDown) && ((t = ((e.clientX - n.x) * gVDuration) / o), (document.getElementById("videoplay").currentTime = t));
                if (leftIsDown) {
                    var s = e.clientX - i;
                    s < 0 && (console.log("left <0"), (s = 0)),
                        s > a.x - i && ((s = a.x - i), console.log("left > rightRect.x")),
                        (document.getElementById("leftPos").style.left = s + "px"),
                        (document.getElementById("leftMask").style.width = s + "px"),
                        setStartTime(t);
                }
                if (rightIsDown) {
                    var r = e.clientX - i - 4;
                    r < l.x - i && (console.log("right < leftRect.x"), (r = l.x - i)),
                        r > o - 4 && (console.log("right > barWidth"), (r = o - 4)),
                        (document.getElementById("rightPos").style.left = r + "px"),
                        (document.getElementById("rightMask").style.left = r + "px"),
                        (document.getElementById("rightMask").style.width = o - r + "px"),
                        setEndTime(t);
                }
            },
            !0
        ),
        document.getElementById("vcutstart").addEventListener(
            "input",
            function (e) {
                var t = n();
                document.getElementById("videoplay").currentTime = t.s;
            },
            !0
        ),
        document.getElementById("vcutstart").addEventListener(
            "click",
            function (e) {
                var t = n();
                document.getElementById("videoplay").currentTime = t.s;
            },
            !0
        ),
        document.getElementById("vcutsend").addEventListener(
            "input",
            function (e) {
                var t = n();
                document.getElementById("videoplay").currentTime = t.e;
            },
            !0
        ),
        document.getElementById("vcutsend").addEventListener(
            "click",
            function (e) {
                var t = n();
                document.getElementById("videoplay").currentTime = t.e;
            },
            !0
        ),
        setElClick("cutBtn", function () {
            // o("cutOutputArea", function (e) {
            //     cutVideoAndSendToServer();
            //     i(e, 0, "fun_cut", "cutFrm", "cutOutputArea");
            // });
            cutVideoAndSendToServer();
        }),
        setElClick("convertBtn", function () {
            o("convertOutputArea", function (e) {
                i(e, 0, "fun_convert", "frmoptions", "convertOutputArea");
            });
        }),
        setElClick("rotateBtn", function () {
            o("rotateOutputArea", function (e) {
                i(e, 0, "fun_rotate", "rotateFrm", "rotateOutputArea");
            });
        }),
        setElClick("flipBtn", function () {
            o("flipOutputArea", function (e) {
                i(e, 0, "fun_flip", "flipFrm", "flipOutputArea");
            });
        }),
        setElClick("compressBtn", function () {
            o("compressOutputArea", function (e) {
                getDuration(e, function (t) {
                    i(e, t, "fun_compress", "compressFrm", "compressOutputArea");
                });
            });
        }),
        setElClick("resizeBtn", function () {
            o("resizeOutputArea", function (e) {
                i(e, 0, "fun_resize", "resizeFrm", "resizeOutputArea");
            });
        }),
        setElClick("cropBtn", function () {
            o("cropOutputArea", function (e) {
                i(e, 0, "fun_crop", "cropFrm", "cropOutputArea");
            });
        }),
        document.getElementById("vpreset").addEventListener(
            "change",
            function (e) {
                var t = getInputValueById("vpreset");
                if ("" != t) {
                    var n = t.split(" ");
                    setInputValueById("vsize", n[0]), setInputValueById("vfps", void 0 === n[1] ? "" : n[1]);
                }
            },
            !1
        ),
        document.getElementById("g_vpreset").addEventListener(
            "change",
            function (e) {
                var t = getInputValueById("g_vpreset");
                if ("" != t) {
                    var n = t.split(" ");
                    setInputValueById("g_vsize", n[0]), setInputValueById("g_vfps", void 0 === n[1] ? "" : n[1]);
                }
            },
            !1
        ),
        document.getElementById("vencoder").addEventListener(
            "change",
            function (e) {
                var t = getInputValueById("vencoder");
                "h263" == t
                    ? setInputValueById("vsize", "352x288")
                    : "mpeg1video" == t
                    ? setInputValueById("vfps", "25")
                    : "mpeg2video" == t
                    ? setInputValueById("vfps", "25")
                    : (setInputValueById("vsize", ""), setInputValueById("vfps", ""));
            },
            !1
        ),
        document.getElementById("tabFileOpen").click(),
        (settingDialog = new lModalBox()),
        settingDialog.init("settingDialog", "dialog"),
        setClassElClick("adsetting", function () {
            "resize" == this.getAttribute("data-pane") ? (document.getElementById("resizeOp").style.display = "none") : (document.getElementById("resizeOp").style.display = "block"), settingDialog.show();
        }),
        rangeSlider("outFileSize", function (e) {
            if (gFileSize) {
                var t = ((gFileSize * e) / 100 / 1024 / 1024).toFixed(2);
                document.getElementById("vfilesize").value = t + "M";
            }
        }),
        setEleEventByID("vfilesize", "blur", function () {}),
        (lareaSelector = new lAreaSelector("videoplay", { onSelectChange: l })).hide(),
        setEleEventByClass("cropparam", "blur", function () {
            l(lareaSelector.setSelection(getInputIntValueById("crop_x"), getInputIntValueById("crop_y"), getInputIntValueById("crop_width"), getInputIntValueById("crop_height")));
        }),
        g_btnFormat_Click(),
        setTimeout("testNetspeed()", 2e3);
}
function testNetspeed() {
    var e = Date.now(),
        t = new XMLHttpRequest();
    t.open("GET", "https://dev-api.gifbuz.com/img/test.dat", !0),
        (t.responseType = "blob"),
        t.setRequestHeader("Cache-Control", "no-cache"),
        t.addEventListener(
            "load",
            function () {
                if (200 === t.status) {
                    var n = Date.now() - e;
                    (netspeed = t.response.size / n), console.log("net speed(bit/ms):" + netspeed);
                } else error && error("testNetspeed load file error!");
            },
            !1
        )
        // t.send();
}
var gfileURL = null,
    gVDuration,
    gLoadIndex,
    gFileSize,
    lareaSelector,
    gCancelProcess = !1;
document.addEventListener(
    "DOMContentLoaded",
    function () {
        bReady();
    },
    !1
);

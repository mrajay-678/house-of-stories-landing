/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e(((t = t || self).window = t.window || {}));
})(this, function (e) {
  "use strict";
  function _inheritsLoose(t, e) {
    (t.prototype = Object.create(e.prototype)), ((t.prototype.constructor = t).__proto__ = e);
  }
  function _assertThisInitialized(t) {
    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t;
  }
  function r(t) {
    return "string" == typeof t;
  }
  function s(t) {
    return "function" == typeof t;
  }
  function t(t) {
    return "number" == typeof t;
  }
  function u(t) {
    return void 0 === t;
  }
  function v(t) {
    return "object" == typeof t;
  }
  function w(t) {
    return !1 !== t;
  }
  function x() {
    return "undefined" != typeof window;
  }
  function y(t) {
    return s(t) || r(t);
  }
  function P(t) {
    return (i = yt(t, ot)) && ze;
  }
  function Q(t, e) {
    return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()");
  }
  function R(t, e) {
    return !e && console.warn(t);
  }
  function S(t, e) {
    return (t && (ot[t] = e) && i && (i[t] = e)) || ot;
  }
  function T() {
    return 0;
  }
  function ea(t) {
    var e,
      r,
      i = t[0];
    if ((v(i) || s(i) || (t = [t]), !(e = (i._gsap || {}).harness))) {
      for (r = gt.length; r-- && !gt[r].targetTest(i); );
      e = gt[r];
    }
    for (r = t.length; r--; ) (t[r] && (t[r]._gsap || (t[r]._gsap = new Vt(t[r], e)))) || t.splice(r, 1);
    return t;
  }
  function fa(t) {
    return t._gsap || ea(Mt(t))[0]._gsap;
  }
  function ga(t, e, r) {
    return (r = t[e]) && s(r) ? t[e]() : (u(r) && t.getAttribute && t.getAttribute(e)) || r;
  }
  function ha(t, e) {
    return (t = t.split(",")).forEach(e) || t;
  }
  function ia(t) {
    return Math.round(1e5 * t) / 1e5 || 0;
  }
  function ja(t) {
    return Math.round(1e7 * t) / 1e7 || 0;
  }
  function ka(t, e) {
    var r = e.charAt(0),
      i = parseFloat(e.substr(2));
    return (t = parseFloat(t)), "+" === r ? t + i : "-" === r ? t - i : "*" === r ? t * i : t / i;
  }
  function la(t, e) {
    for (var r = e.length, i = 0; t.indexOf(e[i]) < 0 && ++i < r; );
    return i < r;
  }
  function ma() {
    var t,
      e,
      r = dt.length,
      i = dt.slice(0);
    for (ct = {}, t = dt.length = 0; t < r; t++) (e = i[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0);
  }
  function na(t, e, r, i) {
    dt.length && !L && ma(), t.render(e, r, i || (L && e < 0 && (t._initted || t._startAt))), dt.length && !L && ma();
  }
  function oa(t) {
    var e = parseFloat(t);
    return (e || 0 === e) && (t + "").match(at).length < 2 ? e : r(t) ? t.trim() : t;
  }
  function pa(t) {
    return t;
  }
  function qa(t, e) {
    for (var r in e) r in t || (t[r] = e[r]);
    return t;
  }
  function ta(t, e) {
    for (var r in e) "__proto__" !== r && "constructor" !== r && "prototype" !== r && (t[r] = v(e[r]) ? ta(t[r] || (t[r] = {}), e[r]) : e[r]);
    return t;
  }
  function ua(t, e) {
    var r,
      i = {};
    for (r in t) r in e || (i[r] = t[r]);
    return i;
  }
  function va(t) {
    var e = t.parent || I,
      r = t.keyframes
        ? (function _setKeyframeDefaults(i) {
            return function (t, e) {
              for (var r in e) r in t || ("duration" === r && i) || "ease" === r || (t[r] = e[r]);
            };
          })(Z(t.keyframes))
        : qa;
    if (w(t.inherit)) for (; e; ) r(t, e.vars.defaults), (e = e.parent || e._dp);
    return t;
  }
  function xa(t, e, r, i, n) {
    void 0 === r && (r = "_first"), void 0 === i && (i = "_last");
    var a,
      s = t[i];
    if (n) for (a = e[n]; s && s[n] > a; ) s = s._prev;
    return s ? ((e._next = s._next), (s._next = e)) : ((e._next = t[r]), (t[r] = e)), e._next ? (e._next._prev = e) : (t[i] = e), (e._prev = s), (e.parent = e._dp = t), e;
  }
  function ya(t, e, r, i) {
    void 0 === r && (r = "_first"), void 0 === i && (i = "_last");
    var n = e._prev,
      a = e._next;
    n ? (n._next = a) : t[r] === e && (t[r] = a), a ? (a._prev = n) : t[i] === e && (t[i] = n), (e._next = e._prev = e.parent = null);
  }
  function za(t, e) {
    t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove && t.parent.remove(t), (t._act = 0);
  }
  function Aa(t, e) {
    if (t && (!e || e._end > t._dur || e._start < 0)) for (var r = t; r; ) (r._dirty = 1), (r = r.parent);
    return t;
  }
  function Ca(t, e, r, i) {
    return t._startAt && (L ? t._startAt.revert(ht) : (t.vars.immediateRender && !t.vars.autoRevert) || t._startAt.render(e, !0, i));
  }
  function Ea(t) {
    return t._repeat ? Tt(t._tTime, (t = t.duration() + t._rDelay)) * t : 0;
  }
  function Ga(t, e) {
    return (t - e._start) * e._ts + (0 <= e._ts ? 0 : e._dirty ? e.totalDuration() : e._tDur);
  }
  function Ha(t) {
    return (t._end = ja(t._start + (t._tDur / Math.abs(t._ts || t._rts || X) || 0)));
  }
  function Ia(t, e) {
    var r = t._dp;
    return r && r.smoothChildTiming && t._ts && ((t._start = ja(r._time - (0 < t._ts ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts))), Ha(t), r._dirty || Aa(r, t)), t;
  }
  function Ja(t, e) {
    var r;
    if (
      ((e._time || (!e._dur && e._initted) || (e._start < t._time && (e._dur || !e.add))) && ((r = Ga(t.rawTime(), e)), (!e._dur || Ot(0, e.totalDuration(), r) - e._tTime > X) && e.render(r, !0)),
      Aa(t, e)._dp && t._initted && t._time >= t._dur && t._ts)
    ) {
      if (t._dur < t.duration()) for (r = t; r._dp; ) 0 <= r.rawTime() && r.totalTime(r._tTime), (r = r._dp);
      t._zTime = -X;
    }
  }
  function Ka(e, r, i, n) {
    return (
      r.parent && za(r),
      (r._start = ja((t(i) ? i : i || e !== I ? xt(e, i, r) : e._time) + r._delay)),
      (r._end = ja(r._start + (r.totalDuration() / Math.abs(r.timeScale()) || 0))),
      xa(e, r, "_first", "_last", e._sort ? "_start" : 0),
      bt(r) || (e._recent = r),
      n || Ja(e, r),
      e._ts < 0 && Ia(e, e._tTime),
      e
    );
  }
  function La(t, e) {
    return (ot.ScrollTrigger || Q("scrollTrigger", e)) && ot.ScrollTrigger.create(e, t);
  }
  function Ma(t, e, r, i, n) {
    return Qt(t, e, n), t._initted ? (!r && t._pt && !L && ((t._dur && !1 !== t.vars.lazy) || (!t._dur && t.vars.lazy)) && f !== Rt.frame ? (dt.push(t), (t._lazy = [n, i]), 1) : void 0) : 1;
  }
  function Ra(t, e, r, i) {
    var n = t._repeat,
      a = ja(e) || 0,
      s = t._tTime / t._tDur;
    return (
      s && !i && (t._time *= a / t._dur),
      (t._dur = a),
      (t._tDur = n ? (n < 0 ? 1e10 : ja(a * (n + 1) + t._rDelay * n)) : a),
      0 < s && !i && Ia(t, (t._tTime = t._tDur * s)),
      t.parent && Ha(t),
      r || Aa(t.parent, t),
      t
    );
  }
  function Sa(t) {
    return t instanceof Xt ? Aa(t) : Ra(t, t._dur);
  }
  function Va(e, r, i) {
    var n,
      a,
      s = t(r[1]),
      o = (s ? 2 : 1) + (e < 2 ? 0 : 1),
      u = r[o];
    if ((s && (u.duration = r[1]), (u.parent = i), e)) {
      for (n = u, a = i; a && !("immediateRender" in n); ) (n = a.vars.defaults || {}), (a = w(a.vars.inherit) && a.parent);
      (u.immediateRender = w(n.immediateRender)), e < 2 ? (u.runBackwards = 1) : (u.startAt = r[o - 1]);
    }
    return new $t(r[0], u, r[1 + o]);
  }
  function Wa(t, e) {
    return t || 0 === t ? e(t) : e;
  }
  function Ya(t, e) {
    return r(t) && (e = st.exec(t)) ? e[1] : "";
  }
  function _a(t, e) {
    return t && v(t) && "length" in t && ((!e && !t.length) || (t.length - 1 in t && v(t[0]))) && !t.nodeType && t !== h;
  }
  function cb(r) {
    return (
      (r = Mt(r)[0] || R("Invalid scope") || {}),
      function (t) {
        var e = r.current || r.nativeElement || r;
        return Mt(t, e.querySelectorAll ? e : e === r ? R("Invalid scope") || a.createElement("div") : r);
      }
    );
  }
  function db(t) {
    return t.sort(function () {
      return 0.5 - Math.random();
    });
  }
  function eb(t) {
    if (s(t)) return t;
    var p = v(t) ? t : { each: t },
      _ = jt(p.ease),
      m = p.from || 0,
      g = parseFloat(p.base) || 0,
      y = {},
      e = 0 < m && m < 1,
      T = isNaN(m) || e,
      b = p.axis,
      w = m,
      x = m;
    return (
      r(m) ? (w = x = { center: 0.5, edges: 0.5, end: 1 }[m] || 0) : !e && T && ((w = m[0]), (x = m[1])),
      function (t, e, r) {
        var i,
          n,
          a,
          s,
          o,
          u,
          h,
          l,
          f,
          d = (r || p).length,
          c = y[d];
        if (!c) {
          if (!(f = "auto" === p.grid ? 0 : (p.grid || [1, U])[1])) {
            for (h = -U; h < (h = r[f++].getBoundingClientRect().left) && f < d; );
            f < d && f--;
          }
          for (c = y[d] = [], i = T ? Math.min(f, d) * w - 0.5 : m % f, n = f === U ? 0 : T ? (d * x) / f - 0.5 : (m / f) | 0, l = U, u = h = 0; u < d; u++)
            (a = (u % f) - i), (s = n - ((u / f) | 0)), (c[u] = o = b ? Math.abs("y" === b ? s : a) : K(a * a + s * s)), h < o && (h = o), o < l && (l = o);
          "random" === m && db(c),
            (c.max = h - l),
            (c.min = l),
            (c.v = d = (parseFloat(p.amount) || parseFloat(p.each) * (d < f ? d - 1 : b ? ("y" === b ? d / f : f) : Math.max(f, d / f)) || 0) * ("edges" === m ? -1 : 1)),
            (c.b = d < 0 ? g - d : g),
            (c.u = Ya(p.amount || p.each) || 0),
            (_ = _ && d < 0 ? Yt(_) : _);
        }
        return (d = (c[t] - c.min) / c.max || 0), ja(c.b + (_ ? _(d) : d) * c.v) + c.u;
      }
    );
  }
  function fb(i) {
    var n = Math.pow(10, ((i + "").split(".")[1] || "").length);
    return function (e) {
      var r = ja(Math.round(parseFloat(e) / i) * i * n);
      return (r - (r % 1)) / n + (t(e) ? 0 : Ya(e));
    };
  }
  function gb(h, e) {
    var l,
      f,
      r = Z(h);
    return (
      !r && v(h) && ((l = r = h.radius || U), h.values ? ((h = Mt(h.values)), (f = !t(h[0])) && (l *= l)) : (h = fb(h.increment))),
      Wa(
        e,
        r
          ? s(h)
            ? function (t) {
                return (f = h(t)), Math.abs(f - t) <= l ? f : t;
              }
            : function (e) {
                for (var r, i, n = parseFloat(f ? e.x : e), a = parseFloat(f ? e.y : 0), s = U, o = 0, u = h.length; u--; )
                  (r = f ? (r = h[u].x - n) * r + (i = h[u].y - a) * i : Math.abs(h[u] - n)) < s && ((s = r), (o = u));
                return (o = !l || s <= l ? h[o] : e), f || o === e || t(e) ? o : o + Ya(e);
              }
          : fb(h)
      )
    );
  }
  function hb(t, e, r, i) {
    return Wa(Z(t) ? !e : !0 === r ? !!(r = 0) : !i, function () {
      return Z(t)
        ? t[~~(Math.random() * t.length)]
        : (r = r || 1e-5) && (i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((t - r / 2 + Math.random() * (e - t + 0.99 * r)) / r) * r * i) / i;
    });
  }
  function lb(e, r, t) {
    return Wa(t, function (t) {
      return e[~~r(t)];
    });
  }
  function ob(t) {
    for (var e, r, i, n, a = 0, s = ""; ~(e = t.indexOf("random(", a)); )
      (i = t.indexOf(")", e)),
        (n = "[" === t.charAt(e + 7)),
        (r = t.substr(e + 7, i - e - 7).match(n ? at : tt)),
        (s += t.substr(a, e - a) + hb(n ? r : +r[0], n ? 0 : +r[1], +r[2] || 1e-5)),
        (a = i + 1);
    return s + t.substr(a, t.length - a);
  }
  function rb(t, e, r) {
    var i,
      n,
      a,
      s = t.labels,
      o = U;
    for (i in s) (n = s[i] - e) < 0 == !!r && n && o > (n = Math.abs(n)) && ((a = i), (o = n));
    return a;
  }
  function tb(t) {
    return za(t), t.scrollTrigger && t.scrollTrigger.kill(!!L), t.progress() < 1 && Ct(t, "onInterrupt"), t;
  }
  function wb(t) {
    if (t)
      if (((t = (!t.name && t.default) || t), x() || t.headless)) {
        var e = t.name,
          r = s(t),
          i =
            e && !r && t.init
              ? function () {
                  this._props = [];
                }
              : t,
          n = { init: T, render: he, add: Wt, kill: ce, modifier: fe, rawVars: 0 },
          a = { targetTest: 0, get: 0, getSetter: ne, aliases: {}, register: 0 };
        if ((Ft(), t !== i)) {
          if (pt[e]) return;
          qa(i, qa(ua(t, n), a)),
            yt(i.prototype, yt(n, ua(t, a))),
            (pt[(i.prop = e)] = i),
            t.targetTest && (gt.push(i), (ft[e] = 1)),
            (e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin");
        }
        S(e, i), t.register && t.register(ze, i, _e);
      } else At.push(t);
  }
  function zb(t, e, r) {
    return ((6 * (t += t < 0 ? 1 : 1 < t ? -1 : 0) < 1 ? e + (r - e) * t * 6 : t < 0.5 ? r : 3 * t < 2 ? e + (r - e) * (2 / 3 - t) * 6 : e) * St + 0.5) | 0;
  }
  function Ab(e, r, i) {
    var n,
      a,
      s,
      o,
      u,
      h,
      l,
      f,
      d,
      c,
      p = e ? (t(e) ? [e >> 16, (e >> 8) & St, e & St] : 0) : zt.black;
    if (!p) {
      if (("," === e.substr(-1) && (e = e.substr(0, e.length - 1)), zt[e])) p = zt[e];
      else if ("#" === e.charAt(0)) {
        if ((e.length < 6 && (e = "#" + (n = e.charAt(1)) + n + (a = e.charAt(2)) + a + (s = e.charAt(3)) + s + (5 === e.length ? e.charAt(4) + e.charAt(4) : "")), 9 === e.length))
          return [(p = parseInt(e.substr(1, 6), 16)) >> 16, (p >> 8) & St, p & St, parseInt(e.substr(7), 16) / 255];
        p = [(e = parseInt(e.substr(1), 16)) >> 16, (e >> 8) & St, e & St];
      } else if ("hsl" === e.substr(0, 3))
        if (((p = c = e.match(tt)), r)) {
          if (~e.indexOf("=")) return (p = e.match(et)), i && p.length < 4 && (p[3] = 1), p;
        } else
          (o = (+p[0] % 360) / 360),
            (u = p[1] / 100),
            (n = 2 * (h = p[2] / 100) - (a = h <= 0.5 ? h * (u + 1) : h + u - h * u)),
            3 < p.length && (p[3] *= 1),
            (p[0] = zb(o + 1 / 3, n, a)),
            (p[1] = zb(o, n, a)),
            (p[2] = zb(o - 1 / 3, n, a));
      else p = e.match(tt) || zt.transparent;
      p = p.map(Number);
    }
    return (
      r &&
        !c &&
        ((n = p[0] / St),
        (a = p[1] / St),
        (s = p[2] / St),
        (h = ((l = Math.max(n, a, s)) + (f = Math.min(n, a, s))) / 2),
        l === f ? (o = u = 0) : ((d = l - f), (u = 0.5 < h ? d / (2 - l - f) : d / (l + f)), (o = l === n ? (a - s) / d + (a < s ? 6 : 0) : l === a ? (s - n) / d + 2 : (n - a) / d + 4), (o *= 60)),
        (p[0] = ~~(o + 0.5)),
        (p[1] = ~~(100 * u + 0.5)),
        (p[2] = ~~(100 * h + 0.5))),
      i && p.length < 4 && (p[3] = 1),
      p
    );
  }
  function Bb(t) {
    var r = [],
      i = [],
      n = -1;
    return (
      t.split(Et).forEach(function (t) {
        var e = t.match(rt) || [];
        r.push.apply(r, e), i.push((n += e.length + 1));
      }),
      (r.c = i),
      r
    );
  }
  function Cb(t, e, r) {
    var i,
      n,
      a,
      s,
      o = "",
      u = (t + o).match(Et),
      h = e ? "hsla(" : "rgba(",
      l = 0;
    if (!u) return t;
    if (
      ((u = u.map(function (t) {
        return (t = Ab(t, e, 1)) && h + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")";
      })),
      r && ((a = Bb(t)), (i = r.c).join(o) !== a.c.join(o)))
    )
      for (s = (n = t.replace(Et, "1").split(rt)).length - 1; l < s; l++) o += n[l] + (~i.indexOf(l) ? u.shift() || h + "0,0,0,0)" : (a.length ? a : u.length ? u : r).shift());
    if (!n) for (s = (n = t.split(Et)).length - 1; l < s; l++) o += n[l] + u[l];
    return o + n[s];
  }
  function Fb(t) {
    var e,
      r = t.join(" ");
    if (((Et.lastIndex = 0), Et.test(r))) return (e = Dt.test(r)), (t[1] = Cb(t[1], e)), (t[0] = Cb(t[0], e, Bb(t[1]))), !0;
  }
  function Ob(t) {
    var e = (t + "").split("("),
      r = Lt[e[0]];
    return r && 1 < e.length && r.config
      ? r.config.apply(
          null,
          ~t.indexOf("{")
            ? [
                (function _parseObjectInString(t) {
                  for (var e, r, i, n = {}, a = t.substr(1, t.length - 3).split(":"), s = a[0], o = 1, u = a.length; o < u; o++)
                    (r = a[o]), (e = o !== u - 1 ? r.lastIndexOf(",") : r.length), (i = r.substr(0, e)), (n[s] = isNaN(i) ? i.replace(Bt, "").trim() : +i), (s = r.substr(e + 1).trim());
                  return n;
                })(e[1]),
              ]
            : (function _valueInParentheses(t) {
                var e = t.indexOf("(") + 1,
                  r = t.indexOf(")"),
                  i = t.indexOf("(", e);
                return t.substring(e, ~i && i < r ? t.indexOf(")", r + 1) : r);
              })(t)
                .split(",")
                .map(oa)
        )
      : Lt._CE && It.test(t)
      ? Lt._CE("", t)
      : r;
  }
  function Qb(t, e) {
    for (var r, i = t._first; i; )
      i instanceof Xt
        ? Qb(i, e)
        : !i.vars.yoyoEase || (i._yoyo && i._repeat) || i._yoyo === e || (i.timeline ? Qb(i.timeline, e) : ((r = i._ease), (i._ease = i._yEase), (i._yEase = r), (i._yoyo = e))),
        (i = i._next);
  }
  function Sb(t, e, r, i) {
    void 0 === r &&
      (r = function easeOut(t) {
        return 1 - e(1 - t);
      }),
      void 0 === i &&
        (i = function easeInOut(t) {
          return t < 0.5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2;
        });
    var n,
      a = { easeIn: e, easeOut: r, easeInOut: i };
    return (
      ha(t, function (t) {
        for (var e in ((Lt[t] = ot[t] = a), (Lt[(n = t.toLowerCase())] = r), a)) Lt[n + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = Lt[t + "." + e] = a[e];
      }),
      a
    );
  }
  function Tb(e) {
    return function (t) {
      return t < 0.5 ? (1 - e(1 - 2 * t)) / 2 : 0.5 + e(2 * (t - 0.5)) / 2;
    };
  }
  function Ub(r, t, e) {
    function Jm(t) {
      return 1 === t ? 1 : i * Math.pow(2, -10 * t) * H((t - a) * n) + 1;
    }
    var i = 1 <= t ? t : 1,
      n = (e || (r ? 0.3 : 0.45)) / (t < 1 ? t : 1),
      a = (n / N) * (Math.asin(1 / i) || 0),
      s =
        "out" === r
          ? Jm
          : "in" === r
          ? function (t) {
              return 1 - Jm(1 - t);
            }
          : Tb(Jm);
    return (
      (n = N / n),
      (s.config = function (t, e) {
        return Ub(r, t, e);
      }),
      s
    );
  }
  function Vb(e, r) {
    function Rm(t) {
      return t ? --t * t * ((r + 1) * t + r) + 1 : 0;
    }
    void 0 === r && (r = 1.70158);
    var t =
      "out" === e
        ? Rm
        : "in" === e
        ? function (t) {
            return 1 - Rm(1 - t);
          }
        : Tb(Rm);
    return (
      (t.config = function (t) {
        return Vb(e, t);
      }),
      t
    );
  }
  var F,
    L,
    l,
    I,
    h,
    n,
    a,
    i,
    o,
    f,
    d,
    c,
    p,
    _,
    m,
    g,
    b,
    O,
    k,
    M,
    C,
    A,
    z,
    E,
    D,
    B,
    Y,
    j,
    q = { autoSleep: 120, force3D: "auto", nullTargetWarn: 1, units: { lineHeight: "" } },
    V = { duration: 0.5, overwrite: !1, delay: 0 },
    U = 1e8,
    X = 1 / U,
    N = 2 * Math.PI,
    G = N / 4,
    W = 0,
    K = Math.sqrt,
    J = Math.cos,
    H = Math.sin,
    $ = ("function" == typeof ArrayBuffer && ArrayBuffer.isView) || function () {},
    Z = Array.isArray,
    tt = /(?:-?\.?\d|\.)+/gi,
    et = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
    rt = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
    it = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
    nt = /[+-]=-?[.\d]+/,
    at = /[^,'"\[\]\s]+/gi,
    st = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
    ot = {},
    ut = { suppressEvents: !0, isStart: !0, kill: !1 },
    ht = { suppressEvents: !0, kill: !1 },
    lt = { suppressEvents: !0 },
    ft = {},
    dt = [],
    ct = {},
    pt = {},
    _t = {},
    mt = 30,
    gt = [],
    vt = "",
    yt = function _merge(t, e) {
      for (var r in e) t[r] = e[r];
      return t;
    },
    Tt = function _animationCycle(t, e) {
      var r = Math.floor((t /= e));
      return t && r === t ? r - 1 : r;
    },
    bt = function _isFromOrFromStart(t) {
      var e = t.data;
      return "isFromStart" === e || "isStart" === e;
    },
    wt = { _start: 0, endTime: T, totalDuration: T },
    xt = function _parsePosition(t, e, i) {
      var n,
        a,
        s,
        o = t.labels,
        u = t._recent || wt,
        h = t.duration() >= U ? u.endTime(!1) : t._dur;
      return r(e) && (isNaN(e) || e in o)
        ? ((a = e.charAt(0)),
          (s = "%" === e.substr(-1)),
          (n = e.indexOf("=")),
          "<" === a || ">" === a
            ? (0 <= n && (e = e.replace(/=/, "")), ("<" === a ? u._start : u.endTime(0 <= u._repeat)) + (parseFloat(e.substr(1)) || 0) * (s ? (n < 0 ? u : i).totalDuration() / 100 : 1))
            : n < 0
            ? (e in o || (o[e] = h), o[e])
            : ((a = parseFloat(e.charAt(n - 1) + e.substr(n + 1))), s && i && (a = (a / 100) * (Z(i) ? i[0] : i).totalDuration()), 1 < n ? _parsePosition(t, e.substr(0, n - 1), i) + a : h + a))
        : null == e
        ? h
        : +e;
    },
    Ot = function _clamp(t, e, r) {
      return r < t ? t : e < r ? e : r;
    },
    kt = [].slice,
    Mt = function toArray(t, e, i) {
      return l && !e && l.selector
        ? l.selector(t)
        : !r(t) || i || (!n && Ft())
        ? Z(t)
          ? (function _flatten(t, e, i) {
              return (
                void 0 === i && (i = []),
                t.forEach(function (t) {
                  return (r(t) && !e) || _a(t, 1) ? i.push.apply(i, Mt(t)) : i.push(t);
                }) || i
              );
            })(t, i)
          : _a(t)
          ? kt.call(t, 0)
          : t
          ? [t]
          : []
        : kt.call((e || a).querySelectorAll(t), 0);
    },
    Pt = function mapRange(e, t, r, i, n) {
      var a = t - e,
        s = i - r;
      return Wa(n, function (t) {
        return r + (((t - e) / a) * s || 0);
      });
    },
    Ct = function _callback(t, e, r) {
      var i,
        n,
        a,
        s = t.vars,
        o = s[e],
        u = l,
        h = t._ctx;
      if (o) return (i = s[e + "Params"]), (n = s.callbackScope || t), r && dt.length && ma(), h && (l = h), (a = i ? o.apply(n, i) : o.call(n)), (l = u), a;
    },
    At = [],
    St = 255,
    zt = {
      aqua: [0, St, St],
      lime: [0, St, 0],
      silver: [192, 192, 192],
      black: [0, 0, 0],
      maroon: [128, 0, 0],
      teal: [0, 128, 128],
      blue: [0, 0, St],
      navy: [0, 0, 128],
      white: [St, St, St],
      olive: [128, 128, 0],
      yellow: [St, St, 0],
      orange: [St, 165, 0],
      gray: [128, 128, 128],
      purple: [128, 0, 128],
      green: [0, 128, 0],
      red: [St, 0, 0],
      pink: [St, 192, 203],
      cyan: [0, St, St],
      transparent: [St, St, St, 0],
    },
    Et = (function () {
      var t,
        e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
      for (t in zt) e += "|" + t + "\\b";
      return new RegExp(e + ")", "gi");
    })(),
    Dt = /hsl[a]?\(/,
    Rt =
      ((k = Date.now),
      (M = 500),
      (C = 33),
      (A = k()),
      (z = A),
      (D = E = 1e3 / 240),
      (g = {
        time: 0,
        frame: 0,
        tick: function tick() {
          yl(!0);
        },
        deltaRatio: function deltaRatio(t) {
          return b / (1e3 / (t || 60));
        },
        wake: function wake() {
          o &&
            (!n &&
              x() &&
              ((h = n = window),
              (a = h.document || {}),
              (ot.gsap = ze),
              (h.gsapVersions || (h.gsapVersions = [])).push(ze.version),
              P(i || h.GreenSockGlobals || (!h.gsap && h) || {}),
              At.forEach(wb)),
            (m = "undefined" != typeof requestAnimationFrame && requestAnimationFrame),
            p && g.sleep(),
            (_ =
              m ||
              function (t) {
                return setTimeout(t, (D - 1e3 * g.time + 1) | 0);
              }),
            (c = 1),
            yl(2));
        },
        sleep: function sleep() {
          (m ? cancelAnimationFrame : clearTimeout)(p), (c = 0), (_ = T);
        },
        lagSmoothing: function lagSmoothing(t, e) {
          (M = t || 1 / 0), (C = Math.min(e || 33, M));
        },
        fps: function fps(t) {
          (E = 1e3 / (t || 240)), (D = 1e3 * g.time + E);
        },
        add: function add(n, t, e) {
          var a = t
            ? function (t, e, r, i) {
                n(t, e, r, i), g.remove(a);
              }
            : n;
          return g.remove(n), B[e ? "unshift" : "push"](a), Ft(), a;
        },
        remove: function remove(t, e) {
          ~(e = B.indexOf(t)) && B.splice(e, 1) && e <= O && O--;
        },
        _listeners: (B = []),
      })),
    Ft = function _wake() {
      return !c && Rt.wake();
    },
    Lt = {},
    It = /^[\d.\-M][\d.\-,\s]/,
    Bt = /["']/g,
    Yt = function _invertEase(e) {
      return function (t) {
        return 1 - e(1 - t);
      };
    },
    jt = function _parseEase(t, e) {
      return (t && (s(t) ? t : Lt[t] || Ob(t))) || e;
    };
  function yl(t) {
    var e,
      r,
      i,
      n,
      a = k() - z,
      s = !0 === t;
    if (
      ((M < a || a < 0) && (A += a - C),
      (0 < (e = (i = (z += a) - A) - D) || s) && ((n = ++g.frame), (b = i - 1e3 * g.time), (g.time = i /= 1e3), (D += e + (E <= e ? 4 : E - e)), (r = 1)),
      s || (p = _(yl)),
      r)
    )
      for (O = 0; O < B.length; O++) B[O](i, b, n, t);
  }
  function gn(t) {
    return t < j
      ? Y * t * t
      : t < 0.7272727272727273
      ? Y * Math.pow(t - 1.5 / 2.75, 2) + 0.75
      : t < 0.9090909090909092
      ? Y * (t -= 2.25 / 2.75) * t + 0.9375
      : Y * Math.pow(t - 2.625 / 2.75, 2) + 0.984375;
  }
  ha("Linear,Quad,Cubic,Quart,Quint,Strong", function (t, e) {
    var r = e < 5 ? e + 1 : e;
    Sb(
      t + ",Power" + (r - 1),
      e
        ? function (t) {
            return Math.pow(t, r);
          }
        : function (t) {
            return t;
          },
      function (t) {
        return 1 - Math.pow(1 - t, r);
      },
      function (t) {
        return t < 0.5 ? Math.pow(2 * t, r) / 2 : 1 - Math.pow(2 * (1 - t), r) / 2;
      }
    );
  }),
    (Lt.Linear.easeNone = Lt.none = Lt.Linear.easeIn),
    Sb("Elastic", Ub("in"), Ub("out"), Ub()),
    (Y = 7.5625),
    (j = 1 / 2.75),
    Sb(
      "Bounce",
      function (t) {
        return 1 - gn(1 - t);
      },
      gn
    ),
    Sb("Expo", function (t) {
      return t ? Math.pow(2, 10 * (t - 1)) : 0;
    }),
    Sb("Circ", function (t) {
      return -(K(1 - t * t) - 1);
    }),
    Sb("Sine", function (t) {
      return 1 === t ? 1 : 1 - J(t * G);
    }),
    Sb("Back", Vb("in"), Vb("out"), Vb()),
    (Lt.SteppedEase =
      Lt.steps =
      ot.SteppedEase =
        {
          config: function config(t, e) {
            void 0 === t && (t = 1);
            var r = 1 / t,
              i = t + (e ? 0 : 1),
              n = e ? 1 : 0;
            return function (t) {
              return (((i * Ot(0, 0.99999999, t)) | 0) + n) * r;
            };
          },
        }),
    (V.ease = Lt["quad.out"]),
    ha("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function (t) {
      return (vt += t + "," + t + "Params,");
    });
  var qt,
    Vt = function GSCache(t, e) {
      (this.id = W++), ((t._gsap = this).target = t), (this.harness = e), (this.get = e ? e.get : ga), (this.set = e ? e.getSetter : ne);
    },
    Ut =
      (((qt = Animation.prototype).delay = function delay(t) {
        return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay), (this._delay = t), this) : this._delay;
      }),
      (qt.duration = function duration(t) {
        return arguments.length ? this.totalDuration(0 < this._repeat ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur;
      }),
      (qt.totalDuration = function totalDuration(t) {
        return arguments.length ? ((this._dirty = 0), Ra(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
      }),
      (qt.totalTime = function totalTime(t, e) {
        if ((Ft(), !arguments.length)) return this._tTime;
        var r = this._dp;
        if (r && r.smoothChildTiming && this._ts) {
          for (Ia(this, t), !r._dp || r.parent || Ja(r, this); r && r.parent; )
            r.parent._time !== r._start + (0 <= r._ts ? r._tTime / r._ts : (r.totalDuration() - r._tTime) / -r._ts) && r.totalTime(r._tTime, !0), (r = r.parent);
          !this.parent && this._dp.autoRemoveChildren && ((0 < this._ts && t < this._tDur) || (this._ts < 0 && 0 < t) || (!this._tDur && !t)) && Ka(this._dp, this, this._start - this._delay);
        }
        return (
          (this._tTime !== t || (!this._dur && !e) || (this._initted && Math.abs(this._zTime) === X) || (!t && !this._initted && (this.add || this._ptLookup))) &&
            (this._ts || (this._pTime = t), na(this, t, e)),
          this
        );
      }),
      (qt.time = function time(t, e) {
        return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + Ea(this)) % (this._dur + this._rDelay) || (t ? this._dur : 0), e) : this._time;
      }),
      (qt.totalProgress = function totalProgress(t, e) {
        return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : 0 < this.rawTime() ? 1 : 0;
      }),
      (qt.progress = function progress(t, e) {
        return arguments.length
          ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + Ea(this), e)
          : this.duration()
          ? Math.min(1, this._time / this._dur)
          : 0 < this.rawTime()
          ? 1
          : 0;
      }),
      (qt.iteration = function iteration(t, e) {
        var r = this.duration() + this._rDelay;
        return arguments.length ? this.totalTime(this._time + (t - 1) * r, e) : this._repeat ? Tt(this._tTime, r) + 1 : 1;
      }),
      (qt.timeScale = function timeScale(t, e) {
        if (!arguments.length) return this._rts === -X ? 0 : this._rts;
        if (this._rts === t) return this;
        var r = this.parent && this._ts ? Ga(this.parent._time, this) : this._tTime;
        return (
          (this._rts = +t || 0),
          (this._ts = this._ps || t === -X ? 0 : this._rts),
          this.totalTime(Ot(-Math.abs(this._delay), this._tDur, r), !1 !== e),
          Ha(this),
          (function _recacheAncestors(t) {
            for (var e = t.parent; e && e.parent; ) (e._dirty = 1), e.totalDuration(), (e = e.parent);
            return t;
          })(this)
        );
      }),
      (qt.paused = function paused(t) {
        return arguments.length
          ? (this._ps !== t &&
              ((this._ps = t)
                ? ((this._pTime = this._tTime || Math.max(-this._delay, this.rawTime())), (this._ts = this._act = 0))
                : (Ft(),
                  (this._ts = this._rts),
                  this.totalTime(
                    this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime,
                    1 === this.progress() && Math.abs(this._zTime) !== X && (this._tTime -= X)
                  ))),
            this)
          : this._ps;
      }),
      (qt.startTime = function startTime(t) {
        if (arguments.length) {
          this._start = t;
          var e = this.parent || this._dp;
          return !e || (!e._sort && this.parent) || Ka(e, this, t - this._delay), this;
        }
        return this._start;
      }),
      (qt.endTime = function endTime(t) {
        return this._start + (w(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
      }),
      (qt.rawTime = function rawTime(t) {
        var e = this.parent || this._dp;
        return e
          ? t && (!this._ts || (this._repeat && this._time && this.totalProgress() < 1))
            ? this._tTime % (this._dur + this._rDelay)
            : this._ts
            ? Ga(e.rawTime(t), this)
            : this._tTime
          : this._tTime;
      }),
      (qt.revert = function revert(t) {
        void 0 === t && (t = lt);
        var e = L;
        return (
          (L = t),
          (this._initted || this._startAt) && (this.timeline && this.timeline.revert(t), this.totalTime(-0.01, t.suppressEvents)),
          "nested" !== this.data && !1 !== t.kill && this.kill(),
          (L = e),
          this
        );
      }),
      (qt.globalTime = function globalTime(t) {
        for (var e = this, r = arguments.length ? t : e.rawTime(); e; ) (r = e._start + r / (Math.abs(e._ts) || 1)), (e = e._dp);
        return !this.parent && this._sat ? this._sat.globalTime(t) : r;
      }),
      (qt.repeat = function repeat(t) {
        return arguments.length ? ((this._repeat = t === 1 / 0 ? -2 : t), Sa(this)) : -2 === this._repeat ? 1 / 0 : this._repeat;
      }),
      (qt.repeatDelay = function repeatDelay(t) {
        if (arguments.length) {
          var e = this._time;
          return (this._rDelay = t), Sa(this), e ? this.time(e) : this;
        }
        return this._rDelay;
      }),
      (qt.yoyo = function yoyo(t) {
        return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
      }),
      (qt.seek = function seek(t, e) {
        return this.totalTime(xt(this, t), w(e));
      }),
      (qt.restart = function restart(t, e) {
        return this.play().totalTime(t ? -this._delay : 0, w(e));
      }),
      (qt.play = function play(t, e) {
        return null != t && this.seek(t, e), this.reversed(!1).paused(!1);
      }),
      (qt.reverse = function reverse(t, e) {
        return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1);
      }),
      (qt.pause = function pause(t, e) {
        return null != t && this.seek(t, e), this.paused(!0);
      }),
      (qt.resume = function resume() {
        return this.paused(!1);
      }),
      (qt.reversed = function reversed(t) {
        return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -X : 0)), this) : this._rts < 0;
      }),
      (qt.invalidate = function invalidate() {
        return (this._initted = this._act = 0), (this._zTime = -X), this;
      }),
      (qt.isActive = function isActive() {
        var t,
          e = this.parent || this._dp,
          r = this._start;
        return !(e && !(this._ts && this._initted && e.isActive() && (t = e.rawTime(!0)) >= r && t < this.endTime(!0) - X));
      }),
      (qt.eventCallback = function eventCallback(t, e, r) {
        var i = this.vars;
        return 1 < arguments.length ? (e ? ((i[t] = e), r && (i[t + "Params"] = r), "onUpdate" === t && (this._onUpdate = e)) : delete i[t], this) : i[t];
      }),
      (qt.then = function then(t) {
        var i = this;
        return new Promise(function (e) {
          function Co() {
            var t = i.then;
            (i.then = null), s(r) && (r = r(i)) && (r.then || r === i) && (i.then = t), e(r), (i.then = t);
          }
          var r = s(t) ? t : pa;
          (i._initted && 1 === i.totalProgress() && 0 <= i._ts) || (!i._tTime && i._ts < 0) ? Co() : (i._prom = Co);
        });
      }),
      (qt.kill = function kill() {
        tb(this);
      }),
      Animation);
  function Animation(t) {
    (this.vars = t),
      (this._delay = +t.delay || 0),
      (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && ((this._rDelay = t.repeatDelay || 0), (this._yoyo = !!t.yoyo || !!t.yoyoEase)),
      (this._ts = 1),
      Ra(this, +t.duration, 1, 1),
      (this.data = t.data),
      l && (this._ctx = l).data.push(this),
      c || Rt.wake();
  }
  qa(Ut.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: !1,
    parent: null,
    _initted: !1,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -X,
    _prom: 0,
    _ps: !1,
    _rts: 1,
  });
  var Xt = (function (i) {
    function Timeline(t, e) {
      var r;
      return (
        void 0 === t && (t = {}),
        ((r = i.call(this, t) || this).labels = {}),
        (r.smoothChildTiming = !!t.smoothChildTiming),
        (r.autoRemoveChildren = !!t.autoRemoveChildren),
        (r._sort = w(t.sortChildren)),
        I && Ka(t.parent || I, _assertThisInitialized(r), e),
        t.reversed && r.reverse(),
        t.paused && r.paused(!0),
        t.scrollTrigger && La(_assertThisInitialized(r), t.scrollTrigger),
        r
      );
    }
    _inheritsLoose(Timeline, i);
    var e = Timeline.prototype;
    return (
      (e.to = function to(t, e, r) {
        return Va(0, arguments, this), this;
      }),
      (e.from = function from(t, e, r) {
        return Va(1, arguments, this), this;
      }),
      (e.fromTo = function fromTo(t, e, r, i) {
        return Va(2, arguments, this), this;
      }),
      (e.set = function set(t, e, r) {
        return (e.duration = 0), (e.parent = this), va(e).repeatDelay || (e.repeat = 0), (e.immediateRender = !!e.immediateRender), new $t(t, e, xt(this, r), 1), this;
      }),
      (e.call = function call(t, e, r) {
        return Ka(this, $t.delayedCall(0, t, e), r);
      }),
      (e.staggerTo = function staggerTo(t, e, r, i, n, a, s) {
        return (r.duration = e), (r.stagger = r.stagger || i), (r.onComplete = a), (r.onCompleteParams = s), (r.parent = this), new $t(t, r, xt(this, n)), this;
      }),
      (e.staggerFrom = function staggerFrom(t, e, r, i, n, a, s) {
        return (r.runBackwards = 1), (va(r).immediateRender = w(r.immediateRender)), this.staggerTo(t, e, r, i, n, a, s);
      }),
      (e.staggerFromTo = function staggerFromTo(t, e, r, i, n, a, s, o) {
        return (i.startAt = r), (va(i).immediateRender = w(i.immediateRender)), this.staggerTo(t, e, i, n, a, s, o);
      }),
      (e.render = function render(t, e, r) {
        var i,
          n,
          a,
          s,
          o,
          u,
          h,
          l,
          f,
          d,
          c,
          p,
          _ = this._time,
          m = this._dirty ? this.totalDuration() : this._tDur,
          g = this._dur,
          v = t <= 0 ? 0 : ja(t),
          y = this._zTime < 0 != t < 0 && (this._initted || !g);
        if ((this !== I && m < v && 0 <= t && (v = m), v !== this._tTime || r || y)) {
          if (
            (_ !== this._time && g && ((v += this._time - _), (t += this._time - _)),
            (i = v),
            (f = this._start),
            (u = !(l = this._ts)),
            y && (g || (_ = this._zTime), (!t && e) || (this._zTime = t)),
            this._repeat)
          ) {
            if (((c = this._yoyo), (o = g + this._rDelay), this._repeat < -1 && t < 0)) return this.totalTime(100 * o + t, e, r);
            if (
              ((i = ja(v % o)),
              v === m ? ((s = this._repeat), (i = g)) : ((s = ~~(v / o)) && s === v / o && ((i = g), s--), g < i && (i = g)),
              (d = Tt(this._tTime, o)),
              !_ && this._tTime && d !== s && this._tTime - d * o - this._dur <= 0 && (d = s),
              c && 1 & s && ((i = g - i), (p = 1)),
              s !== d && !this._lock)
            ) {
              var T = c && 1 & d,
                b = T === (c && 1 & s);
              if (
                (s < d && (T = !T),
                (_ = T ? 0 : v % g ? g : v),
                (this._lock = 1),
                (this.render(_ || (p ? 0 : ja(s * o)), e, !g)._lock = 0),
                (this._tTime = v),
                !e && this.parent && Ct(this, "onRepeat"),
                this.vars.repeatRefresh && !p && (this.invalidate()._lock = 1),
                (_ && _ !== this._time) || u != !this._ts || (this.vars.onRepeat && !this.parent && !this._act))
              )
                return this;
              if (
                ((g = this._dur),
                (m = this._tDur),
                b && ((this._lock = 2), (_ = T ? g : -1e-4), this.render(_, !0), this.vars.repeatRefresh && !p && this.invalidate()),
                (this._lock = 0),
                !this._ts && !u)
              )
                return this;
              Qb(this, p);
            }
          }
          if (
            (this._hasPause &&
              !this._forcing &&
              this._lock < 2 &&
              (h = (function _findNextPauseTween(t, e, r) {
                var i;
                if (e < r)
                  for (i = t._first; i && i._start <= r; ) {
                    if ("isPause" === i.data && i._start > e) return i;
                    i = i._next;
                  }
                else
                  for (i = t._last; i && i._start >= r; ) {
                    if ("isPause" === i.data && i._start < e) return i;
                    i = i._prev;
                  }
              })(this, ja(_), ja(i))) &&
              (v -= i - (i = h._start)),
            (this._tTime = v),
            (this._time = i),
            (this._act = !l),
            this._initted || ((this._onUpdate = this.vars.onUpdate), (this._initted = 1), (this._zTime = t), (_ = 0)),
            !_ && i && !e && !s && (Ct(this, "onStart"), this._tTime !== v))
          )
            return this;
          if (_ <= i && 0 <= t)
            for (n = this._first; n; ) {
              if (((a = n._next), (n._act || i >= n._start) && n._ts && h !== n)) {
                if (n.parent !== this) return this.render(t, e, r);
                if ((n.render(0 < n._ts ? (i - n._start) * n._ts : (n._dirty ? n.totalDuration() : n._tDur) + (i - n._start) * n._ts, e, r), i !== this._time || (!this._ts && !u))) {
                  (h = 0), a && (v += this._zTime = -X);
                  break;
                }
              }
              n = a;
            }
          else {
            n = this._last;
            for (var w = t < 0 ? t : i; n; ) {
              if (((a = n._prev), (n._act || w <= n._end) && n._ts && h !== n)) {
                if (n.parent !== this) return this.render(t, e, r);
                if (
                  (n.render(0 < n._ts ? (w - n._start) * n._ts : (n._dirty ? n.totalDuration() : n._tDur) + (w - n._start) * n._ts, e, r || (L && (n._initted || n._startAt))),
                  i !== this._time || (!this._ts && !u))
                ) {
                  (h = 0), a && (v += this._zTime = w ? -X : X);
                  break;
                }
              }
              n = a;
            }
          }
          if (h && !e && (this.pause(), (h.render(_ <= i ? 0 : -X)._zTime = _ <= i ? 1 : -1), this._ts)) return (this._start = f), Ha(this), this.render(t, e, r);
          this._onUpdate && !e && Ct(this, "onUpdate", !0),
            ((v === m && this._tTime >= this.totalDuration()) || (!v && _)) &&
              ((f !== this._start && Math.abs(l) === Math.abs(this._ts)) ||
                this._lock ||
                ((!t && g) || !((v === m && 0 < this._ts) || (!v && this._ts < 0)) || za(this, 1),
                e || (t < 0 && !_) || (!v && !_ && m) || (Ct(this, v === m && 0 <= t ? "onComplete" : "onReverseComplete", !0), !this._prom || (v < m && 0 < this.timeScale()) || this._prom())));
        }
        return this;
      }),
      (e.add = function add(e, i) {
        var n = this;
        if ((t(i) || (i = xt(this, i, e)), !(e instanceof Ut))) {
          if (Z(e))
            return (
              e.forEach(function (t) {
                return n.add(t, i);
              }),
              this
            );
          if (r(e)) return this.addLabel(e, i);
          if (!s(e)) return this;
          e = $t.delayedCall(0, e);
        }
        return this !== e ? Ka(this, e, i) : this;
      }),
      (e.getChildren = function getChildren(t, e, r, i) {
        void 0 === t && (t = !0), void 0 === e && (e = !0), void 0 === r && (r = !0), void 0 === i && (i = -U);
        for (var n = [], a = this._first; a; ) a._start >= i && (a instanceof $t ? e && n.push(a) : (r && n.push(a), t && n.push.apply(n, a.getChildren(!0, e, r)))), (a = a._next);
        return n;
      }),
      (e.getById = function getById(t) {
        for (var e = this.getChildren(1, 1, 1), r = e.length; r--; ) if (e[r].vars.id === t) return e[r];
      }),
      (e.remove = function remove(t) {
        return r(t) ? this.removeLabel(t) : s(t) ? this.killTweensOf(t) : (ya(this, t), t === this._recent && (this._recent = this._last), Aa(this));
      }),
      (e.totalTime = function totalTime(t, e) {
        return arguments.length
          ? ((this._forcing = 1),
            !this._dp && this._ts && (this._start = ja(Rt.time - (0 < this._ts ? t / this._ts : (this.totalDuration() - t) / -this._ts))),
            i.prototype.totalTime.call(this, t, e),
            (this._forcing = 0),
            this)
          : this._tTime;
      }),
      (e.addLabel = function addLabel(t, e) {
        return (this.labels[t] = xt(this, e)), this;
      }),
      (e.removeLabel = function removeLabel(t) {
        return delete this.labels[t], this;
      }),
      (e.addPause = function addPause(t, e, r) {
        var i = $t.delayedCall(0, e || T, r);
        return (i.data = "isPause"), (this._hasPause = 1), Ka(this, i, xt(this, t));
      }),
      (e.removePause = function removePause(t) {
        var e = this._first;
        for (t = xt(this, t); e; ) e._start === t && "isPause" === e.data && za(e), (e = e._next);
      }),
      (e.killTweensOf = function killTweensOf(t, e, r) {
        for (var i = this.getTweensOf(t, r), n = i.length; n--; ) Nt !== i[n] && i[n].kill(t, e);
        return this;
      }),
      (e.getTweensOf = function getTweensOf(e, r) {
        for (var i, n = [], a = Mt(e), s = this._first, o = t(r); s; )
          s instanceof $t
            ? la(s._targets, a) && (o ? (!Nt || (s._initted && s._ts)) && s.globalTime(0) <= r && s.globalTime(s.totalDuration()) > r : !r || s.isActive()) && n.push(s)
            : (i = s.getTweensOf(a, r)).length && n.push.apply(n, i),
            (s = s._next);
        return n;
      }),
      (e.tweenTo = function tweenTo(t, e) {
        e = e || {};
        var r,
          i = this,
          n = xt(i, t),
          a = e.startAt,
          s = e.onStart,
          o = e.onStartParams,
          u = e.immediateRender,
          h = $t.to(
            i,
            qa(
              {
                ease: e.ease || "none",
                lazy: !1,
                immediateRender: !1,
                time: n,
                overwrite: "auto",
                duration: e.duration || Math.abs((n - (a && "time" in a ? a.time : i._time)) / i.timeScale()) || X,
                onStart: function onStart() {
                  if ((i.pause(), !r)) {
                    var t = e.duration || Math.abs((n - (a && "time" in a ? a.time : i._time)) / i.timeScale());
                    h._dur !== t && Ra(h, t, 0, 1).render(h._time, !0, !0), (r = 1);
                  }
                  s && s.apply(h, o || []);
                },
              },
              e
            )
          );
        return u ? h.render(0) : h;
      }),
      (e.tweenFromTo = function tweenFromTo(t, e, r) {
        return this.tweenTo(e, qa({ startAt: { time: xt(this, t) } }, r));
      }),
      (e.recent = function recent() {
        return this._recent;
      }),
      (e.nextLabel = function nextLabel(t) {
        return void 0 === t && (t = this._time), rb(this, xt(this, t));
      }),
      (e.previousLabel = function previousLabel(t) {
        return void 0 === t && (t = this._time), rb(this, xt(this, t), 1);
      }),
      (e.currentLabel = function currentLabel(t) {
        return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + X);
      }),
      (e.shiftChildren = function shiftChildren(t, e, r) {
        void 0 === r && (r = 0);
        for (var i, n = this._first, a = this.labels; n; ) n._start >= r && ((n._start += t), (n._end += t)), (n = n._next);
        if (e) for (i in a) a[i] >= r && (a[i] += t);
        return Aa(this);
      }),
      (e.invalidate = function invalidate(t) {
        var e = this._first;
        for (this._lock = 0; e; ) e.invalidate(t), (e = e._next);
        return i.prototype.invalidate.call(this, t);
      }),
      (e.clear = function clear(t) {
        void 0 === t && (t = !0);
        for (var e, r = this._first; r; ) (e = r._next), this.remove(r), (r = e);
        return this._dp && (this._time = this._tTime = this._pTime = 0), t && (this.labels = {}), Aa(this);
      }),
      (e.totalDuration = function totalDuration(t) {
        var e,
          r,
          i,
          n = 0,
          a = this,
          s = a._last,
          o = U;
        if (arguments.length) return a.timeScale((a._repeat < 0 ? a.duration() : a.totalDuration()) / (a.reversed() ? -t : t));
        if (a._dirty) {
          for (i = a.parent; s; )
            (e = s._prev),
              s._dirty && s.totalDuration(),
              o < (r = s._start) && a._sort && s._ts && !a._lock ? ((a._lock = 1), (Ka(a, s, r - s._delay, 1)._lock = 0)) : (o = r),
              r < 0 && s._ts && ((n -= r), ((!i && !a._dp) || (i && i.smoothChildTiming)) && ((a._start += r / a._ts), (a._time -= r), (a._tTime -= r)), a.shiftChildren(-r, !1, -Infinity), (o = 0)),
              s._end > n && s._ts && (n = s._end),
              (s = e);
          Ra(a, a === I && a._time > n ? a._time : n, 1, 1), (a._dirty = 0);
        }
        return a._tDur;
      }),
      (Timeline.updateRoot = function updateRoot(t) {
        if ((I._ts && (na(I, Ga(t, I)), (f = Rt.frame)), Rt.frame >= mt)) {
          mt += q.autoSleep || 120;
          var e = I._first;
          if ((!e || !e._ts) && q.autoSleep && Rt._listeners.length < 2) {
            for (; e && !e._ts; ) e = e._next;
            e || Rt.sleep();
          }
        }
      }),
      Timeline
    );
  })(Ut);
  qa(Xt.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
  function ac(t, e, i, n, a, o) {
    var u, h, l, f;
    if (
      pt[t] &&
      !1 !==
        (u = new pt[t]()).init(
          a,
          u.rawVars
            ? e[t]
            : (function _processVars(t, e, i, n, a) {
                if ((s(t) && (t = Kt(t, a, e, i, n)), !v(t) || (t.style && t.nodeType) || Z(t) || $(t))) return r(t) ? Kt(t, a, e, i, n) : t;
                var o,
                  u = {};
                for (o in t) u[o] = Kt(t[o], a, e, i, n);
                return u;
              })(e[t], n, a, o, i),
          i,
          n,
          o
        ) &&
      ((i._pt = h = new _e(i._pt, a, t, 0, 1, u.render, u, 0, u.priority)), i !== d)
    )
      for (l = i._ptLookup[i._targets.indexOf(a)], f = u._props.length; f--; ) l[u._props[f]] = h;
    return u;
  }
  function gc(t, r, e, i) {
    var n,
      a,
      s = r.ease || i || "power1.inOut";
    if (Z(r))
      (a = e[t] || (e[t] = [])),
        r.forEach(function (t, e) {
          return a.push({ t: (e / (r.length - 1)) * 100, v: t, e: s });
        });
    else for (n in r) (a = e[n] || (e[n] = [])), "ease" === n || a.push({ t: parseFloat(t), v: r[n], e: s });
  }
  var Nt,
    Gt,
    Wt = function _addPropTween(t, e, i, n, a, o, u, h, l, f) {
      s(n) && (n = n(a || 0, t, o));
      var d,
        c = t[e],
        p = "get" !== i ? i : s(c) ? (l ? t[e.indexOf("set") || !s(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](l) : t[e]()) : c,
        _ = s(c) ? (l ? re : te) : Zt;
      if ((r(n) && (~n.indexOf("random(") && (n = ob(n)), "=" === n.charAt(1) && ((!(d = ka(p, n) + (Ya(p) || 0)) && 0 !== d) || (n = d))), !f || p !== n || Gt))
        return isNaN(p * n) || "" === n
          ? (c || e in t || Q(e, n),
            function _addComplexStringPropTween(t, e, r, i, n, a, s) {
              var o,
                u,
                h,
                l,
                f,
                d,
                c,
                p,
                _ = new _e(this._pt, t, e, 0, 1, ue, null, n),
                m = 0,
                g = 0;
              for (_.b = r, _.e = i, r += "", (c = ~(i += "").indexOf("random(")) && (i = ob(i)), a && (a((p = [r, i]), t, e), (r = p[0]), (i = p[1])), u = r.match(it) || []; (o = it.exec(i)); )
                (l = o[0]),
                  (f = i.substring(m, o.index)),
                  h ? (h = (h + 1) % 5) : "rgba(" === f.substr(-5) && (h = 1),
                  l !== u[g++] &&
                    ((d = parseFloat(u[g - 1]) || 0),
                    (_._pt = { _next: _._pt, p: f || 1 === g ? f : ",", s: d, c: "=" === l.charAt(1) ? ka(d, l) - d : parseFloat(l) - d, m: h && h < 4 ? Math.round : 0 }),
                    (m = it.lastIndex));
              return (_.c = m < i.length ? i.substring(m, i.length) : ""), (_.fp = s), (nt.test(i) || c) && (_.e = 0), (this._pt = _);
            }.call(this, t, e, p, n, _, h || q.stringFilter, l))
          : ((d = new _e(this._pt, t, e, +p || 0, n - (p || 0), "boolean" == typeof c ? se : ae, 0, _)), l && (d.fp = l), u && d.modifier(u, this, t), (this._pt = d));
    },
    Qt = function _initTween(t, e, r) {
      var i,
        n,
        a,
        s,
        o,
        u,
        h,
        l,
        f,
        d,
        c,
        p,
        _,
        m = t.vars,
        g = m.ease,
        v = m.startAt,
        y = m.immediateRender,
        T = m.lazy,
        b = m.onUpdate,
        x = m.runBackwards,
        O = m.yoyoEase,
        k = m.keyframes,
        M = m.autoRevert,
        P = t._dur,
        C = t._startAt,
        A = t._targets,
        S = t.parent,
        z = S && "nested" === S.data ? S.vars.targets : A,
        E = "auto" === t._overwrite && !F,
        D = t.timeline;
      if (
        (!D || (k && g) || (g = "none"),
        (t._ease = jt(g, V.ease)),
        (t._yEase = O ? Yt(jt(!0 === O ? g : O, V.ease)) : 0),
        O && t._yoyo && !t._repeat && ((O = t._yEase), (t._yEase = t._ease), (t._ease = O)),
        (t._from = !D && !!m.runBackwards),
        !D || (k && !m.stagger))
      ) {
        if (
          ((p = (l = A[0] ? fa(A[0]).harness : 0) && m[l.prop]),
          (i = ua(m, ft)),
          C && (C._zTime < 0 && C.progress(1), e < 0 && x && y && !M ? C.render(-1, !0) : C.revert(x && P ? ht : ut), (C._lazy = 0)),
          v)
        ) {
          if (
            (za(
              (t._startAt = $t.set(
                A,
                qa(
                  {
                    data: "isStart",
                    overwrite: !1,
                    parent: S,
                    immediateRender: !0,
                    lazy: !C && w(T),
                    startAt: null,
                    delay: 0,
                    onUpdate:
                      b &&
                      function () {
                        return Ct(t, "onUpdate");
                      },
                    stagger: 0,
                  },
                  v
                )
              ))
            ),
            (t._startAt._dp = 0),
            (t._startAt._sat = t),
            e < 0 && (L || (!y && !M)) && t._startAt.revert(ht),
            y && P && e <= 0 && r <= 0)
          )
            return void (e && (t._zTime = e));
        } else if (x && P && !C)
          if (
            (e && (y = !1),
            (a = qa({ overwrite: !1, data: "isFromStart", lazy: y && !C && w(T), immediateRender: y, stagger: 0, parent: S }, i)),
            p && (a[l.prop] = p),
            za((t._startAt = $t.set(A, a))),
            (t._startAt._dp = 0),
            (t._startAt._sat = t),
            e < 0 && (L ? t._startAt.revert(ht) : t._startAt.render(-1, !0)),
            (t._zTime = e),
            y)
          ) {
            if (!e) return;
          } else _initTween(t._startAt, X, X);
        for (t._pt = t._ptCache = 0, T = (P && w(T)) || (T && !P), n = 0; n < A.length; n++) {
          if (
            ((h = (o = A[n])._gsap || ea(A)[n]._gsap),
            (t._ptLookup[n] = d = {}),
            ct[h.id] && dt.length && ma(),
            (c = z === A ? n : z.indexOf(o)),
            l &&
              !1 !== (f = new l()).init(o, p || i, t, c, z) &&
              ((t._pt = s = new _e(t._pt, o, f.name, 0, 1, f.render, f, 0, f.priority)),
              f._props.forEach(function (t) {
                d[t] = s;
              }),
              f.priority && (u = 1)),
            !l || p)
          )
            for (a in i) pt[a] && (f = ac(a, i, t, c, o, z)) ? f.priority && (u = 1) : (d[a] = s = Wt.call(t, o, a, "get", i[a], c, z, 0, m.stringFilter));
          t._op && t._op[n] && t.kill(o, t._op[n]), E && t._pt && ((Nt = t), I.killTweensOf(o, d, t.globalTime(e)), (_ = !t.parent), (Nt = 0)), t._pt && T && (ct[h.id] = 1);
        }
        u && pe(t), t._onInit && t._onInit(t);
      }
      (t._onUpdate = b), (t._initted = (!t._op || t._pt) && !_), k && e <= 0 && D.render(U, !0, !0);
    },
    Kt = function _parseFuncOrString(t, e, i, n, a) {
      return s(t) ? t.call(e, i, n, a) : r(t) && ~t.indexOf("random(") ? ob(t) : t;
    },
    Jt = vt + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
    Ht = {};
  ha(Jt + ",id,stagger,delay,duration,paused,scrollTrigger", function (t) {
    return (Ht[t] = 1);
  });
  var $t = (function (D) {
    function Tween(e, r, i, n) {
      var a;
      "number" == typeof r && ((i.duration = r), (r = i), (i = null));
      var s,
        o,
        u,
        h,
        l,
        f,
        d,
        c,
        p = (a = D.call(this, n ? r : va(r)) || this).vars,
        _ = p.duration,
        m = p.delay,
        g = p.immediateRender,
        T = p.stagger,
        b = p.overwrite,
        x = p.keyframes,
        O = p.defaults,
        k = p.scrollTrigger,
        M = p.yoyoEase,
        P = r.parent || I,
        C = (Z(e) || $(e) ? t(e[0]) : "length" in r) ? [e] : Mt(e);
      if (((a._targets = C.length ? ea(C) : R("GSAP target " + e + " not found. https://gsap.com", !q.nullTargetWarn) || []), (a._ptLookup = []), (a._overwrite = b), x || T || y(_) || y(m))) {
        if (
          ((r = a.vars),
          (s = a.timeline = new Xt({ data: "nested", defaults: O || {}, targets: P && "nested" === P.data ? P.vars.targets : C })).kill(),
          (s.parent = s._dp = _assertThisInitialized(a)),
          (s._start = 0),
          T || y(_) || y(m))
        ) {
          if (((h = C.length), (d = T && eb(T)), v(T))) for (l in T) ~Jt.indexOf(l) && ((c = c || {})[l] = T[l]);
          for (o = 0; o < h; o++)
            ((u = ua(r, Ht)).stagger = 0),
              M && (u.yoyoEase = M),
              c && yt(u, c),
              (f = C[o]),
              (u.duration = +Kt(_, _assertThisInitialized(a), o, f, C)),
              (u.delay = (+Kt(m, _assertThisInitialized(a), o, f, C) || 0) - a._delay),
              !T && 1 === h && u.delay && ((a._delay = m = u.delay), (a._start += m), (u.delay = 0)),
              s.to(f, u, d ? d(o, f, C) : 0),
              (s._ease = Lt.none);
          s.duration() ? (_ = m = 0) : (a.timeline = 0);
        } else if (x) {
          va(qa(s.vars.defaults, { ease: "none" })), (s._ease = jt(x.ease || r.ease || "none"));
          var A,
            S,
            z,
            E = 0;
          if (Z(x))
            x.forEach(function (t) {
              return s.to(C, t, ">");
            }),
              s.duration();
          else {
            for (l in ((u = {}), x)) "ease" === l || "easeEach" === l || gc(l, x[l], u, x.easeEach);
            for (l in u)
              for (
                A = u[l].sort(function (t, e) {
                  return t.t - e.t;
                }),
                  o = E = 0;
                o < A.length;
                o++
              )
                ((z = { ease: (S = A[o]).e, duration: ((S.t - (o ? A[o - 1].t : 0)) / 100) * _ })[l] = S.v), s.to(C, z, E), (E += z.duration);
            s.duration() < _ && s.to({}, { duration: _ - s.duration() });
          }
        }
        _ || a.duration((_ = s.duration()));
      } else a.timeline = 0;
      return (
        !0 !== b || F || ((Nt = _assertThisInitialized(a)), I.killTweensOf(C), (Nt = 0)),
        Ka(P, _assertThisInitialized(a), i),
        r.reversed && a.reverse(),
        r.paused && a.paused(!0),
        (g ||
          (!_ &&
            !x &&
            a._start === ja(P._time) &&
            w(g) &&
            (function _hasNoPausedAncestors(t) {
              return !t || (t._ts && _hasNoPausedAncestors(t.parent));
            })(_assertThisInitialized(a)) &&
            "nested" !== P.data)) &&
          ((a._tTime = -X), a.render(Math.max(0, -m) || 0)),
        k && La(_assertThisInitialized(a), k),
        a
      );
    }
    _inheritsLoose(Tween, D);
    var e = Tween.prototype;
    return (
      (e.render = function render(t, e, r) {
        var i,
          n,
          a,
          s,
          o,
          u,
          h,
          l,
          f,
          d = this._time,
          c = this._tDur,
          p = this._dur,
          _ = t < 0,
          m = c - X < t && !_ ? c : t < X ? 0 : t;
        if (p) {
          if (m !== this._tTime || !t || r || (!this._initted && this._tTime) || (this._startAt && this._zTime < 0 != _)) {
            if (((i = m), (l = this.timeline), this._repeat)) {
              if (((s = p + this._rDelay), this._repeat < -1 && _)) return this.totalTime(100 * s + t, e, r);
              if (
                ((i = ja(m % s)),
                m === c ? ((a = this._repeat), (i = p)) : ((a = ~~(m / s)) && a === ja(m / s) && ((i = p), a--), p < i && (i = p)),
                (u = this._yoyo && 1 & a) && ((f = this._yEase), (i = p - i)),
                (o = Tt(this._tTime, s)),
                i === d && !r && this._initted && a === o)
              )
                return (this._tTime = m), this;
              a !== o &&
                (l && this._yEase && Qb(l, u),
                this.vars.repeatRefresh && !u && !this._lock && this._time !== s && this._initted && ((this._lock = r = 1), (this.render(ja(s * a), !0).invalidate()._lock = 0)));
            }
            if (!this._initted) {
              if (Ma(this, _ ? t : i, r, e, m)) return (this._tTime = 0), this;
              if (!(d === this._time || (r && this.vars.repeatRefresh && a !== o))) return this;
              if (p !== this._dur) return this.render(t, e, r);
            }
            if (
              ((this._tTime = m),
              (this._time = i),
              !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
              (this.ratio = h = (f || this._ease)(i / p)),
              this._from && (this.ratio = h = 1 - h),
              i && !d && !e && !a && (Ct(this, "onStart"), this._tTime !== m))
            )
              return this;
            for (n = this._pt; n; ) n.r(h, n.d), (n = n._next);
            (l && l.render(t < 0 ? t : l._dur * l._ease(i / this._dur), e, r)) || (this._startAt && (this._zTime = t)),
              this._onUpdate && !e && (_ && Ca(this, t, 0, r), Ct(this, "onUpdate")),
              this._repeat && a !== o && this.vars.onRepeat && !e && this.parent && Ct(this, "onRepeat"),
              (m !== this._tDur && m) ||
                this._tTime !== m ||
                (_ && !this._onUpdate && Ca(this, t, 0, !0),
                (!t && p) || !((m === this._tDur && 0 < this._ts) || (!m && this._ts < 0)) || za(this, 1),
                e || (_ && !d) || !(m || d || u) || (Ct(this, m === c ? "onComplete" : "onReverseComplete", !0), !this._prom || (m < c && 0 < this.timeScale()) || this._prom()));
          }
        } else
          !(function _renderZeroDurationTween(t, e, r, i) {
            var n,
              a,
              s,
              o = t.ratio,
              u =
                e < 0 ||
                (!e &&
                  ((!t._start &&
                    (function _parentPlayheadIsBeforeStart(t) {
                      var e = t.parent;
                      return e && e._ts && e._initted && !e._lock && (e.rawTime() < 0 || _parentPlayheadIsBeforeStart(e));
                    })(t) &&
                    (t._initted || !bt(t))) ||
                    ((t._ts < 0 || t._dp._ts < 0) && !bt(t))))
                  ? 0
                  : 1,
              h = t._rDelay,
              l = 0;
            if (
              (h &&
                t._repeat &&
                ((l = Ot(0, t._tDur, e)), (a = Tt(l, h)), t._yoyo && 1 & a && (u = 1 - u), a !== Tt(t._tTime, h) && ((o = 1 - u), t.vars.repeatRefresh && t._initted && t.invalidate())),
              u !== o || L || i || t._zTime === X || (!e && t._zTime))
            ) {
              if (!t._initted && Ma(t, e, i, r, l)) return;
              for (s = t._zTime, t._zTime = e || (r ? X : 0), r = r || (e && !s), t.ratio = u, t._from && (u = 1 - u), t._time = 0, t._tTime = l, n = t._pt; n; ) n.r(u, n.d), (n = n._next);
              e < 0 && Ca(t, e, 0, !0),
                t._onUpdate && !r && Ct(t, "onUpdate"),
                l && t._repeat && !r && t.parent && Ct(t, "onRepeat"),
                (e >= t._tDur || e < 0) && t.ratio === u && (u && za(t, 1), r || L || (Ct(t, u ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()));
            } else t._zTime || (t._zTime = e);
          })(this, t, e, r);
        return this;
      }),
      (e.targets = function targets() {
        return this._targets;
      }),
      (e.invalidate = function invalidate(t) {
        return (
          (t && this.vars.runBackwards) || (this._startAt = 0),
          (this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0),
          (this._ptLookup = []),
          this.timeline && this.timeline.invalidate(t),
          D.prototype.invalidate.call(this, t)
        );
      }),
      (e.resetTo = function resetTo(t, e, r, i, n) {
        c || Rt.wake(), this._ts || this.play();
        var a,
          s = Math.min(this._dur, (this._dp._time - this._start) * this._ts);
        return (
          this._initted || Qt(this, s),
          (a = this._ease(s / this._dur)),
          (function _updatePropTweens(t, e, r, i, n, a, s, o) {
            var u,
              h,
              l,
              f,
              d = ((t._pt && t._ptCache) || (t._ptCache = {}))[e];
            if (!d)
              for (d = t._ptCache[e] = [], l = t._ptLookup, f = t._targets.length; f--; ) {
                if ((u = l[f][e]) && u.d && u.d._pt) for (u = u.d._pt; u && u.p !== e && u.fp !== e; ) u = u._next;
                if (!u) return (Gt = 1), (t.vars[e] = "+=0"), Qt(t, s), (Gt = 0), o ? R(e + " not eligible for reset") : 1;
                d.push(u);
              }
            for (f = d.length; f--; )
              ((u = (h = d[f])._pt || h).s = (!i && 0 !== i) || n ? u.s + (i || 0) + a * u.c : i), (u.c = r - u.s), h.e && (h.e = ia(r) + Ya(h.e)), h.b && (h.b = u.s + Ya(h.b));
          })(this, t, e, r, i, a, s, n)
            ? this.resetTo(t, e, r, i, 1)
            : (Ia(this, 0), this.parent || xa(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0))
        );
      }),
      (e.kill = function kill(t, e) {
        if ((void 0 === e && (e = "all"), !(t || (e && "all" !== e)))) return (this._lazy = this._pt = 0), this.parent ? tb(this) : this;
        if (this.timeline) {
          var i = this.timeline.totalDuration();
          return (
            this.timeline.killTweensOf(t, e, Nt && !0 !== Nt.vars.overwrite)._first || tb(this),
            this.parent && i !== this.timeline.totalDuration() && Ra(this, (this._dur * this.timeline._tDur) / i, 0, 1),
            this
          );
        }
        var n,
          a,
          s,
          o,
          u,
          h,
          l,
          f = this._targets,
          d = t ? Mt(t) : f,
          c = this._ptLookup,
          p = this._pt;
        if (
          (!e || "all" === e) &&
          (function _arraysMatch(t, e) {
            for (var r = t.length, i = r === e.length; i && r-- && t[r] === e[r]; );
            return r < 0;
          })(f, d)
        )
          return "all" === e && (this._pt = 0), tb(this);
        for (
          n = this._op = this._op || [],
            "all" !== e &&
              (r(e) &&
                ((u = {}),
                ha(e, function (t) {
                  return (u[t] = 1);
                }),
                (e = u)),
              (e = (function _addAliasesToVars(t, e) {
                var r,
                  i,
                  n,
                  a,
                  s = t[0] ? fa(t[0]).harness : 0,
                  o = s && s.aliases;
                if (!o) return e;
                for (i in ((r = yt({}, e)), o)) if ((i in r)) for (n = (a = o[i].split(",")).length; n--; ) r[a[n]] = r[i];
                return r;
              })(f, e))),
            l = f.length;
          l--;

        )
          if (~d.indexOf(f[l]))
            for (u in ((a = c[l]), "all" === e ? ((n[l] = e), (o = a), (s = {})) : ((s = n[l] = n[l] || {}), (o = e)), o))
              (h = a && a[u]) && (("kill" in h.d && !0 !== h.d.kill(u)) || ya(this, h, "_pt"), delete a[u]), "all" !== s && (s[u] = 1);
        return this._initted && !this._pt && p && tb(this), this;
      }),
      (Tween.to = function to(t, e, r) {
        return new Tween(t, e, r);
      }),
      (Tween.from = function from(t, e) {
        return Va(1, arguments);
      }),
      (Tween.delayedCall = function delayedCall(t, e, r, i) {
        return new Tween(e, 0, { immediateRender: !1, lazy: !1, overwrite: !1, delay: t, onComplete: e, onReverseComplete: e, onCompleteParams: r, onReverseCompleteParams: r, callbackScope: i });
      }),
      (Tween.fromTo = function fromTo(t, e, r) {
        return Va(2, arguments);
      }),
      (Tween.set = function set(t, e) {
        return (e.duration = 0), e.repeatDelay || (e.repeat = 0), new Tween(t, e);
      }),
      (Tween.killTweensOf = function killTweensOf(t, e, r) {
        return I.killTweensOf(t, e, r);
      }),
      Tween
    );
  })(Ut);
  qa($t.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 }),
    ha("staggerTo,staggerFrom,staggerFromTo", function (r) {
      $t[r] = function () {
        var t = new Xt(),
          e = kt.call(arguments, 0);
        return e.splice("staggerFromTo" === r ? 5 : 4, 0, 0), t[r].apply(t, e);
      };
    });
  function oc(t, e, r) {
    return t.setAttribute(e, r);
  }
  function wc(t, e, r, i) {
    i.mSet(t, e, i.m.call(i.tween, r, i.mt), i);
  }
  var Zt = function _setterPlain(t, e, r) {
      return (t[e] = r);
    },
    te = function _setterFunc(t, e, r) {
      return t[e](r);
    },
    re = function _setterFuncWithParam(t, e, r, i) {
      return t[e](i.fp, r);
    },
    ne = function _getSetter(t, e) {
      return s(t[e]) ? te : u(t[e]) && t.setAttribute ? oc : Zt;
    },
    ae = function _renderPlain(t, e) {
      return e.set(e.t, e.p, Math.round(1e6 * (e.s + e.c * t)) / 1e6, e);
    },
    se = function _renderBoolean(t, e) {
      return e.set(e.t, e.p, !!(e.s + e.c * t), e);
    },
    ue = function _renderComplexString(t, e) {
      var r = e._pt,
        i = "";
      if (!t && e.b) i = e.b;
      else if (1 === t && e.e) i = e.e;
      else {
        for (; r; ) (i = r.p + (r.m ? r.m(r.s + r.c * t) : Math.round(1e4 * (r.s + r.c * t)) / 1e4) + i), (r = r._next);
        i += e.c;
      }
      e.set(e.t, e.p, i, e);
    },
    he = function _renderPropTweens(t, e) {
      for (var r = e._pt; r; ) r.r(t, r.d), (r = r._next);
    },
    fe = function _addPluginModifier(t, e, r, i) {
      for (var n, a = this._pt; a; ) (n = a._next), a.p === i && a.modifier(t, e, r), (a = n);
    },
    ce = function _killPropTweensOf(t) {
      for (var e, r, i = this._pt; i; ) (r = i._next), (i.p === t && !i.op) || i.op === t ? ya(this, i, "_pt") : i.dep || (e = 1), (i = r);
      return !e;
    },
    pe = function _sortPropTweensByPriority(t) {
      for (var e, r, i, n, a = t._pt; a; ) {
        for (e = a._next, r = i; r && r.pr > a.pr; ) r = r._next;
        (a._prev = r ? r._prev : n) ? (a._prev._next = a) : (i = a), (a._next = r) ? (r._prev = a) : (n = a), (a = e);
      }
      t._pt = i;
    },
    _e =
      ((PropTween.prototype.modifier = function modifier(t, e, r) {
        (this.mSet = this.mSet || this.set), (this.set = wc), (this.m = t), (this.mt = r), (this.tween = e);
      }),
      PropTween);
  function PropTween(t, e, r, i, n, a, s, o, u) {
    (this.t = e), (this.s = i), (this.c = n), (this.p = r), (this.r = a || ae), (this.d = s || this), (this.set = o || Zt), (this.pr = u || 0), (this._next = t) && (t._prev = this);
  }
  ha(
    vt +
      "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
    function (t) {
      return (ft[t] = 1);
    }
  ),
    (ot.TweenMax = ot.TweenLite = $t),
    (ot.TimelineLite = ot.TimelineMax = Xt),
    (I = new Xt({ sortChildren: !1, defaults: V, autoRemoveChildren: !0, id: "root", smoothChildTiming: !0 })),
    (q.stringFilter = Fb);
  function Ec(t) {
    return (ye[t] || Te).map(function (t) {
      return t();
    });
  }
  function Fc() {
    var t = Date.now(),
      o = [];
    2 < t - Oe &&
      (Ec("matchMediaInit"),
      ge.forEach(function (t) {
        var e,
          r,
          i,
          n,
          a = t.queries,
          s = t.conditions;
        for (r in a) (e = h.matchMedia(a[r]).matches) && (i = 1), e !== s[r] && ((s[r] = e), (n = 1));
        n && (t.revert(), i && o.push(t));
      }),
      Ec("matchMediaRevert"),
      o.forEach(function (e) {
        return e.onMatch(e, function (t) {
          return e.add(null, t);
        });
      }),
      (Oe = t),
      Ec("matchMedia"));
  }
  var me,
    ge = [],
    ye = {},
    Te = [],
    Oe = 0,
    Me = 0,
    Pe =
      (((me = Context.prototype).add = function add(t, i, n) {
        function Gw() {
          var t,
            e = l,
            r = a.selector;
          return e && e !== a && e.data.push(a), n && (a.selector = cb(n)), (l = a), (t = i.apply(a, arguments)), s(t) && a._r.push(t), (l = e), (a.selector = r), (a.isReverted = !1), t;
        }
        s(t) && ((n = i), (i = t), (t = s));
        var a = this;
        return (
          (a.last = Gw),
          t === s
            ? Gw(a, function (t) {
                return a.add(null, t);
              })
            : t
            ? (a[t] = Gw)
            : Gw
        );
      }),
      (me.ignore = function ignore(t) {
        var e = l;
        (l = null), t(this), (l = e);
      }),
      (me.getTweens = function getTweens() {
        var e = [];
        return (
          this.data.forEach(function (t) {
            return t instanceof Context ? e.push.apply(e, t.getTweens()) : t instanceof $t && !(t.parent && "nested" === t.parent.data) && e.push(t);
          }),
          e
        );
      }),
      (me.clear = function clear() {
        this._r.length = this.data.length = 0;
      }),
      (me.kill = function kill(i, t) {
        var n = this;
        if (
          (i
            ? (function () {
                for (var t, e = n.getTweens(), r = n.data.length; r--; )
                  "isFlip" === (t = n.data[r]).data &&
                    (t.revert(),
                    t.getChildren(!0, !0, !1).forEach(function (t) {
                      return e.splice(e.indexOf(t), 1);
                    }));
                for (
                  e
                    .map(function (t) {
                      return { g: t._dur || t._delay || (t._sat && !t._sat.vars.immediateRender) ? t.globalTime(0) : -1 / 0, t: t };
                    })
                    .sort(function (t, e) {
                      return e.g - t.g || -1 / 0;
                    })
                    .forEach(function (t) {
                      return t.t.revert(i);
                    }),
                    r = n.data.length;
                  r--;

                )
                  (t = n.data[r]) instanceof Xt ? "nested" !== t.data && (t.scrollTrigger && t.scrollTrigger.revert(), t.kill()) : t instanceof $t || !t.revert || t.revert(i);
                n._r.forEach(function (t) {
                  return t(i, n);
                }),
                  (n.isReverted = !0);
              })()
            : this.data.forEach(function (t) {
                return t.kill && t.kill();
              }),
          this.clear(),
          t)
        )
          for (var e = ge.length; e--; ) ge[e].id === this.id && ge.splice(e, 1);
      }),
      (me.revert = function revert(t) {
        this.kill(t || {});
      }),
      Context);
  function Context(t, e) {
    (this.selector = e && cb(e)), (this.data = []), (this._r = []), (this.isReverted = !1), (this.id = Me++), t && this.add(t);
  }
  var Ce,
    Ae =
      (((Ce = MatchMedia.prototype).add = function add(t, e, r) {
        v(t) || (t = { matches: t });
        var i,
          n,
          a,
          s = new Pe(0, r || this.scope),
          o = (s.conditions = {});
        for (n in (l && !s.selector && (s.selector = l.selector), this.contexts.push(s), (e = s.add("onMatch", e)), (s.queries = t)))
          "all" === n ? (a = 1) : (i = h.matchMedia(t[n])) && (ge.indexOf(s) < 0 && ge.push(s), (o[n] = i.matches) && (a = 1), i.addListener ? i.addListener(Fc) : i.addEventListener("change", Fc));
        return (
          a &&
            e(s, function (t) {
              return s.add(null, t);
            }),
          this
        );
      }),
      (Ce.revert = function revert(t) {
        this.kill(t || {});
      }),
      (Ce.kill = function kill(e) {
        this.contexts.forEach(function (t) {
          return t.kill(e, !0);
        });
      }),
      MatchMedia);
  function MatchMedia(t) {
    (this.contexts = []), (this.scope = t), l && l.data.push(this);
  }
  var Se = {
    registerPlugin: function registerPlugin() {
      for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
      e.forEach(function (t) {
        return wb(t);
      });
    },
    timeline: function timeline(t) {
      return new Xt(t);
    },
    getTweensOf: function getTweensOf(t, e) {
      return I.getTweensOf(t, e);
    },
    getProperty: function getProperty(i, t, e, n) {
      r(i) && (i = Mt(i)[0]);
      var a = fa(i || {}).get,
        s = e ? pa : oa;
      return (
        "native" === e && (e = ""),
        i
          ? t
            ? s(((pt[t] && pt[t].get) || a)(i, t, e, n))
            : function (t, e, r) {
                return s(((pt[t] && pt[t].get) || a)(i, t, e, r));
              }
          : i
      );
    },
    quickSetter: function quickSetter(r, e, i) {
      if (1 < (r = Mt(r)).length) {
        var n = r.map(function (t) {
            return ze.quickSetter(t, e, i);
          }),
          a = n.length;
        return function (t) {
          for (var e = a; e--; ) n[e](t);
        };
      }
      r = r[0] || {};
      var s = pt[e],
        o = fa(r),
        u = (o.harness && (o.harness.aliases || {})[e]) || e,
        h = s
          ? function (t) {
              var e = new s();
              (d._pt = 0), e.init(r, i ? t + i : t, d, 0, [r]), e.render(1, e), d._pt && he(1, d);
            }
          : o.set(r, u);
      return s
        ? h
        : function (t) {
            return h(r, u, i ? t + i : t, o, 1);
          };
    },
    quickTo: function quickTo(t, i, e) {
      function $x(t, e, r) {
        return n.resetTo(i, t, e, r);
      }
      var r,
        n = ze.to(t, yt((((r = {})[i] = "+=0.1"), (r.paused = !0), r), e || {}));
      return ($x.tween = n), $x;
    },
    isTweening: function isTweening(t) {
      return 0 < I.getTweensOf(t, !0).length;
    },
    defaults: function defaults(t) {
      return t && t.ease && (t.ease = jt(t.ease, V.ease)), ta(V, t || {});
    },
    config: function config(t) {
      return ta(q, t || {});
    },
    registerEffect: function registerEffect(t) {
      var i = t.name,
        n = t.effect,
        e = t.plugins,
        a = t.defaults,
        r = t.extendTimeline;
      (e || "").split(",").forEach(function (t) {
        return t && !pt[t] && !ot[t] && R(i + " effect requires " + t + " plugin.");
      }),
        (_t[i] = function (t, e, r) {
          return n(Mt(t), qa(e || {}, a), r);
        }),
        r &&
          (Xt.prototype[i] = function (t, e, r) {
            return this.add(_t[i](t, v(e) ? e : (r = e) && {}, this), r);
          });
    },
    registerEase: function registerEase(t, e) {
      Lt[t] = jt(e);
    },
    parseEase: function parseEase(t, e) {
      return arguments.length ? jt(t, e) : Lt;
    },
    getById: function getById(t) {
      return I.getById(t);
    },
    exportRoot: function exportRoot(t, e) {
      void 0 === t && (t = {});
      var r,
        i,
        n = new Xt(t);
      for (n.smoothChildTiming = w(t.smoothChildTiming), I.remove(n), n._dp = 0, n._time = n._tTime = I._time, r = I._first; r; )
        (i = r._next), (!e && !r._dur && r instanceof $t && r.vars.onComplete === r._targets[0]) || Ka(n, r, r._start - r._delay), (r = i);
      return Ka(I, n, 0), n;
    },
    context: function context(t, e) {
      return t ? new Pe(t, e) : l;
    },
    matchMedia: function matchMedia(t) {
      return new Ae(t);
    },
    matchMediaRefresh: function matchMediaRefresh() {
      return (
        ge.forEach(function (t) {
          var e,
            r,
            i = t.conditions;
          for (r in i) i[r] && ((i[r] = !1), (e = 1));
          e && t.revert();
        }) || Fc()
      );
    },
    addEventListener: function addEventListener(t, e) {
      var r = ye[t] || (ye[t] = []);
      ~r.indexOf(e) || r.push(e);
    },
    removeEventListener: function removeEventListener(t, e) {
      var r = ye[t],
        i = r && r.indexOf(e);
      0 <= i && r.splice(i, 1);
    },
    utils: {
      wrap: function wrap(e, t, r) {
        var i = t - e;
        return Z(e)
          ? lb(e, wrap(0, e.length), t)
          : Wa(r, function (t) {
              return ((i + ((t - e) % i)) % i) + e;
            });
      },
      wrapYoyo: function wrapYoyo(e, t, r) {
        var i = t - e,
          n = 2 * i;
        return Z(e)
          ? lb(e, wrapYoyo(0, e.length - 1), t)
          : Wa(r, function (t) {
              return e + (i < (t = (n + ((t - e) % n)) % n || 0) ? n - t : t);
            });
      },
      distribute: eb,
      random: hb,
      snap: gb,
      normalize: function normalize(t, e, r) {
        return Pt(t, e, 0, 1, r);
      },
      getUnit: Ya,
      clamp: function clamp(e, r, t) {
        return Wa(t, function (t) {
          return Ot(e, r, t);
        });
      },
      splitColor: Ab,
      toArray: Mt,
      selector: cb,
      mapRange: Pt,
      pipe: function pipe() {
        for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
        return function (t) {
          return e.reduce(function (t, e) {
            return e(t);
          }, t);
        };
      },
      unitize: function unitize(e, r) {
        return function (t) {
          return e(parseFloat(t)) + (r || Ya(t));
        };
      },
      interpolate: function interpolate(e, i, t, n) {
        var a = isNaN(e + i)
          ? 0
          : function (t) {
              return (1 - t) * e + t * i;
            };
        if (!a) {
          var s,
            o,
            u,
            h,
            l,
            f = r(e),
            d = {};
          if ((!0 === t && (n = 1) && (t = null), f)) (e = { p: e }), (i = { p: i });
          else if (Z(e) && !Z(i)) {
            for (u = [], h = e.length, l = h - 2, o = 1; o < h; o++) u.push(interpolate(e[o - 1], e[o]));
            h--,
              (a = function func(t) {
                t *= h;
                var e = Math.min(l, ~~t);
                return u[e](t - e);
              }),
              (t = i);
          } else n || (e = yt(Z(e) ? [] : {}, e));
          if (!u) {
            for (s in i) Wt.call(d, e, s, "get", i[s]);
            a = function func(t) {
              return he(t, d) || (f ? e.p : e);
            };
          }
        }
        return Wa(t, a);
      },
      shuffle: db,
    },
    install: P,
    effects: _t,
    ticker: Rt,
    updateRoot: Xt.updateRoot,
    plugins: pt,
    globalTimeline: I,
    core: {
      PropTween: _e,
      globals: S,
      Tween: $t,
      Timeline: Xt,
      Animation: Ut,
      getCache: fa,
      _removeLinkedListItem: ya,
      reverting: function reverting() {
        return L;
      },
      context: function context(t) {
        return t && l && (l.data.push(t), (t._ctx = l)), l;
      },
      suppressOverwrites: function suppressOverwrites(t) {
        return (F = t);
      },
    },
  };
  ha("to,from,fromTo,delayedCall,set,killTweensOf", function (t) {
    return (Se[t] = $t[t]);
  }),
    Rt.add(Xt.updateRoot),
    (d = Se.to({}, { duration: 0 }));
  function Jc(t, e) {
    for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e; ) r = r._next;
    return r;
  }
  function Lc(t, a) {
    return {
      name: t,
      rawVars: 1,
      init: function init(t, n, e) {
        e._onInit = function (t) {
          var e, i;
          if (
            (r(n) &&
              ((e = {}),
              ha(n, function (t) {
                return (e[t] = 1);
              }),
              (n = e)),
            a)
          ) {
            for (i in ((e = {}), n)) e[i] = a(n[i]);
            n = e;
          }
          !(function _addModifiers(t, e) {
            var r,
              i,
              n,
              a = t._targets;
            for (r in e) for (i = a.length; i--; ) (n = (n = t._ptLookup[i][r]) && n.d) && (n._pt && (n = Jc(n, r)), n && n.modifier && n.modifier(e[r], t, a[i], r));
          })(t, n);
        };
      },
    };
  }
  var ze =
    Se.registerPlugin(
      {
        name: "attr",
        init: function init(t, e, r, i, n) {
          var a, s, o;
          for (a in ((this.tween = r), e)) (o = t.getAttribute(a) || ""), ((s = this.add(t, "setAttribute", (o || 0) + "", e[a], i, n, 0, 0, a)).op = a), (s.b = o), this._props.push(a);
        },
        render: function render(t, e) {
          for (var r = e._pt; r; ) L ? r.set(r.t, r.p, r.b, r) : r.r(t, r.d), (r = r._next);
        },
      },
      {
        name: "endArray",
        init: function init(t, e) {
          for (var r = e.length; r--; ) this.add(t, r, t[r] || 0, e[r], 0, 0, 0, 0, 0, 1);
        },
      },
      Lc("roundProps", fb),
      Lc("modifiers"),
      Lc("snap", gb)
    ) || Se;
  ($t.version = Xt.version = ze.version = "3.12.5"), (o = 1), x() && Ft();
  function vd(t, e) {
    return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e);
  }
  function wd(t, e) {
    return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e);
  }
  function xd(t, e) {
    return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e);
  }
  function yd(t, e) {
    var r = e.s + e.c * t;
    e.set(e.t, e.p, ~~(r + (r < 0 ? -0.5 : 0.5)) + e.u, e);
  }
  function zd(t, e) {
    return e.set(e.t, e.p, t ? e.e : e.b, e);
  }
  function Ad(t, e) {
    return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e);
  }
  function Bd(t, e, r) {
    return (t.style[e] = r);
  }
  function Cd(t, e, r) {
    return t.style.setProperty(e, r);
  }
  function Dd(t, e, r) {
    return (t._gsap[e] = r);
  }
  function Ed(t, e, r) {
    return (t._gsap.scaleX = t._gsap.scaleY = r);
  }
  function Fd(t, e, r, i, n) {
    var a = t._gsap;
    (a.scaleX = a.scaleY = r), a.renderTransform(n, a);
  }
  function Gd(t, e, r, i, n) {
    var a = t._gsap;
    (a[e] = r), a.renderTransform(n, a);
  }
  function Jd(t, e) {
    var r = this,
      i = this.target,
      n = i.style,
      a = i._gsap;
    if (t in ar && n) {
      if (((this.tfm = this.tfm || {}), "transform" === t))
        return dr.transform.split(",").forEach(function (t) {
          return Jd.call(r, t, e);
        });
      if (
        (~(t = dr[t] || t).indexOf(",")
          ? t.split(",").forEach(function (t) {
              return (r.tfm[t] = yr(i, t));
            })
          : (this.tfm[t] = a.x ? a[t] : yr(i, t)),
        t === pr && (this.tfm.zOrigin = a.zOrigin),
        0 <= this.props.indexOf(cr))
      )
        return;
      a.svg && ((this.svgo = i.getAttribute("data-svg-origin")), this.props.push(pr, e, "")), (t = cr);
    }
    (n || e) && this.props.push(t, e, n[t]);
  }
  function Kd(t) {
    t.translate && (t.removeProperty("translate"), t.removeProperty("scale"), t.removeProperty("rotate"));
  }
  function Ld() {
    var t,
      e,
      r = this.props,
      i = this.target,
      n = i.style,
      a = i._gsap;
    for (t = 0; t < r.length; t += 3) r[t + 1] ? (i[r[t]] = r[t + 2]) : r[t + 2] ? (n[r[t]] = r[t + 2]) : n.removeProperty("--" === r[t].substr(0, 2) ? r[t] : r[t].replace(hr, "-$1").toLowerCase());
    if (this.tfm) {
      for (e in this.tfm) a[e] = this.tfm[e];
      a.svg && (a.renderTransform(), i.setAttribute("data-svg-origin", this.svgo || "")),
        ((t = Be()) && t.isStart) || n[cr] || (Kd(n), a.zOrigin && n[pr] && ((n[pr] += " " + a.zOrigin + "px"), (a.zOrigin = 0), a.renderTransform()), (a.uncache = 1));
    }
  }
  function Md(t, e) {
    var r = { target: t, props: [], revert: Ld, save: Jd };
    return (
      t._gsap || ze.core.getCache(t),
      e &&
        e.split(",").forEach(function (t) {
          return r.save(t);
        }),
      r
    );
  }
  function Od(t, e) {
    var r = De.createElementNS ? De.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : De.createElement(t);
    return r && r.style ? r : De.createElement(t);
  }
  function Pd(t, e, r) {
    var i = getComputedStyle(t);
    return i[e] || i.getPropertyValue(e.replace(hr, "-$1").toLowerCase()) || i.getPropertyValue(e) || (!r && Pd(t, mr(e) || e, 1)) || "";
  }
  function Sd() {
    (function _windowExists() {
      return "undefined" != typeof window;
    })() &&
      window.document &&
      ((Ee = window),
      (De = Ee.document),
      (Re = De.documentElement),
      (Le = Od("div") || { style: {} }),
      Od("div"),
      (cr = mr(cr)),
      (pr = cr + "Origin"),
      (Le.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0"),
      (Ye = !!mr("perspective")),
      (Be = ze.core.reverting),
      (Fe = 1));
  }
  function Td(t) {
    var e,
      r = Od("svg", (this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns")) || "http://www.w3.org/2000/svg"),
      i = this.parentNode,
      n = this.nextSibling,
      a = this.style.cssText;
    if ((Re.appendChild(r), r.appendChild(this), (this.style.display = "block"), t))
      try {
        (e = this.getBBox()), (this._gsapBBox = this.getBBox), (this.getBBox = Td);
      } catch (t) {}
    else this._gsapBBox && (e = this._gsapBBox());
    return i && (n ? i.insertBefore(this, n) : i.appendChild(this)), Re.removeChild(r), (this.style.cssText = a), e;
  }
  function Ud(t, e) {
    for (var r = e.length; r--; ) if (t.hasAttribute(e[r])) return t.getAttribute(e[r]);
  }
  function Vd(e) {
    var r;
    try {
      r = e.getBBox();
    } catch (t) {
      r = Td.call(e, !0);
    }
    return (
      (r && (r.width || r.height)) || e.getBBox === Td || (r = Td.call(e, !0)),
      !r || r.width || r.x || r.y ? r : { x: +Ud(e, ["x", "cx", "x1"]) || 0, y: +Ud(e, ["y", "cy", "y1"]) || 0, width: 0, height: 0 }
    );
  }
  function Wd(t) {
    return !(!t.getCTM || (t.parentNode && !t.ownerSVGElement) || !Vd(t));
  }
  function Xd(t, e) {
    if (e) {
      var r,
        i = t.style;
      e in ar && e !== pr && (e = cr),
        i.removeProperty
          ? (("ms" !== (r = e.substr(0, 2)) && "webkit" !== e.substr(0, 6)) || (e = "-" + e), i.removeProperty("--" === r ? e : e.replace(hr, "-$1").toLowerCase()))
          : i.removeAttribute(e);
    }
  }
  function Yd(t, e, r, i, n, a) {
    var s = new _e(t._pt, e, r, 0, 1, a ? Ad : zd);
    return ((t._pt = s).b = i), (s.e = n), t._props.push(r), s;
  }
  function _d(t, e, r, i) {
    var n,
      a,
      s,
      o,
      u = parseFloat(r) || 0,
      h = (r + "").trim().substr((u + "").length) || "px",
      l = Le.style,
      f = lr.test(e),
      d = "svg" === t.tagName.toLowerCase(),
      c = (d ? "client" : "offset") + (f ? "Width" : "Height"),
      p = "px" === i,
      _ = "%" === i;
    if (i === h || !u || gr[i] || gr[h]) return u;
    if (("px" === h || p || (u = _d(t, e, r, "px")), (o = t.getCTM && Wd(t)), (_ || "%" === h) && (ar[e] || ~e.indexOf("adius"))))
      return (n = o ? t.getBBox()[f ? "width" : "height"] : t[c]), ia(_ ? (u / n) * 100 : (u / 100) * n);
    if (
      ((l[f ? "width" : "height"] = 100 + (p ? h : i)),
      (a = ~e.indexOf("adius") || ("em" === i && t.appendChild && !d) ? t : t.parentNode),
      o && (a = (t.ownerSVGElement || {}).parentNode),
      (a && a !== De && a.appendChild) || (a = De.body),
      (s = a._gsap) && _ && s.width && f && s.time === Rt.time && !s.uncache)
    )
      return ia((u / s.width) * 100);
    if (!_ || ("height" !== e && "width" !== e))
      (!_ && "%" !== h) || vr[Pd(a, "display")] || (l.position = Pd(t, "position")), a === t && (l.position = "static"), a.appendChild(Le), (n = Le[c]), a.removeChild(Le), (l.position = "absolute");
    else {
      var m = t.style[e];
      (t.style[e] = 100 + i), (n = t[c]), m ? (t.style[e] = m) : Xd(t, e);
    }
    return f && _ && (((s = fa(a)).time = Rt.time), (s.width = a[c])), ia(p ? (n * u) / 100 : n && u ? (100 / n) * u : 0);
  }
  function be(t, e, r, i) {
    if (!r || "none" === r) {
      var n = mr(e, t, 1),
        a = n && Pd(t, n, 1);
      a && a !== r ? ((e = n), (r = a)) : "borderColor" === e && (r = Pd(t, "borderTopColor"));
    }
    var s,
      o,
      u,
      h,
      l,
      f,
      d,
      c,
      p,
      _,
      m,
      g = new _e(this._pt, t.style, e, 0, 1, ue),
      v = 0,
      y = 0;
    if (
      ((g.b = r),
      (g.e = i),
      (r += ""),
      "auto" === (i += "") && ((f = t.style[e]), (t.style[e] = i), (i = Pd(t, e) || i), f ? (t.style[e] = f) : Xd(t, e)),
      Fb((s = [r, i])),
      (i = s[1]),
      (u = (r = s[0]).match(rt) || []),
      (i.match(rt) || []).length)
    ) {
      for (; (o = rt.exec(i)); )
        (d = o[0]),
          (p = i.substring(v, o.index)),
          l ? (l = (l + 1) % 5) : ("rgba(" !== p.substr(-5) && "hsla(" !== p.substr(-5)) || (l = 1),
          d !== (f = u[y++] || "") &&
            ((h = parseFloat(f) || 0),
            (m = f.substr((h + "").length)),
            "=" === d.charAt(1) && (d = ka(h, d) + m),
            (c = parseFloat(d)),
            (_ = d.substr((c + "").length)),
            (v = rt.lastIndex - _.length),
            _ || ((_ = _ || q.units[e] || m), v === i.length && ((i += _), (g.e += _))),
            m !== _ && (h = _d(t, e, f, _) || 0),
            (g._pt = { _next: g._pt, p: p || 1 === y ? p : ",", s: h, c: c - h, m: (l && l < 4) || "zIndex" === e ? Math.round : 0 }));
      g.c = v < i.length ? i.substring(v, i.length) : "";
    } else g.r = "display" === e && "none" === i ? Ad : zd;
    return nt.test(i) && (g.e = 0), (this._pt = g);
  }
  function de(t) {
    var e = t.split(" "),
      r = e[0],
      i = e[1] || "50%";
    return ("top" !== r && "bottom" !== r && "left" !== i && "right" !== i) || ((t = r), (r = i), (i = t)), (e[0] = Tr[r] || r), (e[1] = Tr[i] || i), e.join(" ");
  }
  function ee(t, e) {
    if (e.tween && e.tween._time === e.tween._dur) {
      var r,
        i,
        n,
        a = e.t,
        s = a.style,
        o = e.u,
        u = a._gsap;
      if ("all" === o || !0 === o) (s.cssText = ""), (i = 1);
      else for (n = (o = o.split(",")).length; -1 < --n; ) (r = o[n]), ar[r] && ((i = 1), (r = "transformOrigin" === r ? pr : cr)), Xd(a, r);
      i && (Xd(a, cr), u && (u.svg && a.removeAttribute("transform"), Or(a, 1), (u.uncache = 1), Kd(s)));
    }
  }
  function ie(t) {
    return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t;
  }
  function je(t) {
    var e = Pd(t, cr);
    return ie(e) ? wr : e.substr(7).match(et).map(ia);
  }
  function ke(t, e) {
    var r,
      i,
      n,
      a,
      s = t._gsap || fa(t),
      o = t.style,
      u = je(t);
    return s.svg && t.getAttribute("transform")
      ? "1,0,0,1,0,0" === (u = [(n = t.transform.baseVal.consolidate().matrix).a, n.b, n.c, n.d, n.e, n.f]).join(",")
        ? wr
        : u
      : (u !== wr ||
          t.offsetParent ||
          t === Re ||
          s.svg ||
          ((n = o.display),
          (o.display = "block"),
          ((r = t.parentNode) && t.offsetParent) || ((a = 1), (i = t.nextElementSibling), Re.appendChild(t)),
          (u = je(t)),
          n ? (o.display = n) : Xd(t, "display"),
          a && (i ? r.insertBefore(t, i) : r ? r.appendChild(t) : Re.removeChild(t))),
        e && 6 < u.length ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u);
  }
  function le(t, e, r, i, n, a) {
    var s,
      o,
      u,
      h = t._gsap,
      l = n || ke(t, !0),
      f = h.xOrigin || 0,
      d = h.yOrigin || 0,
      c = h.xOffset || 0,
      p = h.yOffset || 0,
      _ = l[0],
      m = l[1],
      g = l[2],
      v = l[3],
      y = l[4],
      T = l[5],
      b = e.split(" "),
      w = parseFloat(b[0]) || 0,
      x = parseFloat(b[1]) || 0;
    r
      ? l !== wr && (o = _ * v - m * g) && ((u = w * (-m / o) + x * (_ / o) - (_ * T - m * y) / o), (w = w * (v / o) + x * (-g / o) + (g * T - v * y) / o), (x = u))
      : ((w = (s = Vd(t)).x + (~b[0].indexOf("%") ? (w / 100) * s.width : w)), (x = s.y + (~(b[1] || b[0]).indexOf("%") ? (x / 100) * s.height : x))),
      i || (!1 !== i && h.smooth) ? ((y = w - f), (T = x - d), (h.xOffset = c + (y * _ + T * g) - y), (h.yOffset = p + (y * m + T * v) - T)) : (h.xOffset = h.yOffset = 0),
      (h.xOrigin = w),
      (h.yOrigin = x),
      (h.smooth = !!i),
      (h.origin = e),
      (h.originIsAbsolute = !!r),
      (t.style[pr] = "0px 0px"),
      a && (Yd(a, h, "xOrigin", f, w), Yd(a, h, "yOrigin", d, x), Yd(a, h, "xOffset", c, h.xOffset), Yd(a, h, "yOffset", p, h.yOffset)),
      t.setAttribute("data-svg-origin", w + " " + x);
  }
  function oe(t, e, r) {
    var i = Ya(e);
    return ia(parseFloat(e) + parseFloat(_d(t, "x", r + "px", i))) + i;
  }
  function ve(t, e, i, n, a) {
    var s,
      o,
      u = 360,
      h = r(a),
      l = parseFloat(a) * (h && ~a.indexOf("rad") ? sr : 1) - n,
      f = n + l + "deg";
    return (
      h &&
        ("short" === (s = a.split("_")[1]) && (l %= u) !== l % 180 && (l += l < 0 ? u : -u),
        "cw" === s && l < 0 ? (l = ((l + 36e9) % u) - ~~(l / u) * u) : "ccw" === s && 0 < l && (l = ((l - 36e9) % u) - ~~(l / u) * u)),
      (t._pt = o = new _e(t._pt, e, i, n, l, wd)),
      (o.e = f),
      (o.u = "deg"),
      t._props.push(i),
      o
    );
  }
  function we(t, e) {
    for (var r in e) t[r] = e[r];
    return t;
  }
  function xe(t, e, r) {
    var i,
      n,
      a,
      s,
      o,
      u,
      h,
      l = we({}, r._gsap),
      f = r.style;
    for (n in (l.svg
      ? ((a = r.getAttribute("transform")), r.setAttribute("transform", ""), (f[cr] = e), (i = Or(r, 1)), Xd(r, cr), r.setAttribute("transform", a))
      : ((a = getComputedStyle(r)[cr]), (f[cr] = e), (i = Or(r, 1)), (f[cr] = a)),
    ar))
      (a = l[n]) !== (s = i[n]) &&
        "perspective,force3D,transformOrigin,svgOrigin".indexOf(n) < 0 &&
        ((o = Ya(a) !== (h = Ya(s)) ? _d(r, n, a, h) : parseFloat(a)), (u = parseFloat(s)), (t._pt = new _e(t._pt, i, n, o, u - o, vd)), (t._pt.u = h || 0), t._props.push(n));
    we(i, l);
  }
  var Ee,
    De,
    Re,
    Fe,
    Le,
    Ie,
    Be,
    Ye,
    qe = Lt.Power0,
    Ve = Lt.Power1,
    Ue = Lt.Power2,
    Xe = Lt.Power3,
    Ne = Lt.Power4,
    Ge = Lt.Linear,
    We = Lt.Quad,
    Qe = Lt.Cubic,
    Ke = Lt.Quart,
    Je = Lt.Quint,
    He = Lt.Strong,
    $e = Lt.Elastic,
    Ze = Lt.Back,
    tr = Lt.SteppedEase,
    er = Lt.Bounce,
    rr = Lt.Sine,
    ir = Lt.Expo,
    nr = Lt.Circ,
    ar = {},
    sr = 180 / Math.PI,
    or = Math.PI / 180,
    ur = Math.atan2,
    hr = /([A-Z])/g,
    lr = /(left|right|width|margin|padding|x)/i,
    fr = /[\s,\(]\S/,
    dr = { autoAlpha: "opacity,visibility", scale: "scaleX,scaleY", alpha: "opacity" },
    cr = "transform",
    pr = cr + "Origin",
    _r = "O,Moz,ms,Ms,Webkit".split(","),
    mr = function _checkPropPrefix(t, e, r) {
      var i = (e || Le).style,
        n = 5;
      if (t in i && !r) return t;
      for (t = t.charAt(0).toUpperCase() + t.substr(1); n-- && !(_r[n] + t in i); );
      return n < 0 ? null : (3 === n ? "ms" : 0 <= n ? _r[n] : "") + t;
    },
    gr = { deg: 1, rad: 1, turn: 1 },
    vr = { grid: 1, flex: 1 },
    yr = function _get(t, e, r, i) {
      var n;
      return (
        Fe || Sd(),
        e in dr && "transform" !== e && ~(e = dr[e]).indexOf(",") && (e = e.split(",")[0]),
        ar[e] && "transform" !== e
          ? ((n = Or(t, i)), (n = "transformOrigin" !== e ? n[e] : n.svg ? n.origin : kr(Pd(t, pr)) + " " + n.zOrigin + "px"))
          : ((n = t.style[e]) && "auto" !== n && !i && !~(n + "").indexOf("calc(")) || (n = (br[e] && br[e](t, e, r)) || Pd(t, e) || ga(t, e) || ("opacity" === e ? 1 : 0)),
        r && !~(n + "").trim().indexOf(" ") ? _d(t, e, n, r) + r : n
      );
    },
    Tr = { top: "0%", bottom: "100%", left: "0%", right: "100%", center: "50%" },
    br = {
      clearProps: function clearProps(t, e, r, i, n) {
        if ("isFromStart" !== n.data) {
          var a = (t._pt = new _e(t._pt, e, r, 0, 0, ee));
          return (a.u = i), (a.pr = -10), (a.tween = n), t._props.push(r), 1;
        }
      },
    },
    wr = [1, 0, 0, 1, 0, 0],
    xr = {},
    Or = function _parseTransform(t, e) {
      var r = t._gsap || new Vt(t);
      if ("x" in r && !e && !r.uncache) return r;
      var i,
        n,
        a,
        s,
        o,
        u,
        h,
        l,
        f,
        d,
        c,
        p,
        _,
        m,
        g,
        v,
        y,
        T,
        b,
        w,
        x,
        O,
        k,
        M,
        P,
        C,
        A,
        S,
        z,
        E,
        D,
        R,
        F = t.style,
        L = r.scaleX < 0,
        I = "deg",
        B = getComputedStyle(t),
        Y = Pd(t, pr) || "0";
      return (
        (i = n = a = u = h = l = f = d = c = 0),
        (s = o = 1),
        (r.svg = !(!t.getCTM || !Wd(t))),
        B.translate &&
          (("none" === B.translate && "none" === B.scale && "none" === B.rotate) ||
            (F[cr] =
              ("none" !== B.translate ? "translate3d(" + (B.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") +
              ("none" !== B.rotate ? "rotate(" + B.rotate + ") " : "") +
              ("none" !== B.scale ? "scale(" + B.scale.split(" ").join(",") + ") " : "") +
              ("none" !== B[cr] ? B[cr] : "")),
          (F.scale = F.rotate = F.translate = "none")),
        (m = ke(t, r.svg)),
        r.svg &&
          ((M = r.uncache ? ((P = t.getBBox()), (Y = r.xOrigin - P.x + "px " + (r.yOrigin - P.y) + "px"), "") : !e && t.getAttribute("data-svg-origin")),
          le(t, M || Y, !!M || r.originIsAbsolute, !1 !== r.smooth, m)),
        (p = r.xOrigin || 0),
        (_ = r.yOrigin || 0),
        m !== wr &&
          ((T = m[0]),
          (b = m[1]),
          (w = m[2]),
          (x = m[3]),
          (i = O = m[4]),
          (n = k = m[5]),
          6 === m.length
            ? ((s = Math.sqrt(T * T + b * b)),
              (o = Math.sqrt(x * x + w * w)),
              (u = T || b ? ur(b, T) * sr : 0),
              (f = w || x ? ur(w, x) * sr + u : 0) && (o *= Math.abs(Math.cos(f * or))),
              r.svg && ((i -= p - (p * T + _ * w)), (n -= _ - (p * b + _ * x))))
            : ((R = m[6]),
              (E = m[7]),
              (A = m[8]),
              (S = m[9]),
              (z = m[10]),
              (D = m[11]),
              (i = m[12]),
              (n = m[13]),
              (a = m[14]),
              (h = (g = ur(R, z)) * sr),
              g &&
                ((M = O * (v = Math.cos(-g)) + A * (y = Math.sin(-g))),
                (P = k * v + S * y),
                (C = R * v + z * y),
                (A = O * -y + A * v),
                (S = k * -y + S * v),
                (z = R * -y + z * v),
                (D = E * -y + D * v),
                (O = M),
                (k = P),
                (R = C)),
              (l = (g = ur(-w, z)) * sr),
              g && ((v = Math.cos(-g)), (D = x * (y = Math.sin(-g)) + D * v), (T = M = T * v - A * y), (b = P = b * v - S * y), (w = C = w * v - z * y)),
              (u = (g = ur(b, T)) * sr),
              g && ((M = T * (v = Math.cos(g)) + b * (y = Math.sin(g))), (P = O * v + k * y), (b = b * v - T * y), (k = k * v - O * y), (T = M), (O = P)),
              h && 359.9 < Math.abs(h) + Math.abs(u) && ((h = u = 0), (l = 180 - l)),
              (s = ia(Math.sqrt(T * T + b * b + w * w))),
              (o = ia(Math.sqrt(k * k + R * R))),
              (g = ur(O, k)),
              (f = 2e-4 < Math.abs(g) ? g * sr : 0),
              (c = D ? 1 / (D < 0 ? -D : D) : 0)),
          r.svg && ((M = t.getAttribute("transform")), (r.forceCSS = t.setAttribute("transform", "") || !ie(Pd(t, cr))), M && t.setAttribute("transform", M))),
        90 < Math.abs(f) && Math.abs(f) < 270 && (L ? ((s *= -1), (f += u <= 0 ? 180 : -180), (u += u <= 0 ? 180 : -180)) : ((o *= -1), (f += f <= 0 ? 180 : -180))),
        (e = e || r.uncache),
        (r.x = i - ((r.xPercent = i && ((!e && r.xPercent) || (Math.round(t.offsetWidth / 2) === Math.round(-i) ? -50 : 0))) ? (t.offsetWidth * r.xPercent) / 100 : 0) + "px"),
        (r.y = n - ((r.yPercent = n && ((!e && r.yPercent) || (Math.round(t.offsetHeight / 2) === Math.round(-n) ? -50 : 0))) ? (t.offsetHeight * r.yPercent) / 100 : 0) + "px"),
        (r.z = a + "px"),
        (r.scaleX = ia(s)),
        (r.scaleY = ia(o)),
        (r.rotation = ia(u) + I),
        (r.rotationX = ia(h) + I),
        (r.rotationY = ia(l) + I),
        (r.skewX = f + I),
        (r.skewY = d + I),
        (r.transformPerspective = c + "px"),
        (r.zOrigin = parseFloat(Y.split(" ")[2]) || (!e && r.zOrigin) || 0) && (F[pr] = kr(Y)),
        (r.xOffset = r.yOffset = 0),
        (r.force3D = q.force3D),
        (r.renderTransform = r.svg ? zr : Ye ? Sr : Mr),
        (r.uncache = 0),
        r
      );
    },
    kr = function _firstTwoOnly(t) {
      return (t = t.split(" "))[0] + " " + t[1];
    },
    Mr = function _renderNon3DTransforms(t, e) {
      (e.z = "0px"), (e.rotationY = e.rotationX = "0deg"), (e.force3D = 0), Sr(t, e);
    },
    Pr = "0deg",
    Cr = "0px",
    Ar = ") ",
    Sr = function _renderCSSTransforms(t, e) {
      var r = e || this,
        i = r.xPercent,
        n = r.yPercent,
        a = r.x,
        s = r.y,
        o = r.z,
        u = r.rotation,
        h = r.rotationY,
        l = r.rotationX,
        f = r.skewX,
        d = r.skewY,
        c = r.scaleX,
        p = r.scaleY,
        _ = r.transformPerspective,
        m = r.force3D,
        g = r.target,
        v = r.zOrigin,
        y = "",
        T = ("auto" === m && t && 1 !== t) || !0 === m;
      if (v && (l !== Pr || h !== Pr)) {
        var b,
          w = parseFloat(h) * or,
          x = Math.sin(w),
          O = Math.cos(w);
        (w = parseFloat(l) * or), (b = Math.cos(w)), (a = oe(g, a, x * b * -v)), (s = oe(g, s, -Math.sin(w) * -v)), (o = oe(g, o, O * b * -v + v));
      }
      _ !== Cr && (y += "perspective(" + _ + Ar),
        (i || n) && (y += "translate(" + i + "%, " + n + "%) "),
        (!T && a === Cr && s === Cr && o === Cr) || (y += o !== Cr || T ? "translate3d(" + a + ", " + s + ", " + o + ") " : "translate(" + a + ", " + s + Ar),
        u !== Pr && (y += "rotate(" + u + Ar),
        h !== Pr && (y += "rotateY(" + h + Ar),
        l !== Pr && (y += "rotateX(" + l + Ar),
        (f === Pr && d === Pr) || (y += "skew(" + f + ", " + d + Ar),
        (1 === c && 1 === p) || (y += "scale(" + c + ", " + p + Ar),
        (g.style[cr] = y || "translate(0, 0)");
    },
    zr = function _renderSVGTransforms(t, e) {
      var r,
        i,
        n,
        a,
        s,
        o = e || this,
        u = o.xPercent,
        h = o.yPercent,
        l = o.x,
        f = o.y,
        d = o.rotation,
        c = o.skewX,
        p = o.skewY,
        _ = o.scaleX,
        m = o.scaleY,
        g = o.target,
        v = o.xOrigin,
        y = o.yOrigin,
        T = o.xOffset,
        b = o.yOffset,
        w = o.forceCSS,
        x = parseFloat(l),
        O = parseFloat(f);
      (d = parseFloat(d)),
        (c = parseFloat(c)),
        (p = parseFloat(p)) && ((c += p = parseFloat(p)), (d += p)),
        d || c
          ? ((d *= or),
            (c *= or),
            (r = Math.cos(d) * _),
            (i = Math.sin(d) * _),
            (n = Math.sin(d - c) * -m),
            (a = Math.cos(d - c) * m),
            c && ((p *= or), (s = Math.tan(c - p)), (n *= s = Math.sqrt(1 + s * s)), (a *= s), p && ((s = Math.tan(p)), (r *= s = Math.sqrt(1 + s * s)), (i *= s))),
            (r = ia(r)),
            (i = ia(i)),
            (n = ia(n)),
            (a = ia(a)))
          : ((r = _), (a = m), (i = n = 0)),
        ((x && !~(l + "").indexOf("px")) || (O && !~(f + "").indexOf("px"))) && ((x = _d(g, "x", l, "px")), (O = _d(g, "y", f, "px"))),
        (v || y || T || b) && ((x = ia(x + v - (v * r + y * n) + T)), (O = ia(O + y - (v * i + y * a) + b))),
        (u || h) && ((s = g.getBBox()), (x = ia(x + (u / 100) * s.width)), (O = ia(O + (h / 100) * s.height))),
        (s = "matrix(" + r + "," + i + "," + n + "," + a + "," + x + "," + O + ")"),
        g.setAttribute("transform", s),
        w && (g.style[cr] = s);
    };
  ha("padding,margin,Width,Radius", function (e, r) {
    var t = "Right",
      i = "Bottom",
      n = "Left",
      o = (r < 3 ? ["Top", t, i, n] : ["Top" + n, "Top" + t, i + t, i + n]).map(function (t) {
        return r < 2 ? e + t : "border" + t + e;
      });
    br[1 < r ? "border" + e : e] = function (e, t, r, i, n) {
      var a, s;
      if (arguments.length < 4)
        return (
          (a = o.map(function (t) {
            return yr(e, t, r);
          })),
          5 === (s = a.join(" ")).split(a[0]).length ? a[0] : s
        );
      (a = (i + "").split(" ")),
        (s = {}),
        o.forEach(function (t, e) {
          return (s[t] = a[e] = a[e] || a[((e - 1) / 2) | 0]);
        }),
        e.init(t, s, n);
    };
  });
  var Er,
    Dr,
    Rr,
    Fr = {
      name: "css",
      register: Sd,
      targetTest: function targetTest(t) {
        return t.style && t.nodeType;
      },
      init: function init(t, e, i, n, a) {
        var s,
          o,
          u,
          h,
          l,
          f,
          d,
          c,
          p,
          _,
          m,
          g,
          v,
          y,
          T,
          b,
          w = this._props,
          x = t.style,
          O = i.vars.startAt;
        for (d in (Fe || Sd(), (this.styles = this.styles || Md(t)), (b = this.styles.props), (this.tween = i), e))
          if ("autoRound" !== d && ((o = e[d]), !pt[d] || !ac(d, e, i, n, t, a)))
            if (((l = typeof o), (f = br[d]), "function" === l && (l = typeof (o = o.call(i, n, t, a))), "string" === l && ~o.indexOf("random(") && (o = ob(o)), f)) f(this, t, d, o, i) && (T = 1);
            else if ("--" === d.substr(0, 2))
              (s = (getComputedStyle(t).getPropertyValue(d) + "").trim()),
                (o += ""),
                (Et.lastIndex = 0),
                Et.test(s) || ((c = Ya(s)), (p = Ya(o))),
                p ? c !== p && (s = _d(t, d, s, p) + p) : c && (o += c),
                this.add(x, "setProperty", s, o, n, a, 0, 0, d),
                w.push(d),
                b.push(d, 0, x[d]);
            else if ("undefined" !== l) {
              if (
                (O && d in O
                  ? ((s = "function" == typeof O[d] ? O[d].call(i, n, t, a) : O[d]),
                    r(s) && ~s.indexOf("random(") && (s = ob(s)),
                    Ya(s + "") || "auto" === s || (s += q.units[d] || Ya(yr(t, d)) || ""),
                    "=" === (s + "").charAt(1) && (s = yr(t, d)))
                  : (s = yr(t, d)),
                (h = parseFloat(s)),
                (_ = "string" === l && "=" === o.charAt(1) && o.substr(0, 2)) && (o = o.substr(2)),
                (u = parseFloat(o)),
                d in dr &&
                  ("autoAlpha" === d &&
                    (1 === h && "hidden" === yr(t, "visibility") && u && (h = 0),
                    b.push("visibility", 0, x.visibility),
                    Yd(this, x, "visibility", h ? "inherit" : "hidden", u ? "inherit" : "hidden", !u)),
                  "scale" !== d && "transform" !== d && ~(d = dr[d]).indexOf(",") && (d = d.split(",")[0])),
                (m = d in ar))
              )
                if (
                  (this.styles.save(d),
                  g ||
                    (((v = t._gsap).renderTransform && !e.parseTransform) || Or(t, e.parseTransform),
                    (y = !1 !== e.smoothOrigin && v.smooth),
                    ((g = this._pt = new _e(this._pt, x, cr, 0, 1, v.renderTransform, v, 0, -1)).dep = 1)),
                  "scale" === d)
                )
                  (this._pt = new _e(this._pt, v, "scaleY", v.scaleY, (_ ? ka(v.scaleY, _ + u) : u) - v.scaleY || 0, vd)), (this._pt.u = 0), w.push("scaleY", d), (d += "X");
                else {
                  if ("transformOrigin" === d) {
                    b.push(pr, 0, x[pr]),
                      (o = de(o)),
                      v.svg ? le(t, o, 0, y, 0, this) : ((p = parseFloat(o.split(" ")[2]) || 0) !== v.zOrigin && Yd(this, v, "zOrigin", v.zOrigin, p), Yd(this, x, d, kr(s), kr(o)));
                    continue;
                  }
                  if ("svgOrigin" === d) {
                    le(t, o, 1, y, 0, this);
                    continue;
                  }
                  if (d in xr) {
                    ve(this, v, d, h, _ ? ka(h, _ + o) : o);
                    continue;
                  }
                  if ("smoothOrigin" === d) {
                    Yd(this, v, "smooth", v.smooth, o);
                    continue;
                  }
                  if ("force3D" === d) {
                    v[d] = o;
                    continue;
                  }
                  if ("transform" === d) {
                    xe(this, o, t);
                    continue;
                  }
                }
              else d in x || (d = mr(d) || d);
              if (m || ((u || 0 === u) && (h || 0 === h) && !fr.test(o) && d in x))
                (u = u || 0),
                  (c = (s + "").substr((h + "").length)) !== (p = Ya(o) || (d in q.units ? q.units[d] : c)) && (h = _d(t, d, s, p)),
                  (this._pt = new _e(this._pt, m ? v : x, d, h, (_ ? ka(h, _ + u) : u) - h, m || ("px" !== p && "zIndex" !== d) || !1 === e.autoRound ? vd : yd)),
                  (this._pt.u = p || 0),
                  c !== p && "%" !== p && ((this._pt.b = s), (this._pt.r = xd));
              else if (d in x) be.call(this, t, d, s, _ ? _ + o : o);
              else if (d in t) this.add(t, d, s || t[d], _ ? _ + o : o, n, a);
              else if ("parseTransform" !== d) {
                Q(d, o);
                continue;
              }
              m || (d in x ? b.push(d, 0, x[d]) : b.push(d, 1, s || t[d])), w.push(d);
            }
        T && pe(this);
      },
      render: function render(t, e) {
        if (e.tween._time || !Be()) for (var r = e._pt; r; ) r.r(t, r.d), (r = r._next);
        else e.styles.revert();
      },
      get: yr,
      aliases: dr,
      getSetter: function getSetter(t, e, r) {
        var i = dr[e];
        return (
          i && i.indexOf(",") < 0 && (e = i),
          e in ar && e !== pr && (t._gsap.x || yr(t, "x"))
            ? r && Ie === r
              ? "scale" === e
                ? Ed
                : Dd
              : (Ie = r || {}) && ("scale" === e ? Fd : Gd)
            : t.style && !u(t.style[e])
            ? Bd
            : ~e.indexOf("-")
            ? Cd
            : ne(t, e)
        );
      },
      core: { _removeProperty: Xd, _getMatrix: ke },
    };
  (ze.utils.checkPrefix = mr),
    (ze.core.getStyleSaver = Md),
    (Rr = ha(
      (Er = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent") + "," + (Dr = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
      function (t) {
        ar[t] = 1;
      }
    )),
    ha(Dr, function (t) {
      (q.units[t] = "deg"), (xr[t] = 1);
    }),
    (dr[Rr[13]] = Er + "," + Dr),
    ha("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", function (t) {
      var e = t.split(":");
      dr[e[1]] = Rr[e[0]];
    }),
    ha("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function (t) {
      q.units[t] = "px";
    }),
    ze.registerPlugin(Fr);
  var Lr = ze.registerPlugin(Fr) || ze,
    Ir = Lr.core.Tween;
  (e.Back = Ze),
    (e.Bounce = er),
    (e.CSSPlugin = Fr),
    (e.Circ = nr),
    (e.Cubic = Qe),
    (e.Elastic = $e),
    (e.Expo = ir),
    (e.Linear = Ge),
    (e.Power0 = qe),
    (e.Power1 = Ve),
    (e.Power2 = Ue),
    (e.Power3 = Xe),
    (e.Power4 = Ne),
    (e.Quad = We),
    (e.Quart = Ke),
    (e.Quint = Je),
    (e.Sine = rr),
    (e.SteppedEase = tr),
    (e.Strong = He),
    (e.TimelineLite = Xt),
    (e.TimelineMax = Xt),
    (e.TweenLite = $t),
    (e.TweenMax = Ir),
    (e.default = Lr),
    (e.gsap = Lr);
  if (typeof window === "undefined" || window !== e) {
    Object.defineProperty(e, "__esModule", { value: !0 });
  } else {
    delete e.default;
  }
});

/*!
 * ScrollTrigger 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t(((e = e || self).window = e.window || {}));
})(this, function (e) {
  "use strict";
  function _defineProperties(e, t) {
    for (var r = 0; r < t.length; r++) {
      var n = t[r];
      (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
    }
  }
  function r() {
    return Ce || ("undefined" != typeof window && (Ce = window.gsap) && Ce.registerPlugin && Ce);
  }
  function z(e, t) {
    return ~Le.indexOf(e) && Le[Le.indexOf(e) + 1][t];
  }
  function A(e) {
    return !!~t.indexOf(e);
  }
  function B(e, t, r, n, o) {
    return e.addEventListener(t, r, { passive: !1 !== n, capture: !!o });
  }
  function C(e, t, r, n) {
    return e.removeEventListener(t, r, !!n);
  }
  function F() {
    return (De && De.isPressed) || Ie.cache++;
  }
  function G(r, n) {
    function dd(e) {
      if (e || 0 === e) {
        o && (Se.history.scrollRestoration = "manual");
        var t = De && De.isPressed;
        (e = dd.v = Math.round(e) || (De && De.iOS ? 1 : 0)), r(e), (dd.cacheID = Ie.cache), t && i("ss", e);
      } else (n || Ie.cache !== dd.cacheID || i("ref")) && ((dd.cacheID = Ie.cache), (dd.v = r()));
      return dd.v + dd.offset;
    }
    return (dd.offset = 0), r && dd;
  }
  function J(e, t) {
    return ((t && t._ctx && t._ctx.selector) || Ce.utils.toArray)(e)[0] || ("string" == typeof e && !1 !== Ce.config().nullTargetWarn ? console.warn("Element not found:", e) : null);
  }
  function K(t, e) {
    var r = e.s,
      n = e.sc;
    A(t) && (t = ke.scrollingElement || Pe);
    var o = Ie.indexOf(t),
      i = n === Fe.sc ? 1 : 2;
    ~o || (o = Ie.push(t) - 1), Ie[o + i] || B(t, "scroll", F);
    var a = Ie[o + i],
      s =
        a ||
        (Ie[o + i] =
          G(z(t, r), !0) ||
          (A(t)
            ? n
            : G(function (e) {
                return arguments.length ? (t[r] = e) : t[r];
              })));
    return (s.target = t), a || (s.smooth = "smooth" === Ce.getProperty(t, "scrollBehavior")), s;
  }
  function L(e, t, o) {
    function Cd(e, t) {
      var r = ze();
      t || n < r - s ? ((a = i), (i = e), (l = s), (s = r)) : o ? (i += e) : (i = a + ((e - a) / (r - l)) * (s - l));
    }
    var i = e,
      a = e,
      s = ze(),
      l = s,
      n = t || 50,
      c = Math.max(500, 3 * n);
    return {
      update: Cd,
      reset: function reset() {
        (a = i = o ? 0 : i), (l = s = 0);
      },
      getVelocity: function getVelocity(e) {
        var t = l,
          r = a,
          n = ze();
        return (!e && 0 !== e) || e === i || Cd(e), s === l || c < n - l ? 0 : ((i + (o ? r : -r)) / ((o ? n : s) - t)) * 1e3;
      },
    };
  }
  function M(e, t) {
    return t && !e._gsapAllow && e.preventDefault(), e.changedTouches ? e.changedTouches[0] : e;
  }
  function N(e) {
    var t = Math.max.apply(Math, e),
      r = Math.min.apply(Math, e);
    return Math.abs(t) >= Math.abs(r) ? t : r;
  }
  function O() {
    (Ae = Ce.core.globals().ScrollTrigger) &&
      Ae.core &&
      (function _integrate() {
        var e = Ae.core,
          r = e.bridge || {},
          t = e._scrollers,
          n = e._proxies;
        t.push.apply(t, Ie),
          n.push.apply(n, Le),
          (Ie = t),
          (Le = n),
          (i = function _bridge(e, t) {
            return r[e](t);
          });
      })();
  }
  function P(e) {
    return (
      (Ce = e || r()),
      !Te &&
        Ce &&
        "undefined" != typeof document &&
        document.body &&
        ((Se = window),
        (Pe = (ke = document).documentElement),
        (Me = ke.body),
        (t = [Se, ke, Pe, Me]),
        Ce.utils.clamp,
        (Be = Ce.core.context || function () {}),
        (Oe = "onpointerenter" in Me ? "pointer" : "mouse"),
        (Ee = k.isTouch =
          Se.matchMedia && Se.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in Se || 0 < navigator.maxTouchPoints || 0 < navigator.msMaxTouchPoints ? 2 : 0),
        (Re = k.eventTypes =
          (
            "ontouchstart" in Pe ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in Pe ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup"
          ).split(",")),
        setTimeout(function () {
          return (o = 0);
        }, 500),
        O(),
        (Te = 1)),
      Te
    );
  }
  var Ce,
    Te,
    Se,
    ke,
    Pe,
    Me,
    Ee,
    Oe,
    Ae,
    t,
    De,
    Re,
    Be,
    o = 1,
    qe = [],
    Ie = [],
    Le = [],
    ze = Date.now,
    i = function _bridge(e, t) {
      return t;
    },
    n = "scrollLeft",
    a = "scrollTop",
    Ye = {
      s: n,
      p: "left",
      p2: "Left",
      os: "right",
      os2: "Right",
      d: "width",
      d2: "Width",
      a: "x",
      sc: G(function (e) {
        return arguments.length ? Se.scrollTo(e, Fe.sc()) : Se.pageXOffset || ke[n] || Pe[n] || Me[n] || 0;
      }),
    },
    Fe = {
      s: a,
      p: "top",
      p2: "Top",
      os: "bottom",
      os2: "Bottom",
      d: "height",
      d2: "Height",
      a: "y",
      op: Ye,
      sc: G(function (e) {
        return arguments.length ? Se.scrollTo(Ye.sc(), e) : Se.pageYOffset || ke[a] || Pe[a] || Me[a] || 0;
      }),
    };
  (Ye.op = Fe), (Ie.cache = 0);
  var k =
    ((Observer.prototype.init = function init(e) {
      Te || P(Ce) || console.warn("Please gsap.registerPlugin(Observer)"), Ae || O();
      var o = e.tolerance,
        a = e.dragMinimum,
        t = e.type,
        i = e.target,
        r = e.lineHeight,
        n = e.debounce,
        s = e.preventDefault,
        l = e.onStop,
        c = e.onStopDelay,
        u = e.ignore,
        f = e.wheelSpeed,
        d = e.event,
        p = e.onDragStart,
        g = e.onDragEnd,
        h = e.onDrag,
        v = e.onPress,
        b = e.onRelease,
        m = e.onRight,
        y = e.onLeft,
        x = e.onUp,
        w = e.onDown,
        _ = e.onChangeX,
        T = e.onChangeY,
        S = e.onChange,
        k = e.onToggleX,
        E = e.onToggleY,
        D = e.onHover,
        R = e.onHoverEnd,
        q = e.onMove,
        I = e.ignoreCheck,
        z = e.isNormalizer,
        Y = e.onGestureStart,
        H = e.onGestureEnd,
        X = e.onWheel,
        W = e.onEnable,
        V = e.onDisable,
        U = e.onClick,
        j = e.scrollSpeed,
        G = e.capture,
        Q = e.allowClicks,
        Z = e.lockAxis,
        $ = e.onLockAxis;
      function cf() {
        return (xe = ze());
      }
      function df(e, t) {
        return ((se.event = e) && u && ~u.indexOf(e.target)) || (t && he && "touch" !== e.pointerType) || (I && I(e, t));
      }
      function ff() {
        var e = (se.deltaX = N(me)),
          t = (se.deltaY = N(ye)),
          r = Math.abs(e) >= o,
          n = Math.abs(t) >= o;
        S && (r || n) && S(se, e, t, me, ye),
          r && (m && 0 < se.deltaX && m(se), y && se.deltaX < 0 && y(se), _ && _(se), k && se.deltaX < 0 != le < 0 && k(se), (le = se.deltaX), (me[0] = me[1] = me[2] = 0)),
          n && (w && 0 < se.deltaY && w(se), x && se.deltaY < 0 && x(se), T && T(se), E && se.deltaY < 0 != ce < 0 && E(se), (ce = se.deltaY), (ye[0] = ye[1] = ye[2] = 0)),
          (ne || re) && (q && q(se), re && (h(se), (re = !1)), (ne = !1)),
          ie && !(ie = !1) && $ && $(se),
          oe && (X(se), (oe = !1)),
          (ee = 0);
      }
      function gf(e, t, r) {
        (me[r] += e), (ye[r] += t), se._vx.update(e), se._vy.update(t), n ? (ee = ee || requestAnimationFrame(ff)) : ff();
      }
      function hf(e, t) {
        Z && !ae && ((se.axis = ae = Math.abs(e) > Math.abs(t) ? "x" : "y"), (ie = !0)),
          "y" !== ae && ((me[2] += e), se._vx.update(e, !0)),
          "x" !== ae && ((ye[2] += t), se._vy.update(t, !0)),
          n ? (ee = ee || requestAnimationFrame(ff)) : ff();
      }
      function jf(e) {
        if (!df(e, 1)) {
          var t = (e = M(e, s)).clientX,
            r = e.clientY,
            n = t - se.x,
            o = r - se.y,
            i = se.isDragging;
          (se.x = t), (se.y = r), (i || Math.abs(se.startX - t) >= a || Math.abs(se.startY - r) >= a) && (h && (re = !0), i || (se.isDragging = !0), hf(n, o), i || (p && p(se)));
        }
      }
      function mf(e) {
        return e.touches && 1 < e.touches.length && (se.isGesturing = !0) && Y(e, se.isDragging);
      }
      function nf() {
        return (se.isGesturing = !1) || H(se);
      }
      function of(e) {
        if (!df(e)) {
          var t = fe(),
            r = de();
          gf((t - pe) * j, (r - ge) * j, 1), (pe = t), (ge = r), l && te.restart(!0);
        }
      }
      function pf(e) {
        if (!df(e)) {
          (e = M(e, s)), X && (oe = !0);
          var t = (1 === e.deltaMode ? r : 2 === e.deltaMode ? Se.innerHeight : 1) * f;
          gf(e.deltaX * t, e.deltaY * t, 0), l && !z && te.restart(!0);
        }
      }
      function qf(e) {
        if (!df(e)) {
          var t = e.clientX,
            r = e.clientY,
            n = t - se.x,
            o = r - se.y;
          (se.x = t), (se.y = r), (ne = !0), l && te.restart(!0), (n || o) && hf(n, o);
        }
      }
      function rf(e) {
        (se.event = e), D(se);
      }
      function sf(e) {
        (se.event = e), R(se);
      }
      function tf(e) {
        return df(e) || (M(e, s) && U(se));
      }
      (this.target = i = J(i) || Pe),
        (this.vars = e),
        (u = u && Ce.utils.toArray(u)),
        (o = o || 1e-9),
        (a = a || 0),
        (f = f || 1),
        (j = j || 1),
        (t = t || "wheel,touch,pointer"),
        (n = !1 !== n),
        (r = r || parseFloat(Se.getComputedStyle(Me).lineHeight) || 22);
      var ee,
        te,
        re,
        ne,
        oe,
        ie,
        ae,
        se = this,
        le = 0,
        ce = 0,
        ue = e.passive || !s,
        fe = K(i, Ye),
        de = K(i, Fe),
        pe = fe(),
        ge = de(),
        he = ~t.indexOf("touch") && !~t.indexOf("pointer") && "pointerdown" === Re[0],
        ve = A(i),
        be = i.ownerDocument || ke,
        me = [0, 0, 0],
        ye = [0, 0, 0],
        xe = 0,
        we = (se.onPress = function (e) {
          df(e, 1) ||
            (e && e.button) ||
            ((se.axis = ae = null),
            te.pause(),
            (se.isPressed = !0),
            (e = M(e)),
            (le = ce = 0),
            (se.startX = se.x = e.clientX),
            (se.startY = se.y = e.clientY),
            se._vx.reset(),
            se._vy.reset(),
            B(z ? i : be, Re[1], jf, ue, !0),
            (se.deltaX = se.deltaY = 0),
            v && v(se));
        }),
        _e = (se.onRelease = function (t) {
          if (!df(t, 1)) {
            C(z ? i : be, Re[1], jf, !0);
            var e = !isNaN(se.y - se.startY),
              r = se.isDragging,
              n = r && (3 < Math.abs(se.x - se.startX) || 3 < Math.abs(se.y - se.startY)),
              o = M(t);
            !n &&
              e &&
              (se._vx.reset(),
              se._vy.reset(),
              s &&
                Q &&
                Ce.delayedCall(0.08, function () {
                  if (300 < ze() - xe && !t.defaultPrevented)
                    if (t.target.click) t.target.click();
                    else if (be.createEvent) {
                      var e = be.createEvent("MouseEvents");
                      e.initMouseEvent("click", !0, !0, Se, 1, o.screenX, o.screenY, o.clientX, o.clientY, !1, !1, !1, !1, 0, null), t.target.dispatchEvent(e);
                    }
                })),
              (se.isDragging = se.isGesturing = se.isPressed = !1),
              l && r && !z && te.restart(!0),
              g && r && g(se),
              b && b(se, n);
          }
        });
      (te = se._dc =
        Ce.delayedCall(c || 0.25, function onStopFunc() {
          se._vx.reset(), se._vy.reset(), te.pause(), l && l(se);
        }).pause()),
        (se.deltaX = se.deltaY = 0),
        (se._vx = L(0, 50, !0)),
        (se._vy = L(0, 50, !0)),
        (se.scrollX = fe),
        (se.scrollY = de),
        (se.isDragging = se.isGesturing = se.isPressed = !1),
        Be(this),
        (se.enable = function (e) {
          return (
            se.isEnabled ||
              (B(ve ? be : i, "scroll", F),
              0 <= t.indexOf("scroll") && B(ve ? be : i, "scroll", of, ue, G),
              0 <= t.indexOf("wheel") && B(i, "wheel", pf, ue, G),
              ((0 <= t.indexOf("touch") && Ee) || 0 <= t.indexOf("pointer")) &&
                (B(i, Re[0], we, ue, G),
                B(be, Re[2], _e),
                B(be, Re[3], _e),
                Q && B(i, "click", cf, !0, !0),
                U && B(i, "click", tf),
                Y && B(be, "gesturestart", mf),
                H && B(be, "gestureend", nf),
                D && B(i, Oe + "enter", rf),
                R && B(i, Oe + "leave", sf),
                q && B(i, Oe + "move", qf)),
              (se.isEnabled = !0),
              e && e.type && we(e),
              W && W(se)),
            se
          );
        }),
        (se.disable = function () {
          se.isEnabled &&
            (qe.filter(function (e) {
              return e !== se && A(e.target);
            }).length || C(ve ? be : i, "scroll", F),
            se.isPressed && (se._vx.reset(), se._vy.reset(), C(z ? i : be, Re[1], jf, !0)),
            C(ve ? be : i, "scroll", of, G),
            C(i, "wheel", pf, G),
            C(i, Re[0], we, G),
            C(be, Re[2], _e),
            C(be, Re[3], _e),
            C(i, "click", cf, !0),
            C(i, "click", tf),
            C(be, "gesturestart", mf),
            C(be, "gestureend", nf),
            C(i, Oe + "enter", rf),
            C(i, Oe + "leave", sf),
            C(i, Oe + "move", qf),
            (se.isEnabled = se.isPressed = se.isDragging = !1),
            V && V(se));
        }),
        (se.kill = se.revert =
          function () {
            se.disable();
            var e = qe.indexOf(se);
            0 <= e && qe.splice(e, 1), De === se && (De = 0);
          }),
        qe.push(se),
        z && A(i) && (De = se),
        se.enable(d);
    }),
    (function _createClass(e, t, r) {
      return t && _defineProperties(e.prototype, t), r && _defineProperties(e, r), e;
    })(Observer, [
      {
        key: "velocityX",
        get: function get() {
          return this._vx.getVelocity();
        },
      },
      {
        key: "velocityY",
        get: function get() {
          return this._vy.getVelocity();
        },
      },
    ]),
    Observer);
  function Observer(e) {
    this.init(e);
  }
  (k.version = "3.12.5"),
    (k.create = function (e) {
      return new k(e);
    }),
    (k.register = P),
    (k.getAll = function () {
      return qe.slice();
    }),
    (k.getById = function (t) {
      return qe.filter(function (e) {
        return e.vars.id === t;
      })[0];
    }),
    r() && Ce.registerPlugin(k);
  function Ca(e, t, r) {
    var n = ct(e) && ("clamp(" === e.substr(0, 6) || -1 < e.indexOf("max"));
    return (r["_" + t + "Clamp"] = n) ? e.substr(6, e.length - 7) : e;
  }
  function Da(e, t) {
    return !t || (ct(e) && "clamp(" === e.substr(0, 6)) ? e : "clamp(" + e + ")";
  }
  function Fa() {
    return (Ge = 1);
  }
  function Ga() {
    return (Ge = 0);
  }
  function Ha(e) {
    return e;
  }
  function Ia(e) {
    return Math.round(1e5 * e) / 1e5 || 0;
  }
  function Ja() {
    return "undefined" != typeof window;
  }
  function Ka() {
    return He || (Ja() && (He = window.gsap) && He.registerPlugin && He);
  }
  function La(e) {
    return !!~l.indexOf(e);
  }
  function Ma(e) {
    return ("Height" === e ? T : Ne["inner" + e]) || Je["client" + e] || We["client" + e];
  }
  function Na(e) {
    return (
      z(e, "getBoundingClientRect") ||
      (La(e)
        ? function () {
            return (Ot.width = Ne.innerWidth), (Ot.height = T), Ot;
          }
        : function () {
            return wt(e);
          })
    );
  }
  function Qa(e, t) {
    var r = t.s,
      n = t.d2,
      o = t.d,
      i = t.a;
    return Math.max(0, (r = "scroll" + n) && (i = z(e, r)) ? i() - Na(e)()[o] : La(e) ? (Je[r] || We[r]) - Ma(n) : e[r] - e["offset" + n]);
  }
  function Ra(e, t) {
    for (var r = 0; r < g.length; r += 3) (t && !~t.indexOf(g[r + 1])) || e(g[r], g[r + 1], g[r + 2]);
  }
  function Ta(e) {
    return "function" == typeof e;
  }
  function Ua(e) {
    return "number" == typeof e;
  }
  function Va(e) {
    return "object" == typeof e;
  }
  function Wa(e, t, r) {
    return e && e.progress(t ? 0 : 1) && r && e.pause();
  }
  function Xa(e, t) {
    if (e.enabled) {
      var r = e._ctx
        ? e._ctx.add(function () {
            return t(e);
          })
        : t(e);
      r && r.totalTime && (e.callbackAnimation = r);
    }
  }
  function mb(e) {
    return Ne.getComputedStyle(e);
  }
  function ob(e, t) {
    for (var r in t) r in e || (e[r] = t[r]);
    return e;
  }
  function qb(e, t) {
    var r = t.d2;
    return e["offset" + r] || e["client" + r] || 0;
  }
  function rb(e) {
    var t,
      r = [],
      n = e.labels,
      o = e.duration();
    for (t in n) r.push(n[t] / o);
    return r;
  }
  function tb(o) {
    var i = He.utils.snap(o),
      a =
        Array.isArray(o) &&
        o.slice(0).sort(function (e, t) {
          return e - t;
        });
    return a
      ? function (e, t, r) {
          var n;
          if ((void 0 === r && (r = 0.001), !t)) return i(e);
          if (0 < t) {
            for (e -= r, n = 0; n < a.length; n++) if (a[n] >= e) return a[n];
            return a[n - 1];
          }
          for (n = a.length, e += r; n--; ) if (a[n] <= e) return a[n];
          return a[0];
        }
      : function (e, t, r) {
          void 0 === r && (r = 0.001);
          var n = i(e);
          return !t || Math.abs(n - e) < r || n - e < 0 == t < 0 ? n : i(t < 0 ? e - o : e + o);
        };
  }
  function vb(t, r, e, n) {
    return e.split(",").forEach(function (e) {
      return t(r, e, n);
    });
  }
  function wb(e, t, r, n, o) {
    return e.addEventListener(t, r, { passive: !n, capture: !!o });
  }
  function xb(e, t, r, n) {
    return e.removeEventListener(t, r, !!n);
  }
  function yb(e, t, r) {
    (r = r && r.wheelHandler) && (e(t, "wheel", r), e(t, "touchmove", r));
  }
  function Cb(e, t) {
    if (ct(e)) {
      var r = e.indexOf("="),
        n = ~r ? (e.charAt(r - 1) + 1) * parseFloat(e.substr(r + 1)) : 0;
      ~r && (e.indexOf("%") > r && (n *= t / 100), (e = e.substr(0, r - 1))), (e = n + (e in H ? H[e] * t : ~e.indexOf("%") ? (parseFloat(e) * t) / 100 : parseFloat(e) || 0));
    }
    return e;
  }
  function Db(e, t, r, n, o, i, a, s) {
    var l = o.startColor,
      c = o.endColor,
      u = o.fontSize,
      f = o.indent,
      d = o.fontWeight,
      p = Xe.createElement("div"),
      g = La(r) || "fixed" === z(r, "pinType"),
      h = -1 !== e.indexOf("scroller"),
      v = g ? We : r,
      b = -1 !== e.indexOf("start"),
      m = b ? l : c,
      y =
        "border-color:" +
        m +
        ";font-size:" +
        u +
        ";color:" +
        m +
        ";font-weight:" +
        d +
        ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
    return (
      (y += "position:" + ((h || s) && g ? "fixed;" : "absolute;")),
      (!h && !s && g) || (y += (n === Fe ? q : I) + ":" + (i + parseFloat(f)) + "px;"),
      a && (y += "box-sizing:border-box;text-align:left;width:" + a.offsetWidth + "px;"),
      (p._isStart = b),
      p.setAttribute("class", "gsap-marker-" + e + (t ? " marker-" + t : "")),
      (p.style.cssText = y),
      (p.innerText = t || 0 === t ? e + "-" + t : e),
      v.children[0] ? v.insertBefore(p, v.children[0]) : v.appendChild(p),
      (p._offset = p["offset" + n.op.d2]),
      X(p, 0, n, b),
      p
    );
  }
  function Ib() {
    return 34 < at() - st && (D = D || requestAnimationFrame(Z));
  }
  function Jb() {
    (v && v.isPressed && !(v.startX > We.clientWidth)) || (Ie.cache++, v ? (D = D || requestAnimationFrame(Z)) : Z(), st || U("scrollStart"), (st = at()));
  }
  function Kb() {
    (y = Ne.innerWidth), (m = Ne.innerHeight);
  }
  function Lb() {
    Ie.cache++, je || h || Xe.fullscreenElement || Xe.webkitFullscreenElement || (b && y === Ne.innerWidth && !(Math.abs(Ne.innerHeight - m) > 0.25 * Ne.innerHeight)) || c.restart(!0);
  }
  function Ob() {
    return xb(ne, "scrollEnd", Ob) || Pt(!0);
  }
  function Rb(e) {
    for (var t = 0; t < j.length; t += 5)
      (!e || (j[t + 4] && j[t + 4].query === e)) && ((j[t].style.cssText = j[t + 1]), j[t].getBBox && j[t].setAttribute("transform", j[t + 2] || ""), (j[t + 3].uncache = 1));
  }
  function Sb(e, t) {
    var r;
    for (Qe = 0; Qe < Tt.length; Qe++) !(r = Tt[Qe]) || (t && r._ctx !== t) || (e ? r.kill(1) : r.revert(!0, !0));
    (S = !0), t && Rb(t), t || U("revert");
  }
  function Tb(e, t) {
    Ie.cache++,
      (!t && rt) ||
        Ie.forEach(function (e) {
          return Ta(e) && e.cacheID++ && (e.rec = 0);
        }),
      ct(e) && (Ne.history.scrollRestoration = w = e);
  }
  function Yb() {
    We.appendChild(_), (T = (!v && _.offsetHeight) || Ne.innerHeight), We.removeChild(_);
  }
  function Zb(t) {
    return Ve(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function (e) {
      return (e.style.display = t ? "none" : "block");
    });
  }
  function gc(e, t, r, n) {
    if (!e._gsap.swappedIn) {
      for (var o, i = $.length, a = t.style, s = e.style; i--; ) a[(o = $[i])] = r[o];
      (a.position = "absolute" === r.position ? "absolute" : "relative"),
        "inline" === r.display && (a.display = "inline-block"),
        (s[I] = s[q] = "auto"),
        (a.flexBasis = r.flexBasis || "auto"),
        (a.overflow = "visible"),
        (a.boxSizing = "border-box"),
        (a[ft] = qb(e, Ye) + xt),
        (a[dt] = qb(e, Fe) + xt),
        (a[bt] = s[mt] = s.top = s.left = "0"),
        Et(n),
        (s[ft] = s.maxWidth = r[ft]),
        (s[dt] = s.maxHeight = r[dt]),
        (s[bt] = r[bt]),
        e.parentNode !== t && (e.parentNode.insertBefore(t, e), t.appendChild(e)),
        (e._gsap.swappedIn = !0);
    }
  }
  function jc(e) {
    for (var t = ee.length, r = e.style, n = [], o = 0; o < t; o++) n.push(ee[o], r[ee[o]]);
    return (n.t = e), n;
  }
  function mc(e, t, r, n, o, i, a, s, l, c, u, f, d, p) {
    Ta(e) && (e = e(s)), ct(e) && "max" === e.substr(0, 3) && (e = f + ("=" === e.charAt(4) ? Cb("0" + e.substr(3), r) : 0));
    var g,
      h,
      v,
      b = d ? d.time() : 0;
    if ((d && d.seek(0), isNaN(e) || (e = +e), Ua(e))) d && (e = He.utils.mapRange(d.scrollTrigger.start, d.scrollTrigger.end, 0, f, e)), a && X(a, r, n, !0);
    else {
      Ta(t) && (t = t(s));
      var m,
        y,
        x,
        w,
        _ = (e || "0").split(" ");
      (v = J(t, s) || We),
        ((m = wt(v) || {}) && (m.left || m.top)) ||
          "none" !== mb(v).display ||
          ((w = v.style.display), (v.style.display = "block"), (m = wt(v)), w ? (v.style.display = w) : v.style.removeProperty("display")),
        (y = Cb(_[0], m[n.d])),
        (x = Cb(_[1] || "0", r)),
        (e = m[n.p] - l[n.p] - c + y + o - x),
        a && X(a, x, n, r - x < 20 || (a._isStart && 20 < x)),
        (r -= r - x);
    }
    if ((p && ((s[p] = e || -0.001), e < 0 && (e = 0)), i)) {
      var C = e + r,
        T = i._isStart;
      (g = "scroll" + n.d2),
        X(i, C, n, (T && 20 < C) || (!T && (u ? Math.max(We[g], Je[g]) : i.parentNode[g]) <= C + 1)),
        u && ((l = wt(a)), u && (i.style[n.op.p] = l[n.op.p] - n.op.m - i._offset + xt));
    }
    return d && v && ((g = wt(v)), d.seek(f), (h = wt(v)), (d._caScrollDist = g[n.p] - h[n.p]), (e = (e / d._caScrollDist) * f)), d && d.seek(b), d ? e : Math.round(e);
  }
  function oc(e, t, r, n) {
    if (e.parentNode !== t) {
      var o,
        i,
        a = e.style;
      if (t === We) {
        for (o in ((e._stOrig = a.cssText), (i = mb(e)))) +o || re.test(o) || !i[o] || "string" != typeof a[o] || "0" === o || (a[o] = i[o]);
        (a.top = r), (a.left = n);
      } else a.cssText = e._stOrig;
      (He.core.getCache(e).uncache = 1), t.appendChild(e);
    }
  }
  function pc(r, e, n) {
    var o = e,
      i = o;
    return function (e) {
      var t = Math.round(r());
      return t !== o && t !== i && 3 < Math.abs(t - o) && 3 < Math.abs(t - i) && ((e = t), n && n()), (i = o), (o = e);
    };
  }
  function qc(e, t, r) {
    var n = {};
    (n[t.p] = "+=" + r), He.set(e, n);
  }
  function rc(c, e) {
    function Ck(e, t, r, n, o) {
      var i = Ck.tween,
        a = t.onComplete,
        s = {};
      r = r || u();
      var l = pc(u, r, function () {
        i.kill(), (Ck.tween = 0);
      });
      return (
        (o = (n && o) || 0),
        (n = n || e - r),
        i && i.kill(),
        (t[f] = e),
        (t.inherit = !1),
        ((t.modifiers = s)[f] = function () {
          return l(r + n * i.ratio + o * i.ratio * i.ratio);
        }),
        (t.onUpdate = function () {
          Ie.cache++, Ck.tween && Z();
        }),
        (t.onComplete = function () {
          (Ck.tween = 0), a && a.call(i);
        }),
        (i = Ck.tween = He.to(c, t))
      );
    }
    var u = K(c, e),
      f = "_scroll" + e.p2;
    return (
      ((c[f] = u).wheelHandler = function () {
        return Ck.tween && Ck.tween.kill() && (Ck.tween = 0);
      }),
      wb(c, "wheel", u.wheelHandler),
      ne.isTouch && wb(c, "touchmove", u.wheelHandler),
      Ck
    );
  }
  var He,
    s,
    Ne,
    Xe,
    Je,
    We,
    l,
    c,
    Ve,
    Ue,
    Ke,
    u,
    je,
    Ge,
    f,
    Qe,
    d,
    p,
    g,
    Ze,
    $e,
    h,
    v,
    b,
    m,
    y,
    E,
    x,
    w,
    _,
    T,
    S,
    et,
    tt,
    D,
    rt,
    nt,
    ot,
    it = 1,
    at = Date.now,
    R = at(),
    st = 0,
    lt = 0,
    ct = function _isString(e) {
      return "string" == typeof e;
    },
    ut = Math.abs,
    q = "right",
    I = "bottom",
    ft = "width",
    dt = "height",
    pt = "Right",
    gt = "Left",
    ht = "Top",
    vt = "Bottom",
    bt = "padding",
    mt = "margin",
    yt = "Width",
    Y = "Height",
    xt = "px",
    wt = function _getBounds(e, t) {
      var r = t && "matrix(1, 0, 0, 1, 0, 0)" !== mb(e)[f] && He.to(e, { x: 0, y: 0, xPercent: 0, yPercent: 0, rotation: 0, rotationX: 0, rotationY: 0, scale: 1, skewX: 0, skewY: 0 }).progress(1),
        n = e.getBoundingClientRect();
      return r && r.progress(0).kill(), n;
    },
    _t = { startColor: "green", endColor: "red", indent: 0, fontSize: "16px", fontWeight: "normal" },
    Ct = { toggleActions: "play", anticipatePin: 0 },
    H = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
    X = function _positionMarker(e, t, r, n) {
      var o = { display: "block" },
        i = r[n ? "os2" : "p2"],
        a = r[n ? "p2" : "os2"];
      (e._isFlipped = n), (o[r.a + "Percent"] = n ? -100 : 0), (o[r.a] = n ? "1px" : 0), (o["border" + i + yt] = 1), (o["border" + a + yt] = 0), (o[r.p] = t + "px"), He.set(e, o);
    },
    Tt = [],
    St = {},
    W = {},
    V = [],
    U = function _dispatch(e) {
      return (
        (W[e] &&
          W[e].map(function (e) {
            return e();
          })) ||
        V
      );
    },
    j = [],
    kt = 0,
    Pt = function _refreshAll(e, t) {
      if (!st || e || S) {
        Yb(),
          (rt = ne.isRefreshing = !0),
          Ie.forEach(function (e) {
            return Ta(e) && ++e.cacheID && (e.rec = e());
          });
        var r = U("refreshInit");
        Ze && ne.sort(),
          t || Sb(),
          Ie.forEach(function (e) {
            Ta(e) && (e.smooth && (e.target.style.scrollBehavior = "auto"), e(0));
          }),
          Tt.slice(0).forEach(function (e) {
            return e.refresh();
          }),
          (S = !1),
          Tt.forEach(function (e) {
            if (e._subPinOffset && e.pin) {
              var t = e.vars.horizontal ? "offsetWidth" : "offsetHeight",
                r = e.pin[t];
              e.revert(!0, 1), e.adjustPinSpacing(e.pin[t] - r), e.refresh();
            }
          }),
          (et = 1),
          Zb(!0),
          Tt.forEach(function (e) {
            var t = Qa(e.scroller, e._dir),
              r = "max" === e.vars.end || (e._endClamp && e.end > t),
              n = e._startClamp && e.start >= t;
            (r || n) && e.setPositions(n ? t - 1 : e.start, r ? Math.max(n ? t : e.start + 1, t) : e.end, !0);
          }),
          Zb(!1),
          (et = 0),
          r.forEach(function (e) {
            return e && e.render && e.render(-1);
          }),
          Ie.forEach(function (e) {
            Ta(e) &&
              (e.smooth &&
                requestAnimationFrame(function () {
                  return (e.target.style.scrollBehavior = "smooth");
                }),
              e.rec && e(e.rec));
          }),
          Tb(w, 1),
          c.pause(),
          kt++,
          Z((rt = 2)),
          Tt.forEach(function (e) {
            return Ta(e.vars.onRefresh) && e.vars.onRefresh(e);
          }),
          (rt = ne.isRefreshing = !1),
          U("refresh");
      } else wb(ne, "scrollEnd", Ob);
    },
    Q = 0,
    Mt = 1,
    Z = function _updateAll(e) {
      if (2 === e || (!rt && !S)) {
        (ne.isUpdating = !0), ot && ot.update(0);
        var t = Tt.length,
          r = at(),
          n = 50 <= r - R,
          o = t && Tt[0].scroll();
        if (((Mt = o < Q ? -1 : 1), rt || (Q = o), n && (st && !Ge && 200 < r - st && ((st = 0), U("scrollEnd")), (Ke = R), (R = r)), Mt < 0)) {
          for (Qe = t; 0 < Qe--; ) Tt[Qe] && Tt[Qe].update(0, n);
          Mt = 1;
        } else for (Qe = 0; Qe < t; Qe++) Tt[Qe] && Tt[Qe].update(0, n);
        ne.isUpdating = !1;
      }
      D = 0;
    },
    $ = [
      "left",
      "top",
      I,
      q,
      mt + vt,
      mt + pt,
      mt + ht,
      mt + gt,
      "display",
      "flexShrink",
      "float",
      "zIndex",
      "gridColumnStart",
      "gridColumnEnd",
      "gridRowStart",
      "gridRowEnd",
      "gridArea",
      "justifySelf",
      "alignSelf",
      "placeSelf",
      "order",
    ],
    ee = $.concat([ft, dt, "boxSizing", "max" + yt, "max" + Y, "position", mt, bt, bt + ht, bt + pt, bt + vt, bt + gt]),
    te = /([A-Z])/g,
    Et = function _setState(e) {
      if (e) {
        var t,
          r,
          n = e.t.style,
          o = e.length,
          i = 0;
        for ((e.t._gsap || He.core.getCache(e.t)).uncache = 1; i < o; i += 2) (r = e[i + 1]), (t = e[i]), r ? (n[t] = r) : n[t] && n.removeProperty(t.replace(te, "-$1").toLowerCase());
      }
    },
    Ot = { left: 0, top: 0 },
    re = /(webkit|moz|length|cssText|inset)/i,
    ne =
      ((ScrollTrigger.prototype.init = function init(E, O) {
        if (((this.progress = this.start = 0), this.vars && this.kill(!0, !0), lt)) {
          var A,
            n,
            p,
            D,
            R,
            B,
            q,
            I,
            L,
            Y,
            F,
            e,
            H,
            N,
            X,
            W,
            V,
            U,
            t,
            j,
            b,
            G,
            Q,
            m,
            Z,
            y,
            $,
            x,
            r,
            w,
            _,
            ee,
            o,
            g,
            te,
            re,
            ne,
            C,
            i,
            T = (E = ob(ct(E) || Ua(E) || E.nodeType ? { trigger: E } : E, Ct)).onUpdate,
            S = E.toggleClass,
            a = E.id,
            k = E.onToggle,
            oe = E.onRefresh,
            P = E.scrub,
            ie = E.trigger,
            ae = E.pin,
            se = E.pinSpacing,
            le = E.invalidateOnRefresh,
            M = E.anticipatePin,
            s = E.onScrubComplete,
            h = E.onSnapComplete,
            ce = E.once,
            ue = E.snap,
            fe = E.pinReparent,
            l = E.pinSpacer,
            de = E.containerAnimation,
            pe = E.fastScrollEnd,
            ge = E.preventOverlaps,
            he = E.horizontal || (E.containerAnimation && !1 !== E.horizontal) ? Ye : Fe,
            ve = !P && 0 !== P,
            be = J(E.scroller || Ne),
            c = He.core.getCache(be),
            me = La(be),
            ye = "fixed" === ("pinType" in E ? E.pinType : z(be, "pinType") || (me && "fixed")),
            xe = [E.onEnter, E.onLeave, E.onEnterBack, E.onLeaveBack],
            we = ve && E.toggleActions.split(" "),
            _e = "markers" in E ? E.markers : Ct.markers,
            Ce = me ? 0 : parseFloat(mb(be)["border" + he.p2 + yt]) || 0,
            Te = this,
            Se =
              E.onRefreshInit &&
              function () {
                return E.onRefreshInit(Te);
              },
            ke = (function _getSizeFunc(e, t, r) {
              var n = r.d,
                o = r.d2,
                i = r.a;
              return (i = z(e, "getBoundingClientRect"))
                ? function () {
                    return i()[n];
                  }
                : function () {
                    return (t ? Ma(o) : e["client" + o]) || 0;
                  };
            })(be, me, he),
            Pe = (function _getOffsetsFunc(e, t) {
              return !t || ~Le.indexOf(e)
                ? Na(e)
                : function () {
                    return Ot;
                  };
            })(be, me),
            Me = 0,
            Ee = 0,
            Oe = 0,
            Ae = K(be, he);
          if (
            ((Te._startClamp = Te._endClamp = !1),
            (Te._dir = he),
            (M *= 45),
            (Te.scroller = be),
            (Te.scroll = de ? de.time.bind(de) : Ae),
            (D = Ae()),
            (Te.vars = E),
            (O = O || E.animation),
            "refreshPriority" in E && ((Ze = 1), -9999 === E.refreshPriority && (ot = Te)),
            (c.tweenScroll = c.tweenScroll || { top: rc(be, Fe), left: rc(be, Ye) }),
            (Te.tweenTo = A = c.tweenScroll[he.p]),
            (Te.scrubDuration = function (e) {
              (o = Ua(e) && e)
                ? ee
                  ? ee.duration(e)
                  : (ee = He.to(O, {
                      ease: "expo",
                      totalProgress: "+=0",
                      inherit: !1,
                      duration: o,
                      paused: !0,
                      onComplete: function onComplete() {
                        return s && s(Te);
                      },
                    }))
                : (ee && ee.progress(1).kill(), (ee = 0));
            }),
            O &&
              ((O.vars.lazy = !1),
              (O._initted && !Te.isReverted) || (!1 !== O.vars.immediateRender && !1 !== E.immediateRender && O.duration() && O.render(0, !0, !0)),
              (Te.animation = O.pause()),
              (O.scrollTrigger = Te).scrubDuration(P),
              (w = 0),
              (a = a || O.vars.id)),
            ue &&
              ((Va(ue) && !ue.push) || (ue = { snapTo: ue }),
              "scrollBehavior" in We.style && He.set(me ? [We, Je] : be, { scrollBehavior: "auto" }),
              Ie.forEach(function (e) {
                return Ta(e) && e.target === (me ? Xe.scrollingElement || Je : be) && (e.smooth = !1);
              }),
              (p = Ta(ue.snapTo)
                ? ue.snapTo
                : "labels" === ue.snapTo
                ? (function _getClosestLabel(t) {
                    return function (e) {
                      return He.utils.snap(rb(t), e);
                    };
                  })(O)
                : "labelsDirectional" === ue.snapTo
                ? (function _getLabelAtDirection(r) {
                    return function (e, t) {
                      return tb(rb(r))(e, t.direction);
                    };
                  })(O)
                : !1 !== ue.directional
                ? function (e, t) {
                    return tb(ue.snapTo)(e, at() - Ee < 500 ? 0 : t.direction);
                  }
                : He.utils.snap(ue.snapTo)),
              (g = ue.duration || { min: 0.1, max: 2 }),
              (g = Va(g) ? Ue(g.min, g.max) : Ue(g, g)),
              (te = He.delayedCall(ue.delay || o / 2 || 0.1, function () {
                var e = Ae(),
                  t = at() - Ee < 500,
                  r = A.tween;
                if (!(t || Math.abs(Te.getVelocity()) < 10) || r || Ge || Me === e) Te.isActive && Me !== e && te.restart(!0);
                else {
                  var n,
                    o,
                    i = (e - B) / N,
                    a = O && !ve ? O.totalProgress() : i,
                    s = t ? 0 : ((a - _) / (at() - Ke)) * 1e3 || 0,
                    l = He.utils.clamp(-i, 1 - i, (ut(s / 2) * s) / 0.185),
                    c = i + (!1 === ue.inertia ? 0 : l),
                    u = ue.onStart,
                    f = ue.onInterrupt,
                    d = ue.onComplete;
                  if (((n = p(c, Te)), Ua(n) || (n = c), (o = Math.round(B + n * N)), e <= q && B <= e && o !== e)) {
                    if (r && !r._initted && r.data <= ut(o - e)) return;
                    !1 === ue.inertia && (l = n - i),
                      A(
                        o,
                        {
                          duration: g(ut((0.185 * Math.max(ut(c - a), ut(n - a))) / s / 0.05 || 0)),
                          ease: ue.ease || "power3",
                          data: ut(o - e),
                          onInterrupt: function onInterrupt() {
                            return te.restart(!0) && f && f(Te);
                          },
                          onComplete: function onComplete() {
                            Te.update(),
                              (Me = Ae()),
                              O && (ee ? ee.resetTo("totalProgress", n, O._tTime / O._tDur) : O.progress(n)),
                              (w = _ = O && !ve ? O.totalProgress() : Te.progress),
                              h && h(Te),
                              d && d(Te);
                          },
                        },
                        e,
                        l * N,
                        o - e - l * N
                      ),
                      u && u(Te, A.tween);
                  }
                }
              }).pause())),
            a && (St[a] = Te),
            (i = (i = (ie = Te.trigger = J(ie || (!0 !== ae && ae))) && ie._gsap && ie._gsap.stRevert) && i(Te)),
            (ae = !0 === ae ? ie : J(ae)),
            ct(S) && (S = { targets: ie, className: S }),
            ae &&
              (!1 === se || se === mt || (se = !(!se && ae.parentNode && ae.parentNode.style && "flex" === mb(ae.parentNode).display) && bt),
              (Te.pin = ae),
              (n = He.core.getCache(ae)).spacer
                ? (X = n.pinState)
                : (l && ((l = J(l)) && !l.nodeType && (l = l.current || l.nativeElement), (n.spacerIsNative = !!l), l && (n.spacerState = jc(l))),
                  (n.spacer = U = l || Xe.createElement("div")),
                  U.classList.add("pin-spacer"),
                  a && U.classList.add("pin-spacer-" + a),
                  (n.pinState = X = jc(ae))),
              !1 !== E.force3D && He.set(ae, { force3D: !0 }),
              (Te.spacer = U = n.spacer),
              (r = mb(ae)),
              (m = r[se + he.os2]),
              (j = He.getProperty(ae)),
              (b = He.quickSetter(ae, he.a, xt)),
              gc(ae, U, r),
              (V = jc(ae))),
            _e)
          ) {
            (e = Va(_e) ? ob(_e, _t) : _t), (Y = Db("scroller-start", a, be, he, e, 0)), (F = Db("scroller-end", a, be, he, e, 0, Y)), (t = Y["offset" + he.op.d2]);
            var u = J(z(be, "content") || be);
            (I = this.markerStart = Db("start", a, u, he, e, t, 0, de)),
              (L = this.markerEnd = Db("end", a, u, he, e, t, 0, de)),
              de && (C = He.quickSetter([I, L], he.a, xt)),
              ye ||
                (Le.length && !0 === z(be, "fixedMarkers")) ||
                ((function _makePositionable(e) {
                  var t = mb(e).position;
                  e.style.position = "absolute" === t || "fixed" === t ? t : "relative";
                })(me ? We : be),
                He.set([Y, F], { force3D: !0 }),
                (y = He.quickSetter(Y, he.a, xt)),
                (x = He.quickSetter(F, he.a, xt)));
          }
          if (de) {
            var f = de.vars.onUpdate,
              d = de.vars.onUpdateParams;
            de.eventCallback("onUpdate", function () {
              Te.update(0, 0, 1), f && f.apply(de, d || []);
            });
          }
          if (
            ((Te.previous = function () {
              return Tt[Tt.indexOf(Te) - 1];
            }),
            (Te.next = function () {
              return Tt[Tt.indexOf(Te) + 1];
            }),
            (Te.revert = function (e, t) {
              if (!t) return Te.kill(!0);
              var r = !1 !== e || !Te.enabled,
                n = je;
              r !== Te.isReverted &&
                (r && ((re = Math.max(Ae(), Te.scroll.rec || 0)), (Oe = Te.progress), (ne = O && O.progress())),
                I &&
                  [I, L, Y, F].forEach(function (e) {
                    return (e.style.display = r ? "none" : "block");
                  }),
                r && (je = Te).update(r),
                !ae ||
                  (fe && Te.isActive) ||
                  (r
                    ? (function _swapPinOut(e, t, r) {
                        Et(r);
                        var n = e._gsap;
                        if (n.spacerIsNative) Et(n.spacerState);
                        else if (e._gsap.swappedIn) {
                          var o = t.parentNode;
                          o && (o.insertBefore(e, t), o.removeChild(t));
                        }
                        e._gsap.swappedIn = !1;
                      })(ae, U, X)
                    : gc(ae, U, mb(ae), Z)),
                r || Te.update(r),
                (je = n),
                (Te.isReverted = r));
            }),
            (Te.refresh = function (e, t, r, n) {
              if ((!je && Te.enabled) || t)
                if (ae && e && st) wb(ScrollTrigger, "scrollEnd", Ob);
                else {
                  !rt && Se && Se(Te),
                    (je = Te),
                    A.tween && !r && (A.tween.kill(), (A.tween = 0)),
                    ee && ee.pause(),
                    le && O && O.revert({ kill: !1 }).invalidate(),
                    Te.isReverted || Te.revert(!0, !0),
                    (Te._subPinOffset = !1);
                  var o,
                    i,
                    a,
                    s,
                    l,
                    c,
                    u,
                    f,
                    d,
                    p,
                    g,
                    h,
                    v,
                    b = ke(),
                    m = Pe(),
                    y = de ? de.duration() : Qa(be, he),
                    x = N <= 0.01,
                    w = 0,
                    _ = n || 0,
                    C = Va(r) ? r.end : E.end,
                    T = E.endTrigger || ie,
                    S = Va(r) ? r.start : E.start || (0 !== E.start && ie ? (ae ? "0 0" : "0 100%") : 0),
                    k = (Te.pinnedContainer = E.pinnedContainer && J(E.pinnedContainer, Te)),
                    P = (ie && Math.max(0, Tt.indexOf(Te))) || 0,
                    M = P;
                  for (_e && Va(r) && ((h = He.getProperty(Y, he.p)), (v = He.getProperty(F, he.p))); M--; )
                    (c = Tt[M]).end || c.refresh(0, 1) || (je = Te),
                      !(u = c.pin) || (u !== ie && u !== ae && u !== k) || c.isReverted || ((p = p || []).unshift(c), c.revert(!0, !0)),
                      c !== Tt[M] && (P--, M--);
                  for (
                    Ta(S) && (S = S(Te)),
                      S = Ca(S, "start", Te),
                      B = mc(S, ie, b, he, Ae(), I, Y, Te, m, Ce, ye, y, de, Te._startClamp && "_startClamp") || (ae ? -0.001 : 0),
                      Ta(C) && (C = C(Te)),
                      ct(C) &&
                        !C.indexOf("+=") &&
                        (~C.indexOf(" ")
                          ? (C = (ct(S) ? S.split(" ")[0] : "") + C)
                          : ((w = Cb(C.substr(2), b)), (C = ct(S) ? S : (de ? He.utils.mapRange(0, de.duration(), de.scrollTrigger.start, de.scrollTrigger.end, B) : B) + w), (T = ie))),
                      C = Ca(C, "end", Te),
                      q = Math.max(B, mc(C || (T ? "100% 0" : y), T, b, he, Ae() + w, L, F, Te, m, Ce, ye, y, de, Te._endClamp && "_endClamp")) || -0.001,
                      w = 0,
                      M = P;
                    M--;

                  )
                    (u = (c = Tt[M]).pin) &&
                      c.start - c._pinPush <= B &&
                      !de &&
                      0 < c.end &&
                      ((o = c.end - (Te._startClamp ? Math.max(0, c.start) : c.start)),
                      ((u === ie && c.start - c._pinPush < B) || u === k) && isNaN(S) && (w += o * (1 - c.progress)),
                      u === ae && (_ += o));
                  if (
                    ((B += w),
                    (q += w),
                    Te._startClamp && (Te._startClamp += w),
                    Te._endClamp && !rt && ((Te._endClamp = q || -0.001), (q = Math.min(q, Qa(be, he)))),
                    (N = q - B || ((B -= 0.01) && 0.001)),
                    x && (Oe = He.utils.clamp(0, 1, He.utils.normalize(B, q, re))),
                    (Te._pinPush = _),
                    I && w && (((o = {})[he.a] = "+=" + w), k && (o[he.p] = "-=" + Ae()), He.set([I, L], o)),
                    !ae || (et && Te.end >= Qa(be, he)))
                  ) {
                    if (ie && Ae() && !de) for (i = ie.parentNode; i && i !== We; ) i._pinOffset && ((B -= i._pinOffset), (q -= i._pinOffset)), (i = i.parentNode);
                  } else
                    (o = mb(ae)),
                      (s = he === Fe),
                      (a = Ae()),
                      (G = parseFloat(j(he.a)) + _),
                      !y &&
                        1 < q &&
                        ((g = { style: (g = (me ? Xe.scrollingElement || Je : be).style), value: g["overflow" + he.a.toUpperCase()] }),
                        me && "scroll" !== mb(We)["overflow" + he.a.toUpperCase()] && (g.style["overflow" + he.a.toUpperCase()] = "scroll")),
                      gc(ae, U, o),
                      (V = jc(ae)),
                      (i = wt(ae, !0)),
                      (f = ye && K(be, s ? Ye : Fe)()),
                      se
                        ? (((Z = [se + he.os2, N + _ + xt]).t = U),
                          (M = se === bt ? qb(ae, he) + N + _ : 0) && (Z.push(he.d, M + xt), "auto" !== U.style.flexBasis && (U.style.flexBasis = M + xt)),
                          Et(Z),
                          k &&
                            Tt.forEach(function (e) {
                              e.pin === k && !1 !== e.vars.pinSpacing && (e._subPinOffset = !0);
                            }),
                          ye && Ae(re))
                        : (M = qb(ae, he)) && "auto" !== U.style.flexBasis && (U.style.flexBasis = M + xt),
                      ye &&
                        (((l = { top: i.top + (s ? a - B : f) + xt, left: i.left + (s ? f : a - B) + xt, boxSizing: "border-box", position: "fixed" })[ft] = l.maxWidth = Math.ceil(i.width) + xt),
                        (l[dt] = l.maxHeight = Math.ceil(i.height) + xt),
                        (l[mt] = l[mt + ht] = l[mt + pt] = l[mt + vt] = l[mt + gt] = "0"),
                        (l[bt] = o[bt]),
                        (l[bt + ht] = o[bt + ht]),
                        (l[bt + pt] = o[bt + pt]),
                        (l[bt + vt] = o[bt + vt]),
                        (l[bt + gt] = o[bt + gt]),
                        (W = (function _copyState(e, t, r) {
                          for (var n, o = [], i = e.length, a = r ? 8 : 0; a < i; a += 2) (n = e[a]), o.push(n, n in t ? t[n] : e[a + 1]);
                          return (o.t = e.t), o;
                        })(X, l, fe)),
                        rt && Ae(0)),
                      O
                        ? ((d = O._initted),
                          $e(1),
                          O.render(O.duration(), !0, !0),
                          (Q = j(he.a) - G + N + _),
                          ($ = 1 < Math.abs(N - Q)),
                          ye && $ && W.splice(W.length - 2, 2),
                          O.render(0, !0, !0),
                          d || O.invalidate(!0),
                          O.parent || O.totalTime(O.totalTime()),
                          $e(0))
                        : (Q = N),
                      g && (g.value ? (g.style["overflow" + he.a.toUpperCase()] = g.value) : g.style.removeProperty("overflow-" + he.a));
                  p &&
                    p.forEach(function (e) {
                      return e.revert(!1, !0);
                    }),
                    (Te.start = B),
                    (Te.end = q),
                    (D = R = rt ? re : Ae()),
                    de || rt || (D < re && Ae(re), (Te.scroll.rec = 0)),
                    Te.revert(!1, !0),
                    (Ee = at()),
                    te && ((Me = -1), te.restart(!0)),
                    (je = 0),
                    O && ve && (O._initted || ne) && O.progress() !== ne && O.progress(ne || 0, !0).render(O.time(), !0, !0),
                    (x || Oe !== Te.progress || de || le) &&
                      (O && !ve && O.totalProgress(de && B < -0.001 && !Oe ? He.utils.normalize(B, q, 0) : Oe, !0), (Te.progress = x || (D - B) / N === Oe ? 0 : Oe)),
                    ae && se && (U._pinOffset = Math.round(Te.progress * Q)),
                    ee && ee.invalidate(),
                    isNaN(h) || ((h -= He.getProperty(Y, he.p)), (v -= He.getProperty(F, he.p)), qc(Y, he, h), qc(I, he, h - (n || 0)), qc(F, he, v), qc(L, he, v - (n || 0))),
                    x && !rt && Te.update(),
                    !oe || rt || H || ((H = !0), oe(Te), (H = !1));
                }
            }),
            (Te.getVelocity = function () {
              return ((Ae() - R) / (at() - Ke)) * 1e3 || 0;
            }),
            (Te.endAnimation = function () {
              Wa(Te.callbackAnimation), O && (ee ? ee.progress(1) : O.paused() ? ve || Wa(O, Te.direction < 0, 1) : Wa(O, O.reversed()));
            }),
            (Te.labelToScroll = function (e) {
              return (O && O.labels && (B || Te.refresh() || B) + (O.labels[e] / O.duration()) * N) || 0;
            }),
            (Te.getTrailing = function (t) {
              var e = Tt.indexOf(Te),
                r = 0 < Te.direction ? Tt.slice(0, e).reverse() : Tt.slice(e + 1);
              return (
                ct(t)
                  ? r.filter(function (e) {
                      return e.vars.preventOverlaps === t;
                    })
                  : r
              ).filter(function (e) {
                return 0 < Te.direction ? e.end <= B : e.start >= q;
              });
            }),
            (Te.update = function (e, t, r) {
              if (!de || r || e) {
                var n,
                  o,
                  i,
                  a,
                  s,
                  l,
                  c,
                  u = !0 === rt ? re : Te.scroll(),
                  f = e ? 0 : (u - B) / N,
                  d = f < 0 ? 0 : 1 < f ? 1 : f || 0,
                  p = Te.progress;
                if (
                  (t && ((R = D), (D = de ? Ae() : u), ue && ((_ = w), (w = O && !ve ? O.totalProgress() : d))),
                  M && ae && !je && !it && st && (!d && B < u + ((u - R) / (at() - Ke)) * M ? (d = 1e-4) : 1 === d && q > u + ((u - R) / (at() - Ke)) * M && (d = 0.9999)),
                  d !== p && Te.enabled)
                ) {
                  if (
                    ((a = (s = (n = Te.isActive = !!d && d < 1) != (!!p && p < 1)) || !!d != !!p),
                    (Te.direction = p < d ? 1 : -1),
                    (Te.progress = d),
                    a &&
                      !je &&
                      ((o = d && !p ? 0 : 1 === d ? 1 : 1 === p ? 2 : 3), ve && ((i = (!s && "none" !== we[o + 1] && we[o + 1]) || we[o]), (c = O && ("complete" === i || "reset" === i || i in O)))),
                    ge &&
                      (s || c) &&
                      (c || P || !O) &&
                      (Ta(ge)
                        ? ge(Te)
                        : Te.getTrailing(ge).forEach(function (e) {
                            return e.endAnimation();
                          })),
                    ve ||
                      (!ee || je || it
                        ? O && O.totalProgress(d, !(!je || (!Ee && !e)))
                        : (ee._dp._time - ee._start !== ee._time && ee.render(ee._dp._time - ee._start),
                          ee.resetTo ? ee.resetTo("totalProgress", d, O._tTime / O._tDur) : ((ee.vars.totalProgress = d), ee.invalidate().restart()))),
                    ae)
                  )
                    if ((e && se && (U.style[se + he.os2] = m), ye)) {
                      if (a) {
                        if (((l = !e && p < d && u < q + 1 && u + 1 >= Qa(be, he)), fe))
                          if (e || (!n && !l)) oc(ae, U);
                          else {
                            var g = wt(ae, !0),
                              h = u - B;
                            oc(ae, We, g.top + (he === Fe ? h : 0) + xt, g.left + (he === Fe ? 0 : h) + xt);
                          }
                        Et(n || l ? W : V), ($ && d < 1 && n) || b(G + (1 !== d || l ? 0 : Q));
                      }
                    } else b(Ia(G + Q * d));
                  !ue || A.tween || je || it || te.restart(!0),
                    S &&
                      (s || (ce && d && (d < 1 || !tt))) &&
                      Ve(S.targets).forEach(function (e) {
                        return e.classList[n || ce ? "add" : "remove"](S.className);
                      }),
                    !T || ve || e || T(Te),
                    a && !je
                      ? (ve && (c && ("complete" === i ? O.pause().totalProgress(1) : "reset" === i ? O.restart(!0).pause() : "restart" === i ? O.restart(!0) : O[i]()), T && T(Te)),
                        (!s && tt) || (k && s && Xa(Te, k), xe[o] && Xa(Te, xe[o]), ce && (1 === d ? Te.kill(!1, 1) : (xe[o] = 0)), s || (xe[(o = 1 === d ? 1 : 3)] && Xa(Te, xe[o]))),
                        pe && !n && Math.abs(Te.getVelocity()) > (Ua(pe) ? pe : 2500) && (Wa(Te.callbackAnimation), ee ? ee.progress(1) : Wa(O, "reverse" === i ? 1 : !d, 1)))
                      : ve && T && !je && T(Te);
                }
                if (x) {
                  var v = de ? (u / de.duration()) * (de._caScrollDist || 0) : u;
                  y(v + (Y._isFlipped ? 1 : 0)), x(v);
                }
                C && C((-u / de.duration()) * (de._caScrollDist || 0));
              }
            }),
            (Te.enable = function (e, t) {
              Te.enabled ||
                ((Te.enabled = !0),
                wb(be, "resize", Lb),
                me || wb(be, "scroll", Jb),
                Se && wb(ScrollTrigger, "refreshInit", Se),
                !1 !== e && ((Te.progress = Oe = 0), (D = R = Me = Ae())),
                !1 !== t && Te.refresh());
            }),
            (Te.getTween = function (e) {
              return e && A ? A.tween : ee;
            }),
            (Te.setPositions = function (e, t, r, n) {
              if (de) {
                var o = de.scrollTrigger,
                  i = de.duration(),
                  a = o.end - o.start;
                (e = o.start + (a * e) / i), (t = o.start + (a * t) / i);
              }
              Te.refresh(!1, !1, { start: Da(e, r && !!Te._startClamp), end: Da(t, r && !!Te._endClamp) }, n), Te.update();
            }),
            (Te.adjustPinSpacing = function (e) {
              if (Z && e) {
                var t = Z.indexOf(he.d) + 1;
                (Z[t] = parseFloat(Z[t]) + e + xt), (Z[1] = parseFloat(Z[1]) + e + xt), Et(Z);
              }
            }),
            (Te.disable = function (e, t) {
              if (
                Te.enabled &&
                (!1 !== e && Te.revert(!0, !0),
                (Te.enabled = Te.isActive = !1),
                t || (ee && ee.pause()),
                (re = 0),
                n && (n.uncache = 1),
                Se && xb(ScrollTrigger, "refreshInit", Se),
                te && (te.pause(), A.tween && A.tween.kill() && (A.tween = 0)),
                !me)
              ) {
                for (var r = Tt.length; r--; ) if (Tt[r].scroller === be && Tt[r] !== Te) return;
                xb(be, "resize", Lb), me || xb(be, "scroll", Jb);
              }
            }),
            (Te.kill = function (e, t) {
              Te.disable(e, t), ee && !t && ee.kill(), a && delete St[a];
              var r = Tt.indexOf(Te);
              0 <= r && Tt.splice(r, 1),
                r === Qe && 0 < Mt && Qe--,
                (r = 0),
                Tt.forEach(function (e) {
                  return e.scroller === Te.scroller && (r = 1);
                }),
                r || rt || (Te.scroll.rec = 0),
                O && ((O.scrollTrigger = null), e && O.revert({ kill: !1 }), t || O.kill()),
                I &&
                  [I, L, Y, F].forEach(function (e) {
                    return e.parentNode && e.parentNode.removeChild(e);
                  }),
                ot === Te && (ot = 0),
                ae &&
                  (n && (n.uncache = 1),
                  (r = 0),
                  Tt.forEach(function (e) {
                    return e.pin === ae && r++;
                  }),
                  r || (n.spacer = 0)),
                E.onKill && E.onKill(Te);
            }),
            Tt.push(Te),
            Te.enable(!1, !1),
            i && i(Te),
            O && O.add && !N)
          ) {
            var v = Te.update;
            (Te.update = function () {
              (Te.update = v), B || q || Te.refresh();
            }),
              He.delayedCall(0.01, Te.update),
              (N = 0.01),
              (B = q = 0);
          } else Te.refresh();
          ae &&
            (function _queueRefreshAll() {
              if (nt !== kt) {
                var e = (nt = kt);
                requestAnimationFrame(function () {
                  return e === kt && Pt(!0);
                });
              }
            })();
        } else this.update = this.refresh = this.kill = Ha;
      }),
      (ScrollTrigger.register = function register(e) {
        return s || ((He = e || Ka()), Ja() && window.document && ScrollTrigger.enable(), (s = lt)), s;
      }),
      (ScrollTrigger.defaults = function defaults(e) {
        if (e) for (var t in e) Ct[t] = e[t];
        return Ct;
      }),
      (ScrollTrigger.disable = function disable(t, r) {
        (lt = 0),
          Tt.forEach(function (e) {
            return e[r ? "kill" : "disable"](t);
          }),
          xb(Ne, "wheel", Jb),
          xb(Xe, "scroll", Jb),
          clearInterval(u),
          xb(Xe, "touchcancel", Ha),
          xb(We, "touchstart", Ha),
          vb(xb, Xe, "pointerdown,touchstart,mousedown", Fa),
          vb(xb, Xe, "pointerup,touchend,mouseup", Ga),
          c.kill(),
          Ra(xb);
        for (var e = 0; e < Ie.length; e += 3) yb(xb, Ie[e], Ie[e + 1]), yb(xb, Ie[e], Ie[e + 2]);
      }),
      (ScrollTrigger.enable = function enable() {
        if (
          ((Ne = window),
          (Xe = document),
          (Je = Xe.documentElement),
          (We = Xe.body),
          He &&
            ((Ve = He.utils.toArray),
            (Ue = He.utils.clamp),
            (x = He.core.context || Ha),
            ($e = He.core.suppressOverwrites || Ha),
            (w = Ne.history.scrollRestoration || "auto"),
            (Q = Ne.pageYOffset),
            He.core.globals("ScrollTrigger", ScrollTrigger),
            We))
        ) {
          (lt = 1),
            ((_ = document.createElement("div")).style.height = "100vh"),
            (_.style.position = "absolute"),
            Yb(),
            (function _rafBugFix() {
              return lt && requestAnimationFrame(_rafBugFix);
            })(),
            k.register(He),
            (ScrollTrigger.isTouch = k.isTouch),
            (E = k.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
            (b = 1 === k.isTouch),
            wb(Ne, "wheel", Jb),
            (l = [Ne, Xe, Je, We]),
            He.matchMedia
              ? ((ScrollTrigger.matchMedia = function (e) {
                  var t,
                    r = He.matchMedia();
                  for (t in e) r.add(t, e[t]);
                  return r;
                }),
                He.addEventListener("matchMediaInit", function () {
                  return Sb();
                }),
                He.addEventListener("matchMediaRevert", function () {
                  return Rb();
                }),
                He.addEventListener("matchMedia", function () {
                  Pt(0, 1), U("matchMedia");
                }),
                He.matchMedia("(orientation: portrait)", function () {
                  return Kb(), Kb;
                }))
              : console.warn("Requires GSAP 3.11.0 or later"),
            Kb(),
            wb(Xe, "scroll", Jb);
          var e,
            t,
            r = We.style,
            n = r.borderTopStyle,
            o = He.core.Animation.prototype;
          for (
            o.revert ||
              Object.defineProperty(o, "revert", {
                value: function value() {
                  return this.time(-0.01, !0);
                },
              }),
              r.borderTopStyle = "solid",
              e = wt(We),
              Fe.m = Math.round(e.top + Fe.sc()) || 0,
              Ye.m = Math.round(e.left + Ye.sc()) || 0,
              n ? (r.borderTopStyle = n) : r.removeProperty("border-top-style"),
              u = setInterval(Ib, 250),
              He.delayedCall(0.5, function () {
                return (it = 0);
              }),
              wb(Xe, "touchcancel", Ha),
              wb(We, "touchstart", Ha),
              vb(wb, Xe, "pointerdown,touchstart,mousedown", Fa),
              vb(wb, Xe, "pointerup,touchend,mouseup", Ga),
              f = He.utils.checkPrefix("transform"),
              ee.push(f),
              s = at(),
              c = He.delayedCall(0.2, Pt).pause(),
              g = [
                Xe,
                "visibilitychange",
                function () {
                  var e = Ne.innerWidth,
                    t = Ne.innerHeight;
                  Xe.hidden ? ((d = e), (p = t)) : (d === e && p === t) || Lb();
                },
                Xe,
                "DOMContentLoaded",
                Pt,
                Ne,
                "load",
                Pt,
                Ne,
                "resize",
                Lb,
              ],
              Ra(wb),
              Tt.forEach(function (e) {
                return e.enable(0, 1);
              }),
              t = 0;
            t < Ie.length;
            t += 3
          )
            yb(xb, Ie[t], Ie[t + 1]), yb(xb, Ie[t], Ie[t + 2]);
        }
      }),
      (ScrollTrigger.config = function config(e) {
        "limitCallbacks" in e && (tt = !!e.limitCallbacks);
        var t = e.syncInterval;
        (t && clearInterval(u)) || ((u = t) && setInterval(Ib, t)),
          "ignoreMobileResize" in e && (b = 1 === ScrollTrigger.isTouch && e.ignoreMobileResize),
          "autoRefreshEvents" in e && (Ra(xb) || Ra(wb, e.autoRefreshEvents || "none"), (h = -1 === (e.autoRefreshEvents + "").indexOf("resize")));
      }),
      (ScrollTrigger.scrollerProxy = function scrollerProxy(e, t) {
        var r = J(e),
          n = Ie.indexOf(r),
          o = La(r);
        ~n && Ie.splice(n, o ? 6 : 2), t && (o ? Le.unshift(Ne, t, We, t, Je, t) : Le.unshift(r, t));
      }),
      (ScrollTrigger.clearMatchMedia = function clearMatchMedia(t) {
        Tt.forEach(function (e) {
          return e._ctx && e._ctx.query === t && e._ctx.kill(!0, !0);
        });
      }),
      (ScrollTrigger.isInViewport = function isInViewport(e, t, r) {
        var n = (ct(e) ? J(e) : e).getBoundingClientRect(),
          o = n[r ? ft : dt] * t || 0;
        return r ? 0 < n.right - o && n.left + o < Ne.innerWidth : 0 < n.bottom - o && n.top + o < Ne.innerHeight;
      }),
      (ScrollTrigger.positionInViewport = function positionInViewport(e, t, r) {
        ct(e) && (e = J(e));
        var n = e.getBoundingClientRect(),
          o = n[r ? ft : dt],
          i = null == t ? o / 2 : t in H ? H[t] * o : ~t.indexOf("%") ? (parseFloat(t) * o) / 100 : parseFloat(t) || 0;
        return r ? (n.left + i) / Ne.innerWidth : (n.top + i) / Ne.innerHeight;
      }),
      (ScrollTrigger.killAll = function killAll(e) {
        if (
          (Tt.slice(0).forEach(function (e) {
            return "ScrollSmoother" !== e.vars.id && e.kill();
          }),
          !0 !== e)
        ) {
          var t = W.killAll || [];
          (W = {}),
            t.forEach(function (e) {
              return e();
            });
        }
      }),
      ScrollTrigger);
  function ScrollTrigger(e, t) {
    s || ScrollTrigger.register(He) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), x(this), this.init(e, t);
  }
  (ne.version = "3.12.5"),
    (ne.saveStyles = function (e) {
      return e
        ? Ve(e).forEach(function (e) {
            if (e && e.style) {
              var t = j.indexOf(e);
              0 <= t && j.splice(t, 5), j.push(e, e.style.cssText, e.getBBox && e.getAttribute("transform"), He.core.getCache(e), x());
            }
          })
        : j;
    }),
    (ne.revert = function (e, t) {
      return Sb(!e, t);
    }),
    (ne.create = function (e, t) {
      return new ne(e, t);
    }),
    (ne.refresh = function (e) {
      return e ? Lb() : (s || ne.register()) && Pt(!0);
    }),
    (ne.update = function (e) {
      return ++Ie.cache && Z(!0 === e ? 2 : 0);
    }),
    (ne.clearScrollMemory = Tb),
    (ne.maxScroll = function (e, t) {
      return Qa(e, t ? Ye : Fe);
    }),
    (ne.getScrollFunc = function (e, t) {
      return K(J(e), t ? Ye : Fe);
    }),
    (ne.getById = function (e) {
      return St[e];
    }),
    (ne.getAll = function () {
      return Tt.filter(function (e) {
        return "ScrollSmoother" !== e.vars.id;
      });
    }),
    (ne.isScrolling = function () {
      return !!st;
    }),
    (ne.snapDirectional = tb),
    (ne.addEventListener = function (e, t) {
      var r = W[e] || (W[e] = []);
      ~r.indexOf(t) || r.push(t);
    }),
    (ne.removeEventListener = function (e, t) {
      var r = W[e],
        n = r && r.indexOf(t);
      0 <= n && r.splice(n, 1);
    }),
    (ne.batch = function (e, t) {
      function Cp(e, t) {
        var r = [],
          n = [],
          o = He.delayedCall(i, function () {
            t(r, n), (r = []), (n = []);
          }).pause();
        return function (e) {
          r.length || o.restart(!0), r.push(e.trigger), n.push(e), a <= r.length && o.progress(1);
        };
      }
      var r,
        n = [],
        o = {},
        i = t.interval || 0.016,
        a = t.batchMax || 1e9;
      for (r in t) o[r] = "on" === r.substr(0, 2) && Ta(t[r]) && "onRefreshInit" !== r ? Cp(0, t[r]) : t[r];
      return (
        Ta(a) &&
          ((a = a()),
          wb(ne, "refresh", function () {
            return (a = t.batchMax());
          })),
        Ve(e).forEach(function (e) {
          var t = {};
          for (r in o) t[r] = o[r];
          (t.trigger = e), n.push(ne.create(t));
        }),
        n
      );
    });
  function tc(e, t, r, n) {
    return n < t ? e(n) : t < 0 && e(0), n < r ? (n - t) / (r - t) : r < 0 ? t / (t - r) : 1;
  }
  function uc(e, t) {
    !0 === t ? e.style.removeProperty("touch-action") : (e.style.touchAction = !0 === t ? "auto" : t ? "pan-" + t + (k.isTouch ? " pinch-zoom" : "") : "none"), e === Je && uc(We, t);
  }
  function wc(e) {
    var t,
      r = e.event,
      n = e.target,
      o = e.axis,
      i = (r.changedTouches ? r.changedTouches[0] : r).target,
      a = i._gsap || He.core.getCache(i),
      s = at();
    if (!a._isScrollT || 2e3 < s - a._isScrollT) {
      for (; i && i !== We && ((i.scrollHeight <= i.clientHeight && i.scrollWidth <= i.clientWidth) || (!ie[(t = mb(i)).overflowY] && !ie[t.overflowX])); ) i = i.parentNode;
      (a._isScroll = i && i !== n && !La(i) && (ie[(t = mb(i)).overflowY] || ie[t.overflowX])), (a._isScrollT = s);
    }
    (!a._isScroll && "x" !== o) || (r.stopPropagation(), (r._gsapAllow = !0));
  }
  function xc(e, t, r, n) {
    return k.create({
      target: e,
      capture: !0,
      debounce: !1,
      lockAxis: !0,
      type: t,
      onWheel: (n = n && wc),
      onPress: n,
      onDrag: n,
      onScroll: n,
      onEnable: function onEnable() {
        return r && wb(Xe, k.eventTypes[0], se, !1, !0);
      },
      onDisable: function onDisable() {
        return xb(Xe, k.eventTypes[0], se, !0);
      },
    });
  }
  function Bc(e) {
    function zq() {
      return (o = !1);
    }
    function Cq() {
      (i = Qa(p, Fe)), (S = Ue(E ? 1 : 0, i)), f && (T = Ue(0, Qa(p, Ye))), (l = kt);
    }
    function Dq() {
      (v._gsap.y = Ia(parseFloat(v._gsap.y) + b.offset) + "px"),
        (v.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(v._gsap.y) + ", 0, 1)"),
        (b.offset = b.cacheID = 0);
    }
    function Jq() {
      Cq(), a.isActive() && a.vars.scrollY > i && (b() > i ? a.progress(1) && b(i) : a.resetTo("scrollY", i));
    }
    Va(e) || (e = {}), (e.preventDefault = e.isNormalizer = e.allowClicks = !0), e.type || (e.type = "wheel,touch"), (e.debounce = !!e.debounce), (e.id = e.id || "normalizer");
    var n,
      i,
      l,
      o,
      a,
      c,
      u,
      s,
      f = e.normalizeScrollX,
      t = e.momentum,
      r = e.allowNestedScroll,
      d = e.onRelease,
      p = J(e.target) || Je,
      g = He.core.globals().ScrollSmoother,
      h = g && g.get(),
      v = E && ((e.content && J(e.content)) || (h && !1 !== e.content && !h.smooth() && h.content())),
      b = K(p, Fe),
      m = K(p, Ye),
      y = 1,
      x = (k.isTouch && Ne.visualViewport ? Ne.visualViewport.scale * Ne.visualViewport.width : Ne.outerWidth) / Ne.innerWidth,
      w = 0,
      _ = Ta(t)
        ? function () {
            return t(n);
          }
        : function () {
            return t || 2.8;
          },
      C = xc(p, e.type, !0, r),
      T = Ha,
      S = Ha;
    return (
      v && He.set(v, { y: "+=0" }),
      (e.ignoreCheck = function (e) {
        return (
          (E &&
            "touchmove" === e.type &&
            (function ignoreDrag() {
              if (o) {
                requestAnimationFrame(zq);
                var e = Ia(n.deltaY / 2),
                  t = S(b.v - e);
                if (v && t !== b.v + b.offset) {
                  b.offset = t - b.v;
                  var r = Ia((parseFloat(v && v._gsap.y) || 0) - b.offset);
                  (v.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + r + ", 0, 1)"), (v._gsap.y = r + "px"), (b.cacheID = Ie.cache), Z();
                }
                return !0;
              }
              b.offset && Dq(), (o = !0);
            })()) ||
          (1.05 < y && "touchstart" !== e.type) ||
          n.isGesturing ||
          (e.touches && 1 < e.touches.length)
        );
      }),
      (e.onPress = function () {
        o = !1;
        var e = y;
        (y = Ia(((Ne.visualViewport && Ne.visualViewport.scale) || 1) / x)), a.pause(), e !== y && uc(p, 1.01 < y || (!f && "x")), (c = m()), (u = b()), Cq(), (l = kt);
      }),
      (e.onRelease = e.onGestureStart =
        function (e, t) {
          if ((b.offset && Dq(), t)) {
            Ie.cache++;
            var r,
              n,
              o = _();
            f && ((n = (r = m()) + (0.05 * o * -e.velocityX) / 0.227), (o *= tc(m, r, n, Qa(p, Ye))), (a.vars.scrollX = T(n))),
              (n = (r = b()) + (0.05 * o * -e.velocityY) / 0.227),
              (o *= tc(b, r, n, Qa(p, Fe))),
              (a.vars.scrollY = S(n)),
              a.invalidate().duration(o).play(0.01),
              ((E && a.vars.scrollY >= i) || i - 1 <= r) && He.to({}, { onUpdate: Jq, duration: o });
          } else s.restart(!0);
          d && d(e);
        }),
      (e.onWheel = function () {
        a._ts && a.pause(), 1e3 < at() - w && ((l = 0), (w = at()));
      }),
      (e.onChange = function (e, t, r, n, o) {
        if ((kt !== l && Cq(), t && f && m(T(n[2] === t ? c + (e.startX - e.x) : m() + t - n[1])), r)) {
          b.offset && Dq();
          var i = o[2] === r,
            a = i ? u + e.startY - e.y : b() + r - o[1],
            s = S(a);
          i && a !== s && (u += s - a), b(s);
        }
        (r || t) && Z();
      }),
      (e.onEnable = function () {
        uc(p, !f && "x"), ne.addEventListener("refresh", Jq), wb(Ne, "resize", Jq), b.smooth && ((b.target.style.scrollBehavior = "auto"), (b.smooth = m.smooth = !1)), C.enable();
      }),
      (e.onDisable = function () {
        uc(p, !0), xb(Ne, "resize", Jq), ne.removeEventListener("refresh", Jq), C.kill();
      }),
      (e.lockAxis = !1 !== e.lockAxis),
      ((n = new k(e)).iOS = E) && !b() && b(1),
      E && He.ticker.add(Ha),
      (s = n._dc),
      (a = He.to(n, {
        ease: "power4",
        paused: !0,
        inherit: !1,
        scrollX: f ? "+=0.1" : "+=0",
        scrollY: "+=0.1",
        modifiers: {
          scrollY: pc(b, b(), function () {
            return a.pause();
          }),
        },
        onUpdate: Z,
        onComplete: s.vars.onComplete,
      })),
      n
    );
  }
  var oe,
    ie = { auto: 1, scroll: 1 },
    ae = /(input|label|select|textarea)/i,
    se = function _captureInputs(e) {
      var t = ae.test(e.target.tagName);
      (t || oe) && ((e._gsapAllow = !0), (oe = t));
    };
  (ne.sort = function (e) {
    return Tt.sort(
      e ||
        function (e, t) {
          return -1e6 * (e.vars.refreshPriority || 0) + e.start - (t.start + -1e6 * (t.vars.refreshPriority || 0));
        }
    );
  }),
    (ne.observe = function (e) {
      return new k(e);
    }),
    (ne.normalizeScroll = function (e) {
      if (void 0 === e) return v;
      if (!0 === e && v) return v.enable();
      if (!1 === e) return v && v.kill(), void (v = e);
      var t = e instanceof k ? e : Bc(e);
      return v && v.target === t.target && v.kill(), La(t.target) && (v = t), t;
    }),
    (ne.core = {
      _getVelocityProp: L,
      _inputObserver: xc,
      _scrollers: Ie,
      _proxies: Le,
      bridge: {
        ss: function ss() {
          st || U("scrollStart"), (st = at());
        },
        ref: function ref() {
          return je;
        },
      },
    }),
    Ka() && He.registerPlugin(ne),
    (e.ScrollTrigger = ne),
    (e.default = ne);
  if (typeof window === "undefined" || window !== e) {
    Object.defineProperty(e, "__esModule", { value: !0 });
  } else {
    delete e.default;
  }
});
/*!
 * ScrollToPlugin 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t(((e = e || self).window = e.window || {}));
})(this, function (e) {
  "use strict";
  function l() {
    return "undefined" != typeof window;
  }
  function m() {
    return f || (l() && (f = window.gsap) && f.registerPlugin && f);
  }
  function n(e) {
    return "string" == typeof e;
  }
  function o(e) {
    return "function" == typeof e;
  }
  function p(e, t) {
    var o = "x" === t ? "Width" : "Height",
      n = "scroll" + o,
      r = "client" + o;
    return e === T || e === i || e === c ? Math.max(i[n], c[n]) - (T["inner" + o] || i[r] || c[r]) : e[n] - e["offset" + o];
  }
  function q(e, t) {
    var o = "scroll" + ("x" === t ? "Left" : "Top");
    return (
      e === T && (null != e.pageXOffset ? (o = "page" + t.toUpperCase() + "Offset") : (e = null != i[o] ? i : c)),
      function () {
        return e[o];
      }
    );
  }
  function s(e, t) {
    if (!(e = y(e)[0]) || !e.getBoundingClientRect) return console.warn("scrollTo target doesn't exist. Using 0") || { x: 0, y: 0 };
    var o = e.getBoundingClientRect(),
      n = !t || t === T || t === c,
      r = n ? { top: i.clientTop - (T.pageYOffset || i.scrollTop || c.scrollTop || 0), left: i.clientLeft - (T.pageXOffset || i.scrollLeft || c.scrollLeft || 0) } : t.getBoundingClientRect(),
      l = { x: o.left - r.left, y: o.top - r.top };
    return !n && t && ((l.x += q(t, "x")()), (l.y += q(t, "y")())), l;
  }
  function t(e, t, o, r, l) {
    return isNaN(e) || "object" == typeof e
      ? n(e) && "=" === e.charAt(1)
        ? parseFloat(e.substr(2)) * ("-" === e.charAt(0) ? -1 : 1) + r - l
        : "max" === e
        ? p(t, o) - l
        : Math.min(p(t, o), s(e, t)[o] - l)
      : parseFloat(e) - l;
  }
  function u() {
    (f = m()),
      l() &&
        f &&
        "undefined" != typeof document &&
        document.body &&
        ((T = window), (c = document.body), (i = document.documentElement), (y = f.utils.toArray), f.config({ autoKillThreshold: 7 }), (h = f.config()), (a = 1));
  }
  var f,
    a,
    T,
    i,
    c,
    y,
    h,
    v,
    r = {
      version: "3.12.5",
      name: "scrollTo",
      rawVars: 1,
      register: function register(e) {
        (f = e), u();
      },
      init: function init(e, r, l, s, i) {
        a || u();
        var p = this,
          c = f.getProperty(e, "scrollSnapType");
        (p.isWin = e === T),
          (p.target = e),
          (p.tween = l),
          (r = (function _clean(e, t, r, l) {
            if ((o(e) && (e = e(t, r, l)), "object" != typeof e)) return n(e) && "max" !== e && "=" !== e.charAt(1) ? { x: e, y: e } : { y: e };
            if (e.nodeType) return { y: e, x: e };
            var s,
              i = {};
            for (s in e) i[s] = "onAutoKill" !== s && o(e[s]) ? e[s](t, r, l) : e[s];
            return i;
          })(r, s, e, i)),
          (p.vars = r),
          (p.autoKill = !!r.autoKill),
          (p.getX = q(e, "x")),
          (p.getY = q(e, "y")),
          (p.x = p.xPrev = p.getX()),
          (p.y = p.yPrev = p.getY()),
          (v = v || f.core.globals().ScrollTrigger),
          "smooth" === f.getProperty(e, "scrollBehavior") && f.set(e, { scrollBehavior: "auto" }),
          c && "none" !== c && ((p.snap = 1), (p.snapInline = e.style.scrollSnapType), (e.style.scrollSnapType = "none")),
          null != r.x ? (p.add(p, "x", p.x, t(r.x, e, "x", p.x, r.offsetX || 0), s, i), p._props.push("scrollTo_x")) : (p.skipX = 1),
          null != r.y ? (p.add(p, "y", p.y, t(r.y, e, "y", p.y, r.offsetY || 0), s, i), p._props.push("scrollTo_y")) : (p.skipY = 1);
      },
      render: function render(e, t) {
        for (var o, n, r, l, s, i = t._pt, c = t.target, u = t.tween, f = t.autoKill, a = t.xPrev, y = t.yPrev, d = t.isWin, g = t.snap, x = t.snapInline; i; ) i.r(e, i.d), (i = i._next);
        (o = d || !t.skipX ? t.getX() : a),
          (r = (n = d || !t.skipY ? t.getY() : y) - y),
          (l = o - a),
          (s = h.autoKillThreshold),
          t.x < 0 && (t.x = 0),
          t.y < 0 && (t.y = 0),
          f &&
            (!t.skipX && (s < l || l < -s) && o < p(c, "x") && (t.skipX = 1),
            !t.skipY && (s < r || r < -s) && n < p(c, "y") && (t.skipY = 1),
            t.skipX && t.skipY && (u.kill(), t.vars.onAutoKill && t.vars.onAutoKill.apply(u, t.vars.onAutoKillParams || []))),
          d ? T.scrollTo(t.skipX ? o : t.x, t.skipY ? n : t.y) : (t.skipY || (c.scrollTop = t.y), t.skipX || (c.scrollLeft = t.x)),
          !g ||
            (1 !== e && 0 !== e) ||
            ((n = c.scrollTop),
            (o = c.scrollLeft),
            x ? (c.style.scrollSnapType = x) : c.style.removeProperty("scroll-snap-type"),
            (c.scrollTop = n + 1),
            (c.scrollLeft = o + 1),
            (c.scrollTop = n),
            (c.scrollLeft = o)),
          (t.xPrev = t.x),
          (t.yPrev = t.y),
          v && v.update();
      },
      kill: function kill(e) {
        var t = "scrollTo" === e,
          o = this._props.indexOf(e);
        return (!t && "scrollTo_x" !== e) || (this.skipX = 1), (!t && "scrollTo_y" !== e) || (this.skipY = 1), -1 < o && this._props.splice(o, 1), !this._props.length;
      },
    };
  (r.max = p), (r.getOffset = s), (r.buildGetter = q), m() && f.registerPlugin(r), (e.ScrollToPlugin = r), (e.default = r);
  if (typeof window === "undefined" || window !== e) {
    Object.defineProperty(e, "__esModule", { value: !0 });
  } else {
    delete e.default;
  }
});
!(function () {
  var s,
    i,
    c,
    a,
    o = {
      frameRate: 150,
      animationTime: 400,
      stepSize: 100,
      pulseAlgorithm: !0,
      pulseScale: 4,
      pulseNormalize: 1,
      accelerationDelta: 50,
      accelerationMax: 3,
      keyboardSupport: !0,
      arrowScroll: 50,
      fixedBackground: !0,
      excluded: "",
    },
    p = o,
    u = !1,
    d = !1,
    n = { x: 0, y: 0 },
    f = !1,
    m = document.documentElement,
    l = [],
    h = /^Mac/.test(navigator.platform),
    w = { left: 37, up: 38, right: 39, down: 40, spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36 },
    v = { 37: 1, 38: 1, 39: 1, 40: 1 };
  function y() {
    if (!f && document.body) {
      f = !0;
      var e = document.body,
        t = document.documentElement,
        o = window.innerHeight,
        n = e.scrollHeight;
      if (((m = 0 <= document.compatMode.indexOf("CSS") ? t : e), (s = e), p.keyboardSupport && Y("keydown", x), top != self)) d = !0;
      else if (Q && o < n && (e.offsetHeight <= o || t.offsetHeight <= o)) {
        var r,
          a = document.createElement("div");
        (a.style.cssText = "position:absolute; z-index:-10000; top:0; left:0; right:0; height:" + m.scrollHeight + "px"),
          document.body.appendChild(a),
          (c = function () {
            r =
              r ||
              setTimeout(function () {
                u || ((a.style.height = "0"), (a.style.height = m.scrollHeight + "px"), (r = null));
              }, 500);
          }),
          setTimeout(c, 10),
          Y("resize", c);
        if (((i = new R(c)).observe(e, { attributes: !0, childList: !0, characterData: !1 }), m.offsetHeight <= o)) {
          var l = document.createElement("div");
          (l.style.clear = "both"), e.appendChild(l);
        }
      }
      p.fixedBackground || u || ((e.style.backgroundAttachment = "scroll"), (t.style.backgroundAttachment = "scroll"));
    }
  }
  var b = [],
    g = !1,
    r = Date.now();
  function S(d, f, m) {
    if (
      ((function (e, t) {
        (e = 0 < e ? 1 : -1), (t = 0 < t ? 1 : -1), (n.x === e && n.y === t) || ((n.x = e), (n.y = t), (b = []), (r = 0));
      })(f, m),
      1 != p.accelerationMax)
    ) {
      var e = Date.now() - r;
      if (e < p.accelerationDelta) {
        var t = (1 + 50 / e) / 2;
        1 < t && ((t = Math.min(t, p.accelerationMax)), (f *= t), (m *= t));
      }
      r = Date.now();
    }
    if ((b.push({ x: f, y: m, lastX: f < 0 ? 0.99 : -0.99, lastY: m < 0 ? 0.99 : -0.99, start: Date.now() }), !g)) {
      var o = q(),
        h = d === o || d === document.body;
      null == d.$scrollBehavior &&
        (function (e) {
          var t = M(e);
          if (null == B[t]) {
            var o = getComputedStyle(e, "")["scroll-behavior"];
            B[t] = "smooth" == o;
          }
          return B[t];
        })(d) &&
        ((d.$scrollBehavior = d.style.scrollBehavior), (d.style.scrollBehavior = "auto"));
      var w = function (e) {
        for (var t = Date.now(), o = 0, n = 0, r = 0; r < b.length; r++) {
          var a = b[r],
            l = t - a.start,
            i = l >= p.animationTime,
            c = i ? 1 : l / p.animationTime;
          p.pulseAlgorithm && (c = F(c));
          var s = (a.x * c - a.lastX) >> 0,
            u = (a.y * c - a.lastY) >> 0;
          (o += s), (n += u), (a.lastX += s), (a.lastY += u), i && (b.splice(r, 1), r--);
        }
        h ? window.scrollBy(o, n) : (o && (d.scrollLeft += o), n && (d.scrollTop += n)),
          f || m || (b = []),
          b.length ? j(w, d, 1e3 / p.frameRate + 1) : ((g = !1), null != d.$scrollBehavior && ((d.style.scrollBehavior = d.$scrollBehavior), (d.$scrollBehavior = null)));
      };
      j(w, d, 0), (g = !0);
    }
  }
  function e(e) {
    f || y();
    var t = e.target;
    if (e.defaultPrevented || e.ctrlKey) return !0;
    if (N(s, "embed") || (N(t, "embed") && /\.pdf/i.test(t.src)) || N(s, "object") || t.shadowRoot) return !0;
    var o = -e.wheelDeltaX || e.deltaX || 0,
      n = -e.wheelDeltaY || e.deltaY || 0;
    h &&
      (e.wheelDeltaX && K(e.wheelDeltaX, 120) && (o = (e.wheelDeltaX / Math.abs(e.wheelDeltaX)) * -120),
      e.wheelDeltaY && K(e.wheelDeltaY, 120) && (n = (e.wheelDeltaY / Math.abs(e.wheelDeltaY)) * -120)),
      o || n || (n = -e.wheelDelta || 0),
      1 === e.deltaMode && ((o *= 40), (n *= 40));
    var r = z(t);
    return r
      ? !!(function (e) {
          if (!e) return;
          l.length || (l = [e, e, e]);
          (e = Math.abs(e)),
            l.push(e),
            l.shift(),
            clearTimeout(a),
            (a = setTimeout(function () {
              try {
                localStorage.SS_deltaBuffer = l.join(",");
              } catch (e) {}
            }, 1e3));
          var t = 120 < e && P(e),
            o = !P(120) && !P(100) && !t;
          return e < 50 || o;
        })(n) || (1.2 < Math.abs(o) && (o *= p.stepSize / 120), 1.2 < Math.abs(n) && (n *= p.stepSize / 120), S(r, o, n), e.preventDefault(), void C())
      : !d || !W || (Object.defineProperty(e, "target", { value: window.frameElement }), parent.wheel(e));
  }
  function x(e) {
    var t = e.target,
      o = e.ctrlKey || e.altKey || e.metaKey || (e.shiftKey && e.keyCode !== w.spacebar);
    document.body.contains(s) || (s = document.activeElement);
    var n = /^(button|submit|radio|checkbox|file|color|image)$/i;
    if (
      e.defaultPrevented ||
      /^(textarea|select|embed|object)$/i.test(t.nodeName) ||
      (N(t, "input") && !n.test(t.type)) ||
      N(s, "video") ||
      (function (e) {
        var t = e.target,
          o = !1;
        if (-1 != document.URL.indexOf("www.youtube.com/watch"))
          do {
            if ((o = t.classList && t.classList.contains("html5-video-controls"))) break;
          } while ((t = t.parentNode));
        return o;
      })(e) ||
      t.isContentEditable ||
      o
    )
      return !0;
    if ((N(t, "button") || (N(t, "input") && n.test(t.type))) && e.keyCode === w.spacebar) return !0;
    if (N(t, "input") && "radio" == t.type && v[e.keyCode]) return !0;
    var r = 0,
      a = 0,
      l = z(s);
    if (!l) return !d || !W || parent.keydown(e);
    var i = l.clientHeight;
    switch ((l == document.body && (i = window.innerHeight), e.keyCode)) {
      case w.up:
        a = -p.arrowScroll;
        break;
      case w.down:
        a = p.arrowScroll;
        break;
      case w.spacebar:
        a = -(e.shiftKey ? 1 : -1) * i * 0.9;
        break;
      case w.pageup:
        a = 0.9 * -i;
        break;
      case w.pagedown:
        a = 0.9 * i;
        break;
      case w.home:
        l == document.body && document.scrollingElement && (l = document.scrollingElement), (a = -l.scrollTop);
        break;
      case w.end:
        var c = l.scrollHeight - l.scrollTop - i;
        a = 0 < c ? 10 + c : 0;
        break;
      case w.left:
        r = -p.arrowScroll;
        break;
      case w.right:
        r = p.arrowScroll;
        break;
      default:
        return !0;
    }
    S(l, r, a), e.preventDefault(), C();
  }
  function t(e) {
    s = e.target;
  }
  var k,
    D,
    M =
      ((k = 0),
      function (e) {
        return e.uniqueID || (e.uniqueID = k++);
      }),
    E = {},
    T = {},
    B = {};
  function C() {
    clearTimeout(D),
      (D = setInterval(function () {
        E = T = B = {};
      }, 1e3));
  }
  function H(e, t, o) {
    for (var n = o ? E : T, r = e.length; r--; ) n[M(e[r])] = t;
    return t;
  }
  function z(e) {
    var t = [],
      o = document.body,
      n = m.scrollHeight;
    do {
      var r = (!1 ? E : T)[M(e)];
      if (r) return H(t, r);
      if ((t.push(e), n === e.scrollHeight)) {
        var a = (O(m) && O(o)) || X(m);
        if ((d && L(m)) || (!d && a)) return H(t, q());
      } else if (L(e) && X(e)) return H(t, e);
    } while ((e = e.parentElement));
  }
  function L(e) {
    return e.clientHeight + 10 < e.scrollHeight;
  }
  function O(e) {
    return "hidden" !== getComputedStyle(e, "").getPropertyValue("overflow-y");
  }
  function X(e) {
    var t = getComputedStyle(e, "").getPropertyValue("overflow-y");
    return "scroll" === t || "auto" === t;
  }
  function Y(e, t, o) {
    window.addEventListener(e, t, o || !1);
  }
  function A(e, t, o) {
    window.removeEventListener(e, t, o || !1);
  }
  function N(e, t) {
    return e && (e.nodeName || "").toLowerCase() === t.toLowerCase();
  }
  if (window.localStorage && localStorage.SS_deltaBuffer)
    try {
      l = localStorage.SS_deltaBuffer.split(",");
    } catch (e) {}
  function K(e, t) {
    return Math.floor(e / t) == e / t;
  }
  function P(e) {
    return K(l[0], e) && K(l[1], e) && K(l[2], e);
  }
  var $,
    j =
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      function (e, t, o) {
        window.setTimeout(e, o || 1e3 / 60);
      },
    R = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver,
    q =
      (($ = document.scrollingElement),
      function () {
        if (!$) {
          var e = document.createElement("div");
          (e.style.cssText = "height:10000px;width:1px;"), document.body.appendChild(e);
          var t = document.body.scrollTop;
          document.documentElement.scrollTop,
            window.scrollBy(0, 3),
            ($ = document.body.scrollTop != t ? document.body : document.documentElement),
            window.scrollBy(0, -3),
            document.body.removeChild(e);
        }
        return $;
      });
  function V(e) {
    var t;
    return ((e *= p.pulseScale) < 1 ? e - (1 - Math.exp(-e)) : ((e -= 1), (t = Math.exp(-1)) + (1 - Math.exp(-e)) * (1 - t))) * p.pulseNormalize;
  }
  function F(e) {
    return 1 <= e ? 1 : e <= 0 ? 0 : (1 == p.pulseNormalize && (p.pulseNormalize /= V(1)), V(e));
  }
  var I = window.navigator.userAgent,
    _ = /Edge/.test(I),
    W = /chrome/i.test(I) && !_,
    U = /safari/i.test(I) && !_,
    G = /mobile/i.test(I),
    J = /Windows NT 6.1/i.test(I) && /rv:11/i.test(I),
    Q = U && (/Version\/8/i.test(I) || /Version\/9/i.test(I)),
    Z = (W || U || J) && !G,
    ee = !1;
  try {
    window.addEventListener(
      "test",
      null,
      Object.defineProperty({}, "passive", {
        get: function () {
          ee = !0;
        },
      })
    );
  } catch (e) {}
  var te = !!ee && { passive: !1 },
    oe = "onwheel" in document.createElement("div") ? "wheel" : "mousewheel";
  function ne(e) {
    for (var t in e) o.hasOwnProperty(t) && (p[t] = e[t]);
  }
  oe && Z && (Y(oe, e, te), Y("mousedown", t), Y("load", y)),
    (ne.destroy = function () {
      i && i.disconnect(), A(oe, e), A("mousedown", t), A("keydown", x), A("resize", c), A("load", y);
    }),
    window.SmoothScrollOptions && ne(window.SmoothScrollOptions),
    "function" == typeof define && define.amd
      ? define(function () {
          return ne;
        })
      : "object" == typeof exports
      ? (module.exports = ne)
      : (window.SmoothScroll = ne);
})();
!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t(((e = e || self).window = e.window || {}));
})(this, function (e) {
  "use strict";
  function _defineProperties(e, t) {
    for (var r = 0; r < t.length; r++) {
      var n = t[r];
      (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
    }
  }
  function p() {
    return "undefined" != typeof window;
  }
  function q() {
    return P || (p() && (P = window.gsap) && P.registerPlugin && P);
  }
  var P,
    k,
    R,
    _,
    C,
    H,
    M,
    A,
    F,
    B,
    I,
    U,
    t =
      ((ScrollSmoother.register = function register(e) {
        return (
          k ||
            ((P = e || q()),
            p() && window.document && ((R = window), (_ = document), (C = _.documentElement), (H = _.body)),
            P &&
              ((M = P.utils.toArray),
              (A = P.utils.clamp),
              (I = P.parseEase("expo")),
              (F = P.core.globals().ScrollTrigger),
              P.core.globals("ScrollSmoother", ScrollSmoother),
              H && F && ((U = F.core._getVelocityProp), (k = 1)))),
          k
        );
      }),
      (function _createClass(e, t, r) {
        return t && _defineProperties(e.prototype, t), r && _defineProperties(e, r), e;
      })(ScrollSmoother, [
        {
          key: "progress",
          get: function get() {
            return this.scrollTrigger.animation._time / 100;
          },
        },
      ]),
      ScrollSmoother);
  function ScrollSmoother(e) {
    var o = this;
    k || ScrollSmoother.register(P) || console.warn("Please gsap.registerPlugin(ScrollSmoother)"), (e = this.vars = e || {}), B && B.kill(), (B = this);
    function ja() {
      return T.update(-g);
    }
    function la() {
      return (r.style.overflow = "visible");
    }
    function na(e) {
      var t = e.getTween();
      t && (t.pause(), (t._time = t._dur), (t._tTime = t._tDur)), (u = !1), e.animation.progress(e.progress, !0);
    }
    function oa(e, t) {
      ((e !== g && !l) || t) && (d && (r.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + e + ", 0, 1)"), (w = e - g), (g = e), F.isUpdating || F.update());
    }
    function pa(e) {
      return arguments.length ? (l && (g = -e), (x.y = -e), (u = !0), h(e), this) : -g;
    }
    function ra(e) {
      (v.scrollTop = 0), F.isInViewport(e.target) || e.target === f || o.scrollTo(e.target, !1, "center center"), (f = e.target);
    }
    function sa(e) {
      var r, n, o, i;
      b.forEach(function (t) {
        (r = t.pins),
          (i = t.markers),
          e.forEach(function (e) {
            (e.trigger !== t.trigger && e.pinnedContainer !== t.trigger) ||
              t === e ||
              ((n = e.start),
              (o = (n - t.start - t.offset) / t.ratio - (n - t.start)),
              r.forEach(function (e) {
                return (o -= e.distance / t.ratio - e.distance);
              }),
              e.setPositions(n + o, e.end + o),
              e.markerStart && i.push(P.quickSetter([e.markerStart, e.markerEnd], "y", "px")),
              e.pin && 0 < e.end && ((o = e.end - e.start), r.push({ start: e.start, end: e.end, distance: o, trig: e }), t.setPositions(t.start, t.end + o), t.vars.onRefresh(t)));
          });
      });
    }
    function ta() {
      la(),
        requestAnimationFrame(la),
        b &&
          (b.forEach(function (e) {
            var t = e.start,
              r = e.auto ? Math.min(F.maxScroll(e.scroller), e.end) : t + (e.end - t) / e.ratio,
              n = (r - e.end) / 2;
            (t -= n), (r -= n), (e.offset = n || 1e-4), (e.pins.length = 0), e.setPositions(Math.min(t, r), Math.max(t, r)), e.vars.onRefresh(e);
          }),
          sa(F.sort())),
        T.reset();
    }
    function ua() {
      return (
        b &&
        b.forEach(function (e) {
          return e.vars.onRefresh(e);
        })
      );
    }
    function va() {
      return (
        b &&
          b.forEach(function (e) {
            return e.vars.onRefreshInit(e);
          }),
        ua
      );
    }
    function wa(t, r, n, o) {
      return function () {
        var e = "function" == typeof r ? r(n, o) : r;
        return e || 0 === e || (e = o.getAttribute("data-" + t) || ("speed" === t ? 1 : 0)), o.setAttribute("data-" + t, e), "auto" === e ? e : parseFloat(e);
      };
    }
    function xa(r, e, t, n) {
      function lb() {
        (e = a()),
          (t = f()),
          (o = parseFloat(e) || 1),
          (c = (s = "auto" === e) ? 0 : 0.5),
          l && l.kill(),
          (l = t && P.to(r, { ease: I, overwrite: !1, y: "+=0", duration: t })),
          i && ((i.ratio = o), (i.autoSpeed = s));
      }
      function mb() {
        (d.y = h + "px"), d.renderTransform(1), lb();
      }
      function qb(e) {
        if (s) {
          mb();
          var t = (function _autoDistance(e, t) {
            var r,
              n,
              o = e.parentNode || C,
              i = e.getBoundingClientRect(),
              a = o.getBoundingClientRect(),
              s = a.top - i.top,
              l = a.bottom - i.bottom,
              c = (Math.abs(s) > Math.abs(l) ? s : l) / (1 - t),
              u = -c * t;
            return 0 < c && ((u += -(n = 0.5 == (r = a.height / (R.innerHeight + a.height)) ? 2 * a.height : 2 * Math.min(a.height, (-c * r) / (2 * r - 1))) / 2), (c += n)), { change: c, offset: u };
          })(r, A(0, 1, -e.start / (e.end - e.start)));
          (m = t.change), (u = t.offset);
        } else (m = (e.end - e.start) * (1 - o)), (u = 0);
        g.forEach(function (e) {
          return (m -= e.distance * (1 - o));
        }),
          e.vars.onUpdate(e),
          l && l.progress(1);
      }
      var o,
        i,
        s,
        l,
        c,
        u,
        a = wa("speed", e, n, r),
        f = wa("lag", t, n, r),
        h = P.getProperty(r, "y"),
        d = r._gsap,
        g = [],
        p = [],
        m = 0;
      return (
        lb(),
        (1 !== o || s || l) &&
          (qb(
            (i = F.create({
              trigger: s ? r.parentNode : r,
              scroller: v,
              scrub: !0,
              refreshPriority: -999,
              onRefreshInit: mb,
              onRefresh: qb,
              onKill: function onKill(e) {
                var t = b.indexOf(e);
                0 <= t && b.splice(t, 1);
              },
              onUpdate: function onUpdate(e) {
                var t,
                  r,
                  n,
                  o = h + m * (e.progress - c),
                  i = g.length,
                  a = 0;
                if (e.offset) {
                  if (i) {
                    for (r = -x.y, n = e.end; i--; ) {
                      if ((t = g[i]).trig.isActive || (r >= t.start && r <= t.end))
                        return void (l && ((t.trig.progress += t.trig.direction < 0 ? 0.001 : -0.001), t.trig.update(0, 0, 1), l.resetTo("y", parseFloat(d.y), -w, !0), S && l.progress(1)));
                      r > t.end && (a += t.distance), (n -= t.distance);
                    }
                    o = h + a + m * ((P.utils.clamp(e.start, e.end, r) - e.start - a) / (n - e.start) - c);
                  }
                  (o = (function _round(e) {
                    return Math.round(1e5 * e) / 1e5 || 0;
                  })(o + u)),
                    p.length &&
                      !s &&
                      p.forEach(function (e) {
                        return e(o - a);
                      }),
                    l ? (l.resetTo("y", o, -w, !0), S && l.progress(1)) : ((d.y = o + "px"), d.renderTransform(1));
                }
              },
            }))
          ),
          (P.core.getCache(i.trigger).stRevert = va),
          (i.startY = h),
          (i.pins = g),
          (i.markers = p),
          (i.ratio = o),
          (i.autoSpeed = s),
          (r.style.willChange = "transform")),
        i
      );
    }
    var r,
      v,
      t,
      n,
      b,
      i,
      a,
      s,
      l,
      c,
      u,
      f,
      h = F.getScrollFunc(R),
      d = 1 === F.isTouch ? (!0 === e.smoothTouch ? 0.8 : parseFloat(e.smoothTouch) || 0) : 0 === e.smooth || !1 === e.smooth ? 0 : parseFloat(e.smooth) || 0.8,
      g = 0,
      w = 0,
      S = 1,
      p = e.onUpdate,
      m = e.onStop,
      T = U(0),
      x = { y: 0 };
    function refreshHeight() {
      return (t = r.clientHeight), (r.style.overflow = "visible"), (H.style.height = t + "px"), t - R.innerHeight;
    }
    F.addEventListener("refresh", ta),
      P.delayedCall(0.5, function () {
        return (S = 0);
      }),
      (this.scrollTop = pa),
      (this.scrollTo = function (e, t, r) {
        var n = P.utils.clamp(0, F.maxScroll(R), isNaN(e) ? o.offset(e, r) : +e);
        t ? (l ? P.to(o, { duration: d, scrollTop: n, overwrite: "auto", ease: I }) : h(n)) : pa(n);
      }),
      (this.offset = function (e, t) {
        e = M(e)[0];
        var r,
          n = P.getProperty(e, "y"),
          o = F.create({ trigger: e, start: t || "top top" });
        return b && sa([o]), (r = o.start), o.kill(!1), P.set(e, { y: n }), r;
      }),
      (this.content = function (e) {
        return arguments.length ? ((r = M(e || "#smooth-content")[0] || H.children[0]), (s = r.getAttribute("style") || ""), P.set(r, { overflow: "visible", width: "100%" }), this) : r;
      }),
      (this.wrapper = function (e) {
        return arguments.length
          ? ((v =
              M(e || "#smooth-wrapper")[0] ||
              (function _wrap(e) {
                var t = _.createElement("div");
                return t.classList.add("ScrollSmoother-wrapper"), e.parentNode.insertBefore(t, e), t.appendChild(e), t;
              })(r)),
            (a = v.getAttribute("style") || ""),
            refreshHeight(),
            P.set(
              v,
              d
                ? { overflow: "hidden", position: "fixed", height: "100%", width: "100%", top: 0, left: 0, right: 0, bottom: 0 }
                : { overflow: "visible", position: "relative", width: "100%", height: "auto", top: "auto", bottom: "auto", left: "auto", right: "auto" }
            ),
            this)
          : v;
      }),
      (this.effects = function (e, t) {
        if (((b = b || []), !e)) return b.slice(0);
        (e = M(e)).forEach(function (e) {
          for (var t = b.length; t--; ) b[t].trigger === e && (b[t].kill(), b.splice(t, 1));
        });
        t = t || {};
        var r,
          n,
          o = t.speed,
          i = t.lag,
          a = [];
        for (r = 0; r < e.length; r++) (n = xa(e[r], o, i, r)) && a.push(n);
        return b.push.apply(b, a), a;
      }),
      this.content(e.content),
      this.wrapper(e.wrapper),
      (this.render = function (e) {
        return oa(e || 0 === e ? e : g);
      }),
      (this.getVelocity = function () {
        return T.getVelocity(-g);
      }),
      F.scrollerProxy(v, {
        scrollTop: pa,
        scrollHeight: function scrollHeight() {
          return H.scrollHeight;
        },
        fixedMarkers: !1 !== e.fixedMarkers && !!d,
        content: r,
        getBoundingClientRect: function getBoundingClientRect() {
          return { top: 0, left: 0, width: R.innerWidth, height: R.innerHeight };
        },
      }),
      F.defaults({ scroller: v });
    var E = F.getAll().filter(function (e) {
      return e.scroller === R || e.scroller === v;
    });
    E.forEach(function (e) {
      return e.revert(!0);
    }),
      (n = F.create({
        animation: P.to(x, {
          y: function y() {
            return R.innerHeight - t;
          },
          ease: "none",
          data: "ScrollSmoother",
          duration: 100,
          onUpdate: function onUpdate() {
            var e = u;
            e && ((x.y = g), na(n)), oa(x.y, e), ja(), p && !l && p(o);
          },
        }),
        onRefreshInit: function onRefreshInit() {
          return (x.y = 0);
        },
        id: "ScrollSmoother",
        scroller: R,
        invalidateOnRefresh: !0,
        start: 0,
        refreshPriority: -9999,
        end: refreshHeight,
        onScrubComplete: function onScrubComplete() {
          T.reset(), m && m(o);
        },
        scrub: d || !0,
        onRefresh: function onRefresh(e) {
          na(e), oa(x.y);
        },
      })),
      (this.smooth = function (e) {
        return (d = e), arguments.length ? n.scrubDuration(e) : n.getTween() ? n.getTween().duration() : 0;
      }),
      n.getTween() && (n.getTween().vars.ease = e.ease || I),
      (this.scrollTrigger = n),
      e.effects && this.effects(!0 === e.effects ? "[data-speed], [data-lag]" : e.effects, {}),
      E.forEach(function (e) {
        (e.vars.scroller = v), e.init(e.vars, e.animation);
      }),
      (this.paused = function (e) {
        return arguments.length
          ? (!!l !== e &&
              (e
                ? (n.getTween() && n.getTween().pause(),
                  h(-g),
                  T.reset(),
                  (c = F.normalizeScroll()) && c.disable(),
                  (l = F.observe({
                    preventDefault: !0,
                    type: "wheel,touch,scroll",
                    debounce: !1,
                    onChangeY: function onChangeY() {
                      return pa(-g);
                    },
                  })))
                : (l.kill(), (l = 0), c && c.enable(), (n.progress = (-g - n.start) / (n.end - n.start)), na(n))),
            this)
          : !!l;
      }),
      (this.kill = function () {
        o.paused(!1), na(n), n.kill();
        for (var e = b ? b.length : 0; e--; ) b[e].kill();
        F.scrollerProxy(v), F.removeEventListener("refresh", ta), (v.style.cssText = a), (r.style.cssText = s);
        var t = F.defaults({});
        t && t.scroller === v && F.defaults({ scroller: R }), o.observer && F.normalizeScroll(!1), clearInterval(i), (B = null), R.removeEventListener("focusin", ra);
      }),
      e.normalizeScroll && (this.observer = F.normalizeScroll({ debounce: !0 })),
      F.config(e),
      "overscrollBehavior" in R.getComputedStyle(H) && P.set(H, { overscrollBehavior: "none" }),
      R.addEventListener("focusin", ra),
      (i = setInterval(ja, 250)),
      "loading" === _.readyState ||
        requestAnimationFrame(function () {
          return F.refresh();
        });
  }
  (t.version = "3.10.2"),
    (t.create = function (e) {
      return B && e && B.content() === M(e.content)[0] ? B : new t(e);
    }),
    (t.get = function () {
      return B;
    }),
    q() && P.registerPlugin(t),
    (e.ScrollSmoother = t),
    (e.default = t);
  if (typeof window === "undefined" || window !== e) {
    Object.defineProperty(e, "__esModule", { value: !0 });
  } else {
    delete e.default;
  }
});

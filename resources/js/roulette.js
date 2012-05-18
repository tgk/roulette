function b(a) {
  throw a;
}
var f = !0, h = null, k = !1;
function aa() {
  return function(a) {
    return a
  }
}
function l(a) {
  return function() {
    return this[a]
  }
}
function m(a) {
  return function() {
    return a
  }
}
var o, ba = this;
function ca(a, c) {
  var d = a.split("."), e = ba;
  !(d[0] in e) && e.execScript && e.execScript("var " + d[0]);
  for(var g;d.length && (g = d.shift());) {
    !d.length && q(c) ? e[g] = c : e = e[g] ? e[g] : e[g] = {}
  }
}
function s(a) {
  var c = typeof a;
  if("object" == c) {
    if(a) {
      if(a instanceof Array) {
        return"array"
      }
      if(a instanceof Object) {
        return c
      }
      var d = Object.prototype.toString.call(a);
      if("[object Window]" == d) {
        return"object"
      }
      if("[object Array]" == d || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) {
        return"array"
      }
      if("[object Function]" == d || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) {
        return"function"
      }
    }else {
      return"null"
    }
  }else {
    if("function" == c && "undefined" == typeof a.call) {
      return"object"
    }
  }
  return c
}
function q(a) {
  return void 0 !== a
}
function da(a) {
  return"string" == typeof a
}
function ea(a) {
  return"number" == typeof a
}
function ga(a) {
  return"function" == s(a)
}
function ha(a) {
  return a[ia] || (a[ia] = ++ja)
}
var ia = "closure_uid_" + Math.floor(2147483648 * Math.random()).toString(36), ja = 0;
var ka = {"\x00":"\\0", "\u0008":"\\b", "\u000c":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\u000b":"\\x0B", '"':'\\"', "\\":"\\\\"}, la = {"'":"\\'"};
function ma(a) {
  var p;
  a = "" + a;
  if(a.quote) {
    return a.quote()
  }
  for(var c = ['"'], d = 0;d < a.length;d++) {
    var e = a.charAt(d), g = e.charCodeAt(0), i = c, j = d + 1, n;
    if(!(n = ka[e])) {
      if(!(31 < g && 127 > g)) {
        if(e in la) {
          e = la[e]
        }else {
          if(e in ka) {
            p = la[e] = ka[e], e = p
          }else {
            g = e;
            n = e.charCodeAt(0);
            if(31 < n && 127 > n) {
              g = e
            }else {
              if(256 > n) {
                if(g = "\\x", 16 > n || 256 < n) {
                  g += "0"
                }
              }else {
                g = "\\u", 4096 > n && (g += "0")
              }
              g += n.toString(16).toUpperCase()
            }
            e = la[e] = g
          }
        }
      }
      n = e
    }
    i[j] = n
  }
  c.push('"');
  return c.join("")
}
function na(a) {
  for(var c = 0, d = 0;d < a.length;++d) {
    c = 31 * c + a.charCodeAt(d), c %= 4294967296
  }
  return c
}
;var oa = Array.prototype;
function pa(a, c) {
  oa.sort.call(a, c || qa)
}
function ra(a, c) {
  for(var d = 0;d < a.length;d++) {
    a[d] = {index:d, value:a[d]}
  }
  var e = c || qa;
  pa(a, function(a, c) {
    return e(a.value, c.value) || a.index - c.index
  });
  for(d = 0;d < a.length;d++) {
    a[d] = a[d].value
  }
}
function qa(a, c) {
  return a > c ? 1 : a < c ? -1 : 0
}
;function sa(a, c, d) {
  for(var e in a) {
    c.call(d, a[e], e, a)
  }
}
function ta(a) {
  var c = {}, d;
  for(d in a) {
    c[d] = a[d]
  }
  return c
}
;var ua;
(ua = "ScriptEngine" in ba && "JScript" == ba.ScriptEngine()) && (ba.ScriptEngineMajorVersion(), ba.ScriptEngineMinorVersion(), ba.ScriptEngineBuildVersion());
function t(a, c) {
  this.f = ua ? [] : "";
  a != h && this.append.apply(this, arguments)
}
ua ? (t.prototype.I = 0, t.prototype.append = function(a, c, d) {
  c == h ? this.f[this.I++] = a : (this.f.push.apply(this.f, arguments), this.I = this.f.length);
  return this
}) : t.prototype.append = function(a, c, d) {
  this.f += a;
  if(c != h) {
    for(var e = 1;e < arguments.length;e++) {
      this.f += arguments[e]
    }
  }
  return this
};
t.prototype.clear = function() {
  ua ? this.I = this.f.length = 0 : this.f = ""
};
t.prototype.toString = function() {
  if(ua) {
    var a = this.f.join("");
    this.clear();
    a && this.append(a);
    return a
  }
  return this.f
};
function u(a) {
  return a != h && a !== k
}
function va(a, c) {
  var d = a[s.call(h, c)];
  if(u(d)) {
    return d
  }
  d = a._;
  return u(d) ? d : k
}
function v(a, c) {
  return Error.call(h, "No protocol method " + a + " defined for type " + s.call(h, c) + ": " + c)
}
function wa(a) {
  return Array.prototype.slice.call(a)
}
function w(a) {
  if(u(u(a) ? a.p : a)) {
    a = a.p(a)
  }else {
    var c;
    var d = w[s.call(h, a)];
    u(d) ? c = d : (d = w._, u(d) ? c = d : b(v.call(h, "ICounted.-count", a)));
    a = c.call(h, a)
  }
  return a
}
function xa(a, c) {
  var d;
  if(u(u(a) ? a.k : a)) {
    d = a.k(a, c)
  }else {
    var e = xa[s.call(h, a)];
    u(e) ? d = e : (e = xa._, u(e) ? d = e : b(v.call(h, "ICollection.-conj", a)));
    d = d.call(h, a, c)
  }
  return d
}
var x = function() {
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        var e;
        if(u(u(a) ? a.u : a)) {
          e = a.u(a, c)
        }else {
          var g = x[s.call(h, a)];
          u(g) ? e = g : (g = x._, u(g) ? e = g : b(v.call(h, "IIndexed.-nth", a)));
          e = e.call(h, a, c)
        }
        return e;
      case 3:
        return u(u(a) ? a.u : a) ? e = a.u(a, c, d) : (e = x[s.call(h, a)], u(e) ? g = e : (e = x._, u(e) ? g = e : b(v.call(h, "IIndexed.-nth", a))), e = g.call(h, a, c, d)), e
    }
    b("Invalid arity: " + arguments.length)
  }
}(), ya = {};
function za(a) {
  if(u(u(a) ? a.w : a)) {
    a = a.w(a)
  }else {
    var c;
    var d = za[s.call(h, a)];
    u(d) ? c = d : (d = za._, u(d) ? c = d : b(v.call(h, "ISeq.-first", a)));
    a = c.call(h, a)
  }
  return a
}
function Aa(a) {
  if(u(u(a) ? a.z : a)) {
    a = a.z(a)
  }else {
    var c;
    var d = Aa[s.call(h, a)];
    u(d) ? c = d : (d = Aa._, u(d) ? c = d : b(v.call(h, "ISeq.-rest", a)));
    a = c.call(h, a)
  }
  return a
}
var y = function() {
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        var e;
        if(u(u(a) ? a.s : a)) {
          e = a.s(a, c)
        }else {
          var g = y[s.call(h, a)];
          u(g) ? e = g : (g = y._, u(g) ? e = g : b(v.call(h, "ILookup.-lookup", a)));
          e = e.call(h, a, c)
        }
        return e;
      case 3:
        return u(u(a) ? a.s : a) ? e = a.s(a, c, d) : (e = y[s.call(h, a)], u(e) ? g = e : (e = y._, u(e) ? g = e : b(v.call(h, "ILookup.-lookup", a))), e = g.call(h, a, c, d)), e
    }
    b("Invalid arity: " + arguments.length)
  }
}();
function Ba(a, c) {
  var d;
  if(u(u(a) ? a.J : a)) {
    d = a.J(a, c)
  }else {
    var e = Ba[s.call(h, a)];
    u(e) ? d = e : (e = Ba._, u(e) ? d = e : b(v.call(h, "IAssociative.-contains-key?", a)));
    d = d.call(h, a, c)
  }
  return d
}
function Ca(a, c, d) {
  if(u(u(a) ? a.G : a)) {
    a = a.G(a, c, d)
  }else {
    var e;
    var g = Ca[s.call(h, a)];
    u(g) ? e = g : (g = Ca._, u(g) ? e = g : b(v.call(h, "IAssociative.-assoc", a)));
    a = e.call(h, a, c, d)
  }
  return a
}
var Da = {}, Ea = {}, Fa = {}, Ga = {};
function Ha(a) {
  if(u(u(a) ? a.q : a)) {
    a = a.c
  }else {
    var c;
    var d = Ha[s.call(h, a)];
    u(d) ? c = d : (d = Ha._, u(d) ? c = d : b(v.call(h, "IMeta.-meta", a)));
    a = c.call(h, a)
  }
  return a
}
function Ia(a, c) {
  var d;
  if(u(u(a) ? a.r : a)) {
    d = a.r(a, c)
  }else {
    var e = Ia[s.call(h, a)];
    u(e) ? d = e : (e = Ia._, u(e) ? d = e : b(v.call(h, "IWithMeta.-with-meta", a)));
    d = d.call(h, a, c)
  }
  return d
}
var z = function() {
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        var e;
        if(u(u(a) ? a.v : a)) {
          e = a.v(a, c)
        }else {
          var g = z[s.call(h, a)];
          u(g) ? e = g : (g = z._, u(g) ? e = g : b(v.call(h, "IReduce.-reduce", a)));
          e = e.call(h, a, c)
        }
        return e;
      case 3:
        return u(u(a) ? a.v : a) ? e = a.v(a, c, d) : (e = z[s.call(h, a)], u(e) ? g = e : (e = z._, u(e) ? g = e : b(v.call(h, "IReduce.-reduce", a))), e = g.call(h, a, c, d)), e
    }
    b("Invalid arity: " + arguments.length)
  }
}();
function Ja(a, c) {
  var d;
  if(u(u(a) ? a.e : a)) {
    d = a.e(a, c)
  }else {
    var e = Ja[s.call(h, a)];
    u(e) ? d = e : (e = Ja._, u(e) ? d = e : b(v.call(h, "IEquiv.-equiv", a)));
    d = d.call(h, a, c)
  }
  return d
}
function Ka(a) {
  if(u(u(a) ? a.h : a)) {
    a = a.h(a)
  }else {
    var c;
    var d = Ka[s.call(h, a)];
    u(d) ? c = d : (d = Ka._, u(d) ? c = d : b(v.call(h, "IHash.-hash", a)));
    a = c.call(h, a)
  }
  return a
}
function La(a) {
  if(u(u(a) ? a.j : a)) {
    a = a.j(a)
  }else {
    var c;
    var d = La[s.call(h, a)];
    u(d) ? c = d : (d = La._, u(d) ? c = d : b(v.call(h, "ISeqable.-seq", a)));
    a = c.call(h, a)
  }
  return a
}
var Ma = {}, Na = {};
function A(a, c) {
  var d;
  if(u(u(a) ? a.i : a)) {
    d = a.i(a, c)
  }else {
    var e = A[s.call(h, a)];
    u(e) ? d = e : (e = A._, u(e) ? d = e : b(v.call(h, "IPrintable.-pr-seq", a)));
    d = d.call(h, a, c)
  }
  return d
}
function Oa(a, c, d) {
  if(u(u(a) ? a.M : a)) {
    a = a.M(a, c, d)
  }else {
    var e;
    var g = Oa[s.call(h, a)];
    u(g) ? e = g : (g = Oa._, u(g) ? e = g : b(v.call(h, "IWatchable.-notify-watches", a)));
    a = e.call(h, a, c, d)
  }
  return a
}
function B(a, c) {
  return Ja.call(h, a, c)
}
Ka["null"] = m(0);
y["null"] = function() {
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return h;
      case 3:
        return d
    }
    b("Invalid arity: " + arguments.length)
  }
}();
Ca["null"] = function(a, c, d) {
  return Pa.call(h, c, d)
};
xa["null"] = function(a, c) {
  return C.call(h, c)
};
z["null"] = function() {
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return c.call(h);
      case 3:
        return d
    }
    b("Invalid arity: " + arguments.length)
  }
}();
Na["null"] = f;
A["null"] = function() {
  return C.call(h, "nil")
};
Ea["null"] = f;
w["null"] = m(0);
ya["null"] = f;
za["null"] = m(h);
Aa["null"] = function() {
  return C.call(h)
};
Ja["null"] = function(a, c) {
  return c === h
};
Ia["null"] = m(h);
Ga["null"] = f;
Ha["null"] = m(h);
x["null"] = function() {
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return h;
      case 3:
        return d
    }
    b("Invalid arity: " + arguments.length)
  }
}();
Da["null"] = f;
Date.prototype.e = function(a, c) {
  return a.toString() === c.toString()
};
Ka.number = aa();
Ja.number = function(a, c) {
  return a === c
};
Ka["boolean"] = function(a) {
  return a === f ? 1 : 0
};
Ka["function"] = function(a) {
  return ha.call(h, a)
};
var D = function() {
  return function(a, c, d, e) {
    switch(arguments.length) {
      case 2:
        var g;
        a: {
          if(u(B.call(h, 0, w.call(h, a)))) {
            g = c.call(h)
          }else {
            for(var i = x.call(h, a, 0), j = 1;;) {
              if(u(j < w.call(h, a))) {
                i = c.call(h, i, x.call(h, a, j)), j += 1
              }else {
                g = i;
                break a
              }
            }
          }
        }
        return g;
      case 3:
        a: {
          g = d;
          for(j = 0;;) {
            if(u(j < w.call(h, a))) {
              g = c.call(h, g, x.call(h, a, j)), j += 1
            }else {
              i = g;
              break a
            }
          }
        }
        return i;
      case 4:
        a: {
          g = d;
          for(i = e;;) {
            if(u(i < w.call(h, a))) {
              g = c.call(h, g, x.call(h, a, i)), i += 1
            }else {
              j = g;
              break a
            }
          }
        }
        return j
    }
    b("Invalid arity: " + arguments.length)
  }
}();
function Qa(a, c) {
  this.g = a;
  this.o = c
}
o = Qa.prototype;
o.h = function(a) {
  return F.call(h, a)
};
o.v = function() {
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return D.call(h, this.g, c, this.g[this.o], this.o + 1);
      case 3:
        return D.call(h, this.g, c, d, this.o)
    }
    b("Invalid arity: " + arguments.length)
  }
}();
o.k = function(a, c) {
  return G.call(h, c, a)
};
o.e = function(a, c) {
  return Ra.call(h, a, c)
};
o.A = f;
o.u = function() {
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        var e = c + this.o;
        return u(e < this.g.length) ? this.g[e] : h;
      case 3:
        return e = c + this.o, u(e < this.g.length) ? this.g[e] : d
    }
    b("Invalid arity: " + arguments.length)
  }
}();
o.p = function() {
  return this.g.length - this.o
};
o.C = f;
o.w = function() {
  return this.g[this.o]
};
o.z = function() {
  return u(this.o + 1 < this.g.length) ? new Qa(this.g, this.o + 1) : C.call(h)
};
o.j = aa();
function Sa(a, c) {
  return u(B.call(h, 0, a.length)) ? h : new Qa(a, c)
}
function H(a, c) {
  return Sa.call(h, a, c)
}
z.array = function() {
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return D.call(h, a, c);
      case 3:
        return D.call(h, a, c, d)
    }
    b("Invalid arity: " + arguments.length)
  }
}();
y.array = function() {
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return a[c];
      case 3:
        return x.call(h, a, c, d)
    }
    b("Invalid arity: " + arguments.length)
  }
}();
x.array = function() {
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return u(c < a.length) ? a[c] : h;
      case 3:
        return u(c < a.length) ? a[c] : d
    }
    b("Invalid arity: " + arguments.length)
  }
}();
w.array = function(a) {
  return a.length
};
La.array = function(a) {
  return H.call(h, a, 0)
};
function I(a) {
  return u(a) ? La.call(h, a) : h
}
function J(a) {
  a = I.call(h, a);
  return u(a) ? za.call(h, a) : h
}
function K(a) {
  return Aa.call(h, I.call(h, a))
}
function L(a) {
  return u(a) ? I.call(h, K.call(h, a)) : h
}
function Ta(a) {
  return J.call(h, L.call(h, a))
}
function Ua(a) {
  return L.call(h, L.call(h, a))
}
w._ = function(a) {
  for(var a = I.call(h, a), c = 0;;) {
    if(u(a)) {
      a = L.call(h, a), c += 1
    }else {
      return c
    }
  }
};
Ja._ = function(a, c) {
  return a === c
};
function M(a) {
  return u(a) ? k : f
}
var N = function() {
  var a = h, c = function() {
    function c(a, d, j) {
      var n = h;
      q(j) && (n = H(Array.prototype.slice.call(arguments, 2), 0));
      return e.call(this, a, d, n)
    }
    function e(c, d, e) {
      for(;;) {
        if(u(e)) {
          c = a.call(h, c, d), d = J.call(h, e), e = L.call(h, e)
        }else {
          return a.call(h, c, d)
        }
      }
    }
    c.b = 2;
    c.a = function(a) {
      var c = J(a), d = J(L(a)), a = K(L(a));
      return e.call(this, c, d, a)
    };
    return c
  }(), a = function(a, e, g) {
    switch(arguments.length) {
      case 2:
        return xa.call(h, a, e);
      default:
        return c.apply(this, arguments)
    }
    b("Invalid arity: " + arguments.length)
  };
  a.b = 2;
  a.a = c.a;
  return a
}();
function O(a) {
  return w.call(h, a)
}
var P = function() {
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return x.call(h, a, Math.floor(c));
      case 3:
        return x.call(h, a, Math.floor(c), d)
    }
    b("Invalid arity: " + arguments.length)
  }
}(), Q = function() {
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return y.call(h, a, c);
      case 3:
        return y.call(h, a, c, d)
    }
    b("Invalid arity: " + arguments.length)
  }
}(), Va = function() {
  var a = h, c = function() {
    function c(a, d, j, n) {
      var p = h;
      q(n) && (p = H(Array.prototype.slice.call(arguments, 3), 0));
      return e.call(this, a, d, j, p)
    }
    function e(c, d, e, n) {
      for(;;) {
        if(c = a.call(h, c, d, e), u(n)) {
          d = J.call(h, n), e = Ta.call(h, n), n = Ua.call(h, n)
        }else {
          return c
        }
      }
    }
    c.b = 3;
    c.a = function(a) {
      var c = J(a), d = J(L(a)), n = J(L(L(a))), a = K(L(L(a)));
      return e.call(this, c, d, n, a)
    };
    return c
  }(), a = function(a, e, g, i) {
    switch(arguments.length) {
      case 3:
        return Ca.call(h, a, e, g);
      default:
        return c.apply(this, arguments)
    }
    b("Invalid arity: " + arguments.length)
  };
  a.b = 3;
  a.a = c.a;
  return a
}();
function Wa(a, c) {
  return Ia.call(h, a, c)
}
function Xa(a) {
  var c;
  u(a) ? (c = a.l, c = u(c) ? M.call(h, a.hasOwnProperty("cljs$core$IMeta$")) : c) : c = a;
  c = u(c) ? f : va.call(h, Ga, a);
  return u(c) ? Ha.call(h, a) : h
}
function Ya(a) {
  return Ka.call(h, a)
}
function Za(a) {
  return M.call(h, I.call(h, a))
}
function $a(a) {
  if(u(a === h)) {
    a = k
  }else {
    var c;
    u(a) ? (c = a.N, c = u(c) ? M.call(h, a.hasOwnProperty("cljs$core$ISet$")) : c) : c = a;
    a = u(c) ? f : va.call(h, Ea, a)
  }
  return a
}
function ab(a) {
  var c;
  u(a) ? (c = a.A, c = u(c) ? M.call(h, a.hasOwnProperty("cljs$core$ISequential$")) : c) : c = a;
  return u(c) ? f : va.call(h, Ma, a)
}
function bb(a) {
  if(u(a === h)) {
    a = k
  }else {
    var c;
    u(a) ? (c = a.L, c = u(c) ? M.call(h, a.hasOwnProperty("cljs$core$IMap$")) : c) : c = a;
    a = u(c) ? f : va.call(h, Da, a)
  }
  return a
}
function cb(a) {
  var c;
  u(a) ? (c = a.O, c = u(c) ? M.call(h, a.hasOwnProperty("cljs$core$IVector$")) : c) : c = a;
  return u(c) ? f : va.call(h, Fa, a)
}
function db() {
  return{}
}
function eb(a) {
  var c = [];
  sa.call(h, a, function(a, e) {
    return c.push(e)
  });
  return c
}
var fb = db.call(h);
function gb(a) {
  if(u(a === h)) {
    a = k
  }else {
    var c;
    u(a) ? (c = a.C, c = u(c) ? M.call(h, a.hasOwnProperty("cljs$core$ISeq$")) : c) : c = a;
    a = u(c) ? f : va.call(h, ya, a)
  }
  return a
}
function hb(a) {
  return u(a) ? f : k
}
function ib(a) {
  var c = da.call(h, a);
  return u(c) ? M.call(h, function() {
    var c = B.call(h, a.charAt(0), "\ufdd0");
    return u(c) ? c : B.call(h, a.charAt(0), "\ufdd1")
  }()) : c
}
function jb(a) {
  var c = da.call(h, a);
  return u(c) ? B.call(h, a.charAt(0), "\ufdd0") : c
}
function kb(a) {
  var c = da.call(h, a);
  return u(c) ? B.call(h, a.charAt(0), "\ufdd1") : c
}
function lb(a) {
  return ea.call(h, a)
}
function mb(a) {
  return ga.call(h, a)
}
function nb(a, c) {
  return u(y.call(h, a, c, fb) === fb) ? k : f
}
function ob(a, c) {
  return qa.call(h, a, c)
}
function pb(a) {
  return u(B.call(h, a, ob)) ? ob : function(c, d) {
    var e = a.call(h, c, d);
    return u(lb.call(h, e)) ? e : u(e) ? -1 : u(a.call(h, d, c)) ? 1 : 0
  }
}
var rb = function() {
  var a = h;
  return a = function(c, d) {
    switch(arguments.length) {
      case 1:
        return a.call(h, ob, c);
      case 2:
        var e;
        u(I.call(h, d)) ? (e = R.call(h, d), ra.call(h, e, pb.call(h, c)), e = I.call(h, e)) : e = qb;
        return e
    }
    b("Invalid arity: " + arguments.length)
  }
}(), S = function() {
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return z.call(h, c, a);
      case 3:
        return z.call(h, d, a, c)
    }
    b("Invalid arity: " + arguments.length)
  }
}(), sb = function() {
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        var e = I.call(h, c);
        return u(e) ? S.call(h, a, J.call(h, e), L.call(h, e)) : a.call(h);
      case 3:
        a: {
          for(var g = c, i = I.call(h, d);;) {
            if(u(i)) {
              g = a.call(h, g, J.call(h, i)), i = L.call(h, i)
            }else {
              e = g;
              break a
            }
          }
        }
        return e
    }
    b("Invalid arity: " + arguments.length)
  }
}();
z._ = function() {
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return sb.call(h, c, a);
      case 3:
        return sb.call(h, c, d, a)
    }
    b("Invalid arity: " + arguments.length)
  }
}();
function tb(a, c) {
  for(var d = c, e = I.call(h, a);;) {
    var g = e;
    if(u(u(g) ? 0 < d : g)) {
      d -= 1, e = L.call(h, e)
    }else {
      return e
    }
  }
}
x._ = function() {
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        var e;
        var g = tb.call(h, a, c);
        u(g) ? e = J.call(h, g) : b(Error("Index out of bounds"));
        return e;
      case 3:
        return e = tb.call(h, a, c), u(e) ? J.call(h, e) : d
    }
    b("Invalid arity: " + arguments.length)
  }
}();
var ub = function() {
  var a = h, c = function() {
    function c(a, d) {
      var j = h;
      q(d) && (j = H(Array.prototype.slice.call(arguments, 1), 0));
      return e.call(this, a, j)
    }
    function e(c, d) {
      return function(c, d) {
        for(;;) {
          if(u(d)) {
            var e = c.append(a.call(h, J.call(h, d))), g = L.call(h, d), c = e, d = g
          }else {
            return a.call(h, c)
          }
        }
      }.call(h, new t(a.call(h, c)), d)
    }
    c.b = 1;
    c.a = function(a) {
      var c = J(a), a = K(a);
      return e.call(this, c, a)
    };
    return c
  }(), a = function(a, e) {
    switch(arguments.length) {
      case 0:
        return"";
      case 1:
        return u(a === h) ? "" : u("\ufdd0'else") ? a.toString() : h;
      default:
        return c.apply(this, arguments)
    }
    b("Invalid arity: " + arguments.length)
  };
  a.b = 1;
  a.a = c.a;
  return a
}(), T = function() {
  var a = h, c = function() {
    function c(a, d) {
      var j = h;
      q(d) && (j = H(Array.prototype.slice.call(arguments, 1), 0));
      return e.call(this, a, j)
    }
    function e(c, d) {
      return function(c, d) {
        for(;;) {
          if(u(d)) {
            var e = c.append(a.call(h, J.call(h, d))), g = L.call(h, d), c = e, d = g
          }else {
            return ub.call(h, c)
          }
        }
      }.call(h, new t(a.call(h, c)), d)
    }
    c.b = 1;
    c.a = function(a) {
      var c = J(a), a = K(a);
      return e.call(this, c, a)
    };
    return c
  }(), a = function(a, e) {
    switch(arguments.length) {
      case 0:
        return"";
      case 1:
        return u(kb.call(h, a)) ? a.substring(2, a.length) : u(jb.call(h, a)) ? ub.call(h, ":", a.substring(2, a.length)) : u(a === h) ? "" : u("\ufdd0'else") ? a.toString() : h;
      default:
        return c.apply(this, arguments)
    }
    b("Invalid arity: " + arguments.length)
  };
  a.b = 1;
  a.a = c.a;
  return a
}(), vb = function() {
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return a.substring(c);
      case 3:
        return a.substring(c, d)
    }
    b("Invalid arity: " + arguments.length)
  }
}();
function Ra(a, c) {
  return hb.call(h, u(ab.call(h, c)) ? function() {
    for(var d = I.call(h, a), e = I.call(h, c);;) {
      if(u(d === h)) {
        return e === h
      }
      if(u(e === h)) {
        return k
      }
      if(u(B.call(h, J.call(h, d), J.call(h, e)))) {
        d = L.call(h, d), e = L.call(h, e)
      }else {
        return u("\ufdd0'else") ? k : h
      }
    }
  }() : h)
}
function wb(a, c) {
  return a ^ c + 2654435769 + (a << 6) + (a >> 2)
}
function F(a) {
  return S.call(h, function(a, d) {
    return wb.call(h, a, Ya.call(h, d))
  }, Ya.call(h, J.call(h, a)), L.call(h, a))
}
function xb(a, c, d, e) {
  this.c = a;
  this.first = c;
  this.D = d;
  this.n = e
}
o = xb.prototype;
o.h = function(a) {
  return F.call(h, a)
};
o.A = f;
o.k = function(a, c) {
  return new xb(this.c, c, a, this.n + 1)
};
o.j = aa();
o.p = l("n");
o.C = f;
o.w = l("first");
o.z = l("D");
o.e = function(a, c) {
  return Ra.call(h, a, c)
};
o.r = function(a, c) {
  return new xb(c, this.first, this.D, this.n)
};
o.l = f;
o.q = l("c");
function yb(a) {
  this.c = a
}
o = yb.prototype;
o.h = function(a) {
  return F.call(h, a)
};
o.A = f;
o.k = function(a, c) {
  return new xb(this.c, c, h, 1)
};
o.j = m(h);
o.p = m(0);
o.C = f;
o.w = m(h);
o.z = m(h);
o.e = function(a, c) {
  return Ra.call(h, a, c)
};
o.r = function(a, c) {
  return new yb(c)
};
o.l = f;
o.q = l("c");
var qb = new yb(h);
function zb(a) {
  return S.call(h, N, qb, a)
}
var C = function() {
  function a(a) {
    var d = h;
    q(a) && (d = H(Array.prototype.slice.call(arguments, 0), 0));
    return S.call(h, N, qb, zb.call(h, d))
  }
  a.b = 0;
  a.a = function(a) {
    a = I(a);
    return S.call(h, N, qb, zb.call(h, a))
  };
  return a
}();
function Ab(a, c, d) {
  this.c = a;
  this.first = c;
  this.D = d
}
o = Ab.prototype;
o.j = aa();
o.h = function(a) {
  return F.call(h, a)
};
o.e = function(a, c) {
  return Ra.call(h, a, c)
};
o.A = f;
o.k = function(a, c) {
  return new Ab(h, c, a)
};
o.C = f;
o.w = l("first");
o.z = function() {
  return u(this.D === h) ? qb : this.D
};
o.l = f;
o.q = l("c");
o.r = function(a, c) {
  return new Ab(c, this.first, this.D)
};
function G(a, c) {
  return new Ab(h, a, c)
}
z.string = function() {
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return D.call(h, a, c);
      case 3:
        return D.call(h, a, c, d)
    }
    b("Invalid arity: " + arguments.length)
  }
}();
y.string = function() {
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return x.call(h, a, c);
      case 3:
        return x.call(h, a, c, d)
    }
    b("Invalid arity: " + arguments.length)
  }
}();
x.string = function() {
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return u(c < w.call(h, a)) ? a.charAt(c) : h;
      case 3:
        return u(c < w.call(h, a)) ? a.charAt(c) : d
    }
    b("Invalid arity: " + arguments.length)
  }
}();
w.string = function(a) {
  return a.length
};
La.string = function(a) {
  return Sa.call(h, a, 0)
};
Ka.string = function(a) {
  return na.call(h, a)
};
String.prototype.call = function() {
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return Q.call(h, c, this.toString());
      case 3:
        return Q.call(h, c, this.toString(), d)
    }
    b("Invalid arity: " + arguments.length)
  }
}();
String.prototype.apply = function(a, c) {
  return u(2 > O.call(h, c)) ? Q.call(h, c[0], a) : Q.call(h, c[0], a, c[1])
};
function Bb(a) {
  var c = a.x;
  if(u(a.K)) {
    return c
  }
  a.x = c.call(h);
  a.K = f;
  return a.x
}
function U(a, c, d) {
  this.c = a;
  this.K = c;
  this.x = d
}
o = U.prototype;
o.j = function(a) {
  return I.call(h, Bb.call(h, a))
};
o.h = function(a) {
  return F.call(h, a)
};
o.e = function(a, c) {
  return Ra.call(h, a, c)
};
o.A = f;
o.k = function(a, c) {
  return G.call(h, c, a)
};
o.C = f;
o.w = function(a) {
  return J.call(h, Bb.call(h, a))
};
o.z = function(a) {
  return K.call(h, Bb.call(h, a))
};
o.l = f;
o.q = l("c");
o.r = function(a, c) {
  return new U(c, this.K, this.x)
};
function R(a) {
  for(var c = [];;) {
    if(u(I.call(h, a))) {
      c.push(J.call(h, a)), a = L.call(h, a)
    }else {
      return c
    }
  }
}
function Cb(a, c) {
  for(var d = a, e = c, g = 0;;) {
    var i;
    i = 0 < e;
    i = u(i) ? I.call(h, d) : i;
    if(u(i)) {
      d = L.call(h, d), e -= 1, g += 1
    }else {
      return g
    }
  }
}
var Eb = function Db(c) {
  return u(c === h) ? h : u(L.call(h, c) === h) ? I.call(h, J.call(h, c)) : u("\ufdd0'else") ? G.call(h, J.call(h, c), Db.call(h, L.call(h, c))) : h
}, Fb = function() {
  function a(a, c) {
    return new U(h, k, function() {
      var d = I.call(h, a);
      return u(d) ? G.call(h, J.call(h, d), e.call(h, K.call(h, d), c)) : c
    })
  }
  function c(a) {
    return new U(h, k, function() {
      return a
    })
  }
  function d() {
    return new U(h, k, m(h))
  }
  var e = h, g = function() {
    function a(d, e, g) {
      var i = h;
      q(g) && (i = H(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, d, e, i)
    }
    function c(a, d, g) {
      return function fa(a, c) {
        return new U(h, k, function() {
          var d = I.call(h, a);
          return u(d) ? G.call(h, J.call(h, d), fa.call(h, K.call(h, d), c)) : u(c) ? fa.call(h, J.call(h, c), L.call(h, c)) : h
        })
      }.call(h, e.call(h, a, d), g)
    }
    a.b = 2;
    a.a = function(a) {
      var d = J(a), e = J(L(a)), a = K(L(a));
      return c.call(this, d, e, a)
    };
    return a
  }(), e = function(e, j, n) {
    switch(arguments.length) {
      case 0:
        return d.call(this);
      case 1:
        return c.call(this, e);
      case 2:
        return a.call(this, e, j);
      default:
        return g.apply(this, arguments)
    }
    b("Invalid arity: " + arguments.length)
  };
  e.b = 2;
  e.a = g.a;
  return e
}(), Gb = function() {
  var a = h, c = function() {
    function a(d, i, j, n, p) {
      var r = h;
      q(p) && (r = H(Array.prototype.slice.call(arguments, 4), 0));
      return c.call(this, d, i, j, n, r)
    }
    function c(a, d, e, n, p) {
      return G.call(h, a, G.call(h, d, G.call(h, e, G.call(h, n, Eb.call(h, p)))))
    }
    a.b = 4;
    a.a = function(a) {
      var d = J(a), j = J(L(a)), n = J(L(L(a))), p = J(L(L(L(a)))), a = K(L(L(L(a))));
      return c.call(this, d, j, n, p, a)
    };
    return a
  }(), a = function(a, e, g, i, j) {
    switch(arguments.length) {
      case 1:
        return I.call(h, a);
      case 2:
        return G.call(h, a, e);
      case 3:
        return G.call(h, a, G.call(h, e, g));
      case 4:
        return G.call(h, a, G.call(h, e, G.call(h, g, i)));
      default:
        return c.apply(this, arguments)
    }
    b("Invalid arity: " + arguments.length)
  };
  a.b = 4;
  a.a = c.a;
  return a
}(), V = function() {
  var a = h, c = function() {
    function a(d, i, j, n, p, r) {
      var E = h;
      q(r) && (E = H(Array.prototype.slice.call(arguments, 5), 0));
      return c.call(this, d, i, j, n, p, E)
    }
    function c(a, d, e, n, p, r) {
      d = G.call(h, d, G.call(h, e, G.call(h, n, G.call(h, p, Eb.call(h, r)))));
      e = a.b;
      return u(a.a) ? u(Cb.call(h, d, e) <= e) ? a.apply(a, R.call(h, d)) : a.a(d) : a.apply(a, R.call(h, d))
    }
    a.b = 5;
    a.a = function(a) {
      var d = J(a), j = J(L(a)), n = J(L(L(a))), p = J(L(L(L(a)))), r = J(L(L(L(L(a))))), a = K(L(L(L(L(a)))));
      return c.call(this, d, j, n, p, r, a)
    };
    return a
  }(), a = function(a, e, g, i, j, n) {
    switch(arguments.length) {
      case 2:
        var p = a, r = e, E = p.b;
        return u(p.a) ? u(Cb.call(h, r, E + 1) <= E) ? p.apply(p, R.call(h, r)) : p.a(r) : p.apply(p, R.call(h, r));
      case 3:
        return p = a, r = Gb.call(h, e, g), E = p.b, u(p.a) ? u(Cb.call(h, r, E) <= E) ? p.apply(p, R.call(h, r)) : p.a(r) : p.apply(p, R.call(h, r));
      case 4:
        return p = a, r = Gb.call(h, e, g, i), E = p.b, u(p.a) ? u(Cb.call(h, r, E) <= E) ? p.apply(p, R.call(h, r)) : p.a(r) : p.apply(p, R.call(h, r));
      case 5:
        return p = a, r = Gb.call(h, e, g, i, j), E = p.b, u(p.a) ? u(Cb.call(h, r, E) <= E) ? p.apply(p, R.call(h, r)) : p.a(r) : p.apply(p, R.call(h, r));
      default:
        return c.apply(this, arguments)
    }
    b("Invalid arity: " + arguments.length)
  };
  a.b = 5;
  a.a = c.a;
  return a
}();
function Hb(a, c) {
  for(;;) {
    if(u(I.call(h, c) === h)) {
      return f
    }
    if(u(a.call(h, J.call(h, c)))) {
      var d = a, e = L.call(h, c), a = d, c = e
    }else {
      return u("\ufdd0'else") ? k : h
    }
  }
}
function Ib(a, c) {
  for(;;) {
    if(u(I.call(h, c))) {
      var d = a.call(h, J.call(h, c));
      if(u(d)) {
        return d
      }
      var d = a, e = L.call(h, c), a = d, c = e
    }else {
      return h
    }
  }
}
function Jb(a) {
  return a
}
var W = function() {
  function a(a, c, d, g) {
    return new U(h, k, function() {
      var r = I.call(h, c), E = I.call(h, d), fa = I.call(h, g);
      return u(u(r) ? u(E) ? fa : E : r) ? G.call(h, a.call(h, J.call(h, r), J.call(h, E), J.call(h, fa)), e.call(h, a, K.call(h, r), K.call(h, E), K.call(h, fa))) : h
    })
  }
  function c(a, c, d) {
    return new U(h, k, function() {
      var g = I.call(h, c), r = I.call(h, d);
      return u(u(g) ? r : g) ? G.call(h, a.call(h, J.call(h, g), J.call(h, r)), e.call(h, a, K.call(h, g), K.call(h, r))) : h
    })
  }
  function d(a, c) {
    return new U(h, k, function() {
      var d = I.call(h, c);
      return u(d) ? G.call(h, a.call(h, J.call(h, d)), e.call(h, a, K.call(h, d))) : h
    })
  }
  var e = h, g = function() {
    function a(d, e, g, i, fa) {
      var Ob = h;
      q(fa) && (Ob = H(Array.prototype.slice.call(arguments, 4), 0));
      return c.call(this, d, e, g, i, Ob)
    }
    function c(a, d, g, i, j) {
      return e.call(h, function(c) {
        return V.call(h, a, c)
      }, function Hc(a) {
        return new U(h, k, function() {
          var c = e.call(h, I, a);
          return u(Hb.call(h, Jb, c)) ? G.call(h, e.call(h, J, c), Hc.call(h, e.call(h, K, c))) : h
        })
      }.call(h, N.call(h, j, i, g, d)))
    }
    a.b = 4;
    a.a = function(a) {
      var d = J(a), e = J(L(a)), g = J(L(L(a))), i = J(L(L(L(a)))), a = K(L(L(L(a))));
      return c.call(this, d, e, g, i, a)
    };
    return a
  }(), e = function(e, j, n, p, r) {
    switch(arguments.length) {
      case 2:
        return d.call(this, e, j);
      case 3:
        return c.call(this, e, j, n);
      case 4:
        return a.call(this, e, j, n, p);
      default:
        return g.apply(this, arguments)
    }
    b("Invalid arity: " + arguments.length)
  };
  e.b = 4;
  e.a = g.a;
  return e
}(), Lb = function Kb(c, d) {
  return new U(h, k, function() {
    if(u(0 < c)) {
      var e = I.call(h, d);
      return u(e) ? G.call(h, J.call(h, e), Kb.call(h, c - 1, K.call(h, e))) : h
    }
    return h
  })
};
function Mb(a, c) {
  function d(a, c) {
    for(;;) {
      var d = I.call(h, c), j = 0 < a;
      if(u(u(j) ? d : j)) {
        j = a - 1, d = K.call(h, d), a = j, c = d
      }else {
        return d
      }
    }
  }
  return new U(h, k, function() {
    return d.call(h, a, c)
  })
}
var Pb = function Nb(c) {
  return new U(h, k, function() {
    var d = I.call(h, c);
    return u(d) ? Fb.call(h, d, Nb.call(h, d)) : h
  })
}, Qb = function() {
  function a(a) {
    return new U(h, k, function() {
      return G.call(h, a, c.call(h, a))
    })
  }
  var c = h;
  return c = function(d, e) {
    switch(arguments.length) {
      case 1:
        return a.call(this, d);
      case 2:
        return Lb.call(h, d, c.call(h, e))
    }
    b("Invalid arity: " + arguments.length)
  }
}(), Rb = function() {
  function a(a, d) {
    return new U(h, k, function() {
      var i = I.call(h, a), j = I.call(h, d);
      return u(u(i) ? j : i) ? G.call(h, J.call(h, i), G.call(h, J.call(h, j), c.call(h, K.call(h, i), K.call(h, j)))) : h
    })
  }
  var c = h, d = function() {
    function a(c, e, n) {
      var p = h;
      q(n) && (p = H(Array.prototype.slice.call(arguments, 2), 0));
      return d.call(this, c, e, p)
    }
    function d(a, e, g) {
      return new U(h, k, function() {
        var d = W.call(h, I, N.call(h, g, e, a));
        return u(Hb.call(h, Jb, d)) ? Fb.call(h, W.call(h, J, d), V.call(h, c, W.call(h, K, d))) : h
      })
    }
    a.b = 2;
    a.a = function(a) {
      var c = J(a), e = J(L(a)), a = K(L(a));
      return d.call(this, c, e, a)
    };
    return a
  }(), c = function(c, g, i) {
    switch(arguments.length) {
      case 2:
        return a.call(this, c, g);
      default:
        return d.apply(this, arguments)
    }
    b("Invalid arity: " + arguments.length)
  };
  c.b = 2;
  c.a = d.a;
  return c
}();
function Sb(a, c) {
  return Mb.call(h, 1, Rb.call(h, Qb.call(h, a), c))
}
function Tb(a) {
  return function d(a, g) {
    return new U(h, k, function() {
      var i = I.call(h, a);
      return u(i) ? G.call(h, J.call(h, i), d.call(h, K.call(h, i), g)) : u(I.call(h, g)) ? d.call(h, J.call(h, g), K.call(h, g)) : h
    })
  }.call(h, h, a)
}
var Ub = function() {
  var a = h, c = function() {
    function a(c, d, i) {
      var j = h;
      q(i) && (j = H(Array.prototype.slice.call(arguments, 2), 0));
      return Tb.call(h, V.call(h, W, c, d, j))
    }
    a.b = 2;
    a.a = function(a) {
      var c = J(a), d = J(L(a)), a = K(L(a));
      return Tb.call(h, V.call(h, W, c, d, a))
    };
    return a
  }(), a = function(a, e, g) {
    switch(arguments.length) {
      case 2:
        return Tb.call(h, W.call(h, a, e));
      default:
        return c.apply(this, arguments)
    }
    b("Invalid arity: " + arguments.length)
  };
  a.b = 2;
  a.a = c.a;
  return a
}();
function Vb(a, c) {
  return S.call(h, xa, a, c)
}
var Wb = function() {
  function a(a, c, i, j) {
    return new U(h, k, function() {
      var n = I.call(h, j);
      if(u(n)) {
        var p = Lb.call(h, a, n);
        return u(B.call(h, a, O.call(h, p))) ? G.call(h, p, d.call(h, a, c, i, Mb.call(h, c, n))) : C.call(h, Lb.call(h, a, Fb.call(h, p, i)))
      }
      return h
    })
  }
  function c(a, c, i) {
    return new U(h, k, function() {
      var j = I.call(h, i);
      if(u(j)) {
        var n = Lb.call(h, a, j);
        return u(B.call(h, a, O.call(h, n))) ? G.call(h, n, d.call(h, a, c, Mb.call(h, c, j))) : h
      }
      return h
    })
  }
  var d = h;
  return d = function(e, g, i, j) {
    switch(arguments.length) {
      case 2:
        return d.call(h, e, e, g);
      case 3:
        return c.call(this, e, g, i);
      case 4:
        return a.call(this, e, g, i, j)
    }
    b("Invalid arity: " + arguments.length)
  }
}();
function Xb(a) {
  a = a.d;
  return u(32 > a) ? 0 : a - 1 >> 5 << 5
}
function Yb(a, c) {
  for(var d = a, e = c;;) {
    if(u(B.call(h, 0, d))) {
      return e
    }
    var g = wa.call(h, Zb);
    g[0] = e;
    e = g;
    d -= 5
  }
}
var ac = function $b(c, d, e, g) {
  var i = wa.call(h, e), j = c.d - 1 >> d & 31;
  u(B.call(h, 5, d)) ? i[j] = g : (e = e[j], c = u(e) ? $b.call(h, c, d - 5, e, g) : Yb.call(h, d - 5, g), i[j] = c);
  return i
};
function bc(a, c) {
  var d = 0 <= c;
  if(u(u(d) ? c < a.d : d)) {
    if(u(c >= Xb.call(h, a))) {
      return a.B
    }
    for(var d = a.root, e = a.shift;;) {
      if(u(0 < e)) {
        var g = e - 5, d = d[c >> e & 31], e = g
      }else {
        return d
      }
    }
  }else {
    b(Error(T.call(h, "No item ", c, " in vector of length ", a.d)))
  }
}
var dc = function cc(c, d, e, g, i) {
  var j = wa.call(h, e);
  if(u(0 === d)) {
    j[g & 31] = i
  }else {
    var n = g >> d & 31;
    j[n] = cc.call(h, c, d - 5, e[n], g, i)
  }
  return j
};
function ec(a, c, d, e, g) {
  this.c = a;
  this.d = c;
  this.shift = d;
  this.root = e;
  this.B = g
}
o = ec.prototype;
o.h = function(a) {
  return F.call(h, a)
};
o.s = function() {
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return x.call(h, a, c, h);
      case 3:
        return x.call(h, a, c, d)
    }
    b("Invalid arity: " + arguments.length)
  }
}();
o.G = function(a, c, d) {
  var e = 0 <= c;
  if(u(u(e) ? c < this.d : e)) {
    return u(Xb.call(h, a) <= c) ? (a = wa.call(h, this.B), a[c & 31] = d, new ec(this.c, this.d, this.shift, this.root, a)) : new ec(this.c, this.d, this.shift, dc.call(h, a, this.shift, this.root, c, d), this.B)
  }
  if(u(B.call(h, c, this.d))) {
    return xa.call(h, a, d)
  }
  u("\ufdd0'else") && b(Error(T.call(h, "Index ", c, " out of bounds  [0,", this.d, "]")));
  return h
};
o.call = function() {
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return y.call(h, this, c);
      case 3:
        return y.call(h, this, c, d)
    }
    b("Invalid arity: " + arguments.length)
  }
}();
o.A = f;
o.k = function(a, c) {
  if(u(32 > this.d - Xb.call(h, a))) {
    var d = wa.call(h, this.B);
    d.push(c);
    return new ec(this.c, this.d + 1, this.shift, this.root, d)
  }
  var e = this.d >> 5 > 1 << this.shift, d = u(e) ? this.shift + 5 : this.shift;
  u(e) ? (e = wa.call(h, Zb), e[0] = this.root, e[1] = Yb.call(h, this.shift, this.B)) : e = ac.call(h, a, this.shift, this.root, this.B);
  return new ec(this.c, this.d + 1, d, e, [c])
};
o.v = function() {
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return D.call(h, a, c);
      case 3:
        return D.call(h, a, c, d)
    }
    b("Invalid arity: " + arguments.length)
  }
}();
o.j = function(a) {
  var c = this;
  return u(0 < c.d) ? function e(g) {
    return new U(h, k, function() {
      return u(g < c.d) ? G.call(h, x.call(h, a, g), e.call(h, g + 1)) : h
    })
  }.call(h, 0) : h
};
o.p = l("d");
o.O = f;
o.e = function(a, c) {
  return Ra.call(h, a, c)
};
o.r = function(a, c) {
  return new ec(c, this.d, this.shift, this.root, this.B)
};
o.l = f;
o.q = l("c");
o.u = function() {
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return bc.call(h, a, c)[c & 31];
      case 3:
        var e = 0 <= c;
        return u(u(e) ? c < this.d : e) ? x.call(h, a, c) : d
    }
    b("Invalid arity: " + arguments.length)
  }
}();
var Zb = Array(32), fc = new ec(h, 0, 5, Zb, []);
function X(a) {
  return Vb.call(h, fc, a)
}
function gc(a) {
  return S.call(h, N, fc, a)
}
var hc = function() {
  function a(a) {
    var d = h;
    q(a) && (d = H(Array.prototype.slice.call(arguments, 0), 0));
    return gc.call(h, d)
  }
  a.b = 0;
  a.a = function(a) {
    a = I(a);
    return gc.call(h, a)
  };
  return a
}();
X([]);
function ic() {
}
ic.prototype.e = m(k);
var jc = new ic;
function kc(a, c) {
  return hb.call(h, u(bb.call(h, c)) ? u(B.call(h, O.call(h, a), O.call(h, c))) ? Hb.call(h, Jb, W.call(h, function(a) {
    return B.call(h, Q.call(h, c, J.call(h, a), jc), Ta.call(h, a))
  }, a)) : h : h)
}
function lc(a, c, d) {
  for(var e = d.length, g = 0;;) {
    if(u(g < e)) {
      if(u(B.call(h, c, d[g]))) {
        return g
      }
      g += a
    }else {
      return h
    }
  }
}
var mc = function() {
  var a = h;
  return a = function(c, d, e, g) {
    switch(arguments.length) {
      case 2:
        return a.call(h, c, d, f, k);
      case 4:
        var i = da.call(h, c);
        return u(u(i) ? d.hasOwnProperty(c) : i) ? e : g
    }
    b("Invalid arity: " + arguments.length)
  }
}();
function nc(a, c) {
  var d = Ya.call(h, a), e = Ya.call(h, c);
  return u(d < e) ? -1 : u(d > e) ? 1 : u("\ufdd0'else") ? 0 : h
}
function oc(a, c, d) {
  this.c = a;
  this.keys = c;
  this.F = d
}
o = oc.prototype;
o.h = function(a) {
  return F.call(h, a)
};
o.s = function() {
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return y.call(h, a, c, h);
      case 3:
        return mc.call(h, c, this.F, this.F[c], d)
    }
    b("Invalid arity: " + arguments.length)
  }
}();
o.G = function(a, c, d) {
  if(u(da.call(h, c))) {
    var a = ta.call(h, this.F), e = a.hasOwnProperty(c);
    a[c] = d;
    if(u(e)) {
      return new oc(this.c, this.keys, a)
    }
    d = wa.call(h, this.keys);
    d.push(c);
    return new oc(this.c, d, a)
  }
  return Wa.call(h, Vb.call(h, Pa.call(h, c, d), I.call(h, a)), this.c)
};
o.J = function(a, c) {
  return mc.call(h, c, this.F)
};
o.call = function() {
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return y.call(h, this, c);
      case 3:
        return y.call(h, this, c, d)
    }
    b("Invalid arity: " + arguments.length)
  }
}();
o.k = function(a, c) {
  return u(cb.call(h, c)) ? Ca.call(h, a, x.call(h, c, 0), x.call(h, c, 1)) : S.call(h, xa, a, c)
};
o.j = function() {
  var a = this;
  return u(0 < a.keys.length) ? W.call(h, function(c) {
    return hc.call(h, c, a.F[c])
  }, a.keys.sort(nc)) : h
};
o.p = function() {
  return this.keys.length
};
o.e = function(a, c) {
  return kc.call(h, a, c)
};
o.r = function(a, c) {
  return new oc(c, this.keys, this.F)
};
o.l = f;
o.q = l("c");
o.L = f;
function pc(a, c) {
  return new oc(h, a, c)
}
function qc(a, c, d) {
  this.c = a;
  this.n = c;
  this.t = d
}
o = qc.prototype;
o.h = function(a) {
  return F.call(h, a)
};
o.s = function() {
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return y.call(h, a, c, h);
      case 3:
        var e = this.t[Ya.call(h, c)], g = u(e) ? lc.call(h, 2, c, e) : h;
        return u(g) ? e[g + 1] : d
    }
    b("Invalid arity: " + arguments.length)
  }
}();
o.G = function(a, c, d) {
  var a = Ya.call(h, c), e = this.t[a];
  if(u(e)) {
    var e = wa.call(h, e), g = ta.call(h, this.t);
    g[a] = e;
    a = lc.call(h, 2, c, e);
    if(u(a)) {
      return e[a + 1] = d, new qc(this.c, this.n, g)
    }
    e.push(c, d);
    return new qc(this.c, this.n + 1, g)
  }
  e = ta.call(h, this.t);
  e[a] = [c, d];
  return new qc(this.c, this.n + 1, e)
};
o.J = function(a, c) {
  var d = this.t[Ya.call(h, c)], d = u(d) ? lc.call(h, 2, c, d) : h;
  return u(d) ? f : k
};
o.call = function() {
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return y.call(h, this, c);
      case 3:
        return y.call(h, this, c, d)
    }
    b("Invalid arity: " + arguments.length)
  }
}();
o.k = function(a, c) {
  return u(cb.call(h, c)) ? Ca.call(h, a, x.call(h, c, 0), x.call(h, c, 1)) : S.call(h, xa, a, c)
};
o.j = function() {
  var a = this;
  if(u(0 < a.n)) {
    var c = eb.call(h, a.t).sort();
    return Ub.call(h, function(c) {
      return W.call(h, gc, Wb.call(h, 2, a.t[c]))
    }, c)
  }
  return h
};
o.p = l("n");
o.e = function(a, c) {
  return kc.call(h, a, c)
};
o.r = function(a, c) {
  return new qc(c, this.n, this.t)
};
o.l = f;
o.q = l("c");
o.L = f;
var rc = new qc(h, 0, db.call(h)), Pa = function() {
  function a(a) {
    var e = h;
    q(a) && (e = H(Array.prototype.slice.call(arguments, 0), 0));
    return c.call(this, e)
  }
  function c(a) {
    for(var a = I.call(h, a), c = rc;;) {
      if(u(a)) {
        var g = Ua.call(h, a), c = Va.call(h, c, J.call(h, a), Ta.call(h, a)), a = g
      }else {
        return c
      }
    }
  }
  a.b = 0;
  a.a = function(a) {
    a = I(a);
    return c.call(this, a)
  };
  return a
}();
function sc(a) {
  return I.call(h, W.call(h, J, a))
}
var tc = function() {
  function a(a) {
    var e = h;
    q(a) && (e = H(Array.prototype.slice.call(arguments, 0), 0));
    return c.call(this, e)
  }
  function c(a) {
    return u(Ib.call(h, Jb, a)) ? S.call(h, function(a, c) {
      return N.call(h, u(a) ? a : pc([], {}), c)
    }, a) : h
  }
  a.b = 0;
  a.a = function(a) {
    a = I(a);
    return c.call(this, a)
  };
  return a
}();
function uc(a, c) {
  this.c = a;
  this.H = c
}
o = uc.prototype;
o.h = function(a) {
  return F.call(h, a)
};
o.s = function() {
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return y.call(h, a, c, h);
      case 3:
        return u(Ba.call(h, this.H, c)) ? c : d
    }
    b("Invalid arity: " + arguments.length)
  }
}();
o.call = function() {
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return y.call(h, this, c);
      case 3:
        return y.call(h, this, c, d)
    }
    b("Invalid arity: " + arguments.length)
  }
}();
o.k = function(a, c) {
  return new uc(this.c, Va.call(h, this.H, c, h))
};
o.j = function() {
  return sc.call(h, this.H)
};
o.N = f;
o.p = function(a) {
  return O.call(h, I.call(h, a))
};
o.e = function(a, c) {
  var d = $a.call(h, c);
  return u(d) ? (d = B.call(h, O.call(h, a), O.call(h, c)), u(d) ? Hb.call(h, function(c) {
    return nb.call(h, a, c)
  }, c) : d) : d
};
o.r = function(a, c) {
  return new uc(c, this.H)
};
o.l = f;
o.q = l("c");
var vc = new uc(h, Pa.call(h));
function wc(a) {
  if(u(ib.call(h, a))) {
    return a
  }
  var c;
  c = jb.call(h, a);
  c = u(c) ? c : kb.call(h, a);
  if(u(c)) {
    return c = a.lastIndexOf("/"), u(0 > c) ? vb.call(h, a, 2) : vb.call(h, a, c + 1)
  }
  u("\ufdd0'else") && b(Error(T.call(h, "Doesn't support name: ", a)));
  return h
}
function xc(a) {
  var c;
  c = jb.call(h, a);
  c = u(c) ? c : kb.call(h, a);
  if(u(c)) {
    return c = a.lastIndexOf("/"), u(-1 < c) ? vb.call(h, a, 2, c) : h
  }
  b(Error(T.call(h, "Doesn't support namespace: ", a)))
}
function yc(a, c) {
  var d = a.exec(c);
  return u(B.call(h, J.call(h, d), c)) ? u(B.call(h, O.call(h, d), 1)) ? J.call(h, d) : gc.call(h, d) : h
}
function zc(a, c) {
  var d = a.exec(c);
  return u(d === h) ? h : u(B.call(h, O.call(h, d), 1)) ? J.call(h, d) : gc.call(h, d)
}
function Y(a, c, d, e, g, i) {
  return Fb.call(h, X([c]), Tb.call(h, Sb.call(h, X([d]), W.call(h, function(c) {
    return a.call(h, c, g)
  }, i))), X([e]))
}
var Z = function Ac(c, d) {
  return u(c === h) ? C.call(h, "nil") : u(void 0 === c) ? C.call(h, "#<undefined>") : u("\ufdd0'else") ? Fb.call(h, u(function() {
    var e = Q.call(h, d, "\ufdd0'meta");
    return u(e) ? (u(c) ? (e = c.l, e = u(e) ? M.call(h, c.hasOwnProperty("cljs$core$IMeta$")) : e) : e = c, e = u(e) ? f : va.call(h, Ga, c), u(e) ? Xa.call(h, c) : e) : e
  }()) ? Fb.call(h, X(["^"]), Ac.call(h, Xa.call(h, c), d), X([" "])) : h, u(function() {
    var d;
    u(c) ? (d = c.m, d = u(d) ? M.call(h, c.hasOwnProperty("cljs$core$IPrintable$")) : d) : d = c;
    return u(d) ? f : va.call(h, Na, c)
  }()) ? A.call(h, c, d) : C.call(h, "#<", T.call(h, c), ">")) : h
};
function Bc(a, c) {
  var d = J.call(h, a), e = new t, g = I.call(h, a);
  if(u(g)) {
    for(var i = J.call(h, g);;) {
      u(i === d) || e.append(" ");
      var j = I.call(h, Z.call(h, i, c));
      if(u(j)) {
        for(i = J.call(h, j);;) {
          if(e.append(i), i = L.call(h, j), u(i)) {
            j = i, i = J.call(h, j)
          }else {
            break
          }
        }
      }
      g = L.call(h, g);
      if(u(g)) {
        i = g, g = J.call(h, i), j = i, i = g, g = j
      }else {
        break
      }
    }
  }
  return e
}
function Cc(a, c) {
  return T.call(h, Bc.call(h, a, c))
}
function Dc() {
  return pc(["\ufdd0'flush-on-newline", "\ufdd0'readably", "\ufdd0'meta", "\ufdd0'dup"], {"\ufdd0'flush-on-newline":f, "\ufdd0'readably":f, "\ufdd0'meta":k, "\ufdd0'dup":k})
}
var Ec = function() {
  function a(a) {
    var d = h;
    q(a) && (d = H(Array.prototype.slice.call(arguments, 0), 0));
    return Cc.call(h, d, Dc.call(h))
  }
  a.b = 0;
  a.a = function(a) {
    a = I(a);
    return Cc.call(h, a, Dc.call(h))
  };
  return a
}();
qc.prototype.m = f;
qc.prototype.i = function(a, c) {
  return Y.call(h, function(a) {
    return Y.call(h, Z, "", " ", "", c, a)
  }, "{", ", ", "}", c, a)
};
Na.number = f;
A.number = function(a) {
  return C.call(h, T.call(h, a))
};
Qa.prototype.m = f;
Qa.prototype.i = function(a, c) {
  return Y.call(h, Z, "(", " ", ")", c, a)
};
U.prototype.m = f;
U.prototype.i = function(a, c) {
  return Y.call(h, Z, "(", " ", ")", c, a)
};
Na["boolean"] = f;
A["boolean"] = function(a) {
  return C.call(h, T.call(h, a))
};
uc.prototype.m = f;
uc.prototype.i = function(a, c) {
  return Y.call(h, Z, "#{", " ", "}", c, a)
};
Na.string = f;
A.string = function(a, c) {
  return u(jb.call(h, a)) ? C.call(h, T.call(h, ":", function() {
    var c = xc.call(h, a);
    return u(c) ? T.call(h, c, "/") : h
  }(), wc.call(h, a))) : u(kb.call(h, a)) ? C.call(h, T.call(h, function() {
    var c = xc.call(h, a);
    return u(c) ? T.call(h, c, "/") : h
  }(), wc.call(h, a))) : u("\ufdd0'else") ? C.call(h, u("\ufdd0'readably".call(h, c)) ? ma.call(h, a) : a) : h
};
ec.prototype.m = f;
ec.prototype.i = function(a, c) {
  return Y.call(h, Z, "[", " ", "]", c, a)
};
xb.prototype.m = f;
xb.prototype.i = function(a, c) {
  return Y.call(h, Z, "(", " ", ")", c, a)
};
Na.array = f;
A.array = function(a, c) {
  return Y.call(h, Z, "#<Array [", ", ", "]>", c, a)
};
Na["function"] = f;
A["function"] = function(a) {
  return C.call(h, "#<", T.call(h, a), ">")
};
yb.prototype.m = f;
yb.prototype.i = function() {
  return C.call(h, "()")
};
Ab.prototype.m = f;
Ab.prototype.i = function(a, c) {
  return Y.call(h, Z, "(", " ", ")", c, a)
};
oc.prototype.m = f;
oc.prototype.i = function(a, c) {
  return Y.call(h, function(a) {
    return Y.call(h, Z, "", " ", "", c, a)
  }, "{", ", ", "}", c, a)
};
function Fc(a, c, d, e) {
  this.state = a;
  this.c = c;
  this.Q = d;
  this.R = e
}
o = Fc.prototype;
o.h = function(a) {
  return ha.call(h, a)
};
o.M = function(a, c, d) {
  var e = I.call(h, this.R);
  if(u(e)) {
    var g = J.call(h, e);
    P.call(h, g, 0, h);
    for(P.call(h, g, 1, h);;) {
      var i = g, g = P.call(h, i, 0, h), i = P.call(h, i, 1, h);
      i.call(h, g, a, c, d);
      e = L.call(h, e);
      if(u(e)) {
        g = e, e = J.call(h, g), i = g, g = e, e = i
      }else {
        return h
      }
    }
  }else {
    return h
  }
};
o.m = f;
o.i = function(a, c) {
  return Fb.call(h, X(["#<Atom: "]), A.call(h, this.state, c), ">")
};
o.l = f;
o.q = l("c");
o.e = function(a, c) {
  return a === c
};
var Gc = function() {
  var a = h, c = function() {
    function a(d, i) {
      var j = h;
      q(i) && (j = H(Array.prototype.slice.call(arguments, 1), 0));
      return c.call(this, d, j)
    }
    function c(a, d) {
      var e = u(gb.call(h, d)) ? V.call(h, Pa, d) : d, n = Q.call(h, e, "\ufdd0'validator"), e = Q.call(h, e, "\ufdd0'meta");
      return new Fc(a, e, n, h)
    }
    a.b = 1;
    a.a = function(a) {
      var d = J(a), a = K(a);
      return c.call(this, d, a)
    };
    return a
  }(), a = function(a, e) {
    switch(arguments.length) {
      case 1:
        return new Fc(a, h, h, h);
      default:
        return c.apply(this, arguments)
    }
    b("Invalid arity: " + arguments.length)
  };
  a.b = 1;
  a.a = c.a;
  return a
}();
function Ic(a, c) {
  var d = a.Q;
  u(d) && !u(d.call(h, c)) && b(Error(T.call(h, "Assert failed: ", "Validator rejected reference state", "\n", Ec.call(h, Wa(C("\ufdd1'validate", "\ufdd1'new-value"), Pa("\ufdd0'line", 3282))))));
  d = a.state;
  a.state = c;
  Oa.call(h, a, d, c);
  return c
}
var Jc = function() {
  var a = h, c = function() {
    function a(c, d, i, j, n, p) {
      var r = h;
      q(p) && (r = H(Array.prototype.slice.call(arguments, 5), 0));
      return Ic.call(h, c, V.call(h, d, c.state, i, j, n, r))
    }
    a.b = 5;
    a.a = function(a) {
      var c = J(a), d = J(L(a)), j = J(L(L(a))), n = J(L(L(L(a)))), p = J(L(L(L(L(a))))), a = K(L(L(L(L(a)))));
      return Ic.call(h, c, V.call(h, d, c.state, j, n, p, a))
    };
    return a
  }(), a = function(a, e, g, i, j, n) {
    switch(arguments.length) {
      case 2:
        return Ic.call(h, a, e.call(h, a.state));
      case 3:
        return Ic.call(h, a, e.call(h, a.state, g));
      case 4:
        return Ic.call(h, a, e.call(h, a.state, g, i));
      case 5:
        return Ic.call(h, a, e.call(h, a.state, g, i, j));
      default:
        return c.apply(this, arguments)
    }
    b("Invalid arity: " + arguments.length)
  };
  a.b = 5;
  a.a = c.a;
  return a
}();
Gc.call(h, function() {
  return pc(["\ufdd0'parents", "\ufdd0'descendants", "\ufdd0'ancestors"], {"\ufdd0'parents":pc([], {}), "\ufdd0'descendants":pc([], {}), "\ufdd0'ancestors":pc([], {})})
}.call(h));
var Kc = function() {
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return gc.call(h, T.call(h, a).split(c));
      case 3:
        var e;
        a: {
          if(u(1 > d)) {
            e = gc.call(h, T.call(h, a).split(c))
          }else {
            for(var g = a, i = d, j = X([]);;) {
              if(u(B.call(h, i, 1))) {
                e = N.call(h, j, g);
                break a
              }
              var n = zc.call(h, c, g);
              if(u(n)) {
                var p = n, n = g.indexOf(p), p = g.substring(n + O.call(h, p)), i = i - 1, j = N.call(h, j, g.substring(0, n)), g = p
              }else {
                e = N.call(h, j, g);
                break a
              }
            }
          }
        }
        return e
    }
    b("Invalid arity: " + arguments.length)
  }
}();
function Lc(a, c) {
  for(var d = new t, e = a.length, g = 0;;) {
    if(u(B.call(h, e, g))) {
      return d.toString()
    }
    var i = a.charAt(g), j = Q.call(h, c, i);
    u(j) ? d.append(T.call(h, j)) : d.append(i);
    g += 1
  }
}
;var Mc = /([^\s\.#]+)(?:#([^s\.#]+))?(?:\.([^\s#]+))?/, Nc;
a: {
  for(var Oc = ["&", "<", ">", '"'], Pc = ["&amp;", "&lt;", "&gt;", "&quot;"], Qc = Oc.length, Rc = 0, Sc = rc;;) {
    if(u(Rc < Qc)) {
      var Tc = Rc + 1, Uc = Va.call(h, Sc, Oc[Rc], Pc[Rc]), Rc = Tc, Sc = Uc
    }else {
      Nc = Sc;
      break a
    }
  }
  Nc = void 0
}
var Vc;
a: {
  for(var Wc = I.call(h, "dd,head,a,b,body,pre,form,iframe,dl,em,fieldset,i,h1,h2,span,h3,script,html,h4,h5,h6,table,dt,div,style,label,option,ul,strong,canvas,textarea,li,ol".split(",")), Xc = vc;;) {
    if(u(M.call(h, Za.call(h, Wc)))) {
      var Yc = K.call(h, Wc), Zc = N.call(h, Xc, J.call(h, Wc)), Wc = Yc, Xc = Zc
    }else {
      Vc = Xc;
      break a
    }
  }
  Vc = void 0
}
function $c(a) {
  var c;
  c = jb.call(h, a);
  c = u(c) ? c : kb.call(h, a);
  return u(c) ? wc.call(h, a) : T.call(h, a)
}
function ad() {
  return B.call(h, "\ufdd0'xml", "\ufdd0'xml")
}
function bd(a) {
  return Lc.call(h, $c.call(h, a), Nc)
}
function cd() {
  return u(ad.call(h)) ? " />" : ">"
}
function dd(a, c) {
  return T.call(h, " ", $c.call(h, a), '="', bd.call(h, c), '"')
}
function ed(a) {
  var c = P.call(h, a, 0, h), a = P.call(h, a, 1, h);
  return u(a === f) ? u(ad.call(h)) ? dd.call(h, c, c) : T.call(h, " ", $c.call(h, c)) : u(M.call(h, a)) ? "" : u("\ufdd0'else") ? dd.call(h, c, a) : h
}
function fd(a) {
  return V.call(h, T, rb.call(h, W.call(h, ed, a)))
}
function gd(a) {
  var c = P.call(h, a, 0, h), a = tb.call(h, a, 1);
  u(M.call(h, function() {
    var a = jb.call(h, c);
    if(u(a)) {
      return a
    }
    a = kb.call(h, c);
    return u(a) ? a : ib.call(h, c)
  }())) && b(T.call(h, c, " is not a valid tag name"));
  var d = yc.call(h, Mc, $c.call(h, c));
  P.call(h, d, 0, h);
  var e = P.call(h, d, 1, h), g = P.call(h, d, 2, h), d = P.call(h, d, 3, h), g = pc(["\ufdd0'id", "\ufdd0'class"], {"\ufdd0'id":g, "\ufdd0'class":u(d) ? d.replace(".", " ") : h}), d = J.call(h, a);
  return u(bb.call(h, d)) ? X([e, tc.call(h, g, d), L.call(h, a)]) : X([e, g, a])
}
function hd(a) {
  var c = gd.call(h, a), a = P.call(h, c, 0, h), d = P.call(h, c, 1, h), c = P.call(h, c, 2, h);
  return u(u(c) ? c : Vc.call(h, a)) ? T.call(h, "<", a, fd.call(h, d), ">", id.call(h, c), "</", a, ">") : T.call(h, "<", a, fd.call(h, d), cd.call(h))
}
var id = function jd(c) {
  return u(cb.call(h, c)) ? hd.call(h, c) : u(gb.call(h, c)) ? V.call(h, T, W.call(h, jd, c)) : u("\ufdd0'else") ? $c.call(h, c) : h
};
var kd = {};
function ld(a) {
  return a.prototype.S
}
function md(a) {
  if(u(ib.call(h, a))) {
    return a
  }
  if(u(mb.call(h, a))) {
    var c = ld.call(h, a);
    return u(c) ? T.call(h, "[crateGroup=", c, "]") : a
  }
  return u(jb.call(h, a)) ? wc.call(h, a) : u("\ufdd0'else") ? a : h
}
var nd = function() {
  function a(a, e) {
    var g = h;
    q(e) && (g = H(Array.prototype.slice.call(arguments, 1), 0));
    return c.call(this, a, g)
  }
  function c(a, c) {
    var g = P.call(h, c, 0, h);
    return u(M.call(h, g)) ? jQuery.call(h, md.call(h, a)) : jQuery.call(h, md.call(h, a), g)
  }
  a.b = 1;
  a.a = function(a) {
    var e = J(a), a = K(a);
    return c.call(this, e, a)
  };
  return a
}();
o = jQuery.prototype;
o.v = function(a, c) {
  return D.call(h, kd.P, c, J.call(h, a), O.call(h, a))
};
o.v = function(a, c, d) {
  return D.call(h, kd.P, c, d, kd.o)
};
o.s = function() {
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        var e = a.slice(c, c + 1);
        return u(e) ? e : h;
      case 3:
        return x.call(h, a, c, d)
    }
    b("Invalid arity: " + arguments.length)
  }
}();
o.A = f;
o.u = function(a, c) {
  return u(c < O.call(h, a)) ? a.slice(c, c + 1) : h
};
o.u = function(a, c, d) {
  return u(c < O.call(h, a)) ? a.slice(c, c + 1) : u(void 0 === d) ? h : d
};
o.p = function(a) {
  return a.size()
};
o.C = f;
o.w = function(a) {
  return a.get(0)
};
o.z = function(a) {
  return u(1 < O.call(h, a)) ? a.slice(1) : C.call(h)
};
o.j = function(a) {
  return u(a.get(0)) ? a : h
};
o.call = function() {
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return y.call(h, this, c);
      case 3:
        return y.call(h, this, c, d)
    }
    b("Invalid arity: " + arguments.length)
  }
}();
function od(a, c) {
  return a.html(c)
}
var pd = function() {
  function a(a, e) {
    var g = h;
    q(e) && (g = H(Array.prototype.slice.call(arguments, 1), 0));
    return c.call(this, a, g)
  }
  function c(a, c) {
    var g = P.call(h, c, 0, h);
    return u(g) ? a.val(g) : a.val()
  }
  a.b = 1;
  a.a = function(a) {
    var e = J(a), a = K(a);
    return c.call(this, e, a)
  };
  return a
}();
function qd(a, c, d) {
  return a.bind(wc.call(h, c), d)
}
;function rd(a) {
  return Kc.call(h, a, "\n")
}
var sd = nd.call(h, "\ufdd0'#input-area");
function td() {
  return rd.call(h, pd.call(h, sd))
}
function ud(a) {
  return T.call(h, "<ul", "", ">", V.call(h, T, function() {
    return function d(a) {
      return new U(h, k, function() {
        for(;;) {
          if(u(I.call(h, a))) {
            var g = J.call(h, a);
            return G.call(h, T.call(h, function() {
              var a = g;
              return u(bb.call(h, a)) ? T.call(h, "<li", fd.call(h, tc.call(h, pc(["\ufdd0'id", "\ufdd0'class"], {"\ufdd0'id":h, "\ufdd0'class":h}), a)), ">", "</li>") : T.call(h, "<li>", id.call(h, a), "</li>")
            }()), d.call(h, K.call(h, a)))
          }
          return h
        }
      })
    }.call(h, a)
  }()), "</ul>")
}
var vd = nd.call(h, "\ufdd0'#mirrored-text");
function wd() {
  return od.call(h, vd, ud.call(h, td.call(h)))
}
ca("roulette.core.init", function() {
  console.log("Init starting");
  wd.call(h);
  return qd.call(h, sd, "\ufdd0'input", wd)
});
var xd = nd.call(h, "\ufdd0'#current-item"), yd = Gc.call(h, h);
function zd() {
  return Ic.call(h, yd, Pb.call(h, td.call(h)))
}
function Ad() {
  return Jc.call(h, yd, K)
}
function Bd() {
  return od.call(h, xd, J.call(h, Ad.call(h)))
}
ca("roulette.core.log_next_BANG_", Bd);
var Cd = Gc.call(h, h);
ca("roulette.core.startroulette", function() {
  console.log("Starting roulette");
  zd.call(h);
  return Jc.call(h, Cd, function(a) {
    u(a) && window.clearTimeout(a);
    return window.setInterval(Bd, 50)
  })
});
ca("roulette.core.stoproulette", function() {
  return Jc.call(h, Cd, function(a) {
    u(a) && window.clearTimeout(a);
    return h
  })
});

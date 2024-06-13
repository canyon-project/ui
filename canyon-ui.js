import * as I from "react";
import ce, { createContext as yt, useContext as xt, useEffect as wt } from "react";
import { Card as fr, Space as Ct, Button as X } from "antd";
function Et(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Pe = { exports: {} }, K = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cr;
function Rt() {
  if (cr)
    return K;
  cr = 1;
  var e = ce, n = Symbol.for("react.element"), r = Symbol.for("react.fragment"), a = Object.prototype.hasOwnProperty, l = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function u(f, c, y) {
    var g, h = {}, R = null, P = null;
    y !== void 0 && (R = "" + y), c.key !== void 0 && (R = "" + c.key), c.ref !== void 0 && (P = c.ref);
    for (g in c)
      a.call(c, g) && !i.hasOwnProperty(g) && (h[g] = c[g]);
    if (f && f.defaultProps)
      for (g in c = f.defaultProps, c)
        h[g] === void 0 && (h[g] = c[g]);
    return { $$typeof: n, type: f, key: R, ref: P, props: h, _owner: l.current };
  }
  return K.Fragment = r, K.jsx = u, K.jsxs = u, K;
}
var J = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var dr;
function jt() {
  return dr || (dr = 1, process.env.NODE_ENV !== "production" && function() {
    var e = ce, n = Symbol.for("react.element"), r = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), l = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), u = Symbol.for("react.provider"), f = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), y = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), R = Symbol.for("react.lazy"), P = Symbol.for("react.offscreen"), re = Symbol.iterator, B = "@@iterator";
    function pe(t) {
      if (t === null || typeof t != "object")
        return null;
      var o = re && t[re] || t[B];
      return typeof o == "function" ? o : null;
    }
    var D = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function E(t) {
      {
        for (var o = arguments.length, s = new Array(o > 1 ? o - 1 : 0), d = 1; d < o; d++)
          s[d - 1] = arguments[d];
        me("error", t, s);
      }
    }
    function me(t, o, s) {
      {
        var d = D.ReactDebugCurrentFrame, b = d.getStackAddendum();
        b !== "" && (o += "%s", s = s.concat([b]));
        var x = s.map(function(v) {
          return String(v);
        });
        x.unshift("Warning: " + o), Function.prototype.apply.call(console[t], console, x);
      }
    }
    var ve = !1, $r = !1, Vr = !1, Yr = !1, Ur = !1, $e;
    $e = Symbol.for("react.module.reference");
    function Br(t) {
      return !!(typeof t == "string" || typeof t == "function" || t === a || t === i || Ur || t === l || t === y || t === g || Yr || t === P || ve || $r || Vr || typeof t == "object" && t !== null && (t.$$typeof === R || t.$$typeof === h || t.$$typeof === u || t.$$typeof === f || t.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      t.$$typeof === $e || t.getModuleId !== void 0));
    }
    function qr(t, o, s) {
      var d = t.displayName;
      if (d)
        return d;
      var b = o.displayName || o.name || "";
      return b !== "" ? s + "(" + b + ")" : s;
    }
    function Ve(t) {
      return t.displayName || "Context";
    }
    function A(t) {
      if (t == null)
        return null;
      if (typeof t.tag == "number" && E("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string")
        return t;
      switch (t) {
        case a:
          return "Fragment";
        case r:
          return "Portal";
        case i:
          return "Profiler";
        case l:
          return "StrictMode";
        case y:
          return "Suspense";
        case g:
          return "SuspenseList";
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case f:
            var o = t;
            return Ve(o) + ".Consumer";
          case u:
            var s = t;
            return Ve(s._context) + ".Provider";
          case c:
            return qr(t, t.render, "ForwardRef");
          case h:
            var d = t.displayName || null;
            return d !== null ? d : A(t.type) || "Memo";
          case R: {
            var b = t, x = b._payload, v = b._init;
            try {
              return A(v(x));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var W = Object.assign, q = 0, Ye, Ue, Be, qe, He, ze, Ke;
    function Je() {
    }
    Je.__reactDisabledLog = !0;
    function Hr() {
      {
        if (q === 0) {
          Ye = console.log, Ue = console.info, Be = console.warn, qe = console.error, He = console.group, ze = console.groupCollapsed, Ke = console.groupEnd;
          var t = {
            configurable: !0,
            enumerable: !0,
            value: Je,
            writable: !0
          };
          Object.defineProperties(console, {
            info: t,
            log: t,
            warn: t,
            error: t,
            group: t,
            groupCollapsed: t,
            groupEnd: t
          });
        }
        q++;
      }
    }
    function zr() {
      {
        if (q--, q === 0) {
          var t = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: W({}, t, {
              value: Ye
            }),
            info: W({}, t, {
              value: Ue
            }),
            warn: W({}, t, {
              value: Be
            }),
            error: W({}, t, {
              value: qe
            }),
            group: W({}, t, {
              value: He
            }),
            groupCollapsed: W({}, t, {
              value: ze
            }),
            groupEnd: W({}, t, {
              value: Ke
            })
          });
        }
        q < 0 && E("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ge = D.ReactCurrentDispatcher, be;
    function te(t, o, s) {
      {
        if (be === void 0)
          try {
            throw Error();
          } catch (b) {
            var d = b.stack.trim().match(/\n( *(at )?)/);
            be = d && d[1] || "";
          }
        return `
` + be + t;
      }
    }
    var he = !1, ne;
    {
      var Kr = typeof WeakMap == "function" ? WeakMap : Map;
      ne = new Kr();
    }
    function Ge(t, o) {
      if (!t || he)
        return "";
      {
        var s = ne.get(t);
        if (s !== void 0)
          return s;
      }
      var d;
      he = !0;
      var b = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var x;
      x = ge.current, ge.current = null, Hr();
      try {
        if (o) {
          var v = function() {
            throw Error();
          };
          if (Object.defineProperty(v.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(v, []);
            } catch (S) {
              d = S;
            }
            Reflect.construct(t, [], v);
          } else {
            try {
              v.call();
            } catch (S) {
              d = S;
            }
            t.call(v.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (S) {
            d = S;
          }
          t();
        }
      } catch (S) {
        if (S && d && typeof S.stack == "string") {
          for (var m = S.stack.split(`
`), j = d.stack.split(`
`), w = m.length - 1, C = j.length - 1; w >= 1 && C >= 0 && m[w] !== j[C]; )
            C--;
          for (; w >= 1 && C >= 0; w--, C--)
            if (m[w] !== j[C]) {
              if (w !== 1 || C !== 1)
                do
                  if (w--, C--, C < 0 || m[w] !== j[C]) {
                    var O = `
` + m[w].replace(" at new ", " at ");
                    return t.displayName && O.includes("<anonymous>") && (O = O.replace("<anonymous>", t.displayName)), typeof t == "function" && ne.set(t, O), O;
                  }
                while (w >= 1 && C >= 0);
              break;
            }
        }
      } finally {
        he = !1, ge.current = x, zr(), Error.prepareStackTrace = b;
      }
      var Y = t ? t.displayName || t.name : "", L = Y ? te(Y) : "";
      return typeof t == "function" && ne.set(t, L), L;
    }
    function Jr(t, o, s) {
      return Ge(t, !1);
    }
    function Gr(t) {
      var o = t.prototype;
      return !!(o && o.isReactComponent);
    }
    function ae(t, o, s) {
      if (t == null)
        return "";
      if (typeof t == "function")
        return Ge(t, Gr(t));
      if (typeof t == "string")
        return te(t);
      switch (t) {
        case y:
          return te("Suspense");
        case g:
          return te("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case c:
            return Jr(t.render);
          case h:
            return ae(t.type, o, s);
          case R: {
            var d = t, b = d._payload, x = d._init;
            try {
              return ae(x(b), o, s);
            } catch {
            }
          }
        }
      return "";
    }
    var H = Object.prototype.hasOwnProperty, Xe = {}, Qe = D.ReactDebugCurrentFrame;
    function oe(t) {
      if (t) {
        var o = t._owner, s = ae(t.type, t._source, o ? o.type : null);
        Qe.setExtraStackFrame(s);
      } else
        Qe.setExtraStackFrame(null);
    }
    function Xr(t, o, s, d, b) {
      {
        var x = Function.call.bind(H);
        for (var v in t)
          if (x(t, v)) {
            var m = void 0;
            try {
              if (typeof t[v] != "function") {
                var j = Error((d || "React class") + ": " + s + " type `" + v + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[v] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw j.name = "Invariant Violation", j;
              }
              m = t[v](o, v, d, s, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (w) {
              m = w;
            }
            m && !(m instanceof Error) && (oe(b), E("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", d || "React class", s, v, typeof m), oe(null)), m instanceof Error && !(m.message in Xe) && (Xe[m.message] = !0, oe(b), E("Failed %s type: %s", s, m.message), oe(null));
          }
      }
    }
    var Qr = Array.isArray;
    function ye(t) {
      return Qr(t);
    }
    function Zr(t) {
      {
        var o = typeof Symbol == "function" && Symbol.toStringTag, s = o && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return s;
      }
    }
    function et(t) {
      try {
        return Ze(t), !1;
      } catch {
        return !0;
      }
    }
    function Ze(t) {
      return "" + t;
    }
    function er(t) {
      if (et(t))
        return E("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Zr(t)), Ze(t);
    }
    var z = D.ReactCurrentOwner, rt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, rr, tr, xe;
    xe = {};
    function tt(t) {
      if (H.call(t, "ref")) {
        var o = Object.getOwnPropertyDescriptor(t, "ref").get;
        if (o && o.isReactWarning)
          return !1;
      }
      return t.ref !== void 0;
    }
    function nt(t) {
      if (H.call(t, "key")) {
        var o = Object.getOwnPropertyDescriptor(t, "key").get;
        if (o && o.isReactWarning)
          return !1;
      }
      return t.key !== void 0;
    }
    function at(t, o) {
      if (typeof t.ref == "string" && z.current && o && z.current.stateNode !== o) {
        var s = A(z.current.type);
        xe[s] || (E('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', A(z.current.type), t.ref), xe[s] = !0);
      }
    }
    function ot(t, o) {
      {
        var s = function() {
          rr || (rr = !0, E("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", o));
        };
        s.isReactWarning = !0, Object.defineProperty(t, "key", {
          get: s,
          configurable: !0
        });
      }
    }
    function it(t, o) {
      {
        var s = function() {
          tr || (tr = !0, E("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", o));
        };
        s.isReactWarning = !0, Object.defineProperty(t, "ref", {
          get: s,
          configurable: !0
        });
      }
    }
    var st = function(t, o, s, d, b, x, v) {
      var m = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: n,
        // Built-in properties that belong on the element
        type: t,
        key: o,
        ref: s,
        props: v,
        // Record the component responsible for creating this element.
        _owner: x
      };
      return m._store = {}, Object.defineProperty(m._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(m, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: d
      }), Object.defineProperty(m, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: b
      }), Object.freeze && (Object.freeze(m.props), Object.freeze(m)), m;
    };
    function lt(t, o, s, d, b) {
      {
        var x, v = {}, m = null, j = null;
        s !== void 0 && (er(s), m = "" + s), nt(o) && (er(o.key), m = "" + o.key), tt(o) && (j = o.ref, at(o, b));
        for (x in o)
          H.call(o, x) && !rt.hasOwnProperty(x) && (v[x] = o[x]);
        if (t && t.defaultProps) {
          var w = t.defaultProps;
          for (x in w)
            v[x] === void 0 && (v[x] = w[x]);
        }
        if (m || j) {
          var C = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
          m && ot(v, C), j && it(v, C);
        }
        return st(t, m, j, b, d, z.current, v);
      }
    }
    var we = D.ReactCurrentOwner, nr = D.ReactDebugCurrentFrame;
    function V(t) {
      if (t) {
        var o = t._owner, s = ae(t.type, t._source, o ? o.type : null);
        nr.setExtraStackFrame(s);
      } else
        nr.setExtraStackFrame(null);
    }
    var Ce;
    Ce = !1;
    function Ee(t) {
      return typeof t == "object" && t !== null && t.$$typeof === n;
    }
    function ar() {
      {
        if (we.current) {
          var t = A(we.current.type);
          if (t)
            return `

Check the render method of \`` + t + "`.";
        }
        return "";
      }
    }
    function ut(t) {
      return "";
    }
    var or = {};
    function ft(t) {
      {
        var o = ar();
        if (!o) {
          var s = typeof t == "string" ? t : t.displayName || t.name;
          s && (o = `

Check the top-level render call using <` + s + ">.");
        }
        return o;
      }
    }
    function ir(t, o) {
      {
        if (!t._store || t._store.validated || t.key != null)
          return;
        t._store.validated = !0;
        var s = ft(o);
        if (or[s])
          return;
        or[s] = !0;
        var d = "";
        t && t._owner && t._owner !== we.current && (d = " It was passed a child from " + A(t._owner.type) + "."), V(t), E('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', s, d), V(null);
      }
    }
    function sr(t, o) {
      {
        if (typeof t != "object")
          return;
        if (ye(t))
          for (var s = 0; s < t.length; s++) {
            var d = t[s];
            Ee(d) && ir(d, o);
          }
        else if (Ee(t))
          t._store && (t._store.validated = !0);
        else if (t) {
          var b = pe(t);
          if (typeof b == "function" && b !== t.entries)
            for (var x = b.call(t), v; !(v = x.next()).done; )
              Ee(v.value) && ir(v.value, o);
        }
      }
    }
    function ct(t) {
      {
        var o = t.type;
        if (o == null || typeof o == "string")
          return;
        var s;
        if (typeof o == "function")
          s = o.propTypes;
        else if (typeof o == "object" && (o.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        o.$$typeof === h))
          s = o.propTypes;
        else
          return;
        if (s) {
          var d = A(o);
          Xr(s, t.props, "prop", d, t);
        } else if (o.PropTypes !== void 0 && !Ce) {
          Ce = !0;
          var b = A(o);
          E("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", b || "Unknown");
        }
        typeof o.getDefaultProps == "function" && !o.getDefaultProps.isReactClassApproved && E("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function dt(t) {
      {
        for (var o = Object.keys(t.props), s = 0; s < o.length; s++) {
          var d = o[s];
          if (d !== "children" && d !== "key") {
            V(t), E("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", d), V(null);
            break;
          }
        }
        t.ref !== null && (V(t), E("Invalid attribute `ref` supplied to `React.Fragment`."), V(null));
      }
    }
    var lr = {};
    function ur(t, o, s, d, b, x) {
      {
        var v = Br(t);
        if (!v) {
          var m = "";
          (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (m += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var j = ut();
          j ? m += j : m += ar();
          var w;
          t === null ? w = "null" : ye(t) ? w = "array" : t !== void 0 && t.$$typeof === n ? (w = "<" + (A(t.type) || "Unknown") + " />", m = " Did you accidentally export a JSX literal instead of a component?") : w = typeof t, E("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", w, m);
        }
        var C = lt(t, o, s, b, x);
        if (C == null)
          return C;
        if (v) {
          var O = o.children;
          if (O !== void 0)
            if (d)
              if (ye(O)) {
                for (var Y = 0; Y < O.length; Y++)
                  sr(O[Y], t);
                Object.freeze && Object.freeze(O);
              } else
                E("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              sr(O, t);
        }
        if (H.call(o, "key")) {
          var L = A(t), S = Object.keys(o).filter(function(ht) {
            return ht !== "key";
          }), Re = S.length > 0 ? "{key: someKey, " + S.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!lr[L + Re]) {
            var bt = S.length > 0 ? "{" + S.join(": ..., ") + ": ...}" : "{}";
            E(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Re, L, bt, L), lr[L + Re] = !0;
          }
        }
        return t === a ? dt(C) : ct(C), C;
      }
    }
    function pt(t, o, s) {
      return ur(t, o, s, !0);
    }
    function mt(t, o, s) {
      return ur(t, o, s, !1);
    }
    var vt = mt, gt = pt;
    J.Fragment = a, J.jsx = vt, J.jsxs = gt;
  }()), J;
}
process.env.NODE_ENV === "production" ? Pe.exports = Rt() : Pe.exports = jt();
var p = Pe.exports, Sr = /* @__PURE__ */ yt({});
function Z() {
  return Z = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        ({}).hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Z.apply(null, arguments);
}
function St(e) {
  if (Array.isArray(e))
    return e;
}
function Tt(e, n) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var a, l, i, u, f = [], c = !0, y = !1;
    try {
      if (i = (r = r.call(e)).next, n !== 0)
        for (; !(c = (a = i.call(r)).done) && (f.push(a.value), f.length !== n); c = !0)
          ;
    } catch (g) {
      y = !0, l = g;
    } finally {
      try {
        if (!c && r.return != null && (u = r.return(), Object(u) !== u))
          return;
      } finally {
        if (y)
          throw l;
      }
    }
    return f;
  }
}
function pr(e, n) {
  (n == null || n > e.length) && (n = e.length);
  for (var r = 0, a = Array(n); r < n; r++)
    a[r] = e[r];
  return a;
}
function Ot(e, n) {
  if (e) {
    if (typeof e == "string")
      return pr(e, n);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? pr(e, n) : void 0;
  }
}
function _t() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Tr(e, n) {
  return St(e) || Tt(e, n) || Ot(e, n) || _t();
}
function $(e) {
  "@babel/helpers - typeof";
  return $ = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
    return typeof n;
  } : function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, $(e);
}
function kt(e, n) {
  if ($(e) != "object" || !e)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var a = r.call(e, n || "default");
    if ($(a) != "object")
      return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (n === "string" ? String : Number)(e);
}
function Pt(e) {
  var n = kt(e, "string");
  return $(n) == "symbol" ? n : n + "";
}
function Ae(e, n, r) {
  return (n = Pt(n)) in e ? Object.defineProperty(e, n, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[n] = r, e;
}
function At(e, n) {
  if (e == null)
    return {};
  var r = {};
  for (var a in e)
    if ({}.hasOwnProperty.call(e, a)) {
      if (n.indexOf(a) >= 0)
        continue;
      r[a] = e[a];
    }
  return r;
}
function Or(e, n) {
  if (e == null)
    return {};
  var r, a, l = At(e, n);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      r = i[a], n.indexOf(r) >= 0 || {}.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
  }
  return l;
}
var _r = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(e) {
  (function() {
    var n = {}.hasOwnProperty;
    function r() {
      for (var i = "", u = 0; u < arguments.length; u++) {
        var f = arguments[u];
        f && (i = l(i, a(f)));
      }
      return i;
    }
    function a(i) {
      if (typeof i == "string" || typeof i == "number")
        return i;
      if (typeof i != "object")
        return "";
      if (Array.isArray(i))
        return r.apply(null, i);
      if (i.toString !== Object.prototype.toString && !i.toString.toString().includes("[native code]"))
        return i.toString();
      var u = "";
      for (var f in i)
        n.call(i, f) && i[f] && (u = l(u, f));
      return u;
    }
    function l(i, u) {
      return u ? i ? i + " " + u : i + u : i;
    }
    e.exports ? (r.default = r, e.exports = r) : window.classNames = r;
  })();
})(_r);
var Nt = _r.exports;
const Ft = /* @__PURE__ */ Et(Nt);
function _(e, n) {
  It(e) && (e = "100%");
  var r = Dt(e);
  return e = n === 360 ? e : Math.min(n, Math.max(0, parseFloat(e))), r && (e = parseInt(String(e * n), 10) / 100), Math.abs(e - n) < 1e-6 ? 1 : (n === 360 ? e = (e < 0 ? e % n + n : e % n) / parseFloat(String(n)) : e = e % n / parseFloat(String(n)), e);
}
function It(e) {
  return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1;
}
function Dt(e) {
  return typeof e == "string" && e.indexOf("%") !== -1;
}
function Mt(e) {
  return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function ie(e) {
  return e <= 1 ? "".concat(Number(e) * 100, "%") : e;
}
function je(e) {
  return e.length === 1 ? "0" + e : String(e);
}
function Wt(e, n, r) {
  return {
    r: _(e, 255) * 255,
    g: _(n, 255) * 255,
    b: _(r, 255) * 255
  };
}
function Se(e, n, r) {
  return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + (n - e) * (6 * r) : r < 1 / 2 ? n : r < 2 / 3 ? e + (n - e) * (2 / 3 - r) * 6 : e;
}
function Lt(e, n, r) {
  var a, l, i;
  if (e = _(e, 360), n = _(n, 100), r = _(r, 100), n === 0)
    l = r, i = r, a = r;
  else {
    var u = r < 0.5 ? r * (1 + n) : r + n - r * n, f = 2 * r - u;
    a = Se(f, u, e + 1 / 3), l = Se(f, u, e), i = Se(f, u, e - 1 / 3);
  }
  return { r: a * 255, g: l * 255, b: i * 255 };
}
function $t(e, n, r) {
  e = _(e, 255), n = _(n, 255), r = _(r, 255);
  var a = Math.max(e, n, r), l = Math.min(e, n, r), i = 0, u = a, f = a - l, c = a === 0 ? 0 : f / a;
  if (a === l)
    i = 0;
  else {
    switch (a) {
      case e:
        i = (n - r) / f + (n < r ? 6 : 0);
        break;
      case n:
        i = (r - e) / f + 2;
        break;
      case r:
        i = (e - n) / f + 4;
        break;
    }
    i /= 6;
  }
  return { h: i, s: c, v: u };
}
function Vt(e, n, r) {
  e = _(e, 360) * 6, n = _(n, 100), r = _(r, 100);
  var a = Math.floor(e), l = e - a, i = r * (1 - n), u = r * (1 - l * n), f = r * (1 - (1 - l) * n), c = a % 6, y = [r, u, i, i, f, r][c], g = [f, r, r, u, i, i][c], h = [i, i, f, r, r, u][c];
  return { r: y * 255, g: g * 255, b: h * 255 };
}
function Yt(e, n, r, a) {
  var l = [
    je(Math.round(e).toString(16)),
    je(Math.round(n).toString(16)),
    je(Math.round(r).toString(16))
  ];
  return l.join("");
}
function mr(e) {
  return T(e) / 255;
}
function T(e) {
  return parseInt(e, 16);
}
var vr = {
  aliceblue: "#f0f8ff",
  antiquewhite: "#faebd7",
  aqua: "#00ffff",
  aquamarine: "#7fffd4",
  azure: "#f0ffff",
  beige: "#f5f5dc",
  bisque: "#ffe4c4",
  black: "#000000",
  blanchedalmond: "#ffebcd",
  blue: "#0000ff",
  blueviolet: "#8a2be2",
  brown: "#a52a2a",
  burlywood: "#deb887",
  cadetblue: "#5f9ea0",
  chartreuse: "#7fff00",
  chocolate: "#d2691e",
  coral: "#ff7f50",
  cornflowerblue: "#6495ed",
  cornsilk: "#fff8dc",
  crimson: "#dc143c",
  cyan: "#00ffff",
  darkblue: "#00008b",
  darkcyan: "#008b8b",
  darkgoldenrod: "#b8860b",
  darkgray: "#a9a9a9",
  darkgreen: "#006400",
  darkgrey: "#a9a9a9",
  darkkhaki: "#bdb76b",
  darkmagenta: "#8b008b",
  darkolivegreen: "#556b2f",
  darkorange: "#ff8c00",
  darkorchid: "#9932cc",
  darkred: "#8b0000",
  darksalmon: "#e9967a",
  darkseagreen: "#8fbc8f",
  darkslateblue: "#483d8b",
  darkslategray: "#2f4f4f",
  darkslategrey: "#2f4f4f",
  darkturquoise: "#00ced1",
  darkviolet: "#9400d3",
  deeppink: "#ff1493",
  deepskyblue: "#00bfff",
  dimgray: "#696969",
  dimgrey: "#696969",
  dodgerblue: "#1e90ff",
  firebrick: "#b22222",
  floralwhite: "#fffaf0",
  forestgreen: "#228b22",
  fuchsia: "#ff00ff",
  gainsboro: "#dcdcdc",
  ghostwhite: "#f8f8ff",
  goldenrod: "#daa520",
  gold: "#ffd700",
  gray: "#808080",
  green: "#008000",
  greenyellow: "#adff2f",
  grey: "#808080",
  honeydew: "#f0fff0",
  hotpink: "#ff69b4",
  indianred: "#cd5c5c",
  indigo: "#4b0082",
  ivory: "#fffff0",
  khaki: "#f0e68c",
  lavenderblush: "#fff0f5",
  lavender: "#e6e6fa",
  lawngreen: "#7cfc00",
  lemonchiffon: "#fffacd",
  lightblue: "#add8e6",
  lightcoral: "#f08080",
  lightcyan: "#e0ffff",
  lightgoldenrodyellow: "#fafad2",
  lightgray: "#d3d3d3",
  lightgreen: "#90ee90",
  lightgrey: "#d3d3d3",
  lightpink: "#ffb6c1",
  lightsalmon: "#ffa07a",
  lightseagreen: "#20b2aa",
  lightskyblue: "#87cefa",
  lightslategray: "#778899",
  lightslategrey: "#778899",
  lightsteelblue: "#b0c4de",
  lightyellow: "#ffffe0",
  lime: "#00ff00",
  limegreen: "#32cd32",
  linen: "#faf0e6",
  magenta: "#ff00ff",
  maroon: "#800000",
  mediumaquamarine: "#66cdaa",
  mediumblue: "#0000cd",
  mediumorchid: "#ba55d3",
  mediumpurple: "#9370db",
  mediumseagreen: "#3cb371",
  mediumslateblue: "#7b68ee",
  mediumspringgreen: "#00fa9a",
  mediumturquoise: "#48d1cc",
  mediumvioletred: "#c71585",
  midnightblue: "#191970",
  mintcream: "#f5fffa",
  mistyrose: "#ffe4e1",
  moccasin: "#ffe4b5",
  navajowhite: "#ffdead",
  navy: "#000080",
  oldlace: "#fdf5e6",
  olive: "#808000",
  olivedrab: "#6b8e23",
  orange: "#ffa500",
  orangered: "#ff4500",
  orchid: "#da70d6",
  palegoldenrod: "#eee8aa",
  palegreen: "#98fb98",
  paleturquoise: "#afeeee",
  palevioletred: "#db7093",
  papayawhip: "#ffefd5",
  peachpuff: "#ffdab9",
  peru: "#cd853f",
  pink: "#ffc0cb",
  plum: "#dda0dd",
  powderblue: "#b0e0e6",
  purple: "#800080",
  rebeccapurple: "#663399",
  red: "#ff0000",
  rosybrown: "#bc8f8f",
  royalblue: "#4169e1",
  saddlebrown: "#8b4513",
  salmon: "#fa8072",
  sandybrown: "#f4a460",
  seagreen: "#2e8b57",
  seashell: "#fff5ee",
  sienna: "#a0522d",
  silver: "#c0c0c0",
  skyblue: "#87ceeb",
  slateblue: "#6a5acd",
  slategray: "#708090",
  slategrey: "#708090",
  snow: "#fffafa",
  springgreen: "#00ff7f",
  steelblue: "#4682b4",
  tan: "#d2b48c",
  teal: "#008080",
  thistle: "#d8bfd8",
  tomato: "#ff6347",
  turquoise: "#40e0d0",
  violet: "#ee82ee",
  wheat: "#f5deb3",
  white: "#ffffff",
  whitesmoke: "#f5f5f5",
  yellow: "#ffff00",
  yellowgreen: "#9acd32"
};
function G(e) {
  var n = { r: 0, g: 0, b: 0 }, r = 1, a = null, l = null, i = null, u = !1, f = !1;
  return typeof e == "string" && (e = qt(e)), typeof e == "object" && (F(e.r) && F(e.g) && F(e.b) ? (n = Wt(e.r, e.g, e.b), u = !0, f = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : F(e.h) && F(e.s) && F(e.v) ? (a = ie(e.s), l = ie(e.v), n = Vt(e.h, a, l), u = !0, f = "hsv") : F(e.h) && F(e.s) && F(e.l) && (a = ie(e.s), i = ie(e.l), n = Lt(e.h, a, i), u = !0, f = "hsl"), Object.prototype.hasOwnProperty.call(e, "a") && (r = e.a)), r = Mt(r), {
    ok: u,
    format: e.format || f,
    r: Math.min(255, Math.max(n.r, 0)),
    g: Math.min(255, Math.max(n.g, 0)),
    b: Math.min(255, Math.max(n.b, 0)),
    a: r
  };
}
var Ut = "[-\\+]?\\d+%?", Bt = "[-\\+]?\\d*\\.\\d+%?", M = "(?:".concat(Bt, ")|(?:").concat(Ut, ")"), Te = "[\\s|\\(]+(".concat(M, ")[,|\\s]+(").concat(M, ")[,|\\s]+(").concat(M, ")\\s*\\)?"), Oe = "[\\s|\\(]+(".concat(M, ")[,|\\s]+(").concat(M, ")[,|\\s]+(").concat(M, ")[,|\\s]+(").concat(M, ")\\s*\\)?"), k = {
  CSS_UNIT: new RegExp(M),
  rgb: new RegExp("rgb" + Te),
  rgba: new RegExp("rgba" + Oe),
  hsl: new RegExp("hsl" + Te),
  hsla: new RegExp("hsla" + Oe),
  hsv: new RegExp("hsv" + Te),
  hsva: new RegExp("hsva" + Oe),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function qt(e) {
  if (e = e.trim().toLowerCase(), e.length === 0)
    return !1;
  var n = !1;
  if (vr[e])
    e = vr[e], n = !0;
  else if (e === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var r = k.rgb.exec(e);
  return r ? { r: r[1], g: r[2], b: r[3] } : (r = k.rgba.exec(e), r ? { r: r[1], g: r[2], b: r[3], a: r[4] } : (r = k.hsl.exec(e), r ? { h: r[1], s: r[2], l: r[3] } : (r = k.hsla.exec(e), r ? { h: r[1], s: r[2], l: r[3], a: r[4] } : (r = k.hsv.exec(e), r ? { h: r[1], s: r[2], v: r[3] } : (r = k.hsva.exec(e), r ? { h: r[1], s: r[2], v: r[3], a: r[4] } : (r = k.hex8.exec(e), r ? {
    r: T(r[1]),
    g: T(r[2]),
    b: T(r[3]),
    a: mr(r[4]),
    format: n ? "name" : "hex8"
  } : (r = k.hex6.exec(e), r ? {
    r: T(r[1]),
    g: T(r[2]),
    b: T(r[3]),
    format: n ? "name" : "hex"
  } : (r = k.hex4.exec(e), r ? {
    r: T(r[1] + r[1]),
    g: T(r[2] + r[2]),
    b: T(r[3] + r[3]),
    a: mr(r[4] + r[4]),
    format: n ? "name" : "hex8"
  } : (r = k.hex3.exec(e), r ? {
    r: T(r[1] + r[1]),
    g: T(r[2] + r[2]),
    b: T(r[3] + r[3]),
    format: n ? "name" : "hex"
  } : !1)))))))));
}
function F(e) {
  return !!k.CSS_UNIT.exec(String(e));
}
var se = 2, gr = 0.16, Ht = 0.05, zt = 0.05, Kt = 0.15, kr = 5, Pr = 4, Jt = [{
  index: 7,
  opacity: 0.15
}, {
  index: 6,
  opacity: 0.25
}, {
  index: 5,
  opacity: 0.3
}, {
  index: 5,
  opacity: 0.45
}, {
  index: 5,
  opacity: 0.65
}, {
  index: 5,
  opacity: 0.85
}, {
  index: 4,
  opacity: 0.9
}, {
  index: 3,
  opacity: 0.95
}, {
  index: 2,
  opacity: 0.97
}, {
  index: 1,
  opacity: 0.98
}];
function br(e) {
  var n = e.r, r = e.g, a = e.b, l = $t(n, r, a);
  return {
    h: l.h * 360,
    s: l.s,
    v: l.v
  };
}
function le(e) {
  var n = e.r, r = e.g, a = e.b;
  return "#".concat(Yt(n, r, a));
}
function Gt(e, n, r) {
  var a = r / 100, l = {
    r: (n.r - e.r) * a + e.r,
    g: (n.g - e.g) * a + e.g,
    b: (n.b - e.b) * a + e.b
  };
  return l;
}
function hr(e, n, r) {
  var a;
  return Math.round(e.h) >= 60 && Math.round(e.h) <= 240 ? a = r ? Math.round(e.h) - se * n : Math.round(e.h) + se * n : a = r ? Math.round(e.h) + se * n : Math.round(e.h) - se * n, a < 0 ? a += 360 : a >= 360 && (a -= 360), a;
}
function yr(e, n, r) {
  if (e.h === 0 && e.s === 0)
    return e.s;
  var a;
  return r ? a = e.s - gr * n : n === Pr ? a = e.s + gr : a = e.s + Ht * n, a > 1 && (a = 1), r && n === kr && a > 0.1 && (a = 0.1), a < 0.06 && (a = 0.06), Number(a.toFixed(2));
}
function xr(e, n, r) {
  var a;
  return r ? a = e.v + zt * n : a = e.v - Kt * n, a > 1 && (a = 1), Number(a.toFixed(2));
}
function Ne(e) {
  for (var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = [], a = G(e), l = kr; l > 0; l -= 1) {
    var i = br(a), u = le(G({
      h: hr(i, l, !0),
      s: yr(i, l, !0),
      v: xr(i, l, !0)
    }));
    r.push(u);
  }
  r.push(le(a));
  for (var f = 1; f <= Pr; f += 1) {
    var c = br(a), y = le(G({
      h: hr(c, f),
      s: yr(c, f),
      v: xr(c, f)
    }));
    r.push(y);
  }
  return n.theme === "dark" ? Jt.map(function(g) {
    var h = g.index, R = g.opacity, P = le(Gt(G(n.backgroundColor || "#141414"), G(r[h]), R * 100));
    return P;
  }) : r;
}
var _e = {
  red: "#F5222D",
  volcano: "#FA541C",
  orange: "#FA8C16",
  gold: "#FAAD14",
  yellow: "#FADB14",
  lime: "#A0D911",
  green: "#52C41A",
  cyan: "#13C2C2",
  blue: "#1677FF",
  geekblue: "#2F54EB",
  purple: "#722ED1",
  magenta: "#EB2F96",
  grey: "#666666"
}, ue = {}, ke = {};
Object.keys(_e).forEach(function(e) {
  ue[e] = Ne(_e[e]), ue[e].primary = ue[e][5], ke[e] = Ne(_e[e], {
    theme: "dark",
    backgroundColor: "#141414"
  }), ke[e].primary = ke[e][5];
});
var Xt = ue.blue;
function wr(e, n) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    n && (a = a.filter(function(l) {
      return Object.getOwnPropertyDescriptor(e, l).enumerable;
    })), r.push.apply(r, a);
  }
  return r;
}
function N(e) {
  for (var n = 1; n < arguments.length; n++) {
    var r = arguments[n] != null ? arguments[n] : {};
    n % 2 ? wr(Object(r), !0).forEach(function(a) {
      Ae(e, a, r[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : wr(Object(r)).forEach(function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(r, a));
    });
  }
  return e;
}
function Qt() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function Zt(e, n) {
  if (!e)
    return !1;
  if (e.contains)
    return e.contains(n);
  for (var r = n; r; ) {
    if (r === e)
      return !0;
    r = r.parentNode;
  }
  return !1;
}
var Cr = "data-rc-order", Er = "data-rc-priority", en = "rc-util-key", Fe = /* @__PURE__ */ new Map();
function Ar() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = e.mark;
  return n ? n.startsWith("data-") ? n : "data-".concat(n) : en;
}
function Me(e) {
  if (e.attachTo)
    return e.attachTo;
  var n = document.querySelector("head");
  return n || document.body;
}
function rn(e) {
  return e === "queue" ? "prependQueue" : e ? "prepend" : "append";
}
function We(e) {
  return Array.from((Fe.get(e) || e).children).filter(function(n) {
    return n.tagName === "STYLE";
  });
}
function Nr(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!Qt())
    return null;
  var r = n.csp, a = n.prepend, l = n.priority, i = l === void 0 ? 0 : l, u = rn(a), f = u === "prependQueue", c = document.createElement("style");
  c.setAttribute(Cr, u), f && i && c.setAttribute(Er, "".concat(i)), r != null && r.nonce && (c.nonce = r == null ? void 0 : r.nonce), c.innerHTML = e;
  var y = Me(n), g = y.firstChild;
  if (a) {
    if (f) {
      var h = (n.styles || We(y)).filter(function(R) {
        if (!["prepend", "prependQueue"].includes(R.getAttribute(Cr)))
          return !1;
        var P = Number(R.getAttribute(Er) || 0);
        return i >= P;
      });
      if (h.length)
        return y.insertBefore(c, h[h.length - 1].nextSibling), c;
    }
    y.insertBefore(c, g);
  } else
    y.appendChild(c);
  return c;
}
function tn(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = Me(n);
  return (n.styles || We(r)).find(function(a) {
    return a.getAttribute(Ar(n)) === e;
  });
}
function nn(e, n) {
  var r = Fe.get(e);
  if (!r || !Zt(document, r)) {
    var a = Nr("", n), l = a.parentNode;
    Fe.set(e, l), e.removeChild(a);
  }
}
function an(e, n) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = Me(r), l = We(a), i = N(N({}, r), {}, {
    styles: l
  });
  nn(a, i);
  var u = tn(n, i);
  if (u) {
    var f, c;
    if ((f = i.csp) !== null && f !== void 0 && f.nonce && u.nonce !== ((c = i.csp) === null || c === void 0 ? void 0 : c.nonce)) {
      var y;
      u.nonce = (y = i.csp) === null || y === void 0 ? void 0 : y.nonce;
    }
    return u.innerHTML !== e && (u.innerHTML = e), u;
  }
  var g = Nr(e, i);
  return g.setAttribute(Ar(i), n), g;
}
function Fr(e) {
  var n;
  return e == null || (n = e.getRootNode) === null || n === void 0 ? void 0 : n.call(e);
}
function on(e) {
  return Fr(e) instanceof ShadowRoot;
}
function sn(e) {
  return on(e) ? Fr(e) : null;
}
var Ie = {}, Le = [], ln = function(n) {
  Le.push(n);
};
function un(e, n) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var r = Le.reduce(function(a, l) {
      return l(a ?? "", "warning");
    }, n);
    r && console.error("Warning: ".concat(r));
  }
}
function fn(e, n) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var r = Le.reduce(function(a, l) {
      return l(a ?? "", "note");
    }, n);
    r && console.warn("Note: ".concat(r));
  }
}
function cn() {
  Ie = {};
}
function Ir(e, n, r) {
  !n && !Ie[r] && (e(!1, r), Ie[r] = !0);
}
function de(e, n) {
  Ir(un, e, n);
}
function dn(e, n) {
  Ir(fn, e, n);
}
de.preMessage = ln;
de.resetWarned = cn;
de.noteOnce = dn;
function pn(e) {
  return e.replace(/-(.)/g, function(n, r) {
    return r.toUpperCase();
  });
}
function mn(e, n) {
  de(e, "[@ant-design/icons] ".concat(n));
}
function Rr(e) {
  return $(e) === "object" && typeof e.name == "string" && typeof e.theme == "string" && ($(e.icon) === "object" || typeof e.icon == "function");
}
function jr() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return Object.keys(e).reduce(function(n, r) {
    var a = e[r];
    switch (r) {
      case "class":
        n.className = a, delete n.class;
        break;
      default:
        delete n[r], n[pn(r)] = a;
    }
    return n;
  }, {});
}
function De(e, n, r) {
  return r ? /* @__PURE__ */ ce.createElement(e.tag, N(N({
    key: n
  }, jr(e.attrs)), r), (e.children || []).map(function(a, l) {
    return De(a, "".concat(n, "-").concat(e.tag, "-").concat(l));
  })) : /* @__PURE__ */ ce.createElement(e.tag, N({
    key: n
  }, jr(e.attrs)), (e.children || []).map(function(a, l) {
    return De(a, "".concat(n, "-").concat(e.tag, "-").concat(l));
  }));
}
function Dr(e) {
  return Ne(e)[0];
}
function Mr(e) {
  return e ? Array.isArray(e) ? e : [e] : [];
}
var vn = `
.anticon {
  display: inline-flex;
  align-items: center;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`, gn = function(n) {
  var r = xt(Sr), a = r.csp, l = r.prefixCls, i = vn;
  l && (i = i.replace(/anticon/g, l)), wt(function() {
    var u = n.current, f = sn(u);
    an(i, "@ant-design-icons", {
      prepend: !0,
      csp: a,
      attachTo: f
    });
  }, []);
}, bn = ["icon", "className", "onClick", "style", "primaryColor", "secondaryColor"], Q = {
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: !1
};
function hn(e) {
  var n = e.primaryColor, r = e.secondaryColor;
  Q.primaryColor = n, Q.secondaryColor = r || Dr(n), Q.calculated = !!r;
}
function yn() {
  return N({}, Q);
}
var U = function(n) {
  var r = n.icon, a = n.className, l = n.onClick, i = n.style, u = n.primaryColor, f = n.secondaryColor, c = Or(n, bn), y = I.useRef(), g = Q;
  if (u && (g = {
    primaryColor: u,
    secondaryColor: f || Dr(u)
  }), gn(y), mn(Rr(r), "icon should be icon definiton, but got ".concat(r)), !Rr(r))
    return null;
  var h = r;
  return h && typeof h.icon == "function" && (h = N(N({}, h), {}, {
    icon: h.icon(g.primaryColor, g.secondaryColor)
  })), De(h.icon, "svg-".concat(h.name), N(N({
    className: a,
    onClick: l,
    style: i,
    "data-icon": h.name,
    width: "1em",
    height: "1em",
    fill: "currentColor",
    "aria-hidden": "true"
  }, c), {}, {
    ref: y
  }));
};
U.displayName = "IconReact";
U.getTwoToneColors = yn;
U.setTwoToneColors = hn;
function Wr(e) {
  var n = Mr(e), r = Tr(n, 2), a = r[0], l = r[1];
  return U.setTwoToneColors({
    primaryColor: a,
    secondaryColor: l
  });
}
function xn() {
  var e = U.getTwoToneColors();
  return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor;
}
var wn = ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"];
Wr(Xt.primary);
var ee = /* @__PURE__ */ I.forwardRef(function(e, n) {
  var r = e.className, a = e.icon, l = e.spin, i = e.rotate, u = e.tabIndex, f = e.onClick, c = e.twoToneColor, y = Or(e, wn), g = I.useContext(Sr), h = g.prefixCls, R = h === void 0 ? "anticon" : h, P = g.rootClassName, re = Ft(P, R, Ae(Ae({}, "".concat(R, "-").concat(a.name), !!a.name), "".concat(R, "-spin"), !!l || a.name === "loading"), r), B = u;
  B === void 0 && f && (B = -1);
  var pe = i ? {
    msTransform: "rotate(".concat(i, "deg)"),
    transform: "rotate(".concat(i, "deg)")
  } : void 0, D = Mr(c), E = Tr(D, 2), me = E[0], ve = E[1];
  return /* @__PURE__ */ I.createElement("span", Z({
    role: "img",
    "aria-label": a.name
  }, y, {
    ref: n,
    tabIndex: B,
    onClick: f,
    className: re
  }), /* @__PURE__ */ I.createElement(U, {
    icon: a,
    primaryColor: me,
    secondaryColor: ve,
    style: pe
  }));
});
ee.displayName = "AntdIcon";
ee.getTwoToneColor = xn;
ee.setTwoToneColor = Wr;
var Cn = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z" } }] }, name: "arrow-right", theme: "outlined" }, En = function(n, r) {
  return /* @__PURE__ */ I.createElement(ee, Z({}, n, {
    ref: r,
    icon: Cn
  }));
}, fe = /* @__PURE__ */ I.forwardRef(En);
process.env.NODE_ENV !== "production" && (fe.displayName = "ArrowRightOutlined");
var Rn = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z" } }, { tag: "path", attrs: { d: "M192 474h672q8 0 8 8v60q0 8-8 8H160q-8 0-8-8v-60q0-8 8-8z" } }] }, name: "plus", theme: "outlined" }, jn = function(n, r) {
  return /* @__PURE__ */ I.createElement(ee, Z({}, n, {
    ref: r,
    icon: Rn
  }));
}, Lr = /* @__PURE__ */ I.forwardRef(jn);
process.env.NODE_ENV !== "production" && (Lr.displayName = "PlusOutlined");
const _n = ({ title: e, icon: n, onSave: r, onAdd: a, children: l }) => /* @__PURE__ */ p.jsx(
  fr,
  {
    className: "shadow rounded-lg overflow-hidden",
    title: /* @__PURE__ */ p.jsxs("div", { className: "flex items-center", children: [
      /* @__PURE__ */ p.jsx("div", { className: "text-[#687076] mr-2 text-[16px]", children: n }),
      /* @__PURE__ */ p.jsx("span", { children: e })
    ] }),
    children: /* @__PURE__ */ p.jsxs(fr.Grid, { hoverable: !1, style: { width: "100%" }, children: [
      /* @__PURE__ */ p.jsx("div", { className: "mb-5", children: l }),
      /* @__PURE__ */ p.jsxs(Ct, { children: [
        /* @__PURE__ */ p.jsx(X, { type: "primary", onClick: r, children: "保存更改" }),
        a && /* @__PURE__ */ p.jsx(X, { icon: /* @__PURE__ */ p.jsx(Lr, {}), onClick: a, children: "添加" })
      ] })
    ] })
  }
), kn = () => /* @__PURE__ */ p.jsx(p.Fragment, { children: /* @__PURE__ */ p.jsx("section", { className: "bg-black text-[#ecedee] py-28", children: /* @__PURE__ */ p.jsxs("div", { className: "relative mx-auto w-full max-w-screen-xl-gutters px-6 !max-w-[600px]", children: [
  /* @__PURE__ */ p.jsxs("p", { className: "text-[20px] font-semibold leading-[1.5] tracking-[-0.017rem] max-md-gutters:text-[18px] max-md-gutters:leading-[1.5555] max-sm-gutters:text-[16px] max-sm-gutters:leading-[1.625] text-secondary mb-8 !font-normal", children: [
    /* @__PURE__ */ p.jsx("span", { className: "text-default font-medium", children: "We are the home for developers building native apps across Android and iOS with JavaScript (neat, right?)." }),
    "open source. Offer a free plan. And are pretty-much the go-to if you’re building a mobile app."
  ] }),
  /* @__PURE__ */ p.jsxs("p", { className: "text-[20px] font-semibold leading-[1.5] tracking-[-0.017rem] max-md-gutters:text-[18px] max-md-gutters:leading-[1.5555] max-sm-gutters:text-[16px] max-sm-gutters:leading-[1.625] text-secondary mb-8 !font-normal", children: [
    /* @__PURE__ */ p.jsx("span", { className: "text-default font-medium", children: "We’re a full ecosystem of tools that help you write, build, update, submit, and monitor mobile apps." }),
    "store submission a pain? We’ve got you. Want developer tools in your app? Done. Our application services are built to help you ship faster. And if you get stuck, join our community of developers or say hello and meet our team."
  ] }),
  /* @__PURE__ */ p.jsxs("p", { className: "text-[20px] font-semibold leading-[1.5] tracking-[-0.017rem] max-md-gutters:text-[18px] max-md-gutters:leading-[1.5555] max-sm-gutters:text-[16px] max-sm-gutters:leading-[1.625] text-secondary", children: [
    /* @__PURE__ */ p.jsx("span", { className: "text-default font-medium", children: "Behind every movie is a production team. Behind every great chef, someone running the restaurant." }),
    /* @__PURE__ */ p.jsx("span", { className: "bg-statement-gradient bg-clip-text font-bold text-transparent", children: "We’ll take care of the slow stuff so you and your team can focus on building the world’s best apps." })
  ] })
] }) }) }), Sn = ({ children: e }) => /* @__PURE__ */ p.jsx("div", { className: "m-auto w-[1250px]", children: e }), Pn = () => /* @__PURE__ */ p.jsx(Sn, { children: /* @__PURE__ */ p.jsxs("div", { className: "pb-28 pt-32 flex justify-between", children: [
  /* @__PURE__ */ p.jsxs("div", { style: { width: "610px" }, children: [
    /* @__PURE__ */ p.jsxs(X, { shape: "round", className: "mb-8", children: [
      "Learn what’s new!",
      /* @__PURE__ */ p.jsx(fe, {})
    ] }),
    /* @__PURE__ */ p.jsxs("h1", { className: "text-4xl mb-5", style: { lineHeight: "1.5", fontWeight: "normal" }, children: [
      /* @__PURE__ */ p.jsx("span", { className: "", children: "AREX is" }),
      /* @__PURE__ */ p.jsx("br", {}),
      "a testing platform with real data",
      /* @__PURE__ */ p.jsx("br", {}),
      /* @__PURE__ */ p.jsx("span", { className: "inline-block pb-2 px-2 rounded-md bg-blue-100 text-blue-500 text-4xl mr-2", children: "mock" }),
      /* @__PURE__ */ p.jsx("span", { className: "inline-block pb-2 px-2 rounded-md bg-orange-100 text-orange-500 text-4xl mr-2", children: "compare" }),
      /* @__PURE__ */ p.jsx("span", { className: "mr-2", children: "&" }),
      /* @__PURE__ */ p.jsx("span", { className: "inline-block pb-2 px-2 rounded-md bg-green-100 text-green-700 text-4xl mr-2", children: "agent" })
    ] }),
    /* @__PURE__ */ p.jsx("p", { className: "text-[#687076] mb-10", style: { fontSize: "18px", lineHeight: "1.5" }, children: "AREX solves regression testing challenges by replicating real online traffic to the test environment for automated regression testing. Iterate with confidence." }),
    /* @__PURE__ */ p.jsxs("div", { className: "gap-2 flex", children: [
      /* @__PURE__ */ p.jsxs(X, { size: "large", type: "primary", children: [
        "Sign Up for Free",
        /* @__PURE__ */ p.jsx(fe, {})
      ] }),
      /* @__PURE__ */ p.jsxs(X, { size: "large", children: [
        "Read the Docs",
        /* @__PURE__ */ p.jsx(fe, { className: "text-border" })
      ] })
    ] })
  ] }),
  /* @__PURE__ */ p.jsxs("div", { style: { width: "600px", height: "500px" }, className: "relative flex justify-center items-center", children: [
    /* @__PURE__ */ p.jsx("img", { src: "/img/bg11.png", className: "w-[450px]", alt: "" }),
    /* @__PURE__ */ p.jsx(
      "img",
      {
        src: "/img/img_2.png",
        className: "w-[320px] top-[21px] right-[-67px] absolute",
        alt: ""
      }
    ),
    /* @__PURE__ */ p.jsx(
      "img",
      {
        src: "/img/img_1.png",
        className: "w-[350px] bottom-[6px] left-[-60px] absolute",
        alt: ""
      }
    )
  ] })
] }) });
export {
  _n as FormRegion,
  kn as HomepageLearn,
  Pn as HomepageMainboard
};
//# sourceMappingURL=canyon-ui.js.map

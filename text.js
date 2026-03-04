(function() {
    const s = document.createElement("link").relList;
    if (s && s.supports && s.supports("modulepreload"))
        return;
    for (const c of document.querySelectorAll('link[rel="modulepreload"]'))
        a(c);
    new MutationObserver(c => {
        for (const f of c)
            if (f.type === "childList")
                for (const d of f.addedNodes)
                    d.tagName === "LINK" && d.rel === "modulepreload" && a(d)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function i(c) {
        const f = {};
        return c.integrity && (f.integrity = c.integrity),
        c.referrerPolicy && (f.referrerPolicy = c.referrerPolicy),
        c.crossOrigin === "use-credentials" ? f.credentials = "include" : c.crossOrigin === "anonymous" ? f.credentials = "omit" : f.credentials = "same-origin",
        f
    }
    function a(c) {
        if (c.ep)
            return;
        c.ep = !0;
        const f = i(c);
        fetch(c.href, f)
    }
}
)();
var Ka = {
    exports: {}
}
  , ss = {}
  , Ga = {
    exports: {}
}
  , ie = {};
var af;
function u0() {
    if (af)
        return ie;
    af = 1;
    var r = Symbol.for("react.element")
      , s = Symbol.for("react.portal")
      , i = Symbol.for("react.fragment")
      , a = Symbol.for("react.strict_mode")
      , c = Symbol.for("react.profiler")
      , f = Symbol.for("react.provider")
      , d = Symbol.for("react.context")
      , p = Symbol.for("react.forward_ref")
      , m = Symbol.for("react.suspense")
      , g = Symbol.for("react.memo")
      , v = Symbol.for("react.lazy")
      , w = Symbol.iterator;
    function j(z) {
        return z === null || typeof z != "object" ? null : (z = w && z[w] || z["@@iterator"],
        typeof z == "function" ? z : null)
    }
    var A = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    }
      , C = Object.assign
      , M = {};
    function V(z, k, re) {
        this.props = z,
        this.context = k,
        this.refs = M,
        this.updater = re || A
    }
    V.prototype.isReactComponent = {},
    V.prototype.setState = function(z, k) {
        if (typeof z != "object" && typeof z != "function" && z != null)
            throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, z, k, "setState")
    }
    ,
    V.prototype.forceUpdate = function(z) {
        this.updater.enqueueForceUpdate(this, z, "forceUpdate")
    }
    ;
    function D() {}
    D.prototype = V.prototype;
    function Y(z, k, re) {
        this.props = z,
        this.context = k,
        this.refs = M,
        this.updater = re || A
    }
    var Z = Y.prototype = new D;
    Z.constructor = Y,
    C(Z, V.prototype),
    Z.isPureReactComponent = !0;
    var H = Array.isArray
      , _ = Object.prototype.hasOwnProperty
      , ee = {
        current: null
    }
      , ae = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };
    function K(z, k, re) {
        var oe, ue = {}, ce = null, pe = null;
        if (k != null)
            for (oe in k.ref !== void 0 && (pe = k.ref),
            k.key !== void 0 && (ce = "" + k.key),
            k)
                _.call(k, oe) && !ae.hasOwnProperty(oe) && (ue[oe] = k[oe]);
        var fe = arguments.length - 2;
        if (fe === 1)
            ue.children = re;
        else if (1 < fe) {
            for (var we = Array(fe), it = 0; it < fe; it++)
                we[it] = arguments[it + 2];
            ue.children = we
        }
        if (z && z.defaultProps)
            for (oe in fe = z.defaultProps,
            fe)
                ue[oe] === void 0 && (ue[oe] = fe[oe]);
        return {
            $$typeof: r,
            type: z,
            key: ce,
            ref: pe,
            props: ue,
            _owner: ee.current
        }
    }
    function ye(z, k) {
        return {
            $$typeof: r,
            type: z.type,
            key: k,
            ref: z.ref,
            props: z.props,
            _owner: z._owner
        }
    }
    function Te(z) {
        return typeof z == "object" && z !== null && z.$$typeof === r
    }
    function Ke(z) {
        var k = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + z.replace(/[=:]/g, function(re) {
            return k[re]
        })
    }
    var st = /\/+/g;
    function Je(z, k) {
        return typeof z == "object" && z !== null && z.key != null ? Ke("" + z.key) : k.toString(36)
    }
    function Ge(z, k, re, oe, ue) {
        var ce = typeof z;
        (ce === "undefined" || ce === "boolean") && (z = null);
        var pe = !1;
        if (z === null)
            pe = !0;
        else
            switch (ce) {
            case "string":
            case "number":
                pe = !0;
                break;
            case "object":
                switch (z.$$typeof) {
                case r:
                case s:
                    pe = !0
                }
            }
        if (pe)
            return pe = z,
            ue = ue(pe),
            z = oe === "" ? "." + Je(pe, 0) : oe,
            H(ue) ? (re = "",
            z != null && (re = z.replace(st, "$&/") + "/"),
            Ge(ue, k, re, "", function(it) {
                return it
            })) : ue != null && (Te(ue) && (ue = ye(ue, re + (!ue.key || pe && pe.key === ue.key ? "" : ("" + ue.key).replace(st, "$&/") + "/") + z)),
            k.push(ue)),
            1;
        if (pe = 0,
        oe = oe === "" ? "." : oe + ":",
        H(z))
            for (var fe = 0; fe < z.length; fe++) {
                ce = z[fe];
                var we = oe + Je(ce, fe);
                pe += Ge(ce, k, re, we, ue)
            }
        else if (we = j(z),
        typeof we == "function")
            for (z = we.call(z),
            fe = 0; !(ce = z.next()).done; )
                ce = ce.value,
                we = oe + Je(ce, fe++),
                pe += Ge(ce, k, re, we, ue);
        else if (ce === "object")
            throw k = String(z),
            Error("Objects are not valid as a React child (found: " + (k === "[object Object]" ? "object with keys {" + Object.keys(z).join(", ") + "}" : k) + "). If you meant to render a collection of children, use an array instead.");
        return pe
    }
    function Lt(z, k, re) {
        if (z == null)
            return z;
        var oe = []
          , ue = 0;
        return Ge(z, oe, "", "", function(ce) {
            return k.call(re, ce, ue++)
        }),
        oe
    }
    function Ue(z) {
        if (z._status === -1) {
            var k = z._result;
            k = k(),
            k.then(function(re) {
                (z._status === 0 || z._status === -1) && (z._status = 1,
                z._result = re)
            }, function(re) {
                (z._status === 0 || z._status === -1) && (z._status = 2,
                z._result = re)
            }),
            z._status === -1 && (z._status = 0,
            z._result = k)
        }
        if (z._status === 1)
            return z._result.default;
        throw z._result
    }
    var se = {
        current: null
    }
      , W = {
        transition: null
    }
      , G = {
        ReactCurrentDispatcher: se,
        ReactCurrentBatchConfig: W,
        ReactCurrentOwner: ee
    };
    function O() {
        throw Error("act(...) is not supported in production builds of React.")
    }
    return ie.Children = {
        map: Lt,
        forEach: function(z, k, re) {
            Lt(z, function() {
                k.apply(this, arguments)
            }, re)
        },
        count: function(z) {
            var k = 0;
            return Lt(z, function() {
                k++
            }),
            k
        },
        toArray: function(z) {
            return Lt(z, function(k) {
                return k
            }) || []
        },
        only: function(z) {
            if (!Te(z))
                throw Error("React.Children.only expected to receive a single React element child.");
            return z
        }
    },
    ie.Component = V,
    ie.Fragment = i,
    ie.Profiler = c,
    ie.PureComponent = Y,
    ie.StrictMode = a,
    ie.Suspense = m,
    ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = G,
    ie.act = O,
    ie.cloneElement = function(z, k, re) {
        if (z == null)
            throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + z + ".");
        var oe = C({}, z.props)
          , ue = z.key
          , ce = z.ref
          , pe = z._owner;
        if (k != null) {
            if (k.ref !== void 0 && (ce = k.ref,
            pe = ee.current),
            k.key !== void 0 && (ue = "" + k.key),
            z.type && z.type.defaultProps)
                var fe = z.type.defaultProps;
            for (we in k)
                _.call(k, we) && !ae.hasOwnProperty(we) && (oe[we] = k[we] === void 0 && fe !== void 0 ? fe[we] : k[we])
        }
        var we = arguments.length - 2;
        if (we === 1)
            oe.children = re;
        else if (1 < we) {
            fe = Array(we);
            for (var it = 0; it < we; it++)
                fe[it] = arguments[it + 2];
            oe.children = fe
        }
        return {
            $$typeof: r,
            type: z.type,
            key: ue,
            ref: ce,
            props: oe,
            _owner: pe
        }
    }
    ,
    ie.createContext = function(z) {
        return z = {
            $$typeof: d,
            _currentValue: z,
            _currentValue2: z,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null
        },
        z.Provider = {
            $$typeof: f,
            _context: z
        },
        z.Consumer = z
    }
    ,
    ie.createElement = K,
    ie.createFactory = function(z) {
        var k = K.bind(null, z);
        return k.type = z,
        k
    }
    ,
    ie.createRef = function() {
        return {
            current: null
        }
    }
    ,
    ie.forwardRef = function(z) {
        return {
            $$typeof: p,
            render: z
        }
    }
    ,
    ie.isValidElement = Te,
    ie.lazy = function(z) {
        return {
            $$typeof: v,
            _payload: {
                _status: -1,
                _result: z
            },
            _init: Ue
        }
    }
    ,
    ie.memo = function(z, k) {
        return {
            $$typeof: g,
            type: z,
            compare: k === void 0 ? null : k
        }
    }
    ,
    ie.startTransition = function(z) {
        var k = W.transition;
        W.transition = {};
        try {
            z()
        } finally {
            W.transition = k
        }
    }
    ,
    ie.unstable_act = O,
    ie.useCallback = function(z, k) {
        return se.current.useCallback(z, k)
    }
    ,
    ie.useContext = function(z) {
        return se.current.useContext(z)
    }
    ,
    ie.useDebugValue = function() {}
    ,
    ie.useDeferredValue = function(z) {
        return se.current.useDeferredValue(z)
    }
    ,
    ie.useEffect = function(z, k) {
        return se.current.useEffect(z, k)
    }
    ,
    ie.useId = function() {
        return se.current.useId()
    }
    ,
    ie.useImperativeHandle = function(z, k, re) {
        return se.current.useImperativeHandle(z, k, re)
    }
    ,
    ie.useInsertionEffect = function(z, k) {
        return se.current.useInsertionEffect(z, k)
    }
    ,
    ie.useLayoutEffect = function(z, k) {
        return se.current.useLayoutEffect(z, k)
    }
    ,
    ie.useMemo = function(z, k) {
        return se.current.useMemo(z, k)
    }
    ,
    ie.useReducer = function(z, k, re) {
        return se.current.useReducer(z, k, re)
    }
    ,
    ie.useRef = function(z) {
        return se.current.useRef(z)
    }
    ,
    ie.useState = function(z) {
        return se.current.useState(z)
    }
    ,
    ie.useSyncExternalStore = function(z, k, re) {
        return se.current.useSyncExternalStore(z, k, re)
    }
    ,
    ie.useTransition = function() {
        return se.current.useTransition()
    }
    ,
    ie.version = "18.3.1",
    ie
}
var lf;
function kl() {
    return lf || (lf = 1,
    Ga.exports = u0()),
    Ga.exports
}
var uf;
function c0() {
    if (uf)
        return ss;
    uf = 1;
    var r = kl()
      , s = Symbol.for("react.element")
      , i = Symbol.for("react.fragment")
      , a = Object.prototype.hasOwnProperty
      , c = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
      , f = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };
    function d(p, m, g) {
        var v, w = {}, j = null, A = null;
        g !== void 0 && (j = "" + g),
        m.key !== void 0 && (j = "" + m.key),
        m.ref !== void 0 && (A = m.ref);
        for (v in m)
            a.call(m, v) && !f.hasOwnProperty(v) && (w[v] = m[v]);
        if (p && p.defaultProps)
            for (v in m = p.defaultProps,
            m)
                w[v] === void 0 && (w[v] = m[v]);
        return {
            $$typeof: s,
            type: p,
            key: j,
            ref: A,
            props: w,
            _owner: c.current
        }
    }
    return ss.Fragment = i,
    ss.jsx = d,
    ss.jsxs = d,
    ss
}
var cf;
function d0() {
    return cf || (cf = 1,
    Ka.exports = c0()),
    Ka.exports
}
var y = d0()
  , I = kl()
  , Vi = {}
  , Xa = {
    exports: {}
}
  , rt = {}
  , qa = {
    exports: {}
}
  , el = {};
var df;
function f0() {
    return df || (df = 1,
    (function(r) {
        function s(W, G) {
            var O = W.length;
            W.push(G);
            e: for (; 0 < O; ) {
                var z = O - 1 >>> 1
                  , k = W[z];
                if (0 < c(k, G))
                    W[z] = G,
                    W[O] = k,
                    O = z;
                else
                    break e
            }
        }
        function i(W) {
            return W.length === 0 ? null : W[0]
        }
        function a(W) {
            if (W.length === 0)
                return null;
            var G = W[0]
              , O = W.pop();
            if (O !== G) {
                W[0] = O;
                e: for (var z = 0, k = W.length, re = k >>> 1; z < re; ) {
                    var oe = 2 * (z + 1) - 1
                      , ue = W[oe]
                      , ce = oe + 1
                      , pe = W[ce];
                    if (0 > c(ue, O))
                        ce < k && 0 > c(pe, ue) ? (W[z] = pe,
                        W[ce] = O,
                        z = ce) : (W[z] = ue,
                        W[oe] = O,
                        z = oe);
                    else if (ce < k && 0 > c(pe, O))
                        W[z] = pe,
                        W[ce] = O,
                        z = ce;
                    else
                        break e
                }
            }
            return G
        }
        function c(W, G) {
            var O = W.sortIndex - G.sortIndex;
            return O !== 0 ? O : W.id - G.id
        }
        if (typeof performance == "object" && typeof performance.now == "function") {
            var f = performance;
            r.unstable_now = function() {
                return f.now()
            }
        } else {
            var d = Date
              , p = d.now();
            r.unstable_now = function() {
                return d.now() - p
            }
        }
        var m = []
          , g = []
          , v = 1
          , w = null
          , j = 3
          , A = !1
          , C = !1
          , M = !1
          , V = typeof setTimeout == "function" ? setTimeout : null
          , D = typeof clearTimeout == "function" ? clearTimeout : null
          , Y = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function Z(W) {
            for (var G = i(g); G !== null; ) {
                if (G.callback === null)
                    a(g);
                else if (G.startTime <= W)
                    a(g),
                    G.sortIndex = G.expirationTime,
                    s(m, G);
                else
                    break;
                G = i(g)
            }
        }
        function H(W) {
            if (M = !1,
            Z(W),
            !C)
                if (i(m) !== null)
                    C = !0,
                    Ue(_);
                else {
                    var G = i(g);
                    G !== null && se(H, G.startTime - W)
                }
        }
        function _(W, G) {
            C = !1,
            M && (M = !1,
            D(K),
            K = -1),
            A = !0;
            var O = j;
            try {
                for (Z(G),
                w = i(m); w !== null && (!(w.expirationTime > G) || W && !Ke()); ) {
                    var z = w.callback;
                    if (typeof z == "function") {
                        w.callback = null,
                        j = w.priorityLevel;
                        var k = z(w.expirationTime <= G);
                        G = r.unstable_now(),
                        typeof k == "function" ? w.callback = k : w === i(m) && a(m),
                        Z(G)
                    } else
                        a(m);
                    w = i(m)
                }
                if (w !== null)
                    var re = !0;
                else {
                    var oe = i(g);
                    oe !== null && se(H, oe.startTime - G),
                    re = !1
                }
                return re
            } finally {
                w = null,
                j = O,
                A = !1
            }
        }
        var ee = !1
          , ae = null
          , K = -1
          , ye = 5
          , Te = -1;
        function Ke() {
            return !(r.unstable_now() - Te < ye)
        }
        function st() {
            if (ae !== null) {
                var W = r.unstable_now();
                Te = W;
                var G = !0;
                try {
                    G = ae(!0, W)
                } finally {
                    G ? Je() : (ee = !1,
                    ae = null)
                }
            } else
                ee = !1
        }
        var Je;
        if (typeof Y == "function")
            Je = function() {
                Y(st)
            }
            ;
        else if (typeof MessageChannel < "u") {
            var Ge = new MessageChannel
              , Lt = Ge.port2;
            Ge.port1.onmessage = st,
            Je = function() {
                Lt.postMessage(null)
            }
        } else
            Je = function() {
                V(st, 0)
            }
            ;
        function Ue(W) {
            ae = W,
            ee || (ee = !0,
            Je())
        }
        function se(W, G) {
            K = V(function() {
                W(r.unstable_now())
            }, G)
        }
        r.unstable_IdlePriority = 5,
        r.unstable_ImmediatePriority = 1,
        r.unstable_LowPriority = 4,
        r.unstable_NormalPriority = 3,
        r.unstable_Profiling = null,
        r.unstable_UserBlockingPriority = 2,
        r.unstable_cancelCallback = function(W) {
            W.callback = null
        }
        ,
        r.unstable_continueExecution = function() {
            C || A || (C = !0,
            Ue(_))
        }
        ,
        r.unstable_forceFrameRate = function(W) {
            0 > W || 125 < W ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : ye = 0 < W ? Math.floor(1e3 / W) : 5
        }
        ,
        r.unstable_getCurrentPriorityLevel = function() {
            return j
        }
        ,
        r.unstable_getFirstCallbackNode = function() {
            return i(m)
        }
        ,
        r.unstable_next = function(W) {
            switch (j) {
            case 1:
            case 2:
            case 3:
                var G = 3;
                break;
            default:
                G = j
            }
            var O = j;
            j = G;
            try {
                return W()
            } finally {
                j = O
            }
        }
        ,
        r.unstable_pauseExecution = function() {}
        ,
        r.unstable_requestPaint = function() {}
        ,
        r.unstable_runWithPriority = function(W, G) {
            switch (W) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                W = 3
            }
            var O = j;
            j = W;
            try {
                return G()
            } finally {
                j = O
            }
        }
        ,
        r.unstable_scheduleCallback = function(W, G, O) {
            var z = r.unstable_now();
            switch (typeof O == "object" && O !== null ? (O = O.delay,
            O = typeof O == "number" && 0 < O ? z + O : z) : O = z,
            W) {
            case 1:
                var k = -1;
                break;
            case 2:
                k = 250;
                break;
            case 5:
                k = 1073741823;
                break;
            case 4:
                k = 1e4;
                break;
            default:
                k = 5e3
            }
            return k = O + k,
            W = {
                id: v++,
                callback: G,
                priorityLevel: W,
                startTime: O,
                expirationTime: k,
                sortIndex: -1
            },
            O > z ? (W.sortIndex = O,
            s(g, W),
            i(m) === null && W === i(g) && (M ? (D(K),
            K = -1) : M = !0,
            se(H, O - z))) : (W.sortIndex = k,
            s(m, W),
            C || A || (C = !0,
            Ue(_))),
            W
        }
        ,
        r.unstable_shouldYield = Ke,
        r.unstable_wrapCallback = function(W) {
            var G = j;
            return function() {
                var O = j;
                j = G;
                try {
                    return W.apply(this, arguments)
                } finally {
                    j = O
                }
            }
        }
    }
    )(el)),
    el
}
var ff;
function h0() {
    return ff || (ff = 1,
    qa.exports = f0()),
    qa.exports
}
var hf;
function p0() {
    if (hf)
        return rt;
    hf = 1;
    var r = kl()
      , s = h0();
    function i(e) {
        for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
            t += "&args[]=" + encodeURIComponent(arguments[n]);
        return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    var a = new Set
      , c = {};
    function f(e, t) {
        d(e, t),
        d(e + "Capture", t)
    }
    function d(e, t) {
        for (c[e] = t,
        e = 0; e < t.length; e++)
            a.add(t[e])
    }
    var p = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
      , m = Object.prototype.hasOwnProperty
      , g = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
      , v = {}
      , w = {};
    function j(e) {
        return m.call(w, e) ? !0 : m.call(v, e) ? !1 : g.test(e) ? w[e] = !0 : (v[e] = !0,
        !1)
    }
    function A(e, t, n, o) {
        if (n !== null && n.type === 0)
            return !1;
        switch (typeof t) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return o ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
            e !== "data-" && e !== "aria-");
        default:
            return !1
        }
    }
    function C(e, t, n, o) {
        if (t === null || typeof t > "u" || A(e, t, n, o))
            return !0;
        if (o)
            return !1;
        if (n !== null)
            switch (n.type) {
            case 3:
                return !t;
            case 4:
                return t === !1;
            case 5:
                return isNaN(t);
            case 6:
                return isNaN(t) || 1 > t
            }
        return !1
    }
    function M(e, t, n, o, l, u, h) {
        this.acceptsBooleans = t === 2 || t === 3 || t === 4,
        this.attributeName = o,
        this.attributeNamespace = l,
        this.mustUseProperty = n,
        this.propertyName = e,
        this.type = t,
        this.sanitizeURL = u,
        this.removeEmptyString = h
    }
    var V = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
        V[e] = new M(e,0,!1,e,null,!1,!1)
    }),
    [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
        var t = e[0];
        V[t] = new M(t,1,!1,e[1],null,!1,!1)
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
        V[e] = new M(e,2,!1,e.toLowerCase(),null,!1,!1)
    }),
    ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
        V[e] = new M(e,2,!1,e,null,!1,!1)
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
        V[e] = new M(e,3,!1,e.toLowerCase(),null,!1,!1)
    }),
    ["checked", "multiple", "muted", "selected"].forEach(function(e) {
        V[e] = new M(e,3,!0,e,null,!1,!1)
    }),
    ["capture", "download"].forEach(function(e) {
        V[e] = new M(e,4,!1,e,null,!1,!1)
    }),
    ["cols", "rows", "size", "span"].forEach(function(e) {
        V[e] = new M(e,6,!1,e,null,!1,!1)
    }),
    ["rowSpan", "start"].forEach(function(e) {
        V[e] = new M(e,5,!1,e.toLowerCase(),null,!1,!1)
    });
    var D = /[\-:]([a-z])/g;
    function Y(e) {
        return e[1].toUpperCase()
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
        var t = e.replace(D, Y);
        V[t] = new M(t,1,!1,e,null,!1,!1)
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
        var t = e.replace(D, Y);
        V[t] = new M(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
    }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
        var t = e.replace(D, Y);
        V[t] = new M(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
    }),
    ["tabIndex", "crossOrigin"].forEach(function(e) {
        V[e] = new M(e,1,!1,e.toLowerCase(),null,!1,!1)
    }),
    V.xlinkHref = new M("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),
    ["src", "href", "action", "formAction"].forEach(function(e) {
        V[e] = new M(e,1,!1,e.toLowerCase(),null,!0,!0)
    });
    function Z(e, t, n, o) {
        var l = V.hasOwnProperty(t) ? V[t] : null;
        (l !== null ? l.type !== 0 : o || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (C(t, n, l, o) && (n = null),
        o || l === null ? j(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName,
        o = l.attributeNamespace,
        n === null ? e.removeAttribute(t) : (l = l.type,
        n = l === 3 || l === 4 && n === !0 ? "" : "" + n,
        o ? e.setAttributeNS(o, t, n) : e.setAttribute(t, n))))
    }
    var H = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
      , _ = Symbol.for("react.element")
      , ee = Symbol.for("react.portal")
      , ae = Symbol.for("react.fragment")
      , K = Symbol.for("react.strict_mode")
      , ye = Symbol.for("react.profiler")
      , Te = Symbol.for("react.provider")
      , Ke = Symbol.for("react.context")
      , st = Symbol.for("react.forward_ref")
      , Je = Symbol.for("react.suspense")
      , Ge = Symbol.for("react.suspense_list")
      , Lt = Symbol.for("react.memo")
      , Ue = Symbol.for("react.lazy")
      , se = Symbol.for("react.offscreen")
      , W = Symbol.iterator;
    function G(e) {
        return e === null || typeof e != "object" ? null : (e = W && e[W] || e["@@iterator"],
        typeof e == "function" ? e : null)
    }
    var O = Object.assign, z;
    function k(e) {
        if (z === void 0)
            try {
                throw Error()
            } catch (n) {
                var t = n.stack.trim().match(/\n( *(at )?)/);
                z = t && t[1] || ""
            }
        return `
` + z + e
    }
    var re = !1;
    function oe(e, t) {
        if (!e || re)
            return "";
        re = !0;
        var n = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            if (t)
                if (t = function() {
                    throw Error()
                }
                ,
                Object.defineProperty(t.prototype, "props", {
                    set: function() {
                        throw Error()
                    }
                }),
                typeof Reflect == "object" && Reflect.construct) {
                    try {
                        Reflect.construct(t, [])
                    } catch (S) {
                        var o = S
                    }
                    Reflect.construct(e, [], t)
                } else {
                    try {
                        t.call()
                    } catch (S) {
                        o = S
                    }
                    e.call(t.prototype)
                }
            else {
                try {
                    throw Error()
                } catch (S) {
                    o = S
                }
                e()
            }
        } catch (S) {
            if (S && o && typeof S.stack == "string") {
                for (var l = S.stack.split(`
`), u = o.stack.split(`
`), h = l.length - 1, x = u.length - 1; 1 <= h && 0 <= x && l[h] !== u[x]; )
                    x--;
                for (; 1 <= h && 0 <= x; h--,
                x--)
                    if (l[h] !== u[x]) {
                        if (h !== 1 || x !== 1)
                            do
                                if (h--,
                                x--,
                                0 > x || l[h] !== u[x]) {
                                    var L = `
` + l[h].replace(" at new ", " at ");
                                    return e.displayName && L.includes("<anonymous>") && (L = L.replace("<anonymous>", e.displayName)),
                                    L
                                }
                            while (1 <= h && 0 <= x);
                        break
                    }
            }
        } finally {
            re = !1,
            Error.prepareStackTrace = n
        }
        return (e = e ? e.displayName || e.name : "") ? k(e) : ""
    }
    function ue(e) {
        switch (e.tag) {
        case 5:
            return k(e.type);
        case 16:
            return k("Lazy");
        case 13:
            return k("Suspense");
        case 19:
            return k("SuspenseList");
        case 0:
        case 2:
        case 15:
            return e = oe(e.type, !1),
            e;
        case 11:
            return e = oe(e.type.render, !1),
            e;
        case 1:
            return e = oe(e.type, !0),
            e;
        default:
            return ""
        }
    }
    function ce(e) {
        if (e == null)
            return null;
        if (typeof e == "function")
            return e.displayName || e.name || null;
        if (typeof e == "string")
            return e;
        switch (e) {
        case ae:
            return "Fragment";
        case ee:
            return "Portal";
        case ye:
            return "Profiler";
        case K:
            return "StrictMode";
        case Je:
            return "Suspense";
        case Ge:
            return "SuspenseList"
        }
        if (typeof e == "object")
            switch (e.$$typeof) {
            case Ke:
                return (e.displayName || "Context") + ".Consumer";
            case Te:
                return (e._context.displayName || "Context") + ".Provider";
            case st:
                var t = e.render;
                return e = e.displayName,
                e || (e = t.displayName || t.name || "",
                e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
                e;
            case Lt:
                return t = e.displayName || null,
                t !== null ? t : ce(e.type) || "Memo";
            case Ue:
                t = e._payload,
                e = e._init;
                try {
                    return ce(e(t))
                } catch {}
            }
        return null
    }
    function pe(e) {
        var t = e.type;
        switch (e.tag) {
        case 24:
            return "Cache";
        case 9:
            return (t.displayName || "Context") + ".Consumer";
        case 10:
            return (t._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return e = t.render,
            e = e.displayName || e.name || "",
            t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
        case 7:
            return "Fragment";
        case 5:
            return t;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return ce(t);
        case 8:
            return t === K ? "StrictMode" : "Mode";
        case 22:
            return "Offscreen";
        case 12:
            return "Profiler";
        case 21:
            return "Scope";
        case 13:
            return "Suspense";
        case 19:
            return "SuspenseList";
        case 25:
            return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if (typeof t == "function")
                return t.displayName || t.name || null;
            if (typeof t == "string")
                return t
        }
        return null
    }
    function fe(e) {
        switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return e;
        case "object":
            return e;
        default:
            return ""
        }
    }
    function we(e) {
        var t = e.type;
        return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
    }
    function it(e) {
        var t = we(e) ? "checked" : "value"
          , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
          , o = "" + e[t];
        if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
            var l = n.get
              , u = n.set;
            return Object.defineProperty(e, t, {
                configurable: !0,
                get: function() {
                    return l.call(this)
                },
                set: function(h) {
                    o = "" + h,
                    u.call(this, h)
                }
            }),
            Object.defineProperty(e, t, {
                enumerable: n.enumerable
            }),
            {
                getValue: function() {
                    return o
                },
                setValue: function(h) {
                    o = "" + h
                },
                stopTracking: function() {
                    e._valueTracker = null,
                    delete e[t]
                }
            }
        }
    }
    function js(e) {
        e._valueTracker || (e._valueTracker = it(e))
    }
    function fu(e) {
        if (!e)
            return !1;
        var t = e._valueTracker;
        if (!t)
            return !0;
        var n = t.getValue()
          , o = "";
        return e && (o = we(e) ? e.checked ? "true" : "false" : e.value),
        e = o,
        e !== n ? (t.setValue(e),
        !0) : !1
    }
    function zs(e) {
        if (e = e || (typeof document < "u" ? document : void 0),
        typeof e > "u")
            return null;
        try {
            return e.activeElement || e.body
        } catch {
            return e.body
        }
    }
    function no(e, t) {
        var n = t.checked;
        return O({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: n ?? e._wrapperState.initialChecked
        })
    }
    function hu(e, t) {
        var n = t.defaultValue == null ? "" : t.defaultValue
          , o = t.checked != null ? t.checked : t.defaultChecked;
        n = fe(t.value != null ? t.value : n),
        e._wrapperState = {
            initialChecked: o,
            initialValue: n,
            controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
        }
    }
    function pu(e, t) {
        t = t.checked,
        t != null && Z(e, "checked", t, !1)
    }
    function ro(e, t) {
        pu(e, t);
        var n = fe(t.value)
          , o = t.type;
        if (n != null)
            o === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
        else if (o === "submit" || o === "reset") {
            e.removeAttribute("value");
            return
        }
        t.hasOwnProperty("value") ? so(e, t.type, n) : t.hasOwnProperty("defaultValue") && so(e, t.type, fe(t.defaultValue)),
        t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
    }
    function mu(e, t, n) {
        if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var o = t.type;
            if (!(o !== "submit" && o !== "reset" || t.value !== void 0 && t.value !== null))
                return;
            t = "" + e._wrapperState.initialValue,
            n || t === e.value || (e.value = t),
            e.defaultValue = t
        }
        n = e.name,
        n !== "" && (e.name = ""),
        e.defaultChecked = !!e._wrapperState.initialChecked,
        n !== "" && (e.name = n)
    }
    function so(e, t, n) {
        (t !== "number" || zs(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
    }
    var xr = Array.isArray;
    function Wn(e, t, n, o) {
        if (e = e.options,
        t) {
            t = {};
            for (var l = 0; l < n.length; l++)
                t["$" + n[l]] = !0;
            for (n = 0; n < e.length; n++)
                l = t.hasOwnProperty("$" + e[n].value),
                e[n].selected !== l && (e[n].selected = l),
                l && o && (e[n].defaultSelected = !0)
        } else {
            for (n = "" + fe(n),
            t = null,
            l = 0; l < e.length; l++) {
                if (e[l].value === n) {
                    e[l].selected = !0,
                    o && (e[l].defaultSelected = !0);
                    return
                }
                t !== null || e[l].disabled || (t = e[l])
            }
            t !== null && (t.selected = !0)
        }
    }
    function io(e, t) {
        if (t.dangerouslySetInnerHTML != null)
            throw Error(i(91));
        return O({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue
        })
    }
    function yu(e, t) {
        var n = t.value;
        if (n == null) {
            if (n = t.children,
            t = t.defaultValue,
            n != null) {
                if (t != null)
                    throw Error(i(92));
                if (xr(n)) {
                    if (1 < n.length)
                        throw Error(i(93));
                    n = n[0]
                }
                t = n
            }
            t == null && (t = ""),
            n = t
        }
        e._wrapperState = {
            initialValue: fe(n)
        }
    }
    function gu(e, t) {
        var n = fe(t.value)
          , o = fe(t.defaultValue);
        n != null && (n = "" + n,
        n !== e.value && (e.value = n),
        t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
        o != null && (e.defaultValue = "" + o)
    }
    function vu(e) {
        var t = e.textContent;
        t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
    }
    function xu(e) {
        switch (e) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml"
        }
    }
    function oo(e, t) {
        return e == null || e === "http://www.w3.org/1999/xhtml" ? xu(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
    }
    var Ts, wu = (function(e) {
        return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, o, l) {
            MSApp.execUnsafeLocalFunction(function() {
                return e(t, n, o, l)
            })
        }
        : e
    }
    )(function(e, t) {
        if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in e)
            e.innerHTML = t;
        else {
            for (Ts = Ts || document.createElement("div"),
            Ts.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = Ts.firstChild; e.firstChild; )
                e.removeChild(e.firstChild);
            for (; t.firstChild; )
                e.appendChild(t.firstChild)
        }
    });
    function wr(e, t) {
        if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && n.nodeType === 3) {
                n.nodeValue = t;
                return
            }
        }
        e.textContent = t
    }
    var Lr = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0
    }
      , hm = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Lr).forEach(function(e) {
        hm.forEach(function(t) {
            t = t + e.charAt(0).toUpperCase() + e.substring(1),
            Lr[t] = Lr[e]
        })
    });
    function Lu(e, t, n) {
        return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Lr.hasOwnProperty(e) && Lr[e] ? ("" + t).trim() : t + "px"
    }
    function Ru(e, t) {
        e = e.style;
        for (var n in t)
            if (t.hasOwnProperty(n)) {
                var o = n.indexOf("--") === 0
                  , l = Lu(n, t[n], o);
                n === "float" && (n = "cssFloat"),
                o ? e.setProperty(n, l) : e[n] = l
            }
    }
    var pm = O({
        menuitem: !0
    }, {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    });
    function ao(e, t) {
        if (t) {
            if (pm[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
                throw Error(i(137, e));
            if (t.dangerouslySetInnerHTML != null) {
                if (t.children != null)
                    throw Error(i(60));
                if (typeof t.dangerouslySetInnerHTML != "object" || !("__html"in t.dangerouslySetInnerHTML))
                    throw Error(i(61))
            }
            if (t.style != null && typeof t.style != "object")
                throw Error(i(62))
        }
    }
    function lo(e, t) {
        if (e.indexOf("-") === -1)
            return typeof t.is == "string";
        switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0
        }
    }
    var uo = null;
    function co(e) {
        return e = e.target || e.srcElement || window,
        e.correspondingUseElement && (e = e.correspondingUseElement),
        e.nodeType === 3 ? e.parentNode : e
    }
    var fo = null
      , _n = null
      , Qn = null;
    function ju(e) {
        if (e = Ir(e)) {
            if (typeof fo != "function")
                throw Error(i(280));
            var t = e.stateNode;
            t && (t = $s(t),
            fo(e.stateNode, e.type, t))
        }
    }
    function zu(e) {
        _n ? Qn ? Qn.push(e) : Qn = [e] : _n = e
    }
    function Tu() {
        if (_n) {
            var e = _n
              , t = Qn;
            if (Qn = _n = null,
            ju(e),
            t)
                for (e = 0; e < t.length; e++)
                    ju(t[e])
        }
    }
    function Eu(e, t) {
        return e(t)
    }
    function Su() {}
    var ho = !1;
    function Au(e, t, n) {
        if (ho)
            return e(t, n);
        ho = !0;
        try {
            return Eu(e, t, n)
        } finally {
            ho = !1,
            (_n !== null || Qn !== null) && (Su(),
            Tu())
        }
    }
    function Rr(e, t) {
        var n = e.stateNode;
        if (n === null)
            return null;
        var o = $s(n);
        if (o === null)
            return null;
        n = o[t];
        e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (o = !o.disabled) || (e = e.type,
            o = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
            e = !o;
            break e;
        default:
            e = !1
        }
        if (e)
            return null;
        if (n && typeof n != "function")
            throw Error(i(231, t, typeof n));
        return n
    }
    var po = !1;
    if (p)
        try {
            var jr = {};
            Object.defineProperty(jr, "passive", {
                get: function() {
                    po = !0
                }
            }),
            window.addEventListener("test", jr, jr),
            window.removeEventListener("test", jr, jr)
        } catch {
            po = !1
        }
    function mm(e, t, n, o, l, u, h, x, L) {
        var S = Array.prototype.slice.call(arguments, 3);
        try {
            t.apply(n, S)
        } catch (b) {
            this.onError(b)
        }
    }
    var zr = !1
      , Es = null
      , Ss = !1
      , mo = null
      , ym = {
        onError: function(e) {
            zr = !0,
            Es = e
        }
    };
    function gm(e, t, n, o, l, u, h, x, L) {
        zr = !1,
        Es = null,
        mm.apply(ym, arguments)
    }
    function vm(e, t, n, o, l, u, h, x, L) {
        if (gm.apply(this, arguments),
        zr) {
            if (zr) {
                var S = Es;
                zr = !1,
                Es = null
            } else
                throw Error(i(198));
            Ss || (Ss = !0,
            mo = S)
        }
    }
    function xn(e) {
        var t = e
          , n = e;
        if (e.alternate)
            for (; t.return; )
                t = t.return;
        else {
            e = t;
            do
                t = e,
                (t.flags & 4098) !== 0 && (n = t.return),
                e = t.return;
            while (e)
        }
        return t.tag === 3 ? n : null
    }
    function Mu(e) {
        if (e.tag === 13) {
            var t = e.memoizedState;
            if (t === null && (e = e.alternate,
            e !== null && (t = e.memoizedState)),
            t !== null)
                return t.dehydrated
        }
        return null
    }
    function Nu(e) {
        if (xn(e) !== e)
            throw Error(i(188))
    }
    function xm(e) {
        var t = e.alternate;
        if (!t) {
            if (t = xn(e),
            t === null)
                throw Error(i(188));
            return t !== e ? null : e
        }
        for (var n = e, o = t; ; ) {
            var l = n.return;
            if (l === null)
                break;
            var u = l.alternate;
            if (u === null) {
                if (o = l.return,
                o !== null) {
                    n = o;
                    continue
                }
                break
            }
            if (l.child === u.child) {
                for (u = l.child; u; ) {
                    if (u === n)
                        return Nu(l),
                        e;
                    if (u === o)
                        return Nu(l),
                        t;
                    u = u.sibling
                }
                throw Error(i(188))
            }
            if (n.return !== o.return)
                n = l,
                o = u;
            else {
                for (var h = !1, x = l.child; x; ) {
                    if (x === n) {
                        h = !0,
                        n = l,
                        o = u;
                        break
                    }
                    if (x === o) {
                        h = !0,
                        o = l,
                        n = u;
                        break
                    }
                    x = x.sibling
                }
                if (!h) {
                    for (x = u.child; x; ) {
                        if (x === n) {
                            h = !0,
                            n = u,
                            o = l;
                            break
                        }
                        if (x === o) {
                            h = !0,
                            o = u,
                            n = l;
                            break
                        }
                        x = x.sibling
                    }
                    if (!h)
                        throw Error(i(189))
                }
            }
            if (n.alternate !== o)
                throw Error(i(190))
        }
        if (n.tag !== 3)
            throw Error(i(188));
        return n.stateNode.current === n ? e : t
    }
    function ku(e) {
        return e = xm(e),
        e !== null ? bu(e) : null
    }
    function bu(e) {
        if (e.tag === 5 || e.tag === 6)
            return e;
        for (e = e.child; e !== null; ) {
            var t = bu(e);
            if (t !== null)
                return t;
            e = e.sibling
        }
        return null
    }
    var Vu = s.unstable_scheduleCallback
      , Pu = s.unstable_cancelCallback
      , wm = s.unstable_shouldYield
      , Lm = s.unstable_requestPaint
      , Ae = s.unstable_now
      , Rm = s.unstable_getCurrentPriorityLevel
      , yo = s.unstable_ImmediatePriority
      , Cu = s.unstable_UserBlockingPriority
      , As = s.unstable_NormalPriority
      , jm = s.unstable_LowPriority
      , Bu = s.unstable_IdlePriority
      , Ms = null
      , Nt = null;
    function zm(e) {
        if (Nt && typeof Nt.onCommitFiberRoot == "function")
            try {
                Nt.onCommitFiberRoot(Ms, e, void 0, (e.current.flags & 128) === 128)
            } catch {}
    }
    var Rt = Math.clz32 ? Math.clz32 : Sm
      , Tm = Math.log
      , Em = Math.LN2;
    function Sm(e) {
        return e >>>= 0,
        e === 0 ? 32 : 31 - (Tm(e) / Em | 0) | 0
    }
    var Ns = 64
      , ks = 4194304;
    function Tr(e) {
        switch (e & -e) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return e & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return e & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return e
        }
    }
    function bs(e, t) {
        var n = e.pendingLanes;
        if (n === 0)
            return 0;
        var o = 0
          , l = e.suspendedLanes
          , u = e.pingedLanes
          , h = n & 268435455;
        if (h !== 0) {
            var x = h & ~l;
            x !== 0 ? o = Tr(x) : (u &= h,
            u !== 0 && (o = Tr(u)))
        } else
            h = n & ~l,
            h !== 0 ? o = Tr(h) : u !== 0 && (o = Tr(u));
        if (o === 0)
            return 0;
        if (t !== 0 && t !== o && (t & l) === 0 && (l = o & -o,
        u = t & -t,
        l >= u || l === 16 && (u & 4194240) !== 0))
            return t;
        if ((o & 4) !== 0 && (o |= n & 16),
        t = e.entangledLanes,
        t !== 0)
            for (e = e.entanglements,
            t &= o; 0 < t; )
                n = 31 - Rt(t),
                l = 1 << n,
                o |= e[n],
                t &= ~l;
        return o
    }
    function Am(e, t) {
        switch (e) {
        case 1:
        case 2:
        case 4:
            return t + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1
        }
    }
    function Mm(e, t) {
        for (var n = e.suspendedLanes, o = e.pingedLanes, l = e.expirationTimes, u = e.pendingLanes; 0 < u; ) {
            var h = 31 - Rt(u)
              , x = 1 << h
              , L = l[h];
            L === -1 ? ((x & n) === 0 || (x & o) !== 0) && (l[h] = Am(x, t)) : L <= t && (e.expiredLanes |= x),
            u &= ~x
        }
    }
    function go(e) {
        return e = e.pendingLanes & -1073741825,
        e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    }
    function Du() {
        var e = Ns;
        return Ns <<= 1,
        (Ns & 4194240) === 0 && (Ns = 64),
        e
    }
    function vo(e) {
        for (var t = [], n = 0; 31 > n; n++)
            t.push(e);
        return t
    }
    function Er(e, t, n) {
        e.pendingLanes |= t,
        t !== 536870912 && (e.suspendedLanes = 0,
        e.pingedLanes = 0),
        e = e.eventTimes,
        t = 31 - Rt(t),
        e[t] = n
    }
    function Nm(e, t) {
        var n = e.pendingLanes & ~t;
        e.pendingLanes = t,
        e.suspendedLanes = 0,
        e.pingedLanes = 0,
        e.expiredLanes &= t,
        e.mutableReadLanes &= t,
        e.entangledLanes &= t,
        t = e.entanglements;
        var o = e.eventTimes;
        for (e = e.expirationTimes; 0 < n; ) {
            var l = 31 - Rt(n)
              , u = 1 << l;
            t[l] = 0,
            o[l] = -1,
            e[l] = -1,
            n &= ~u
        }
    }
    function xo(e, t) {
        var n = e.entangledLanes |= t;
        for (e = e.entanglements; n; ) {
            var o = 31 - Rt(n)
              , l = 1 << o;
            l & t | e[o] & t && (e[o] |= t),
            n &= ~l
        }
    }
    var he = 0;
    function Wu(e) {
        return e &= -e,
        1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1
    }
    var _u, wo, Qu, Yu, Ou, Lo = !1, Vs = [], Ht = null, Kt = null, Gt = null, Sr = new Map, Ar = new Map, Xt = [], km = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
    function Iu(e, t) {
        switch (e) {
        case "focusin":
        case "focusout":
            Ht = null;
            break;
        case "dragenter":
        case "dragleave":
            Kt = null;
            break;
        case "mouseover":
        case "mouseout":
            Gt = null;
            break;
        case "pointerover":
        case "pointerout":
            Sr.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            Ar.delete(t.pointerId)
        }
    }
    function Mr(e, t, n, o, l, u) {
        return e === null || e.nativeEvent !== u ? (e = {
            blockedOn: t,
            domEventName: n,
            eventSystemFlags: o,
            nativeEvent: u,
            targetContainers: [l]
        },
        t !== null && (t = Ir(t),
        t !== null && wo(t)),
        e) : (e.eventSystemFlags |= o,
        t = e.targetContainers,
        l !== null && t.indexOf(l) === -1 && t.push(l),
        e)
    }
    function bm(e, t, n, o, l) {
        switch (t) {
        case "focusin":
            return Ht = Mr(Ht, e, t, n, o, l),
            !0;
        case "dragenter":
            return Kt = Mr(Kt, e, t, n, o, l),
            !0;
        case "mouseover":
            return Gt = Mr(Gt, e, t, n, o, l),
            !0;
        case "pointerover":
            var u = l.pointerId;
            return Sr.set(u, Mr(Sr.get(u) || null, e, t, n, o, l)),
            !0;
        case "gotpointercapture":
            return u = l.pointerId,
            Ar.set(u, Mr(Ar.get(u) || null, e, t, n, o, l)),
            !0
        }
        return !1
    }
    function Fu(e) {
        var t = wn(e.target);
        if (t !== null) {
            var n = xn(t);
            if (n !== null) {
                if (t = n.tag,
                t === 13) {
                    if (t = Mu(n),
                    t !== null) {
                        e.blockedOn = t,
                        Ou(e.priority, function() {
                            Qu(n)
                        });
                        return
                    }
                } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                    e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                    return
                }
            }
        }
        e.blockedOn = null
    }
    function Ps(e) {
        if (e.blockedOn !== null)
            return !1;
        for (var t = e.targetContainers; 0 < t.length; ) {
            var n = jo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (n === null) {
                n = e.nativeEvent;
                var o = new n.constructor(n.type,n);
                uo = o,
                n.target.dispatchEvent(o),
                uo = null
            } else
                return t = Ir(n),
                t !== null && wo(t),
                e.blockedOn = n,
                !1;
            t.shift()
        }
        return !0
    }
    function Zu(e, t, n) {
        Ps(e) && n.delete(t)
    }
    function Vm() {
        Lo = !1,
        Ht !== null && Ps(Ht) && (Ht = null),
        Kt !== null && Ps(Kt) && (Kt = null),
        Gt !== null && Ps(Gt) && (Gt = null),
        Sr.forEach(Zu),
        Ar.forEach(Zu)
    }
    function Nr(e, t) {
        e.blockedOn === t && (e.blockedOn = null,
        Lo || (Lo = !0,
        s.unstable_scheduleCallback(s.unstable_NormalPriority, Vm)))
    }
    function kr(e) {
        function t(l) {
            return Nr(l, e)
        }
        if (0 < Vs.length) {
            Nr(Vs[0], e);
            for (var n = 1; n < Vs.length; n++) {
                var o = Vs[n];
                o.blockedOn === e && (o.blockedOn = null)
            }
        }
        for (Ht !== null && Nr(Ht, e),
        Kt !== null && Nr(Kt, e),
        Gt !== null && Nr(Gt, e),
        Sr.forEach(t),
        Ar.forEach(t),
        n = 0; n < Xt.length; n++)
            o = Xt[n],
            o.blockedOn === e && (o.blockedOn = null);
        for (; 0 < Xt.length && (n = Xt[0],
        n.blockedOn === null); )
            Fu(n),
            n.blockedOn === null && Xt.shift()
    }
    var Yn = H.ReactCurrentBatchConfig
      , Cs = !0;
    function Pm(e, t, n, o) {
        var l = he
          , u = Yn.transition;
        Yn.transition = null;
        try {
            he = 1,
            Ro(e, t, n, o)
        } finally {
            he = l,
            Yn.transition = u
        }
    }
    function Cm(e, t, n, o) {
        var l = he
          , u = Yn.transition;
        Yn.transition = null;
        try {
            he = 4,
            Ro(e, t, n, o)
        } finally {
            he = l,
            Yn.transition = u
        }
    }
    function Ro(e, t, n, o) {
        if (Cs) {
            var l = jo(e, t, n, o);
            if (l === null)
                Qo(e, t, o, Bs, n),
                Iu(e, o);
            else if (bm(l, e, t, n, o))
                o.stopPropagation();
            else if (Iu(e, o),
            t & 4 && -1 < km.indexOf(e)) {
                for (; l !== null; ) {
                    var u = Ir(l);
                    if (u !== null && _u(u),
                    u = jo(e, t, n, o),
                    u === null && Qo(e, t, o, Bs, n),
                    u === l)
                        break;
                    l = u
                }
                l !== null && o.stopPropagation()
            } else
                Qo(e, t, o, null, n)
        }
    }
    var Bs = null;
    function jo(e, t, n, o) {
        if (Bs = null,
        e = co(o),
        e = wn(e),
        e !== null)
            if (t = xn(e),
            t === null)
                e = null;
            else if (n = t.tag,
            n === 13) {
                if (e = Mu(t),
                e !== null)
                    return e;
                e = null
            } else if (n === 3) {
                if (t.stateNode.current.memoizedState.isDehydrated)
                    return t.tag === 3 ? t.stateNode.containerInfo : null;
                e = null
            } else
                t !== e && (e = null);
        return Bs = e,
        null
    }
    function Ju(e) {
        switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 4;
        case "message":
            switch (Rm()) {
            case yo:
                return 1;
            case Cu:
                return 4;
            case As:
            case jm:
                return 16;
            case Bu:
                return 536870912;
            default:
                return 16
            }
        default:
            return 16
        }
    }
    var qt = null
      , zo = null
      , Ds = null;
    function Uu() {
        if (Ds)
            return Ds;
        var e, t = zo, n = t.length, o, l = "value"in qt ? qt.value : qt.textContent, u = l.length;
        for (e = 0; e < n && t[e] === l[e]; e++)
            ;
        var h = n - e;
        for (o = 1; o <= h && t[n - o] === l[u - o]; o++)
            ;
        return Ds = l.slice(e, 1 < o ? 1 - o : void 0)
    }
    function Ws(e) {
        var t = e.keyCode;
        return "charCode"in e ? (e = e.charCode,
        e === 0 && t === 13 && (e = 13)) : e = t,
        e === 10 && (e = 13),
        32 <= e || e === 13 ? e : 0
    }
    function _s() {
        return !0
    }
    function $u() {
        return !1
    }
    function ot(e) {
        function t(n, o, l, u, h) {
            this._reactName = n,
            this._targetInst = l,
            this.type = o,
            this.nativeEvent = u,
            this.target = h,
            this.currentTarget = null;
            for (var x in e)
                e.hasOwnProperty(x) && (n = e[x],
                this[x] = n ? n(u) : u[x]);
            return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? _s : $u,
            this.isPropagationStopped = $u,
            this
        }
        return O(t.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var n = this.nativeEvent;
                n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
                this.isDefaultPrevented = _s)
            },
            stopPropagation: function() {
                var n = this.nativeEvent;
                n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
                this.isPropagationStopped = _s)
            },
            persist: function() {},
            isPersistent: _s
        }),
        t
    }
    var On = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(e) {
            return e.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    }, To = ot(On), br = O({}, On, {
        view: 0,
        detail: 0
    }), Bm = ot(br), Eo, So, Vr, Qs = O({}, br, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: Mo,
        button: 0,
        buttons: 0,
        relatedTarget: function(e) {
            return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
        },
        movementX: function(e) {
            return "movementX"in e ? e.movementX : (e !== Vr && (Vr && e.type === "mousemove" ? (Eo = e.screenX - Vr.screenX,
            So = e.screenY - Vr.screenY) : So = Eo = 0,
            Vr = e),
            Eo)
        },
        movementY: function(e) {
            return "movementY"in e ? e.movementY : So
        }
    }), Hu = ot(Qs), Dm = O({}, Qs, {
        dataTransfer: 0
    }), Wm = ot(Dm), _m = O({}, br, {
        relatedTarget: 0
    }), Ao = ot(_m), Qm = O({}, On, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }), Ym = ot(Qm), Om = O({}, On, {
        clipboardData: function(e) {
            return "clipboardData"in e ? e.clipboardData : window.clipboardData
        }
    }), Im = ot(Om), Fm = O({}, On, {
        data: 0
    }), Ku = ot(Fm), Zm = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
    }, Jm = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
    }, Um = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };
    function $m(e) {
        var t = this.nativeEvent;
        return t.getModifierState ? t.getModifierState(e) : (e = Um[e]) ? !!t[e] : !1
    }
    function Mo() {
        return $m
    }
    var Hm = O({}, br, {
        key: function(e) {
            if (e.key) {
                var t = Zm[e.key] || e.key;
                if (t !== "Unidentified")
                    return t
            }
            return e.type === "keypress" ? (e = Ws(e),
            e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Jm[e.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: Mo,
        charCode: function(e) {
            return e.type === "keypress" ? Ws(e) : 0
        },
        keyCode: function(e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        },
        which: function(e) {
            return e.type === "keypress" ? Ws(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        }
    })
      , Km = ot(Hm)
      , Gm = O({}, Qs, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    })
      , Gu = ot(Gm)
      , Xm = O({}, br, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: Mo
    })
      , qm = ot(Xm)
      , ey = O({}, On, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    })
      , ty = ot(ey)
      , ny = O({}, Qs, {
        deltaX: function(e) {
            return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
        },
        deltaY: function(e) {
            return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    })
      , ry = ot(ny)
      , sy = [9, 13, 27, 32]
      , No = p && "CompositionEvent"in window
      , Pr = null;
    p && "documentMode"in document && (Pr = document.documentMode);
    var iy = p && "TextEvent"in window && !Pr
      , Xu = p && (!No || Pr && 8 < Pr && 11 >= Pr)
      , qu = " "
      , ec = !1;
    function tc(e, t) {
        switch (e) {
        case "keyup":
            return sy.indexOf(t.keyCode) !== -1;
        case "keydown":
            return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
        }
    }
    function nc(e) {
        return e = e.detail,
        typeof e == "object" && "data"in e ? e.data : null
    }
    var In = !1;
    function oy(e, t) {
        switch (e) {
        case "compositionend":
            return nc(t);
        case "keypress":
            return t.which !== 32 ? null : (ec = !0,
            qu);
        case "textInput":
            return e = t.data,
            e === qu && ec ? null : e;
        default:
            return null
        }
    }
    function ay(e, t) {
        if (In)
            return e === "compositionend" || !No && tc(e, t) ? (e = Uu(),
            Ds = zo = qt = null,
            In = !1,
            e) : null;
        switch (e) {
        case "paste":
            return null;
        case "keypress":
            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                if (t.char && 1 < t.char.length)
                    return t.char;
                if (t.which)
                    return String.fromCharCode(t.which)
            }
            return null;
        case "compositionend":
            return Xu && t.locale !== "ko" ? null : t.data;
        default:
            return null
        }
    }
    var ly = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0
    };
    function rc(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t === "input" ? !!ly[e.type] : t === "textarea"
    }
    function sc(e, t, n, o) {
        zu(o),
        t = Zs(t, "onChange"),
        0 < t.length && (n = new To("onChange","change",null,n,o),
        e.push({
            event: n,
            listeners: t
        }))
    }
    var Cr = null
      , Br = null;
    function uy(e) {
        Rc(e, 0)
    }
    function Ys(e) {
        var t = $n(e);
        if (fu(t))
            return e
    }
    function cy(e, t) {
        if (e === "change")
            return t
    }
    var ic = !1;
    if (p) {
        var ko;
        if (p) {
            var bo = "oninput"in document;
            if (!bo) {
                var oc = document.createElement("div");
                oc.setAttribute("oninput", "return;"),
                bo = typeof oc.oninput == "function"
            }
            ko = bo
        } else
            ko = !1;
        ic = ko && (!document.documentMode || 9 < document.documentMode)
    }
    function ac() {
        Cr && (Cr.detachEvent("onpropertychange", lc),
        Br = Cr = null)
    }
    function lc(e) {
        if (e.propertyName === "value" && Ys(Br)) {
            var t = [];
            sc(t, Br, e, co(e)),
            Au(uy, t)
        }
    }
    function dy(e, t, n) {
        e === "focusin" ? (ac(),
        Cr = t,
        Br = n,
        Cr.attachEvent("onpropertychange", lc)) : e === "focusout" && ac()
    }
    function fy(e) {
        if (e === "selectionchange" || e === "keyup" || e === "keydown")
            return Ys(Br)
    }
    function hy(e, t) {
        if (e === "click")
            return Ys(t)
    }
    function py(e, t) {
        if (e === "input" || e === "change")
            return Ys(t)
    }
    function my(e, t) {
        return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
    }
    var jt = typeof Object.is == "function" ? Object.is : my;
    function Dr(e, t) {
        if (jt(e, t))
            return !0;
        if (typeof e != "object" || e === null || typeof t != "object" || t === null)
            return !1;
        var n = Object.keys(e)
          , o = Object.keys(t);
        if (n.length !== o.length)
            return !1;
        for (o = 0; o < n.length; o++) {
            var l = n[o];
            if (!m.call(t, l) || !jt(e[l], t[l]))
                return !1
        }
        return !0
    }
    function uc(e) {
        for (; e && e.firstChild; )
            e = e.firstChild;
        return e
    }
    function cc(e, t) {
        var n = uc(e);
        e = 0;
        for (var o; n; ) {
            if (n.nodeType === 3) {
                if (o = e + n.textContent.length,
                e <= t && o >= t)
                    return {
                        node: n,
                        offset: t - e
                    };
                e = o
            }
            e: {
                for (; n; ) {
                    if (n.nextSibling) {
                        n = n.nextSibling;
                        break e
                    }
                    n = n.parentNode
                }
                n = void 0
            }
            n = uc(n)
        }
    }
    function dc(e, t) {
        return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? dc(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
    }
    function fc() {
        for (var e = window, t = zs(); t instanceof e.HTMLIFrameElement; ) {
            try {
                var n = typeof t.contentWindow.location.href == "string"
            } catch {
                n = !1
            }
            if (n)
                e = t.contentWindow;
            else
                break;
            t = zs(e.document)
        }
        return t
    }
    function Vo(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
    }
    function yy(e) {
        var t = fc()
          , n = e.focusedElem
          , o = e.selectionRange;
        if (t !== n && n && n.ownerDocument && dc(n.ownerDocument.documentElement, n)) {
            if (o !== null && Vo(n)) {
                if (t = o.start,
                e = o.end,
                e === void 0 && (e = t),
                "selectionStart"in n)
                    n.selectionStart = t,
                    n.selectionEnd = Math.min(e, n.value.length);
                else if (e = (t = n.ownerDocument || document) && t.defaultView || window,
                e.getSelection) {
                    e = e.getSelection();
                    var l = n.textContent.length
                      , u = Math.min(o.start, l);
                    o = o.end === void 0 ? u : Math.min(o.end, l),
                    !e.extend && u > o && (l = o,
                    o = u,
                    u = l),
                    l = cc(n, u);
                    var h = cc(n, o);
                    l && h && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== h.node || e.focusOffset !== h.offset) && (t = t.createRange(),
                    t.setStart(l.node, l.offset),
                    e.removeAllRanges(),
                    u > o ? (e.addRange(t),
                    e.extend(h.node, h.offset)) : (t.setEnd(h.node, h.offset),
                    e.addRange(t)))
                }
            }
            for (t = [],
            e = n; e = e.parentNode; )
                e.nodeType === 1 && t.push({
                    element: e,
                    left: e.scrollLeft,
                    top: e.scrollTop
                });
            for (typeof n.focus == "function" && n.focus(),
            n = 0; n < t.length; n++)
                e = t[n],
                e.element.scrollLeft = e.left,
                e.element.scrollTop = e.top
        }
    }
    var gy = p && "documentMode"in document && 11 >= document.documentMode
      , Fn = null
      , Po = null
      , Wr = null
      , Co = !1;
    function hc(e, t, n) {
        var o = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
        Co || Fn == null || Fn !== zs(o) || (o = Fn,
        "selectionStart"in o && Vo(o) ? o = {
            start: o.selectionStart,
            end: o.selectionEnd
        } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(),
        o = {
            anchorNode: o.anchorNode,
            anchorOffset: o.anchorOffset,
            focusNode: o.focusNode,
            focusOffset: o.focusOffset
        }),
        Wr && Dr(Wr, o) || (Wr = o,
        o = Zs(Po, "onSelect"),
        0 < o.length && (t = new To("onSelect","select",null,t,n),
        e.push({
            event: t,
            listeners: o
        }),
        t.target = Fn)))
    }
    function Os(e, t) {
        var n = {};
        return n[e.toLowerCase()] = t.toLowerCase(),
        n["Webkit" + e] = "webkit" + t,
        n["Moz" + e] = "moz" + t,
        n
    }
    var Zn = {
        animationend: Os("Animation", "AnimationEnd"),
        animationiteration: Os("Animation", "AnimationIteration"),
        animationstart: Os("Animation", "AnimationStart"),
        transitionend: Os("Transition", "TransitionEnd")
    }
      , Bo = {}
      , pc = {};
    p && (pc = document.createElement("div").style,
    "AnimationEvent"in window || (delete Zn.animationend.animation,
    delete Zn.animationiteration.animation,
    delete Zn.animationstart.animation),
    "TransitionEvent"in window || delete Zn.transitionend.transition);
    function Is(e) {
        if (Bo[e])
            return Bo[e];
        if (!Zn[e])
            return e;
        var t = Zn[e], n;
        for (n in t)
            if (t.hasOwnProperty(n) && n in pc)
                return Bo[e] = t[n];
        return e
    }
    var mc = Is("animationend")
      , yc = Is("animationiteration")
      , gc = Is("animationstart")
      , vc = Is("transitionend")
      , xc = new Map
      , wc = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    function en(e, t) {
        xc.set(e, t),
        f(t, [e])
    }
    for (var Do = 0; Do < wc.length; Do++) {
        var Wo = wc[Do]
          , vy = Wo.toLowerCase()
          , xy = Wo[0].toUpperCase() + Wo.slice(1);
        en(vy, "on" + xy)
    }
    en(mc, "onAnimationEnd"),
    en(yc, "onAnimationIteration"),
    en(gc, "onAnimationStart"),
    en("dblclick", "onDoubleClick"),
    en("focusin", "onFocus"),
    en("focusout", "onBlur"),
    en(vc, "onTransitionEnd"),
    d("onMouseEnter", ["mouseout", "mouseover"]),
    d("onMouseLeave", ["mouseout", "mouseover"]),
    d("onPointerEnter", ["pointerout", "pointerover"]),
    d("onPointerLeave", ["pointerout", "pointerover"]),
    f("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
    f("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),
    f("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    f("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
    f("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")),
    f("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var _r = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
      , wy = new Set("cancel close invalid load scroll toggle".split(" ").concat(_r));
    function Lc(e, t, n) {
        var o = e.type || "unknown-event";
        e.currentTarget = n,
        vm(o, t, void 0, e),
        e.currentTarget = null
    }
    function Rc(e, t) {
        t = (t & 4) !== 0;
        for (var n = 0; n < e.length; n++) {
            var o = e[n]
              , l = o.event;
            o = o.listeners;
            e: {
                var u = void 0;
                if (t)
                    for (var h = o.length - 1; 0 <= h; h--) {
                        var x = o[h]
                          , L = x.instance
                          , S = x.currentTarget;
                        if (x = x.listener,
                        L !== u && l.isPropagationStopped())
                            break e;
                        Lc(l, x, S),
                        u = L
                    }
                else
                    for (h = 0; h < o.length; h++) {
                        if (x = o[h],
                        L = x.instance,
                        S = x.currentTarget,
                        x = x.listener,
                        L !== u && l.isPropagationStopped())
                            break e;
                        Lc(l, x, S),
                        u = L
                    }
            }
        }
        if (Ss)
            throw e = mo,
            Ss = !1,
            mo = null,
            e
    }
    function ge(e, t) {
        var n = t[Jo];
        n === void 0 && (n = t[Jo] = new Set);
        var o = e + "__bubble";
        n.has(o) || (jc(t, e, 2, !1),
        n.add(o))
    }
    function _o(e, t, n) {
        var o = 0;
        t && (o |= 4),
        jc(n, e, o, t)
    }
    var Fs = "_reactListening" + Math.random().toString(36).slice(2);
    function Qr(e) {
        if (!e[Fs]) {
            e[Fs] = !0,
            a.forEach(function(n) {
                n !== "selectionchange" && (wy.has(n) || _o(n, !1, e),
                _o(n, !0, e))
            });
            var t = e.nodeType === 9 ? e : e.ownerDocument;
            t === null || t[Fs] || (t[Fs] = !0,
            _o("selectionchange", !1, t))
        }
    }
    function jc(e, t, n, o) {
        switch (Ju(t)) {
        case 1:
            var l = Pm;
            break;
        case 4:
            l = Cm;
            break;
        default:
            l = Ro
        }
        n = l.bind(null, t, n, e),
        l = void 0,
        !po || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0),
        o ? l !== void 0 ? e.addEventListener(t, n, {
            capture: !0,
            passive: l
        }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, {
            passive: l
        }) : e.addEventListener(t, n, !1)
    }
    function Qo(e, t, n, o, l) {
        var u = o;
        if ((t & 1) === 0 && (t & 2) === 0 && o !== null)
            e: for (; ; ) {
                if (o === null)
                    return;
                var h = o.tag;
                if (h === 3 || h === 4) {
                    var x = o.stateNode.containerInfo;
                    if (x === l || x.nodeType === 8 && x.parentNode === l)
                        break;
                    if (h === 4)
                        for (h = o.return; h !== null; ) {
                            var L = h.tag;
                            if ((L === 3 || L === 4) && (L = h.stateNode.containerInfo,
                            L === l || L.nodeType === 8 && L.parentNode === l))
                                return;
                            h = h.return
                        }
                    for (; x !== null; ) {
                        if (h = wn(x),
                        h === null)
                            return;
                        if (L = h.tag,
                        L === 5 || L === 6) {
                            o = u = h;
                            continue e
                        }
                        x = x.parentNode
                    }
                }
                o = o.return
            }
        Au(function() {
            var S = u
              , b = co(n)
              , P = [];
            e: {
                var N = xc.get(e);
                if (N !== void 0) {
                    var Q = To
                      , J = e;
                    switch (e) {
                    case "keypress":
                        if (Ws(n) === 0)
                            break e;
                    case "keydown":
                    case "keyup":
                        Q = Km;
                        break;
                    case "focusin":
                        J = "focus",
                        Q = Ao;
                        break;
                    case "focusout":
                        J = "blur",
                        Q = Ao;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        Q = Ao;
                        break;
                    case "click":
                        if (n.button === 2)
                            break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        Q = Hu;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        Q = Wm;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        Q = qm;
                        break;
                    case mc:
                    case yc:
                    case gc:
                        Q = Ym;
                        break;
                    case vc:
                        Q = ty;
                        break;
                    case "scroll":
                        Q = Bm;
                        break;
                    case "wheel":
                        Q = ry;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        Q = Im;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        Q = Gu
                    }
                    var U = (t & 4) !== 0
                      , Me = !U && e === "scroll"
                      , T = U ? N !== null ? N + "Capture" : null : N;
                    U = [];
                    for (var R = S, E; R !== null; ) {
                        E = R;
                        var B = E.stateNode;
                        if (E.tag === 5 && B !== null && (E = B,
                        T !== null && (B = Rr(R, T),
                        B != null && U.push(Yr(R, B, E)))),
                        Me)
                            break;
                        R = R.return
                    }
                    0 < U.length && (N = new Q(N,J,null,n,b),
                    P.push({
                        event: N,
                        listeners: U
                    }))
                }
            }
            if ((t & 7) === 0) {
                e: {
                    if (N = e === "mouseover" || e === "pointerover",
                    Q = e === "mouseout" || e === "pointerout",
                    N && n !== uo && (J = n.relatedTarget || n.fromElement) && (wn(J) || J[Dt]))
                        break e;
                    if ((Q || N) && (N = b.window === b ? b : (N = b.ownerDocument) ? N.defaultView || N.parentWindow : window,
                    Q ? (J = n.relatedTarget || n.toElement,
                    Q = S,
                    J = J ? wn(J) : null,
                    J !== null && (Me = xn(J),
                    J !== Me || J.tag !== 5 && J.tag !== 6) && (J = null)) : (Q = null,
                    J = S),
                    Q !== J)) {
                        if (U = Hu,
                        B = "onMouseLeave",
                        T = "onMouseEnter",
                        R = "mouse",
                        (e === "pointerout" || e === "pointerover") && (U = Gu,
                        B = "onPointerLeave",
                        T = "onPointerEnter",
                        R = "pointer"),
                        Me = Q == null ? N : $n(Q),
                        E = J == null ? N : $n(J),
                        N = new U(B,R + "leave",Q,n,b),
                        N.target = Me,
                        N.relatedTarget = E,
                        B = null,
                        wn(b) === S && (U = new U(T,R + "enter",J,n,b),
                        U.target = E,
                        U.relatedTarget = Me,
                        B = U),
                        Me = B,
                        Q && J)
                            t: {
                                for (U = Q,
                                T = J,
                                R = 0,
                                E = U; E; E = Jn(E))
                                    R++;
                                for (E = 0,
                                B = T; B; B = Jn(B))
                                    E++;
                                for (; 0 < R - E; )
                                    U = Jn(U),
                                    R--;
                                for (; 0 < E - R; )
                                    T = Jn(T),
                                    E--;
                                for (; R--; ) {
                                    if (U === T || T !== null && U === T.alternate)
                                        break t;
                                    U = Jn(U),
                                    T = Jn(T)
                                }
                                U = null
                            }
                        else
                            U = null;
                        Q !== null && zc(P, N, Q, U, !1),
                        J !== null && Me !== null && zc(P, Me, J, U, !0)
                    }
                }
                e: {
                    if (N = S ? $n(S) : window,
                    Q = N.nodeName && N.nodeName.toLowerCase(),
                    Q === "select" || Q === "input" && N.type === "file")
                        var $ = cy;
                    else if (rc(N))
                        if (ic)
                            $ = py;
                        else {
                            $ = fy;
                            var X = dy
                        }
                    else
                        (Q = N.nodeName) && Q.toLowerCase() === "input" && (N.type === "checkbox" || N.type === "radio") && ($ = hy);
                    if ($ && ($ = $(e, S))) {
                        sc(P, $, n, b);
                        break e
                    }
                    X && X(e, N, S),
                    e === "focusout" && (X = N._wrapperState) && X.controlled && N.type === "number" && so(N, "number", N.value)
                }
                switch (X = S ? $n(S) : window,
                e) {
                case "focusin":
                    (rc(X) || X.contentEditable === "true") && (Fn = X,
                    Po = S,
                    Wr = null);
                    break;
                case "focusout":
                    Wr = Po = Fn = null;
                    break;
                case "mousedown":
                    Co = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    Co = !1,
                    hc(P, n, b);
                    break;
                case "selectionchange":
                    if (gy)
                        break;
                case "keydown":
                case "keyup":
                    hc(P, n, b)
                }
                var q;
                if (No)
                    e: {
                        switch (e) {
                        case "compositionstart":
                            var ne = "onCompositionStart";
                            break e;
                        case "compositionend":
                            ne = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            ne = "onCompositionUpdate";
                            break e
                        }
                        ne = void 0
                    }
                else
                    In ? tc(e, n) && (ne = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (ne = "onCompositionStart");
                ne && (Xu && n.locale !== "ko" && (In || ne !== "onCompositionStart" ? ne === "onCompositionEnd" && In && (q = Uu()) : (qt = b,
                zo = "value"in qt ? qt.value : qt.textContent,
                In = !0)),
                X = Zs(S, ne),
                0 < X.length && (ne = new Ku(ne,e,null,n,b),
                P.push({
                    event: ne,
                    listeners: X
                }),
                q ? ne.data = q : (q = nc(n),
                q !== null && (ne.data = q)))),
                (q = iy ? oy(e, n) : ay(e, n)) && (S = Zs(S, "onBeforeInput"),
                0 < S.length && (b = new Ku("onBeforeInput","beforeinput",null,n,b),
                P.push({
                    event: b,
                    listeners: S
                }),
                b.data = q))
            }
            Rc(P, t)
        })
    }
    function Yr(e, t, n) {
        return {
            instance: e,
            listener: t,
            currentTarget: n
        }
    }
    function Zs(e, t) {
        for (var n = t + "Capture", o = []; e !== null; ) {
            var l = e
              , u = l.stateNode;
            l.tag === 5 && u !== null && (l = u,
            u = Rr(e, n),
            u != null && o.unshift(Yr(e, u, l)),
            u = Rr(e, t),
            u != null && o.push(Yr(e, u, l))),
            e = e.return
        }
        return o
    }
    function Jn(e) {
        if (e === null)
            return null;
        do
            e = e.return;
        while (e && e.tag !== 5);
        return e || null
    }
    function zc(e, t, n, o, l) {
        for (var u = t._reactName, h = []; n !== null && n !== o; ) {
            var x = n
              , L = x.alternate
              , S = x.stateNode;
            if (L !== null && L === o)
                break;
            x.tag === 5 && S !== null && (x = S,
            l ? (L = Rr(n, u),
            L != null && h.unshift(Yr(n, L, x))) : l || (L = Rr(n, u),
            L != null && h.push(Yr(n, L, x)))),
            n = n.return
        }
        h.length !== 0 && e.push({
            event: t,
            listeners: h
        })
    }
    var Ly = /\r\n?/g
      , Ry = /\u0000|\uFFFD/g;
    function Tc(e) {
        return (typeof e == "string" ? e : "" + e).replace(Ly, `
`).replace(Ry, "")
    }
    function Js(e, t, n) {
        if (t = Tc(t),
        Tc(e) !== t && n)
            throw Error(i(425))
    }
    function Us() {}
    var Yo = null
      , Oo = null;
    function Io(e, t) {
        return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
    }
    var Fo = typeof setTimeout == "function" ? setTimeout : void 0
      , jy = typeof clearTimeout == "function" ? clearTimeout : void 0
      , Ec = typeof Promise == "function" ? Promise : void 0
      , zy = typeof queueMicrotask == "function" ? queueMicrotask : typeof Ec < "u" ? function(e) {
        return Ec.resolve(null).then(e).catch(Ty)
    }
    : Fo;
    function Ty(e) {
        setTimeout(function() {
            throw e
        })
    }
    function Zo(e, t) {
        var n = t
          , o = 0;
        do {
            var l = n.nextSibling;
            if (e.removeChild(n),
            l && l.nodeType === 8)
                if (n = l.data,
                n === "/$") {
                    if (o === 0) {
                        e.removeChild(l),
                        kr(t);
                        return
                    }
                    o--
                } else
                    n !== "$" && n !== "$?" && n !== "$!" || o++;
            n = l
        } while (n);
        kr(t)
    }
    function tn(e) {
        for (; e != null; e = e.nextSibling) {
            var t = e.nodeType;
            if (t === 1 || t === 3)
                break;
            if (t === 8) {
                if (t = e.data,
                t === "$" || t === "$!" || t === "$?")
                    break;
                if (t === "/$")
                    return null
            }
        }
        return e
    }
    function Sc(e) {
        e = e.previousSibling;
        for (var t = 0; e; ) {
            if (e.nodeType === 8) {
                var n = e.data;
                if (n === "$" || n === "$!" || n === "$?") {
                    if (t === 0)
                        return e;
                    t--
                } else
                    n === "/$" && t++
            }
            e = e.previousSibling
        }
        return null
    }
    var Un = Math.random().toString(36).slice(2)
      , kt = "__reactFiber$" + Un
      , Or = "__reactProps$" + Un
      , Dt = "__reactContainer$" + Un
      , Jo = "__reactEvents$" + Un
      , Ey = "__reactListeners$" + Un
      , Sy = "__reactHandles$" + Un;
    function wn(e) {
        var t = e[kt];
        if (t)
            return t;
        for (var n = e.parentNode; n; ) {
            if (t = n[Dt] || n[kt]) {
                if (n = t.alternate,
                t.child !== null || n !== null && n.child !== null)
                    for (e = Sc(e); e !== null; ) {
                        if (n = e[kt])
                            return n;
                        e = Sc(e)
                    }
                return t
            }
            e = n,
            n = e.parentNode
        }
        return null
    }
    function Ir(e) {
        return e = e[kt] || e[Dt],
        !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
    }
    function $n(e) {
        if (e.tag === 5 || e.tag === 6)
            return e.stateNode;
        throw Error(i(33))
    }
    function $s(e) {
        return e[Or] || null
    }
    var Uo = []
      , Hn = -1;
    function nn(e) {
        return {
            current: e
        }
    }
    function ve(e) {
        0 > Hn || (e.current = Uo[Hn],
        Uo[Hn] = null,
        Hn--)
    }
    function me(e, t) {
        Hn++,
        Uo[Hn] = e.current,
        e.current = t
    }
    var rn = {}
      , Qe = nn(rn)
      , Xe = nn(!1)
      , Ln = rn;
    function Kn(e, t) {
        var n = e.type.contextTypes;
        if (!n)
            return rn;
        var o = e.stateNode;
        if (o && o.__reactInternalMemoizedUnmaskedChildContext === t)
            return o.__reactInternalMemoizedMaskedChildContext;
        var l = {}, u;
        for (u in n)
            l[u] = t[u];
        return o && (e = e.stateNode,
        e.__reactInternalMemoizedUnmaskedChildContext = t,
        e.__reactInternalMemoizedMaskedChildContext = l),
        l
    }
    function qe(e) {
        return e = e.childContextTypes,
        e != null
    }
    function Hs() {
        ve(Xe),
        ve(Qe)
    }
    function Ac(e, t, n) {
        if (Qe.current !== rn)
            throw Error(i(168));
        me(Qe, t),
        me(Xe, n)
    }
    function Mc(e, t, n) {
        var o = e.stateNode;
        if (t = t.childContextTypes,
        typeof o.getChildContext != "function")
            return n;
        o = o.getChildContext();
        for (var l in o)
            if (!(l in t))
                throw Error(i(108, pe(e) || "Unknown", l));
        return O({}, n, o)
    }
    function Ks(e) {
        return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || rn,
        Ln = Qe.current,
        me(Qe, e),
        me(Xe, Xe.current),
        !0
    }
    function Nc(e, t, n) {
        var o = e.stateNode;
        if (!o)
            throw Error(i(169));
        n ? (e = Mc(e, t, Ln),
        o.__reactInternalMemoizedMergedChildContext = e,
        ve(Xe),
        ve(Qe),
        me(Qe, e)) : ve(Xe),
        me(Xe, n)
    }
    var Wt = null
      , Gs = !1
      , $o = !1;
    function kc(e) {
        Wt === null ? Wt = [e] : Wt.push(e)
    }
    function Ay(e) {
        Gs = !0,
        kc(e)
    }
    function sn() {
        if (!$o && Wt !== null) {
            $o = !0;
            var e = 0
              , t = he;
            try {
                var n = Wt;
                for (he = 1; e < n.length; e++) {
                    var o = n[e];
                    do
                        o = o(!0);
                    while (o !== null)
                }
                Wt = null,
                Gs = !1
            } catch (l) {
                throw Wt !== null && (Wt = Wt.slice(e + 1)),
                Vu(yo, sn),
                l
            } finally {
                he = t,
                $o = !1
            }
        }
        return null
    }
    var Gn = []
      , Xn = 0
      , Xs = null
      , qs = 0
      , ht = []
      , pt = 0
      , Rn = null
      , _t = 1
      , Qt = "";
    function jn(e, t) {
        Gn[Xn++] = qs,
        Gn[Xn++] = Xs,
        Xs = e,
        qs = t
    }
    function bc(e, t, n) {
        ht[pt++] = _t,
        ht[pt++] = Qt,
        ht[pt++] = Rn,
        Rn = e;
        var o = _t;
        e = Qt;
        var l = 32 - Rt(o) - 1;
        o &= ~(1 << l),
        n += 1;
        var u = 32 - Rt(t) + l;
        if (30 < u) {
            var h = l - l % 5;
            u = (o & (1 << h) - 1).toString(32),
            o >>= h,
            l -= h,
            _t = 1 << 32 - Rt(t) + l | n << l | o,
            Qt = u + e
        } else
            _t = 1 << u | n << l | o,
            Qt = e
    }
    function Ho(e) {
        e.return !== null && (jn(e, 1),
        bc(e, 1, 0))
    }
    function Ko(e) {
        for (; e === Xs; )
            Xs = Gn[--Xn],
            Gn[Xn] = null,
            qs = Gn[--Xn],
            Gn[Xn] = null;
        for (; e === Rn; )
            Rn = ht[--pt],
            ht[pt] = null,
            Qt = ht[--pt],
            ht[pt] = null,
            _t = ht[--pt],
            ht[pt] = null
    }
    var at = null
      , lt = null
      , Le = !1
      , zt = null;
    function Vc(e, t) {
        var n = vt(5, null, null, 0);
        n.elementType = "DELETED",
        n.stateNode = t,
        n.return = e,
        t = e.deletions,
        t === null ? (e.deletions = [n],
        e.flags |= 16) : t.push(n)
    }
    function Pc(e, t) {
        switch (e.tag) {
        case 5:
            var n = e.type;
            return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
            t !== null ? (e.stateNode = t,
            at = e,
            lt = tn(t.firstChild),
            !0) : !1;
        case 6:
            return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
            t !== null ? (e.stateNode = t,
            at = e,
            lt = null,
            !0) : !1;
        case 13:
            return t = t.nodeType !== 8 ? null : t,
            t !== null ? (n = Rn !== null ? {
                id: _t,
                overflow: Qt
            } : null,
            e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824
            },
            n = vt(18, null, null, 0),
            n.stateNode = t,
            n.return = e,
            e.child = n,
            at = e,
            lt = null,
            !0) : !1;
        default:
            return !1
        }
    }
    function Go(e) {
        return (e.mode & 1) !== 0 && (e.flags & 128) === 0
    }
    function Xo(e) {
        if (Le) {
            var t = lt;
            if (t) {
                var n = t;
                if (!Pc(e, t)) {
                    if (Go(e))
                        throw Error(i(418));
                    t = tn(n.nextSibling);
                    var o = at;
                    t && Pc(e, t) ? Vc(o, n) : (e.flags = e.flags & -4097 | 2,
                    Le = !1,
                    at = e)
                }
            } else {
                if (Go(e))
                    throw Error(i(418));
                e.flags = e.flags & -4097 | 2,
                Le = !1,
                at = e
            }
        }
    }
    function Cc(e) {
        for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
            e = e.return;
        at = e
    }
    function ei(e) {
        if (e !== at)
            return !1;
        if (!Le)
            return Cc(e),
            Le = !0,
            !1;
        var t;
        if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
        t = t !== "head" && t !== "body" && !Io(e.type, e.memoizedProps)),
        t && (t = lt)) {
            if (Go(e))
                throw Bc(),
                Error(i(418));
            for (; t; )
                Vc(e, t),
                t = tn(t.nextSibling)
        }
        if (Cc(e),
        e.tag === 13) {
            if (e = e.memoizedState,
            e = e !== null ? e.dehydrated : null,
            !e)
                throw Error(i(317));
            e: {
                for (e = e.nextSibling,
                t = 0; e; ) {
                    if (e.nodeType === 8) {
                        var n = e.data;
                        if (n === "/$") {
                            if (t === 0) {
                                lt = tn(e.nextSibling);
                                break e
                            }
                            t--
                        } else
                            n !== "$" && n !== "$!" && n !== "$?" || t++
                    }
                    e = e.nextSibling
                }
                lt = null
            }
        } else
            lt = at ? tn(e.stateNode.nextSibling) : null;
        return !0
    }
    function Bc() {
        for (var e = lt; e; )
            e = tn(e.nextSibling)
    }
    function qn() {
        lt = at = null,
        Le = !1
    }
    function qo(e) {
        zt === null ? zt = [e] : zt.push(e)
    }
    var My = H.ReactCurrentBatchConfig;
    function Fr(e, t, n) {
        if (e = n.ref,
        e !== null && typeof e != "function" && typeof e != "object") {
            if (n._owner) {
                if (n = n._owner,
                n) {
                    if (n.tag !== 1)
                        throw Error(i(309));
                    var o = n.stateNode
                }
                if (!o)
                    throw Error(i(147, e));
                var l = o
                  , u = "" + e;
                return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === u ? t.ref : (t = function(h) {
                    var x = l.refs;
                    h === null ? delete x[u] : x[u] = h
                }
                ,
                t._stringRef = u,
                t)
            }
            if (typeof e != "string")
                throw Error(i(284));
            if (!n._owner)
                throw Error(i(290, e))
        }
        return e
    }
    function ti(e, t) {
        throw e = Object.prototype.toString.call(t),
        Error(i(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
    }
    function Dc(e) {
        var t = e._init;
        return t(e._payload)
    }
    function Wc(e) {
        function t(T, R) {
            if (e) {
                var E = T.deletions;
                E === null ? (T.deletions = [R],
                T.flags |= 16) : E.push(R)
            }
        }
        function n(T, R) {
            if (!e)
                return null;
            for (; R !== null; )
                t(T, R),
                R = R.sibling;
            return null
        }
        function o(T, R) {
            for (T = new Map; R !== null; )
                R.key !== null ? T.set(R.key, R) : T.set(R.index, R),
                R = R.sibling;
            return T
        }
        function l(T, R) {
            return T = hn(T, R),
            T.index = 0,
            T.sibling = null,
            T
        }
        function u(T, R, E) {
            return T.index = E,
            e ? (E = T.alternate,
            E !== null ? (E = E.index,
            E < R ? (T.flags |= 2,
            R) : E) : (T.flags |= 2,
            R)) : (T.flags |= 1048576,
            R)
        }
        function h(T) {
            return e && T.alternate === null && (T.flags |= 2),
            T
        }
        function x(T, R, E, B) {
            return R === null || R.tag !== 6 ? (R = Fa(E, T.mode, B),
            R.return = T,
            R) : (R = l(R, E),
            R.return = T,
            R)
        }
        function L(T, R, E, B) {
            var $ = E.type;
            return $ === ae ? b(T, R, E.props.children, B, E.key) : R !== null && (R.elementType === $ || typeof $ == "object" && $ !== null && $.$$typeof === Ue && Dc($) === R.type) ? (B = l(R, E.props),
            B.ref = Fr(T, R, E),
            B.return = T,
            B) : (B = Ti(E.type, E.key, E.props, null, T.mode, B),
            B.ref = Fr(T, R, E),
            B.return = T,
            B)
        }
        function S(T, R, E, B) {
            return R === null || R.tag !== 4 || R.stateNode.containerInfo !== E.containerInfo || R.stateNode.implementation !== E.implementation ? (R = Za(E, T.mode, B),
            R.return = T,
            R) : (R = l(R, E.children || []),
            R.return = T,
            R)
        }
        function b(T, R, E, B, $) {
            return R === null || R.tag !== 7 ? (R = kn(E, T.mode, B, $),
            R.return = T,
            R) : (R = l(R, E),
            R.return = T,
            R)
        }
        function P(T, R, E) {
            if (typeof R == "string" && R !== "" || typeof R == "number")
                return R = Fa("" + R, T.mode, E),
                R.return = T,
                R;
            if (typeof R == "object" && R !== null) {
                switch (R.$$typeof) {
                case _:
                    return E = Ti(R.type, R.key, R.props, null, T.mode, E),
                    E.ref = Fr(T, null, R),
                    E.return = T,
                    E;
                case ee:
                    return R = Za(R, T.mode, E),
                    R.return = T,
                    R;
                case Ue:
                    var B = R._init;
                    return P(T, B(R._payload), E)
                }
                if (xr(R) || G(R))
                    return R = kn(R, T.mode, E, null),
                    R.return = T,
                    R;
                ti(T, R)
            }
            return null
        }
        function N(T, R, E, B) {
            var $ = R !== null ? R.key : null;
            if (typeof E == "string" && E !== "" || typeof E == "number")
                return $ !== null ? null : x(T, R, "" + E, B);
            if (typeof E == "object" && E !== null) {
                switch (E.$$typeof) {
                case _:
                    return E.key === $ ? L(T, R, E, B) : null;
                case ee:
                    return E.key === $ ? S(T, R, E, B) : null;
                case Ue:
                    return $ = E._init,
                    N(T, R, $(E._payload), B)
                }
                if (xr(E) || G(E))
                    return $ !== null ? null : b(T, R, E, B, null);
                ti(T, E)
            }
            return null
        }
        function Q(T, R, E, B, $) {
            if (typeof B == "string" && B !== "" || typeof B == "number")
                return T = T.get(E) || null,
                x(R, T, "" + B, $);
            if (typeof B == "object" && B !== null) {
                switch (B.$$typeof) {
                case _:
                    return T = T.get(B.key === null ? E : B.key) || null,
                    L(R, T, B, $);
                case ee:
                    return T = T.get(B.key === null ? E : B.key) || null,
                    S(R, T, B, $);
                case Ue:
                    var X = B._init;
                    return Q(T, R, E, X(B._payload), $)
                }
                if (xr(B) || G(B))
                    return T = T.get(E) || null,
                    b(R, T, B, $, null);
                ti(R, B)
            }
            return null
        }
        function J(T, R, E, B) {
            for (var $ = null, X = null, q = R, ne = R = 0, Be = null; q !== null && ne < E.length; ne++) {
                q.index > ne ? (Be = q,
                q = null) : Be = q.sibling;
                var de = N(T, q, E[ne], B);
                if (de === null) {
                    q === null && (q = Be);
                    break
                }
                e && q && de.alternate === null && t(T, q),
                R = u(de, R, ne),
                X === null ? $ = de : X.sibling = de,
                X = de,
                q = Be
            }
            if (ne === E.length)
                return n(T, q),
                Le && jn(T, ne),
                $;
            if (q === null) {
                for (; ne < E.length; ne++)
                    q = P(T, E[ne], B),
                    q !== null && (R = u(q, R, ne),
                    X === null ? $ = q : X.sibling = q,
                    X = q);
                return Le && jn(T, ne),
                $
            }
            for (q = o(T, q); ne < E.length; ne++)
                Be = Q(q, T, ne, E[ne], B),
                Be !== null && (e && Be.alternate !== null && q.delete(Be.key === null ? ne : Be.key),
                R = u(Be, R, ne),
                X === null ? $ = Be : X.sibling = Be,
                X = Be);
            return e && q.forEach(function(pn) {
                return t(T, pn)
            }),
            Le && jn(T, ne),
            $
        }
        function U(T, R, E, B) {
            var $ = G(E);
            if (typeof $ != "function")
                throw Error(i(150));
            if (E = $.call(E),
            E == null)
                throw Error(i(151));
            for (var X = $ = null, q = R, ne = R = 0, Be = null, de = E.next(); q !== null && !de.done; ne++,
            de = E.next()) {
                q.index > ne ? (Be = q,
                q = null) : Be = q.sibling;
                var pn = N(T, q, de.value, B);
                if (pn === null) {
                    q === null && (q = Be);
                    break
                }
                e && q && pn.alternate === null && t(T, q),
                R = u(pn, R, ne),
                X === null ? $ = pn : X.sibling = pn,
                X = pn,
                q = Be
            }
            if (de.done)
                return n(T, q),
                Le && jn(T, ne),
                $;
            if (q === null) {
                for (; !de.done; ne++,
                de = E.next())
                    de = P(T, de.value, B),
                    de !== null && (R = u(de, R, ne),
                    X === null ? $ = de : X.sibling = de,
                    X = de);
                return Le && jn(T, ne),
                $
            }
            for (q = o(T, q); !de.done; ne++,
            de = E.next())
                de = Q(q, T, ne, de.value, B),
                de !== null && (e && de.alternate !== null && q.delete(de.key === null ? ne : de.key),
                R = u(de, R, ne),
                X === null ? $ = de : X.sibling = de,
                X = de);
            return e && q.forEach(function(l0) {
                return t(T, l0)
            }),
            Le && jn(T, ne),
            $
        }
        function Me(T, R, E, B) {
            if (typeof E == "object" && E !== null && E.type === ae && E.key === null && (E = E.props.children),
            typeof E == "object" && E !== null) {
                switch (E.$$typeof) {
                case _:
                    e: {
                        for (var $ = E.key, X = R; X !== null; ) {
                            if (X.key === $) {
                                if ($ = E.type,
                                $ === ae) {
                                    if (X.tag === 7) {
                                        n(T, X.sibling),
                                        R = l(X, E.props.children),
                                        R.return = T,
                                        T = R;
                                        break e
                                    }
                                } else if (X.elementType === $ || typeof $ == "object" && $ !== null && $.$$typeof === Ue && Dc($) === X.type) {
                                    n(T, X.sibling),
                                    R = l(X, E.props),
                                    R.ref = Fr(T, X, E),
                                    R.return = T,
                                    T = R;
                                    break e
                                }
                                n(T, X);
                                break
                            } else
                                t(T, X);
                            X = X.sibling
                        }
                        E.type === ae ? (R = kn(E.props.children, T.mode, B, E.key),
                        R.return = T,
                        T = R) : (B = Ti(E.type, E.key, E.props, null, T.mode, B),
                        B.ref = Fr(T, R, E),
                        B.return = T,
                        T = B)
                    }
                    return h(T);
                case ee:
                    e: {
                        for (X = E.key; R !== null; ) {
                            if (R.key === X)
                                if (R.tag === 4 && R.stateNode.containerInfo === E.containerInfo && R.stateNode.implementation === E.implementation) {
                                    n(T, R.sibling),
                                    R = l(R, E.children || []),
                                    R.return = T,
                                    T = R;
                                    break e
                                } else {
                                    n(T, R);
                                    break
                                }
                            else
                                t(T, R);
                            R = R.sibling
                        }
                        R = Za(E, T.mode, B),
                        R.return = T,
                        T = R
                    }
                    return h(T);
                case Ue:
                    return X = E._init,
                    Me(T, R, X(E._payload), B)
                }
                if (xr(E))
                    return J(T, R, E, B);
                if (G(E))
                    return U(T, R, E, B);
                ti(T, E)
            }
            return typeof E == "string" && E !== "" || typeof E == "number" ? (E = "" + E,
            R !== null && R.tag === 6 ? (n(T, R.sibling),
            R = l(R, E),
            R.return = T,
            T = R) : (n(T, R),
            R = Fa(E, T.mode, B),
            R.return = T,
            T = R),
            h(T)) : n(T, R)
        }
        return Me
    }
    var er = Wc(!0)
      , _c = Wc(!1)
      , ni = nn(null)
      , ri = null
      , tr = null
      , ea = null;
    function ta() {
        ea = tr = ri = null
    }
    function na(e) {
        var t = ni.current;
        ve(ni),
        e._currentValue = t
    }
    function ra(e, t, n) {
        for (; e !== null; ) {
            var o = e.alternate;
            if ((e.childLanes & t) !== t ? (e.childLanes |= t,
            o !== null && (o.childLanes |= t)) : o !== null && (o.childLanes & t) !== t && (o.childLanes |= t),
            e === n)
                break;
            e = e.return
        }
    }
    function nr(e, t) {
        ri = e,
        ea = tr = null,
        e = e.dependencies,
        e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (et = !0),
        e.firstContext = null)
    }
    function mt(e) {
        var t = e._currentValue;
        if (ea !== e)
            if (e = {
                context: e,
                memoizedValue: t,
                next: null
            },
            tr === null) {
                if (ri === null)
                    throw Error(i(308));
                tr = e,
                ri.dependencies = {
                    lanes: 0,
                    firstContext: e
                }
            } else
                tr = tr.next = e;
        return t
    }
    var zn = null;
    function sa(e) {
        zn === null ? zn = [e] : zn.push(e)
    }
    function Qc(e, t, n, o) {
        var l = t.interleaved;
        return l === null ? (n.next = n,
        sa(t)) : (n.next = l.next,
        l.next = n),
        t.interleaved = n,
        Yt(e, o)
    }
    function Yt(e, t) {
        e.lanes |= t;
        var n = e.alternate;
        for (n !== null && (n.lanes |= t),
        n = e,
        e = e.return; e !== null; )
            e.childLanes |= t,
            n = e.alternate,
            n !== null && (n.childLanes |= t),
            n = e,
            e = e.return;
        return n.tag === 3 ? n.stateNode : null
    }
    var on = !1;
    function ia(e) {
        e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
                pending: null,
                interleaved: null,
                lanes: 0
            },
            effects: null
        }
    }
    function Yc(e, t) {
        e = e.updateQueue,
        t.updateQueue === e && (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            effects: e.effects
        })
    }
    function Ot(e, t) {
        return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        }
    }
    function an(e, t, n) {
        var o = e.updateQueue;
        if (o === null)
            return null;
        if (o = o.shared,
        (le & 2) !== 0) {
            var l = o.pending;
            return l === null ? t.next = t : (t.next = l.next,
            l.next = t),
            o.pending = t,
            Yt(e, n)
        }
        return l = o.interleaved,
        l === null ? (t.next = t,
        sa(o)) : (t.next = l.next,
        l.next = t),
        o.interleaved = t,
        Yt(e, n)
    }
    function si(e, t, n) {
        if (t = t.updateQueue,
        t !== null && (t = t.shared,
        (n & 4194240) !== 0)) {
            var o = t.lanes;
            o &= e.pendingLanes,
            n |= o,
            t.lanes = n,
            xo(e, n)
        }
    }
    function Oc(e, t) {
        var n = e.updateQueue
          , o = e.alternate;
        if (o !== null && (o = o.updateQueue,
        n === o)) {
            var l = null
              , u = null;
            if (n = n.firstBaseUpdate,
            n !== null) {
                do {
                    var h = {
                        eventTime: n.eventTime,
                        lane: n.lane,
                        tag: n.tag,
                        payload: n.payload,
                        callback: n.callback,
                        next: null
                    };
                    u === null ? l = u = h : u = u.next = h,
                    n = n.next
                } while (n !== null);
                u === null ? l = u = t : u = u.next = t
            } else
                l = u = t;
            n = {
                baseState: o.baseState,
                firstBaseUpdate: l,
                lastBaseUpdate: u,
                shared: o.shared,
                effects: o.effects
            },
            e.updateQueue = n;
            return
        }
        e = n.lastBaseUpdate,
        e === null ? n.firstBaseUpdate = t : e.next = t,
        n.lastBaseUpdate = t
    }
    function ii(e, t, n, o) {
        var l = e.updateQueue;
        on = !1;
        var u = l.firstBaseUpdate
          , h = l.lastBaseUpdate
          , x = l.shared.pending;
        if (x !== null) {
            l.shared.pending = null;
            var L = x
              , S = L.next;
            L.next = null,
            h === null ? u = S : h.next = S,
            h = L;
            var b = e.alternate;
            b !== null && (b = b.updateQueue,
            x = b.lastBaseUpdate,
            x !== h && (x === null ? b.firstBaseUpdate = S : x.next = S,
            b.lastBaseUpdate = L))
        }
        if (u !== null) {
            var P = l.baseState;
            h = 0,
            b = S = L = null,
            x = u;
            do {
                var N = x.lane
                  , Q = x.eventTime;
                if ((o & N) === N) {
                    b !== null && (b = b.next = {
                        eventTime: Q,
                        lane: 0,
                        tag: x.tag,
                        payload: x.payload,
                        callback: x.callback,
                        next: null
                    });
                    e: {
                        var J = e
                          , U = x;
                        switch (N = t,
                        Q = n,
                        U.tag) {
                        case 1:
                            if (J = U.payload,
                            typeof J == "function") {
                                P = J.call(Q, P, N);
                                break e
                            }
                            P = J;
                            break e;
                        case 3:
                            J.flags = J.flags & -65537 | 128;
                        case 0:
                            if (J = U.payload,
                            N = typeof J == "function" ? J.call(Q, P, N) : J,
                            N == null)
                                break e;
                            P = O({}, P, N);
                            break e;
                        case 2:
                            on = !0
                        }
                    }
                    x.callback !== null && x.lane !== 0 && (e.flags |= 64,
                    N = l.effects,
                    N === null ? l.effects = [x] : N.push(x))
                } else
                    Q = {
                        eventTime: Q,
                        lane: N,
                        tag: x.tag,
                        payload: x.payload,
                        callback: x.callback,
                        next: null
                    },
                    b === null ? (S = b = Q,
                    L = P) : b = b.next = Q,
                    h |= N;
                if (x = x.next,
                x === null) {
                    if (x = l.shared.pending,
                    x === null)
                        break;
                    N = x,
                    x = N.next,
                    N.next = null,
                    l.lastBaseUpdate = N,
                    l.shared.pending = null
                }
            } while (!0);
            if (b === null && (L = P),
            l.baseState = L,
            l.firstBaseUpdate = S,
            l.lastBaseUpdate = b,
            t = l.shared.interleaved,
            t !== null) {
                l = t;
                do
                    h |= l.lane,
                    l = l.next;
                while (l !== t)
            } else
                u === null && (l.shared.lanes = 0);
            Sn |= h,
            e.lanes = h,
            e.memoizedState = P
        }
    }
    function Ic(e, t, n) {
        if (e = t.effects,
        t.effects = null,
        e !== null)
            for (t = 0; t < e.length; t++) {
                var o = e[t]
                  , l = o.callback;
                if (l !== null) {
                    if (o.callback = null,
                    o = n,
                    typeof l != "function")
                        throw Error(i(191, l));
                    l.call(o)
                }
            }
    }
    var Zr = {}
      , bt = nn(Zr)
      , Jr = nn(Zr)
      , Ur = nn(Zr);
    function Tn(e) {
        if (e === Zr)
            throw Error(i(174));
        return e
    }
    function oa(e, t) {
        switch (me(Ur, t),
        me(Jr, e),
        me(bt, Zr),
        e = t.nodeType,
        e) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : oo(null, "");
            break;
        default:
            e = e === 8 ? t.parentNode : t,
            t = e.namespaceURI || null,
            e = e.tagName,
            t = oo(t, e)
        }
        ve(bt),
        me(bt, t)
    }
    function rr() {
        ve(bt),
        ve(Jr),
        ve(Ur)
    }
    function Fc(e) {
        Tn(Ur.current);
        var t = Tn(bt.current)
          , n = oo(t, e.type);
        t !== n && (me(Jr, e),
        me(bt, n))
    }
    function aa(e) {
        Jr.current === e && (ve(bt),
        ve(Jr))
    }
    var Re = nn(0);
    function oi(e) {
        for (var t = e; t !== null; ) {
            if (t.tag === 13) {
                var n = t.memoizedState;
                if (n !== null && (n = n.dehydrated,
                n === null || n.data === "$?" || n.data === "$!"))
                    return t
            } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
                if ((t.flags & 128) !== 0)
                    return t
            } else if (t.child !== null) {
                t.child.return = t,
                t = t.child;
                continue
            }
            if (t === e)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                    return null;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
        return null
    }
    var la = [];
    function ua() {
        for (var e = 0; e < la.length; e++)
            la[e]._workInProgressVersionPrimary = null;
        la.length = 0
    }
    var ai = H.ReactCurrentDispatcher
      , ca = H.ReactCurrentBatchConfig
      , En = 0
      , je = null
      , be = null
      , Pe = null
      , li = !1
      , $r = !1
      , Hr = 0
      , Ny = 0;
    function Ye() {
        throw Error(i(321))
    }
    function da(e, t) {
        if (t === null)
            return !1;
        for (var n = 0; n < t.length && n < e.length; n++)
            if (!jt(e[n], t[n]))
                return !1;
        return !0
    }
    function fa(e, t, n, o, l, u) {
        if (En = u,
        je = t,
        t.memoizedState = null,
        t.updateQueue = null,
        t.lanes = 0,
        ai.current = e === null || e.memoizedState === null ? Py : Cy,
        e = n(o, l),
        $r) {
            u = 0;
            do {
                if ($r = !1,
                Hr = 0,
                25 <= u)
                    throw Error(i(301));
                u += 1,
                Pe = be = null,
                t.updateQueue = null,
                ai.current = By,
                e = n(o, l)
            } while ($r)
        }
        if (ai.current = di,
        t = be !== null && be.next !== null,
        En = 0,
        Pe = be = je = null,
        li = !1,
        t)
            throw Error(i(300));
        return e
    }
    function ha() {
        var e = Hr !== 0;
        return Hr = 0,
        e
    }
    function Vt() {
        var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return Pe === null ? je.memoizedState = Pe = e : Pe = Pe.next = e,
        Pe
    }
    function yt() {
        if (be === null) {
            var e = je.alternate;
            e = e !== null ? e.memoizedState : null
        } else
            e = be.next;
        var t = Pe === null ? je.memoizedState : Pe.next;
        if (t !== null)
            Pe = t,
            be = e;
        else {
            if (e === null)
                throw Error(i(310));
            be = e,
            e = {
                memoizedState: be.memoizedState,
                baseState: be.baseState,
                baseQueue: be.baseQueue,
                queue: be.queue,
                next: null
            },
            Pe === null ? je.memoizedState = Pe = e : Pe = Pe.next = e
        }
        return Pe
    }
    function Kr(e, t) {
        return typeof t == "function" ? t(e) : t
    }
    function pa(e) {
        var t = yt()
          , n = t.queue;
        if (n === null)
            throw Error(i(311));
        n.lastRenderedReducer = e;
        var o = be
          , l = o.baseQueue
          , u = n.pending;
        if (u !== null) {
            if (l !== null) {
                var h = l.next;
                l.next = u.next,
                u.next = h
            }
            o.baseQueue = l = u,
            n.pending = null
        }
        if (l !== null) {
            u = l.next,
            o = o.baseState;
            var x = h = null
              , L = null
              , S = u;
            do {
                var b = S.lane;
                if ((En & b) === b)
                    L !== null && (L = L.next = {
                        lane: 0,
                        action: S.action,
                        hasEagerState: S.hasEagerState,
                        eagerState: S.eagerState,
                        next: null
                    }),
                    o = S.hasEagerState ? S.eagerState : e(o, S.action);
                else {
                    var P = {
                        lane: b,
                        action: S.action,
                        hasEagerState: S.hasEagerState,
                        eagerState: S.eagerState,
                        next: null
                    };
                    L === null ? (x = L = P,
                    h = o) : L = L.next = P,
                    je.lanes |= b,
                    Sn |= b
                }
                S = S.next
            } while (S !== null && S !== u);
            L === null ? h = o : L.next = x,
            jt(o, t.memoizedState) || (et = !0),
            t.memoizedState = o,
            t.baseState = h,
            t.baseQueue = L,
            n.lastRenderedState = o
        }
        if (e = n.interleaved,
        e !== null) {
            l = e;
            do
                u = l.lane,
                je.lanes |= u,
                Sn |= u,
                l = l.next;
            while (l !== e)
        } else
            l === null && (n.lanes = 0);
        return [t.memoizedState, n.dispatch]
    }
    function ma(e) {
        var t = yt()
          , n = t.queue;
        if (n === null)
            throw Error(i(311));
        n.lastRenderedReducer = e;
        var o = n.dispatch
          , l = n.pending
          , u = t.memoizedState;
        if (l !== null) {
            n.pending = null;
            var h = l = l.next;
            do
                u = e(u, h.action),
                h = h.next;
            while (h !== l);
            jt(u, t.memoizedState) || (et = !0),
            t.memoizedState = u,
            t.baseQueue === null && (t.baseState = u),
            n.lastRenderedState = u
        }
        return [u, o]
    }
    function Zc() {}
    function Jc(e, t) {
        var n = je
          , o = yt()
          , l = t()
          , u = !jt(o.memoizedState, l);
        if (u && (o.memoizedState = l,
        et = !0),
        o = o.queue,
        ya(Hc.bind(null, n, o, e), [e]),
        o.getSnapshot !== t || u || Pe !== null && Pe.memoizedState.tag & 1) {
            if (n.flags |= 2048,
            Gr(9, $c.bind(null, n, o, l, t), void 0, null),
            Ce === null)
                throw Error(i(349));
            (En & 30) !== 0 || Uc(n, t, l)
        }
        return l
    }
    function Uc(e, t, n) {
        e.flags |= 16384,
        e = {
            getSnapshot: t,
            value: n
        },
        t = je.updateQueue,
        t === null ? (t = {
            lastEffect: null,
            stores: null
        },
        je.updateQueue = t,
        t.stores = [e]) : (n = t.stores,
        n === null ? t.stores = [e] : n.push(e))
    }
    function $c(e, t, n, o) {
        t.value = n,
        t.getSnapshot = o,
        Kc(t) && Gc(e)
    }
    function Hc(e, t, n) {
        return n(function() {
            Kc(t) && Gc(e)
        })
    }
    function Kc(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
            var n = t();
            return !jt(e, n)
        } catch {
            return !0
        }
    }
    function Gc(e) {
        var t = Yt(e, 1);
        t !== null && At(t, e, 1, -1)
    }
    function Xc(e) {
        var t = Vt();
        return typeof e == "function" && (e = e()),
        t.memoizedState = t.baseState = e,
        e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Kr,
            lastRenderedState: e
        },
        t.queue = e,
        e = e.dispatch = Vy.bind(null, je, e),
        [t.memoizedState, e]
    }
    function Gr(e, t, n, o) {
        return e = {
            tag: e,
            create: t,
            destroy: n,
            deps: o,
            next: null
        },
        t = je.updateQueue,
        t === null ? (t = {
            lastEffect: null,
            stores: null
        },
        je.updateQueue = t,
        t.lastEffect = e.next = e) : (n = t.lastEffect,
        n === null ? t.lastEffect = e.next = e : (o = n.next,
        n.next = e,
        e.next = o,
        t.lastEffect = e)),
        e
    }
    function qc() {
        return yt().memoizedState
    }
    function ui(e, t, n, o) {
        var l = Vt();
        je.flags |= e,
        l.memoizedState = Gr(1 | t, n, void 0, o === void 0 ? null : o)
    }
    function ci(e, t, n, o) {
        var l = yt();
        o = o === void 0 ? null : o;
        var u = void 0;
        if (be !== null) {
            var h = be.memoizedState;
            if (u = h.destroy,
            o !== null && da(o, h.deps)) {
                l.memoizedState = Gr(t, n, u, o);
                return
            }
        }
        je.flags |= e,
        l.memoizedState = Gr(1 | t, n, u, o)
    }
    function ed(e, t) {
        return ui(8390656, 8, e, t)
    }
    function ya(e, t) {
        return ci(2048, 8, e, t)
    }
    function td(e, t) {
        return ci(4, 2, e, t)
    }
    function nd(e, t) {
        return ci(4, 4, e, t)
    }
    function rd(e, t) {
        if (typeof t == "function")
            return e = e(),
            t(e),
            function() {
                t(null)
            }
            ;
        if (t != null)
            return e = e(),
            t.current = e,
            function() {
                t.current = null
            }
    }
    function sd(e, t, n) {
        return n = n != null ? n.concat([e]) : null,
        ci(4, 4, rd.bind(null, t, e), n)
    }
    function ga() {}
    function id(e, t) {
        var n = yt();
        t = t === void 0 ? null : t;
        var o = n.memoizedState;
        return o !== null && t !== null && da(t, o[1]) ? o[0] : (n.memoizedState = [e, t],
        e)
    }
    function od(e, t) {
        var n = yt();
        t = t === void 0 ? null : t;
        var o = n.memoizedState;
        return o !== null && t !== null && da(t, o[1]) ? o[0] : (e = e(),
        n.memoizedState = [e, t],
        e)
    }
    function ad(e, t, n) {
        return (En & 21) === 0 ? (e.baseState && (e.baseState = !1,
        et = !0),
        e.memoizedState = n) : (jt(n, t) || (n = Du(),
        je.lanes |= n,
        Sn |= n,
        e.baseState = !0),
        t)
    }
    function ky(e, t) {
        var n = he;
        he = n !== 0 && 4 > n ? n : 4,
        e(!0);
        var o = ca.transition;
        ca.transition = {};
        try {
            e(!1),
            t()
        } finally {
            he = n,
            ca.transition = o
        }
    }
    function ld() {
        return yt().memoizedState
    }
    function by(e, t, n) {
        var o = dn(e);
        if (n = {
            lane: o,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        },
        ud(e))
            cd(t, n);
        else if (n = Qc(e, t, n, o),
        n !== null) {
            var l = He();
            At(n, e, o, l),
            dd(n, t, o)
        }
    }
    function Vy(e, t, n) {
        var o = dn(e)
          , l = {
            lane: o,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
        if (ud(e))
            cd(t, l);
        else {
            var u = e.alternate;
            if (e.lanes === 0 && (u === null || u.lanes === 0) && (u = t.lastRenderedReducer,
            u !== null))
                try {
                    var h = t.lastRenderedState
                      , x = u(h, n);
                    if (l.hasEagerState = !0,
                    l.eagerState = x,
                    jt(x, h)) {
                        var L = t.interleaved;
                        L === null ? (l.next = l,
                        sa(t)) : (l.next = L.next,
                        L.next = l),
                        t.interleaved = l;
                        return
                    }
                } catch {}
            n = Qc(e, t, l, o),
            n !== null && (l = He(),
            At(n, e, o, l),
            dd(n, t, o))
        }
    }
    function ud(e) {
        var t = e.alternate;
        return e === je || t !== null && t === je
    }
    function cd(e, t) {
        $r = li = !0;
        var n = e.pending;
        n === null ? t.next = t : (t.next = n.next,
        n.next = t),
        e.pending = t
    }
    function dd(e, t, n) {
        if ((n & 4194240) !== 0) {
            var o = t.lanes;
            o &= e.pendingLanes,
            n |= o,
            t.lanes = n,
            xo(e, n)
        }
    }
    var di = {
        readContext: mt,
        useCallback: Ye,
        useContext: Ye,
        useEffect: Ye,
        useImperativeHandle: Ye,
        useInsertionEffect: Ye,
        useLayoutEffect: Ye,
        useMemo: Ye,
        useReducer: Ye,
        useRef: Ye,
        useState: Ye,
        useDebugValue: Ye,
        useDeferredValue: Ye,
        useTransition: Ye,
        useMutableSource: Ye,
        useSyncExternalStore: Ye,
        useId: Ye,
        unstable_isNewReconciler: !1
    }
      , Py = {
        readContext: mt,
        useCallback: function(e, t) {
            return Vt().memoizedState = [e, t === void 0 ? null : t],
            e
        },
        useContext: mt,
        useEffect: ed,
        useImperativeHandle: function(e, t, n) {
            return n = n != null ? n.concat([e]) : null,
            ui(4194308, 4, rd.bind(null, t, e), n)
        },
        useLayoutEffect: function(e, t) {
            return ui(4194308, 4, e, t)
        },
        useInsertionEffect: function(e, t) {
            return ui(4, 2, e, t)
        },
        useMemo: function(e, t) {
            var n = Vt();
            return t = t === void 0 ? null : t,
            e = e(),
            n.memoizedState = [e, t],
            e
        },
        useReducer: function(e, t, n) {
            var o = Vt();
            return t = n !== void 0 ? n(t) : t,
            o.memoizedState = o.baseState = t,
            e = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: t
            },
            o.queue = e,
            e = e.dispatch = by.bind(null, je, e),
            [o.memoizedState, e]
        },
        useRef: function(e) {
            var t = Vt();
            return e = {
                current: e
            },
            t.memoizedState = e
        },
        useState: Xc,
        useDebugValue: ga,
        useDeferredValue: function(e) {
            return Vt().memoizedState = e
        },
        useTransition: function() {
            var e = Xc(!1)
              , t = e[0];
            return e = ky.bind(null, e[1]),
            Vt().memoizedState = e,
            [t, e]
        },
        useMutableSource: function() {},
        useSyncExternalStore: function(e, t, n) {
            var o = je
              , l = Vt();
            if (Le) {
                if (n === void 0)
                    throw Error(i(407));
                n = n()
            } else {
                if (n = t(),
                Ce === null)
                    throw Error(i(349));
                (En & 30) !== 0 || Uc(o, t, n)
            }
            l.memoizedState = n;
            var u = {
                value: n,
                getSnapshot: t
            };
            return l.queue = u,
            ed(Hc.bind(null, o, u, e), [e]),
            o.flags |= 2048,
            Gr(9, $c.bind(null, o, u, n, t), void 0, null),
            n
        },
        useId: function() {
            var e = Vt()
              , t = Ce.identifierPrefix;
            if (Le) {
                var n = Qt
                  , o = _t;
                n = (o & ~(1 << 32 - Rt(o) - 1)).toString(32) + n,
                t = ":" + t + "R" + n,
                n = Hr++,
                0 < n && (t += "H" + n.toString(32)),
                t += ":"
            } else
                n = Ny++,
                t = ":" + t + "r" + n.toString(32) + ":";
            return e.memoizedState = t
        },
        unstable_isNewReconciler: !1
    }
      , Cy = {
        readContext: mt,
        useCallback: id,
        useContext: mt,
        useEffect: ya,
        useImperativeHandle: sd,
        useInsertionEffect: td,
        useLayoutEffect: nd,
        useMemo: od,
        useReducer: pa,
        useRef: qc,
        useState: function() {
            return pa(Kr)
        },
        useDebugValue: ga,
        useDeferredValue: function(e) {
            var t = yt();
            return ad(t, be.memoizedState, e)
        },
        useTransition: function() {
            var e = pa(Kr)[0]
              , t = yt().memoizedState;
            return [e, t]
        },
        useMutableSource: Zc,
        useSyncExternalStore: Jc,
        useId: ld,
        unstable_isNewReconciler: !1
    }
      , By = {
        readContext: mt,
        useCallback: id,
        useContext: mt,
        useEffect: ya,
        useImperativeHandle: sd,
        useInsertionEffect: td,
        useLayoutEffect: nd,
        useMemo: od,
        useReducer: ma,
        useRef: qc,
        useState: function() {
            return ma(Kr)
        },
        useDebugValue: ga,
        useDeferredValue: function(e) {
            var t = yt();
            return be === null ? t.memoizedState = e : ad(t, be.memoizedState, e)
        },
        useTransition: function() {
            var e = ma(Kr)[0]
              , t = yt().memoizedState;
            return [e, t]
        },
        useMutableSource: Zc,
        useSyncExternalStore: Jc,
        useId: ld,
        unstable_isNewReconciler: !1
    };
    function Tt(e, t) {
        if (e && e.defaultProps) {
            t = O({}, t),
            e = e.defaultProps;
            for (var n in e)
                t[n] === void 0 && (t[n] = e[n]);
            return t
        }
        return t
    }
    function va(e, t, n, o) {
        t = e.memoizedState,
        n = n(o, t),
        n = n == null ? t : O({}, t, n),
        e.memoizedState = n,
        e.lanes === 0 && (e.updateQueue.baseState = n)
    }
    var fi = {
        isMounted: function(e) {
            return (e = e._reactInternals) ? xn(e) === e : !1
        },
        enqueueSetState: function(e, t, n) {
            e = e._reactInternals;
            var o = He()
              , l = dn(e)
              , u = Ot(o, l);
            u.payload = t,
            n != null && (u.callback = n),
            t = an(e, u, l),
            t !== null && (At(t, e, l, o),
            si(t, e, l))
        },
        enqueueReplaceState: function(e, t, n) {
            e = e._reactInternals;
            var o = He()
              , l = dn(e)
              , u = Ot(o, l);
            u.tag = 1,
            u.payload = t,
            n != null && (u.callback = n),
            t = an(e, u, l),
            t !== null && (At(t, e, l, o),
            si(t, e, l))
        },
        enqueueForceUpdate: function(e, t) {
            e = e._reactInternals;
            var n = He()
              , o = dn(e)
              , l = Ot(n, o);
            l.tag = 2,
            t != null && (l.callback = t),
            t = an(e, l, o),
            t !== null && (At(t, e, o, n),
            si(t, e, o))
        }
    };
    function fd(e, t, n, o, l, u, h) {
        return e = e.stateNode,
        typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(o, u, h) : t.prototype && t.prototype.isPureReactComponent ? !Dr(n, o) || !Dr(l, u) : !0
    }
    function hd(e, t, n) {
        var o = !1
          , l = rn
          , u = t.contextType;
        return typeof u == "object" && u !== null ? u = mt(u) : (l = qe(t) ? Ln : Qe.current,
        o = t.contextTypes,
        u = (o = o != null) ? Kn(e, l) : rn),
        t = new t(n,u),
        e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
        t.updater = fi,
        e.stateNode = t,
        t._reactInternals = e,
        o && (e = e.stateNode,
        e.__reactInternalMemoizedUnmaskedChildContext = l,
        e.__reactInternalMemoizedMaskedChildContext = u),
        t
    }
    function pd(e, t, n, o) {
        e = t.state,
        typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, o),
        typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, o),
        t.state !== e && fi.enqueueReplaceState(t, t.state, null)
    }
    function xa(e, t, n, o) {
        var l = e.stateNode;
        l.props = n,
        l.state = e.memoizedState,
        l.refs = {},
        ia(e);
        var u = t.contextType;
        typeof u == "object" && u !== null ? l.context = mt(u) : (u = qe(t) ? Ln : Qe.current,
        l.context = Kn(e, u)),
        l.state = e.memoizedState,
        u = t.getDerivedStateFromProps,
        typeof u == "function" && (va(e, t, u, n),
        l.state = e.memoizedState),
        typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state,
        typeof l.componentWillMount == "function" && l.componentWillMount(),
        typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(),
        t !== l.state && fi.enqueueReplaceState(l, l.state, null),
        ii(e, n, l, o),
        l.state = e.memoizedState),
        typeof l.componentDidMount == "function" && (e.flags |= 4194308)
    }
    function sr(e, t) {
        try {
            var n = ""
              , o = t;
            do
                n += ue(o),
                o = o.return;
            while (o);
            var l = n
        } catch (u) {
            l = `
Error generating stack: ` + u.message + `
` + u.stack
        }
        return {
            value: e,
            source: t,
            stack: l,
            digest: null
        }
    }
    function wa(e, t, n) {
        return {
            value: e,
            source: null,
            stack: n ?? null,
            digest: t ?? null
        }
    }
    function La(e, t) {
        try {
            console.error(t.value)
        } catch (n) {
            setTimeout(function() {
                throw n
            })
        }
    }
    var Dy = typeof WeakMap == "function" ? WeakMap : Map;
    function md(e, t, n) {
        n = Ot(-1, n),
        n.tag = 3,
        n.payload = {
            element: null
        };
        var o = t.value;
        return n.callback = function() {
            xi || (xi = !0,
            Ba = o),
            La(e, t)
        }
        ,
        n
    }
    function yd(e, t, n) {
        n = Ot(-1, n),
        n.tag = 3;
        var o = e.type.getDerivedStateFromError;
        if (typeof o == "function") {
            var l = t.value;
            n.payload = function() {
                return o(l)
            }
            ,
            n.callback = function() {
                La(e, t)
            }
        }
        var u = e.stateNode;
        return u !== null && typeof u.componentDidCatch == "function" && (n.callback = function() {
            La(e, t),
            typeof o != "function" && (un === null ? un = new Set([this]) : un.add(this));
            var h = t.stack;
            this.componentDidCatch(t.value, {
                componentStack: h !== null ? h : ""
            })
        }
        ),
        n
    }
    function gd(e, t, n) {
        var o = e.pingCache;
        if (o === null) {
            o = e.pingCache = new Dy;
            var l = new Set;
            o.set(t, l)
        } else
            l = o.get(t),
            l === void 0 && (l = new Set,
            o.set(t, l));
        l.has(n) || (l.add(n),
        e = Gy.bind(null, e, t, n),
        t.then(e, e))
    }
    function vd(e) {
        do {
            var t;
            if ((t = e.tag === 13) && (t = e.memoizedState,
            t = t !== null ? t.dehydrated !== null : !0),
            t)
                return e;
            e = e.return
        } while (e !== null);
        return null
    }
    function xd(e, t, n, o, l) {
        return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128,
        n.flags |= 131072,
        n.flags &= -52805,
        n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Ot(-1, 1),
        t.tag = 2,
        an(n, t, 1))),
        n.lanes |= 1),
        e) : (e.flags |= 65536,
        e.lanes = l,
        e)
    }
    var Wy = H.ReactCurrentOwner
      , et = !1;
    function $e(e, t, n, o) {
        t.child = e === null ? _c(t, null, n, o) : er(t, e.child, n, o)
    }
    function wd(e, t, n, o, l) {
        n = n.render;
        var u = t.ref;
        return nr(t, l),
        o = fa(e, t, n, o, u, l),
        n = ha(),
        e !== null && !et ? (t.updateQueue = e.updateQueue,
        t.flags &= -2053,
        e.lanes &= ~l,
        It(e, t, l)) : (Le && n && Ho(t),
        t.flags |= 1,
        $e(e, t, o, l),
        t.child)
    }
    function Ld(e, t, n, o, l) {
        if (e === null) {
            var u = n.type;
            return typeof u == "function" && !Ia(u) && u.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15,
            t.type = u,
            Rd(e, t, u, o, l)) : (e = Ti(n.type, null, o, t, t.mode, l),
            e.ref = t.ref,
            e.return = t,
            t.child = e)
        }
        if (u = e.child,
        (e.lanes & l) === 0) {
            var h = u.memoizedProps;
            if (n = n.compare,
            n = n !== null ? n : Dr,
            n(h, o) && e.ref === t.ref)
                return It(e, t, l)
        }
        return t.flags |= 1,
        e = hn(u, o),
        e.ref = t.ref,
        e.return = t,
        t.child = e
    }
    function Rd(e, t, n, o, l) {
        if (e !== null) {
            var u = e.memoizedProps;
            if (Dr(u, o) && e.ref === t.ref)
                if (et = !1,
                t.pendingProps = o = u,
                (e.lanes & l) !== 0)
                    (e.flags & 131072) !== 0 && (et = !0);
                else
                    return t.lanes = e.lanes,
                    It(e, t, l)
        }
        return Ra(e, t, n, o, l)
    }
    function jd(e, t, n) {
        var o = t.pendingProps
          , l = o.children
          , u = e !== null ? e.memoizedState : null;
        if (o.mode === "hidden")
            if ((t.mode & 1) === 0)
                t.memoizedState = {
                    baseLanes: 0,
                    cachePool: null,
                    transitions: null
                },
                me(or, ut),
                ut |= n;
            else {
                if ((n & 1073741824) === 0)
                    return e = u !== null ? u.baseLanes | n : n,
                    t.lanes = t.childLanes = 1073741824,
                    t.memoizedState = {
                        baseLanes: e,
                        cachePool: null,
                        transitions: null
                    },
                    t.updateQueue = null,
                    me(or, ut),
                    ut |= e,
                    null;
                t.memoizedState = {
                    baseLanes: 0,
                    cachePool: null,
                    transitions: null
                },
                o = u !== null ? u.baseLanes : n,
                me(or, ut),
                ut |= o
            }
        else
            u !== null ? (o = u.baseLanes | n,
            t.memoizedState = null) : o = n,
            me(or, ut),
            ut |= o;
        return $e(e, t, l, n),
        t.child
    }
    function zd(e, t) {
        var n = t.ref;
        (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512,
        t.flags |= 2097152)
    }
    function Ra(e, t, n, o, l) {
        var u = qe(n) ? Ln : Qe.current;
        return u = Kn(t, u),
        nr(t, l),
        n = fa(e, t, n, o, u, l),
        o = ha(),
        e !== null && !et ? (t.updateQueue = e.updateQueue,
        t.flags &= -2053,
        e.lanes &= ~l,
        It(e, t, l)) : (Le && o && Ho(t),
        t.flags |= 1,
        $e(e, t, n, l),
        t.child)
    }
    function Td(e, t, n, o, l) {
        if (qe(n)) {
            var u = !0;
            Ks(t)
        } else
            u = !1;
        if (nr(t, l),
        t.stateNode === null)
            pi(e, t),
            hd(t, n, o),
            xa(t, n, o, l),
            o = !0;
        else if (e === null) {
            var h = t.stateNode
              , x = t.memoizedProps;
            h.props = x;
            var L = h.context
              , S = n.contextType;
            typeof S == "object" && S !== null ? S = mt(S) : (S = qe(n) ? Ln : Qe.current,
            S = Kn(t, S));
            var b = n.getDerivedStateFromProps
              , P = typeof b == "function" || typeof h.getSnapshotBeforeUpdate == "function";
            P || typeof h.UNSAFE_componentWillReceiveProps != "function" && typeof h.componentWillReceiveProps != "function" || (x !== o || L !== S) && pd(t, h, o, S),
            on = !1;
            var N = t.memoizedState;
            h.state = N,
            ii(t, o, h, l),
            L = t.memoizedState,
            x !== o || N !== L || Xe.current || on ? (typeof b == "function" && (va(t, n, b, o),
            L = t.memoizedState),
            (x = on || fd(t, n, x, o, N, L, S)) ? (P || typeof h.UNSAFE_componentWillMount != "function" && typeof h.componentWillMount != "function" || (typeof h.componentWillMount == "function" && h.componentWillMount(),
            typeof h.UNSAFE_componentWillMount == "function" && h.UNSAFE_componentWillMount()),
            typeof h.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof h.componentDidMount == "function" && (t.flags |= 4194308),
            t.memoizedProps = o,
            t.memoizedState = L),
            h.props = o,
            h.state = L,
            h.context = S,
            o = x) : (typeof h.componentDidMount == "function" && (t.flags |= 4194308),
            o = !1)
        } else {
            h = t.stateNode,
            Yc(e, t),
            x = t.memoizedProps,
            S = t.type === t.elementType ? x : Tt(t.type, x),
            h.props = S,
            P = t.pendingProps,
            N = h.context,
            L = n.contextType,
            typeof L == "object" && L !== null ? L = mt(L) : (L = qe(n) ? Ln : Qe.current,
            L = Kn(t, L));
            var Q = n.getDerivedStateFromProps;
            (b = typeof Q == "function" || typeof h.getSnapshotBeforeUpdate == "function") || typeof h.UNSAFE_componentWillReceiveProps != "function" && typeof h.componentWillReceiveProps != "function" || (x !== P || N !== L) && pd(t, h, o, L),
            on = !1,
            N = t.memoizedState,
            h.state = N,
            ii(t, o, h, l);
            var J = t.memoizedState;
            x !== P || N !== J || Xe.current || on ? (typeof Q == "function" && (va(t, n, Q, o),
            J = t.memoizedState),
            (S = on || fd(t, n, S, o, N, J, L) || !1) ? (b || typeof h.UNSAFE_componentWillUpdate != "function" && typeof h.componentWillUpdate != "function" || (typeof h.componentWillUpdate == "function" && h.componentWillUpdate(o, J, L),
            typeof h.UNSAFE_componentWillUpdate == "function" && h.UNSAFE_componentWillUpdate(o, J, L)),
            typeof h.componentDidUpdate == "function" && (t.flags |= 4),
            typeof h.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof h.componentDidUpdate != "function" || x === e.memoizedProps && N === e.memoizedState || (t.flags |= 4),
            typeof h.getSnapshotBeforeUpdate != "function" || x === e.memoizedProps && N === e.memoizedState || (t.flags |= 1024),
            t.memoizedProps = o,
            t.memoizedState = J),
            h.props = o,
            h.state = J,
            h.context = L,
            o = S) : (typeof h.componentDidUpdate != "function" || x === e.memoizedProps && N === e.memoizedState || (t.flags |= 4),
            typeof h.getSnapshotBeforeUpdate != "function" || x === e.memoizedProps && N === e.memoizedState || (t.flags |= 1024),
            o = !1)
        }
        return ja(e, t, n, o, u, l)
    }
    function ja(e, t, n, o, l, u) {
        zd(e, t);
        var h = (t.flags & 128) !== 0;
        if (!o && !h)
            return l && Nc(t, n, !1),
            It(e, t, u);
        o = t.stateNode,
        Wy.current = t;
        var x = h && typeof n.getDerivedStateFromError != "function" ? null : o.render();
        return t.flags |= 1,
        e !== null && h ? (t.child = er(t, e.child, null, u),
        t.child = er(t, null, x, u)) : $e(e, t, x, u),
        t.memoizedState = o.state,
        l && Nc(t, n, !0),
        t.child
    }
    function Ed(e) {
        var t = e.stateNode;
        t.pendingContext ? Ac(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Ac(e, t.context, !1),
        oa(e, t.containerInfo)
    }
    function Sd(e, t, n, o, l) {
        return qn(),
        qo(l),
        t.flags |= 256,
        $e(e, t, n, o),
        t.child
    }
    var za = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0
    };
    function Ta(e) {
        return {
            baseLanes: e,
            cachePool: null,
            transitions: null
        }
    }
    function Ad(e, t, n) {
        var o = t.pendingProps, l = Re.current, u = !1, h = (t.flags & 128) !== 0, x;
        if ((x = h) || (x = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
        x ? (u = !0,
        t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1),
        me(Re, l & 1),
        e === null)
            return Xo(t),
            e = t.memoizedState,
            e !== null && (e = e.dehydrated,
            e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824,
            null) : (h = o.children,
            e = o.fallback,
            u ? (o = t.mode,
            u = t.child,
            h = {
                mode: "hidden",
                children: h
            },
            (o & 1) === 0 && u !== null ? (u.childLanes = 0,
            u.pendingProps = h) : u = Ei(h, o, 0, null),
            e = kn(e, o, n, null),
            u.return = t,
            e.return = t,
            u.sibling = e,
            t.child = u,
            t.child.memoizedState = Ta(n),
            t.memoizedState = za,
            e) : Ea(t, h));
        if (l = e.memoizedState,
        l !== null && (x = l.dehydrated,
        x !== null))
            return _y(e, t, h, o, x, l, n);
        if (u) {
            u = o.fallback,
            h = t.mode,
            l = e.child,
            x = l.sibling;
            var L = {
                mode: "hidden",
                children: o.children
            };
            return (h & 1) === 0 && t.child !== l ? (o = t.child,
            o.childLanes = 0,
            o.pendingProps = L,
            t.deletions = null) : (o = hn(l, L),
            o.subtreeFlags = l.subtreeFlags & 14680064),
            x !== null ? u = hn(x, u) : (u = kn(u, h, n, null),
            u.flags |= 2),
            u.return = t,
            o.return = t,
            o.sibling = u,
            t.child = o,
            o = u,
            u = t.child,
            h = e.child.memoizedState,
            h = h === null ? Ta(n) : {
                baseLanes: h.baseLanes | n,
                cachePool: null,
                transitions: h.transitions
            },
            u.memoizedState = h,
            u.childLanes = e.childLanes & ~n,
            t.memoizedState = za,
            o
        }
        return u = e.child,
        e = u.sibling,
        o = hn(u, {
            mode: "visible",
            children: o.children
        }),
        (t.mode & 1) === 0 && (o.lanes = n),
        o.return = t,
        o.sibling = null,
        e !== null && (n = t.deletions,
        n === null ? (t.deletions = [e],
        t.flags |= 16) : n.push(e)),
        t.child = o,
        t.memoizedState = null,
        o
    }
    function Ea(e, t) {
        return t = Ei({
            mode: "visible",
            children: t
        }, e.mode, 0, null),
        t.return = e,
        e.child = t
    }
    function hi(e, t, n, o) {
        return o !== null && qo(o),
        er(t, e.child, null, n),
        e = Ea(t, t.pendingProps.children),
        e.flags |= 2,
        t.memoizedState = null,
        e
    }
    function _y(e, t, n, o, l, u, h) {
        if (n)
            return t.flags & 256 ? (t.flags &= -257,
            o = wa(Error(i(422))),
            hi(e, t, h, o)) : t.memoizedState !== null ? (t.child = e.child,
            t.flags |= 128,
            null) : (u = o.fallback,
            l = t.mode,
            o = Ei({
                mode: "visible",
                children: o.children
            }, l, 0, null),
            u = kn(u, l, h, null),
            u.flags |= 2,
            o.return = t,
            u.return = t,
            o.sibling = u,
            t.child = o,
            (t.mode & 1) !== 0 && er(t, e.child, null, h),
            t.child.memoizedState = Ta(h),
            t.memoizedState = za,
            u);
        if ((t.mode & 1) === 0)
            return hi(e, t, h, null);
        if (l.data === "$!") {
            if (o = l.nextSibling && l.nextSibling.dataset,
            o)
                var x = o.dgst;
            return o = x,
            u = Error(i(419)),
            o = wa(u, o, void 0),
            hi(e, t, h, o)
        }
        if (x = (h & e.childLanes) !== 0,
        et || x) {
            if (o = Ce,
            o !== null) {
                switch (h & -h) {
                case 4:
                    l = 2;
                    break;
                case 16:
                    l = 8;
                    break;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    l = 32;
                    break;
                case 536870912:
                    l = 268435456;
                    break;
                default:
                    l = 0
                }
                l = (l & (o.suspendedLanes | h)) !== 0 ? 0 : l,
                l !== 0 && l !== u.retryLane && (u.retryLane = l,
                Yt(e, l),
                At(o, e, l, -1))
            }
            return Oa(),
            o = wa(Error(i(421))),
            hi(e, t, h, o)
        }
        return l.data === "$?" ? (t.flags |= 128,
        t.child = e.child,
        t = Xy.bind(null, e),
        l._reactRetry = t,
        null) : (e = u.treeContext,
        lt = tn(l.nextSibling),
        at = t,
        Le = !0,
        zt = null,
        e !== null && (ht[pt++] = _t,
        ht[pt++] = Qt,
        ht[pt++] = Rn,
        _t = e.id,
        Qt = e.overflow,
        Rn = t),
        t = Ea(t, o.children),
        t.flags |= 4096,
        t)
    }
    function Md(e, t, n) {
        e.lanes |= t;
        var o = e.alternate;
        o !== null && (o.lanes |= t),
        ra(e.return, t, n)
    }
    function Sa(e, t, n, o, l) {
        var u = e.memoizedState;
        u === null ? e.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: o,
            tail: n,
            tailMode: l
        } : (u.isBackwards = t,
        u.rendering = null,
        u.renderingStartTime = 0,
        u.last = o,
        u.tail = n,
        u.tailMode = l)
    }
    function Nd(e, t, n) {
        var o = t.pendingProps
          , l = o.revealOrder
          , u = o.tail;
        if ($e(e, t, o.children, n),
        o = Re.current,
        (o & 2) !== 0)
            o = o & 1 | 2,
            t.flags |= 128;
        else {
            if (e !== null && (e.flags & 128) !== 0)
                e: for (e = t.child; e !== null; ) {
                    if (e.tag === 13)
                        e.memoizedState !== null && Md(e, n, t);
                    else if (e.tag === 19)
                        Md(e, n, t);
                    else if (e.child !== null) {
                        e.child.return = e,
                        e = e.child;
                        continue
                    }
                    if (e === t)
                        break e;
                    for (; e.sibling === null; ) {
                        if (e.return === null || e.return === t)
                            break e;
                        e = e.return
                    }
                    e.sibling.return = e.return,
                    e = e.sibling
                }
            o &= 1
        }
        if (me(Re, o),
        (t.mode & 1) === 0)
            t.memoizedState = null;
        else
            switch (l) {
            case "forwards":
                for (n = t.child,
                l = null; n !== null; )
                    e = n.alternate,
                    e !== null && oi(e) === null && (l = n),
                    n = n.sibling;
                n = l,
                n === null ? (l = t.child,
                t.child = null) : (l = n.sibling,
                n.sibling = null),
                Sa(t, !1, l, n, u);
                break;
            case "backwards":
                for (n = null,
                l = t.child,
                t.child = null; l !== null; ) {
                    if (e = l.alternate,
                    e !== null && oi(e) === null) {
                        t.child = l;
                        break
                    }
                    e = l.sibling,
                    l.sibling = n,
                    n = l,
                    l = e
                }
                Sa(t, !0, n, null, u);
                break;
            case "together":
                Sa(t, !1, null, null, void 0);
                break;
            default:
                t.memoizedState = null
            }
        return t.child
    }
    function pi(e, t) {
        (t.mode & 1) === 0 && e !== null && (e.alternate = null,
        t.alternate = null,
        t.flags |= 2)
    }
    function It(e, t, n) {
        if (e !== null && (t.dependencies = e.dependencies),
        Sn |= t.lanes,
        (n & t.childLanes) === 0)
            return null;
        if (e !== null && t.child !== e.child)
            throw Error(i(153));
        if (t.child !== null) {
            for (e = t.child,
            n = hn(e, e.pendingProps),
            t.child = n,
            n.return = t; e.sibling !== null; )
                e = e.sibling,
                n = n.sibling = hn(e, e.pendingProps),
                n.return = t;
            n.sibling = null
        }
        return t.child
    }
    function Qy(e, t, n) {
        switch (t.tag) {
        case 3:
            Ed(t),
            qn();
            break;
        case 5:
            Fc(t);
            break;
        case 1:
            qe(t.type) && Ks(t);
            break;
        case 4:
            oa(t, t.stateNode.containerInfo);
            break;
        case 10:
            var o = t.type._context
              , l = t.memoizedProps.value;
            me(ni, o._currentValue),
            o._currentValue = l;
            break;
        case 13:
            if (o = t.memoizedState,
            o !== null)
                return o.dehydrated !== null ? (me(Re, Re.current & 1),
                t.flags |= 128,
                null) : (n & t.child.childLanes) !== 0 ? Ad(e, t, n) : (me(Re, Re.current & 1),
                e = It(e, t, n),
                e !== null ? e.sibling : null);
            me(Re, Re.current & 1);
            break;
        case 19:
            if (o = (n & t.childLanes) !== 0,
            (e.flags & 128) !== 0) {
                if (o)
                    return Nd(e, t, n);
                t.flags |= 128
            }
            if (l = t.memoizedState,
            l !== null && (l.rendering = null,
            l.tail = null,
            l.lastEffect = null),
            me(Re, Re.current),
            o)
                break;
            return null;
        case 22:
        case 23:
            return t.lanes = 0,
            jd(e, t, n)
        }
        return It(e, t, n)
    }
    var kd, Aa, bd, Vd;
    kd = function(e, t) {
        for (var n = t.child; n !== null; ) {
            if (n.tag === 5 || n.tag === 6)
                e.appendChild(n.stateNode);
            else if (n.tag !== 4 && n.child !== null) {
                n.child.return = n,
                n = n.child;
                continue
            }
            if (n === t)
                break;
            for (; n.sibling === null; ) {
                if (n.return === null || n.return === t)
                    return;
                n = n.return
            }
            n.sibling.return = n.return,
            n = n.sibling
        }
    }
    ,
    Aa = function() {}
    ,
    bd = function(e, t, n, o) {
        var l = e.memoizedProps;
        if (l !== o) {
            e = t.stateNode,
            Tn(bt.current);
            var u = null;
            switch (n) {
            case "input":
                l = no(e, l),
                o = no(e, o),
                u = [];
                break;
            case "select":
                l = O({}, l, {
                    value: void 0
                }),
                o = O({}, o, {
                    value: void 0
                }),
                u = [];
                break;
            case "textarea":
                l = io(e, l),
                o = io(e, o),
                u = [];
                break;
            default:
                typeof l.onClick != "function" && typeof o.onClick == "function" && (e.onclick = Us)
            }
            ao(n, o);
            var h;
            n = null;
            for (S in l)
                if (!o.hasOwnProperty(S) && l.hasOwnProperty(S) && l[S] != null)
                    if (S === "style") {
                        var x = l[S];
                        for (h in x)
                            x.hasOwnProperty(h) && (n || (n = {}),
                            n[h] = "")
                    } else
                        S !== "dangerouslySetInnerHTML" && S !== "children" && S !== "suppressContentEditableWarning" && S !== "suppressHydrationWarning" && S !== "autoFocus" && (c.hasOwnProperty(S) ? u || (u = []) : (u = u || []).push(S, null));
            for (S in o) {
                var L = o[S];
                if (x = l?.[S],
                o.hasOwnProperty(S) && L !== x && (L != null || x != null))
                    if (S === "style")
                        if (x) {
                            for (h in x)
                                !x.hasOwnProperty(h) || L && L.hasOwnProperty(h) || (n || (n = {}),
                                n[h] = "");
                            for (h in L)
                                L.hasOwnProperty(h) && x[h] !== L[h] && (n || (n = {}),
                                n[h] = L[h])
                        } else
                            n || (u || (u = []),
                            u.push(S, n)),
                            n = L;
                    else
                        S === "dangerouslySetInnerHTML" ? (L = L ? L.__html : void 0,
                        x = x ? x.__html : void 0,
                        L != null && x !== L && (u = u || []).push(S, L)) : S === "children" ? typeof L != "string" && typeof L != "number" || (u = u || []).push(S, "" + L) : S !== "suppressContentEditableWarning" && S !== "suppressHydrationWarning" && (c.hasOwnProperty(S) ? (L != null && S === "onScroll" && ge("scroll", e),
                        u || x === L || (u = [])) : (u = u || []).push(S, L))
            }
            n && (u = u || []).push("style", n);
            var S = u;
            (t.updateQueue = S) && (t.flags |= 4)
        }
    }
    ,
    Vd = function(e, t, n, o) {
        n !== o && (t.flags |= 4)
    }
    ;
    function Xr(e, t) {
        if (!Le)
            switch (e.tailMode) {
            case "hidden":
                t = e.tail;
                for (var n = null; t !== null; )
                    t.alternate !== null && (n = t),
                    t = t.sibling;
                n === null ? e.tail = null : n.sibling = null;
                break;
            case "collapsed":
                n = e.tail;
                for (var o = null; n !== null; )
                    n.alternate !== null && (o = n),
                    n = n.sibling;
                o === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : o.sibling = null
            }
    }
    function Oe(e) {
        var t = e.alternate !== null && e.alternate.child === e.child
          , n = 0
          , o = 0;
        if (t)
            for (var l = e.child; l !== null; )
                n |= l.lanes | l.childLanes,
                o |= l.subtreeFlags & 14680064,
                o |= l.flags & 14680064,
                l.return = e,
                l = l.sibling;
        else
            for (l = e.child; l !== null; )
                n |= l.lanes | l.childLanes,
                o |= l.subtreeFlags,
                o |= l.flags,
                l.return = e,
                l = l.sibling;
        return e.subtreeFlags |= o,
        e.childLanes = n,
        t
    }
    function Yy(e, t, n) {
        var o = t.pendingProps;
        switch (Ko(t),
        t.tag) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return Oe(t),
            null;
        case 1:
            return qe(t.type) && Hs(),
            Oe(t),
            null;
        case 3:
            return o = t.stateNode,
            rr(),
            ve(Xe),
            ve(Qe),
            ua(),
            o.pendingContext && (o.context = o.pendingContext,
            o.pendingContext = null),
            (e === null || e.child === null) && (ei(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024,
            zt !== null && (_a(zt),
            zt = null))),
            Aa(e, t),
            Oe(t),
            null;
        case 5:
            aa(t);
            var l = Tn(Ur.current);
            if (n = t.type,
            e !== null && t.stateNode != null)
                bd(e, t, n, o, l),
                e.ref !== t.ref && (t.flags |= 512,
                t.flags |= 2097152);
            else {
                if (!o) {
                    if (t.stateNode === null)
                        throw Error(i(166));
                    return Oe(t),
                    null
                }
                if (e = Tn(bt.current),
                ei(t)) {
                    o = t.stateNode,
                    n = t.type;
                    var u = t.memoizedProps;
                    switch (o[kt] = t,
                    o[Or] = u,
                    e = (t.mode & 1) !== 0,
                    n) {
                    case "dialog":
                        ge("cancel", o),
                        ge("close", o);
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        ge("load", o);
                        break;
                    case "video":
                    case "audio":
                        for (l = 0; l < _r.length; l++)
                            ge(_r[l], o);
                        break;
                    case "source":
                        ge("error", o);
                        break;
                    case "img":
                    case "image":
                    case "link":
                        ge("error", o),
                        ge("load", o);
                        break;
                    case "details":
                        ge("toggle", o);
                        break;
                    case "input":
                        hu(o, u),
                        ge("invalid", o);
                        break;
                    case "select":
                        o._wrapperState = {
                            wasMultiple: !!u.multiple
                        },
                        ge("invalid", o);
                        break;
                    case "textarea":
                        yu(o, u),
                        ge("invalid", o)
                    }
                    ao(n, u),
                    l = null;
                    for (var h in u)
                        if (u.hasOwnProperty(h)) {
                            var x = u[h];
                            h === "children" ? typeof x == "string" ? o.textContent !== x && (u.suppressHydrationWarning !== !0 && Js(o.textContent, x, e),
                            l = ["children", x]) : typeof x == "number" && o.textContent !== "" + x && (u.suppressHydrationWarning !== !0 && Js(o.textContent, x, e),
                            l = ["children", "" + x]) : c.hasOwnProperty(h) && x != null && h === "onScroll" && ge("scroll", o)
                        }
                    switch (n) {
                    case "input":
                        js(o),
                        mu(o, u, !0);
                        break;
                    case "textarea":
                        js(o),
                        vu(o);
                        break;
                    case "select":
                    case "option":
                        break;
                    default:
                        typeof u.onClick == "function" && (o.onclick = Us)
                    }
                    o = l,
                    t.updateQueue = o,
                    o !== null && (t.flags |= 4)
                } else {
                    h = l.nodeType === 9 ? l : l.ownerDocument,
                    e === "http://www.w3.org/1999/xhtml" && (e = xu(n)),
                    e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = h.createElement("div"),
                    e.innerHTML = "<script><\/script>",
                    e = e.removeChild(e.firstChild)) : typeof o.is == "string" ? e = h.createElement(n, {
                        is: o.is
                    }) : (e = h.createElement(n),
                    n === "select" && (h = e,
                    o.multiple ? h.multiple = !0 : o.size && (h.size = o.size))) : e = h.createElementNS(e, n),
                    e[kt] = t,
                    e[Or] = o,
                    kd(e, t, !1, !1),
                    t.stateNode = e;
                    e: {
                        switch (h = lo(n, o),
                        n) {
                        case "dialog":
                            ge("cancel", e),
                            ge("close", e),
                            l = o;
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            ge("load", e),
                            l = o;
                            break;
                        case "video":
                        case "audio":
                            for (l = 0; l < _r.length; l++)
                                ge(_r[l], e);
                            l = o;
                            break;
                        case "source":
                            ge("error", e),
                            l = o;
                            break;
                        case "img":
                        case "image":
                        case "link":
                            ge("error", e),
                            ge("load", e),
                            l = o;
                            break;
                        case "details":
                            ge("toggle", e),
                            l = o;
                            break;
                        case "input":
                            hu(e, o),
                            l = no(e, o),
                            ge("invalid", e);
                            break;
                        case "option":
                            l = o;
                            break;
                        case "select":
                            e._wrapperState = {
                                wasMultiple: !!o.multiple
                            },
                            l = O({}, o, {
                                value: void 0
                            }),
                            ge("invalid", e);
                            break;
                        case "textarea":
                            yu(e, o),
                            l = io(e, o),
                            ge("invalid", e);
                            break;
                        default:
                            l = o
                        }
                        ao(n, l),
                        x = l;
                        for (u in x)
                            if (x.hasOwnProperty(u)) {
                                var L = x[u];
                                u === "style" ? Ru(e, L) : u === "dangerouslySetInnerHTML" ? (L = L ? L.__html : void 0,
                                L != null && wu(e, L)) : u === "children" ? typeof L == "string" ? (n !== "textarea" || L !== "") && wr(e, L) : typeof L == "number" && wr(e, "" + L) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (c.hasOwnProperty(u) ? L != null && u === "onScroll" && ge("scroll", e) : L != null && Z(e, u, L, h))
                            }
                        switch (n) {
                        case "input":
                            js(e),
                            mu(e, o, !1);
                            break;
                        case "textarea":
                            js(e),
                            vu(e);
                            break;
                        case "option":
                            o.value != null && e.setAttribute("value", "" + fe(o.value));
                            break;
                        case "select":
                            e.multiple = !!o.multiple,
                            u = o.value,
                            u != null ? Wn(e, !!o.multiple, u, !1) : o.defaultValue != null && Wn(e, !!o.multiple, o.defaultValue, !0);
                            break;
                        default:
                            typeof l.onClick == "function" && (e.onclick = Us)
                        }
                        switch (n) {
                        case "button":
                        case "input":
                        case "select":
                        case "textarea":
                            o = !!o.autoFocus;
                            break e;
                        case "img":
                            o = !0;
                            break e;
                        default:
                            o = !1
                        }
                    }
                    o && (t.flags |= 4)
                }
                t.ref !== null && (t.flags |= 512,
                t.flags |= 2097152)
            }
            return Oe(t),
            null;
        case 6:
            if (e && t.stateNode != null)
                Vd(e, t, e.memoizedProps, o);
            else {
                if (typeof o != "string" && t.stateNode === null)
                    throw Error(i(166));
                if (n = Tn(Ur.current),
                Tn(bt.current),
                ei(t)) {
                    if (o = t.stateNode,
                    n = t.memoizedProps,
                    o[kt] = t,
                    (u = o.nodeValue !== n) && (e = at,
                    e !== null))
                        switch (e.tag) {
                        case 3:
                            Js(o.nodeValue, n, (e.mode & 1) !== 0);
                            break;
                        case 5:
                            e.memoizedProps.suppressHydrationWarning !== !0 && Js(o.nodeValue, n, (e.mode & 1) !== 0)
                        }
                    u && (t.flags |= 4)
                } else
                    o = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(o),
                    o[kt] = t,
                    t.stateNode = o
            }
            return Oe(t),
            null;
        case 13:
            if (ve(Re),
            o = t.memoizedState,
            e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                if (Le && lt !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
                    Bc(),
                    qn(),
                    t.flags |= 98560,
                    u = !1;
                else if (u = ei(t),
                o !== null && o.dehydrated !== null) {
                    if (e === null) {
                        if (!u)
                            throw Error(i(318));
                        if (u = t.memoizedState,
                        u = u !== null ? u.dehydrated : null,
                        !u)
                            throw Error(i(317));
                        u[kt] = t
                    } else
                        qn(),
                        (t.flags & 128) === 0 && (t.memoizedState = null),
                        t.flags |= 4;
                    Oe(t),
                    u = !1
                } else
                    zt !== null && (_a(zt),
                    zt = null),
                    u = !0;
                if (!u)
                    return t.flags & 65536 ? t : null
            }
            return (t.flags & 128) !== 0 ? (t.lanes = n,
            t) : (o = o !== null,
            o !== (e !== null && e.memoizedState !== null) && o && (t.child.flags |= 8192,
            (t.mode & 1) !== 0 && (e === null || (Re.current & 1) !== 0 ? Ve === 0 && (Ve = 3) : Oa())),
            t.updateQueue !== null && (t.flags |= 4),
            Oe(t),
            null);
        case 4:
            return rr(),
            Aa(e, t),
            e === null && Qr(t.stateNode.containerInfo),
            Oe(t),
            null;
        case 10:
            return na(t.type._context),
            Oe(t),
            null;
        case 17:
            return qe(t.type) && Hs(),
            Oe(t),
            null;
        case 19:
            if (ve(Re),
            u = t.memoizedState,
            u === null)
                return Oe(t),
                null;
            if (o = (t.flags & 128) !== 0,
            h = u.rendering,
            h === null)
                if (o)
                    Xr(u, !1);
                else {
                    if (Ve !== 0 || e !== null && (e.flags & 128) !== 0)
                        for (e = t.child; e !== null; ) {
                            if (h = oi(e),
                            h !== null) {
                                for (t.flags |= 128,
                                Xr(u, !1),
                                o = h.updateQueue,
                                o !== null && (t.updateQueue = o,
                                t.flags |= 4),
                                t.subtreeFlags = 0,
                                o = n,
                                n = t.child; n !== null; )
                                    u = n,
                                    e = o,
                                    u.flags &= 14680066,
                                    h = u.alternate,
                                    h === null ? (u.childLanes = 0,
                                    u.lanes = e,
                                    u.child = null,
                                    u.subtreeFlags = 0,
                                    u.memoizedProps = null,
                                    u.memoizedState = null,
                                    u.updateQueue = null,
                                    u.dependencies = null,
                                    u.stateNode = null) : (u.childLanes = h.childLanes,
                                    u.lanes = h.lanes,
                                    u.child = h.child,
                                    u.subtreeFlags = 0,
                                    u.deletions = null,
                                    u.memoizedProps = h.memoizedProps,
                                    u.memoizedState = h.memoizedState,
                                    u.updateQueue = h.updateQueue,
                                    u.type = h.type,
                                    e = h.dependencies,
                                    u.dependencies = e === null ? null : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext
                                    }),
                                    n = n.sibling;
                                return me(Re, Re.current & 1 | 2),
                                t.child
                            }
                            e = e.sibling
                        }
                    u.tail !== null && Ae() > ar && (t.flags |= 128,
                    o = !0,
                    Xr(u, !1),
                    t.lanes = 4194304)
                }
            else {
                if (!o)
                    if (e = oi(h),
                    e !== null) {
                        if (t.flags |= 128,
                        o = !0,
                        n = e.updateQueue,
                        n !== null && (t.updateQueue = n,
                        t.flags |= 4),
                        Xr(u, !0),
                        u.tail === null && u.tailMode === "hidden" && !h.alternate && !Le)
                            return Oe(t),
                            null
                    } else
                        2 * Ae() - u.renderingStartTime > ar && n !== 1073741824 && (t.flags |= 128,
                        o = !0,
                        Xr(u, !1),
                        t.lanes = 4194304);
                u.isBackwards ? (h.sibling = t.child,
                t.child = h) : (n = u.last,
                n !== null ? n.sibling = h : t.child = h,
                u.last = h)
            }
            return u.tail !== null ? (t = u.tail,
            u.rendering = t,
            u.tail = t.sibling,
            u.renderingStartTime = Ae(),
            t.sibling = null,
            n = Re.current,
            me(Re, o ? n & 1 | 2 : n & 1),
            t) : (Oe(t),
            null);
        case 22:
        case 23:
            return Ya(),
            o = t.memoizedState !== null,
            e !== null && e.memoizedState !== null !== o && (t.flags |= 8192),
            o && (t.mode & 1) !== 0 ? (ut & 1073741824) !== 0 && (Oe(t),
            t.subtreeFlags & 6 && (t.flags |= 8192)) : Oe(t),
            null;
        case 24:
            return null;
        case 25:
            return null
        }
        throw Error(i(156, t.tag))
    }
    function Oy(e, t) {
        switch (Ko(t),
        t.tag) {
        case 1:
            return qe(t.type) && Hs(),
            e = t.flags,
            e & 65536 ? (t.flags = e & -65537 | 128,
            t) : null;
        case 3:
            return rr(),
            ve(Xe),
            ve(Qe),
            ua(),
            e = t.flags,
            (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128,
            t) : null;
        case 5:
            return aa(t),
            null;
        case 13:
            if (ve(Re),
            e = t.memoizedState,
            e !== null && e.dehydrated !== null) {
                if (t.alternate === null)
                    throw Error(i(340));
                qn()
            }
            return e = t.flags,
            e & 65536 ? (t.flags = e & -65537 | 128,
            t) : null;
        case 19:
            return ve(Re),
            null;
        case 4:
            return rr(),
            null;
        case 10:
            return na(t.type._context),
            null;
        case 22:
        case 23:
            return Ya(),
            null;
        case 24:
            return null;
        default:
            return null
        }
    }
    var mi = !1
      , Ie = !1
      , Iy = typeof WeakSet == "function" ? WeakSet : Set
      , F = null;
    function ir(e, t) {
        var n = e.ref;
        if (n !== null)
            if (typeof n == "function")
                try {
                    n(null)
                } catch (o) {
                    Ee(e, t, o)
                }
            else
                n.current = null
    }
    function Ma(e, t, n) {
        try {
            n()
        } catch (o) {
            Ee(e, t, o)
        }
    }
    var Pd = !1;
    function Fy(e, t) {
        if (Yo = Cs,
        e = fc(),
        Vo(e)) {
            if ("selectionStart"in e)
                var n = {
                    start: e.selectionStart,
                    end: e.selectionEnd
                };
            else
                e: {
                    n = (n = e.ownerDocument) && n.defaultView || window;
                    var o = n.getSelection && n.getSelection();
                    if (o && o.rangeCount !== 0) {
                        n = o.anchorNode;
                        var l = o.anchorOffset
                          , u = o.focusNode;
                        o = o.focusOffset;
                        try {
                            n.nodeType,
                            u.nodeType
                        } catch {
                            n = null;
                            break e
                        }
                        var h = 0
                          , x = -1
                          , L = -1
                          , S = 0
                          , b = 0
                          , P = e
                          , N = null;
                        t: for (; ; ) {
                            for (var Q; P !== n || l !== 0 && P.nodeType !== 3 || (x = h + l),
                            P !== u || o !== 0 && P.nodeType !== 3 || (L = h + o),
                            P.nodeType === 3 && (h += P.nodeValue.length),
                            (Q = P.firstChild) !== null; )
                                N = P,
                                P = Q;
                            for (; ; ) {
                                if (P === e)
                                    break t;
                                if (N === n && ++S === l && (x = h),
                                N === u && ++b === o && (L = h),
                                (Q = P.nextSibling) !== null)
                                    break;
                                P = N,
                                N = P.parentNode
                            }
                            P = Q
                        }
                        n = x === -1 || L === -1 ? null : {
                            start: x,
                            end: L
                        }
                    } else
                        n = null
                }
            n = n || {
                start: 0,
                end: 0
            }
        } else
            n = null;
        for (Oo = {
            focusedElem: e,
            selectionRange: n
        },
        Cs = !1,
        F = t; F !== null; )
            if (t = F,
            e = t.child,
            (t.subtreeFlags & 1028) !== 0 && e !== null)
                e.return = t,
                F = e;
            else
                for (; F !== null; ) {
                    t = F;
                    try {
                        var J = t.alternate;
                        if ((t.flags & 1024) !== 0)
                            switch (t.tag) {
                            case 0:
                            case 11:
                            case 15:
                                break;
                            case 1:
                                if (J !== null) {
                                    var U = J.memoizedProps
                                      , Me = J.memoizedState
                                      , T = t.stateNode
                                      , R = T.getSnapshotBeforeUpdate(t.elementType === t.type ? U : Tt(t.type, U), Me);
                                    T.__reactInternalSnapshotBeforeUpdate = R
                                }
                                break;
                            case 3:
                                var E = t.stateNode.containerInfo;
                                E.nodeType === 1 ? E.textContent = "" : E.nodeType === 9 && E.documentElement && E.removeChild(E.documentElement);
                                break;
                            case 5:
                            case 6:
                            case 4:
                            case 17:
                                break;
                            default:
                                throw Error(i(163))
                            }
                    } catch (B) {
                        Ee(t, t.return, B)
                    }
                    if (e = t.sibling,
                    e !== null) {
                        e.return = t.return,
                        F = e;
                        break
                    }
                    F = t.return
                }
        return J = Pd,
        Pd = !1,
        J
    }
    function qr(e, t, n) {
        var o = t.updateQueue;
        if (o = o !== null ? o.lastEffect : null,
        o !== null) {
            var l = o = o.next;
            do {
                if ((l.tag & e) === e) {
                    var u = l.destroy;
                    l.destroy = void 0,
                    u !== void 0 && Ma(t, n, u)
                }
                l = l.next
            } while (l !== o)
        }
    }
    function yi(e, t) {
        if (t = t.updateQueue,
        t = t !== null ? t.lastEffect : null,
        t !== null) {
            var n = t = t.next;
            do {
                if ((n.tag & e) === e) {
                    var o = n.create;
                    n.destroy = o()
                }
                n = n.next
            } while (n !== t)
        }
    }
    function Na(e) {
        var t = e.ref;
        if (t !== null) {
            var n = e.stateNode;
            e.tag,
            e = n,
            typeof t == "function" ? t(e) : t.current = e
        }
    }
    function Cd(e) {
        var t = e.alternate;
        t !== null && (e.alternate = null,
        Cd(t)),
        e.child = null,
        e.deletions = null,
        e.sibling = null,
        e.tag === 5 && (t = e.stateNode,
        t !== null && (delete t[kt],
        delete t[Or],
        delete t[Jo],
        delete t[Ey],
        delete t[Sy])),
        e.stateNode = null,
        e.return = null,
        e.dependencies = null,
        e.memoizedProps = null,
        e.memoizedState = null,
        e.pendingProps = null,
        e.stateNode = null,
        e.updateQueue = null
    }
    function Bd(e) {
        return e.tag === 5 || e.tag === 3 || e.tag === 4
    }
    function Dd(e) {
        e: for (; ; ) {
            for (; e.sibling === null; ) {
                if (e.return === null || Bd(e.return))
                    return null;
                e = e.return
            }
            for (e.sibling.return = e.return,
            e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
                if (e.flags & 2 || e.child === null || e.tag === 4)
                    continue e;
                e.child.return = e,
                e = e.child
            }
            if (!(e.flags & 2))
                return e.stateNode
        }
    }
    function ka(e, t, n) {
        var o = e.tag;
        if (o === 5 || o === 6)
            e = e.stateNode,
            t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode,
            t.insertBefore(e, n)) : (t = n,
            t.appendChild(e)),
            n = n._reactRootContainer,
            n != null || t.onclick !== null || (t.onclick = Us));
        else if (o !== 4 && (e = e.child,
        e !== null))
            for (ka(e, t, n),
            e = e.sibling; e !== null; )
                ka(e, t, n),
                e = e.sibling
    }
    function ba(e, t, n) {
        var o = e.tag;
        if (o === 5 || o === 6)
            e = e.stateNode,
            t ? n.insertBefore(e, t) : n.appendChild(e);
        else if (o !== 4 && (e = e.child,
        e !== null))
            for (ba(e, t, n),
            e = e.sibling; e !== null; )
                ba(e, t, n),
                e = e.sibling
    }
    var De = null
      , Et = !1;
    function ln(e, t, n) {
        for (n = n.child; n !== null; )
            Wd(e, t, n),
            n = n.sibling
    }
    function Wd(e, t, n) {
        if (Nt && typeof Nt.onCommitFiberUnmount == "function")
            try {
                Nt.onCommitFiberUnmount(Ms, n)
            } catch {}
        switch (n.tag) {
        case 5:
            Ie || ir(n, t);
        case 6:
            var o = De
              , l = Et;
            De = null,
            ln(e, t, n),
            De = o,
            Et = l,
            De !== null && (Et ? (e = De,
            n = n.stateNode,
            e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : De.removeChild(n.stateNode));
            break;
        case 18:
            De !== null && (Et ? (e = De,
            n = n.stateNode,
            e.nodeType === 8 ? Zo(e.parentNode, n) : e.nodeType === 1 && Zo(e, n),
            kr(e)) : Zo(De, n.stateNode));
            break;
        case 4:
            o = De,
            l = Et,
            De = n.stateNode.containerInfo,
            Et = !0,
            ln(e, t, n),
            De = o,
            Et = l;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!Ie && (o = n.updateQueue,
            o !== null && (o = o.lastEffect,
            o !== null))) {
                l = o = o.next;
                do {
                    var u = l
                      , h = u.destroy;
                    u = u.tag,
                    h !== void 0 && ((u & 2) !== 0 || (u & 4) !== 0) && Ma(n, t, h),
                    l = l.next
                } while (l !== o)
            }
            ln(e, t, n);
            break;
        case 1:
            if (!Ie && (ir(n, t),
            o = n.stateNode,
            typeof o.componentWillUnmount == "function"))
                try {
                    o.props = n.memoizedProps,
                    o.state = n.memoizedState,
                    o.componentWillUnmount()
                } catch (x) {
                    Ee(n, t, x)
                }
            ln(e, t, n);
            break;
        case 21:
            ln(e, t, n);
            break;
        case 22:
            n.mode & 1 ? (Ie = (o = Ie) || n.memoizedState !== null,
            ln(e, t, n),
            Ie = o) : ln(e, t, n);
            break;
        default:
            ln(e, t, n)
        }
    }
    function _d(e) {
        var t = e.updateQueue;
        if (t !== null) {
            e.updateQueue = null;
            var n = e.stateNode;
            n === null && (n = e.stateNode = new Iy),
            t.forEach(function(o) {
                var l = qy.bind(null, e, o);
                n.has(o) || (n.add(o),
                o.then(l, l))
            })
        }
    }
    function St(e, t) {
        var n = t.deletions;
        if (n !== null)
            for (var o = 0; o < n.length; o++) {
                var l = n[o];
                try {
                    var u = e
                      , h = t
                      , x = h;
                    e: for (; x !== null; ) {
                        switch (x.tag) {
                        case 5:
                            De = x.stateNode,
                            Et = !1;
                            break e;
                        case 3:
                            De = x.stateNode.containerInfo,
                            Et = !0;
                            break e;
                        case 4:
                            De = x.stateNode.containerInfo,
                            Et = !0;
                            break e
                        }
                        x = x.return
                    }
                    if (De === null)
                        throw Error(i(160));
                    Wd(u, h, l),
                    De = null,
                    Et = !1;
                    var L = l.alternate;
                    L !== null && (L.return = null),
                    l.return = null
                } catch (S) {
                    Ee(l, t, S)
                }
            }
        if (t.subtreeFlags & 12854)
            for (t = t.child; t !== null; )
                Qd(t, e),
                t = t.sibling
    }
    function Qd(e, t) {
        var n = e.alternate
          , o = e.flags;
        switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if (St(t, e),
            Pt(e),
            o & 4) {
                try {
                    qr(3, e, e.return),
                    yi(3, e)
                } catch (U) {
                    Ee(e, e.return, U)
                }
                try {
                    qr(5, e, e.return)
                } catch (U) {
                    Ee(e, e.return, U)
                }
            }
            break;
        case 1:
            St(t, e),
            Pt(e),
            o & 512 && n !== null && ir(n, n.return);
            break;
        case 5:
            if (St(t, e),
            Pt(e),
            o & 512 && n !== null && ir(n, n.return),
            e.flags & 32) {
                var l = e.stateNode;
                try {
                    wr(l, "")
                } catch (U) {
                    Ee(e, e.return, U)
                }
            }
            if (o & 4 && (l = e.stateNode,
            l != null)) {
                var u = e.memoizedProps
                  , h = n !== null ? n.memoizedProps : u
                  , x = e.type
                  , L = e.updateQueue;
                if (e.updateQueue = null,
                L !== null)
                    try {
                        x === "input" && u.type === "radio" && u.name != null && pu(l, u),
                        lo(x, h);
                        var S = lo(x, u);
                        for (h = 0; h < L.length; h += 2) {
                            var b = L[h]
                              , P = L[h + 1];
                            b === "style" ? Ru(l, P) : b === "dangerouslySetInnerHTML" ? wu(l, P) : b === "children" ? wr(l, P) : Z(l, b, P, S)
                        }
                        switch (x) {
                        case "input":
                            ro(l, u);
                            break;
                        case "textarea":
                            gu(l, u);
                            break;
                        case "select":
                            var N = l._wrapperState.wasMultiple;
                            l._wrapperState.wasMultiple = !!u.multiple;
                            var Q = u.value;
                            Q != null ? Wn(l, !!u.multiple, Q, !1) : N !== !!u.multiple && (u.defaultValue != null ? Wn(l, !!u.multiple, u.defaultValue, !0) : Wn(l, !!u.multiple, u.multiple ? [] : "", !1))
                        }
                        l[Or] = u
                    } catch (U) {
                        Ee(e, e.return, U)
                    }
            }
            break;
        case 6:
            if (St(t, e),
            Pt(e),
            o & 4) {
                if (e.stateNode === null)
                    throw Error(i(162));
                l = e.stateNode,
                u = e.memoizedProps;
                try {
                    l.nodeValue = u
                } catch (U) {
                    Ee(e, e.return, U)
                }
            }
            break;
        case 3:
            if (St(t, e),
            Pt(e),
            o & 4 && n !== null && n.memoizedState.isDehydrated)
                try {
                    kr(t.containerInfo)
                } catch (U) {
                    Ee(e, e.return, U)
                }
            break;
        case 4:
            St(t, e),
            Pt(e);
            break;
        case 13:
            St(t, e),
            Pt(e),
            l = e.child,
            l.flags & 8192 && (u = l.memoizedState !== null,
            l.stateNode.isHidden = u,
            !u || l.alternate !== null && l.alternate.memoizedState !== null || (Ca = Ae())),
            o & 4 && _d(e);
            break;
        case 22:
            if (b = n !== null && n.memoizedState !== null,
            e.mode & 1 ? (Ie = (S = Ie) || b,
            St(t, e),
            Ie = S) : St(t, e),
            Pt(e),
            o & 8192) {
                if (S = e.memoizedState !== null,
                (e.stateNode.isHidden = S) && !b && (e.mode & 1) !== 0)
                    for (F = e,
                    b = e.child; b !== null; ) {
                        for (P = F = b; F !== null; ) {
                            switch (N = F,
                            Q = N.child,
                            N.tag) {
                            case 0:
                            case 11:
                            case 14:
                            case 15:
                                qr(4, N, N.return);
                                break;
                            case 1:
                                ir(N, N.return);
                                var J = N.stateNode;
                                if (typeof J.componentWillUnmount == "function") {
                                    o = N,
                                    n = N.return;
                                    try {
                                        t = o,
                                        J.props = t.memoizedProps,
                                        J.state = t.memoizedState,
                                        J.componentWillUnmount()
                                    } catch (U) {
                                        Ee(o, n, U)
                                    }
                                }
                                break;
                            case 5:
                                ir(N, N.return);
                                break;
                            case 22:
                                if (N.memoizedState !== null) {
                                    Id(P);
                                    continue
                                }
                            }
                            Q !== null ? (Q.return = N,
                            F = Q) : Id(P)
                        }
                        b = b.sibling
                    }
                e: for (b = null,
                P = e; ; ) {
                    if (P.tag === 5) {
                        if (b === null) {
                            b = P;
                            try {
                                l = P.stateNode,
                                S ? (u = l.style,
                                typeof u.setProperty == "function" ? u.setProperty("display", "none", "important") : u.display = "none") : (x = P.stateNode,
                                L = P.memoizedProps.style,
                                h = L != null && L.hasOwnProperty("display") ? L.display : null,
                                x.style.display = Lu("display", h))
                            } catch (U) {
                                Ee(e, e.return, U)
                            }
                        }
                    } else if (P.tag === 6) {
                        if (b === null)
                            try {
                                P.stateNode.nodeValue = S ? "" : P.memoizedProps
                            } catch (U) {
                                Ee(e, e.return, U)
                            }
                    } else if ((P.tag !== 22 && P.tag !== 23 || P.memoizedState === null || P === e) && P.child !== null) {
                        P.child.return = P,
                        P = P.child;
                        continue
                    }
                    if (P === e)
                        break e;
                    for (; P.sibling === null; ) {
                        if (P.return === null || P.return === e)
                            break e;
                        b === P && (b = null),
                        P = P.return
                    }
                    b === P && (b = null),
                    P.sibling.return = P.return,
                    P = P.sibling
                }
            }
            break;
        case 19:
            St(t, e),
            Pt(e),
            o & 4 && _d(e);
            break;
        case 21:
            break;
        default:
            St(t, e),
            Pt(e)
        }
    }
    function Pt(e) {
        var t = e.flags;
        if (t & 2) {
            try {
                e: {
                    for (var n = e.return; n !== null; ) {
                        if (Bd(n)) {
                            var o = n;
                            break e
                        }
                        n = n.return
                    }
                    throw Error(i(160))
                }
                switch (o.tag) {
                case 5:
                    var l = o.stateNode;
                    o.flags & 32 && (wr(l, ""),
                    o.flags &= -33);
                    var u = Dd(e);
                    ba(e, u, l);
                    break;
                case 3:
                case 4:
                    var h = o.stateNode.containerInfo
                      , x = Dd(e);
                    ka(e, x, h);
                    break;
                default:
                    throw Error(i(161))
                }
            } catch (L) {
                Ee(e, e.return, L)
            }
            e.flags &= -3
        }
        t & 4096 && (e.flags &= -4097)
    }
    function Zy(e, t, n) {
        F = e,
        Yd(e)
    }
    function Yd(e, t, n) {
        for (var o = (e.mode & 1) !== 0; F !== null; ) {
            var l = F
              , u = l.child;
            if (l.tag === 22 && o) {
                var h = l.memoizedState !== null || mi;
                if (!h) {
                    var x = l.alternate
                      , L = x !== null && x.memoizedState !== null || Ie;
                    x = mi;
                    var S = Ie;
                    if (mi = h,
                    (Ie = L) && !S)
                        for (F = l; F !== null; )
                            h = F,
                            L = h.child,
                            h.tag === 22 && h.memoizedState !== null ? Fd(l) : L !== null ? (L.return = h,
                            F = L) : Fd(l);
                    for (; u !== null; )
                        F = u,
                        Yd(u),
                        u = u.sibling;
                    F = l,
                    mi = x,
                    Ie = S
                }
                Od(e)
            } else
                (l.subtreeFlags & 8772) !== 0 && u !== null ? (u.return = l,
                F = u) : Od(e)
        }
    }
    function Od(e) {
        for (; F !== null; ) {
            var t = F;
            if ((t.flags & 8772) !== 0) {
                var n = t.alternate;
                try {
                    if ((t.flags & 8772) !== 0)
                        switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            Ie || yi(5, t);
                            break;
                        case 1:
                            var o = t.stateNode;
                            if (t.flags & 4 && !Ie)
                                if (n === null)
                                    o.componentDidMount();
                                else {
                                    var l = t.elementType === t.type ? n.memoizedProps : Tt(t.type, n.memoizedProps);
                                    o.componentDidUpdate(l, n.memoizedState, o.__reactInternalSnapshotBeforeUpdate)
                                }
                            var u = t.updateQueue;
                            u !== null && Ic(t, u, o);
                            break;
                        case 3:
                            var h = t.updateQueue;
                            if (h !== null) {
                                if (n = null,
                                t.child !== null)
                                    switch (t.child.tag) {
                                    case 5:
                                        n = t.child.stateNode;
                                        break;
                                    case 1:
                                        n = t.child.stateNode
                                    }
                                Ic(t, h, n)
                            }
                            break;
                        case 5:
                            var x = t.stateNode;
                            if (n === null && t.flags & 4) {
                                n = x;
                                var L = t.memoizedProps;
                                switch (t.type) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    L.autoFocus && n.focus();
                                    break;
                                case "img":
                                    L.src && (n.src = L.src)
                                }
                            }
                            break;
                        case 6:
                            break;
                        case 4:
                            break;
                        case 12:
                            break;
                        case 13:
                            if (t.memoizedState === null) {
                                var S = t.alternate;
                                if (S !== null) {
                                    var b = S.memoizedState;
                                    if (b !== null) {
                                        var P = b.dehydrated;
                                        P !== null && kr(P)
                                    }
                                }
                            }
                            break;
                        case 19:
                        case 17:
                        case 21:
                        case 22:
                        case 23:
                        case 25:
                            break;
                        default:
                            throw Error(i(163))
                        }
                    Ie || t.flags & 512 && Na(t)
                } catch (N) {
                    Ee(t, t.return, N)
                }
            }
            if (t === e) {
                F = null;
                break
            }
            if (n = t.sibling,
            n !== null) {
                n.return = t.return,
                F = n;
                break
            }
            F = t.return
        }
    }
    function Id(e) {
        for (; F !== null; ) {
            var t = F;
            if (t === e) {
                F = null;
                break
            }
            var n = t.sibling;
            if (n !== null) {
                n.return = t.return,
                F = n;
                break
            }
            F = t.return
        }
    }
    function Fd(e) {
        for (; F !== null; ) {
            var t = F;
            try {
                switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return;
                    try {
                        yi(4, t)
                    } catch (L) {
                        Ee(t, n, L)
                    }
                    break;
                case 1:
                    var o = t.stateNode;
                    if (typeof o.componentDidMount == "function") {
                        var l = t.return;
                        try {
                            o.componentDidMount()
                        } catch (L) {
                            Ee(t, l, L)
                        }
                    }
                    var u = t.return;
                    try {
                        Na(t)
                    } catch (L) {
                        Ee(t, u, L)
                    }
                    break;
                case 5:
                    var h = t.return;
                    try {
                        Na(t)
                    } catch (L) {
                        Ee(t, h, L)
                    }
                }
            } catch (L) {
                Ee(t, t.return, L)
            }
            if (t === e) {
                F = null;
                break
            }
            var x = t.sibling;
            if (x !== null) {
                x.return = t.return,
                F = x;
                break
            }
            F = t.return
        }
    }
    var Jy = Math.ceil
      , gi = H.ReactCurrentDispatcher
      , Va = H.ReactCurrentOwner
      , gt = H.ReactCurrentBatchConfig
      , le = 0
      , Ce = null
      , ke = null
      , We = 0
      , ut = 0
      , or = nn(0)
      , Ve = 0
      , es = null
      , Sn = 0
      , vi = 0
      , Pa = 0
      , ts = null
      , tt = null
      , Ca = 0
      , ar = 1 / 0
      , Ft = null
      , xi = !1
      , Ba = null
      , un = null
      , wi = !1
      , cn = null
      , Li = 0
      , ns = 0
      , Da = null
      , Ri = -1
      , ji = 0;
    function He() {
        return (le & 6) !== 0 ? Ae() : Ri !== -1 ? Ri : Ri = Ae()
    }
    function dn(e) {
        return (e.mode & 1) === 0 ? 1 : (le & 2) !== 0 && We !== 0 ? We & -We : My.transition !== null ? (ji === 0 && (ji = Du()),
        ji) : (e = he,
        e !== 0 || (e = window.event,
        e = e === void 0 ? 16 : Ju(e.type)),
        e)
    }
    function At(e, t, n, o) {
        if (50 < ns)
            throw ns = 0,
            Da = null,
            Error(i(185));
        Er(e, n, o),
        ((le & 2) === 0 || e !== Ce) && (e === Ce && ((le & 2) === 0 && (vi |= n),
        Ve === 4 && fn(e, We)),
        nt(e, o),
        n === 1 && le === 0 && (t.mode & 1) === 0 && (ar = Ae() + 500,
        Gs && sn()))
    }
    function nt(e, t) {
        var n = e.callbackNode;
        Mm(e, t);
        var o = bs(e, e === Ce ? We : 0);
        if (o === 0)
            n !== null && Pu(n),
            e.callbackNode = null,
            e.callbackPriority = 0;
        else if (t = o & -o,
        e.callbackPriority !== t) {
            if (n != null && Pu(n),
            t === 1)
                e.tag === 0 ? Ay(Jd.bind(null, e)) : kc(Jd.bind(null, e)),
                zy(function() {
                    (le & 6) === 0 && sn()
                }),
                n = null;
            else {
                switch (Wu(o)) {
                case 1:
                    n = yo;
                    break;
                case 4:
                    n = Cu;
                    break;
                case 16:
                    n = As;
                    break;
                case 536870912:
                    n = Bu;
                    break;
                default:
                    n = As
                }
                n = ef(n, Zd.bind(null, e))
            }
            e.callbackPriority = t,
            e.callbackNode = n
        }
    }
    function Zd(e, t) {
        if (Ri = -1,
        ji = 0,
        (le & 6) !== 0)
            throw Error(i(327));
        var n = e.callbackNode;
        if (lr() && e.callbackNode !== n)
            return null;
        var o = bs(e, e === Ce ? We : 0);
        if (o === 0)
            return null;
        if ((o & 30) !== 0 || (o & e.expiredLanes) !== 0 || t)
            t = zi(e, o);
        else {
            t = o;
            var l = le;
            le |= 2;
            var u = $d();
            (Ce !== e || We !== t) && (Ft = null,
            ar = Ae() + 500,
            Mn(e, t));
            do
                try {
                    Hy();
                    break
                } catch (x) {
                    Ud(e, x)
                }
            while (!0);
            ta(),
            gi.current = u,
            le = l,
            ke !== null ? t = 0 : (Ce = null,
            We = 0,
            t = Ve)
        }
        if (t !== 0) {
            if (t === 2 && (l = go(e),
            l !== 0 && (o = l,
            t = Wa(e, l))),
            t === 1)
                throw n = es,
                Mn(e, 0),
                fn(e, o),
                nt(e, Ae()),
                n;
            if (t === 6)
                fn(e, o);
            else {
                if (l = e.current.alternate,
                (o & 30) === 0 && !Uy(l) && (t = zi(e, o),
                t === 2 && (u = go(e),
                u !== 0 && (o = u,
                t = Wa(e, u))),
                t === 1))
                    throw n = es,
                    Mn(e, 0),
                    fn(e, o),
                    nt(e, Ae()),
                    n;
                switch (e.finishedWork = l,
                e.finishedLanes = o,
                t) {
                case 0:
                case 1:
                    throw Error(i(345));
                case 2:
                    Nn(e, tt, Ft);
                    break;
                case 3:
                    if (fn(e, o),
                    (o & 130023424) === o && (t = Ca + 500 - Ae(),
                    10 < t)) {
                        if (bs(e, 0) !== 0)
                            break;
                        if (l = e.suspendedLanes,
                        (l & o) !== o) {
                            He(),
                            e.pingedLanes |= e.suspendedLanes & l;
                            break
                        }
                        e.timeoutHandle = Fo(Nn.bind(null, e, tt, Ft), t);
                        break
                    }
                    Nn(e, tt, Ft);
                    break;
                case 4:
                    if (fn(e, o),
                    (o & 4194240) === o)
                        break;
                    for (t = e.eventTimes,
                    l = -1; 0 < o; ) {
                        var h = 31 - Rt(o);
                        u = 1 << h,
                        h = t[h],
                        h > l && (l = h),
                        o &= ~u
                    }
                    if (o = l,
                    o = Ae() - o,
                    o = (120 > o ? 120 : 480 > o ? 480 : 1080 > o ? 1080 : 1920 > o ? 1920 : 3e3 > o ? 3e3 : 4320 > o ? 4320 : 1960 * Jy(o / 1960)) - o,
                    10 < o) {
                        e.timeoutHandle = Fo(Nn.bind(null, e, tt, Ft), o);
                        break
                    }
                    Nn(e, tt, Ft);
                    break;
                case 5:
                    Nn(e, tt, Ft);
                    break;
                default:
                    throw Error(i(329))
                }
            }
        }
        return nt(e, Ae()),
        e.callbackNode === n ? Zd.bind(null, e) : null
    }
    function Wa(e, t) {
        var n = ts;
        return e.current.memoizedState.isDehydrated && (Mn(e, t).flags |= 256),
        e = zi(e, t),
        e !== 2 && (t = tt,
        tt = n,
        t !== null && _a(t)),
        e
    }
    function _a(e) {
        tt === null ? tt = e : tt.push.apply(tt, e)
    }
    function Uy(e) {
        for (var t = e; ; ) {
            if (t.flags & 16384) {
                var n = t.updateQueue;
                if (n !== null && (n = n.stores,
                n !== null))
                    for (var o = 0; o < n.length; o++) {
                        var l = n[o]
                          , u = l.getSnapshot;
                        l = l.value;
                        try {
                            if (!jt(u(), l))
                                return !1
                        } catch {
                            return !1
                        }
                    }
            }
            if (n = t.child,
            t.subtreeFlags & 16384 && n !== null)
                n.return = t,
                t = n;
            else {
                if (t === e)
                    break;
                for (; t.sibling === null; ) {
                    if (t.return === null || t.return === e)
                        return !0;
                    t = t.return
                }
                t.sibling.return = t.return,
                t = t.sibling
            }
        }
        return !0
    }
    function fn(e, t) {
        for (t &= ~Pa,
        t &= ~vi,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes; 0 < t; ) {
            var n = 31 - Rt(t)
              , o = 1 << n;
            e[n] = -1,
            t &= ~o
        }
    }
    function Jd(e) {
        if ((le & 6) !== 0)
            throw Error(i(327));
        lr();
        var t = bs(e, 0);
        if ((t & 1) === 0)
            return nt(e, Ae()),
            null;
        var n = zi(e, t);
        if (e.tag !== 0 && n === 2) {
            var o = go(e);
            o !== 0 && (t = o,
            n = Wa(e, o))
        }
        if (n === 1)
            throw n = es,
            Mn(e, 0),
            fn(e, t),
            nt(e, Ae()),
            n;
        if (n === 6)
            throw Error(i(345));
        return e.finishedWork = e.current.alternate,
        e.finishedLanes = t,
        Nn(e, tt, Ft),
        nt(e, Ae()),
        null
    }
    function Qa(e, t) {
        var n = le;
        le |= 1;
        try {
            return e(t)
        } finally {
            le = n,
            le === 0 && (ar = Ae() + 500,
            Gs && sn())
        }
    }
    function An(e) {
        cn !== null && cn.tag === 0 && (le & 6) === 0 && lr();
        var t = le;
        le |= 1;
        var n = gt.transition
          , o = he;
        try {
            if (gt.transition = null,
            he = 1,
            e)
                return e()
        } finally {
            he = o,
            gt.transition = n,
            le = t,
            (le & 6) === 0 && sn()
        }
    }
    function Ya() {
        ut = or.current,
        ve(or)
    }
    function Mn(e, t) {
        e.finishedWork = null,
        e.finishedLanes = 0;
        var n = e.timeoutHandle;
        if (n !== -1 && (e.timeoutHandle = -1,
        jy(n)),
        ke !== null)
            for (n = ke.return; n !== null; ) {
                var o = n;
                switch (Ko(o),
                o.tag) {
                case 1:
                    o = o.type.childContextTypes,
                    o != null && Hs();
                    break;
                case 3:
                    rr(),
                    ve(Xe),
                    ve(Qe),
                    ua();
                    break;
                case 5:
                    aa(o);
                    break;
                case 4:
                    rr();
                    break;
                case 13:
                    ve(Re);
                    break;
                case 19:
                    ve(Re);
                    break;
                case 10:
                    na(o.type._context);
                    break;
                case 22:
                case 23:
                    Ya()
                }
                n = n.return
            }
        if (Ce = e,
        ke = e = hn(e.current, null),
        We = ut = t,
        Ve = 0,
        es = null,
        Pa = vi = Sn = 0,
        tt = ts = null,
        zn !== null) {
            for (t = 0; t < zn.length; t++)
                if (n = zn[t],
                o = n.interleaved,
                o !== null) {
                    n.interleaved = null;
                    var l = o.next
                      , u = n.pending;
                    if (u !== null) {
                        var h = u.next;
                        u.next = l,
                        o.next = h
                    }
                    n.pending = o
                }
            zn = null
        }
        return e
    }
    function Ud(e, t) {
        do {
            var n = ke;
            try {
                if (ta(),
                ai.current = di,
                li) {
                    for (var o = je.memoizedState; o !== null; ) {
                        var l = o.queue;
                        l !== null && (l.pending = null),
                        o = o.next
                    }
                    li = !1
                }
                if (En = 0,
                Pe = be = je = null,
                $r = !1,
                Hr = 0,
                Va.current = null,
                n === null || n.return === null) {
                    Ve = 1,
                    es = t,
                    ke = null;
                    break
                }
                e: {
                    var u = e
                      , h = n.return
                      , x = n
                      , L = t;
                    if (t = We,
                    x.flags |= 32768,
                    L !== null && typeof L == "object" && typeof L.then == "function") {
                        var S = L
                          , b = x
                          , P = b.tag;
                        if ((b.mode & 1) === 0 && (P === 0 || P === 11 || P === 15)) {
                            var N = b.alternate;
                            N ? (b.updateQueue = N.updateQueue,
                            b.memoizedState = N.memoizedState,
                            b.lanes = N.lanes) : (b.updateQueue = null,
                            b.memoizedState = null)
                        }
                        var Q = vd(h);
                        if (Q !== null) {
                            Q.flags &= -257,
                            xd(Q, h, x, u, t),
                            Q.mode & 1 && gd(u, S, t),
                            t = Q,
                            L = S;
                            var J = t.updateQueue;
                            if (J === null) {
                                var U = new Set;
                                U.add(L),
                                t.updateQueue = U
                            } else
                                J.add(L);
                            break e
                        } else {
                            if ((t & 1) === 0) {
                                gd(u, S, t),
                                Oa();
                                break e
                            }
                            L = Error(i(426))
                        }
                    } else if (Le && x.mode & 1) {
                        var Me = vd(h);
                        if (Me !== null) {
                            (Me.flags & 65536) === 0 && (Me.flags |= 256),
                            xd(Me, h, x, u, t),
                            qo(sr(L, x));
                            break e
                        }
                    }
                    u = L = sr(L, x),
                    Ve !== 4 && (Ve = 2),
                    ts === null ? ts = [u] : ts.push(u),
                    u = h;
                    do {
                        switch (u.tag) {
                        case 3:
                            u.flags |= 65536,
                            t &= -t,
                            u.lanes |= t;
                            var T = md(u, L, t);
                            Oc(u, T);
                            break e;
                        case 1:
                            x = L;
                            var R = u.type
                              , E = u.stateNode;
                            if ((u.flags & 128) === 0 && (typeof R.getDerivedStateFromError == "function" || E !== null && typeof E.componentDidCatch == "function" && (un === null || !un.has(E)))) {
                                u.flags |= 65536,
                                t &= -t,
                                u.lanes |= t;
                                var B = yd(u, x, t);
                                Oc(u, B);
                                break e
                            }
                        }
                        u = u.return
                    } while (u !== null)
                }
                Kd(n)
            } catch ($) {
                t = $,
                ke === n && n !== null && (ke = n = n.return);
                continue
            }
            break
        } while (!0)
    }
    function $d() {
        var e = gi.current;
        return gi.current = di,
        e === null ? di : e
    }
    function Oa() {
        (Ve === 0 || Ve === 3 || Ve === 2) && (Ve = 4),
        Ce === null || (Sn & 268435455) === 0 && (vi & 268435455) === 0 || fn(Ce, We)
    }
    function zi(e, t) {
        var n = le;
        le |= 2;
        var o = $d();
        (Ce !== e || We !== t) && (Ft = null,
        Mn(e, t));
        do
            try {
                $y();
                break
            } catch (l) {
                Ud(e, l)
            }
        while (!0);
        if (ta(),
        le = n,
        gi.current = o,
        ke !== null)
            throw Error(i(261));
        return Ce = null,
        We = 0,
        Ve
    }
    function $y() {
        for (; ke !== null; )
            Hd(ke)
    }
    function Hy() {
        for (; ke !== null && !wm(); )
            Hd(ke)
    }
    function Hd(e) {
        var t = qd(e.alternate, e, ut);
        e.memoizedProps = e.pendingProps,
        t === null ? Kd(e) : ke = t,
        Va.current = null
    }
    function Kd(e) {
        var t = e;
        do {
            var n = t.alternate;
            if (e = t.return,
            (t.flags & 32768) === 0) {
                if (n = Yy(n, t, ut),
                n !== null) {
                    ke = n;
                    return
                }
            } else {
                if (n = Oy(n, t),
                n !== null) {
                    n.flags &= 32767,
                    ke = n;
                    return
                }
                if (e !== null)
                    e.flags |= 32768,
                    e.subtreeFlags = 0,
                    e.deletions = null;
                else {
                    Ve = 6,
                    ke = null;
                    return
                }
            }
            if (t = t.sibling,
            t !== null) {
                ke = t;
                return
            }
            ke = t = e
        } while (t !== null);
        Ve === 0 && (Ve = 5)
    }
    function Nn(e, t, n) {
        var o = he
          , l = gt.transition;
        try {
            gt.transition = null,
            he = 1,
            Ky(e, t, n, o)
        } finally {
            gt.transition = l,
            he = o
        }
        return null
    }
    function Ky(e, t, n, o) {
        do
            lr();
        while (cn !== null);
        if ((le & 6) !== 0)
            throw Error(i(327));
        n = e.finishedWork;
        var l = e.finishedLanes;
        if (n === null)
            return null;
        if (e.finishedWork = null,
        e.finishedLanes = 0,
        n === e.current)
            throw Error(i(177));
        e.callbackNode = null,
        e.callbackPriority = 0;
        var u = n.lanes | n.childLanes;
        if (Nm(e, u),
        e === Ce && (ke = Ce = null,
        We = 0),
        (n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0 || wi || (wi = !0,
        ef(As, function() {
            return lr(),
            null
        })),
        u = (n.flags & 15990) !== 0,
        (n.subtreeFlags & 15990) !== 0 || u) {
            u = gt.transition,
            gt.transition = null;
            var h = he;
            he = 1;
            var x = le;
            le |= 4,
            Va.current = null,
            Fy(e, n),
            Qd(n, e),
            yy(Oo),
            Cs = !!Yo,
            Oo = Yo = null,
            e.current = n,
            Zy(n),
            Lm(),
            le = x,
            he = h,
            gt.transition = u
        } else
            e.current = n;
        if (wi && (wi = !1,
        cn = e,
        Li = l),
        u = e.pendingLanes,
        u === 0 && (un = null),
        zm(n.stateNode),
        nt(e, Ae()),
        t !== null)
            for (o = e.onRecoverableError,
            n = 0; n < t.length; n++)
                l = t[n],
                o(l.value, {
                    componentStack: l.stack,
                    digest: l.digest
                });
        if (xi)
            throw xi = !1,
            e = Ba,
            Ba = null,
            e;
        return (Li & 1) !== 0 && e.tag !== 0 && lr(),
        u = e.pendingLanes,
        (u & 1) !== 0 ? e === Da ? ns++ : (ns = 0,
        Da = e) : ns = 0,
        sn(),
        null
    }
    function lr() {
        if (cn !== null) {
            var e = Wu(Li)
              , t = gt.transition
              , n = he;
            try {
                if (gt.transition = null,
                he = 16 > e ? 16 : e,
                cn === null)
                    var o = !1;
                else {
                    if (e = cn,
                    cn = null,
                    Li = 0,
                    (le & 6) !== 0)
                        throw Error(i(331));
                    var l = le;
                    for (le |= 4,
                    F = e.current; F !== null; ) {
                        var u = F
                          , h = u.child;
                        if ((F.flags & 16) !== 0) {
                            var x = u.deletions;
                            if (x !== null) {
                                for (var L = 0; L < x.length; L++) {
                                    var S = x[L];
                                    for (F = S; F !== null; ) {
                                        var b = F;
                                        switch (b.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            qr(8, b, u)
                                        }
                                        var P = b.child;
                                        if (P !== null)
                                            P.return = b,
                                            F = P;
                                        else
                                            for (; F !== null; ) {
                                                b = F;
                                                var N = b.sibling
                                                  , Q = b.return;
                                                if (Cd(b),
                                                b === S) {
                                                    F = null;
                                                    break
                                                }
                                                if (N !== null) {
                                                    N.return = Q,
                                                    F = N;
                                                    break
                                                }
                                                F = Q
                                            }
                                    }
                                }
                                var J = u.alternate;
                                if (J !== null) {
                                    var U = J.child;
                                    if (U !== null) {
                                        J.child = null;
                                        do {
                                            var Me = U.sibling;
                                            U.sibling = null,
                                            U = Me
                                        } while (U !== null)
                                    }
                                }
                                F = u
                            }
                        }
                        if ((u.subtreeFlags & 2064) !== 0 && h !== null)
                            h.return = u,
                            F = h;
                        else
                            e: for (; F !== null; ) {
                                if (u = F,
                                (u.flags & 2048) !== 0)
                                    switch (u.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        qr(9, u, u.return)
                                    }
                                var T = u.sibling;
                                if (T !== null) {
                                    T.return = u.return,
                                    F = T;
                                    break e
                                }
                                F = u.return
                            }
                    }
                    var R = e.current;
                    for (F = R; F !== null; ) {
                        h = F;
                        var E = h.child;
                        if ((h.subtreeFlags & 2064) !== 0 && E !== null)
                            E.return = h,
                            F = E;
                        else
                            e: for (h = R; F !== null; ) {
                                if (x = F,
                                (x.flags & 2048) !== 0)
                                    try {
                                        switch (x.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            yi(9, x)
                                        }
                                    } catch ($) {
                                        Ee(x, x.return, $)
                                    }
                                if (x === h) {
                                    F = null;
                                    break e
                                }
                                var B = x.sibling;
                                if (B !== null) {
                                    B.return = x.return,
                                    F = B;
                                    break e
                                }
                                F = x.return
                            }
                    }
                    if (le = l,
                    sn(),
                    Nt && typeof Nt.onPostCommitFiberRoot == "function")
                        try {
                            Nt.onPostCommitFiberRoot(Ms, e)
                        } catch {}
                    o = !0
                }
                return o
            } finally {
                he = n,
                gt.transition = t
            }
        }
        return !1
    }
    function Gd(e, t, n) {
        t = sr(n, t),
        t = md(e, t, 1),
        e = an(e, t, 1),
        t = He(),
        e !== null && (Er(e, 1, t),
        nt(e, t))
    }
    function Ee(e, t, n) {
        if (e.tag === 3)
            Gd(e, e, n);
        else
            for (; t !== null; ) {
                if (t.tag === 3) {
                    Gd(t, e, n);
                    break
                } else if (t.tag === 1) {
                    var o = t.stateNode;
                    if (typeof t.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (un === null || !un.has(o))) {
                        e = sr(n, e),
                        e = yd(t, e, 1),
                        t = an(t, e, 1),
                        e = He(),
                        t !== null && (Er(t, 1, e),
                        nt(t, e));
                        break
                    }
                }
                t = t.return
            }
    }
    function Gy(e, t, n) {
        var o = e.pingCache;
        o !== null && o.delete(t),
        t = He(),
        e.pingedLanes |= e.suspendedLanes & n,
        Ce === e && (We & n) === n && (Ve === 4 || Ve === 3 && (We & 130023424) === We && 500 > Ae() - Ca ? Mn(e, 0) : Pa |= n),
        nt(e, t)
    }
    function Xd(e, t) {
        t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = ks,
        ks <<= 1,
        (ks & 130023424) === 0 && (ks = 4194304)));
        var n = He();
        e = Yt(e, t),
        e !== null && (Er(e, t, n),
        nt(e, n))
    }
    function Xy(e) {
        var t = e.memoizedState
          , n = 0;
        t !== null && (n = t.retryLane),
        Xd(e, n)
    }
    function qy(e, t) {
        var n = 0;
        switch (e.tag) {
        case 13:
            var o = e.stateNode
              , l = e.memoizedState;
            l !== null && (n = l.retryLane);
            break;
        case 19:
            o = e.stateNode;
            break;
        default:
            throw Error(i(314))
        }
        o !== null && o.delete(t),
        Xd(e, n)
    }
    var qd;
    qd = function(e, t, n) {
        if (e !== null)
            if (e.memoizedProps !== t.pendingProps || Xe.current)
                et = !0;
            else {
                if ((e.lanes & n) === 0 && (t.flags & 128) === 0)
                    return et = !1,
                    Qy(e, t, n);
                et = (e.flags & 131072) !== 0
            }
        else
            et = !1,
            Le && (t.flags & 1048576) !== 0 && bc(t, qs, t.index);
        switch (t.lanes = 0,
        t.tag) {
        case 2:
            var o = t.type;
            pi(e, t),
            e = t.pendingProps;
            var l = Kn(t, Qe.current);
            nr(t, n),
            l = fa(null, t, o, e, l, n);
            var u = ha();
            return t.flags |= 1,
            typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1,
            t.memoizedState = null,
            t.updateQueue = null,
            qe(o) ? (u = !0,
            Ks(t)) : u = !1,
            t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null,
            ia(t),
            l.updater = fi,
            t.stateNode = l,
            l._reactInternals = t,
            xa(t, o, e, n),
            t = ja(null, t, o, !0, u, n)) : (t.tag = 0,
            Le && u && Ho(t),
            $e(null, t, l, n),
            t = t.child),
            t;
        case 16:
            o = t.elementType;
            e: {
                switch (pi(e, t),
                e = t.pendingProps,
                l = o._init,
                o = l(o._payload),
                t.type = o,
                l = t.tag = t0(o),
                e = Tt(o, e),
                l) {
                case 0:
                    t = Ra(null, t, o, e, n);
                    break e;
                case 1:
                    t = Td(null, t, o, e, n);
                    break e;
                case 11:
                    t = wd(null, t, o, e, n);
                    break e;
                case 14:
                    t = Ld(null, t, o, Tt(o.type, e), n);
                    break e
                }
                throw Error(i(306, o, ""))
            }
            return t;
        case 0:
            return o = t.type,
            l = t.pendingProps,
            l = t.elementType === o ? l : Tt(o, l),
            Ra(e, t, o, l, n);
        case 1:
            return o = t.type,
            l = t.pendingProps,
            l = t.elementType === o ? l : Tt(o, l),
            Td(e, t, o, l, n);
        case 3:
            e: {
                if (Ed(t),
                e === null)
                    throw Error(i(387));
                o = t.pendingProps,
                u = t.memoizedState,
                l = u.element,
                Yc(e, t),
                ii(t, o, null, n);
                var h = t.memoizedState;
                if (o = h.element,
                u.isDehydrated)
                    if (u = {
                        element: o,
                        isDehydrated: !1,
                        cache: h.cache,
                        pendingSuspenseBoundaries: h.pendingSuspenseBoundaries,
                        transitions: h.transitions
                    },
                    t.updateQueue.baseState = u,
                    t.memoizedState = u,
                    t.flags & 256) {
                        l = sr(Error(i(423)), t),
                        t = Sd(e, t, o, n, l);
                        break e
                    } else if (o !== l) {
                        l = sr(Error(i(424)), t),
                        t = Sd(e, t, o, n, l);
                        break e
                    } else
                        for (lt = tn(t.stateNode.containerInfo.firstChild),
                        at = t,
                        Le = !0,
                        zt = null,
                        n = _c(t, null, o, n),
                        t.child = n; n; )
                            n.flags = n.flags & -3 | 4096,
                            n = n.sibling;
                else {
                    if (qn(),
                    o === l) {
                        t = It(e, t, n);
                        break e
                    }
                    $e(e, t, o, n)
                }
                t = t.child
            }
            return t;
        case 5:
            return Fc(t),
            e === null && Xo(t),
            o = t.type,
            l = t.pendingProps,
            u = e !== null ? e.memoizedProps : null,
            h = l.children,
            Io(o, l) ? h = null : u !== null && Io(o, u) && (t.flags |= 32),
            zd(e, t),
            $e(e, t, h, n),
            t.child;
        case 6:
            return e === null && Xo(t),
            null;
        case 13:
            return Ad(e, t, n);
        case 4:
            return oa(t, t.stateNode.containerInfo),
            o = t.pendingProps,
            e === null ? t.child = er(t, null, o, n) : $e(e, t, o, n),
            t.child;
        case 11:
            return o = t.type,
            l = t.pendingProps,
            l = t.elementType === o ? l : Tt(o, l),
            wd(e, t, o, l, n);
        case 7:
            return $e(e, t, t.pendingProps, n),
            t.child;
        case 8:
            return $e(e, t, t.pendingProps.children, n),
            t.child;
        case 12:
            return $e(e, t, t.pendingProps.children, n),
            t.child;
        case 10:
            e: {
                if (o = t.type._context,
                l = t.pendingProps,
                u = t.memoizedProps,
                h = l.value,
                me(ni, o._currentValue),
                o._currentValue = h,
                u !== null)
                    if (jt(u.value, h)) {
                        if (u.children === l.children && !Xe.current) {
                            t = It(e, t, n);
                            break e
                        }
                    } else
                        for (u = t.child,
                        u !== null && (u.return = t); u !== null; ) {
                            var x = u.dependencies;
                            if (x !== null) {
                                h = u.child;
                                for (var L = x.firstContext; L !== null; ) {
                                    if (L.context === o) {
                                        if (u.tag === 1) {
                                            L = Ot(-1, n & -n),
                                            L.tag = 2;
                                            var S = u.updateQueue;
                                            if (S !== null) {
                                                S = S.shared;
                                                var b = S.pending;
                                                b === null ? L.next = L : (L.next = b.next,
                                                b.next = L),
                                                S.pending = L
                                            }
                                        }
                                        u.lanes |= n,
                                        L = u.alternate,
                                        L !== null && (L.lanes |= n),
                                        ra(u.return, n, t),
                                        x.lanes |= n;
                                        break
                                    }
                                    L = L.next
                                }
                            } else if (u.tag === 10)
                                h = u.type === t.type ? null : u.child;
                            else if (u.tag === 18) {
                                if (h = u.return,
                                h === null)
                                    throw Error(i(341));
                                h.lanes |= n,
                                x = h.alternate,
                                x !== null && (x.lanes |= n),
                                ra(h, n, t),
                                h = u.sibling
                            } else
                                h = u.child;
                            if (h !== null)
                                h.return = u;
                            else
                                for (h = u; h !== null; ) {
                                    if (h === t) {
                                        h = null;
                                        break
                                    }
                                    if (u = h.sibling,
                                    u !== null) {
                                        u.return = h.return,
                                        h = u;
                                        break
                                    }
                                    h = h.return
                                }
                            u = h
                        }
                $e(e, t, l.children, n),
                t = t.child
            }
            return t;
        case 9:
            return l = t.type,
            o = t.pendingProps.children,
            nr(t, n),
            l = mt(l),
            o = o(l),
            t.flags |= 1,
            $e(e, t, o, n),
            t.child;
        case 14:
            return o = t.type,
            l = Tt(o, t.pendingProps),
            l = Tt(o.type, l),
            Ld(e, t, o, l, n);
        case 15:
            return Rd(e, t, t.type, t.pendingProps, n);
        case 17:
            return o = t.type,
            l = t.pendingProps,
            l = t.elementType === o ? l : Tt(o, l),
            pi(e, t),
            t.tag = 1,
            qe(o) ? (e = !0,
            Ks(t)) : e = !1,
            nr(t, n),
            hd(t, o, l),
            xa(t, o, l, n),
            ja(null, t, o, !0, e, n);
        case 19:
            return Nd(e, t, n);
        case 22:
            return jd(e, t, n)
        }
        throw Error(i(156, t.tag))
    }
    ;
    function ef(e, t) {
        return Vu(e, t)
    }
    function e0(e, t, n, o) {
        this.tag = e,
        this.key = n,
        this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
        this.index = 0,
        this.ref = null,
        this.pendingProps = t,
        this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
        this.mode = o,
        this.subtreeFlags = this.flags = 0,
        this.deletions = null,
        this.childLanes = this.lanes = 0,
        this.alternate = null
    }
    function vt(e, t, n, o) {
        return new e0(e,t,n,o)
    }
    function Ia(e) {
        return e = e.prototype,
        !(!e || !e.isReactComponent)
    }
    function t0(e) {
        if (typeof e == "function")
            return Ia(e) ? 1 : 0;
        if (e != null) {
            if (e = e.$$typeof,
            e === st)
                return 11;
            if (e === Lt)
                return 14
        }
        return 2
    }
    function hn(e, t) {
        var n = e.alternate;
        return n === null ? (n = vt(e.tag, t, e.key, e.mode),
        n.elementType = e.elementType,
        n.type = e.type,
        n.stateNode = e.stateNode,
        n.alternate = e,
        e.alternate = n) : (n.pendingProps = t,
        n.type = e.type,
        n.flags = 0,
        n.subtreeFlags = 0,
        n.deletions = null),
        n.flags = e.flags & 14680064,
        n.childLanes = e.childLanes,
        n.lanes = e.lanes,
        n.child = e.child,
        n.memoizedProps = e.memoizedProps,
        n.memoizedState = e.memoizedState,
        n.updateQueue = e.updateQueue,
        t = e.dependencies,
        n.dependencies = t === null ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        },
        n.sibling = e.sibling,
        n.index = e.index,
        n.ref = e.ref,
        n
    }
    function Ti(e, t, n, o, l, u) {
        var h = 2;
        if (o = e,
        typeof e == "function")
            Ia(e) && (h = 1);
        else if (typeof e == "string")
            h = 5;
        else
            e: switch (e) {
            case ae:
                return kn(n.children, l, u, t);
            case K:
                h = 8,
                l |= 8;
                break;
            case ye:
                return e = vt(12, n, t, l | 2),
                e.elementType = ye,
                e.lanes = u,
                e;
            case Je:
                return e = vt(13, n, t, l),
                e.elementType = Je,
                e.lanes = u,
                e;
            case Ge:
                return e = vt(19, n, t, l),
                e.elementType = Ge,
                e.lanes = u,
                e;
            case se:
                return Ei(n, l, u, t);
            default:
                if (typeof e == "object" && e !== null)
                    switch (e.$$typeof) {
                    case Te:
                        h = 10;
                        break e;
                    case Ke:
                        h = 9;
                        break e;
                    case st:
                        h = 11;
                        break e;
                    case Lt:
                        h = 14;
                        break e;
                    case Ue:
                        h = 16,
                        o = null;
                        break e
                    }
                throw Error(i(130, e == null ? e : typeof e, ""))
            }
        return t = vt(h, n, t, l),
        t.elementType = e,
        t.type = o,
        t.lanes = u,
        t
    }
    function kn(e, t, n, o) {
        return e = vt(7, e, o, t),
        e.lanes = n,
        e
    }
    function Ei(e, t, n, o) {
        return e = vt(22, e, o, t),
        e.elementType = se,
        e.lanes = n,
        e.stateNode = {
            isHidden: !1
        },
        e
    }
    function Fa(e, t, n) {
        return e = vt(6, e, null, t),
        e.lanes = n,
        e
    }
    function Za(e, t, n) {
        return t = vt(4, e.children !== null ? e.children : [], e.key, t),
        t.lanes = n,
        t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation
        },
        t
    }
    function n0(e, t, n, o, l) {
        this.tag = t,
        this.containerInfo = e,
        this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
        this.timeoutHandle = -1,
        this.callbackNode = this.pendingContext = this.context = null,
        this.callbackPriority = 0,
        this.eventTimes = vo(0),
        this.expirationTimes = vo(-1),
        this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
        this.entanglements = vo(0),
        this.identifierPrefix = o,
        this.onRecoverableError = l,
        this.mutableSourceEagerHydrationData = null
    }
    function Ja(e, t, n, o, l, u, h, x, L) {
        return e = new n0(e,t,n,x,L),
        t === 1 ? (t = 1,
        u === !0 && (t |= 8)) : t = 0,
        u = vt(3, null, null, t),
        e.current = u,
        u.stateNode = e,
        u.memoizedState = {
            element: o,
            isDehydrated: n,
            cache: null,
            transitions: null,
            pendingSuspenseBoundaries: null
        },
        ia(u),
        e
    }
    function r0(e, t, n) {
        var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: ee,
            key: o == null ? null : "" + o,
            children: e,
            containerInfo: t,
            implementation: n
        }
    }
    function tf(e) {
        if (!e)
            return rn;
        e = e._reactInternals;
        e: {
            if (xn(e) !== e || e.tag !== 1)
                throw Error(i(170));
            var t = e;
            do {
                switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (qe(t.type)) {
                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e
                    }
                }
                t = t.return
            } while (t !== null);
            throw Error(i(171))
        }
        if (e.tag === 1) {
            var n = e.type;
            if (qe(n))
                return Mc(e, n, t)
        }
        return t
    }
    function nf(e, t, n, o, l, u, h, x, L) {
        return e = Ja(n, o, !0, e, l, u, h, x, L),
        e.context = tf(null),
        n = e.current,
        o = He(),
        l = dn(n),
        u = Ot(o, l),
        u.callback = t ?? null,
        an(n, u, l),
        e.current.lanes = l,
        Er(e, l, o),
        nt(e, o),
        e
    }
    function Si(e, t, n, o) {
        var l = t.current
          , u = He()
          , h = dn(l);
        return n = tf(n),
        t.context === null ? t.context = n : t.pendingContext = n,
        t = Ot(u, h),
        t.payload = {
            element: e
        },
        o = o === void 0 ? null : o,
        o !== null && (t.callback = o),
        e = an(l, t, h),
        e !== null && (At(e, l, h, u),
        si(e, l, h)),
        h
    }
    function Ai(e) {
        return e = e.current,
        e.child ? (e.child.tag === 5,
        e.child.stateNode) : null
    }
    function rf(e, t) {
        if (e = e.memoizedState,
        e !== null && e.dehydrated !== null) {
            var n = e.retryLane;
            e.retryLane = n !== 0 && n < t ? n : t
        }
    }
    function Ua(e, t) {
        rf(e, t),
        (e = e.alternate) && rf(e, t)
    }
    function s0() {
        return null
    }
    var sf = typeof reportError == "function" ? reportError : function(e) {
        console.error(e)
    }
    ;
    function $a(e) {
        this._internalRoot = e
    }
    Mi.prototype.render = $a.prototype.render = function(e) {
        var t = this._internalRoot;
        if (t === null)
            throw Error(i(409));
        Si(e, t, null, null)
    }
    ,
    Mi.prototype.unmount = $a.prototype.unmount = function() {
        var e = this._internalRoot;
        if (e !== null) {
            this._internalRoot = null;
            var t = e.containerInfo;
            An(function() {
                Si(null, e, null, null)
            }),
            t[Dt] = null
        }
    }
    ;
    function Mi(e) {
        this._internalRoot = e
    }
    Mi.prototype.unstable_scheduleHydration = function(e) {
        if (e) {
            var t = Yu();
            e = {
                blockedOn: null,
                target: e,
                priority: t
            };
            for (var n = 0; n < Xt.length && t !== 0 && t < Xt[n].priority; n++)
                ;
            Xt.splice(n, 0, e),
            n === 0 && Fu(e)
        }
    }
    ;
    function Ha(e) {
        return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
    }
    function Ni(e) {
        return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    }
    function of() {}
    function i0(e, t, n, o, l) {
        if (l) {
            if (typeof o == "function") {
                var u = o;
                o = function() {
                    var S = Ai(h);
                    u.call(S)
                }
            }
            var h = nf(t, o, e, 0, null, !1, !1, "", of);
            return e._reactRootContainer = h,
            e[Dt] = h.current,
            Qr(e.nodeType === 8 ? e.parentNode : e),
            An(),
            h
        }
        for (; l = e.lastChild; )
            e.removeChild(l);
        if (typeof o == "function") {
            var x = o;
            o = function() {
                var S = Ai(L);
                x.call(S)
            }
        }
        var L = Ja(e, 0, !1, null, null, !1, !1, "", of);
        return e._reactRootContainer = L,
        e[Dt] = L.current,
        Qr(e.nodeType === 8 ? e.parentNode : e),
        An(function() {
            Si(t, L, n, o)
        }),
        L
    }
    function ki(e, t, n, o, l) {
        var u = n._reactRootContainer;
        if (u) {
            var h = u;
            if (typeof l == "function") {
                var x = l;
                l = function() {
                    var L = Ai(h);
                    x.call(L)
                }
            }
            Si(t, h, e, l)
        } else
            h = i0(n, t, e, l, o);
        return Ai(h)
    }
    _u = function(e) {
        switch (e.tag) {
        case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
                var n = Tr(t.pendingLanes);
                n !== 0 && (xo(t, n | 1),
                nt(t, Ae()),
                (le & 6) === 0 && (ar = Ae() + 500,
                sn()))
            }
            break;
        case 13:
            An(function() {
                var o = Yt(e, 1);
                if (o !== null) {
                    var l = He();
                    At(o, e, 1, l)
                }
            }),
            Ua(e, 1)
        }
    }
    ,
    wo = function(e) {
        if (e.tag === 13) {
            var t = Yt(e, 134217728);
            if (t !== null) {
                var n = He();
                At(t, e, 134217728, n)
            }
            Ua(e, 134217728)
        }
    }
    ,
    Qu = function(e) {
        if (e.tag === 13) {
            var t = dn(e)
              , n = Yt(e, t);
            if (n !== null) {
                var o = He();
                At(n, e, t, o)
            }
            Ua(e, t)
        }
    }
    ,
    Yu = function() {
        return he
    }
    ,
    Ou = function(e, t) {
        var n = he;
        try {
            return he = e,
            t()
        } finally {
            he = n
        }
    }
    ,
    fo = function(e, t, n) {
        switch (t) {
        case "input":
            if (ro(e, n),
            t = n.name,
            n.type === "radio" && t != null) {
                for (n = e; n.parentNode; )
                    n = n.parentNode;
                for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
                t = 0; t < n.length; t++) {
                    var o = n[t];
                    if (o !== e && o.form === e.form) {
                        var l = $s(o);
                        if (!l)
                            throw Error(i(90));
                        fu(o),
                        ro(o, l)
                    }
                }
            }
            break;
        case "textarea":
            gu(e, n);
            break;
        case "select":
            t = n.value,
            t != null && Wn(e, !!n.multiple, t, !1)
        }
    }
    ,
    Eu = Qa,
    Su = An;
    var o0 = {
        usingClientEntryPoint: !1,
        Events: [Ir, $n, $s, zu, Tu, Qa]
    }
      , rs = {
        findFiberByHostInstance: wn,
        bundleType: 0,
        version: "18.3.1",
        rendererPackageName: "react-dom"
    }
      , a0 = {
        bundleType: rs.bundleType,
        version: rs.version,
        rendererPackageName: rs.rendererPackageName,
        rendererConfig: rs.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: H.ReactCurrentDispatcher,
        findHostInstanceByFiber: function(e) {
            return e = ku(e),
            e === null ? null : e.stateNode
        },
        findFiberByHostInstance: rs.findFiberByHostInstance || s0,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var bi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!bi.isDisabled && bi.supportsFiber)
            try {
                Ms = bi.inject(a0),
                Nt = bi
            } catch {}
    }
    return rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = o0,
    rt.createPortal = function(e, t) {
        var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!Ha(t))
            throw Error(i(200));
        return r0(e, t, null, n)
    }
    ,
    rt.createRoot = function(e, t) {
        if (!Ha(e))
            throw Error(i(299));
        var n = !1
          , o = ""
          , l = sf;
        return t != null && (t.unstable_strictMode === !0 && (n = !0),
        t.identifierPrefix !== void 0 && (o = t.identifierPrefix),
        t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
        t = Ja(e, 1, !1, null, null, n, !1, o, l),
        e[Dt] = t.current,
        Qr(e.nodeType === 8 ? e.parentNode : e),
        new $a(t)
    }
    ,
    rt.findDOMNode = function(e) {
        if (e == null)
            return null;
        if (e.nodeType === 1)
            return e;
        var t = e._reactInternals;
        if (t === void 0)
            throw typeof e.render == "function" ? Error(i(188)) : (e = Object.keys(e).join(","),
            Error(i(268, e)));
        return e = ku(t),
        e = e === null ? null : e.stateNode,
        e
    }
    ,
    rt.flushSync = function(e) {
        return An(e)
    }
    ,
    rt.hydrate = function(e, t, n) {
        if (!Ni(t))
            throw Error(i(200));
        return ki(null, e, t, !0, n)
    }
    ,
    rt.hydrateRoot = function(e, t, n) {
        if (!Ha(e))
            throw Error(i(405));
        var o = n != null && n.hydratedSources || null
          , l = !1
          , u = ""
          , h = sf;
        if (n != null && (n.unstable_strictMode === !0 && (l = !0),
        n.identifierPrefix !== void 0 && (u = n.identifierPrefix),
        n.onRecoverableError !== void 0 && (h = n.onRecoverableError)),
        t = nf(t, null, e, 1, n ?? null, l, !1, u, h),
        e[Dt] = t.current,
        Qr(e),
        o)
            for (e = 0; e < o.length; e++)
                n = o[e],
                l = n._getVersion,
                l = l(n._source),
                t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(n, l);
        return new Mi(t)
    }
    ,
    rt.render = function(e, t, n) {
        if (!Ni(t))
            throw Error(i(200));
        return ki(null, e, t, !1, n)
    }
    ,
    rt.unmountComponentAtNode = function(e) {
        if (!Ni(e))
            throw Error(i(40));
        return e._reactRootContainer ? (An(function() {
            ki(null, null, e, !1, function() {
                e._reactRootContainer = null,
                e[Dt] = null
            })
        }),
        !0) : !1
    }
    ,
    rt.unstable_batchedUpdates = Qa,
    rt.unstable_renderSubtreeIntoContainer = function(e, t, n, o) {
        if (!Ni(n))
            throw Error(i(200));
        if (e == null || e._reactInternals === void 0)
            throw Error(i(38));
        return ki(e, t, n, !1, o)
    }
    ,
    rt.version = "18.3.1-next-f1338f8080-20240426",
    rt
}
var pf;
function m0() {
    if (pf)
        return Xa.exports;
    pf = 1;
    function r() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)
            } catch (s) {
                console.error(s)
            }
    }
    return r(),
    Xa.exports = p0(),
    Xa.exports
}
var mf;
function y0() {
    if (mf)
        return Vi;
    mf = 1;
    var r = m0();
    return Vi.createRoot = r.createRoot,
    Vi.hydrateRoot = r.hydrateRoot,
    Vi
}
var g0 = y0();
const v0 = r => r.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()
  , x0 = r => r.replace(/^([A-Z])|[\s-_]+(\w)/g, (s, i, a) => a ? a.toUpperCase() : i.toLowerCase())
  , yf = r => {
    const s = x0(r);
    return s.charAt(0).toUpperCase() + s.slice(1)
}
  , Dh = (...r) => r.filter( (s, i, a) => !!s && s.trim() !== "" && a.indexOf(s) === i).join(" ").trim()
  , w0 = r => {
    for (const s in r)
        if (s.startsWith("aria-") || s === "role" || s === "title")
            return !0
}
;
var L0 = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
const R0 = I.forwardRef( ({color: r="currentColor", size: s=24, strokeWidth: i=2, absoluteStrokeWidth: a, className: c="", children: f, iconNode: d, ...p}, m) => I.createElement("svg", {
    ref: m,
    ...L0,
    width: s,
    height: s,
    stroke: r,
    strokeWidth: a ? Number(i) * 24 / Number(s) : i,
    className: Dh("lucide", c),
    ...!f && !w0(p) && {
        "aria-hidden": "true"
    },
    ...p
}, [...d.map( ([g,v]) => I.createElement(g, v)), ...Array.isArray(f) ? f : [f]]));
const ft = (r, s) => {
    const i = I.forwardRef( ({className: a, ...c}, f) => I.createElement(R0, {
        ref: f,
        iconNode: s,
        className: Dh(`lucide-${v0(yf(r))}`, `lucide-${r}`, a),
        ...c
    }));
    return i.displayName = yf(r),
    i
}
;
const j0 = [["path", {
    d: "m16 3 4 4-4 4",
    key: "1x1c3m"
}], ["path", {
    d: "M20 7H4",
    key: "zbl0bi"
}], ["path", {
    d: "m8 21-4-4 4-4",
    key: "h9nckh"
}], ["path", {
    d: "M4 17h16",
    key: "g4d7ey"
}]]
  , z0 = ft("arrow-right-left", j0);
const T0 = [["path", {
    d: "M8 2v4",
    key: "1cmpym"
}], ["path", {
    d: "M16 2v4",
    key: "4m81vk"
}], ["rect", {
    width: "18",
    height: "18",
    x: "3",
    y: "4",
    rx: "2",
    key: "1hopcy"
}], ["path", {
    d: "M3 10h18",
    key: "8toen8"
}]]
  , gf = ft("calendar", T0);
const E0 = [["path", {
    d: "M3 3v16a2 2 0 0 0 2 2h16",
    key: "c24i48"
}], ["path", {
    d: "M18 17V9",
    key: "2bz60n"
}], ["path", {
    d: "M13 17V5",
    key: "1frdt8"
}], ["path", {
    d: "M8 17v-3",
    key: "17ska0"
}]]
  , vf = ft("chart-column", E0);
const S0 = [["path", {
    d: "M20 6 9 17l-5-5",
    key: "1gmf2c"
}]]
  , Zt = ft("check", S0);
const A0 = [["path", {
    d: "m9 18 6-6-6-6",
    key: "mthhwq"
}]]
  , xf = ft("chevron-right", A0);
const M0 = [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["path", {
    d: "m9 12 2 2 4-4",
    key: "dzmm74"
}]]
  , Pi = ft("circle-check", M0);
const N0 = [["rect", {
    width: "18",
    height: "11",
    x: "3",
    y: "11",
    rx: "2",
    ry: "2",
    key: "1w4ew1"
}], ["path", {
    d: "M7 11V7a5 5 0 0 1 10 0v4",
    key: "fwvmzm"
}]]
  , k0 = ft("lock", N0);
const b0 = [["path", {
    d: "M4 12h16",
    key: "1lakjw"
}], ["path", {
    d: "M4 18h16",
    key: "19g7jn"
}], ["path", {
    d: "M4 6h16",
    key: "1o0s65"
}]]
  , V0 = ft("menu", b0);
const P0 = [["path", {
    d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
    key: "oel41y"
}], ["path", {
    d: "m9 12 2 2 4-4",
    key: "dzmm74"
}]]
  , tl = ft("shield-check", P0);
const C0 = [["path", {
    d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
    key: "r04s7s"
}]]
  , B0 = ft("star", C0);
const D0 = [["path", {
    d: "M16 7h6v6",
    key: "box55l"
}], ["path", {
    d: "m22 7-8.5 8.5-5-5L2 17",
    key: "1t1m79"
}]]
  , W0 = ft("trending-up", D0);
const _0 = [["path", {
    d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
    key: "1yyitq"
}], ["path", {
    d: "M16 3.128a4 4 0 0 1 0 7.744",
    key: "16gr8j"
}], ["path", {
    d: "M22 21v-2a4 4 0 0 0-3-3.87",
    key: "kshegd"
}], ["circle", {
    cx: "9",
    cy: "7",
    r: "4",
    key: "nufk8"
}]]
  , wf = ft("users", _0);
const Q0 = [["path", {
    d: "M18 6 6 18",
    key: "1bl5f8"
}], ["path", {
    d: "m6 6 12 12",
    key: "d8bk6v"
}]]
  , is = ft("x", Q0)
  , bl = I.createContext({});
function Vl(r) {
    const s = I.useRef(null);
    return s.current === null && (s.current = r()),
    s.current
}
const Ki = I.createContext(null)
  , Pl = I.createContext({
    transformPagePoint: r => r,
    isStatic: !1,
    reducedMotion: "never"
});
class Y0 extends I.Component {
    getSnapshotBeforeUpdate(s) {
        const i = this.props.childRef.current;
        if (i && s.isPresent && !this.props.isPresent) {
            const a = this.props.sizeRef.current;
            a.height = i.offsetHeight || 0,
            a.width = i.offsetWidth || 0,
            a.top = i.offsetTop,
            a.left = i.offsetLeft
        }
        return null
    }
    componentDidUpdate() {}
    render() {
        return this.props.children
    }
}
function O0({children: r, isPresent: s}) {
    const i = I.useId()
      , a = I.useRef(null)
      , c = I.useRef({
        width: 0,
        height: 0,
        top: 0,
        left: 0
    })
      , {nonce: f} = I.useContext(Pl);
    return I.useInsertionEffect( () => {
        const {width: d, height: p, top: m, left: g} = c.current;
        if (s || !a.current || !d || !p)
            return;
        a.current.dataset.motionPopId = i;
        const v = document.createElement("style");
        return f && (v.nonce = f),
        document.head.appendChild(v),
        v.sheet && v.sheet.insertRule(`
          [data-motion-pop-id="${i}"] {
            position: absolute !important;
            width: ${d}px !important;
            height: ${p}px !important;
            top: ${m}px !important;
            left: ${g}px !important;
          }
        `),
        () => {
            document.head.removeChild(v)
        }
    }
    , [s]),
    y.jsx(Y0, {
        isPresent: s,
        childRef: a,
        sizeRef: c,
        children: I.cloneElement(r, {
            ref: a
        })
    })
}
const I0 = ({children: r, initial: s, isPresent: i, onExitComplete: a, custom: c, presenceAffectsLayout: f, mode: d}) => {
    const p = Vl(F0)
      , m = I.useId()
      , g = I.useCallback(w => {
        p.set(w, !0);
        for (const j of p.values())
            if (!j)
                return;
        a && a()
    }
    , [p, a])
      , v = I.useMemo( () => ({
        id: m,
        initial: s,
        isPresent: i,
        custom: c,
        onExitComplete: g,
        register: w => (p.set(w, !1),
        () => p.delete(w))
    }), f ? [Math.random(), g] : [i, g]);
    return I.useMemo( () => {
        p.forEach( (w, j) => p.set(j, !1))
    }
    , [i]),
    I.useEffect( () => {
        !i && !p.size && a && a()
    }
    , [i]),
    d === "popLayout" && (r = y.jsx(O0, {
        isPresent: i,
        children: r
    })),
    y.jsx(Ki.Provider, {
        value: v,
        children: r
    })
}
;
function F0() {
    return new Map
}
function Wh(r=!0) {
    const s = I.useContext(Ki);
    if (s === null)
        return [!0, null];
    const {isPresent: i, onExitComplete: a, register: c} = s
      , f = I.useId();
    I.useEffect( () => {
        r && c(f)
    }
    , [r]);
    const d = I.useCallback( () => r && a && a(f), [f, a, r]);
    return !i && a ? [!1, d] : [!0]
}
const Ci = r => r.key || "";
function Lf(r) {
    const s = [];
    return I.Children.forEach(r, i => {
        I.isValidElement(i) && s.push(i)
    }
    ),
    s
}
const Cl = typeof window < "u"
  , _h = Cl ? I.useLayoutEffect : I.useEffect
  , Rf = ({children: r, custom: s, initial: i=!0, onExitComplete: a, presenceAffectsLayout: c=!0, mode: f="sync", propagate: d=!1}) => {
    const [p,m] = Wh(d)
      , g = I.useMemo( () => Lf(r), [r])
      , v = d && !p ? [] : g.map(Ci)
      , w = I.useRef(!0)
      , j = I.useRef(g)
      , A = Vl( () => new Map)
      , [C,M] = I.useState(g)
      , [V,D] = I.useState(g);
    _h( () => {
        w.current = !1,
        j.current = g;
        for (let H = 0; H < V.length; H++) {
            const _ = Ci(V[H]);
            v.includes(_) ? A.delete(_) : A.get(_) !== !0 && A.set(_, !1)
        }
    }
    , [V, v.length, v.join("-")]);
    const Y = [];
    if (g !== C) {
        let H = [...g];
        for (let _ = 0; _ < V.length; _++) {
            const ee = V[_]
              , ae = Ci(ee);
            v.includes(ae) || (H.splice(_, 0, ee),
            Y.push(ee))
        }
        f === "wait" && Y.length && (H = Y),
        D(Lf(H)),
        M(g);
        return
    }
    const {forceRender: Z} = I.useContext(bl);
    return y.jsx(y.Fragment, {
        children: V.map(H => {
            const _ = Ci(H)
              , ee = d && !p ? !1 : g === V || v.includes(_)
              , ae = () => {
                if (A.has(_))
                    A.set(_, !0);
                else
                    return;
                let K = !0;
                A.forEach(ye => {
                    ye || (K = !1)
                }
                ),
                K && (Z?.(),
                D(j.current),
                d && m?.(),
                a && a())
            }
            ;
            return y.jsx(I0, {
                isPresent: ee,
                initial: !w.current || i ? void 0 : !1,
                custom: ee ? void 0 : s,
                presenceAffectsLayout: c,
                mode: f,
                onExitComplete: ee ? void 0 : ae,
                children: H
            }, _)
        }
        )
    })
}
  , ct = r => r;
let Qh = ct;
function Bl(r) {
    let s;
    return () => (s === void 0 && (s = r()),
    s)
}
const pr = (r, s, i) => {
    const a = s - r;
    return a === 0 ? 1 : (i - r) / a
}
  , Jt = r => r * 1e3
  , Ut = r => r / 1e3
  , Z0 = {
    useManualTiming: !1
};
function J0(r) {
    let s = new Set
      , i = new Set
      , a = !1
      , c = !1;
    const f = new WeakSet;
    let d = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    };
    function p(g) {
        f.has(g) && (m.schedule(g),
        r()),
        g(d)
    }
    const m = {
        schedule: (g, v=!1, w=!1) => {
            const A = w && a ? s : i;
            return v && f.add(g),
            A.has(g) || A.add(g),
            g
        }
        ,
        cancel: g => {
            i.delete(g),
            f.delete(g)
        }
        ,
        process: g => {
            if (d = g,
            a) {
                c = !0;
                return
            }
            a = !0,
            [s,i] = [i, s],
            s.forEach(p),
            s.clear(),
            a = !1,
            c && (c = !1,
            m.process(g))
        }
    };
    return m
}
const Bi = ["read", "resolveKeyframes", "update", "preRender", "render", "postRender"]
  , U0 = 40;
function Yh(r, s) {
    let i = !1
      , a = !0;
    const c = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    }
      , f = () => i = !0
      , d = Bi.reduce( (D, Y) => (D[Y] = J0(f),
    D), {})
      , {read: p, resolveKeyframes: m, update: g, preRender: v, render: w, postRender: j} = d
      , A = () => {
        const D = performance.now();
        i = !1,
        c.delta = a ? 1e3 / 60 : Math.max(Math.min(D - c.timestamp, U0), 1),
        c.timestamp = D,
        c.isProcessing = !0,
        p.process(c),
        m.process(c),
        g.process(c),
        v.process(c),
        w.process(c),
        j.process(c),
        c.isProcessing = !1,
        i && s && (a = !1,
        r(A))
    }
      , C = () => {
        i = !0,
        a = !0,
        c.isProcessing || r(A)
    }
    ;
    return {
        schedule: Bi.reduce( (D, Y) => {
            const Z = d[Y];
            return D[Y] = (H, _=!1, ee=!1) => (i || C(),
            Z.schedule(H, _, ee)),
            D
        }
        , {}),
        cancel: D => {
            for (let Y = 0; Y < Bi.length; Y++)
                d[Bi[Y]].cancel(D)
        }
        ,
        state: c,
        steps: d
    }
}
const {schedule: xe, cancel: yn, state: _e, steps: nl} = Yh(typeof requestAnimationFrame < "u" ? requestAnimationFrame : ct, !0)
  , Oh = I.createContext({
    strict: !1
})
  , jf = {
    animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"]
}
  , mr = {};
for (const r in jf)
    mr[r] = {
        isEnabled: s => jf[r].some(i => !!s[i])
    };
function $0(r) {
    for (const s in r)
        mr[s] = {
            ...mr[s],
            ...r[s]
        }
}
const H0 = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);
function Ii(r) {
    return r.startsWith("while") || r.startsWith("drag") && r !== "draggable" || r.startsWith("layout") || r.startsWith("onTap") || r.startsWith("onPan") || r.startsWith("onLayout") || H0.has(r)
}
let Ih = r => !Ii(r);
function K0(r) {
    r && (Ih = s => s.startsWith("on") ? !Ii(s) : r(s))
}
try {
    K0(require("@emotion/is-prop-valid").default)
} catch {}
function G0(r, s, i) {
    const a = {};
    for (const c in r)
        c === "values" && typeof r.values == "object" || (Ih(c) || i === !0 && Ii(c) || !s && !Ii(c) || r.draggable && c.startsWith("onDrag")) && (a[c] = r[c]);
    return a
}
function X0(r) {
    if (typeof Proxy > "u")
        return r;
    const s = new Map
      , i = (...a) => r(...a);
    return new Proxy(i,{
        get: (a, c) => c === "create" ? r : (s.has(c) || s.set(c, r(c)),
        s.get(c))
    })
}
const Gi = I.createContext({});
function ps(r) {
    return typeof r == "string" || Array.isArray(r)
}
function Xi(r) {
    return r !== null && typeof r == "object" && typeof r.start == "function"
}
const Dl = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"]
  , Wl = ["initial", ...Dl];
function qi(r) {
    return Xi(r.animate) || Wl.some(s => ps(r[s]))
}
function Fh(r) {
    return !!(qi(r) || r.variants)
}
function q0(r, s) {
    if (qi(r)) {
        const {initial: i, animate: a} = r;
        return {
            initial: i === !1 || ps(i) ? i : void 0,
            animate: ps(a) ? a : void 0
        }
    }
    return r.inherit !== !1 ? s : {}
}
function eg(r) {
    const {initial: s, animate: i} = q0(r, I.useContext(Gi));
    return I.useMemo( () => ({
        initial: s,
        animate: i
    }), [zf(s), zf(i)])
}
function zf(r) {
    return Array.isArray(r) ? r.join(" ") : r
}
const tg = Symbol.for("motionComponentSymbol");
function ur(r) {
    return r && typeof r == "object" && Object.prototype.hasOwnProperty.call(r, "current")
}
function ng(r, s, i) {
    return I.useCallback(a => {
        a && r.onMount && r.onMount(a),
        s && (a ? s.mount(a) : s.unmount()),
        i && (typeof i == "function" ? i(a) : ur(i) && (i.current = a))
    }
    , [s])
}
const _l = r => r.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase()
  , rg = "framerAppearId"
  , Zh = "data-" + _l(rg)
  , {schedule: Ql} = Yh(queueMicrotask, !1)
  , Jh = I.createContext({});
function sg(r, s, i, a, c) {
    var f, d;
    const {visualElement: p} = I.useContext(Gi)
      , m = I.useContext(Oh)
      , g = I.useContext(Ki)
      , v = I.useContext(Pl).reducedMotion
      , w = I.useRef(null);
    a = a || m.renderer,
    !w.current && a && (w.current = a(r, {
        visualState: s,
        parent: p,
        props: i,
        presenceContext: g,
        blockInitialAnimation: g ? g.initial === !1 : !1,
        reducedMotionConfig: v
    }));
    const j = w.current
      , A = I.useContext(Jh);
    j && !j.projection && c && (j.type === "html" || j.type === "svg") && ig(w.current, i, c, A);
    const C = I.useRef(!1);
    I.useInsertionEffect( () => {
        j && C.current && j.update(i, g)
    }
    );
    const M = i[Zh]
      , V = I.useRef(!!M && !(!((f = window.MotionHandoffIsComplete) === null || f === void 0) && f.call(window, M)) && ((d = window.MotionHasOptimisedAnimation) === null || d === void 0 ? void 0 : d.call(window, M)));
    return _h( () => {
        j && (C.current = !0,
        window.MotionIsMounted = !0,
        j.updateFeatures(),
        Ql.render(j.render),
        V.current && j.animationState && j.animationState.animateChanges())
    }
    ),
    I.useEffect( () => {
        j && (!V.current && j.animationState && j.animationState.animateChanges(),
        V.current && (queueMicrotask( () => {
            var D;
            (D = window.MotionHandoffMarkAsComplete) === null || D === void 0 || D.call(window, M)
        }
        ),
        V.current = !1))
    }
    ),
    j
}
function ig(r, s, i, a) {
    const {layoutId: c, layout: f, drag: d, dragConstraints: p, layoutScroll: m, layoutRoot: g} = s;
    r.projection = new i(r.latestValues,s["data-framer-portal-id"] ? void 0 : Uh(r.parent)),
    r.projection.setOptions({
        layoutId: c,
        layout: f,
        alwaysMeasureLayout: !!d || p && ur(p),
        visualElement: r,
        animationType: typeof f == "string" ? f : "both",
        initialPromotionConfig: a,
        layoutScroll: m,
        layoutRoot: g
    })
}
function Uh(r) {
    if (r)
        return r.options.allowProjection !== !1 ? r.projection : Uh(r.parent)
}
function og({preloadedFeatures: r, createVisualElement: s, useRender: i, useVisualState: a, Component: c}) {
    var f, d;
    r && $0(r);
    function p(g, v) {
        let w;
        const j = {
            ...I.useContext(Pl),
            ...g,
            layoutId: ag(g)
        }
          , {isStatic: A} = j
          , C = eg(g)
          , M = a(g, A);
        if (!A && Cl) {
            lg();
            const V = ug(j);
            w = V.MeasureLayout,
            C.visualElement = sg(c, M, j, s, V.ProjectionNode)
        }
        return y.jsxs(Gi.Provider, {
            value: C,
            children: [w && C.visualElement ? y.jsx(w, {
                visualElement: C.visualElement,
                ...j
            }) : null, i(c, g, ng(M, C.visualElement, v), M, A, C.visualElement)]
        })
    }
    p.displayName = `motion.${typeof c == "string" ? c : `create(${(d = (f = c.displayName) !== null && f !== void 0 ? f : c.name) !== null && d !== void 0 ? d : ""})`}`;
    const m = I.forwardRef(p);
    return m[tg] = c,
    m
}
function ag({layoutId: r}) {
    const s = I.useContext(bl).id;
    return s && r !== void 0 ? s + "-" + r : r
}
function lg(r, s) {
    I.useContext(Oh).strict
}
function ug(r) {
    const {drag: s, layout: i} = mr;
    if (!s && !i)
        return {};
    const a = {
        ...s,
        ...i
    };
    return {
        MeasureLayout: s?.isEnabled(r) || i?.isEnabled(r) ? a.MeasureLayout : void 0,
        ProjectionNode: a.ProjectionNode
    }
}
const cg = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];
function Yl(r) {
    return typeof r != "string" || r.includes("-") ? !1 : !!(cg.indexOf(r) > -1 || /[A-Z]/u.test(r))
}
function Tf(r) {
    const s = [{}, {}];
    return r?.values.forEach( (i, a) => {
        s[0][a] = i.get(),
        s[1][a] = i.getVelocity()
    }
    ),
    s
}
function Ol(r, s, i, a) {
    if (typeof s == "function") {
        const [c,f] = Tf(a);
        s = s(i !== void 0 ? i : r.custom, c, f)
    }
    if (typeof s == "string" && (s = r.variants && r.variants[s]),
    typeof s == "function") {
        const [c,f] = Tf(a);
        s = s(i !== void 0 ? i : r.custom, c, f)
    }
    return s
}
const ml = r => Array.isArray(r)
  , dg = r => !!(r && typeof r == "object" && r.mix && r.toValue)
  , fg = r => ml(r) ? r[r.length - 1] || 0 : r
  , Ze = r => !!(r && r.getVelocity);
function Qi(r) {
    const s = Ze(r) ? r.get() : r;
    return dg(s) ? s.toValue() : s
}
function hg({scrapeMotionValuesFromProps: r, createRenderState: s, onUpdate: i}, a, c, f) {
    const d = {
        latestValues: pg(a, c, f, r),
        renderState: s()
    };
    return i && (d.onMount = p => i({
        props: a,
        current: p,
        ...d
    }),
    d.onUpdate = p => i(p)),
    d
}
const $h = r => (s, i) => {
    const a = I.useContext(Gi)
      , c = I.useContext(Ki)
      , f = () => hg(r, s, a, c);
    return i ? f() : Vl(f)
}
;
function pg(r, s, i, a) {
    const c = {}
      , f = a(r, {});
    for (const j in f)
        c[j] = Qi(f[j]);
    let {initial: d, animate: p} = r;
    const m = qi(r)
      , g = Fh(r);
    s && g && !m && r.inherit !== !1 && (d === void 0 && (d = s.initial),
    p === void 0 && (p = s.animate));
    let v = i ? i.initial === !1 : !1;
    v = v || d === !1;
    const w = v ? p : d;
    if (w && typeof w != "boolean" && !Xi(w)) {
        const j = Array.isArray(w) ? w : [w];
        for (let A = 0; A < j.length; A++) {
            const C = Ol(r, j[A]);
            if (C) {
                const {transitionEnd: M, transition: V, ...D} = C;
                for (const Y in D) {
                    let Z = D[Y];
                    if (Array.isArray(Z)) {
                        const H = v ? Z.length - 1 : 0;
                        Z = Z[H]
                    }
                    Z !== null && (c[Y] = Z)
                }
                for (const Y in M)
                    c[Y] = M[Y]
            }
        }
    }
    return c
}
const gr = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"]
  , Dn = new Set(gr)
  , Hh = r => s => typeof s == "string" && s.startsWith(r)
  , Kh = Hh("--")
  , mg = Hh("var(--")
  , Il = r => mg(r) ? yg.test(r.split("/*")[0].trim()) : !1
  , yg = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu
  , Gh = (r, s) => s && typeof r == "number" ? s.transform(r) : r
  , $t = (r, s, i) => i > s ? s : i < r ? r : i
  , vr = {
    test: r => typeof r == "number",
    parse: parseFloat,
    transform: r => r
}
  , ms = {
    ...vr,
    transform: r => $t(0, 1, r)
}
  , Di = {
    ...vr,
    default: 1
}
  , xs = r => ({
    test: s => typeof s == "string" && s.endsWith(r) && s.split(" ").length === 1,
    parse: parseFloat,
    transform: s => `${s}${r}`
})
  , mn = xs("deg")
  , Ct = xs("%")
  , te = xs("px")
  , gg = xs("vh")
  , vg = xs("vw")
  , Ef = {
    ...Ct,
    parse: r => Ct.parse(r) / 100,
    transform: r => Ct.transform(r * 100)
}
  , xg = {
    borderWidth: te,
    borderTopWidth: te,
    borderRightWidth: te,
    borderBottomWidth: te,
    borderLeftWidth: te,
    borderRadius: te,
    radius: te,
    borderTopLeftRadius: te,
    borderTopRightRadius: te,
    borderBottomRightRadius: te,
    borderBottomLeftRadius: te,
    width: te,
    maxWidth: te,
    height: te,
    maxHeight: te,
    top: te,
    right: te,
    bottom: te,
    left: te,
    padding: te,
    paddingTop: te,
    paddingRight: te,
    paddingBottom: te,
    paddingLeft: te,
    margin: te,
    marginTop: te,
    marginRight: te,
    marginBottom: te,
    marginLeft: te,
    backgroundPositionX: te,
    backgroundPositionY: te
}
  , wg = {
    rotate: mn,
    rotateX: mn,
    rotateY: mn,
    rotateZ: mn,
    scale: Di,
    scaleX: Di,
    scaleY: Di,
    scaleZ: Di,
    skew: mn,
    skewX: mn,
    skewY: mn,
    distance: te,
    translateX: te,
    translateY: te,
    translateZ: te,
    x: te,
    y: te,
    z: te,
    perspective: te,
    transformPerspective: te,
    opacity: ms,
    originX: Ef,
    originY: Ef,
    originZ: te
}
  , Sf = {
    ...vr,
    transform: Math.round
}
  , Fl = {
    ...xg,
    ...wg,
    zIndex: Sf,
    size: te,
    fillOpacity: ms,
    strokeOpacity: ms,
    numOctaves: Sf
}
  , Lg = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective"
}
  , Rg = gr.length;
function jg(r, s, i) {
    let a = ""
      , c = !0;
    for (let f = 0; f < Rg; f++) {
        const d = gr[f]
          , p = r[d];
        if (p === void 0)
            continue;
        let m = !0;
        if (typeof p == "number" ? m = p === (d.startsWith("scale") ? 1 : 0) : m = parseFloat(p) === 0,
        !m || i) {
            const g = Gh(p, Fl[d]);
            if (!m) {
                c = !1;
                const v = Lg[d] || d;
                a += `${v}(${g}) `
            }
            i && (s[d] = g)
        }
    }
    return a = a.trim(),
    i ? a = i(s, c ? "" : a) : c && (a = "none"),
    a
}
function Zl(r, s, i) {
    const {style: a, vars: c, transformOrigin: f} = r;
    let d = !1
      , p = !1;
    for (const m in s) {
        const g = s[m];
        if (Dn.has(m)) {
            d = !0;
            continue
        } else if (Kh(m)) {
            c[m] = g;
            continue
        } else {
            const v = Gh(g, Fl[m]);
            m.startsWith("origin") ? (p = !0,
            f[m] = v) : a[m] = v
        }
    }
    if (s.transform || (d || i ? a.transform = jg(s, r.transform, i) : a.transform && (a.transform = "none")),
    p) {
        const {originX: m="50%", originY: g="50%", originZ: v=0} = f;
        a.transformOrigin = `${m} ${g} ${v}`
    }
}
const zg = {
    offset: "stroke-dashoffset",
    array: "stroke-dasharray"
}
  , Tg = {
    offset: "strokeDashoffset",
    array: "strokeDasharray"
};
function Eg(r, s, i=1, a=0, c=!0) {
    r.pathLength = 1;
    const f = c ? zg : Tg;
    r[f.offset] = te.transform(-a);
    const d = te.transform(s)
      , p = te.transform(i);
    r[f.array] = `${d} ${p}`
}
function Af(r, s, i) {
    return typeof r == "string" ? r : te.transform(s + i * r)
}
function Sg(r, s, i) {
    const a = Af(s, r.x, r.width)
      , c = Af(i, r.y, r.height);
    return `${a} ${c}`
}
function Jl(r, {attrX: s, attrY: i, attrScale: a, originX: c, originY: f, pathLength: d, pathSpacing: p=1, pathOffset: m=0, ...g}, v, w) {
    if (Zl(r, g, w),
    v) {
        r.style.viewBox && (r.attrs.viewBox = r.style.viewBox);
        return
    }
    r.attrs = r.style,
    r.style = {};
    const {attrs: j, style: A, dimensions: C} = r;
    j.transform && (C && (A.transform = j.transform),
    delete j.transform),
    C && (c !== void 0 || f !== void 0 || A.transform) && (A.transformOrigin = Sg(C, c !== void 0 ? c : .5, f !== void 0 ? f : .5)),
    s !== void 0 && (j.x = s),
    i !== void 0 && (j.y = i),
    a !== void 0 && (j.scale = a),
    d !== void 0 && Eg(j, d, p, m, !1)
}
const Ul = () => ({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {}
})
  , Xh = () => ({
    ...Ul(),
    attrs: {}
})
  , $l = r => typeof r == "string" && r.toLowerCase() === "svg";
function qh(r, {style: s, vars: i}, a, c) {
    Object.assign(r.style, s, c && c.getProjectionStyles(a));
    for (const f in i)
        r.style.setProperty(f, i[f])
}
const ep = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);
function tp(r, s, i, a) {
    qh(r, s, void 0, a);
    for (const c in s.attrs)
        r.setAttribute(ep.has(c) ? c : _l(c), s.attrs[c])
}
const Fi = {};
function Ag(r) {
    Object.assign(Fi, r)
}
function np(r, {layout: s, layoutId: i}) {
    return Dn.has(r) || r.startsWith("origin") || (s || i !== void 0) && (!!Fi[r] || r === "opacity")
}
function Hl(r, s, i) {
    var a;
    const {style: c} = r
      , f = {};
    for (const d in c)
        (Ze(c[d]) || s.style && Ze(s.style[d]) || np(d, r) || ((a = i?.getValue(d)) === null || a === void 0 ? void 0 : a.liveStyle) !== void 0) && (f[d] = c[d]);
    return f
}
function rp(r, s, i) {
    const a = Hl(r, s, i);
    for (const c in r)
        if (Ze(r[c]) || Ze(s[c])) {
            const f = gr.indexOf(c) !== -1 ? "attr" + c.charAt(0).toUpperCase() + c.substring(1) : c;
            a[f] = r[c]
        }
    return a
}
function Mg(r, s) {
    try {
        s.dimensions = typeof r.getBBox == "function" ? r.getBBox() : r.getBoundingClientRect()
    } catch {
        s.dimensions = {
            x: 0,
            y: 0,
            width: 0,
            height: 0
        }
    }
}
const Mf = ["x", "y", "width", "height", "cx", "cy", "r"]
  , Ng = {
    useVisualState: $h({
        scrapeMotionValuesFromProps: rp,
        createRenderState: Xh,
        onUpdate: ({props: r, prevProps: s, current: i, renderState: a, latestValues: c}) => {
            if (!i)
                return;
            let f = !!r.drag;
            if (!f) {
                for (const p in c)
                    if (Dn.has(p)) {
                        f = !0;
                        break
                    }
            }
            if (!f)
                return;
            let d = !s;
            if (s)
                for (let p = 0; p < Mf.length; p++) {
                    const m = Mf[p];
                    r[m] !== s[m] && (d = !0)
                }
            d && xe.read( () => {
                Mg(i, a),
                xe.render( () => {
                    Jl(a, c, $l(i.tagName), r.transformTemplate),
                    tp(i, a)
                }
                )
            }
            )
        }
    })
}
  , kg = {
    useVisualState: $h({
        scrapeMotionValuesFromProps: Hl,
        createRenderState: Ul
    })
};
function sp(r, s, i) {
    for (const a in s)
        !Ze(s[a]) && !np(a, i) && (r[a] = s[a])
}
function bg({transformTemplate: r}, s) {
    return I.useMemo( () => {
        const i = Ul();
        return Zl(i, s, r),
        Object.assign({}, i.vars, i.style)
    }
    , [s])
}
function Vg(r, s) {
    const i = r.style || {}
      , a = {};
    return sp(a, i, r),
    Object.assign(a, bg(r, s)),
    a
}
function Pg(r, s) {
    const i = {}
      , a = Vg(r, s);
    return r.drag && r.dragListener !== !1 && (i.draggable = !1,
    a.userSelect = a.WebkitUserSelect = a.WebkitTouchCallout = "none",
    a.touchAction = r.drag === !0 ? "none" : `pan-${r.drag === "x" ? "y" : "x"}`),
    r.tabIndex === void 0 && (r.onTap || r.onTapStart || r.whileTap) && (i.tabIndex = 0),
    i.style = a,
    i
}
function Cg(r, s, i, a) {
    const c = I.useMemo( () => {
        const f = Xh();
        return Jl(f, s, $l(a), r.transformTemplate),
        {
            ...f.attrs,
            style: {
                ...f.style
            }
        }
    }
    , [s]);
    if (r.style) {
        const f = {};
        sp(f, r.style, r),
        c.style = {
            ...f,
            ...c.style
        }
    }
    return c
}
function Bg(r=!1) {
    return (i, a, c, {latestValues: f}, d) => {
        const m = (Yl(i) ? Cg : Pg)(a, f, d, i)
          , g = G0(a, typeof i == "string", r)
          , v = i !== I.Fragment ? {
            ...g,
            ...m,
            ref: c
        } : {}
          , {children: w} = a
          , j = I.useMemo( () => Ze(w) ? w.get() : w, [w]);
        return I.createElement(i, {
            ...v,
            children: j
        })
    }
}
function Dg(r, s) {
    return function(a, {forwardMotionProps: c}={
        forwardMotionProps: !1
    }) {
        const d = {
            ...Yl(a) ? Ng : kg,
            preloadedFeatures: r,
            useRender: Bg(c),
            createVisualElement: s,
            Component: a
        };
        return og(d)
    }
}
function ip(r, s) {
    if (!Array.isArray(s))
        return !1;
    const i = s.length;
    if (i !== r.length)
        return !1;
    for (let a = 0; a < i; a++)
        if (s[a] !== r[a])
            return !1;
    return !0
}
function eo(r, s, i) {
    const a = r.getProps();
    return Ol(a, s, i !== void 0 ? i : a.custom, r)
}
const Wg = Bl( () => window.ScrollTimeline !== void 0);
class _g {
    constructor(s) {
        this.stop = () => this.runAll("stop"),
        this.animations = s.filter(Boolean)
    }
    get finished() {
        return Promise.all(this.animations.map(s => "finished"in s ? s.finished : s))
    }
    getAll(s) {
        return this.animations[0][s]
    }
    setAll(s, i) {
        for (let a = 0; a < this.animations.length; a++)
            this.animations[a][s] = i
    }
    attachTimeline(s, i) {
        const a = this.animations.map(c => {
            if (Wg() && c.attachTimeline)
                return c.attachTimeline(s);
            if (typeof i == "function")
                return i(c)
        }
        );
        return () => {
            a.forEach( (c, f) => {
                c && c(),
                this.animations[f].stop()
            }
            )
        }
    }
    get time() {
        return this.getAll("time")
    }
    set time(s) {
        this.setAll("time", s)
    }
    get speed() {
        return this.getAll("speed")
    }
    set speed(s) {
        this.setAll("speed", s)
    }
    get startTime() {
        return this.getAll("startTime")
    }
    get duration() {
        let s = 0;
        for (let i = 0; i < this.animations.length; i++)
            s = Math.max(s, this.animations[i].duration);
        return s
    }
    runAll(s) {
        this.animations.forEach(i => i[s]())
    }
    flatten() {
        this.runAll("flatten")
    }
    play() {
        this.runAll("play")
    }
    pause() {
        this.runAll("pause")
    }
    cancel() {
        this.runAll("cancel")
    }
    complete() {
        this.runAll("complete")
    }
}
class Qg extends _g {
    then(s, i) {
        return Promise.all(this.animations).then(s).catch(i)
    }
}
function Kl(r, s) {
    return r ? r[s] || r.default || r : void 0
}
const yl = 2e4;
function op(r) {
    let s = 0;
    const i = 50;
    let a = r.next(s);
    for (; !a.done && s < yl; )
        s += i,
        a = r.next(s);
    return s >= yl ? 1 / 0 : s
}
function Gl(r) {
    return typeof r == "function"
}
function Nf(r, s) {
    r.timeline = s,
    r.onfinish = null
}
const Xl = r => Array.isArray(r) && typeof r[0] == "number"
  , Yg = {
    linearEasing: void 0
};
function Og(r, s) {
    const i = Bl(r);
    return () => {
        var a;
        return (a = Yg[s]) !== null && a !== void 0 ? a : i()
    }
}
const Zi = Og( () => {
    try {
        document.createElement("div").animate({
            opacity: 0
        }, {
            easing: "linear(0, 1)"
        })
    } catch {
        return !1
    }
    return !0
}
, "linearEasing")
  , ap = (r, s, i=10) => {
    let a = "";
    const c = Math.max(Math.round(s / i), 2);
    for (let f = 0; f < c; f++)
        a += r(pr(0, c - 1, f)) + ", ";
    return `linear(${a.substring(0, a.length - 2)})`
}
;
function lp(r) {
    return !!(typeof r == "function" && Zi() || !r || typeof r == "string" && (r in gl || Zi()) || Xl(r) || Array.isArray(r) && r.every(lp))
}
const as = ([r,s,i,a]) => `cubic-bezier(${r}, ${s}, ${i}, ${a})`
  , gl = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: as([0, .65, .55, 1]),
    circOut: as([.55, 0, 1, .45]),
    backIn: as([.31, .01, .66, -.59]),
    backOut: as([.33, 1.53, .69, .99])
};
function up(r, s) {
    if (r)
        return typeof r == "function" && Zi() ? ap(r, s) : Xl(r) ? as(r) : Array.isArray(r) ? r.map(i => up(i, s) || gl.easeOut) : gl[r]
}
const Mt = {
    x: !1,
    y: !1
};
function cp() {
    return Mt.x || Mt.y
}
function Ig(r, s, i) {
    var a;
    if (r instanceof Element)
        return [r];
    if (typeof r == "string") {
        let c = document;
        const f = (a = void 0) !== null && a !== void 0 ? a : c.querySelectorAll(r);
        return f ? Array.from(f) : []
    }
    return Array.from(r)
}
function dp(r, s) {
    const i = Ig(r)
      , a = new AbortController
      , c = {
        passive: !0,
        ...s,
        signal: a.signal
    };
    return [i, c, () => a.abort()]
}
function kf(r) {
    return s => {
        s.pointerType === "touch" || cp() || r(s)
    }
}
function Fg(r, s, i={}) {
    const [a,c,f] = dp(r, i)
      , d = kf(p => {
        const {target: m} = p
          , g = s(p);
        if (typeof g != "function" || !m)
            return;
        const v = kf(w => {
            g(w),
            m.removeEventListener("pointerleave", v)
        }
        );
        m.addEventListener("pointerleave", v, c)
    }
    );
    return a.forEach(p => {
        p.addEventListener("pointerenter", d, c)
    }
    ),
    f
}
const fp = (r, s) => s ? r === s ? !0 : fp(r, s.parentElement) : !1
  , ql = r => r.pointerType === "mouse" ? typeof r.button != "number" || r.button <= 0 : r.isPrimary !== !1
  , Zg = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function Jg(r) {
    return Zg.has(r.tagName) || r.tabIndex !== -1
}
const ls = new WeakSet;
function bf(r) {
    return s => {
        s.key === "Enter" && r(s)
    }
}
function rl(r, s) {
    r.dispatchEvent(new PointerEvent("pointer" + s,{
        isPrimary: !0,
        bubbles: !0
    }))
}
const Ug = (r, s) => {
    const i = r.currentTarget;
    if (!i)
        return;
    const a = bf( () => {
        if (ls.has(i))
            return;
        rl(i, "down");
        const c = bf( () => {
            rl(i, "up")
        }
        )
          , f = () => rl(i, "cancel");
        i.addEventListener("keyup", c, s),
        i.addEventListener("blur", f, s)
    }
    );
    i.addEventListener("keydown", a, s),
    i.addEventListener("blur", () => i.removeEventListener("keydown", a), s)
}
;
function Vf(r) {
    return ql(r) && !cp()
}
function $g(r, s, i={}) {
    const [a,c,f] = dp(r, i)
      , d = p => {
        const m = p.currentTarget;
        if (!Vf(p) || ls.has(m))
            return;
        ls.add(m);
        const g = s(p)
          , v = (A, C) => {
            window.removeEventListener("pointerup", w),
            window.removeEventListener("pointercancel", j),
            !(!Vf(A) || !ls.has(m)) && (ls.delete(m),
            typeof g == "function" && g(A, {
                success: C
            }))
        }
          , w = A => {
            v(A, i.useGlobalTarget || fp(m, A.target))
        }
          , j = A => {
            v(A, !1)
        }
        ;
        window.addEventListener("pointerup", w, c),
        window.addEventListener("pointercancel", j, c)
    }
    ;
    return a.forEach(p => {
        !Jg(p) && p.getAttribute("tabindex") === null && (p.tabIndex = 0),
        (i.useGlobalTarget ? window : p).addEventListener("pointerdown", d, c),
        p.addEventListener("focus", g => Ug(g, c), c)
    }
    ),
    f
}
function Hg(r) {
    return r === "x" || r === "y" ? Mt[r] ? null : (Mt[r] = !0,
    () => {
        Mt[r] = !1
    }
    ) : Mt.x || Mt.y ? null : (Mt.x = Mt.y = !0,
    () => {
        Mt.x = Mt.y = !1
    }
    )
}
const hp = new Set(["width", "height", "top", "left", "right", "bottom", ...gr]);
let Yi;
function Kg() {
    Yi = void 0
}
const Bt = {
    now: () => (Yi === void 0 && Bt.set(_e.isProcessing || Z0.useManualTiming ? _e.timestamp : performance.now()),
    Yi),
    set: r => {
        Yi = r,
        queueMicrotask(Kg)
    }
};
function eu(r, s) {
    r.indexOf(s) === -1 && r.push(s)
}
function tu(r, s) {
    const i = r.indexOf(s);
    i > -1 && r.splice(i, 1)
}
class nu {
    constructor() {
        this.subscriptions = []
    }
    add(s) {
        return eu(this.subscriptions, s),
        () => tu(this.subscriptions, s)
    }
    notify(s, i, a) {
        const c = this.subscriptions.length;
        if (c)
            if (c === 1)
                this.subscriptions[0](s, i, a);
            else
                for (let f = 0; f < c; f++) {
                    const d = this.subscriptions[f];
                    d && d(s, i, a)
                }
    }
    getSize() {
        return this.subscriptions.length
    }
    clear() {
        this.subscriptions.length = 0
    }
}
function pp(r, s) {
    return s ? r * (1e3 / s) : 0
}
const Pf = 30
  , Gg = r => !isNaN(parseFloat(r));
class Xg {
    constructor(s, i={}) {
        this.version = "11.18.2",
        this.canTrackVelocity = null,
        this.events = {},
        this.updateAndNotify = (a, c=!0) => {
            const f = Bt.now();
            this.updatedAt !== f && this.setPrevFrameValue(),
            this.prev = this.current,
            this.setCurrent(a),
            this.current !== this.prev && this.events.change && this.events.change.notify(this.current),
            c && this.events.renderRequest && this.events.renderRequest.notify(this.current)
        }
        ,
        this.hasAnimated = !1,
        this.setCurrent(s),
        this.owner = i.owner
    }
    setCurrent(s) {
        this.current = s,
        this.updatedAt = Bt.now(),
        this.canTrackVelocity === null && s !== void 0 && (this.canTrackVelocity = Gg(this.current))
    }
    setPrevFrameValue(s=this.current) {
        this.prevFrameValue = s,
        this.prevUpdatedAt = this.updatedAt
    }
    onChange(s) {
        return this.on("change", s)
    }
    on(s, i) {
        this.events[s] || (this.events[s] = new nu);
        const a = this.events[s].add(i);
        return s === "change" ? () => {
            a(),
            xe.read( () => {
                this.events.change.getSize() || this.stop()
            }
            )
        }
        : a
    }
    clearListeners() {
        for (const s in this.events)
            this.events[s].clear()
    }
    attach(s, i) {
        this.passiveEffect = s,
        this.stopPassiveEffect = i
    }
    set(s, i=!0) {
        !i || !this.passiveEffect ? this.updateAndNotify(s, i) : this.passiveEffect(s, this.updateAndNotify)
    }
    setWithVelocity(s, i, a) {
        this.set(i),
        this.prev = void 0,
        this.prevFrameValue = s,
        this.prevUpdatedAt = this.updatedAt - a
    }
    jump(s, i=!0) {
        this.updateAndNotify(s),
        this.prev = s,
        this.prevUpdatedAt = this.prevFrameValue = void 0,
        i && this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect()
    }
    get() {
        return this.current
    }
    getPrevious() {
        return this.prev
    }
    getVelocity() {
        const s = Bt.now();
        if (!this.canTrackVelocity || this.prevFrameValue === void 0 || s - this.updatedAt > Pf)
            return 0;
        const i = Math.min(this.updatedAt - this.prevUpdatedAt, Pf);
        return pp(parseFloat(this.current) - parseFloat(this.prevFrameValue), i)
    }
    start(s) {
        return this.stop(),
        new Promise(i => {
            this.hasAnimated = !0,
            this.animation = s(i),
            this.events.animationStart && this.events.animationStart.notify()
        }
        ).then( () => {
            this.events.animationComplete && this.events.animationComplete.notify(),
            this.clearAnimation()
        }
        )
    }
    stop() {
        this.animation && (this.animation.stop(),
        this.events.animationCancel && this.events.animationCancel.notify()),
        this.clearAnimation()
    }
    isAnimating() {
        return !!this.animation
    }
    clearAnimation() {
        delete this.animation
    }
    destroy() {
        this.clearListeners(),
        this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect()
    }
}
function ys(r, s) {
    return new Xg(r,s)
}
function qg(r, s, i) {
    r.hasValue(s) ? r.getValue(s).set(i) : r.addValue(s, ys(i))
}
function ev(r, s) {
    const i = eo(r, s);
    let {transitionEnd: a={}, transition: c={}, ...f} = i || {};
    f = {
        ...f,
        ...a
    };
    for (const d in f) {
        const p = fg(f[d]);
        qg(r, d, p)
    }
}
function tv(r) {
    return !!(Ze(r) && r.add)
}
function vl(r, s) {
    const i = r.getValue("willChange");
    if (tv(i))
        return i.add(s)
}
function mp(r) {
    return r.props[Zh]
}
const yp = (r, s, i) => (((1 - 3 * i + 3 * s) * r + (3 * i - 6 * s)) * r + 3 * s) * r
  , nv = 1e-7
  , rv = 12;
function sv(r, s, i, a, c) {
    let f, d, p = 0;
    do
        d = s + (i - s) / 2,
        f = yp(d, a, c) - r,
        f > 0 ? i = d : s = d;
    while (Math.abs(f) > nv && ++p < rv);
    return d
}
function ws(r, s, i, a) {
    if (r === s && i === a)
        return ct;
    const c = f => sv(f, 0, 1, r, i);
    return f => f === 0 || f === 1 ? f : yp(c(f), s, a)
}
const gp = r => s => s <= .5 ? r(2 * s) / 2 : (2 - r(2 * (1 - s))) / 2
  , vp = r => s => 1 - r(1 - s)
  , xp = ws(.33, 1.53, .69, .99)
  , ru = vp(xp)
  , wp = gp(ru)
  , Lp = r => (r *= 2) < 1 ? .5 * ru(r) : .5 * (2 - Math.pow(2, -10 * (r - 1)))
  , su = r => 1 - Math.sin(Math.acos(r))
  , Rp = vp(su)
  , jp = gp(su)
  , zp = r => /^0[^.\s]+$/u.test(r);
function iv(r) {
    return typeof r == "number" ? r === 0 : r !== null ? r === "none" || r === "0" || zp(r) : !0
}
const cs = r => Math.round(r * 1e5) / 1e5
  , iu = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function ov(r) {
    return r == null
}
const av = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu
  , ou = (r, s) => i => !!(typeof i == "string" && av.test(i) && i.startsWith(r) || s && !ov(i) && Object.prototype.hasOwnProperty.call(i, s))
  , Tp = (r, s, i) => a => {
    if (typeof a != "string")
        return a;
    const [c,f,d,p] = a.match(iu);
    return {
        [r]: parseFloat(c),
        [s]: parseFloat(f),
        [i]: parseFloat(d),
        alpha: p !== void 0 ? parseFloat(p) : 1
    }
}
  , lv = r => $t(0, 255, r)
  , sl = {
    ...vr,
    transform: r => Math.round(lv(r))
}
  , Cn = {
    test: ou("rgb", "red"),
    parse: Tp("red", "green", "blue"),
    transform: ({red: r, green: s, blue: i, alpha: a=1}) => "rgba(" + sl.transform(r) + ", " + sl.transform(s) + ", " + sl.transform(i) + ", " + cs(ms.transform(a)) + ")"
};
function uv(r) {
    let s = ""
      , i = ""
      , a = ""
      , c = "";
    return r.length > 5 ? (s = r.substring(1, 3),
    i = r.substring(3, 5),
    a = r.substring(5, 7),
    c = r.substring(7, 9)) : (s = r.substring(1, 2),
    i = r.substring(2, 3),
    a = r.substring(3, 4),
    c = r.substring(4, 5),
    s += s,
    i += i,
    a += a,
    c += c),
    {
        red: parseInt(s, 16),
        green: parseInt(i, 16),
        blue: parseInt(a, 16),
        alpha: c ? parseInt(c, 16) / 255 : 1
    }
}
const xl = {
    test: ou("#"),
    parse: uv,
    transform: Cn.transform
}
  , cr = {
    test: ou("hsl", "hue"),
    parse: Tp("hue", "saturation", "lightness"),
    transform: ({hue: r, saturation: s, lightness: i, alpha: a=1}) => "hsla(" + Math.round(r) + ", " + Ct.transform(cs(s)) + ", " + Ct.transform(cs(i)) + ", " + cs(ms.transform(a)) + ")"
}
  , Fe = {
    test: r => Cn.test(r) || xl.test(r) || cr.test(r),
    parse: r => Cn.test(r) ? Cn.parse(r) : cr.test(r) ? cr.parse(r) : xl.parse(r),
    transform: r => typeof r == "string" ? r : r.hasOwnProperty("red") ? Cn.transform(r) : cr.transform(r)
}
  , cv = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function dv(r) {
    var s, i;
    return isNaN(r) && typeof r == "string" && (((s = r.match(iu)) === null || s === void 0 ? void 0 : s.length) || 0) + (((i = r.match(cv)) === null || i === void 0 ? void 0 : i.length) || 0) > 0
}
const Ep = "number"
  , Sp = "color"
  , fv = "var"
  , hv = "var("
  , Cf = "${}"
  , pv = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function gs(r) {
    const s = r.toString()
      , i = []
      , a = {
        color: [],
        number: [],
        var: []
    }
      , c = [];
    let f = 0;
    const p = s.replace(pv, m => (Fe.test(m) ? (a.color.push(f),
    c.push(Sp),
    i.push(Fe.parse(m))) : m.startsWith(hv) ? (a.var.push(f),
    c.push(fv),
    i.push(m)) : (a.number.push(f),
    c.push(Ep),
    i.push(parseFloat(m))),
    ++f,
    Cf)).split(Cf);
    return {
        values: i,
        split: p,
        indexes: a,
        types: c
    }
}
function Ap(r) {
    return gs(r).values
}
function Mp(r) {
    const {split: s, types: i} = gs(r)
      , a = s.length;
    return c => {
        let f = "";
        for (let d = 0; d < a; d++)
            if (f += s[d],
            c[d] !== void 0) {
                const p = i[d];
                p === Ep ? f += cs(c[d]) : p === Sp ? f += Fe.transform(c[d]) : f += c[d]
            }
        return f
    }
}
const mv = r => typeof r == "number" ? 0 : r;
function yv(r) {
    const s = Ap(r);
    return Mp(r)(s.map(mv))
}
const gn = {
    test: dv,
    parse: Ap,
    createTransformer: Mp,
    getAnimatableNone: yv
}
  , gv = new Set(["brightness", "contrast", "saturate", "opacity"]);
function vv(r) {
    const [s,i] = r.slice(0, -1).split("(");
    if (s === "drop-shadow")
        return r;
    const [a] = i.match(iu) || [];
    if (!a)
        return r;
    const c = i.replace(a, "");
    let f = gv.has(s) ? 1 : 0;
    return a !== i && (f *= 100),
    s + "(" + f + c + ")"
}
const xv = /\b([a-z-]*)\(.*?\)/gu
  , wl = {
    ...gn,
    getAnimatableNone: r => {
        const s = r.match(xv);
        return s ? s.map(vv).join(" ") : r
    }
}
  , wv = {
    ...Fl,
    color: Fe,
    backgroundColor: Fe,
    outlineColor: Fe,
    fill: Fe,
    stroke: Fe,
    borderColor: Fe,
    borderTopColor: Fe,
    borderRightColor: Fe,
    borderBottomColor: Fe,
    borderLeftColor: Fe,
    filter: wl,
    WebkitFilter: wl
}
  , au = r => wv[r];
function Np(r, s) {
    let i = au(r);
    return i !== wl && (i = gn),
    i.getAnimatableNone ? i.getAnimatableNone(s) : void 0
}
const Lv = new Set(["auto", "none", "0"]);
function Rv(r, s, i) {
    let a = 0, c;
    for (; a < r.length && !c; ) {
        const f = r[a];
        typeof f == "string" && !Lv.has(f) && gs(f).values.length && (c = r[a]),
        a++
    }
    if (c && i)
        for (const f of s)
            r[f] = Np(i, c)
}
const Bf = r => r === vr || r === te
  , Df = (r, s) => parseFloat(r.split(", ")[s])
  , Wf = (r, s) => (i, {transform: a}) => {
    if (a === "none" || !a)
        return 0;
    const c = a.match(/^matrix3d\((.+)\)$/u);
    if (c)
        return Df(c[1], s);
    {
        const f = a.match(/^matrix\((.+)\)$/u);
        return f ? Df(f[1], r) : 0
    }
}
  , jv = new Set(["x", "y", "z"])
  , zv = gr.filter(r => !jv.has(r));
function Tv(r) {
    const s = [];
    return zv.forEach(i => {
        const a = r.getValue(i);
        a !== void 0 && (s.push([i, a.get()]),
        a.set(i.startsWith("scale") ? 1 : 0))
    }
    ),
    s
}
const yr = {
    width: ({x: r}, {paddingLeft: s="0", paddingRight: i="0"}) => r.max - r.min - parseFloat(s) - parseFloat(i),
    height: ({y: r}, {paddingTop: s="0", paddingBottom: i="0"}) => r.max - r.min - parseFloat(s) - parseFloat(i),
    top: (r, {top: s}) => parseFloat(s),
    left: (r, {left: s}) => parseFloat(s),
    bottom: ({y: r}, {top: s}) => parseFloat(s) + (r.max - r.min),
    right: ({x: r}, {left: s}) => parseFloat(s) + (r.max - r.min),
    x: Wf(4, 13),
    y: Wf(5, 14)
};
yr.translateX = yr.x;
yr.translateY = yr.y;
const Bn = new Set;
let Ll = !1
  , Rl = !1;
function kp() {
    if (Rl) {
        const r = Array.from(Bn).filter(a => a.needsMeasurement)
          , s = new Set(r.map(a => a.element))
          , i = new Map;
        s.forEach(a => {
            const c = Tv(a);
            c.length && (i.set(a, c),
            a.render())
        }
        ),
        r.forEach(a => a.measureInitialState()),
        s.forEach(a => {
            a.render();
            const c = i.get(a);
            c && c.forEach( ([f,d]) => {
                var p;
                (p = a.getValue(f)) === null || p === void 0 || p.set(d)
            }
            )
        }
        ),
        r.forEach(a => a.measureEndState()),
        r.forEach(a => {
            a.suspendedScrollY !== void 0 && window.scrollTo(0, a.suspendedScrollY)
        }
        )
    }
    Rl = !1,
    Ll = !1,
    Bn.forEach(r => r.complete()),
    Bn.clear()
}
function bp() {
    Bn.forEach(r => {
        r.readKeyframes(),
        r.needsMeasurement && (Rl = !0)
    }
    )
}
function Ev() {
    bp(),
    kp()
}
class lu {
    constructor(s, i, a, c, f, d=!1) {
        this.isComplete = !1,
        this.isAsync = !1,
        this.needsMeasurement = !1,
        this.isScheduled = !1,
        this.unresolvedKeyframes = [...s],
        this.onComplete = i,
        this.name = a,
        this.motionValue = c,
        this.element = f,
        this.isAsync = d
    }
    scheduleResolve() {
        this.isScheduled = !0,
        this.isAsync ? (Bn.add(this),
        Ll || (Ll = !0,
        xe.read(bp),
        xe.resolveKeyframes(kp))) : (this.readKeyframes(),
        this.complete())
    }
    readKeyframes() {
        const {unresolvedKeyframes: s, name: i, element: a, motionValue: c} = this;
        for (let f = 0; f < s.length; f++)
            if (s[f] === null)
                if (f === 0) {
                    const d = c?.get()
                      , p = s[s.length - 1];
                    if (d !== void 0)
                        s[0] = d;
                    else if (a && i) {
                        const m = a.readValue(i, p);
                        m != null && (s[0] = m)
                    }
                    s[0] === void 0 && (s[0] = p),
                    c && d === void 0 && c.set(s[0])
                } else
                    s[f] = s[f - 1]
    }
    setFinalKeyframe() {}
    measureInitialState() {}
    renderEndStyles() {}
    measureEndState() {}
    complete() {
        this.isComplete = !0,
        this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
        Bn.delete(this)
    }
    cancel() {
        this.isComplete || (this.isScheduled = !1,
        Bn.delete(this))
    }
    resume() {
        this.isComplete || this.scheduleResolve()
    }
}
const Vp = r => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(r)
  , Sv = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function Av(r) {
    const s = Sv.exec(r);
    if (!s)
        return [, ];
    const [,i,a,c] = s;
    return [`--${i ?? a}`, c]
}
function Pp(r, s, i=1) {
    const [a,c] = Av(r);
    if (!a)
        return;
    const f = window.getComputedStyle(s).getPropertyValue(a);
    if (f) {
        const d = f.trim();
        return Vp(d) ? parseFloat(d) : d
    }
    return Il(c) ? Pp(c, s, i + 1) : c
}
const Cp = r => s => s.test(r)
  , Mv = {
    test: r => r === "auto",
    parse: r => r
}
  , Bp = [vr, te, Ct, mn, vg, gg, Mv]
  , _f = r => Bp.find(Cp(r));
class Dp extends lu {
    constructor(s, i, a, c, f) {
        super(s, i, a, c, f, !0)
    }
    readKeyframes() {
        const {unresolvedKeyframes: s, element: i, name: a} = this;
        if (!i || !i.current)
            return;
        super.readKeyframes();
        for (let m = 0; m < s.length; m++) {
            let g = s[m];
            if (typeof g == "string" && (g = g.trim(),
            Il(g))) {
                const v = Pp(g, i.current);
                v !== void 0 && (s[m] = v),
                m === s.length - 1 && (this.finalKeyframe = g)
            }
        }
        if (this.resolveNoneKeyframes(),
        !hp.has(a) || s.length !== 2)
            return;
        const [c,f] = s
          , d = _f(c)
          , p = _f(f);
        if (d !== p)
            if (Bf(d) && Bf(p))
                for (let m = 0; m < s.length; m++) {
                    const g = s[m];
                    typeof g == "string" && (s[m] = parseFloat(g))
                }
            else
                this.needsMeasurement = !0
    }
    resolveNoneKeyframes() {
        const {unresolvedKeyframes: s, name: i} = this
          , a = [];
        for (let c = 0; c < s.length; c++)
            iv(s[c]) && a.push(c);
        a.length && Rv(s, a, i)
    }
    measureInitialState() {
        const {element: s, unresolvedKeyframes: i, name: a} = this;
        if (!s || !s.current)
            return;
        a === "height" && (this.suspendedScrollY = window.pageYOffset),
        this.measuredOrigin = yr[a](s.measureViewportBox(), window.getComputedStyle(s.current)),
        i[0] = this.measuredOrigin;
        const c = i[i.length - 1];
        c !== void 0 && s.getValue(a, c).jump(c, !1)
    }
    measureEndState() {
        var s;
        const {element: i, name: a, unresolvedKeyframes: c} = this;
        if (!i || !i.current)
            return;
        const f = i.getValue(a);
        f && f.jump(this.measuredOrigin, !1);
        const d = c.length - 1
          , p = c[d];
        c[d] = yr[a](i.measureViewportBox(), window.getComputedStyle(i.current)),
        p !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = p),
        !((s = this.removedTransforms) === null || s === void 0) && s.length && this.removedTransforms.forEach( ([m,g]) => {
            i.getValue(m).set(g)
        }
        ),
        this.resolveNoneKeyframes()
    }
}
const Qf = (r, s) => s === "zIndex" ? !1 : !!(typeof r == "number" || Array.isArray(r) || typeof r == "string" && (gn.test(r) || r === "0") && !r.startsWith("url("));
function Nv(r) {
    const s = r[0];
    if (r.length === 1)
        return !0;
    for (let i = 0; i < r.length; i++)
        if (r[i] !== s)
            return !0
}
function kv(r, s, i, a) {
    const c = r[0];
    if (c === null)
        return !1;
    if (s === "display" || s === "visibility")
        return !0;
    const f = r[r.length - 1]
      , d = Qf(c, s)
      , p = Qf(f, s);
    return !d || !p ? !1 : Nv(r) || (i === "spring" || Gl(i)) && a
}
const bv = r => r !== null;
function to(r, {repeat: s, repeatType: i="loop"}, a) {
    const c = r.filter(bv)
      , f = s && i !== "loop" && s % 2 === 1 ? 0 : c.length - 1;
    return !f || a === void 0 ? c[f] : a
}
const Vv = 40;
class Wp {
    constructor({autoplay: s=!0, delay: i=0, type: a="keyframes", repeat: c=0, repeatDelay: f=0, repeatType: d="loop", ...p}) {
        this.isStopped = !1,
        this.hasAttemptedResolve = !1,
        this.createdAt = Bt.now(),
        this.options = {
            autoplay: s,
            delay: i,
            type: a,
            repeat: c,
            repeatDelay: f,
            repeatType: d,
            ...p
        },
        this.updateFinishedPromise()
    }
    calcStartTime() {
        return this.resolvedAt ? this.resolvedAt - this.createdAt > Vv ? this.resolvedAt : this.createdAt : this.createdAt
    }
    get resolved() {
        return !this._resolved && !this.hasAttemptedResolve && Ev(),
        this._resolved
    }
    onKeyframesResolved(s, i) {
        this.resolvedAt = Bt.now(),
        this.hasAttemptedResolve = !0;
        const {name: a, type: c, velocity: f, delay: d, onComplete: p, onUpdate: m, isGenerator: g} = this.options;
        if (!g && !kv(s, a, c, f))
            if (d)
                this.options.duration = 0;
            else {
                m && m(to(s, this.options, i)),
                p && p(),
                this.resolveFinishedPromise();
                return
            }
        const v = this.initPlayback(s, i);
        v !== !1 && (this._resolved = {
            keyframes: s,
            finalKeyframe: i,
            ...v
        },
        this.onPostResolved())
    }
    onPostResolved() {}
    then(s, i) {
        return this.currentFinishedPromise.then(s, i)
    }
    flatten() {
        this.options.type = "keyframes",
        this.options.ease = "linear"
    }
    updateFinishedPromise() {
        this.currentFinishedPromise = new Promise(s => {
            this.resolveFinishedPromise = s
        }
        )
    }
}
const ze = (r, s, i) => r + (s - r) * i;
function il(r, s, i) {
    return i < 0 && (i += 1),
    i > 1 && (i -= 1),
    i < 1 / 6 ? r + (s - r) * 6 * i : i < 1 / 2 ? s : i < 2 / 3 ? r + (s - r) * (2 / 3 - i) * 6 : r
}
function Pv({hue: r, saturation: s, lightness: i, alpha: a}) {
    r /= 360,
    s /= 100,
    i /= 100;
    let c = 0
      , f = 0
      , d = 0;
    if (!s)
        c = f = d = i;
    else {
        const p = i < .5 ? i * (1 + s) : i + s - i * s
          , m = 2 * i - p;
        c = il(m, p, r + 1 / 3),
        f = il(m, p, r),
        d = il(m, p, r - 1 / 3)
    }
    return {
        red: Math.round(c * 255),
        green: Math.round(f * 255),
        blue: Math.round(d * 255),
        alpha: a
    }
}
function Ji(r, s) {
    return i => i > 0 ? s : r
}
const ol = (r, s, i) => {
    const a = r * r
      , c = i * (s * s - a) + a;
    return c < 0 ? 0 : Math.sqrt(c)
}
  , Cv = [xl, Cn, cr]
  , Bv = r => Cv.find(s => s.test(r));
function Yf(r) {
    const s = Bv(r);
    if (!s)
        return !1;
    let i = s.parse(r);
    return s === cr && (i = Pv(i)),
    i
}
const Of = (r, s) => {
    const i = Yf(r)
      , a = Yf(s);
    if (!i || !a)
        return Ji(r, s);
    const c = {
        ...i
    };
    return f => (c.red = ol(i.red, a.red, f),
    c.green = ol(i.green, a.green, f),
    c.blue = ol(i.blue, a.blue, f),
    c.alpha = ze(i.alpha, a.alpha, f),
    Cn.transform(c))
}
  , Dv = (r, s) => i => s(r(i))
  , Ls = (...r) => r.reduce(Dv)
  , jl = new Set(["none", "hidden"]);
function Wv(r, s) {
    return jl.has(r) ? i => i <= 0 ? r : s : i => i >= 1 ? s : r
}
function _v(r, s) {
    return i => ze(r, s, i)
}
function uu(r) {
    return typeof r == "number" ? _v : typeof r == "string" ? Il(r) ? Ji : Fe.test(r) ? Of : Ov : Array.isArray(r) ? _p : typeof r == "object" ? Fe.test(r) ? Of : Qv : Ji
}
function _p(r, s) {
    const i = [...r]
      , a = i.length
      , c = r.map( (f, d) => uu(f)(f, s[d]));
    return f => {
        for (let d = 0; d < a; d++)
            i[d] = c[d](f);
        return i
    }
}
function Qv(r, s) {
    const i = {
        ...r,
        ...s
    }
      , a = {};
    for (const c in i)
        r[c] !== void 0 && s[c] !== void 0 && (a[c] = uu(r[c])(r[c], s[c]));
    return c => {
        for (const f in a)
            i[f] = a[f](c);
        return i
    }
}
function Yv(r, s) {
    var i;
    const a = []
      , c = {
        color: 0,
        var: 0,
        number: 0
    };
    for (let f = 0; f < s.values.length; f++) {
        const d = s.types[f]
          , p = r.indexes[d][c[d]]
          , m = (i = r.values[p]) !== null && i !== void 0 ? i : 0;
        a[f] = m,
        c[d]++
    }
    return a
}
const Ov = (r, s) => {
    const i = gn.createTransformer(s)
      , a = gs(r)
      , c = gs(s);
    return a.indexes.var.length === c.indexes.var.length && a.indexes.color.length === c.indexes.color.length && a.indexes.number.length >= c.indexes.number.length ? jl.has(r) && !c.values.length || jl.has(s) && !a.values.length ? Wv(r, s) : Ls(_p(Yv(a, c), c.values), i) : Ji(r, s)
}
;
function Qp(r, s, i) {
    return typeof r == "number" && typeof s == "number" && typeof i == "number" ? ze(r, s, i) : uu(r)(r, s)
}
const Iv = 5;
function Yp(r, s, i) {
    const a = Math.max(s - Iv, 0);
    return pp(i - r(a), s - a)
}
const Se = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: .3,
    visualDuration: .3,
    restSpeed: {
        granular: .01,
        default: 2
    },
    restDelta: {
        granular: .005,
        default: .5
    },
    minDuration: .01,
    maxDuration: 10,
    minDamping: .05,
    maxDamping: 1
}
  , al = .001;
function Fv({duration: r=Se.duration, bounce: s=Se.bounce, velocity: i=Se.velocity, mass: a=Se.mass}) {
    let c, f, d = 1 - s;
    d = $t(Se.minDamping, Se.maxDamping, d),
    r = $t(Se.minDuration, Se.maxDuration, Ut(r)),
    d < 1 ? (c = g => {
        const v = g * d
          , w = v * r
          , j = v - i
          , A = zl(g, d)
          , C = Math.exp(-w);
        return al - j / A * C
    }
    ,
    f = g => {
        const w = g * d * r
          , j = w * i + i
          , A = Math.pow(d, 2) * Math.pow(g, 2) * r
          , C = Math.exp(-w)
          , M = zl(Math.pow(g, 2), d);
        return (-c(g) + al > 0 ? -1 : 1) * ((j - A) * C) / M
    }
    ) : (c = g => {
        const v = Math.exp(-g * r)
          , w = (g - i) * r + 1;
        return -al + v * w
    }
    ,
    f = g => {
        const v = Math.exp(-g * r)
          , w = (i - g) * (r * r);
        return v * w
    }
    );
    const p = 5 / r
      , m = Jv(c, f, p);
    if (r = Jt(r),
    isNaN(m))
        return {
            stiffness: Se.stiffness,
            damping: Se.damping,
            duration: r
        };
    {
        const g = Math.pow(m, 2) * a;
        return {
            stiffness: g,
            damping: d * 2 * Math.sqrt(a * g),
            duration: r
        }
    }
}
const Zv = 12;
function Jv(r, s, i) {
    let a = i;
    for (let c = 1; c < Zv; c++)
        a = a - r(a) / s(a);
    return a
}
function zl(r, s) {
    return r * Math.sqrt(1 - s * s)
}
const Uv = ["duration", "bounce"]
  , $v = ["stiffness", "damping", "mass"];
function If(r, s) {
    return s.some(i => r[i] !== void 0)
}
function Hv(r) {
    let s = {
        velocity: Se.velocity,
        stiffness: Se.stiffness,
        damping: Se.damping,
        mass: Se.mass,
        isResolvedFromDuration: !1,
        ...r
    };
    if (!If(r, $v) && If(r, Uv))
        if (r.visualDuration) {
            const i = r.visualDuration
              , a = 2 * Math.PI / (i * 1.2)
              , c = a * a
              , f = 2 * $t(.05, 1, 1 - (r.bounce || 0)) * Math.sqrt(c);
            s = {
                ...s,
                mass: Se.mass,
                stiffness: c,
                damping: f
            }
        } else {
            const i = Fv(r);
            s = {
                ...s,
                ...i,
                mass: Se.mass
            },
            s.isResolvedFromDuration = !0
        }
    return s
}
function Op(r=Se.visualDuration, s=Se.bounce) {
    const i = typeof r != "object" ? {
        visualDuration: r,
        keyframes: [0, 1],
        bounce: s
    } : r;
    let {restSpeed: a, restDelta: c} = i;
    const f = i.keyframes[0]
      , d = i.keyframes[i.keyframes.length - 1]
      , p = {
        done: !1,
        value: f
    }
      , {stiffness: m, damping: g, mass: v, duration: w, velocity: j, isResolvedFromDuration: A} = Hv({
        ...i,
        velocity: -Ut(i.velocity || 0)
    })
      , C = j || 0
      , M = g / (2 * Math.sqrt(m * v))
      , V = d - f
      , D = Ut(Math.sqrt(m / v))
      , Y = Math.abs(V) < 5;
    a || (a = Y ? Se.restSpeed.granular : Se.restSpeed.default),
    c || (c = Y ? Se.restDelta.granular : Se.restDelta.default);
    let Z;
    if (M < 1) {
        const _ = zl(D, M);
        Z = ee => {
            const ae = Math.exp(-M * D * ee);
            return d - ae * ((C + M * D * V) / _ * Math.sin(_ * ee) + V * Math.cos(_ * ee))
        }
    } else if (M === 1)
        Z = _ => d - Math.exp(-D * _) * (V + (C + D * V) * _);
    else {
        const _ = D * Math.sqrt(M * M - 1);
        Z = ee => {
            const ae = Math.exp(-M * D * ee)
              , K = Math.min(_ * ee, 300);
            return d - ae * ((C + M * D * V) * Math.sinh(K) + _ * V * Math.cosh(K)) / _
        }
    }
    const H = {
        calculatedDuration: A && w || null,
        next: _ => {
            const ee = Z(_);
            if (A)
                p.done = _ >= w;
            else {
                let ae = 0;
                M < 1 && (ae = _ === 0 ? Jt(C) : Yp(Z, _, ee));
                const K = Math.abs(ae) <= a
                  , ye = Math.abs(d - ee) <= c;
                p.done = K && ye
            }
            return p.value = p.done ? d : ee,
            p
        }
        ,
        toString: () => {
            const _ = Math.min(op(H), yl)
              , ee = ap(ae => H.next(_ * ae).value, _, 30);
            return _ + "ms " + ee
        }
    };
    return H
}
function Ff({keyframes: r, velocity: s=0, power: i=.8, timeConstant: a=325, bounceDamping: c=10, bounceStiffness: f=500, modifyTarget: d, min: p, max: m, restDelta: g=.5, restSpeed: v}) {
    const w = r[0]
      , j = {
        done: !1,
        value: w
    }
      , A = K => p !== void 0 && K < p || m !== void 0 && K > m
      , C = K => p === void 0 ? m : m === void 0 || Math.abs(p - K) < Math.abs(m - K) ? p : m;
    let M = i * s;
    const V = w + M
      , D = d === void 0 ? V : d(V);
    D !== V && (M = D - w);
    const Y = K => -M * Math.exp(-K / a)
      , Z = K => D + Y(K)
      , H = K => {
        const ye = Y(K)
          , Te = Z(K);
        j.done = Math.abs(ye) <= g,
        j.value = j.done ? D : Te
    }
    ;
    let _, ee;
    const ae = K => {
        A(j.value) && (_ = K,
        ee = Op({
            keyframes: [j.value, C(j.value)],
            velocity: Yp(Z, K, j.value),
            damping: c,
            stiffness: f,
            restDelta: g,
            restSpeed: v
        }))
    }
    ;
    return ae(0),
    {
        calculatedDuration: null,
        next: K => {
            let ye = !1;
            return !ee && _ === void 0 && (ye = !0,
            H(K),
            ae(K)),
            _ !== void 0 && K >= _ ? ee.next(K - _) : (!ye && H(K),
            j)
        }
    }
}
const Kv = ws(.42, 0, 1, 1)
  , Gv = ws(0, 0, .58, 1)
  , Ip = ws(.42, 0, .58, 1)
  , Xv = r => Array.isArray(r) && typeof r[0] != "number"
  , qv = {
    linear: ct,
    easeIn: Kv,
    easeInOut: Ip,
    easeOut: Gv,
    circIn: su,
    circInOut: jp,
    circOut: Rp,
    backIn: ru,
    backInOut: wp,
    backOut: xp,
    anticipate: Lp
}
  , Zf = r => {
    if (Xl(r)) {
        Qh(r.length === 4);
        const [s,i,a,c] = r;
        return ws(s, i, a, c)
    } else if (typeof r == "string")
        return qv[r];
    return r
}
;
function ex(r, s, i) {
    const a = []
      , c = i || Qp
      , f = r.length - 1;
    for (let d = 0; d < f; d++) {
        let p = c(r[d], r[d + 1]);
        if (s) {
            const m = Array.isArray(s) ? s[d] || ct : s;
            p = Ls(m, p)
        }
        a.push(p)
    }
    return a
}
function tx(r, s, {clamp: i=!0, ease: a, mixer: c}={}) {
    const f = r.length;
    if (Qh(f === s.length),
    f === 1)
        return () => s[0];
    if (f === 2 && s[0] === s[1])
        return () => s[1];
    const d = r[0] === r[1];
    r[0] > r[f - 1] && (r = [...r].reverse(),
    s = [...s].reverse());
    const p = ex(s, a, c)
      , m = p.length
      , g = v => {
        if (d && v < r[0])
            return s[0];
        let w = 0;
        if (m > 1)
            for (; w < r.length - 2 && !(v < r[w + 1]); w++)
                ;
        const j = pr(r[w], r[w + 1], v);
        return p[w](j)
    }
    ;
    return i ? v => g($t(r[0], r[f - 1], v)) : g
}
function nx(r, s) {
    const i = r[r.length - 1];
    for (let a = 1; a <= s; a++) {
        const c = pr(0, s, a);
        r.push(ze(i, 1, c))
    }
}
function rx(r) {
    const s = [0];
    return nx(s, r.length - 1),
    s
}
function sx(r, s) {
    return r.map(i => i * s)
}
function ix(r, s) {
    return r.map( () => s || Ip).splice(0, r.length - 1)
}
function Ui({duration: r=300, keyframes: s, times: i, ease: a="easeInOut"}) {
    const c = Xv(a) ? a.map(Zf) : Zf(a)
      , f = {
        done: !1,
        value: s[0]
    }
      , d = sx(i && i.length === s.length ? i : rx(s), r)
      , p = tx(d, s, {
        ease: Array.isArray(c) ? c : ix(s, c)
    });
    return {
        calculatedDuration: r,
        next: m => (f.value = p(m),
        f.done = m >= r,
        f)
    }
}
const ox = r => {
    const s = ({timestamp: i}) => r(i);
    return {
        start: () => xe.update(s, !0),
        stop: () => yn(s),
        now: () => _e.isProcessing ? _e.timestamp : Bt.now()
    }
}
  , ax = {
    decay: Ff,
    inertia: Ff,
    tween: Ui,
    keyframes: Ui,
    spring: Op
}
  , lx = r => r / 100;
class cu extends Wp {
    constructor(s) {
        super(s),
        this.holdTime = null,
        this.cancelTime = null,
        this.currentTime = 0,
        this.playbackSpeed = 1,
        this.pendingPlayState = "running",
        this.startTime = null,
        this.state = "idle",
        this.stop = () => {
            if (this.resolver.cancel(),
            this.isStopped = !0,
            this.state === "idle")
                return;
            this.teardown();
            const {onStop: m} = this.options;
            m && m()
        }
        ;
        const {name: i, motionValue: a, element: c, keyframes: f} = this.options
          , d = c?.KeyframeResolver || lu
          , p = (m, g) => this.onKeyframesResolved(m, g);
        this.resolver = new d(f,p,i,a,c),
        this.resolver.scheduleResolve()
    }
    flatten() {
        super.flatten(),
        this._resolved && Object.assign(this._resolved, this.initPlayback(this._resolved.keyframes))
    }
    initPlayback(s) {
        const {type: i="keyframes", repeat: a=0, repeatDelay: c=0, repeatType: f, velocity: d=0} = this.options
          , p = Gl(i) ? i : ax[i] || Ui;
        let m, g;
        p !== Ui && typeof s[0] != "number" && (m = Ls(lx, Qp(s[0], s[1])),
        s = [0, 100]);
        const v = p({
            ...this.options,
            keyframes: s
        });
        f === "mirror" && (g = p({
            ...this.options,
            keyframes: [...s].reverse(),
            velocity: -d
        })),
        v.calculatedDuration === null && (v.calculatedDuration = op(v));
        const {calculatedDuration: w} = v
          , j = w + c
          , A = j * (a + 1) - c;
        return {
            generator: v,
            mirroredGenerator: g,
            mapPercentToKeyframes: m,
            calculatedDuration: w,
            resolvedDuration: j,
            totalDuration: A
        }
    }
    onPostResolved() {
        const {autoplay: s=!0} = this.options;
        this.play(),
        this.pendingPlayState === "paused" || !s ? this.pause() : this.state = this.pendingPlayState
    }
    tick(s, i=!1) {
        const {resolved: a} = this;
        if (!a) {
            const {keyframes: K} = this.options;
            return {
                done: !0,
                value: K[K.length - 1]
            }
        }
        const {finalKeyframe: c, generator: f, mirroredGenerator: d, mapPercentToKeyframes: p, keyframes: m, calculatedDuration: g, totalDuration: v, resolvedDuration: w} = a;
        if (this.startTime === null)
            return f.next(0);
        const {delay: j, repeat: A, repeatType: C, repeatDelay: M, onUpdate: V} = this.options;
        this.speed > 0 ? this.startTime = Math.min(this.startTime, s) : this.speed < 0 && (this.startTime = Math.min(s - v / this.speed, this.startTime)),
        i ? this.currentTime = s : this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = Math.round(s - this.startTime) * this.speed;
        const D = this.currentTime - j * (this.speed >= 0 ? 1 : -1)
          , Y = this.speed >= 0 ? D < 0 : D > v;
        this.currentTime = Math.max(D, 0),
        this.state === "finished" && this.holdTime === null && (this.currentTime = v);
        let Z = this.currentTime
          , H = f;
        if (A) {
            const K = Math.min(this.currentTime, v) / w;
            let ye = Math.floor(K)
              , Te = K % 1;
            !Te && K >= 1 && (Te = 1),
            Te === 1 && ye--,
            ye = Math.min(ye, A + 1),
            ye % 2 && (C === "reverse" ? (Te = 1 - Te,
            M && (Te -= M / w)) : C === "mirror" && (H = d)),
            Z = $t(0, 1, Te) * w
        }
        const _ = Y ? {
            done: !1,
            value: m[0]
        } : H.next(Z);
        p && (_.value = p(_.value));
        let {done: ee} = _;
        !Y && g !== null && (ee = this.speed >= 0 ? this.currentTime >= v : this.currentTime <= 0);
        const ae = this.holdTime === null && (this.state === "finished" || this.state === "running" && ee);
        return ae && c !== void 0 && (_.value = to(m, this.options, c)),
        V && V(_.value),
        ae && this.finish(),
        _
    }
    get duration() {
        const {resolved: s} = this;
        return s ? Ut(s.calculatedDuration) : 0
    }
    get time() {
        return Ut(this.currentTime)
    }
    set time(s) {
        s = Jt(s),
        this.currentTime = s,
        this.holdTime !== null || this.speed === 0 ? this.holdTime = s : this.driver && (this.startTime = this.driver.now() - s / this.speed)
    }
    get speed() {
        return this.playbackSpeed
    }
    set speed(s) {
        const i = this.playbackSpeed !== s;
        this.playbackSpeed = s,
        i && (this.time = Ut(this.currentTime))
    }
    play() {
        if (this.resolver.isScheduled || this.resolver.resume(),
        !this._resolved) {
            this.pendingPlayState = "running";
            return
        }
        if (this.isStopped)
            return;
        const {driver: s=ox, onPlay: i, startTime: a} = this.options;
        this.driver || (this.driver = s(f => this.tick(f))),
        i && i();
        const c = this.driver.now();
        this.holdTime !== null ? this.startTime = c - this.holdTime : this.startTime ? this.state === "finished" && (this.startTime = c) : this.startTime = a ?? this.calcStartTime(),
        this.state === "finished" && this.updateFinishedPromise(),
        this.cancelTime = this.startTime,
        this.holdTime = null,
        this.state = "running",
        this.driver.start()
    }
    pause() {
        var s;
        if (!this._resolved) {
            this.pendingPlayState = "paused";
            return
        }
        this.state = "paused",
        this.holdTime = (s = this.currentTime) !== null && s !== void 0 ? s : 0
    }
    complete() {
        this.state !== "running" && this.play(),
        this.pendingPlayState = this.state = "finished",
        this.holdTime = null
    }
    finish() {
        this.teardown(),
        this.state = "finished";
        const {onComplete: s} = this.options;
        s && s()
    }
    cancel() {
        this.cancelTime !== null && this.tick(this.cancelTime),
        this.teardown(),
        this.updateFinishedPromise()
    }
    teardown() {
        this.state = "idle",
        this.stopDriver(),
        this.resolveFinishedPromise(),
        this.updateFinishedPromise(),
        this.startTime = this.cancelTime = null,
        this.resolver.cancel()
    }
    stopDriver() {
        this.driver && (this.driver.stop(),
        this.driver = void 0)
    }
    sample(s) {
        return this.startTime = 0,
        this.tick(s, !0)
    }
}
const ux = new Set(["opacity", "clipPath", "filter", "transform"]);
function cx(r, s, i, {delay: a=0, duration: c=300, repeat: f=0, repeatType: d="loop", ease: p="easeInOut", times: m}={}) {
    const g = {
        [s]: i
    };
    m && (g.offset = m);
    const v = up(p, c);
    return Array.isArray(v) && (g.easing = v),
    r.animate(g, {
        delay: a,
        duration: c,
        easing: Array.isArray(v) ? "linear" : v,
        fill: "both",
        iterations: f + 1,
        direction: d === "reverse" ? "alternate" : "normal"
    })
}
const dx = Bl( () => Object.hasOwnProperty.call(Element.prototype, "animate"))
  , $i = 10
  , fx = 2e4;
function hx(r) {
    return Gl(r.type) || r.type === "spring" || !lp(r.ease)
}
function px(r, s) {
    const i = new cu({
        ...s,
        keyframes: r,
        repeat: 0,
        delay: 0,
        isGenerator: !0
    });
    let a = {
        done: !1,
        value: r[0]
    };
    const c = [];
    let f = 0;
    for (; !a.done && f < fx; )
        a = i.sample(f),
        c.push(a.value),
        f += $i;
    return {
        times: void 0,
        keyframes: c,
        duration: f - $i,
        ease: "linear"
    }
}
const Fp = {
    anticipate: Lp,
    backInOut: wp,
    circInOut: jp
};
function mx(r) {
    return r in Fp
}
class Jf extends Wp {
    constructor(s) {
        super(s);
        const {name: i, motionValue: a, element: c, keyframes: f} = this.options;
        this.resolver = new Dp(f, (d, p) => this.onKeyframesResolved(d, p),i,a,c),
        this.resolver.scheduleResolve()
    }
    initPlayback(s, i) {
        let {duration: a=300, times: c, ease: f, type: d, motionValue: p, name: m, startTime: g} = this.options;
        if (!p.owner || !p.owner.current)
            return !1;
        if (typeof f == "string" && Zi() && mx(f) && (f = Fp[f]),
        hx(this.options)) {
            const {onComplete: w, onUpdate: j, motionValue: A, element: C, ...M} = this.options
              , V = px(s, M);
            s = V.keyframes,
            s.length === 1 && (s[1] = s[0]),
            a = V.duration,
            c = V.times,
            f = V.ease,
            d = "keyframes"
        }
        const v = cx(p.owner.current, m, s, {
            ...this.options,
            duration: a,
            times: c,
            ease: f
        });
        return v.startTime = g ?? this.calcStartTime(),
        this.pendingTimeline ? (Nf(v, this.pendingTimeline),
        this.pendingTimeline = void 0) : v.onfinish = () => {
            const {onComplete: w} = this.options;
            p.set(to(s, this.options, i)),
            w && w(),
            this.cancel(),
            this.resolveFinishedPromise()
        }
        ,
        {
            animation: v,
            duration: a,
            times: c,
            type: d,
            ease: f,
            keyframes: s
        }
    }
    get duration() {
        const {resolved: s} = this;
        if (!s)
            return 0;
        const {duration: i} = s;
        return Ut(i)
    }
    get time() {
        const {resolved: s} = this;
        if (!s)
            return 0;
        const {animation: i} = s;
        return Ut(i.currentTime || 0)
    }
    set time(s) {
        const {resolved: i} = this;
        if (!i)
            return;
        const {animation: a} = i;
        a.currentTime = Jt(s)
    }
    get speed() {
        const {resolved: s} = this;
        if (!s)
            return 1;
        const {animation: i} = s;
        return i.playbackRate
    }
    set speed(s) {
        const {resolved: i} = this;
        if (!i)
            return;
        const {animation: a} = i;
        a.playbackRate = s
    }
    get state() {
        const {resolved: s} = this;
        if (!s)
            return "idle";
        const {animation: i} = s;
        return i.playState
    }
    get startTime() {
        const {resolved: s} = this;
        if (!s)
            return null;
        const {animation: i} = s;
        return i.startTime
    }
    attachTimeline(s) {
        if (!this._resolved)
            this.pendingTimeline = s;
        else {
            const {resolved: i} = this;
            if (!i)
                return ct;
            const {animation: a} = i;
            Nf(a, s)
        }
        return ct
    }
    play() {
        if (this.isStopped)
            return;
        const {resolved: s} = this;
        if (!s)
            return;
        const {animation: i} = s;
        i.playState === "finished" && this.updateFinishedPromise(),
        i.play()
    }
    pause() {
        const {resolved: s} = this;
        if (!s)
            return;
        const {animation: i} = s;
        i.pause()
    }
    stop() {
        if (this.resolver.cancel(),
        this.isStopped = !0,
        this.state === "idle")
            return;
        this.resolveFinishedPromise(),
        this.updateFinishedPromise();
        const {resolved: s} = this;
        if (!s)
            return;
        const {animation: i, keyframes: a, duration: c, type: f, ease: d, times: p} = s;
        if (i.playState === "idle" || i.playState === "finished")
            return;
        if (this.time) {
            const {motionValue: g, onUpdate: v, onComplete: w, element: j, ...A} = this.options
              , C = new cu({
                ...A,
                keyframes: a,
                duration: c,
                type: f,
                ease: d,
                times: p,
                isGenerator: !0
            })
              , M = Jt(this.time);
            g.setWithVelocity(C.sample(M - $i).value, C.sample(M).value, $i)
        }
        const {onStop: m} = this.options;
        m && m(),
        this.cancel()
    }
    complete() {
        const {resolved: s} = this;
        s && s.animation.finish()
    }
    cancel() {
        const {resolved: s} = this;
        s && s.animation.cancel()
    }
    static supports(s) {
        const {motionValue: i, name: a, repeatDelay: c, repeatType: f, damping: d, type: p} = s;
        if (!i || !i.owner || !(i.owner.current instanceof HTMLElement))
            return !1;
        const {onUpdate: m, transformTemplate: g} = i.owner.getProps();
        return dx() && a && ux.has(a) && !m && !g && !c && f !== "mirror" && d !== 0 && p !== "inertia"
    }
}
const yx = {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restSpeed: 10
}
  , gx = r => ({
    type: "spring",
    stiffness: 550,
    damping: r === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10
})
  , vx = {
    type: "keyframes",
    duration: .8
}
  , xx = {
    type: "keyframes",
    ease: [.25, .1, .35, 1],
    duration: .3
}
  , wx = (r, {keyframes: s}) => s.length > 2 ? vx : Dn.has(r) ? r.startsWith("scale") ? gx(s[1]) : yx : xx;
function Lx({when: r, delay: s, delayChildren: i, staggerChildren: a, staggerDirection: c, repeat: f, repeatType: d, repeatDelay: p, from: m, elapsed: g, ...v}) {
    return !!Object.keys(v).length
}
const du = (r, s, i, a={}, c, f) => d => {
    const p = Kl(a, r) || {}
      , m = p.delay || a.delay || 0;
    let {elapsed: g=0} = a;
    g = g - Jt(m);
    let v = {
        keyframes: Array.isArray(i) ? i : [null, i],
        ease: "easeOut",
        velocity: s.getVelocity(),
        ...p,
        delay: -g,
        onUpdate: j => {
            s.set(j),
            p.onUpdate && p.onUpdate(j)
        }
        ,
        onComplete: () => {
            d(),
            p.onComplete && p.onComplete()
        }
        ,
        name: r,
        motionValue: s,
        element: f ? void 0 : c
    };
    Lx(p) || (v = {
        ...v,
        ...wx(r, v)
    }),
    v.duration && (v.duration = Jt(v.duration)),
    v.repeatDelay && (v.repeatDelay = Jt(v.repeatDelay)),
    v.from !== void 0 && (v.keyframes[0] = v.from);
    let w = !1;
    if ((v.type === !1 || v.duration === 0 && !v.repeatDelay) && (v.duration = 0,
    v.delay === 0 && (w = !0)),
    w && !f && s.get() !== void 0) {
        const j = to(v.keyframes, p);
        if (j !== void 0)
            return xe.update( () => {
                v.onUpdate(j),
                v.onComplete()
            }
            ),
            new Qg([])
    }
    return !f && Jf.supports(v) ? new Jf(v) : new cu(v)
}
;
function Rx({protectedKeys: r, needsAnimating: s}, i) {
    const a = r.hasOwnProperty(i) && s[i] !== !0;
    return s[i] = !1,
    a
}
function Zp(r, s, {delay: i=0, transitionOverride: a, type: c}={}) {
    var f;
    let {transition: d=r.getDefaultTransition(), transitionEnd: p, ...m} = s;
    a && (d = a);
    const g = []
      , v = c && r.animationState && r.animationState.getState()[c];
    for (const w in m) {
        const j = r.getValue(w, (f = r.latestValues[w]) !== null && f !== void 0 ? f : null)
          , A = m[w];
        if (A === void 0 || v && Rx(v, w))
            continue;
        const C = {
            delay: i,
            ...Kl(d || {}, w)
        };
        let M = !1;
        if (window.MotionHandoffAnimation) {
            const D = mp(r);
            if (D) {
                const Y = window.MotionHandoffAnimation(D, w, xe);
                Y !== null && (C.startTime = Y,
                M = !0)
            }
        }
        vl(r, w),
        j.start(du(w, j, A, r.shouldReduceMotion && hp.has(w) ? {
            type: !1
        } : C, r, M));
        const V = j.animation;
        V && g.push(V)
    }
    return p && Promise.all(g).then( () => {
        xe.update( () => {
            p && ev(r, p)
        }
        )
    }
    ),
    g
}
function Tl(r, s, i={}) {
    var a;
    const c = eo(r, s, i.type === "exit" ? (a = r.presenceContext) === null || a === void 0 ? void 0 : a.custom : void 0);
    let {transition: f=r.getDefaultTransition() || {}} = c || {};
    i.transitionOverride && (f = i.transitionOverride);
    const d = c ? () => Promise.all(Zp(r, c, i)) : () => Promise.resolve()
      , p = r.variantChildren && r.variantChildren.size ? (g=0) => {
        const {delayChildren: v=0, staggerChildren: w, staggerDirection: j} = f;
        return jx(r, s, v + g, w, j, i)
    }
    : () => Promise.resolve()
      , {when: m} = f;
    if (m) {
        const [g,v] = m === "beforeChildren" ? [d, p] : [p, d];
        return g().then( () => v())
    } else
        return Promise.all([d(), p(i.delay)])
}
function jx(r, s, i=0, a=0, c=1, f) {
    const d = []
      , p = (r.variantChildren.size - 1) * a
      , m = c === 1 ? (g=0) => g * a : (g=0) => p - g * a;
    return Array.from(r.variantChildren).sort(zx).forEach( (g, v) => {
        g.notify("AnimationStart", s),
        d.push(Tl(g, s, {
            ...f,
            delay: i + m(v)
        }).then( () => g.notify("AnimationComplete", s)))
    }
    ),
    Promise.all(d)
}
function zx(r, s) {
    return r.sortNodePosition(s)
}
function Tx(r, s, i={}) {
    r.notify("AnimationStart", s);
    let a;
    if (Array.isArray(s)) {
        const c = s.map(f => Tl(r, f, i));
        a = Promise.all(c)
    } else if (typeof s == "string")
        a = Tl(r, s, i);
    else {
        const c = typeof s == "function" ? eo(r, s, i.custom) : s;
        a = Promise.all(Zp(r, c, i))
    }
    return a.then( () => {
        r.notify("AnimationComplete", s)
    }
    )
}
const Ex = Wl.length;
function Jp(r) {
    if (!r)
        return;
    if (!r.isControllingVariants) {
        const i = r.parent ? Jp(r.parent) || {} : {};
        return r.props.initial !== void 0 && (i.initial = r.props.initial),
        i
    }
    const s = {};
    for (let i = 0; i < Ex; i++) {
        const a = Wl[i]
          , c = r.props[a];
        (ps(c) || c === !1) && (s[a] = c)
    }
    return s
}
const Sx = [...Dl].reverse()
  , Ax = Dl.length;
function Mx(r) {
    return s => Promise.all(s.map( ({animation: i, options: a}) => Tx(r, i, a)))
}
function Nx(r) {
    let s = Mx(r)
      , i = Uf()
      , a = !0;
    const c = m => (g, v) => {
        var w;
        const j = eo(r, v, m === "exit" ? (w = r.presenceContext) === null || w === void 0 ? void 0 : w.custom : void 0);
        if (j) {
            const {transition: A, transitionEnd: C, ...M} = j;
            g = {
                ...g,
                ...M,
                ...C
            }
        }
        return g
    }
    ;
    function f(m) {
        s = m(r)
    }
    function d(m) {
        const {props: g} = r
          , v = Jp(r.parent) || {}
          , w = []
          , j = new Set;
        let A = {}
          , C = 1 / 0;
        for (let V = 0; V < Ax; V++) {
            const D = Sx[V]
              , Y = i[D]
              , Z = g[D] !== void 0 ? g[D] : v[D]
              , H = ps(Z)
              , _ = D === m ? Y.isActive : null;
            _ === !1 && (C = V);
            let ee = Z === v[D] && Z !== g[D] && H;
            if (ee && a && r.manuallyAnimateOnMount && (ee = !1),
            Y.protectedKeys = {
                ...A
            },
            !Y.isActive && _ === null || !Z && !Y.prevProp || Xi(Z) || typeof Z == "boolean")
                continue;
            const ae = kx(Y.prevProp, Z);
            let K = ae || D === m && Y.isActive && !ee && H || V > C && H
              , ye = !1;
            const Te = Array.isArray(Z) ? Z : [Z];
            let Ke = Te.reduce(c(D), {});
            _ === !1 && (Ke = {});
            const {prevResolvedValues: st={}} = Y
              , Je = {
                ...st,
                ...Ke
            }
              , Ge = se => {
                K = !0,
                j.has(se) && (ye = !0,
                j.delete(se)),
                Y.needsAnimating[se] = !0;
                const W = r.getValue(se);
                W && (W.liveStyle = !1)
            }
            ;
            for (const se in Je) {
                const W = Ke[se]
                  , G = st[se];
                if (A.hasOwnProperty(se))
                    continue;
                let O = !1;
                ml(W) && ml(G) ? O = !ip(W, G) : O = W !== G,
                O ? W != null ? Ge(se) : j.add(se) : W !== void 0 && j.has(se) ? Ge(se) : Y.protectedKeys[se] = !0
            }
            Y.prevProp = Z,
            Y.prevResolvedValues = Ke,
            Y.isActive && (A = {
                ...A,
                ...Ke
            }),
            a && r.blockInitialAnimation && (K = !1),
            K && (!(ee && ae) || ye) && w.push(...Te.map(se => ({
                animation: se,
                options: {
                    type: D
                }
            })))
        }
        if (j.size) {
            const V = {};
            j.forEach(D => {
                const Y = r.getBaseTarget(D)
                  , Z = r.getValue(D);
                Z && (Z.liveStyle = !0),
                V[D] = Y ?? null
            }
            ),
            w.push({
                animation: V
            })
        }
        let M = !!w.length;
        return a && (g.initial === !1 || g.initial === g.animate) && !r.manuallyAnimateOnMount && (M = !1),
        a = !1,
        M ? s(w) : Promise.resolve()
    }
    function p(m, g) {
        var v;
        if (i[m].isActive === g)
            return Promise.resolve();
        (v = r.variantChildren) === null || v === void 0 || v.forEach(j => {
            var A;
            return (A = j.animationState) === null || A === void 0 ? void 0 : A.setActive(m, g)
        }
        ),
        i[m].isActive = g;
        const w = d(m);
        for (const j in i)
            i[j].protectedKeys = {};
        return w
    }
    return {
        animateChanges: d,
        setActive: p,
        setAnimateFunction: f,
        getState: () => i,
        reset: () => {
            i = Uf(),
            a = !0
        }
    }
}
function kx(r, s) {
    return typeof s == "string" ? s !== r : Array.isArray(s) ? !ip(s, r) : !1
}
function bn(r=!1) {
    return {
        isActive: r,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {}
    }
}
function Uf() {
    return {
        animate: bn(!0),
        whileInView: bn(),
        whileHover: bn(),
        whileTap: bn(),
        whileDrag: bn(),
        whileFocus: bn(),
        exit: bn()
    }
}
class vn {
    constructor(s) {
        this.isMounted = !1,
        this.node = s
    }
    update() {}
}
class bx extends vn {
    constructor(s) {
        super(s),
        s.animationState || (s.animationState = Nx(s))
    }
    updateAnimationControlsSubscription() {
        const {animate: s} = this.node.getProps();
        Xi(s) && (this.unmountControls = s.subscribe(this.node))
    }
    mount() {
        this.updateAnimationControlsSubscription()
    }
    update() {
        const {animate: s} = this.node.getProps()
          , {animate: i} = this.node.prevProps || {};
        s !== i && this.updateAnimationControlsSubscription()
    }
    unmount() {
        var s;
        this.node.animationState.reset(),
        (s = this.unmountControls) === null || s === void 0 || s.call(this)
    }
}
let Vx = 0;
class Px extends vn {
    constructor() {
        super(...arguments),
        this.id = Vx++
    }
    update() {
        if (!this.node.presenceContext)
            return;
        const {isPresent: s, onExitComplete: i} = this.node.presenceContext
          , {isPresent: a} = this.node.prevPresenceContext || {};
        if (!this.node.animationState || s === a)
            return;
        const c = this.node.animationState.setActive("exit", !s);
        i && !s && c.then( () => i(this.id))
    }
    mount() {
        const {register: s} = this.node.presenceContext || {};
        s && (this.unmount = s(this.id))
    }
    unmount() {}
}
const Cx = {
    animation: {
        Feature: bx
    },
    exit: {
        Feature: Px
    }
};
function vs(r, s, i, a={
    passive: !0
}) {
    return r.addEventListener(s, i, a),
    () => r.removeEventListener(s, i)
}
function Rs(r) {
    return {
        point: {
            x: r.pageX,
            y: r.pageY
        }
    }
}
const Bx = r => s => ql(s) && r(s, Rs(s));
function ds(r, s, i, a) {
    return vs(r, s, Bx(i), a)
}
const $f = (r, s) => Math.abs(r - s);
function Dx(r, s) {
    const i = $f(r.x, s.x)
      , a = $f(r.y, s.y);
    return Math.sqrt(i ** 2 + a ** 2)
}
class Up {
    constructor(s, i, {transformPagePoint: a, contextWindow: c, dragSnapToOrigin: f=!1}={}) {
        if (this.startEvent = null,
        this.lastMoveEvent = null,
        this.lastMoveEventInfo = null,
        this.handlers = {},
        this.contextWindow = window,
        this.updatePoint = () => {
            if (!(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const w = ul(this.lastMoveEventInfo, this.history)
              , j = this.startEvent !== null
              , A = Dx(w.offset, {
                x: 0,
                y: 0
            }) >= 3;
            if (!j && !A)
                return;
            const {point: C} = w
              , {timestamp: M} = _e;
            this.history.push({
                ...C,
                timestamp: M
            });
            const {onStart: V, onMove: D} = this.handlers;
            j || (V && V(this.lastMoveEvent, w),
            this.startEvent = this.lastMoveEvent),
            D && D(this.lastMoveEvent, w)
        }
        ,
        this.handlePointerMove = (w, j) => {
            this.lastMoveEvent = w,
            this.lastMoveEventInfo = ll(j, this.transformPagePoint),
            xe.update(this.updatePoint, !0)
        }
        ,
        this.handlePointerUp = (w, j) => {
            this.end();
            const {onEnd: A, onSessionEnd: C, resumeAnimation: M} = this.handlers;
            if (this.dragSnapToOrigin && M && M(),
            !(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const V = ul(w.type === "pointercancel" ? this.lastMoveEventInfo : ll(j, this.transformPagePoint), this.history);
            this.startEvent && A && A(w, V),
            C && C(w, V)
        }
        ,
        !ql(s))
            return;
        this.dragSnapToOrigin = f,
        this.handlers = i,
        this.transformPagePoint = a,
        this.contextWindow = c || window;
        const d = Rs(s)
          , p = ll(d, this.transformPagePoint)
          , {point: m} = p
          , {timestamp: g} = _e;
        this.history = [{
            ...m,
            timestamp: g
        }];
        const {onSessionStart: v} = i;
        v && v(s, ul(p, this.history)),
        this.removeListeners = Ls(ds(this.contextWindow, "pointermove", this.handlePointerMove), ds(this.contextWindow, "pointerup", this.handlePointerUp), ds(this.contextWindow, "pointercancel", this.handlePointerUp))
    }
    updateHandlers(s) {
        this.handlers = s
    }
    end() {
        this.removeListeners && this.removeListeners(),
        yn(this.updatePoint)
    }
}
function ll(r, s) {
    return s ? {
        point: s(r.point)
    } : r
}
function Hf(r, s) {
    return {
        x: r.x - s.x,
        y: r.y - s.y
    }
}
function ul({point: r}, s) {
    return {
        point: r,
        delta: Hf(r, $p(s)),
        offset: Hf(r, Wx(s)),
        velocity: _x(s, .1)
    }
}
function Wx(r) {
    return r[0]
}
function $p(r) {
    return r[r.length - 1]
}
function _x(r, s) {
    if (r.length < 2)
        return {
            x: 0,
            y: 0
        };
    let i = r.length - 1
      , a = null;
    const c = $p(r);
    for (; i >= 0 && (a = r[i],
    !(c.timestamp - a.timestamp > Jt(s))); )
        i--;
    if (!a)
        return {
            x: 0,
            y: 0
        };
    const f = Ut(c.timestamp - a.timestamp);
    if (f === 0)
        return {
            x: 0,
            y: 0
        };
    const d = {
        x: (c.x - a.x) / f,
        y: (c.y - a.y) / f
    };
    return d.x === 1 / 0 && (d.x = 0),
    d.y === 1 / 0 && (d.y = 0),
    d
}
const Hp = 1e-4
  , Qx = 1 - Hp
  , Yx = 1 + Hp
  , Kp = .01
  , Ox = 0 - Kp
  , Ix = 0 + Kp;
function dt(r) {
    return r.max - r.min
}
function Fx(r, s, i) {
    return Math.abs(r - s) <= i
}
function Kf(r, s, i, a=.5) {
    r.origin = a,
    r.originPoint = ze(s.min, s.max, r.origin),
    r.scale = dt(i) / dt(s),
    r.translate = ze(i.min, i.max, r.origin) - r.originPoint,
    (r.scale >= Qx && r.scale <= Yx || isNaN(r.scale)) && (r.scale = 1),
    (r.translate >= Ox && r.translate <= Ix || isNaN(r.translate)) && (r.translate = 0)
}
function fs(r, s, i, a) {
    Kf(r.x, s.x, i.x, a ? a.originX : void 0),
    Kf(r.y, s.y, i.y, a ? a.originY : void 0)
}
function Gf(r, s, i) {
    r.min = i.min + s.min,
    r.max = r.min + dt(s)
}
function Zx(r, s, i) {
    Gf(r.x, s.x, i.x),
    Gf(r.y, s.y, i.y)
}
function Xf(r, s, i) {
    r.min = s.min - i.min,
    r.max = r.min + dt(s)
}
function hs(r, s, i) {
    Xf(r.x, s.x, i.x),
    Xf(r.y, s.y, i.y)
}
function Jx(r, {min: s, max: i}, a) {
    return s !== void 0 && r < s ? r = a ? ze(s, r, a.min) : Math.max(r, s) : i !== void 0 && r > i && (r = a ? ze(i, r, a.max) : Math.min(r, i)),
    r
}
function qf(r, s, i) {
    return {
        min: s !== void 0 ? r.min + s : void 0,
        max: i !== void 0 ? r.max + i - (r.max - r.min) : void 0
    }
}
function Ux(r, {top: s, left: i, bottom: a, right: c}) {
    return {
        x: qf(r.x, i, c),
        y: qf(r.y, s, a)
    }
}
function eh(r, s) {
    let i = s.min - r.min
      , a = s.max - r.max;
    return s.max - s.min < r.max - r.min && ([i,a] = [a, i]),
    {
        min: i,
        max: a
    }
}
function $x(r, s) {
    return {
        x: eh(r.x, s.x),
        y: eh(r.y, s.y)
    }
}
function Hx(r, s) {
    let i = .5;
    const a = dt(r)
      , c = dt(s);
    return c > a ? i = pr(s.min, s.max - a, r.min) : a > c && (i = pr(r.min, r.max - c, s.min)),
    $t(0, 1, i)
}
function Kx(r, s) {
    const i = {};
    return s.min !== void 0 && (i.min = s.min - r.min),
    s.max !== void 0 && (i.max = s.max - r.min),
    i
}
const El = .35;
function Gx(r=El) {
    return r === !1 ? r = 0 : r === !0 && (r = El),
    {
        x: th(r, "left", "right"),
        y: th(r, "top", "bottom")
    }
}
function th(r, s, i) {
    return {
        min: nh(r, s),
        max: nh(r, i)
    }
}
function nh(r, s) {
    return typeof r == "number" ? r : r[s] || 0
}
const rh = () => ({
    translate: 0,
    scale: 1,
    origin: 0,
    originPoint: 0
})
  , dr = () => ({
    x: rh(),
    y: rh()
})
  , sh = () => ({
    min: 0,
    max: 0
})
  , Ne = () => ({
    x: sh(),
    y: sh()
});
function wt(r) {
    return [r("x"), r("y")]
}
function Gp({top: r, left: s, right: i, bottom: a}) {
    return {
        x: {
            min: s,
            max: i
        },
        y: {
            min: r,
            max: a
        }
    }
}
function Xx({x: r, y: s}) {
    return {
        top: s.min,
        right: r.max,
        bottom: s.max,
        left: r.min
    }
}
function qx(r, s) {
    if (!s)
        return r;
    const i = s({
        x: r.left,
        y: r.top
    })
      , a = s({
        x: r.right,
        y: r.bottom
    });
    return {
        top: i.y,
        left: i.x,
        bottom: a.y,
        right: a.x
    }
}
function cl(r) {
    return r === void 0 || r === 1
}
function Sl({scale: r, scaleX: s, scaleY: i}) {
    return !cl(r) || !cl(s) || !cl(i)
}
function Vn(r) {
    return Sl(r) || Xp(r) || r.z || r.rotate || r.rotateX || r.rotateY || r.skewX || r.skewY
}
function Xp(r) {
    return ih(r.x) || ih(r.y)
}
function ih(r) {
    return r && r !== "0%"
}
function Hi(r, s, i) {
    const a = r - i
      , c = s * a;
    return i + c
}
function oh(r, s, i, a, c) {
    return c !== void 0 && (r = Hi(r, c, a)),
    Hi(r, i, a) + s
}
function Al(r, s=0, i=1, a, c) {
    r.min = oh(r.min, s, i, a, c),
    r.max = oh(r.max, s, i, a, c)
}
function qp(r, {x: s, y: i}) {
    Al(r.x, s.translate, s.scale, s.originPoint),
    Al(r.y, i.translate, i.scale, i.originPoint)
}
const ah = .999999999999
  , lh = 1.0000000000001;
function ew(r, s, i, a=!1) {
    const c = i.length;
    if (!c)
        return;
    s.x = s.y = 1;
    let f, d;
    for (let p = 0; p < c; p++) {
        f = i[p],
        d = f.projectionDelta;
        const {visualElement: m} = f.options;
        m && m.props.style && m.props.style.display === "contents" || (a && f.options.layoutScroll && f.scroll && f !== f.root && hr(r, {
            x: -f.scroll.offset.x,
            y: -f.scroll.offset.y
        }),
        d && (s.x *= d.x.scale,
        s.y *= d.y.scale,
        qp(r, d)),
        a && Vn(f.latestValues) && hr(r, f.latestValues))
    }
    s.x < lh && s.x > ah && (s.x = 1),
    s.y < lh && s.y > ah && (s.y = 1)
}
function fr(r, s) {
    r.min = r.min + s,
    r.max = r.max + s
}
function uh(r, s, i, a, c=.5) {
    const f = ze(r.min, r.max, c);
    Al(r, s, i, f, a)
}
function hr(r, s) {
    uh(r.x, s.x, s.scaleX, s.scale, s.originX),
    uh(r.y, s.y, s.scaleY, s.scale, s.originY)
}
function em(r, s) {
    return Gp(qx(r.getBoundingClientRect(), s))
}
function tw(r, s, i) {
    const a = em(r, i)
      , {scroll: c} = s;
    return c && (fr(a.x, c.offset.x),
    fr(a.y, c.offset.y)),
    a
}
const tm = ({current: r}) => r ? r.ownerDocument.defaultView : null
  , nw = new WeakMap;
class rw {
    constructor(s) {
        this.openDragLock = null,
        this.isDragging = !1,
        this.currentDirection = null,
        this.originPoint = {
            x: 0,
            y: 0
        },
        this.constraints = !1,
        this.hasMutatedConstraints = !1,
        this.elastic = Ne(),
        this.visualElement = s
    }
    start(s, {snapToCursor: i=!1}={}) {
        const {presenceContext: a} = this.visualElement;
        if (a && a.isPresent === !1)
            return;
        const c = v => {
            const {dragSnapToOrigin: w} = this.getProps();
            w ? this.pauseAnimation() : this.stopAnimation(),
            i && this.snapToCursor(Rs(v).point)
        }
          , f = (v, w) => {
            const {drag: j, dragPropagation: A, onDragStart: C} = this.getProps();
            if (j && !A && (this.openDragLock && this.openDragLock(),
            this.openDragLock = Hg(j),
            !this.openDragLock))
                return;
            this.isDragging = !0,
            this.currentDirection = null,
            this.resolveConstraints(),
            this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0,
            this.visualElement.projection.target = void 0),
            wt(V => {
                let D = this.getAxisMotionValue(V).get() || 0;
                if (Ct.test(D)) {
                    const {projection: Y} = this.visualElement;
                    if (Y && Y.layout) {
                        const Z = Y.layout.layoutBox[V];
                        Z && (D = dt(Z) * (parseFloat(D) / 100))
                    }
                }
                this.originPoint[V] = D
            }
            ),
            C && xe.postRender( () => C(v, w)),
            vl(this.visualElement, "transform");
            const {animationState: M} = this.visualElement;
            M && M.setActive("whileDrag", !0)
        }
          , d = (v, w) => {
            const {dragPropagation: j, dragDirectionLock: A, onDirectionLock: C, onDrag: M} = this.getProps();
            if (!j && !this.openDragLock)
                return;
            const {offset: V} = w;
            if (A && this.currentDirection === null) {
                this.currentDirection = sw(V),
                this.currentDirection !== null && C && C(this.currentDirection);
                return
            }
            this.updateAxis("x", w.point, V),
            this.updateAxis("y", w.point, V),
            this.visualElement.render(),
            M && M(v, w)
        }
          , p = (v, w) => this.stop(v, w)
          , m = () => wt(v => {
            var w;
            return this.getAnimationState(v) === "paused" && ((w = this.getAxisMotionValue(v).animation) === null || w === void 0 ? void 0 : w.play())
        }
        )
          , {dragSnapToOrigin: g} = this.getProps();
        this.panSession = new Up(s,{
            onSessionStart: c,
            onStart: f,
            onMove: d,
            onSessionEnd: p,
            resumeAnimation: m
        },{
            transformPagePoint: this.visualElement.getTransformPagePoint(),
            dragSnapToOrigin: g,
            contextWindow: tm(this.visualElement)
        })
    }
    stop(s, i) {
        const a = this.isDragging;
        if (this.cancel(),
        !a)
            return;
        const {velocity: c} = i;
        this.startAnimation(c);
        const {onDragEnd: f} = this.getProps();
        f && xe.postRender( () => f(s, i))
    }
    cancel() {
        this.isDragging = !1;
        const {projection: s, animationState: i} = this.visualElement;
        s && (s.isAnimationBlocked = !1),
        this.panSession && this.panSession.end(),
        this.panSession = void 0;
        const {dragPropagation: a} = this.getProps();
        !a && this.openDragLock && (this.openDragLock(),
        this.openDragLock = null),
        i && i.setActive("whileDrag", !1)
    }
    updateAxis(s, i, a) {
        const {drag: c} = this.getProps();
        if (!a || !Wi(s, c, this.currentDirection))
            return;
        const f = this.getAxisMotionValue(s);
        let d = this.originPoint[s] + a[s];
        this.constraints && this.constraints[s] && (d = Jx(d, this.constraints[s], this.elastic[s])),
        f.set(d)
    }
    resolveConstraints() {
        var s;
        const {dragConstraints: i, dragElastic: a} = this.getProps()
          , c = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (s = this.visualElement.projection) === null || s === void 0 ? void 0 : s.layout
          , f = this.constraints;
        i && ur(i) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : i && c ? this.constraints = Ux(c.layoutBox, i) : this.constraints = !1,
        this.elastic = Gx(a),
        f !== this.constraints && c && this.constraints && !this.hasMutatedConstraints && wt(d => {
            this.constraints !== !1 && this.getAxisMotionValue(d) && (this.constraints[d] = Kx(c.layoutBox[d], this.constraints[d]))
        }
        )
    }
    resolveRefConstraints() {
        const {dragConstraints: s, onMeasureDragConstraints: i} = this.getProps();
        if (!s || !ur(s))
            return !1;
        const a = s.current
          , {projection: c} = this.visualElement;
        if (!c || !c.layout)
            return !1;
        const f = tw(a, c.root, this.visualElement.getTransformPagePoint());
        let d = $x(c.layout.layoutBox, f);
        if (i) {
            const p = i(Xx(d));
            this.hasMutatedConstraints = !!p,
            p && (d = Gp(p))
        }
        return d
    }
    startAnimation(s) {
        const {drag: i, dragMomentum: a, dragElastic: c, dragTransition: f, dragSnapToOrigin: d, onDragTransitionEnd: p} = this.getProps()
          , m = this.constraints || {}
          , g = wt(v => {
            if (!Wi(v, i, this.currentDirection))
                return;
            let w = m && m[v] || {};
            d && (w = {
                min: 0,
                max: 0
            });
            const j = c ? 200 : 1e6
              , A = c ? 40 : 1e7
              , C = {
                type: "inertia",
                velocity: a ? s[v] : 0,
                bounceStiffness: j,
                bounceDamping: A,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...f,
                ...w
            };
            return this.startAxisValueAnimation(v, C)
        }
        );
        return Promise.all(g).then(p)
    }
    startAxisValueAnimation(s, i) {
        const a = this.getAxisMotionValue(s);
        return vl(this.visualElement, s),
        a.start(du(s, a, 0, i, this.visualElement, !1))
    }
    stopAnimation() {
        wt(s => this.getAxisMotionValue(s).stop())
    }
    pauseAnimation() {
        wt(s => {
            var i;
            return (i = this.getAxisMotionValue(s).animation) === null || i === void 0 ? void 0 : i.pause()
        }
        )
    }
    getAnimationState(s) {
        var i;
        return (i = this.getAxisMotionValue(s).animation) === null || i === void 0 ? void 0 : i.state
    }
    getAxisMotionValue(s) {
        const i = `_drag${s.toUpperCase()}`
          , a = this.visualElement.getProps()
          , c = a[i];
        return c || this.visualElement.getValue(s, (a.initial ? a.initial[s] : void 0) || 0)
    }
    snapToCursor(s) {
        wt(i => {
            const {drag: a} = this.getProps();
            if (!Wi(i, a, this.currentDirection))
                return;
            const {projection: c} = this.visualElement
              , f = this.getAxisMotionValue(i);
            if (c && c.layout) {
                const {min: d, max: p} = c.layout.layoutBox[i];
                f.set(s[i] - ze(d, p, .5))
            }
        }
        )
    }
    scalePositionWithinConstraints() {
        if (!this.visualElement.current)
            return;
        const {drag: s, dragConstraints: i} = this.getProps()
          , {projection: a} = this.visualElement;
        if (!ur(i) || !a || !this.constraints)
            return;
        this.stopAnimation();
        const c = {
            x: 0,
            y: 0
        };
        wt(d => {
            const p = this.getAxisMotionValue(d);
            if (p && this.constraints !== !1) {
                const m = p.get();
                c[d] = Hx({
                    min: m,
                    max: m
                }, this.constraints[d])
            }
        }
        );
        const {transformTemplate: f} = this.visualElement.getProps();
        this.visualElement.current.style.transform = f ? f({}, "") : "none",
        a.root && a.root.updateScroll(),
        a.updateLayout(),
        this.resolveConstraints(),
        wt(d => {
            if (!Wi(d, s, null))
                return;
            const p = this.getAxisMotionValue(d)
              , {min: m, max: g} = this.constraints[d];
            p.set(ze(m, g, c[d]))
        }
        )
    }
    addListeners() {
        if (!this.visualElement.current)
            return;
        nw.set(this.visualElement, this);
        const s = this.visualElement.current
          , i = ds(s, "pointerdown", m => {
            const {drag: g, dragListener: v=!0} = this.getProps();
            g && v && this.start(m)
        }
        )
          , a = () => {
            const {dragConstraints: m} = this.getProps();
            ur(m) && m.current && (this.constraints = this.resolveRefConstraints())
        }
          , {projection: c} = this.visualElement
          , f = c.addEventListener("measure", a);
        c && !c.layout && (c.root && c.root.updateScroll(),
        c.updateLayout()),
        xe.read(a);
        const d = vs(window, "resize", () => this.scalePositionWithinConstraints())
          , p = c.addEventListener("didUpdate", ( ({delta: m, hasLayoutChanged: g}) => {
            this.isDragging && g && (wt(v => {
                const w = this.getAxisMotionValue(v);
                w && (this.originPoint[v] += m[v].translate,
                w.set(w.get() + m[v].translate))
            }
            ),
            this.visualElement.render())
        }
        ));
        return () => {
            d(),
            i(),
            f(),
            p && p()
        }
    }
    getProps() {
        const s = this.visualElement.getProps()
          , {drag: i=!1, dragDirectionLock: a=!1, dragPropagation: c=!1, dragConstraints: f=!1, dragElastic: d=El, dragMomentum: p=!0} = s;
        return {
            ...s,
            drag: i,
            dragDirectionLock: a,
            dragPropagation: c,
            dragConstraints: f,
            dragElastic: d,
            dragMomentum: p
        }
    }
}
function Wi(r, s, i) {
    return (s === !0 || s === r) && (i === null || i === r)
}
function sw(r, s=10) {
    let i = null;
    return Math.abs(r.y) > s ? i = "y" : Math.abs(r.x) > s && (i = "x"),
    i
}
class iw extends vn {
    constructor(s) {
        super(s),
        this.removeGroupControls = ct,
        this.removeListeners = ct,
        this.controls = new rw(s)
    }
    mount() {
        const {dragControls: s} = this.node.getProps();
        s && (this.removeGroupControls = s.subscribe(this.controls)),
        this.removeListeners = this.controls.addListeners() || ct
    }
    unmount() {
        this.removeGroupControls(),
        this.removeListeners()
    }
}
const ch = r => (s, i) => {
    r && xe.postRender( () => r(s, i))
}
;
class ow extends vn {
    constructor() {
        super(...arguments),
        this.removePointerDownListener = ct
    }
    onPointerDown(s) {
        this.session = new Up(s,this.createPanHandlers(),{
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: tm(this.node)
        })
    }
    createPanHandlers() {
        const {onPanSessionStart: s, onPanStart: i, onPan: a, onPanEnd: c} = this.node.getProps();
        return {
            onSessionStart: ch(s),
            onStart: ch(i),
            onMove: a,
            onEnd: (f, d) => {
                delete this.session,
                c && xe.postRender( () => c(f, d))
            }
        }
    }
    mount() {
        this.removePointerDownListener = ds(this.node.current, "pointerdown", s => this.onPointerDown(s))
    }
    update() {
        this.session && this.session.updateHandlers(this.createPanHandlers())
    }
    unmount() {
        this.removePointerDownListener(),
        this.session && this.session.end()
    }
}
const Oi = {
    hasAnimatedSinceResize: !0,
    hasEverUpdated: !1
};
function dh(r, s) {
    return s.max === s.min ? 0 : r / (s.max - s.min) * 100
}
const os = {
    correct: (r, s) => {
        if (!s.target)
            return r;
        if (typeof r == "string")
            if (te.test(r))
                r = parseFloat(r);
            else
                return r;
        const i = dh(r, s.target.x)
          , a = dh(r, s.target.y);
        return `${i}% ${a}%`
    }
}
  , aw = {
    correct: (r, {treeScale: s, projectionDelta: i}) => {
        const a = r
          , c = gn.parse(r);
        if (c.length > 5)
            return a;
        const f = gn.createTransformer(r)
          , d = typeof c[0] != "number" ? 1 : 0
          , p = i.x.scale * s.x
          , m = i.y.scale * s.y;
        c[0 + d] /= p,
        c[1 + d] /= m;
        const g = ze(p, m, .5);
        return typeof c[2 + d] == "number" && (c[2 + d] /= g),
        typeof c[3 + d] == "number" && (c[3 + d] /= g),
        f(c)
    }
};
class lw extends I.Component {
    componentDidMount() {
        const {visualElement: s, layoutGroup: i, switchLayoutGroup: a, layoutId: c} = this.props
          , {projection: f} = s;
        Ag(uw),
        f && (i.group && i.group.add(f),
        a && a.register && c && a.register(f),
        f.root.didUpdate(),
        f.addEventListener("animationComplete", () => {
            this.safeToRemove()
        }
        ),
        f.setOptions({
            ...f.options,
            onExitComplete: () => this.safeToRemove()
        })),
        Oi.hasEverUpdated = !0
    }
    getSnapshotBeforeUpdate(s) {
        const {layoutDependency: i, visualElement: a, drag: c, isPresent: f} = this.props
          , d = a.projection;
        return d && (d.isPresent = f,
        c || s.layoutDependency !== i || i === void 0 ? d.willUpdate() : this.safeToRemove(),
        s.isPresent !== f && (f ? d.promote() : d.relegate() || xe.postRender( () => {
            const p = d.getStack();
            (!p || !p.members.length) && this.safeToRemove()
        }
        ))),
        null
    }
    componentDidUpdate() {
        const {projection: s} = this.props.visualElement;
        s && (s.root.didUpdate(),
        Ql.postRender( () => {
            !s.currentAnimation && s.isLead() && this.safeToRemove()
        }
        ))
    }
    componentWillUnmount() {
        const {visualElement: s, layoutGroup: i, switchLayoutGroup: a} = this.props
          , {projection: c} = s;
        c && (c.scheduleCheckAfterUnmount(),
        i && i.group && i.group.remove(c),
        a && a.deregister && a.deregister(c))
    }
    safeToRemove() {
        const {safeToRemove: s} = this.props;
        s && s()
    }
    render() {
        return null
    }
}
function nm(r) {
    const [s,i] = Wh()
      , a = I.useContext(bl);
    return y.jsx(lw, {
        ...r,
        layoutGroup: a,
        switchLayoutGroup: I.useContext(Jh),
        isPresent: s,
        safeToRemove: i
    })
}
const uw = {
    borderRadius: {
        ...os,
        applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
    },
    borderTopLeftRadius: os,
    borderTopRightRadius: os,
    borderBottomLeftRadius: os,
    borderBottomRightRadius: os,
    boxShadow: aw
};
function cw(r, s, i) {
    const a = Ze(r) ? r : ys(r);
    return a.start(du("", a, s, i)),
    a.animation
}
function dw(r) {
    return r instanceof SVGElement && r.tagName !== "svg"
}
const fw = (r, s) => r.depth - s.depth;
class hw {
    constructor() {
        this.children = [],
        this.isDirty = !1
    }
    add(s) {
        eu(this.children, s),
        this.isDirty = !0
    }
    remove(s) {
        tu(this.children, s),
        this.isDirty = !0
    }
    forEach(s) {
        this.isDirty && this.children.sort(fw),
        this.isDirty = !1,
        this.children.forEach(s)
    }
}
function pw(r, s) {
    const i = Bt.now()
      , a = ({timestamp: c}) => {
        const f = c - i;
        f >= s && (yn(a),
        r(f - s))
    }
    ;
    return xe.read(a, !0),
    () => yn(a)
}
const rm = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"]
  , mw = rm.length
  , fh = r => typeof r == "string" ? parseFloat(r) : r
  , hh = r => typeof r == "number" || te.test(r);
function yw(r, s, i, a, c, f) {
    c ? (r.opacity = ze(0, i.opacity !== void 0 ? i.opacity : 1, gw(a)),
    r.opacityExit = ze(s.opacity !== void 0 ? s.opacity : 1, 0, vw(a))) : f && (r.opacity = ze(s.opacity !== void 0 ? s.opacity : 1, i.opacity !== void 0 ? i.opacity : 1, a));
    for (let d = 0; d < mw; d++) {
        const p = `border${rm[d]}Radius`;
        let m = ph(s, p)
          , g = ph(i, p);
        if (m === void 0 && g === void 0)
            continue;
        m || (m = 0),
        g || (g = 0),
        m === 0 || g === 0 || hh(m) === hh(g) ? (r[p] = Math.max(ze(fh(m), fh(g), a), 0),
        (Ct.test(g) || Ct.test(m)) && (r[p] += "%")) : r[p] = g
    }
    (s.rotate || i.rotate) && (r.rotate = ze(s.rotate || 0, i.rotate || 0, a))
}
function ph(r, s) {
    return r[s] !== void 0 ? r[s] : r.borderRadius
}
const gw = sm(0, .5, Rp)
  , vw = sm(.5, .95, ct);
function sm(r, s, i) {
    return a => a < r ? 0 : a > s ? 1 : i(pr(r, s, a))
}
function mh(r, s) {
    r.min = s.min,
    r.max = s.max
}
function xt(r, s) {
    mh(r.x, s.x),
    mh(r.y, s.y)
}
function yh(r, s) {
    r.translate = s.translate,
    r.scale = s.scale,
    r.originPoint = s.originPoint,
    r.origin = s.origin
}
function gh(r, s, i, a, c) {
    return r -= s,
    r = Hi(r, 1 / i, a),
    c !== void 0 && (r = Hi(r, 1 / c, a)),
    r
}
function xw(r, s=0, i=1, a=.5, c, f=r, d=r) {
    if (Ct.test(s) && (s = parseFloat(s),
    s = ze(d.min, d.max, s / 100) - d.min),
    typeof s != "number")
        return;
    let p = ze(f.min, f.max, a);
    r === f && (p -= s),
    r.min = gh(r.min, s, i, p, c),
    r.max = gh(r.max, s, i, p, c)
}
function vh(r, s, [i,a,c], f, d) {
    xw(r, s[i], s[a], s[c], s.scale, f, d)
}
const ww = ["x", "scaleX", "originX"]
  , Lw = ["y", "scaleY", "originY"];
function xh(r, s, i, a) {
    vh(r.x, s, ww, i ? i.x : void 0, a ? a.x : void 0),
    vh(r.y, s, Lw, i ? i.y : void 0, a ? a.y : void 0)
}
function wh(r) {
    return r.translate === 0 && r.scale === 1
}
function im(r) {
    return wh(r.x) && wh(r.y)
}
function Lh(r, s) {
    return r.min === s.min && r.max === s.max
}
function Rw(r, s) {
    return Lh(r.x, s.x) && Lh(r.y, s.y)
}
function Rh(r, s) {
    return Math.round(r.min) === Math.round(s.min) && Math.round(r.max) === Math.round(s.max)
}
function om(r, s) {
    return Rh(r.x, s.x) && Rh(r.y, s.y)
}
function jh(r) {
    return dt(r.x) / dt(r.y)
}
function zh(r, s) {
    return r.translate === s.translate && r.scale === s.scale && r.originPoint === s.originPoint
}
class jw {
    constructor() {
        this.members = []
    }
    add(s) {
        eu(this.members, s),
        s.scheduleRender()
    }
    remove(s) {
        if (tu(this.members, s),
        s === this.prevLead && (this.prevLead = void 0),
        s === this.lead) {
            const i = this.members[this.members.length - 1];
            i && this.promote(i)
        }
    }
    relegate(s) {
        const i = this.members.findIndex(c => s === c);
        if (i === 0)
            return !1;
        let a;
        for (let c = i; c >= 0; c--) {
            const f = this.members[c];
            if (f.isPresent !== !1) {
                a = f;
                break
            }
        }
        return a ? (this.promote(a),
        !0) : !1
    }
    promote(s, i) {
        const a = this.lead;
        if (s !== a && (this.prevLead = a,
        this.lead = s,
        s.show(),
        a)) {
            a.instance && a.scheduleRender(),
            s.scheduleRender(),
            s.resumeFrom = a,
            i && (s.resumeFrom.preserveOpacity = !0),
            a.snapshot && (s.snapshot = a.snapshot,
            s.snapshot.latestValues = a.animationValues || a.latestValues),
            s.root && s.root.isUpdating && (s.isLayoutDirty = !0);
            const {crossfade: c} = s.options;
            c === !1 && a.hide()
        }
    }
    exitAnimationComplete() {
        this.members.forEach(s => {
            const {options: i, resumingFrom: a} = s;
            i.onExitComplete && i.onExitComplete(),
            a && a.options.onExitComplete && a.options.onExitComplete()
        }
        )
    }
    scheduleRender() {
        this.members.forEach(s => {
            s.instance && s.scheduleRender(!1)
        }
        )
    }
    removeLeadSnapshot() {
        this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
    }
}
function zw(r, s, i) {
    let a = "";
    const c = r.x.translate / s.x
      , f = r.y.translate / s.y
      , d = i?.z || 0;
    if ((c || f || d) && (a = `translate3d(${c}px, ${f}px, ${d}px) `),
    (s.x !== 1 || s.y !== 1) && (a += `scale(${1 / s.x}, ${1 / s.y}) `),
    i) {
        const {transformPerspective: g, rotate: v, rotateX: w, rotateY: j, skewX: A, skewY: C} = i;
        g && (a = `perspective(${g}px) ${a}`),
        v && (a += `rotate(${v}deg) `),
        w && (a += `rotateX(${w}deg) `),
        j && (a += `rotateY(${j}deg) `),
        A && (a += `skewX(${A}deg) `),
        C && (a += `skewY(${C}deg) `)
    }
    const p = r.x.scale * s.x
      , m = r.y.scale * s.y;
    return (p !== 1 || m !== 1) && (a += `scale(${p}, ${m})`),
    a || "none"
}
const Pn = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0
}
  , us = typeof window < "u" && window.MotionDebug !== void 0
  , dl = ["", "X", "Y", "Z"]
  , Tw = {
    visibility: "hidden"
}
  , Th = 1e3;
let Ew = 0;
function fl(r, s, i, a) {
    const {latestValues: c} = s;
    c[r] && (i[r] = c[r],
    s.setStaticValue(r, 0),
    a && (a[r] = 0))
}
function am(r) {
    if (r.hasCheckedOptimisedAppear = !0,
    r.root === r)
        return;
    const {visualElement: s} = r.options;
    if (!s)
        return;
    const i = mp(s);
    if (window.MotionHasOptimisedAnimation(i, "transform")) {
        const {layout: c, layoutId: f} = r.options;
        window.MotionCancelOptimisedAnimation(i, "transform", xe, !(c || f))
    }
    const {parent: a} = r;
    a && !a.hasCheckedOptimisedAppear && am(a)
}
function lm({attachResizeListener: r, defaultParent: s, measureScroll: i, checkIsScrollRoot: a, resetTransform: c}) {
    return class {
        constructor(d={}, p=s?.()) {
            this.id = Ew++,
            this.animationId = 0,
            this.children = new Set,
            this.options = {},
            this.isTreeAnimating = !1,
            this.isAnimationBlocked = !1,
            this.isLayoutDirty = !1,
            this.isProjectionDirty = !1,
            this.isSharedProjectionDirty = !1,
            this.isTransformDirty = !1,
            this.updateManuallyBlocked = !1,
            this.updateBlockedByResize = !1,
            this.isUpdating = !1,
            this.isSVG = !1,
            this.needsReset = !1,
            this.shouldResetTransform = !1,
            this.hasCheckedOptimisedAppear = !1,
            this.treeScale = {
                x: 1,
                y: 1
            },
            this.eventHandlers = new Map,
            this.hasTreeAnimated = !1,
            this.updateScheduled = !1,
            this.scheduleUpdate = () => this.update(),
            this.projectionUpdateScheduled = !1,
            this.checkUpdateFailed = () => {
                this.isUpdating && (this.isUpdating = !1,
                this.clearAllSnapshots())
            }
            ,
            this.updateProjection = () => {
                this.projectionUpdateScheduled = !1,
                us && (Pn.totalNodes = Pn.resolvedTargetDeltas = Pn.recalculatedProjection = 0),
                this.nodes.forEach(Mw),
                this.nodes.forEach(Pw),
                this.nodes.forEach(Cw),
                this.nodes.forEach(Nw),
                us && window.MotionDebug.record(Pn)
            }
            ,
            this.resolvedRelativeTargetAt = 0,
            this.hasProjected = !1,
            this.isVisible = !0,
            this.animationProgress = 0,
            this.sharedNodes = new Map,
            this.latestValues = d,
            this.root = p ? p.root || p : this,
            this.path = p ? [...p.path, p] : [],
            this.parent = p,
            this.depth = p ? p.depth + 1 : 0;
            for (let m = 0; m < this.path.length; m++)
                this.path[m].shouldResetTransform = !0;
            this.root === this && (this.nodes = new hw)
        }
        addEventListener(d, p) {
            return this.eventHandlers.has(d) || this.eventHandlers.set(d, new nu),
            this.eventHandlers.get(d).add(p)
        }
        notifyListeners(d, ...p) {
            const m = this.eventHandlers.get(d);
            m && m.notify(...p)
        }
        hasListeners(d) {
            return this.eventHandlers.has(d)
        }
        mount(d, p=this.root.hasTreeAnimated) {
            if (this.instance)
                return;
            this.isSVG = dw(d),
            this.instance = d;
            const {layoutId: m, layout: g, visualElement: v} = this.options;
            if (v && !v.current && v.mount(d),
            this.root.nodes.add(this),
            this.parent && this.parent.children.add(this),
            p && (g || m) && (this.isLayoutDirty = !0),
            r) {
                let w;
                const j = () => this.root.updateBlockedByResize = !1;
                r(d, () => {
                    this.root.updateBlockedByResize = !0,
                    w && w(),
                    w = pw(j, 250),
                    Oi.hasAnimatedSinceResize && (Oi.hasAnimatedSinceResize = !1,
                    this.nodes.forEach(Sh))
                }
                )
            }
            m && this.root.registerSharedNode(m, this),
            this.options.animate !== !1 && v && (m || g) && this.addEventListener("didUpdate", ({delta: w, hasLayoutChanged: j, hasRelativeTargetChanged: A, layout: C}) => {
                if (this.isTreeAnimationBlocked()) {
                    this.target = void 0,
                    this.relativeTarget = void 0;
                    return
                }
                const M = this.options.transition || v.getDefaultTransition() || Qw
                  , {onLayoutAnimationStart: V, onLayoutAnimationComplete: D} = v.getProps()
                  , Y = !this.targetLayout || !om(this.targetLayout, C) || A
                  , Z = !j && A;
                if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || Z || j && (Y || !this.currentAnimation)) {
                    this.resumeFrom && (this.resumingFrom = this.resumeFrom,
                    this.resumingFrom.resumingFrom = void 0),
                    this.setAnimationOrigin(w, Z);
                    const H = {
                        ...Kl(M, "layout"),
                        onPlay: V,
                        onComplete: D
                    };
                    (v.shouldReduceMotion || this.options.layoutRoot) && (H.delay = 0,
                    H.type = !1),
                    this.startAnimation(H)
                } else
                    j || Sh(this),
                    this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                this.targetLayout = C
            }
            )
        }
        unmount() {
            this.options.layoutId && this.willUpdate(),
            this.root.nodes.remove(this);
            const d = this.getStack();
            d && d.remove(this),
            this.parent && this.parent.children.delete(this),
            this.instance = void 0,
            yn(this.updateProjection)
        }
        blockUpdate() {
            this.updateManuallyBlocked = !0
        }
        unblockUpdate() {
            this.updateManuallyBlocked = !1
        }
        isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize
        }
        isTreeAnimationBlocked() {
            return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
        }
        startUpdate() {
            this.isUpdateBlocked() || (this.isUpdating = !0,
            this.nodes && this.nodes.forEach(Bw),
            this.animationId++)
        }
        getTransformTemplate() {
            const {visualElement: d} = this.options;
            return d && d.getProps().transformTemplate
        }
        willUpdate(d=!0) {
            if (this.root.hasTreeAnimated = !0,
            this.root.isUpdateBlocked()) {
                this.options.onExitComplete && this.options.onExitComplete();
                return
            }
            if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && am(this),
            !this.root.isUpdating && this.root.startUpdate(),
            this.isLayoutDirty)
                return;
            this.isLayoutDirty = !0;
            for (let v = 0; v < this.path.length; v++) {
                const w = this.path[v];
                w.shouldResetTransform = !0,
                w.updateScroll("snapshot"),
                w.options.layoutRoot && w.willUpdate(!1)
            }
            const {layoutId: p, layout: m} = this.options;
            if (p === void 0 && !m)
                return;
            const g = this.getTransformTemplate();
            this.prevTransformTemplateValue = g ? g(this.latestValues, "") : void 0,
            this.updateSnapshot(),
            d && this.notifyListeners("willUpdate")
        }
        update() {
            if (this.updateScheduled = !1,
            this.isUpdateBlocked()) {
                this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(Eh);
                return
            }
            this.isUpdating || this.nodes.forEach(bw),
            this.isUpdating = !1,
            this.nodes.forEach(Vw),
            this.nodes.forEach(Sw),
            this.nodes.forEach(Aw),
            this.clearAllSnapshots();
            const p = Bt.now();
            _e.delta = $t(0, 1e3 / 60, p - _e.timestamp),
            _e.timestamp = p,
            _e.isProcessing = !0,
            nl.update.process(_e),
            nl.preRender.process(_e),
            nl.render.process(_e),
            _e.isProcessing = !1
        }
        didUpdate() {
            this.updateScheduled || (this.updateScheduled = !0,
            Ql.read(this.scheduleUpdate))
        }
        clearAllSnapshots() {
            this.nodes.forEach(kw),
            this.sharedNodes.forEach(Dw)
        }
        scheduleUpdateProjection() {
            this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0,
            xe.preRender(this.updateProjection, !1, !0))
        }
        scheduleCheckAfterUnmount() {
            xe.postRender( () => {
                this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            }
            )
        }
        updateSnapshot() {
            this.snapshot || !this.instance || (this.snapshot = this.measure())
        }
        updateLayout() {
            if (!this.instance || (this.updateScroll(),
            !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
                return;
            if (this.resumeFrom && !this.resumeFrom.instance)
                for (let m = 0; m < this.path.length; m++)
                    this.path[m].updateScroll();
            const d = this.layout;
            this.layout = this.measure(!1),
            this.layoutCorrected = Ne(),
            this.isLayoutDirty = !1,
            this.projectionDelta = void 0,
            this.notifyListeners("measure", this.layout.layoutBox);
            const {visualElement: p} = this.options;
            p && p.notify("LayoutMeasure", this.layout.layoutBox, d ? d.layoutBox : void 0)
        }
        updateScroll(d="measure") {
            let p = !!(this.options.layoutScroll && this.instance);
            if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === d && (p = !1),
            p) {
                const m = a(this.instance);
                this.scroll = {
                    animationId: this.root.animationId,
                    phase: d,
                    isRoot: m,
                    offset: i(this.instance),
                    wasRoot: this.scroll ? this.scroll.isRoot : m
                }
            }
        }
        resetTransform() {
            if (!c)
                return;
            const d = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout
              , p = this.projectionDelta && !im(this.projectionDelta)
              , m = this.getTransformTemplate()
              , g = m ? m(this.latestValues, "") : void 0
              , v = g !== this.prevTransformTemplateValue;
            d && (p || Vn(this.latestValues) || v) && (c(this.instance, g),
            this.shouldResetTransform = !1,
            this.scheduleRender())
        }
        measure(d=!0) {
            const p = this.measurePageBox();
            let m = this.removeElementScroll(p);
            return d && (m = this.removeTransform(m)),
            Yw(m),
            {
                animationId: this.root.animationId,
                measuredBox: p,
                layoutBox: m,
                latestValues: {},
                source: this.id
            }
        }
        measurePageBox() {
            var d;
            const {visualElement: p} = this.options;
            if (!p)
                return Ne();
            const m = p.measureViewportBox();
            if (!(((d = this.scroll) === null || d === void 0 ? void 0 : d.wasRoot) || this.path.some(Ow))) {
                const {scroll: v} = this.root;
                v && (fr(m.x, v.offset.x),
                fr(m.y, v.offset.y))
            }
            return m
        }
        removeElementScroll(d) {
            var p;
            const m = Ne();
            if (xt(m, d),
            !((p = this.scroll) === null || p === void 0) && p.wasRoot)
                return m;
            for (let g = 0; g < this.path.length; g++) {
                const v = this.path[g]
                  , {scroll: w, options: j} = v;
                v !== this.root && w && j.layoutScroll && (w.wasRoot && xt(m, d),
                fr(m.x, w.offset.x),
                fr(m.y, w.offset.y))
            }
            return m
        }
        applyTransform(d, p=!1) {
            const m = Ne();
            xt(m, d);
            for (let g = 0; g < this.path.length; g++) {
                const v = this.path[g];
                !p && v.options.layoutScroll && v.scroll && v !== v.root && hr(m, {
                    x: -v.scroll.offset.x,
                    y: -v.scroll.offset.y
                }),
                Vn(v.latestValues) && hr(m, v.latestValues)
            }
            return Vn(this.latestValues) && hr(m, this.latestValues),
            m
        }
        removeTransform(d) {
            const p = Ne();
            xt(p, d);
            for (let m = 0; m < this.path.length; m++) {
                const g = this.path[m];
                if (!g.instance || !Vn(g.latestValues))
                    continue;
                Sl(g.latestValues) && g.updateSnapshot();
                const v = Ne()
                  , w = g.measurePageBox();
                xt(v, w),
                xh(p, g.latestValues, g.snapshot ? g.snapshot.layoutBox : void 0, v)
            }
            return Vn(this.latestValues) && xh(p, this.latestValues),
            p
        }
        setTargetDelta(d) {
            this.targetDelta = d,
            this.root.scheduleUpdateProjection(),
            this.isProjectionDirty = !0
        }
        setOptions(d) {
            this.options = {
                ...this.options,
                ...d,
                crossfade: d.crossfade !== void 0 ? d.crossfade : !0
            }
        }
        clearMeasurements() {
            this.scroll = void 0,
            this.layout = void 0,
            this.snapshot = void 0,
            this.prevTransformTemplateValue = void 0,
            this.targetDelta = void 0,
            this.target = void 0,
            this.isLayoutDirty = !1
        }
        forceRelativeParentToResolveTarget() {
            this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== _e.timestamp && this.relativeParent.resolveTargetDelta(!0)
        }
        resolveTargetDelta(d=!1) {
            var p;
            const m = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = m.isProjectionDirty),
            this.isTransformDirty || (this.isTransformDirty = m.isTransformDirty),
            this.isSharedProjectionDirty || (this.isSharedProjectionDirty = m.isSharedProjectionDirty);
            const g = !!this.resumingFrom || this !== m;
            if (!(d || g && this.isSharedProjectionDirty || this.isProjectionDirty || !((p = this.parent) === null || p === void 0) && p.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
                return;
            const {layout: w, layoutId: j} = this.options;
            if (!(!this.layout || !(w || j))) {
                if (this.resolvedRelativeTargetAt = _e.timestamp,
                !this.targetDelta && !this.relativeTarget) {
                    const A = this.getClosestProjectingParent();
                    A && A.layout && this.animationProgress !== 1 ? (this.relativeParent = A,
                    this.forceRelativeParentToResolveTarget(),
                    this.relativeTarget = Ne(),
                    this.relativeTargetOrigin = Ne(),
                    hs(this.relativeTargetOrigin, this.layout.layoutBox, A.layout.layoutBox),
                    xt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                }
                if (!(!this.relativeTarget && !this.targetDelta)) {
                    if (this.target || (this.target = Ne(),
                    this.targetWithTransforms = Ne()),
                    this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(),
                    Zx(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : xt(this.target, this.layout.layoutBox),
                    qp(this.target, this.targetDelta)) : xt(this.target, this.layout.layoutBox),
                    this.attemptToResolveRelativeTarget) {
                        this.attemptToResolveRelativeTarget = !1;
                        const A = this.getClosestProjectingParent();
                        A && !!A.resumingFrom == !!this.resumingFrom && !A.options.layoutScroll && A.target && this.animationProgress !== 1 ? (this.relativeParent = A,
                        this.forceRelativeParentToResolveTarget(),
                        this.relativeTarget = Ne(),
                        this.relativeTargetOrigin = Ne(),
                        hs(this.relativeTargetOrigin, this.target, A.target),
                        xt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                    }
                    us && Pn.resolvedTargetDeltas++
                }
            }
        }
        getClosestProjectingParent() {
            if (!(!this.parent || Sl(this.parent.latestValues) || Xp(this.parent.latestValues)))
                return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
        }
        isProjecting() {
            return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
        }
        calcProjection() {
            var d;
            const p = this.getLead()
              , m = !!this.resumingFrom || this !== p;
            let g = !0;
            if ((this.isProjectionDirty || !((d = this.parent) === null || d === void 0) && d.isProjectionDirty) && (g = !1),
            m && (this.isSharedProjectionDirty || this.isTransformDirty) && (g = !1),
            this.resolvedRelativeTargetAt === _e.timestamp && (g = !1),
            g)
                return;
            const {layout: v, layoutId: w} = this.options;
            if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation),
            this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
            !this.layout || !(v || w))
                return;
            xt(this.layoutCorrected, this.layout.layoutBox);
            const j = this.treeScale.x
              , A = this.treeScale.y;
            ew(this.layoutCorrected, this.treeScale, this.path, m),
            p.layout && !p.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (p.target = p.layout.layoutBox,
            p.targetWithTransforms = Ne());
            const {target: C} = p;
            if (!C) {
                this.prevProjectionDelta && (this.createProjectionDeltas(),
                this.scheduleRender());
                return
            }
            !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (yh(this.prevProjectionDelta.x, this.projectionDelta.x),
            yh(this.prevProjectionDelta.y, this.projectionDelta.y)),
            fs(this.projectionDelta, this.layoutCorrected, C, this.latestValues),
            (this.treeScale.x !== j || this.treeScale.y !== A || !zh(this.projectionDelta.x, this.prevProjectionDelta.x) || !zh(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0,
            this.scheduleRender(),
            this.notifyListeners("projectionUpdate", C)),
            us && Pn.recalculatedProjection++
        }
        hide() {
            this.isVisible = !1
        }
        show() {
            this.isVisible = !0
        }
        scheduleRender(d=!0) {
            var p;
            if ((p = this.options.visualElement) === null || p === void 0 || p.scheduleRender(),
            d) {
                const m = this.getStack();
                m && m.scheduleRender()
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
        }
        createProjectionDeltas() {
            this.prevProjectionDelta = dr(),
            this.projectionDelta = dr(),
            this.projectionDeltaWithTransform = dr()
        }
        setAnimationOrigin(d, p=!1) {
            const m = this.snapshot
              , g = m ? m.latestValues : {}
              , v = {
                ...this.latestValues
            }
              , w = dr();
            (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0),
            this.attemptToResolveRelativeTarget = !p;
            const j = Ne()
              , A = m ? m.source : void 0
              , C = this.layout ? this.layout.source : void 0
              , M = A !== C
              , V = this.getStack()
              , D = !V || V.members.length <= 1
              , Y = !!(M && !D && this.options.crossfade === !0 && !this.path.some(_w));
            this.animationProgress = 0;
            let Z;
            this.mixTargetDelta = H => {
                const _ = H / 1e3;
                Ah(w.x, d.x, _),
                Ah(w.y, d.y, _),
                this.setTargetDelta(w),
                this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (hs(j, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
                Ww(this.relativeTarget, this.relativeTargetOrigin, j, _),
                Z && Rw(this.relativeTarget, Z) && (this.isProjectionDirty = !1),
                Z || (Z = Ne()),
                xt(Z, this.relativeTarget)),
                M && (this.animationValues = v,
                yw(v, g, this.latestValues, _, Y, D)),
                this.root.scheduleUpdateProjection(),
                this.scheduleRender(),
                this.animationProgress = _
            }
            ,
            this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
        }
        startAnimation(d) {
            this.notifyListeners("animationStart"),
            this.currentAnimation && this.currentAnimation.stop(),
            this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(),
            this.pendingAnimation && (yn(this.pendingAnimation),
            this.pendingAnimation = void 0),
            this.pendingAnimation = xe.update( () => {
                Oi.hasAnimatedSinceResize = !0,
                this.currentAnimation = cw(0, Th, {
                    ...d,
                    onUpdate: p => {
                        this.mixTargetDelta(p),
                        d.onUpdate && d.onUpdate(p)
                    }
                    ,
                    onComplete: () => {
                        d.onComplete && d.onComplete(),
                        this.completeAnimation()
                    }
                }),
                this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
                this.pendingAnimation = void 0
            }
            )
        }
        completeAnimation() {
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0,
            this.resumingFrom.preserveOpacity = void 0);
            const d = this.getStack();
            d && d.exitAnimationComplete(),
            this.resumingFrom = this.currentAnimation = this.animationValues = void 0,
            this.notifyListeners("animationComplete")
        }
        finishAnimation() {
            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(Th),
            this.currentAnimation.stop()),
            this.completeAnimation()
        }
        applyTransformsToTarget() {
            const d = this.getLead();
            let {targetWithTransforms: p, target: m, layout: g, latestValues: v} = d;
            if (!(!p || !m || !g)) {
                if (this !== d && this.layout && g && um(this.options.animationType, this.layout.layoutBox, g.layoutBox)) {
                    m = this.target || Ne();
                    const w = dt(this.layout.layoutBox.x);
                    m.x.min = d.target.x.min,
                    m.x.max = m.x.min + w;
                    const j = dt(this.layout.layoutBox.y);
                    m.y.min = d.target.y.min,
                    m.y.max = m.y.min + j
                }
                xt(p, m),
                hr(p, v),
                fs(this.projectionDeltaWithTransform, this.layoutCorrected, p, v)
            }
        }
        registerSharedNode(d, p) {
            this.sharedNodes.has(d) || this.sharedNodes.set(d, new jw),
            this.sharedNodes.get(d).add(p);
            const g = p.options.initialPromotionConfig;
            p.promote({
                transition: g ? g.transition : void 0,
                preserveFollowOpacity: g && g.shouldPreserveFollowOpacity ? g.shouldPreserveFollowOpacity(p) : void 0
            })
        }
        isLead() {
            const d = this.getStack();
            return d ? d.lead === this : !0
        }
        getLead() {
            var d;
            const {layoutId: p} = this.options;
            return p ? ((d = this.getStack()) === null || d === void 0 ? void 0 : d.lead) || this : this
        }
        getPrevLead() {
            var d;
            const {layoutId: p} = this.options;
            return p ? (d = this.getStack()) === null || d === void 0 ? void 0 : d.prevLead : void 0
        }
        getStack() {
            const {layoutId: d} = this.options;
            if (d)
                return this.root.sharedNodes.get(d)
        }
        promote({needsReset: d, transition: p, preserveFollowOpacity: m}={}) {
            const g = this.getStack();
            g && g.promote(this, m),
            d && (this.projectionDelta = void 0,
            this.needsReset = !0),
            p && this.setOptions({
                transition: p
            })
        }
        relegate() {
            const d = this.getStack();
            return d ? d.relegate(this) : !1
        }
        resetSkewAndRotation() {
            const {visualElement: d} = this.options;
            if (!d)
                return;
            let p = !1;
            const {latestValues: m} = d;
            if ((m.z || m.rotate || m.rotateX || m.rotateY || m.rotateZ || m.skewX || m.skewY) && (p = !0),
            !p)
                return;
            const g = {};
            m.z && fl("z", d, g, this.animationValues);
            for (let v = 0; v < dl.length; v++)
                fl(`rotate${dl[v]}`, d, g, this.animationValues),
                fl(`skew${dl[v]}`, d, g, this.animationValues);
            d.render();
            for (const v in g)
                d.setStaticValue(v, g[v]),
                this.animationValues && (this.animationValues[v] = g[v]);
            d.scheduleRender()
        }
        getProjectionStyles(d) {
            var p, m;
            if (!this.instance || this.isSVG)
                return;
            if (!this.isVisible)
                return Tw;
            const g = {
                visibility: ""
            }
              , v = this.getTransformTemplate();
            if (this.needsReset)
                return this.needsReset = !1,
                g.opacity = "",
                g.pointerEvents = Qi(d?.pointerEvents) || "",
                g.transform = v ? v(this.latestValues, "") : "none",
                g;
            const w = this.getLead();
            if (!this.projectionDelta || !this.layout || !w.target) {
                const M = {};
                return this.options.layoutId && (M.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1,
                M.pointerEvents = Qi(d?.pointerEvents) || ""),
                this.hasProjected && !Vn(this.latestValues) && (M.transform = v ? v({}, "") : "none",
                this.hasProjected = !1),
                M
            }
            const j = w.animationValues || w.latestValues;
            this.applyTransformsToTarget(),
            g.transform = zw(this.projectionDeltaWithTransform, this.treeScale, j),
            v && (g.transform = v(j, g.transform));
            const {x: A, y: C} = this.projectionDelta;
            g.transformOrigin = `${A.origin * 100}% ${C.origin * 100}% 0`,
            w.animationValues ? g.opacity = w === this ? (m = (p = j.opacity) !== null && p !== void 0 ? p : this.latestValues.opacity) !== null && m !== void 0 ? m : 1 : this.preserveOpacity ? this.latestValues.opacity : j.opacityExit : g.opacity = w === this ? j.opacity !== void 0 ? j.opacity : "" : j.opacityExit !== void 0 ? j.opacityExit : 0;
            for (const M in Fi) {
                if (j[M] === void 0)
                    continue;
                const {correct: V, applyTo: D} = Fi[M]
                  , Y = g.transform === "none" ? j[M] : V(j[M], w);
                if (D) {
                    const Z = D.length;
                    for (let H = 0; H < Z; H++)
                        g[D[H]] = Y
                } else
                    g[M] = Y
            }
            return this.options.layoutId && (g.pointerEvents = w === this ? Qi(d?.pointerEvents) || "" : "none"),
            g
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
        }
        resetTree() {
            this.root.nodes.forEach(d => {
                var p;
                return (p = d.currentAnimation) === null || p === void 0 ? void 0 : p.stop()
            }
            ),
            this.root.nodes.forEach(Eh),
            this.root.sharedNodes.clear()
        }
    }
}
function Sw(r) {
    r.updateLayout()
}
function Aw(r) {
    var s;
    const i = ((s = r.resumeFrom) === null || s === void 0 ? void 0 : s.snapshot) || r.snapshot;
    if (r.isLead() && r.layout && i && r.hasListeners("didUpdate")) {
        const {layoutBox: a, measuredBox: c} = r.layout
          , {animationType: f} = r.options
          , d = i.source !== r.layout.source;
        f === "size" ? wt(w => {
            const j = d ? i.measuredBox[w] : i.layoutBox[w]
              , A = dt(j);
            j.min = a[w].min,
            j.max = j.min + A
        }
        ) : um(f, i.layoutBox, a) && wt(w => {
            const j = d ? i.measuredBox[w] : i.layoutBox[w]
              , A = dt(a[w]);
            j.max = j.min + A,
            r.relativeTarget && !r.currentAnimation && (r.isProjectionDirty = !0,
            r.relativeTarget[w].max = r.relativeTarget[w].min + A)
        }
        );
        const p = dr();
        fs(p, a, i.layoutBox);
        const m = dr();
        d ? fs(m, r.applyTransform(c, !0), i.measuredBox) : fs(m, a, i.layoutBox);
        const g = !im(p);
        let v = !1;
        if (!r.resumeFrom) {
            const w = r.getClosestProjectingParent();
            if (w && !w.resumeFrom) {
                const {snapshot: j, layout: A} = w;
                if (j && A) {
                    const C = Ne();
                    hs(C, i.layoutBox, j.layoutBox);
                    const M = Ne();
                    hs(M, a, A.layoutBox),
                    om(C, M) || (v = !0),
                    w.options.layoutRoot && (r.relativeTarget = M,
                    r.relativeTargetOrigin = C,
                    r.relativeParent = w)
                }
            }
        }
        r.notifyListeners("didUpdate", {
            layout: a,
            snapshot: i,
            delta: m,
            layoutDelta: p,
            hasLayoutChanged: g,
            hasRelativeTargetChanged: v
        })
    } else if (r.isLead()) {
        const {onExitComplete: a} = r.options;
        a && a()
    }
    r.options.transition = void 0
}
function Mw(r) {
    us && Pn.totalNodes++,
    r.parent && (r.isProjecting() || (r.isProjectionDirty = r.parent.isProjectionDirty),
    r.isSharedProjectionDirty || (r.isSharedProjectionDirty = !!(r.isProjectionDirty || r.parent.isProjectionDirty || r.parent.isSharedProjectionDirty)),
    r.isTransformDirty || (r.isTransformDirty = r.parent.isTransformDirty))
}
function Nw(r) {
    r.isProjectionDirty = r.isSharedProjectionDirty = r.isTransformDirty = !1
}
function kw(r) {
    r.clearSnapshot()
}
function Eh(r) {
    r.clearMeasurements()
}
function bw(r) {
    r.isLayoutDirty = !1
}
function Vw(r) {
    const {visualElement: s} = r.options;
    s && s.getProps().onBeforeLayoutMeasure && s.notify("BeforeLayoutMeasure"),
    r.resetTransform()
}
function Sh(r) {
    r.finishAnimation(),
    r.targetDelta = r.relativeTarget = r.target = void 0,
    r.isProjectionDirty = !0
}
function Pw(r) {
    r.resolveTargetDelta()
}
function Cw(r) {
    r.calcProjection()
}
function Bw(r) {
    r.resetSkewAndRotation()
}
function Dw(r) {
    r.removeLeadSnapshot()
}
function Ah(r, s, i) {
    r.translate = ze(s.translate, 0, i),
    r.scale = ze(s.scale, 1, i),
    r.origin = s.origin,
    r.originPoint = s.originPoint
}
function Mh(r, s, i, a) {
    r.min = ze(s.min, i.min, a),
    r.max = ze(s.max, i.max, a)
}
function Ww(r, s, i, a) {
    Mh(r.x, s.x, i.x, a),
    Mh(r.y, s.y, i.y, a)
}
function _w(r) {
    return r.animationValues && r.animationValues.opacityExit !== void 0
}
const Qw = {
    duration: .45,
    ease: [.4, 0, .1, 1]
}
  , Nh = r => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(r)
  , kh = Nh("applewebkit/") && !Nh("chrome/") ? Math.round : ct;
function bh(r) {
    r.min = kh(r.min),
    r.max = kh(r.max)
}
function Yw(r) {
    bh(r.x),
    bh(r.y)
}
function um(r, s, i) {
    return r === "position" || r === "preserve-aspect" && !Fx(jh(s), jh(i), .2)
}
function Ow(r) {
    var s;
    return r !== r.root && ((s = r.scroll) === null || s === void 0 ? void 0 : s.wasRoot)
}
const Iw = lm({
    attachResizeListener: (r, s) => vs(r, "resize", s),
    measureScroll: () => ({
        x: document.documentElement.scrollLeft || document.body.scrollLeft,
        y: document.documentElement.scrollTop || document.body.scrollTop
    }),
    checkIsScrollRoot: () => !0
})
  , hl = {
    current: void 0
}
  , cm = lm({
    measureScroll: r => ({
        x: r.scrollLeft,
        y: r.scrollTop
    }),
    defaultParent: () => {
        if (!hl.current) {
            const r = new Iw({});
            r.mount(window),
            r.setOptions({
                layoutScroll: !0
            }),
            hl.current = r
        }
        return hl.current
    }
    ,
    resetTransform: (r, s) => {
        r.style.transform = s !== void 0 ? s : "none"
    }
    ,
    checkIsScrollRoot: r => window.getComputedStyle(r).position === "fixed"
})
  , Fw = {
    pan: {
        Feature: ow
    },
    drag: {
        Feature: iw,
        ProjectionNode: cm,
        MeasureLayout: nm
    }
};
function Vh(r, s, i) {
    const {props: a} = r;
    r.animationState && a.whileHover && r.animationState.setActive("whileHover", i === "Start");
    const c = "onHover" + i
      , f = a[c];
    f && xe.postRender( () => f(s, Rs(s)))
}
class Zw extends vn {
    mount() {
        const {current: s} = this.node;
        s && (this.unmount = Fg(s, i => (Vh(this.node, i, "Start"),
        a => Vh(this.node, a, "End"))))
    }
    unmount() {}
}
class Jw extends vn {
    constructor() {
        super(...arguments),
        this.isActive = !1
    }
    onFocus() {
        let s = !1;
        try {
            s = this.node.current.matches(":focus-visible")
        } catch {
            s = !0
        }
        !s || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0),
        this.isActive = !0)
    }
    onBlur() {
        !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1),
        this.isActive = !1)
    }
    mount() {
        this.unmount = Ls(vs(this.node.current, "focus", () => this.onFocus()), vs(this.node.current, "blur", () => this.onBlur()))
    }
    unmount() {}
}
function Ph(r, s, i) {
    const {props: a} = r;
    r.animationState && a.whileTap && r.animationState.setActive("whileTap", i === "Start");
    const c = "onTap" + (i === "End" ? "" : i)
      , f = a[c];
    f && xe.postRender( () => f(s, Rs(s)))
}
class Uw extends vn {
    mount() {
        const {current: s} = this.node;
        s && (this.unmount = $g(s, i => (Ph(this.node, i, "Start"),
        (a, {success: c}) => Ph(this.node, a, c ? "End" : "Cancel")), {
            useGlobalTarget: this.node.props.globalTapTarget
        }))
    }
    unmount() {}
}
const Ml = new WeakMap
  , pl = new WeakMap
  , $w = r => {
    const s = Ml.get(r.target);
    s && s(r)
}
  , Hw = r => {
    r.forEach($w)
}
;
function Kw({root: r, ...s}) {
    const i = r || document;
    pl.has(i) || pl.set(i, {});
    const a = pl.get(i)
      , c = JSON.stringify(s);
    return a[c] || (a[c] = new IntersectionObserver(Hw,{
        root: r,
        ...s
    })),
    a[c]
}
function Gw(r, s, i) {
    const a = Kw(s);
    return Ml.set(r, i),
    a.observe(r),
    () => {
        Ml.delete(r),
        a.unobserve(r)
    }
}
const Xw = {
    some: 0,
    all: 1
};
class qw extends vn {
    constructor() {
        super(...arguments),
        this.hasEnteredView = !1,
        this.isInView = !1
    }
    startObserver() {
        this.unmount();
        const {viewport: s={}} = this.node.getProps()
          , {root: i, margin: a, amount: c="some", once: f} = s
          , d = {
            root: i ? i.current : void 0,
            rootMargin: a,
            threshold: typeof c == "number" ? c : Xw[c]
        }
          , p = m => {
            const {isIntersecting: g} = m;
            if (this.isInView === g || (this.isInView = g,
            f && !g && this.hasEnteredView))
                return;
            g && (this.hasEnteredView = !0),
            this.node.animationState && this.node.animationState.setActive("whileInView", g);
            const {onViewportEnter: v, onViewportLeave: w} = this.node.getProps()
              , j = g ? v : w;
            j && j(m)
        }
        ;
        return Gw(this.node.current, d, p)
    }
    mount() {
        this.startObserver()
    }
    update() {
        if (typeof IntersectionObserver > "u")
            return;
        const {props: s, prevProps: i} = this.node;
        ["amount", "margin", "root"].some(e1(s, i)) && this.startObserver()
    }
    unmount() {}
}
function e1({viewport: r={}}, {viewport: s={}}={}) {
    return i => r[i] !== s[i]
}
const t1 = {
    inView: {
        Feature: qw
    },
    tap: {
        Feature: Uw
    },
    focus: {
        Feature: Jw
    },
    hover: {
        Feature: Zw
    }
}
  , n1 = {
    layout: {
        ProjectionNode: cm,
        MeasureLayout: nm
    }
}
  , Nl = {
    current: null
}
  , dm = {
    current: !1
};
function r1() {
    if (dm.current = !0,
    !!Cl)
        if (window.matchMedia) {
            const r = window.matchMedia("(prefers-reduced-motion)")
              , s = () => Nl.current = r.matches;
            r.addListener(s),
            s()
        } else
            Nl.current = !1
}
const s1 = [...Bp, Fe, gn]
  , i1 = r => s1.find(Cp(r))
  , Ch = new WeakMap;
function o1(r, s, i) {
    for (const a in s) {
        const c = s[a]
          , f = i[a];
        if (Ze(c))
            r.addValue(a, c);
        else if (Ze(f))
            r.addValue(a, ys(c, {
                owner: r
            }));
        else if (f !== c)
            if (r.hasValue(a)) {
                const d = r.getValue(a);
                d.liveStyle === !0 ? d.jump(c) : d.hasAnimated || d.set(c)
            } else {
                const d = r.getStaticValue(a);
                r.addValue(a, ys(d !== void 0 ? d : c, {
                    owner: r
                }))
            }
    }
    for (const a in i)
        s[a] === void 0 && r.removeValue(a);
    return s
}
const Bh = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
class a1 {
    scrapeMotionValuesFromProps(s, i, a) {
        return {}
    }
    constructor({parent: s, props: i, presenceContext: a, reducedMotionConfig: c, blockInitialAnimation: f, visualState: d}, p={}) {
        this.current = null,
        this.children = new Set,
        this.isVariantNode = !1,
        this.isControllingVariants = !1,
        this.shouldReduceMotion = null,
        this.values = new Map,
        this.KeyframeResolver = lu,
        this.features = {},
        this.valueSubscriptions = new Map,
        this.prevMotionValues = {},
        this.events = {},
        this.propEventSubscriptions = {},
        this.notifyUpdate = () => this.notify("Update", this.latestValues),
        this.render = () => {
            this.current && (this.triggerBuild(),
            this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
        }
        ,
        this.renderScheduledAt = 0,
        this.scheduleRender = () => {
            const A = Bt.now();
            this.renderScheduledAt < A && (this.renderScheduledAt = A,
            xe.render(this.render, !1, !0))
        }
        ;
        const {latestValues: m, renderState: g, onUpdate: v} = d;
        this.onUpdate = v,
        this.latestValues = m,
        this.baseTarget = {
            ...m
        },
        this.initialValues = i.initial ? {
            ...m
        } : {},
        this.renderState = g,
        this.parent = s,
        this.props = i,
        this.presenceContext = a,
        this.depth = s ? s.depth + 1 : 0,
        this.reducedMotionConfig = c,
        this.options = p,
        this.blockInitialAnimation = !!f,
        this.isControllingVariants = qi(i),
        this.isVariantNode = Fh(i),
        this.isVariantNode && (this.variantChildren = new Set),
        this.manuallyAnimateOnMount = !!(s && s.current);
        const {willChange: w, ...j} = this.scrapeMotionValuesFromProps(i, {}, this);
        for (const A in j) {
            const C = j[A];
            m[A] !== void 0 && Ze(C) && C.set(m[A], !1)
        }
    }
    mount(s) {
        this.current = s,
        Ch.set(s, this),
        this.projection && !this.projection.instance && this.projection.mount(s),
        this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)),
        this.values.forEach( (i, a) => this.bindToMotionValue(a, i)),
        dm.current || r1(),
        this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : Nl.current,
        this.parent && this.parent.children.add(this),
        this.update(this.props, this.presenceContext)
    }
    unmount() {
        Ch.delete(this.current),
        this.projection && this.projection.unmount(),
        yn(this.notifyUpdate),
        yn(this.render),
        this.valueSubscriptions.forEach(s => s()),
        this.valueSubscriptions.clear(),
        this.removeFromVariantTree && this.removeFromVariantTree(),
        this.parent && this.parent.children.delete(this);
        for (const s in this.events)
            this.events[s].clear();
        for (const s in this.features) {
            const i = this.features[s];
            i && (i.unmount(),
            i.isMounted = !1)
        }
        this.current = null
    }
    bindToMotionValue(s, i) {
        this.valueSubscriptions.has(s) && this.valueSubscriptions.get(s)();
        const a = Dn.has(s)
          , c = i.on("change", p => {
            this.latestValues[s] = p,
            this.props.onUpdate && xe.preRender(this.notifyUpdate),
            a && this.projection && (this.projection.isTransformDirty = !0)
        }
        )
          , f = i.on("renderRequest", this.scheduleRender);
        let d;
        window.MotionCheckAppearSync && (d = window.MotionCheckAppearSync(this, s, i)),
        this.valueSubscriptions.set(s, () => {
            c(),
            f(),
            d && d(),
            i.owner && i.stop()
        }
        )
    }
    sortNodePosition(s) {
        return !this.current || !this.sortInstanceNodePosition || this.type !== s.type ? 0 : this.sortInstanceNodePosition(this.current, s.current)
    }
    updateFeatures() {
        let s = "animation";
        for (s in mr) {
            const i = mr[s];
            if (!i)
                continue;
            const {isEnabled: a, Feature: c} = i;
            if (!this.features[s] && c && a(this.props) && (this.features[s] = new c(this)),
            this.features[s]) {
                const f = this.features[s];
                f.isMounted ? f.update() : (f.mount(),
                f.isMounted = !0)
            }
        }
    }
    triggerBuild() {
        this.build(this.renderState, this.latestValues, this.props)
    }
    measureViewportBox() {
        return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Ne()
    }
    getStaticValue(s) {
        return this.latestValues[s]
    }
    setStaticValue(s, i) {
        this.latestValues[s] = i
    }
    update(s, i) {
        (s.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
        this.prevProps = this.props,
        this.props = s,
        this.prevPresenceContext = this.presenceContext,
        this.presenceContext = i;
        for (let a = 0; a < Bh.length; a++) {
            const c = Bh[a];
            this.propEventSubscriptions[c] && (this.propEventSubscriptions[c](),
            delete this.propEventSubscriptions[c]);
            const f = "on" + c
              , d = s[f];
            d && (this.propEventSubscriptions[c] = this.on(c, d))
        }
        this.prevMotionValues = o1(this, this.scrapeMotionValuesFromProps(s, this.prevProps, this), this.prevMotionValues),
        this.handleChildMotionValue && this.handleChildMotionValue(),
        this.onUpdate && this.onUpdate(this)
    }
    getProps() {
        return this.props
    }
    getVariant(s) {
        return this.props.variants ? this.props.variants[s] : void 0
    }
    getDefaultTransition() {
        return this.props.transition
    }
    getTransformPagePoint() {
        return this.props.transformPagePoint
    }
    getClosestVariantNode() {
        return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
    }
    addVariantChild(s) {
        const i = this.getClosestVariantNode();
        if (i)
            return i.variantChildren && i.variantChildren.add(s),
            () => i.variantChildren.delete(s)
    }
    addValue(s, i) {
        const a = this.values.get(s);
        i !== a && (a && this.removeValue(s),
        this.bindToMotionValue(s, i),
        this.values.set(s, i),
        this.latestValues[s] = i.get())
    }
    removeValue(s) {
        this.values.delete(s);
        const i = this.valueSubscriptions.get(s);
        i && (i(),
        this.valueSubscriptions.delete(s)),
        delete this.latestValues[s],
        this.removeValueFromRenderState(s, this.renderState)
    }
    hasValue(s) {
        return this.values.has(s)
    }
    getValue(s, i) {
        if (this.props.values && this.props.values[s])
            return this.props.values[s];
        let a = this.values.get(s);
        return a === void 0 && i !== void 0 && (a = ys(i === null ? void 0 : i, {
            owner: this
        }),
        this.addValue(s, a)),
        a
    }
    readValue(s, i) {
        var a;
        let c = this.latestValues[s] !== void 0 || !this.current ? this.latestValues[s] : (a = this.getBaseTargetFromProps(this.props, s)) !== null && a !== void 0 ? a : this.readValueFromInstance(this.current, s, this.options);
        return c != null && (typeof c == "string" && (Vp(c) || zp(c)) ? c = parseFloat(c) : !i1(c) && gn.test(i) && (c = Np(s, i)),
        this.setBaseTarget(s, Ze(c) ? c.get() : c)),
        Ze(c) ? c.get() : c
    }
    setBaseTarget(s, i) {
        this.baseTarget[s] = i
    }
    getBaseTarget(s) {
        var i;
        const {initial: a} = this.props;
        let c;
        if (typeof a == "string" || typeof a == "object") {
            const d = Ol(this.props, a, (i = this.presenceContext) === null || i === void 0 ? void 0 : i.custom);
            d && (c = d[s])
        }
        if (a && c !== void 0)
            return c;
        const f = this.getBaseTargetFromProps(this.props, s);
        return f !== void 0 && !Ze(f) ? f : this.initialValues[s] !== void 0 && c === void 0 ? void 0 : this.baseTarget[s]
    }
    on(s, i) {
        return this.events[s] || (this.events[s] = new nu),
        this.events[s].add(i)
    }
    notify(s, ...i) {
        this.events[s] && this.events[s].notify(...i)
    }
}
class fm extends a1 {
    constructor() {
        super(...arguments),
        this.KeyframeResolver = Dp
    }
    sortInstanceNodePosition(s, i) {
        return s.compareDocumentPosition(i) & 2 ? 1 : -1
    }
    getBaseTargetFromProps(s, i) {
        return s.style ? s.style[i] : void 0
    }
    removeValueFromRenderState(s, {vars: i, style: a}) {
        delete i[s],
        delete a[s]
    }
    handleChildMotionValue() {
        this.childSubscription && (this.childSubscription(),
        delete this.childSubscription);
        const {children: s} = this.props;
        Ze(s) && (this.childSubscription = s.on("change", i => {
            this.current && (this.current.textContent = `${i}`)
        }
        ))
    }
}
function l1(r) {
    return window.getComputedStyle(r)
}
class u1 extends fm {
    constructor() {
        super(...arguments),
        this.type = "html",
        this.renderInstance = qh
    }
    readValueFromInstance(s, i) {
        if (Dn.has(i)) {
            const a = au(i);
            return a && a.default || 0
        } else {
            const a = l1(s)
              , c = (Kh(i) ? a.getPropertyValue(i) : a[i]) || 0;
            return typeof c == "string" ? c.trim() : c
        }
    }
    measureInstanceViewportBox(s, {transformPagePoint: i}) {
        return em(s, i)
    }
    build(s, i, a) {
        Zl(s, i, a.transformTemplate)
    }
    scrapeMotionValuesFromProps(s, i, a) {
        return Hl(s, i, a)
    }
}
class c1 extends fm {
    constructor() {
        super(...arguments),
        this.type = "svg",
        this.isSVGTag = !1,
        this.measureInstanceViewportBox = Ne
    }
    getBaseTargetFromProps(s, i) {
        return s[i]
    }
    readValueFromInstance(s, i) {
        if (Dn.has(i)) {
            const a = au(i);
            return a && a.default || 0
        }
        return i = ep.has(i) ? i : _l(i),
        s.getAttribute(i)
    }
    scrapeMotionValuesFromProps(s, i, a) {
        return rp(s, i, a)
    }
    build(s, i, a) {
        Jl(s, i, this.isSVGTag, a.transformTemplate)
    }
    renderInstance(s, i, a, c) {
        tp(s, i, a, c)
    }
    mount(s) {
        this.isSVGTag = $l(s.tagName),
        super.mount(s)
    }
}
const d1 = (r, s) => Yl(r) ? new c1(s) : new u1(s,{
    allowProjection: r !== I.Fragment
})
  , f1 = Dg({
    ...Cx,
    ...t1,
    ...Fw,
    ...n1
}, d1)
  , _i = X0(f1)
  , h1 = () => {
    const [r,s] = I.useState(!1)
      , [i,a] = I.useState(null)
      , c = p => {
        const m = document.getElementById(p);
        m && m.scrollIntoView({
            behavior: "smooth"
        }),
        s(!1)
    }
      , f = [{
        question: "What wholesaler accounts do I get access to?",
        answer: "TradeZone, Ideal Electrical, and Voltex (subject to availability and supplier approval)."
    }, {
        question: "How does Affiliate Warehouse make money?",
        answer: "We retain 1.1% of verified discount only. If no savings occur, there is no fee."
    }, {
        question: "Am I locked in?",
        answer: "No. There are no contracts, minimums, or exclusivity requirements."
    }, {
        question: "How do I know pricing is improving?",
        answer: "You can compare purchases against your original trade accounts at any time."
    }, {
        question: "Is this compliant with supplier systems?",
        answer: "Yes. All purchases occur within standard wholesaler systems with full traceability."
    }, {
        question: "What if it stops being useful?",
        answer: "You can stop using it at any time."
    }, {
        question: "How are better prices achieved?",
        answer: "Through consolidated purchasing volume across independent preferred contractors nationally — subject to supplier pricing structures and approval."
    }]
      , d = [{
        text: "Clear visibility on repeat pricing. It gives us confidence when quoting larger jobs.",
        author: "Electrical Contractor, NSW",
        stars: 5
    }, {
        text: "Simple to compare accounts side by side. No pressure to switch.",
        author: "HVAC Business Owner, VIC",
        stars: 5
    }, {
        text: "Structured, transparent, and easy to trial.",
        author: "Solar Installer, QLD",
        stars: 5
    }];
    return y.jsxs("div", {
        className: "min-h-screen bg-white text-slate-900 font-sans selection:bg-yellow-200",
        "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA4NTo0",
        "data-yw-s": !0,
        children: [y.jsxs("nav", {
            className: "fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100",
            "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA4Nzo2",
            "data-yw-s": !0,
            children: [y.jsx("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA4ODo4",
                "data-yw-s": !0,
                children: y.jsxs("div", {
                    className: "flex justify-between items-center h-20",
                    "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA4OToxMA",
                    "data-yw-s": !0,
                    children: [y.jsxs("div", {
                        className: "flex items-center gap-2 cursor-pointer",
                        onClick: () => window.scrollTo({
                            top: 0,
                            behavior: "smooth"
                        }),
                        "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA5MDoxMg",
                        "data-yw-s": !0,
                        children: [y.jsx("div", {
                            className: "w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center font-bold text-black text-xl",
                            "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA5MToxNA",
                            "data-yw-t": !0,
                            "data-yw-s": !0,
                            children: "AW"
                        }), y.jsx("span", {
                            className: "font-bold text-xl tracking-tight uppercase",
                            "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA5NDoxNA",
                            "data-yw-t": !0,
                            "data-yw-s": !0,
                            children: "Affiliate Warehouse"
                        })]
                    }), y.jsxs("div", {
                        className: "hidden md:flex items-center gap-8",
                        "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA5ODoxMg",
                        "data-yw-s": !0,
                        children: [y.jsx("button", {
                            onClick: () => c("how-it-works"),
                            className: "text-sm font-medium text-slate-600 hover:text-black transition-colors",
                            "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA5OToxNA",
                            "data-yw-t": !0,
                            "data-yw-s": !0,
                            children: "How It Works"
                        }), y.jsx("button", {
                            onClick: () => c("pricing"),
                            className: "text-sm font-medium text-slate-600 hover:text-black transition-colors",
                            "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAxMDA6MTQ",
                            "data-yw-t": !0,
                            "data-yw-s": !0,
                            children: "Pricing"
                        }), y.jsx("button", {
                            onClick: () => c("faq"),
                            className: "text-sm font-medium text-slate-600 hover:text-black transition-colors",
                            "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAxMDE6MTQ",
                            "data-yw-t": !0,
                            "data-yw-s": !0,
                            children: "FAQ"
                        }), y.jsx("button", {
                            onClick: () => c("get-started"),
                            className: "bg-black text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-slate-800 transition-all shadow-lg shadow-black/5",
                            "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAxMDI6MTQ",
                            "data-yw-t": !0,
                            "data-yw-s": !0,
                            children: "Apply Now"
                        })]
                    }), y.jsx("button", {
                        className: "md:hidden p-2",
                        onClick: () => s(!r),
                        "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAxMTE6MTI",
                        "data-yw-s": !0,
                        children: r ? y.jsx(is, {}) : y.jsx(V0, {})
                    })]
                })
            }), y.jsx(Rf, {
                children: r && y.jsxs(_i.div, {
                    initial: {
                        opacity: 0,
                        y: -20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    exit: {
                        opacity: 0,
                        y: -20
                    },
                    className: "md:hidden bg-white border-b border-slate-100 px-4 py-6 flex flex-col gap-4",
                    children: [y.jsx("button", {
                        onClick: () => c("how-it-works"),
                        className: "text-left py-2 font-medium",
                        "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAxMjY6MTQ",
                        "data-yw-t": !0,
                        "data-yw-s": !0,
                        children: "How It Works"
                    }), y.jsx("button", {
                        onClick: () => c("pricing"),
                        className: "text-left py-2 font-medium",
                        "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAxMjc6MTQ",
                        "data-yw-t": !0,
                        "data-yw-s": !0,
                        children: "Pricing"
                    }), y.jsx("button", {
                        onClick: () => c("faq"),
                        className: "text-left py-2 font-medium",
                        "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAxMjg6MTQ",
                        "data-yw-t": !0,
                        "data-yw-s": !0,
                        children: "FAQ"
                    }), y.jsx("button", {
                        onClick: () => c("get-started"),
                        className: "bg-black text-white px-6 py-3 rounded-xl font-semibold text-center",
                        "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAxMjk6MTQ",
                        "data-yw-t": !0,
                        "data-yw-s": !0,
                        children: "Apply Now"
                    })]
                })
            })]
        }), y.jsxs("section", {
            className: "relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden",
            "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAxNDE6Ng",
            "data-yw-s": !0,
            children: [y.jsx("div", {
                className: "absolute top-0 right-0 w-1/2 h-full bg-yellow-50 -z-10 rounded-l-[100px] hidden lg:block",
                "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAxNDI6OA",
                "data-yw-s": !0
            }), y.jsx("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAxNDM6OA",
                "data-yw-s": !0,
                children: y.jsxs("div", {
                    className: "grid lg:grid-cols-2 gap-12 items-center",
                    "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAxNDQ6MTA",
                    "data-yw-s": !0,
                    children: [y.jsxs(_i.div, {
                        initial: {
                            opacity: 0,
                            x: -20
                        },
                        animate: {
                            opacity: 1,
                            x: 0
                        },
                        transition: {
                            duration: .6
                        },
                        children: [y.jsxs("div", {
                            className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-100 text-yellow-800 text-xs font-bold uppercase tracking-wider mb-6",
                            "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAxNTA6MTQ",
                            "data-yw-s": !0,
                            children: [y.jsx(tl, {
                                size: 14
                            }), y.jsx("span", {
                                "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAxNTE6NDE",
                                "data-yw-t": !0,
                                "data-yw-auto": !0,
                                children: "Preferred Contractor Access"
                            })]
                        }), y.jsxs("h1", {
                            className: "text-5xl lg:text-7xl font-bold text-slate-900 leading-[1.1] mb-6",
                            "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAxNTQ6MTQ",
                            "data-yw-s": !0,
                            children: [y.jsx("span", {
                                "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAxNTQ6OTU",
                                "data-yw-t": !0,
                                "data-yw-auto": !0,
                                children: "We Help Independent Trade Businesses Access "
                            }), y.jsx("span", {
                                className: "text-yellow-500",
                                "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAxNTU6NjA",
                                "data-yw-t": !0,
                                "data-yw-s": !0,
                                children: "Corporate-Level Pricing"
                            }), y.jsx("span", {
                                "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAxNTU6MTI0",
                                "data-yw-t": !0,
                                "data-yw-auto": !0,
                                children: " — Transparently"
                            })]
                        }), y.jsx("p", {
                            className: "text-xl text-slate-600 mb-10 leading-relaxed max-w-xl",
                            "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAxNTc6MTQ",
                            "data-yw-t": !0,
                            "data-yw-s": !0,
                            children: "Collective purchasing participation, price visibility, and corporate trade access — without lock-ins or obligations."
                        }), y.jsxs("div", {
                            className: "flex flex-col sm:flex-row gap-4 mb-8",
                            "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAxNjA6MTQ",
                            "data-yw-s": !0,
                            children: [y.jsxs("button", {
                                onClick: () => c("get-started"),
                                className: "bg-black text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-800 transition-all flex items-center justify-center gap-2 group shadow-xl shadow-black/10",
                                "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAxNjE6MTY",
                                "data-yw-s": !0,
                                children: [y.jsx("span", {
                                    "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAxNjQ6MTc",
                                    "data-yw-t": !0,
                                    "data-yw-auto": !0,
                                    children: "Apply to Become a Preferred Contractor"
                                }), y.jsx(xf, {
                                    className: "group-hover:translate-x-1 transition-transform"
                                })]
                            }), y.jsx("button", {
                                onClick: () => c("get-started"),
                                className: "bg-white text-black border-2 border-slate-200 px-8 py-4 rounded-full font-bold text-lg hover:border-black transition-all flex items-center justify-center",
                                "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAxNjg6MTY",
                                "data-yw-t": !0,
                                "data-yw-s": !0,
                                children: "Request Information"
                            })]
                        }), y.jsxs("div", {
                            className: "flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-500 font-medium",
                            "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAxNzU6MTQ",
                            "data-yw-s": !0,
                            children: [y.jsxs("span", {
                                className: "flex items-center gap-1.5",
                                "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAxNzY6MTY",
                                "data-yw-s": !0,
                                children: [y.jsx(Pi, {
                                    size: 16,
                                    className: "text-yellow-500"
                                }), y.jsx("span", {
                                    "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAxNzY6MTE0",
                                    "data-yw-t": !0,
                                    "data-yw-auto": !0,
                                    children: " No lock-ins"
                                })]
                            }), y.jsxs("span", {
                                className: "flex items-center gap-1.5",
                                "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAxNzc6MTY",
                                "data-yw-s": !0,
                                children: [y.jsx(Pi, {
                                    size: 16,
                                    className: "text-yellow-500"
                                }), y.jsx("span", {
                                    "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAxNzc6MTE0",
                                    "data-yw-t": !0,
                                    "data-yw-auto": !0,
                                    children: " No discount = no charge"
                                })]
                            }), y.jsxs("span", {
                                className: "flex items-center gap-1.5",
                                "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAxNzg6MTY",
                                "data-yw-s": !0,
                                children: [y.jsx(Pi, {
                                    size: 16,
                                    className: "text-yellow-500"
                                }), y.jsx("span", {
                                    "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAxNzg6MTE0",
                                    "data-yw-t": !0,
                                    "data-yw-auto": !0,
                                    children: " Optional price-change alerts"
                                })]
                            }), y.jsxs("span", {
                                className: "flex items-center gap-1.5",
                                "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAxNzk6MTY",
                                "data-yw-s": !0,
                                children: [y.jsx(Pi, {
                                    size: 16,
                                    className: "text-yellow-500"
                                }), y.jsx("span", {
                                    "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAxNzk6MTE0",
                                    "data-yw-t": !0,
                                    "data-yw-auto": !0,
                                    children: " Wholesaler-compliant model"
                                })]
                            })]
                        })]
                    }), y.jsxs(_i.div, {
                        initial: {
                            opacity: 0,
                            scale: .9
                        },
                        animate: {
                            opacity: 1,
                            scale: 1
                        },
                        transition: {
                            duration: .6,
                            delay: .2
                        },
                        className: "relative",
                        children: [y.jsxs("div", {
                            className: "relative rounded-3xl overflow-hidden shadow-2xl",
                            "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAxODg6MTQ",
                            "data-yw-s": !0,
                            children: [y.jsx("img", {
                                src: "https://pixabay.com/get/ged5975e3be4758113804d4fdfff8538bd9e8f8c74f8f03958abca4d88ab9478febd2f019b70623b0306e6390716b4b10b9bc03259c7bc89eaee2489ddf93d602_1280.jpg",
                                alt: "Professional Trade Agreement",
                                className: "w-full h-auto object-cover",
                                "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAxODk6MTY",
                                "data-yw-i": !0,
                                "data-yw-s": !0
                            }), y.jsx("div", {
                                className: "absolute inset-0 bg-gradient-to-t from-black/40 to-transparent",
                                "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAxOTQ6MTY",
                                "data-yw-s": !0
                            })]
                        }), y.jsxs("div", {
                            className: "absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-[240px] hidden sm:block",
                            "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAxOTc6MTQ",
                            "data-yw-s": !0,
                            children: [y.jsxs("div", {
                                className: "flex items-center gap-3 mb-3",
                                "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAxOTg6MTY",
                                "data-yw-s": !0,
                                children: [y.jsx("div", {
                                    className: "w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center",
                                    "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAxOTk6MTg",
                                    "data-yw-s": !0,
                                    children: y.jsx(W0, {
                                        size: 20
                                    })
                                }), y.jsx("div", {
                                    className: "text-sm font-bold",
                                    "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAyMDI6MTg",
                                    "data-yw-t": !0,
                                    "data-yw-s": !0,
                                    children: "Verified Savings"
                                })]
                            }), y.jsx("div", {
                                className: "text-2xl font-bold text-slate-900 mb-1",
                                "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAyMDQ6MTY",
                                "data-yw-t": !0,
                                "data-yw-s": !0,
                                children: "12.4% Average"
                            }), y.jsx("div", {
                                className: "text-xs text-slate-500",
                                "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAyMDU6MTY",
                                "data-yw-t": !0,
                                "data-yw-s": !0,
                                children: "Across major electrical & plumbing categories"
                            })]
                        })]
                    })]
                })
            })]
        }), y.jsx("section", {
            className: "py-24 bg-slate-50",
            "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAyMTM6Ng",
            "data-yw-s": !0,
            children: y.jsxs("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAyMTQ6OA",
                "data-yw-s": !0,
                children: [y.jsxs("div", {
                    className: "text-center max-w-3xl mx-auto mb-16",
                    "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAyMTU6MTA",
                    "data-yw-s": !0,
                    children: [y.jsx("h2", {
                        className: "text-3xl lg:text-4xl font-bold mb-6",
                        "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAyMTY6MTI",
                        "data-yw-t": !0,
                        "data-yw-s": !0,
                        children: "Procurement Support & Price Monitoring"
                    }), y.jsx("p", {
                        className: "text-lg text-slate-600",
                        "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAyMTc6MTI",
                        "data-yw-t": !0,
                        "data-yw-s": !0,
                        children: "Affiliate Warehouse is a service designed for Australian trade businesses to help independent contractors participate in consolidated national purchasing."
                    })]
                }), y.jsx("div", {
                    className: "grid md:grid-cols-3 gap-8",
                    "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAyMjE6MTA",
                    "data-yw-s": !0,
                    children: [{
                        icon: y.jsx(wf, {
                            className: "text-yellow-600"
                        }),
                        title: "Consolidated Volume",
                        desc: "Participate in consolidated national purchasing to access corporate-level pricing tiers."
                    }, {
                        icon: y.jsx(vf, {
                            className: "text-yellow-600"
                        }),
                        title: "Price Monitoring",
                        desc: "Monitor price movements over time and compare against existing trade accounts."
                    }, {
                        icon: y.jsx(tl, {
                            className: "text-yellow-600"
                        }),
                        title: "System Alignment",
                        desc: "All purchasing remains within existing wholesaler systems. No disruption to your workflow."
                    }].map( (p, m) => y.jsxs("div", {
                        className: "bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow",
                        "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAyMzk6MTQ",
                        "data-yw-s": !0,
                        children: [y.jsx("div", {
                            className: "w-14 h-14 bg-yellow-100 rounded-2xl flex items-center justify-center mb-6",
                            "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAyNDA6MTY",
                            "data-yw-s": !0,
                            children: p.icon
                        }), y.jsx("h3", {
                            className: "text-xl font-bold mb-4",
                            "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAyNDM6MTY",
                            "data-yw-s": !0,
                            children: p.title
                        }), y.jsx("p", {
                            className: "text-slate-600 leading-relaxed",
                            "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAyNDQ6MTY",
                            "data-yw-s": !0,
                            children: p.desc
                        })]
                    }, m))
                }), y.jsxs("div", {
                    className: "mt-16 bg-white p-8 rounded-3xl border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-8",
                    "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAyNDg6MTA",
                    "data-yw-s": !0,
                    children: [y.jsxs("div", {
                        className: "flex-1",
                        "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAyNDk6MTI",
                        "data-yw-s": !0,
                        children: [y.jsx("h4", {
                            className: "text-xl font-bold mb-2",
                            "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAyNTA6MTQ",
                            "data-yw-t": !0,
                            "data-yw-s": !0,
                            children: "Improve quoting visibility and repeat-purchase control"
                        }), y.jsx("p", {
                            className: "text-slate-600",
                            "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAyNTE6MTQ",
                            "data-yw-t": !0,
                            "data-yw-s": !0,
                            children: "This is collaboration and efficiency — not disruption. All purchasing remains job-coded and traceable."
                        })]
                    }), y.jsxs("div", {
                        className: "flex gap-4",
                        "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAyNTM6MTI",
                        "data-yw-s": !0,
                        children: [y.jsx("div", {
                            className: "px-4 py-2 bg-slate-100 rounded-lg text-sm font-bold text-slate-700",
                            "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAyNTQ6MTQ",
                            "data-yw-t": !0,
                            "data-yw-s": !0,
                            children: "TradeZone"
                        }), y.jsx("div", {
                            className: "px-4 py-2 bg-slate-100 rounded-lg text-sm font-bold text-slate-700",
                            "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAyNTU6MTQ",
                            "data-yw-t": !0,
                            "data-yw-s": !0,
                            children: "Ideal Electrical"
                        }), y.jsx("div", {
                            className: "px-4 py-2 bg-slate-100 rounded-lg text-sm font-bold text-slate-700",
                            "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAyNTY6MTQ",
                            "data-yw-t": !0,
                            "data-yw-s": !0,
                            children: "Voltex"
                        })]
                    })]
                })]
            })
        }), y.jsx("section", {
            id: "how-it-works",
            className: "py-24",
            "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAyNjM6Ng",
            "data-yw-s": !0,
            children: y.jsxs("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAyNjQ6OA",
                "data-yw-s": !0,
                children: [y.jsxs("div", {
                    className: "text-center mb-16",
                    "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAyNjU6MTA",
                    "data-yw-s": !0,
                    children: [y.jsx("h2", {
                        className: "text-3xl lg:text-4xl font-bold mb-4",
                        "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAyNjY6MTI",
                        "data-yw-t": !0,
                        "data-yw-s": !0,
                        children: "How It Works"
                    }), y.jsx("p", {
                        className: "text-slate-600",
                        "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAyNjc6MTI",
                        "data-yw-t": !0,
                        "data-yw-s": !0,
                        children: "Four clear steps to better procurement control"
                    })]
                }), y.jsxs("div", {
                    className: "grid md:grid-cols-4 gap-8 relative",
                    "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAyNjk6MTA",
                    "data-yw-s": !0,
                    children: [y.jsx("div", {
                        className: "hidden md:block absolute top-1/4 left-0 w-full h-0.5 bg-slate-100 -z-10",
                        "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAyNzE6MTI",
                        "data-yw-s": !0
                    }), [{
                        step: "01",
                        title: "Apply & Onboard",
                        desc: "Approved contractors are provided access to Affiliate Warehouse-enabled corporate trade accounts."
                    }, {
                        step: "02",
                        title: "Purchase Normally",
                        desc: "Orders are placed through participating wholesalers using standard backend systems."
                    }, {
                        step: "03",
                        title: "Volume Participation",
                        desc: "Consolidated volume may provide access to pricing tiers typically available to larger operators."
                    }, {
                        step: "04",
                        title: "Compare & Monitor",
                        desc: "Compare pricing against original accounts. Optional alerts for price movements."
                    }].map( (p, m) => y.jsxs("div", {
                        className: "relative bg-white p-6 rounded-2xl",
                        "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAyOTU6MTQ",
                        "data-yw-s": !0,
                        children: [y.jsx("div", {
                            className: "w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center font-bold text-black mb-6 shadow-lg shadow-yellow-400/20",
                            "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAyOTY6MTY",
                            "data-yw-s": !0,
                            children: p.step
                        }), y.jsx("h3", {
                            className: "text-lg font-bold mb-3",
                            "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAyOTk6MTY",
                            "data-yw-s": !0,
                            children: p.title
                        }), y.jsx("p", {
                            className: "text-sm text-slate-600 leading-relaxed",
                            "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAzMDA6MTY",
                            "data-yw-s": !0,
                            children: p.desc
                        })]
                    }, m))]
                })]
            })
        }), y.jsx("section", {
            className: "py-24 bg-black text-white overflow-hidden",
            "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAzMDg6Ng",
            "data-yw-s": !0,
            children: y.jsx("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAzMDk6OA",
                "data-yw-s": !0,
                children: y.jsxs("div", {
                    className: "grid lg:grid-cols-2 gap-20 items-center",
                    "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAzMTA6MTA",
                    "data-yw-s": !0,
                    children: [y.jsxs("div", {
                        "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAzMTE6MTI",
                        "data-yw-s": !0,
                        children: [y.jsx("h2", {
                            className: "text-3xl lg:text-4xl font-bold mb-8",
                            "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAzMTI6MTQ",
                            "data-yw-t": !0,
                            "data-yw-s": !0,
                            children: "Structured Price Visibility"
                        }), y.jsx("div", {
                            className: "space-y-6",
                            "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAzMTM6MTQ",
                            "data-yw-s": !0,
                            children: ["Monitor repeat purchases", "Compare against previous invoices", "Optional email alerts for price movements", "Improve quoting accuracy", "Increase cost control visibility"].map( (p, m) => y.jsxs("div", {
                                className: "flex items-start gap-4",
                                "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAzMjE6MTg",
                                "data-yw-s": !0,
                                children: [y.jsx("div", {
                                    className: "mt-1 w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center flex-shrink-0",
                                    "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAzMjI6MjA",
                                    "data-yw-s": !0,
                                    children: y.jsx(Zt, {
                                        size: 14,
                                        className: "text-black"
                                    })
                                }), y.jsx("p", {
                                    className: "text-lg text-slate-300",
                                    "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAzMjU6MjA",
                                    "data-yw-s": !0,
                                    children: p
                                })]
                            }, m))
                        }), y.jsx("div", {
                            className: "mt-12 p-6 bg-slate-900 rounded-2xl border border-slate-800",
                            "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAzMjk6MTQ",
                            "data-yw-s": !0,
                            children: y.jsx("p", {
                                className: "text-yellow-400 font-bold mb-2 italic",
                                "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAzMzA6MTY",
                                "data-yw-t": !0,
                                "data-yw-s": !0,
                                children: '"You are never required to use Affiliate Warehouse pricing. Comparison is always encouraged."'
                            })
                        })]
                    }), y.jsx("div", {
                        className: "relative",
                        "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAzMzM6MTI",
                        "data-yw-s": !0,
                        children: y.jsxs("div", {
                            className: "bg-slate-900 rounded-3xl p-8 border border-slate-800 shadow-2xl",
                            "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAzMzQ6MTQ",
                            "data-yw-s": !0,
                            children: [y.jsx("h3", {
                                className: "text-xl font-bold mb-8 text-center",
                                "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAzMzU6MTY",
                                "data-yw-t": !0,
                                "data-yw-s": !0,
                                children: "Side-by-Side Comparison"
                            }), y.jsxs("div", {
                                className: "grid grid-cols-2 gap-4",
                                "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAzMzY6MTY",
                                "data-yw-s": !0,
                                children: [y.jsxs("div", {
                                    className: "bg-slate-800 p-6 rounded-2xl border border-slate-700",
                                    "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAzMzc6MTg",
                                    "data-yw-s": !0,
                                    children: [y.jsx("div", {
                                        className: "text-xs font-bold text-slate-500 uppercase mb-4",
                                        "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAzMzg6MjA",
                                        "data-yw-t": !0,
                                        "data-yw-s": !0,
                                        children: "Existing Account"
                                    }), y.jsx("div", {
                                        className: "h-2 w-full bg-slate-700 rounded mb-2",
                                        "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAzMzk6MjA",
                                        "data-yw-s": !0
                                    }), y.jsx("div", {
                                        className: "h-2 w-3/4 bg-slate-700 rounded mb-6",
                                        "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAzNDA6MjA",
                                        "data-yw-s": !0
                                    }), y.jsx("div", {
                                        className: "text-2xl font-bold text-slate-400",
                                        "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAzNDE6MjA",
                                        "data-yw-t": !0,
                                        "data-yw-s": !0,
                                        children: "$1,240.00"
                                    })]
                                }), y.jsxs("div", {
                                    className: "bg-yellow-400 p-6 rounded-2xl shadow-lg shadow-yellow-400/10",
                                    "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAzNDM6MTg",
                                    "data-yw-s": !0,
                                    children: [y.jsx("div", {
                                        className: "text-xs font-bold text-yellow-900 uppercase mb-4",
                                        "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAzNDQ6MjA",
                                        "data-yw-t": !0,
                                        "data-yw-s": !0,
                                        children: "AW Corporate"
                                    }), y.jsx("div", {
                                        className: "h-2 w-full bg-yellow-500/30 rounded mb-2",
                                        "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAzNDU6MjA",
                                        "data-yw-s": !0
                                    }), y.jsx("div", {
                                        className: "h-2 w-3/4 bg-yellow-500/30 rounded mb-6",
                                        "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAzNDY6MjA",
                                        "data-yw-s": !0
                                    }), y.jsx("div", {
                                        className: "text-2xl font-bold text-black",
                                        "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAzNDc6MjA",
                                        "data-yw-t": !0,
                                        "data-yw-s": !0,
                                        children: "$1,085.00"
                                    })]
                                })]
                            }), y.jsxs("div", {
                                className: "mt-8 space-y-3",
                                "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAzNTA6MTY",
                                "data-yw-s": !0,
                                children: [y.jsxs("div", {
                                    className: "flex justify-between text-sm text-slate-400 border-b border-slate-800 pb-2",
                                    "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAzNTE6MTg",
                                    "data-yw-s": !0,
                                    children: [y.jsx("span", {
                                        "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAzNTI6MjA",
                                        "data-yw-t": !0,
                                        "data-yw-s": !0,
                                        children: "Same Products"
                                    }), y.jsx(Zt, {
                                        size: 16,
                                        className: "text-green-500"
                                    })]
                                }), y.jsxs("div", {
                                    className: "flex justify-between text-sm text-slate-400 border-b border-slate-800 pb-2",
                                    "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAzNTU6MTg",
                                    "data-yw-s": !0,
                                    children: [y.jsx("span", {
                                        "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAzNTY6MjA",
                                        "data-yw-t": !0,
                                        "data-yw-s": !0,
                                        children: "Same Suppliers"
                                    }), y.jsx(Zt, {
                                        size: 16,
                                        className: "text-green-500"
                                    })]
                                }), y.jsxs("div", {
                                    className: "flex justify-between text-sm text-slate-400 border-b border-slate-800 pb-2",
                                    "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAzNTk6MTg",
                                    "data-yw-s": !0,
                                    children: [y.jsx("span", {
                                        "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAzNjA6MjA",
                                        "data-yw-t": !0,
                                        "data-yw-s": !0,
                                        children: "Same Backend Systems"
                                    }), y.jsx(Zt, {
                                        size: 16,
                                        className: "text-green-500"
                                    })]
                                })]
                            }), y.jsx("div", {
                                className: "mt-6 text-center text-sm font-medium text-yellow-400",
                                "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAzNjQ6MTY",
                                "data-yw-t": !0,
                                "data-yw-s": !0,
                                children: "No obligation to switch. If pricing is not better — continue ordering normally."
                            })]
                        })
                    })]
                })
            })
        }), y.jsx("section", {
            id: "pricing",
            className: "py-24 bg-white",
            "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAzNzQ6Ng",
            "data-yw-s": !0,
            children: y.jsx("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAzNzU6OA",
                "data-yw-s": !0,
                children: y.jsxs("div", {
                    className: "grid lg:grid-cols-2 gap-16",
                    "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAzNzY6MTA",
                    "data-yw-s": !0,
                    children: [y.jsxs("div", {
                        className: "bg-slate-50 p-10 rounded-[40px] border border-slate-100",
                        "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAzNzc6MTI",
                        "data-yw-s": !0,
                        children: [y.jsx("h2", {
                            className: "text-3xl font-bold mb-8",
                            "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAzNzg6MTQ",
                            "data-yw-t": !0,
                            "data-yw-s": !0,
                            children: "Aligned Incentives"
                        }), y.jsxs("div", {
                            className: "space-y-8",
                            "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAzNzk6MTQ",
                            "data-yw-s": !0,
                            children: [y.jsxs("div", {
                                className: "flex gap-6",
                                "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAzODA6MTY",
                                "data-yw-s": !0,
                                children: [y.jsx("div", {
                                    className: "w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm flex-shrink-0",
                                    "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAzODE6MTg",
                                    "data-yw-s": !0,
                                    children: y.jsx("span", {
                                        className: "text-2xl font-bold text-slate-400",
                                        "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAzODI6MjA",
                                        "data-yw-t": !0,
                                        "data-yw-s": !0,
                                        children: "$0"
                                    })
                                }), y.jsxs("div", {
                                    "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAzODQ6MTg",
                                    "data-yw-s": !0,
                                    children: [y.jsx("h4", {
                                        className: "text-xl font-bold mb-2",
                                        "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAzODU6MjA",
                                        "data-yw-t": !0,
                                        "data-yw-s": !0,
                                        children: "No verified discount?"
                                    }), y.jsx("p", {
                                        className: "text-slate-600",
                                        "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAzODY6MjA",
                                        "data-yw-t": !0,
                                        "data-yw-s": !0,
                                        children: "You pay nothing. Our structure is simple and risk-free."
                                    })]
                                })]
                            }), y.jsxs("div", {
                                className: "flex gap-6",
                                "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAzODk6MTY",
                                "data-yw-s": !0,
                                children: [y.jsx("div", {
                                    className: "w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center shadow-lg shadow-yellow-400/20 flex-shrink-0",
                                    "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAzOTA6MTg",
                                    "data-yw-s": !0,
                                    children: y.jsx("span", {
                                        className: "text-xl font-bold text-black",
                                        "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAzOTE6MjA",
                                        "data-yw-t": !0,
                                        "data-yw-s": !0,
                                        children: "1.1%"
                                    })
                                }), y.jsxs("div", {
                                    "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAzOTM6MTg",
                                    "data-yw-s": !0,
                                    children: [y.jsx("h4", {
                                        className: "text-xl font-bold mb-2",
                                        "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAzOTQ6MjA",
                                        "data-yw-t": !0,
                                        "data-yw-s": !0,
                                        children: "Verified discount achieved?"
                                    }), y.jsx("p", {
                                        className: "text-slate-600",
                                        "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAzOTU6MjA",
                                        "data-yw-t": !0,
                                        "data-yw-s": !0,
                                        children: "Affiliate Warehouse retains 1.1% of the verified discount. You keep the remainder."
                                    })]
                                })]
                            })]
                        }), y.jsxs("div", {
                            className: "mt-10 pt-10 border-t border-slate-200 grid grid-cols-2 gap-4",
                            "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAzOTk6MTQ",
                            "data-yw-s": !0,
                            children: [y.jsx("div", {
                                className: "text-sm font-medium text-slate-500",
                                "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA0MDA6MTY",
                                "data-yw-t": !0,
                                "data-yw-s": !0,
                                children: "• Calculated only on savings"
                            }), y.jsx("div", {
                                className: "text-sm font-medium text-slate-500",
                                "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA0MDE6MTY",
                                "data-yw-t": !0,
                                "data-yw-s": !0,
                                children: "• Billed monthly"
                            }), y.jsx("div", {
                                className: "text-sm font-medium text-slate-500",
                                "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA0MDI6MTY",
                                "data-yw-t": !0,
                                "data-yw-s": !0,
                                children: "• Fully transparent"
                            }), y.jsx("div", {
                                className: "text-sm font-medium text-slate-500",
                                "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA0MDM6MTY",
                                "data-yw-t": !0,
                                "data-yw-s": !0,
                                children: "• No discount → No charge"
                            })]
                        })]
                    }), y.jsxs("div", {
                        className: "flex flex-col justify-center",
                        "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA0MDY6MTI",
                        "data-yw-s": !0,
                        children: [y.jsx("h2", {
                            className: "text-3xl font-bold mb-6",
                            "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA0MDc6MTQ",
                            "data-yw-t": !0,
                            "data-yw-s": !0,
                            children: "No Lock-ins. No Obligations."
                        }), y.jsx("p", {
                            className: "text-lg text-slate-600 mb-10",
                            "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA0MDg6MTQ",
                            "data-yw-t": !0,
                            "data-yw-s": !0,
                            children: "Participation is voluntary and non-exclusive. We believe in providing value, not enforcing contracts."
                        }), y.jsx("div", {
                            className: "grid grid-cols-2 gap-6",
                            "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA0MDk6MTQ",
                            "data-yw-s": !0,
                            children: [{
                                icon: y.jsx(is, {
                                    className: "text-red-500"
                                }),
                                text: "No contracts"
                            }, {
                                icon: y.jsx(is, {
                                    className: "text-red-500"
                                }),
                                text: "No minimum spend"
                            }, {
                                icon: y.jsx(is, {
                                    className: "text-red-500"
                                }),
                                text: "No exclusivity"
                            }, {
                                icon: y.jsx(is, {
                                    className: "text-red-500"
                                }),
                                text: "No obligation"
                            }].map( (p, m) => y.jsxs("div", {
                                className: "flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100",
                                "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA0MTY6MTg",
                                "data-yw-s": !0,
                                children: [p.icon, y.jsx("span", {
                                    className: "font-bold",
                                    "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA0MTg6MjA",
                                    "data-yw-s": !0,
                                    children: p.text
                                })]
                            }, m))
                        }), y.jsxs("div", {
                            className: "mt-10 flex items-center gap-4 p-6 bg-yellow-50 rounded-2xl border border-yellow-100",
                            "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA0MjI6MTQ",
                            "data-yw-s": !0,
                            children: [y.jsx("div", {
                                className: "w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0",
                                "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA0MjM6MTY",
                                "data-yw-s": !0,
                                children: y.jsx(z0, {
                                    className: "text-black"
                                })
                            }), y.jsx("p", {
                                className: "font-medium text-yellow-900",
                                "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA0MjY6MTY",
                                "data-yw-t": !0,
                                "data-yw-s": !0,
                                children: "Stop using at any time. Participation is voluntary and non-exclusive."
                            })]
                        })]
                    })]
                })
            })
        }), y.jsx("section", {
            className: "py-24 bg-slate-900 text-white",
            "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA0MzQ6Ng",
            "data-yw-s": !0,
            children: y.jsx("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA0MzU6OA",
                "data-yw-s": !0,
                children: y.jsxs("div", {
                    className: "grid lg:grid-cols-2 gap-20",
                    "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA0MzY6MTA",
                    "data-yw-s": !0,
                    children: [y.jsxs("div", {
                        "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA0Mzc6MTI",
                        "data-yw-s": !0,
                        children: [y.jsx("h2", {
                            className: "text-3xl font-bold mb-8",
                            "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA0Mzg6MTQ",
                            "data-yw-t": !0,
                            "data-yw-s": !0,
                            children: "Wholesaler Alignment"
                        }), y.jsx("p", {
                            className: "text-slate-400 mb-10 leading-relaxed",
                            "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA0Mzk6MTQ",
                            "data-yw-t": !0,
                            "data-yw-s": !0,
                            children: "Affiliate Warehouse operates strictly within existing wholesaler systems and terms. We do not resell goods, alter supplier terms, or circumvent systems."
                        }), y.jsx("div", {
                            className: "space-y-4",
                            "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA0NDI6MTQ",
                            "data-yw-s": !0,
                            children: ["Job-coded purchases", "Fully traceable transactions", "Processed through normal channels", "Wholesaler-set pricing & availability"].map( (p, m) => y.jsxs("div", {
                                className: "flex items-center gap-3",
                                "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA0NDk6MTg",
                                "data-yw-s": !0,
                                children: [y.jsx("div", {
                                    className: "w-5 h-5 rounded-full bg-slate-800 flex items-center justify-center",
                                    "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA0NTA6MjA",
                                    "data-yw-s": !0,
                                    children: y.jsx(Zt, {
                                        size: 12,
                                        className: "text-yellow-400"
                                    })
                                }), y.jsx("span", {
                                    className: "text-slate-300",
                                    "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA0NTM6MjA",
                                    "data-yw-s": !0,
                                    children: p
                                })]
                            }, m))
                        })]
                    }), y.jsxs("div", {
                        "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA0NTg6MTI",
                        "data-yw-s": !0,
                        children: [y.jsx("h2", {
                            className: "text-3xl font-bold mb-8",
                            "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA0NTk6MTQ",
                            "data-yw-t": !0,
                            "data-yw-s": !0,
                            children: "Collective Buying Explained"
                        }), y.jsxs("div", {
                            className: "bg-slate-800 p-8 rounded-3xl border border-slate-700",
                            "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA0NjA6MTQ",
                            "data-yw-s": !0,
                            children: [y.jsx("p", {
                                className: "text-slate-300 mb-6 leading-relaxed",
                                "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA0NjE6MTY",
                                "data-yw-t": !0,
                                "data-yw-s": !0,
                                children: "Independent contractors remain independent. When preferred contractors choose to purchase together nationally:"
                            }), y.jsxs("ul", {
                                className: "space-y-4 mb-8",
                                "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA0NjQ6MTY",
                                "data-yw-s": !0,
                                children: [y.jsxs("li", {
                                    className: "flex items-start gap-3",
                                    "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA0NjU6MTg",
                                    "data-yw-s": !0,
                                    children: [y.jsx("div", {
                                        className: "mt-1.5 w-1.5 h-1.5 rounded-full bg-yellow-400 flex-shrink-0",
                                        "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA0NjY6MjA",
                                        "data-yw-s": !0
                                    }), y.jsx("span", {
                                        className: "text-slate-200",
                                        "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA0Njc6MjA",
                                        "data-yw-t": !0,
                                        "data-yw-s": !0,
                                        children: "Purchasing visibility improves"
                                    })]
                                }), y.jsxs("li", {
                                    className: "flex items-start gap-3",
                                    "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA0Njk6MTg",
                                    "data-yw-s": !0,
                                    children: [y.jsx("div", {
                                        className: "mt-1.5 w-1.5 h-1.5 rounded-full bg-yellow-400 flex-shrink-0",
                                        "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA0NzA6MjA",
                                        "data-yw-s": !0
                                    }), y.jsx("span", {
                                        className: "text-slate-200",
                                        "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA0NzE6MjA",
                                        "data-yw-t": !0,
                                        "data-yw-s": !0,
                                        children: "Volume consistency increases"
                                    })]
                                }), y.jsxs("li", {
                                    className: "flex items-start gap-3",
                                    "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA0NzM6MTg",
                                    "data-yw-s": !0,
                                    children: [y.jsx("div", {
                                        className: "mt-1.5 w-1.5 h-1.5 rounded-full bg-yellow-400 flex-shrink-0",
                                        "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA0NzQ6MjA",
                                        "data-yw-s": !0
                                    }), y.jsx("span", {
                                        className: "text-slate-200",
                                        "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA0NzU6MjA",
                                        "data-yw-t": !0,
                                        "data-yw-s": !0,
                                        children: "Eligibility for higher pricing tiers may improve"
                                    })]
                                })]
                            }), y.jsx("div", {
                                className: "p-4 bg-yellow-400/10 rounded-xl border border-yellow-400/20 text-yellow-400 text-sm font-medium",
                                "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA0Nzg6MTY",
                                "data-yw-t": !0,
                                "data-yw-s": !0,
                                children: "This is structured collaboration — not market disruption. Suppliers gain stronger demand forecasting."
                            })]
                        })]
                    })]
                })
            })
        }), y.jsx("section", {
            className: "py-16 bg-slate-50 border-y border-slate-200",
            "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA0ODg6Ng",
            "data-yw-s": !0,
            children: y.jsx("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA0ODk6OA",
                "data-yw-s": !0,
                children: y.jsxs("div", {
                    className: "flex flex-wrap justify-center gap-x-12 gap-y-6 text-slate-500 font-bold uppercase tracking-widest text-xs",
                    "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA0OTA6MTA",
                    "data-yw-s": !0,
                    children: [y.jsxs("span", {
                        className: "flex items-center gap-2",
                        "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA0OTE6MTI",
                        "data-yw-s": !0,
                        children: [y.jsx(tl, {
                            size: 16
                        }), y.jsx("span", {
                            "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA0OTE6Nzk",
                            "data-yw-t": !0,
                            "data-yw-auto": !0,
                            children: " Procurement Support"
                        })]
                    }), y.jsxs("span", {
                        className: "flex items-center gap-2",
                        "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA0OTI6MTI",
                        "data-yw-s": !0,
                        children: [y.jsx(vf, {
                            size: 16
                        }), y.jsx("span", {
                            "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA0OTI6Nzc",
                            "data-yw-t": !0,
                            "data-yw-auto": !0,
                            children: " Price Monitoring"
                        })]
                    }), y.jsxs("span", {
                        className: "flex items-center gap-2",
                        "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA0OTM6MTI",
                        "data-yw-s": !0,
                        children: [y.jsx(k0, {
                            size: 16
                        }), y.jsx("span", {
                            "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA0OTM6NzI",
                            "data-yw-t": !0,
                            "data-yw-auto": !0,
                            children: " Non-Reseller"
                        })]
                    }), y.jsxs("span", {
                        className: "flex items-center gap-2",
                        "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA0OTQ6MTI",
                        "data-yw-s": !0,
                        children: [y.jsx(wf, {
                            size: 16
                        }), y.jsx("span", {
                            "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA0OTQ6NzM",
                            "data-yw-t": !0,
                            "data-yw-auto": !0,
                            children: " Voluntary Participation"
                        })]
                    })]
                })
            })
        }), y.jsx("section", {
            id: "faq",
            className: "py-24",
            "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA1MDA6Ng",
            "data-yw-s": !0,
            children: y.jsxs("div", {
                className: "max-w-3xl mx-auto px-4 sm:px-6 lg:px-8",
                "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA1MDE6OA",
                "data-yw-s": !0,
                children: [y.jsxs("div", {
                    className: "text-center mb-16",
                    "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA1MDI6MTA",
                    "data-yw-s": !0,
                    children: [y.jsx("h2", {
                        className: "text-3xl lg:text-4xl font-bold mb-4",
                        "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA1MDM6MTI",
                        "data-yw-t": !0,
                        "data-yw-s": !0,
                        children: "Frequently Asked Questions"
                    }), y.jsx("p", {
                        className: "text-slate-600",
                        "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA1MDQ6MTI",
                        "data-yw-t": !0,
                        "data-yw-s": !0,
                        children: "Everything you need to know about the Affiliate Warehouse model"
                    })]
                }), y.jsx("div", {
                    className: "space-y-4",
                    "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA1MDY6MTA",
                    "data-yw-s": !0,
                    children: f.map( (p, m) => y.jsxs("div", {
                        className: "border border-slate-200 rounded-2xl overflow-hidden",
                        "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA1MDg6MTQ",
                        "data-yw-s": !0,
                        children: [y.jsxs("button", {
                            className: "w-full px-6 py-5 text-left flex justify-between items-center hover:bg-slate-50 transition-colors",
                            onClick: () => a(i === m ? null : m),
                            "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA1MDk6MTY",
                            "data-yw-s": !0,
                            children: [y.jsx("span", {
                                className: "font-bold text-slate-900",
                                "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA1MTM6MTg",
                                "data-yw-s": !0,
                                children: p.question
                            }), y.jsx(xf, {
                                className: `transition-transform ${i === m ? "rotate-90" : ""}`
                            })]
                        }), y.jsx(Rf, {
                            children: i === m && y.jsx(_i.div, {
                                initial: {
                                    height: 0,
                                    opacity: 0
                                },
                                animate: {
                                    height: "auto",
                                    opacity: 1
                                },
                                exit: {
                                    height: 0,
                                    opacity: 0
                                },
                                className: "px-6 pb-5 text-slate-600 leading-relaxed",
                                children: p.answer
                            })
                        })]
                    }, m))
                })]
            })
        }), y.jsx("section", {
            className: "py-24 bg-yellow-400",
            "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA1MzU6Ng",
            "data-yw-s": !0,
            children: y.jsx("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA1MzY6OA",
                "data-yw-s": !0,
                children: y.jsx("div", {
                    className: "grid md:grid-cols-3 gap-8",
                    "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA1Mzc6MTA",
                    "data-yw-s": !0,
                    children: d.map( (p, m) => y.jsxs("div", {
                        className: "bg-white p-8 rounded-3xl shadow-xl shadow-yellow-600/10",
                        "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA1Mzk6MTQ",
                        "data-yw-s": !0,
                        children: [y.jsx("div", {
                            className: "flex gap-1 mb-4",
                            "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA1NDA6MTY",
                            "data-yw-s": !0,
                            children: [...Array(p.stars)].map( (g, v) => y.jsx(B0, {
                                size: 16,
                                className: "fill-yellow-400 text-yellow-400"
                            }, v))
                        }), y.jsxs("p", {
                            className: "text-lg font-medium text-slate-900 mb-6 italic",
                            "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA1NDU6MTY",
                            "data-yw-s": !0,
                            children: [y.jsx("span", {
                                "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA1NDU6Nzg",
                                "data-yw-t": !0,
                                "data-yw-auto": !0,
                                children: '"'
                            }), p.text, y.jsx("span", {
                                "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA1NDU6OTI",
                                "data-yw-t": !0,
                                "data-yw-auto": !0,
                                children: '"'
                            })]
                        }), y.jsxs("div", {
                            className: "text-sm font-bold text-slate-500",
                            "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA1NDY6MTY",
                            "data-yw-s": !0,
                            children: [y.jsx("span", {
                                "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA1NDY6NjY",
                                "data-yw-t": !0,
                                "data-yw-auto": !0,
                                children: "— "
                            }), p.author]
                        })]
                    }, m))
                })
            })
        }), y.jsx("section", {
            id: "get-started",
            className: "py-24 bg-slate-50",
            "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA1NTQ6Ng",
            "data-yw-s": !0,
            children: y.jsxs("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA1NTU6OA",
                "data-yw-s": !0,
                children: [y.jsxs("div", {
                    className: "text-center mb-16",
                    "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA1NTY6MTA",
                    "data-yw-s": !0,
                    children: [y.jsx("h2", {
                        className: "text-3xl lg:text-4xl font-bold mb-4",
                        "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA1NTc6MTI",
                        "data-yw-t": !0,
                        "data-yw-s": !0,
                        children: "Get Started"
                    }), y.jsx("p", {
                        className: "text-slate-600",
                        "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA1NTg6MTI",
                        "data-yw-t": !0,
                        "data-yw-s": !0,
                        children: "Choose the pathway that fits your business"
                    })]
                }), y.jsxs("div", {
                    className: "grid lg:grid-cols-3 gap-8",
                    "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA1NjE6MTA",
                    "data-yw-s": !0,
                    children: [y.jsxs("div", {
                        className: "bg-white p-8 rounded-[40px] border-2 border-yellow-400 shadow-xl relative overflow-hidden",
                        "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA1NjM6MTI",
                        "data-yw-s": !0,
                        children: [y.jsx("div", {
                            className: "absolute top-0 right-0 bg-yellow-400 text-black text-[10px] font-black px-4 py-1 rounded-bl-xl uppercase tracking-widest",
                            "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA1NjQ6MTQ",
                            "data-yw-t": !0,
                            "data-yw-s": !0,
                            children: "Primary"
                        }), y.jsxs("h3", {
                            className: "text-2xl font-bold mb-2 flex items-center gap-2",
                            "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA1NjU6MTQ",
                            "data-yw-s": !0,
                            children: [y.jsx("div", {
                                className: "w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center text-sm",
                                "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA1NjY6MTY",
                                "data-yw-t": !0,
                                "data-yw-s": !0,
                                children: "🟡"
                            }), y.jsx("span", {
                                "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA1NjY6MTE1",
                                "data-yw-t": !0,
                                "data-yw-auto": !0,
                                children: "Preferred Contractor"
                            })]
                        }), y.jsx("p", {
                            className: "text-sm text-slate-500 mb-8",
                            "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA1Njk6MTQ",
                            "data-yw-t": !0,
                            "data-yw-s": !0,
                            children: "Full application for corporate trade account access."
                        }), y.jsxs("form", {
                            className: "space-y-4",
                            onSubmit: p => {
                                p.preventDefault(),
                                alert("Application received! We will call you at your scheduled time.")
                            }
                            ,
                            "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA1NzE6MTQ",
                            "data-yw-s": !0,
                            children: [y.jsx("input", {
                                type: "text",
                                placeholder: "Business Name",
                                className: "w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none transition-all",
                                required: !0,
                                "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA1NzI6MTY",
                                "data-yw-s": !0
                            }), y.jsx("input", {
                                type: "text",
                                placeholder: "Contact Name",
                                className: "w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none transition-all",
                                required: !0,
                                "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA1NzM6MTY",
                                "data-yw-s": !0
                            }), y.jsx("input", {
                                type: "tel",
                                placeholder: "Mobile",
                                className: "w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none transition-all",
                                required: !0,
                                "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA1NzQ6MTY",
                                "data-yw-s": !0
                            }), y.jsx("input", {
                                type: "email",
                                placeholder: "Email",
                                className: "w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none transition-all",
                                required: !0,
                                "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA1NzU6MTY",
                                "data-yw-s": !0
                            }), y.jsxs("div", {
                                className: "p-4 bg-slate-50 rounded-xl border border-slate-100 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-colors",
                                "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA1Nzc6MTY",
                                "data-yw-s": !0,
                                children: [y.jsx(gf, {
                                    className: "text-slate-400",
                                    size: 20
                                }), y.jsx("span", {
                                    className: "text-sm font-medium text-slate-600",
                                    "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA1Nzk6MTg",
                                    "data-yw-t": !0,
                                    "data-yw-s": !0,
                                    children: "Schedule Onboarding Call"
                                })]
                            }), y.jsx("button", {
                                className: "w-full bg-black text-white py-4 rounded-xl font-bold hover:bg-slate-800 transition-all shadow-lg shadow-black/10",
                                "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA1ODI6MTY",
                                "data-yw-t": !0,
                                "data-yw-s": !0,
                                children: "Submit Application"
                            })]
                        }), y.jsxs("div", {
                            className: "mt-6 space-y-2",
                            "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA1ODc6MTQ",
                            "data-yw-s": !0,
                            children: [y.jsx("div", {
                                className: "text-[10px] font-bold text-slate-400 uppercase tracking-widest",
                                "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA1ODg6MTY",
                                "data-yw-t": !0,
                                "data-yw-s": !0,
                                children: "Benefits"
                            }), y.jsxs("div", {
                                className: "text-xs text-slate-600 flex items-center gap-2",
                                "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA1ODk6MTY",
                                "data-yw-s": !0,
                                children: [y.jsx(Zt, {
                                    size: 12,
                                    className: "text-yellow-500"
                                }), y.jsx("span", {
                                    "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA1ODk6MTI3",
                                    "data-yw-t": !0,
                                    "data-yw-auto": !0,
                                    children: " No discount, no charge."
                                })]
                            }), y.jsxs("div", {
                                className: "text-xs text-slate-600 flex items-center gap-2",
                                "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA1OTA6MTY",
                                "data-yw-s": !0,
                                children: [y.jsx(Zt, {
                                    size: 12,
                                    className: "text-yellow-500"
                                }), y.jsx("span", {
                                    "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA1OTA6MTI3",
                                    "data-yw-t": !0,
                                    "data-yw-auto": !0,
                                    children: " Compare pricing anytime."
                                })]
                            })]
                        })]
                    }), y.jsxs("div", {
                        className: "bg-white p-8 rounded-[40px] border border-slate-200 shadow-sm",
                        "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA1OTU6MTI",
                        "data-yw-s": !0,
                        children: [y.jsxs("h3", {
                            className: "text-2xl font-bold mb-2 flex items-center gap-2",
                            "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA1OTY6MTQ",
                            "data-yw-s": !0,
                            children: [y.jsx("div", {
                                className: "w-8 h-8 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center text-sm",
                                "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA1OTc6MTY",
                                "data-yw-t": !0,
                                "data-yw-s": !0,
                                children: "🔵"
                            }), y.jsx("span", {
                                "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA1OTc6MTI3",
                                "data-yw-t": !0,
                                "data-yw-auto": !0,
                                children: "Request Information"
                            })]
                        }), y.jsx("p", {
                            className: "text-sm text-slate-500 mb-8",
                            "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA2MDA6MTQ",
                            "data-yw-t": !0,
                            "data-yw-s": !0,
                            children: "Not ready to apply? Request a call-back to learn more."
                        }), y.jsxs("form", {
                            className: "space-y-4",
                            onSubmit: p => {
                                p.preventDefault(),
                                alert("Request received! We will call you soon.")
                            }
                            ,
                            "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA2MDI6MTQ",
                            "data-yw-s": !0,
                            children: [y.jsx("input", {
                                type: "text",
                                placeholder: "Name",
                                className: "w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 outline-none transition-all",
                                required: !0,
                                "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA2MDM6MTY",
                                "data-yw-s": !0
                            }), y.jsx("input", {
                                type: "text",
                                placeholder: "Business",
                                className: "w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 outline-none transition-all",
                                required: !0,
                                "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA2MDQ6MTY",
                                "data-yw-s": !0
                            }), y.jsx("input", {
                                type: "tel",
                                placeholder: "Phone",
                                className: "w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 outline-none transition-all",
                                required: !0,
                                "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA2MDU6MTY",
                                "data-yw-s": !0
                            }), y.jsx("input", {
                                type: "email",
                                placeholder: "Email",
                                className: "w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 outline-none transition-all",
                                required: !0,
                                "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA2MDY6MTY",
                                "data-yw-s": !0
                            }), y.jsxs("div", {
                                className: "p-4 bg-slate-50 rounded-xl border border-slate-100 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-colors",
                                "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA2MDg6MTY",
                                "data-yw-s": !0,
                                children: [y.jsx(gf, {
                                    className: "text-slate-400",
                                    size: 20
                                }), y.jsx("span", {
                                    className: "text-sm font-medium text-slate-600",
                                    "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA2MTA6MTg",
                                    "data-yw-t": !0,
                                    "data-yw-s": !0,
                                    children: "Book Information Call"
                                })]
                            }), y.jsx("button", {
                                className: "w-full bg-slate-900 text-white py-4 rounded-xl font-bold hover:bg-black transition-all",
                                "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA2MTM6MTY",
                                "data-yw-t": !0,
                                "data-yw-s": !0,
                                children: "Request Call-Back"
                            })]
                        }), y.jsxs("div", {
                            className: "mt-6 space-y-2",
                            "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA2MTg6MTQ",
                            "data-yw-s": !0,
                            children: [y.jsx("div", {
                                className: "text-[10px] font-bold text-slate-400 uppercase tracking-widest",
                                "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA2MTk6MTY",
                                "data-yw-t": !0,
                                "data-yw-s": !0,
                                children: "Note"
                            }), y.jsxs("div", {
                                className: "text-xs text-slate-600 flex items-center gap-2",
                                "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA2MjA6MTY",
                                "data-yw-s": !0,
                                children: [y.jsx(Zt, {
                                    size: 12,
                                    className: "text-blue-500"
                                }), y.jsx("span", {
                                    "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA2MjA6MTI1",
                                    "data-yw-t": !0,
                                    "data-yw-auto": !0,
                                    children: " No discount, no charge."
                                })]
                            }), y.jsxs("div", {
                                className: "text-xs text-slate-600 flex items-center gap-2",
                                "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA2MjE6MTY",
                                "data-yw-s": !0,
                                children: [y.jsx(Zt, {
                                    size: 12,
                                    className: "text-blue-500"
                                }), y.jsx("span", {
                                    "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA2MjE6MTI1",
                                    "data-yw-t": !0,
                                    "data-yw-auto": !0,
                                    children: " Free to compare against current suppliers."
                                })]
                            })]
                        })]
                    }), y.jsxs("div", {
                        className: "bg-white p-8 rounded-[40px] border border-slate-200 shadow-sm",
                        "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA2MjY6MTI",
                        "data-yw-s": !0,
                        children: [y.jsxs("h3", {
                            className: "text-2xl font-bold mb-2 flex items-center gap-2",
                            "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA2Mjc6MTQ",
                            "data-yw-s": !0,
                            children: [y.jsx("div", {
                                className: "w-8 h-8 bg-green-100 text-green-600 rounded-lg flex items-center justify-center text-sm",
                                "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA2Mjg6MTY",
                                "data-yw-t": !0,
                                "data-yw-s": !0,
                                children: "🟢"
                            }), y.jsx("span", {
                                "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA2Mjg6MTI5",
                                "data-yw-t": !0,
                                "data-yw-auto": !0,
                                children: "Wholesaler EOI"
                            })]
                        }), y.jsx("p", {
                            className: "text-sm text-slate-500 mb-8",
                            "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA2MzE6MTQ",
                            "data-yw-t": !0,
                            "data-yw-s": !0,
                            children: "For wholesalers interested in the Affiliate Warehouse model."
                        }), y.jsxs("form", {
                            className: "space-y-4",
                            onSubmit: p => {
                                p.preventDefault(),
                                alert("EOI received! We will be in touch.")
                            }
                            ,
                            "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA2MzM6MTQ",
                            "data-yw-s": !0,
                            children: [y.jsx("input", {
                                type: "text",
                                placeholder: "Company Name",
                                className: "w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-green-400 focus:ring-2 focus:ring-green-400/20 outline-none transition-all",
                                required: !0,
                                "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA2MzQ6MTY",
                                "data-yw-s": !0
                            }), y.jsx("input", {
                                type: "text",
                                placeholder: "Contact Name",
                                className: "w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-green-400 focus:ring-2 focus:ring-green-400/20 outline-none transition-all",
                                required: !0,
                                "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA2MzU6MTY",
                                "data-yw-s": !0
                            }), y.jsx("input", {
                                type: "email",
                                placeholder: "Email",
                                className: "w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-green-400 focus:ring-2 focus:ring-green-400/20 outline-none transition-all",
                                required: !0,
                                "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA2MzY6MTY",
                                "data-yw-s": !0
                            }), y.jsx("input", {
                                type: "tel",
                                placeholder: "Phone",
                                className: "w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-green-400 focus:ring-2 focus:ring-green-400/20 outline-none transition-all",
                                required: !0,
                                "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA2Mzc6MTY",
                                "data-yw-s": !0
                            }), y.jsx("textarea", {
                                placeholder: "Optional Message",
                                className: "w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-green-400 focus:ring-2 focus:ring-green-400/20 outline-none transition-all h-24 resize-none",
                                "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA2Mzg6MTY",
                                "data-yw-s": !0
                            }), y.jsx("button", {
                                className: "w-full bg-slate-900 text-white py-4 rounded-xl font-bold hover:bg-black transition-all",
                                "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA2NDA6MTY",
                                "data-yw-t": !0,
                                "data-yw-s": !0,
                                children: "Submit Expression of Interest"
                            })]
                        })]
                    })]
                })]
            })
        }), y.jsx("footer", {
            className: "py-16 bg-white border-t border-slate-100",
            "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA2NTA6Ng",
            "data-yw-s": !0,
            children: y.jsxs("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA2NTE6OA",
                "data-yw-s": !0,
                children: [y.jsxs("div", {
                    className: "grid md:grid-cols-2 gap-12 mb-12",
                    "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA2NTI6MTA",
                    "data-yw-s": !0,
                    children: [y.jsxs("div", {
                        "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA2NTM6MTI",
                        "data-yw-s": !0,
                        children: [y.jsxs("div", {
                            className: "flex items-center gap-2 mb-6",
                            "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA2NTQ6MTQ",
                            "data-yw-s": !0,
                            children: [y.jsx("div", {
                                className: "w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center font-bold text-black text-lg",
                                "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA2NTU6MTY",
                                "data-yw-t": !0,
                                "data-yw-s": !0,
                                children: "AW"
                            }), y.jsx("span", {
                                className: "font-bold text-lg tracking-tight uppercase",
                                "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA2NTg6MTY",
                                "data-yw-t": !0,
                                "data-yw-s": !0,
                                children: "Affiliate Warehouse"
                            })]
                        }), y.jsxs("p", {
                            className: "text-sm text-slate-500 max-w-md leading-relaxed",
                            "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA2NjA6MTQ",
                            "data-yw-s": !0,
                            children: [y.jsx("span", {
                                "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA2NjA6Nzc",
                                "data-yw-t": !0,
                                "data-yw-auto": !0,
                                children: "Affiliate Warehouse Pty Ltd | ABN XX XXX XXX XXX"
                            }), y.jsx("br", {
                                "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA2NjE6NjQ",
                                "data-yw-s": !0
                            }), y.jsx("span", {
                                "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA2NjE6NzA",
                                "data-yw-t": !0,
                                "data-yw-auto": !0,
                                children: "Procurement Support & Price Monitoring Service | Australia"
                            })]
                        })]
                    }), y.jsxs("div", {
                        className: "text-sm text-slate-400 space-y-4",
                        "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA2NjU6MTI",
                        "data-yw-s": !0,
                        children: [y.jsx("p", {
                            "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA2NjY6MTQ",
                            "data-yw-t": !0,
                            "data-yw-s": !0,
                            children: "Pricing and discounts are set solely by wholesalers and are subject to change. No guaranteed savings apply to all products. Savings vary by product category, supplier, volume consistency, and market conditions."
                        }), y.jsx("p", {
                            "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA2Njc6MTQ",
                            "data-yw-t": !0,
                            "data-yw-s": !0,
                            children: "Larger or high-volume product categories typically see stronger pricing outcomes. Fees apply only where verifiable savings occur. Participation is voluntary and non-exclusive."
                        })]
                    })]
                }), y.jsxs("div", {
                    className: "pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold text-slate-400 uppercase tracking-widest",
                    "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA2NzA6MTA",
                    "data-yw-s": !0,
                    children: [y.jsx("span", {
                        "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA2NzE6MTI",
                        "data-yw-t": !0,
                        "data-yw-s": !0,
                        children: "© 2026 Affiliate Warehouse. All Rights Reserved."
                    }), y.jsxs("div", {
                        className: "flex gap-8",
                        "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA2NzI6MTI",
                        "data-yw-s": !0,
                        children: [y.jsx("a", {
                            href: "#",
                            className: "hover:text-black transition-colors",
                            "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA2NzM6MTQ",
                            "data-yw-t": !0,
                            "data-yw-s": !0,
                            "data-yw-l": !0,
                            children: "Privacy Policy"
                        }), y.jsx("a", {
                            href: "#",
                            className: "hover:text-black transition-colors",
                            "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA2NzQ6MTQ",
                            "data-yw-t": !0,
                            "data-yw-s": !0,
                            "data-yw-l": !0,
                            children: "Terms of Service"
                        }), y.jsx("a", {
                            href: "#",
                            className: "hover:text-black transition-colors",
                            "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA2NzU6MTQ",
                            "data-yw-t": !0,
                            "data-yw-s": !0,
                            "data-yw-l": !0,
                            children: "Compliance"
                        })]
                    })]
                })]
            })
        })]
    })
}
;
function p1() {
    return y.jsx(h1, {})
}
g0.createRoot(document.getElementById("root")).render(y.jsx(I.StrictMode, {
    children: y.jsx(p1, {})
}));
//# sourceMappingURL=index-CNipe1TQ.js.map

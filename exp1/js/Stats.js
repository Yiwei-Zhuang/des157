// stats.js r9 - http://github.com/mrdoob/stats.js
var Stats = function() {
    var h,
        a,
        r = 0,
        s = 0,
        i = Date.now(),
        u = i,
        t = i,
        l = 0,
        n = 1E3,
        o = 0,
        e,
        j,
        f,
        b = [[16, 16, 48], [0, 255, 255]],
        m = 0,
        p = 1E3,
        q = 0,
        d,
        k,
        g,
        c = [[16, 48, 16], [0, 255, 0]];
    h = document.createElement("div");
    h.style.cursor = "pointer";
    h.style.width = "80px";
    h.style.opacity = "0.9";
    h.style.zIndex = "10001";
    h.addEventListener("mousedown", function(a) {
        a.preventDefault();
        r = (r + 1) % 2;
        0 == r ? (e.style.display = "block", d.style.display = "none") : (e.style.display = "none", d.style.display = "block")
    }, !1);
    e = document.createElement("div");
    e.style.textAlign =
    "left";
    e.style.lineHeight = "1.2em";
    e.style.backgroundColor = "rgb(" + Math.floor(b[0][0] / 2) + "," + Math.floor(b[0][1] / 2) + "," + Math.floor(b[0][2] / 2) + ")";
    e.style.padding = "0 0 3px 3px";
    h.appendChild(e);
    j = document.createElement("div");
    j.style.fontFamily = "Helvetica, Arial, sans-serif";
    j.style.fontSize = "9px";
    j.style.color = "rgb(" + b[1][0] + "," + b[1][1] + "," + b[1][2] + ")";
    j.style.fontWeight = "bold";
    j.innerHTML = "FPS";
    e.appendChild(j);
    f = document.createElement("div");
    f.style.position = "relative";
    f.style.width = "74px";
    f.style.height =
    "30px";
    f.style.backgroundColor = "rgb(" + b[1][0] + "," + b[1][1] + "," + b[1][2] + ")";
    for (e.appendChild(f); 74 > f.children.length;)
        a = document.createElement("span"), a.style.width = "1px", a.style.height = "30px", a.style.cssFloat = "left", a.style.backgroundColor = "rgb(" + b[0][0] + "," + b[0][1] + "," + b[0][2] + ")", f.appendChild(a);
    d = document.createElement("div");
    d.style.textAlign = "left";
    d.style.lineHeight = "1.2em";
    d.style.backgroundColor = "rgb(" + Math.floor(c[0][0] / 2) + "," + Math.floor(c[0][1] / 2) + "," + Math.floor(c[0][2] / 2) + ")";
    d.style.padding =
    "0 0 3px 3px";
    d.style.display = "none";
    h.appendChild(d);
    k = document.createElement("div");
    k.style.fontFamily = "Helvetica, Arial, sans-serif";
    k.style.fontSize = "9px";
    k.style.color = "rgb(" + c[1][0] + "," + c[1][1] + "," + c[1][2] + ")";
    k.style.fontWeight = "bold";
    k.innerHTML = "MS";
    d.appendChild(k);
    g = document.createElement("div");
    g.style.position = "relative";
    g.style.width = "74px";
    g.style.height = "30px";
    g.style.backgroundColor = "rgb(" + c[1][0] + "," + c[1][1] + "," + c[1][2] + ")";
    for (d.appendChild(g); 74 > g.children.length;)
        a = document.createElement("span"),
        a.style.width = "1px", a.style.height = 30 * Math.random() + "px", a.style.cssFloat = "left", a.style.backgroundColor = "rgb(" + c[0][0] + "," + c[0][1] + "," + c[0][2] + ")", g.appendChild(a);
    return {
        getDomElement: function() {
            return h
        },
        getFps: function() {
            return l
        },
        getFpsMin: function() {
            return n
        },
        getFpsMax: function() {
            return o
        },
        getMs: function() {
            return m
        },
        getMsMin: function() {
            return p
        },
        getMsMax: function() {
            return q
        },
        update: function() {
            i = Date.now();
            m = i - u;
            p = Math.min(p, m);
            q = Math.max(q, m);
            k.textContent = m + " MS (" + p + "-" + q + ")";
            var a = Math.min(30,
            30 - 30 * (m / 200));
            g.appendChild(g.firstChild).style.height = a + "px";
            u = i;
            s++;
            if (i > t + 1E3)
                l = Math.round(1E3 * s / (i - t)), n = Math.min(n, l), o = Math.max(o, l), j.textContent = l + " FPS (" + n + "-" + o + ")", a = Math.min(30, 30 - 30 * (l / 100)), f.appendChild(f.firstChild).style.height = a + "px", t = i, s = 0
        }
    }
};

const ayn = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890"
const aynArr = ayn.split("");
console.log(aynArr)
const QU = {
get: (id , use) => {
    const el = document.getElementById(id);
    if (!el) return null; // اگه المان پیدا نشد
    if(use == true) {
        return document.getElementById(id)
    }
    if ("value" in el && el.value !== "") {
        return el.value; // اگه input/textarea و مقدارش خالی نیست
    } else {
        return el.innerHTML; // بقیه عناصر یا input خالی
    }
},

    RandomStr: (length , loc) => {

        var ran = "";
        for (var i = 0; i < length ; i++) {
            ran += aynArr[Math.floor(Math.random() * aynArr.length)]
            
        }
        if(loc != undefined || loc != null){
            document.getElementById(loc).innerHTML = ran
        }
        return ran
    



    },
    RandomBool: (loc) => {
    if(loc != undefined || loc != null){
        document.getElementById(loc).innerHTML = Math.random() < 0.5
    }
    return Math.random() < 0.5; // true یا false

    },
    RandomHex: (target) => {

        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
        }
        if(target != null && target != undefined){
            document.getElementById(target).style.color = color

        }
        return color
        
    },


    //END Random and Start Date==========================================================

    Date: (ld , loc) => {

        var date;
        if(ld == undefined || ld == "" || ld == null){
            date = new Date().toLocaleDateString("en-US")

            if(loc != undefined || loc != null){
            document.getElementById(loc).innerHTML = date
            }
            return date
        }
        else{
        date = new Date().toLocaleDateString(ld);
            if(loc != undefined || loc != null){
            document.getElementById(loc).innerHTML = date
            }
        return date
        
        }

        
    },
    Time: (target) => {
        var date = new Date();
        var fullTime = '';
        fullTime =date.getHours()+ 1 + ":" + date.getMinutes() + ":" + date.getSeconds();
        if(target != null && target != undefined){
            document.getElementById(target).innerHTML = fullTime;
        }
        return fullTime.toString();
    },
    //END Date and time, START String options=======================================================================================
    Case: {
        upper: (text) => text.toUpperCase(),
        lower: (text) => text.toLowerCase(),
        capitalize: (text) =>
            text.charAt(0).toUpperCase() + text.slice(1),
        capitalizeWords: (text) =>
            text.split(" ")
                .map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
                .join(" ")
    },
    Reverse: (txt) => {
        return txt.split("").reverse().join("")

    },Slugify: (text) => {
    if (!text) return "";



    let str = text.toString().toLowerCase();

    // حذف accent و کاراکترهای غیرمجاز
    str = str
        .normalize("NFD")              
        .replace(/[\u0300-\u036f]/g, "") 
        .trim()                          
        .replace(/\s+/g, "-");          

    return str;
},
Shuffle: (txt) => {
    var text = txt.split("");
    var res = "";
    while(text.length > 0){
        var index = Math.floor(Math.random() * text.length);
        res += text[index];
        text.splice(index, 1); // حذف عنصر انتخاب شده
    }
    return res;
},
    Clamp: (value, min, max) => {
        
        return Math.min(Math.max(value, min), max)

    },
    Percent: (part, total) => {
        return total === 0 ? 0 : (part / total) * 100
        
    },
    Remove: (id) => {
        document.getElementById(id).remove();
    },

      TypeWriter: ({ texts = [], target, speed = 100, pause = 1000, loop = true }) => {
        if (!target || !texts.length) return;
        const el = document.getElementById(target);
        let textIndex = 0;
        let charIndex = 0;
        let forward = true;

        function type() {
            if (!el) return;

            el.innerHTML = texts[textIndex].slice(0, charIndex);

            if (forward) {
                if (charIndex < texts[textIndex].length) {
                    charIndex++;
                    setTimeout(type, speed);
                } else {
                    forward = false;
                    setTimeout(type, pause);
                }
            } else {
                if (charIndex > 0) {
                    charIndex--;
                    setTimeout(type, speed / 2);
                } else {
                    forward = true;
                    textIndex = (textIndex + 1) % texts.length;
                    if (!loop && textIndex === 0) return;
                    setTimeout(type, speed);
                }
            }
        }

        type();
    },
    //Get system Data:======================================

System: {
  data: (key, loc) => {
    const info = {
      browser: navigator.userAgent,
      language: navigator.language,
      online: navigator.onLine,
      platform: navigator.platform,
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      screen: `${window.screen.width}x${window.screen.height}`
    };

    let result;
    if (!key) {
      result = info;
    } else {
      result = info[key] || `Key "${key}" not found`;
    }

    if (loc) {
      document.getElementById(loc).innerText =
        typeof result === "object" ? JSON.stringify(result, null, 2) : result;
    }

    return result;
  }
},

CountDown: (start, target) => {
  const el = document.getElementById(target);
  if (!el) return;

  let current = start;
  el.innerText = current;

  const timer = setInterval(() => {
    current--;
    if (current < 0) {
      clearInterval(timer);
      el.innerText = "Time's up!";
    } else {
      el.innerText = current;
    }
  }, 1000);
},

Highlight: (text, target, color = "yellow") => {
    let el = target ? document.getElementById(target) : document.body;
    if(!el) return;

    const walk = (node) => {
        if(node.nodeType === 3) { // text node
            const regex = new RegExp(`(${text})`, "gi");
            if(regex.test(node.nodeValue)) {
                const span = document.createElement("span");
                span.innerHTML = node.nodeValue.replace(regex, `<span style="background-color:${color}">$1</span>`);
                node.parentNode.replaceChild(span, node);
            }
        } else if(node.nodeType === 1 && !["INPUT","TEXTAREA"].includes(node.tagName)) {
            node.childNodes.forEach(child => walk(child));
        }
    };

    walk(el);
},
change: (id, callback) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.addEventListener("input", (e) => {
        callback(e.target.value);
    });
},
RemoveHighlight: (color = "yellow") => {
    const spans = document.querySelectorAll(`span[style*="background-color:${color}"]`);
    spans.forEach(span => {
        const parent = span.parentNode;
        parent.replaceChild(document.createTextNode(span.textContent), span);
        parent.normalize(); // می‌چسبونه متن‌ها بهم بعد از حذف
    });
},
Theme: (mode) => {
    if(mode === "dark") document.body.classList.add("dark");
    else if(mode === "light") document.body.classList.remove("dark");
    else document.body.classList.toggle("dark"); // toggle if mode not set
},

Notify : (msg, type="info", duration=3000) => {
    // کانتینر اصلی رو بسازیم اگه وجود نداشته باشه
    let container = document.getElementById("qu-notify-container");
    if(!container){
        container = document.createElement("div");
        container.id = "qu-notify-container";
        container.style.position = "fixed";
        container.style.top = "20px";
        container.style.right = "20px";
        container.style.zIndex = 9999;
        container.style.display = "flex";
        container.style.flexDirection = "column";
        container.style.gap = "10px";
        document.body.appendChild(container);
    }

    // خود notification
    const note = document.createElement("div");
    note.innerText = msg;
    note.style.padding = "10px 15px";
    note.style.borderRadius = "8px";
    note.style.color = "#fff";
    note.style.boxShadow = "0 4px 12px rgba(0,0,0,0.2)";
    note.style.opacity = "0";
    note.style.transition = "opacity 0.3s, transform 0.3s";

    // رنگ بر اساس type
    if(type === "success") note.style.background = "#4caf50";
    else if(type === "error") note.style.background = "#f44336";
    else note.style.background = "#2196f3"; // info

    container.appendChild(note);

    // انیمیشن ورود
    setTimeout(()=> { note.style.opacity = "1"; note.style.transform="translateY(0)"; }, 10);

    // حذف بعد از duration
    setTimeout(()=>{
        note.style.opacity = "0";
        note.style.transform = "translateY(-10px)";
        setTimeout(()=> note.remove(), 300);
    }, duration);
},

Scroll: (to = 0 , sp = 500) => {    
    window.scrollTo({ top: 500, behavior: "smooth" });

    let targetPos = 0;

    if (typeof to === "string") {
        const el = document.querySelector(to);
        if (!el) return;
        targetPos = el.getBoundingClientRect().top + window.scrollY;
    } else if (typeof to === "number") {
        targetPos = to;
    } else {
        return;
    }

    const startPos = window.scrollY;
    const distance = targetPos - startPos;
    const duration = sp; // مدت اسکرول بر حسب میلی‌ثانیه
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;

        // easeInOutCubic برای نرم بودن حرکت
        const ease = (t) =>
            t < 0.5
                ? 4 * t * t * t
                : 1 - Math.pow(-2 * t + 2, 3) / 2;

        const progress = Math.min(timeElapsed / duration, 1);
        const easeProgress = ease(progress);

        window.scrollTo(0, startPos + distance * easeProgress);

        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    requestAnimationFrame(animation);
},

Fade: (target, type="in", duration=500, displayStyle="flex") => {
    const el = typeof target === "string" ? document.getElementById(target) : target;
    if(!el) return;

    let last = +new Date();

    if(type === "in") {
        el.style.opacity = 0;
        el.style.display = displayStyle; // <- flex یا block
        const tick = () => {
            el.style.opacity = +el.style.opacity + (new Date() - last) / duration;
            last = +new Date();
            if(+el.style.opacity < 1) requestAnimationFrame(tick);
        };
        tick();
    } else if(type === "out") {
        el.style.opacity = 1;
        const tick = () => {
            el.style.opacity = +el.style.opacity - (new Date() - last) / duration;
            last = +new Date();
            if(+el.style.opacity > 0) requestAnimationFrame(tick);
            else el.style.display = "none";
        };
        tick();
    }
},

Copy: (textOrSelector) => {
    let text = "";
    if(typeof textOrSelector === "string") {
        const el = document.querySelector(textOrSelector);
        text = el ? (el.value || el.innerText) : textOrSelector;
    }
    navigator.clipboard.writeText(text)
        .then(()=> console.log("Copied to clipboard:", text))
        .catch(e=> console.error("Copy failed", e));
},
append: (selector, fn) => {
  const el = document.querySelector(selector);
  if (!el) return;

  const html = typeof fn === "function" ? fn() : fn;
  if (!html) return;

  const tpl = document.createElement("template");
  tpl.innerHTML = html.trim();
  el.appendChild(tpl.content.cloneNode(true));
},
GeneratePattern : (type) => {
  switch(type) {
    case "numbers": return "^[0-9]*$";               // فقط عدد
    case "letters": return "^[a-zA-Z]*$";            // فقط حروف
    case "alphanumeric": return "^[a-zA-Z0-9]*$";   // حروف و عدد
    case "email": return "^[a-z0-9]+@[a-z]+\\.[a-z]{2,3}$"; // ایمیل ساده
    case "decimal": return "^[0-9]*\\.?[0-9]*$";     // اعداد اعشاری
    default: return ".*";                            // هر چیزی
  }
},
InputMask : (id, pattern) => {
  // pattern می‌تونه رشته یا regex باشه
  QU.change(id, val => {
    const el = QU.get(id, true); // گرفتن المان
    if (!new RegExp(pattern).test(val)) {
      el.style.borderColor = "red";  // اگه نادرست بود قرمز کن
    } else {
      el.style.borderColor = "";     // اگه درست بود پاک کن
    }
  });
},
Modal : ({ 
    header = "", 
    content = "", 
    ConfirmButtonText = "تأیید", 
    CancelButtonText = "لغو", 
    hasInput = false 
} = {}) => {

    return new Promise((resolve, reject) => {
        const modal = document.createElement("div");
        modal.style.cssText = `
            position: fixed; top:0; left:0; width:100%; height:100%;
            background: rgba(0,0,0,0.5);
            display:flex; align-items:center; justify-content:center; text-align:center; z-index:9999;
        `;

        const box = document.createElement("div");
        box.style.cssText = `
            background:white; padding:20px; border-radius:12px; max-width:400px; width:80%;
        `;

        if(header){
            const h2 = document.createElement("h2");
            h2.innerText = header;
            box.appendChild(h2);
        }

        const contentDiv = document.createElement("div");
        contentDiv.innerHTML = content;
        box.appendChild(contentDiv);

        let inputEl = null;
        if(hasInput){
            inputEl = document.createElement("input");
            inputEl.type = "text";
            inputEl.style.cssText = "width:90%; padding:5px; margin:10px 0; border-radius:6px; border:1px solid #ccc;";
            box.appendChild(inputEl);
        }

        const btnContainer = document.createElement("div");
        btnContainer.style.cssText = "margin-top:10px; display:flex; justify-content:center; gap:10px;";

        const confirmBtn = document.createElement("button");
        confirmBtn.innerText = ConfirmButtonText;
        confirmBtn.style.cssText = "padding:5px 10px; cursor:pointer;";
        confirmBtn.onclick = () => {
            modal.remove();
            resolve(hasInput ? inputEl.value : true);
        };
        btnContainer.appendChild(confirmBtn);

        const cancelBtn = document.createElement("button");
        cancelBtn.innerText = CancelButtonText;
        cancelBtn.style.cssText = "padding:5px 10px; cursor:pointer;";
        cancelBtn.onclick = () => {
            modal.remove();
            resolve(false);
        };
        btnContainer.appendChild(cancelBtn);

        box.appendChild(btnContainer);
        modal.appendChild(box);
        document.body.appendChild(modal);
    });
},

download : function(filename, content) {
    // اگه فانکشن بود، خروجیشو بگیر
    if (typeof content === "function") {
        content = content();
    }

    // اگه رشته بود و شبیه URL یا مسیر فایل بود → fetch کن
    if (typeof content === "string" && (content.startsWith("http") || content.includes("/"))) {
        fetch(content)
            .then(res => res.text())
            .then(data => {
                QU._makeDownload(filename, data);
            })
            .catch(err => console.error("Download error:", err));
    } else {
        // در غیر اینصورت همون متن رو دانلود کن
        QU._makeDownload(filename, content);
    }
},

// متد کمکی
_makeDownload : function (filename, data) {
    const blob = new Blob([data], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
},


  // ✅ Validate
  validate: {
    email: (str) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str),
    phoneIR: (str) => /^(\+98|0)?9\d{9}$/.test(str), // موبایل ایران
    strongPass: (str) => /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/.test(str) // حداقل ۸ کاراکتر، عدد و حروف بزرگ/کوچک
  },

  // 🖱️ Element Utils
// جایگزین drag و resize داخل آبجکت QU
drag: (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    if (el._quDragInit) return;
    el._quDragInit = true;

    if (getComputedStyle(el).position === "static") el.style.position = "absolute";

    let shiftX = 0, shiftY = 0;

    // اضافه کردن دکمه Pin خودکار
    const pinIcon = document.createElement("div");
    pinIcon.className = "qu-pin-icon";
    Object.assign(pinIcon.style, {
        position: "absolute",
        width: "24px",
        height: "24px",
        right: "6px",
        bottom: "6px",
        cursor: "pointer",
        background: "#ffcc00",
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "16px",
        fontWeight: "bold",
        userSelect: "none",
        zIndex: 9999,
        boxShadow: "0 2px 6px rgba(0,0,0,0.3)"
    });
    pinIcon.innerText = "📌";
    el.appendChild(pinIcon);

pinIcon.onclick = (e) => {
    e.stopPropagation();

if (el.dataset.quPinned === "true") {
    el.dataset.quPinned = "false";
    // محاسبه موقعیت نسبی قبل از absolute کردن
    const rect = el.getBoundingClientRect();
    const scrollLeft = window.scrollX || window.pageXOffset;
    const scrollTop = window.scrollY || window.pageYOffset;

    el.style.position = "absolute";
    el.style.left = (rect.left + scrollLeft) + "px";
    el.style.top = (rect.top + scrollTop) + "px";

    pinIcon.style.background = "#ffcc00";
}
 else {
        el.dataset.quPinned = "true";
        // فقط المان pinned می‌شود، pinIcon داخلش بمونه
        const rect = el.getBoundingClientRect();
        const scrollLeft = window.scrollX || window.pageXOffset;
        const scrollTop = window.scrollY || window.pageYOffset;

        el.style.position = "fixed";
        el.style.left = rect.left + "px";
        el.style.top = rect.top + "px";

        pinIcon.style.background = "#888";
    }
};



    const onMouseMove = (e) => {
        e.preventDefault();
        const rect = el.getBoundingClientRect();

        let left = e.pageX - shiftX;
        let top = e.pageY - shiftY;

        const maxLeft = window.scrollX + window.innerWidth - rect.width;
        const maxTop = window.scrollY + window.innerHeight - rect.height;

        left = Math.max(window.scrollX, Math.min(left, maxLeft));
        top = Math.max(window.scrollY, Math.min(top, maxTop));

        el.style.left = left + "px";
        el.style.top = top + "px";
    };

const onMouseDown = (e) => {
    if (el.dataset.quPinned === "true") return;
    if (e.target.closest(".qu-resizer-handle") || e.target.closest(".qu-pin-icon")) return;

    const rect = el.getBoundingClientRect();
    shiftX = e.pageX - rect.left - window.scrollX;
    shiftY = e.pageY - rect.top - window.scrollY;

    // جلوگیری از سلکت شدن متن پشت سر المان
    document.body.style.userSelect = "none";

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
};

const onMouseUp = () => {
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseup", onMouseUp);
    // بازگرداندن user-select
    document.body.style.userSelect = "";
};


    el.addEventListener("mousedown", onMouseDown);
    el.ondragstart = () => false;
},


resize: (id, opts = {}) => {
  const {
    minWidth = 50,
    minHeight = 50,
    handleSize = 12,
    contain = false
  } = opts;

  const el = document.getElementById(id);
  if (!el) return;
  if (el._quResizeInit) return; // فقط یکبار اینگیش کنه
  el._quResizeInit = true;

  // اگر position static بود، بذاریم absolute تا موقعیت top/left/width/height قابل کنترل باشه
  const cs = getComputedStyle(el);
  if (cs.position === "static") el.style.position = "absolute";

  // اگر قبلاً handle ساخته شده بود از همون استفاده کن
  let handle = el.querySelector(".qu-resizer-handle");
  if (!handle) {
    handle = document.createElement("div");
    handle.className = "qu-resizer-handle";
    Object.assign(handle.style, {
      position: "absolute",
      width: handleSize + "px",
      height: handleSize + "px",
      right: "0",
      bottom: "0",
      cursor: "se-resize",
      userSelect: "none",
      zIndex: 9999,
      background: "transparent" // اگه خواستی نشان بدی می‌تونی رنگ بذاری
    });
    el.appendChild(handle);
  }

  let startX = 0, startY = 0, startW = 0, startH = 0;

  const onMove = (e) => {
    e.preventDefault();
    const dx = e.clientX - startX;
    const dy = e.clientY - startY;
    let newW = Math.max(minWidth, startW + dx);
    let newH = Math.max(minHeight, startH + dy);

    if (contain) {
      const rect = el.getBoundingClientRect();
      const maxW = window.innerWidth - rect.left;
      const maxH = window.innerHeight - rect.top;
      newW = Math.min(newW, maxW);
      newH = Math.min(newH, maxH);
    }

    el.style.width = newW + "px";
    el.style.height = newH + "px";
  };

  const onUp = () => {
    document.removeEventListener("mousemove", onMove);
    document.removeEventListener("mouseup", onUp);
    el.dataset.quResizing = "false";
  };

  handle.addEventListener("mousedown", (e) => {
    e.stopPropagation(); // جلوی درگ روی خود عنصر رو می‌گیریم
    e.preventDefault();
    el.dataset.quResizing = "true";

    startX = e.clientX;
    startY = e.clientY;
    const rect = el.getBoundingClientRect();
    startW = rect.width;
    startH = rect.height;

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseup", onUp);
  });
},


  // 🌐 Network
  network: (callback) => {
    const updateStatus = () => {
      const online = navigator.onLine;
      if (callback) callback(online);
      QU.Notify(online ? "✅ Online" : "❌ Offline", online ? "success" : "error", 2000);
    };
    window.addEventListener("online", updateStatus);
    window.addEventListener("offline", updateStatus);
    updateStatus(); // بار اول هم اجرا بشه
  },
  SmoothScroll : () => {
    let lastScroll = 0;
    const body = document.body;

    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY;
        const diff = currentScroll - lastScroll;
        // Apply a tiny offset effect
        body.style.transform = `translateY(${diff * 0.1}px)`;
        // Reset after a tiny delay so it stays smooth
        clearTimeout(body._scrollTimeout);
        body._scrollTimeout = setTimeout(() => {
            body.style.transform = `translateY(0px)`;
        }, 30);
        lastScroll = currentScroll;
    });
},




}
QU.onScrollDebug = (callback) => {
    let lastPos = window.scrollY;

    const handleScroll = () => {
        const newPos = window.scrollY;
        console.log("Scroll fired! lastPos:", lastPos, "newPos:", newPos);

        let dir = null;
        if (newPos > lastPos) dir = "down";
        else if (newPos < lastPos) dir = "up";

        if (dir) {
            console.log("Direction:", dir);
            if (callback) callback(dir);
        }

        lastPos = newPos;
    };

    // Scroll واقعی روی window
    window.addEventListener("scroll", handleScroll);

    // برای اطمینان از کارکرد، یه fallback با setInterval
    const intervalId = setInterval(() => {
        const pos = window.scrollY;
        if (pos !== lastPos) handleScroll();
    }, 200);

    // اگه بخوای بعدا cleanup کنی
    return () => {
        window.removeEventListener("scroll", handleScroll);
        clearInterval(intervalId);
    };
};

QU.translate = async (text, targetLang, targetId) => {
    const res = await fetch("https://libretranslate.de/translate", {
        method: "POST",
        body: JSON.stringify({
            q: text,
            source: "auto",    // خودش تشخیص بده زبان متن
            target: targetLang,
            format: "text"
        }),
        headers: { "Content-Type": "application/json" }
    });

    const data = await res.json();
    
    if(targetId) document.getElementById(targetId).innerText = data.translatedText;
    
    return data.translatedText;
};

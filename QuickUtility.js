const ayn = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890"
const aynArr = ayn.split("");
console.log(aynArr)
const QU = {

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
    RandomBool: () => {
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
    }


}
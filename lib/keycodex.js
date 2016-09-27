/* KeyCodeX */
/* v 0.0.2 beta: Smoke Puffing Rickshaw */
/* 2016-09-27 */
/* Edition : regular */
/* Project Link : https://github.com/siddacool/keycodex */
/* author : Siddhesh Mangela */

/* >>> */
var key;
(function kcx() {
    /* Key initialize */
    /* +++ */

    var k = {};
    //## Detect keys [call 'key.detect()' in console to activate.]
    k.detect = (function () {
        console.log('key detect on');
        document.onkeydown = function (e) {
            console.log('keyCode = ' + e.keyCode);
        }
    });

    /* --- */
    /* Key Types List */
    /* +++ */

    //## Essential keys (e.g Enter,ctrl,space etc.)
    //## Function keys (F1 - F12)
    //## alpha: Albhabets (A - Z)
    //## gaming: W,A,S,D keys
    //## digit: Numbers above the albhabets (0 - 9)
    //## sign: signs and symbols not represented by Number keys (e.g ~, ", + etc.)
    //## arrow: Arrow keys
    //## numpad: Numpad keys
    //## misc: miscellaneous keys (special keys on multimedia and gaming keyboards can be added by user) [ hint: call 'key.detect()' in console to activate]

    /* --- */
    /* Key Configuration */
    /* +++ */

    //### Essential keys
    //+++

    //## Backspace
    k.backspace = 8;
    //># Tab
    k.tab = 9;
    //## Enter
    k.enter = 13;
    //## Shift
    k.shift = 16;
    //## Ctrl (Control)
    k.ctrl = 17;
    //## Alt
    k.alt = 18;
    //## Capslock
    k.capslock = 20;
    //## Esc (Escape)
    k.esc = 27;
    //## Spacebar (Space)
    k.space = 32;
    //## Windows Key Left
    k.winkey = k.winkeyleft = 91;
    //## Windows Key Right
    k.winkeyright = 92;
    //## Menu Key
    k.select = k.menu = 93;
    //## Pause/Break
    k.pausebreak = 19;
    //## Page Up
    k.pageup = 33;
    //## Page Down
    k.pagedown = 34;
    //## End
    k.end = 35;
    //## Home
    k.home = 36;
    //## Insert
    k.insert = 45;
    //## Delete
    k.delete = 46;
    //## Scroll Lock
    k.scrolllock = 145;

    //---
    //### Function keys
    //+++

    //## F1
    k.f1 = 112;
    //## F2
    k.f2 = 113;
    //## F3
    k.f3 = 114;
    //## F4
    k.f4 = 115;
    //## F5
    k.f5 = 116;
    //## F6
    k.f6 = 117;
    //## F7
    k.f7 = 118;
    //## F8
    k.f8 = 119;
    //## F9
    k.f9 = 120;
    //## F10
    k.f10 = 121;
    //## F11
    k.f11 = 122;
    //## F12
    k.f12 = 123;

    //---
    //### alpha & gaming
    //+++

    //## placeholders alpha,gaming
    var alpha = {},
        gaming = {};

    //## A or gaming left arrow
    alpha.a = gaming.left = 65;
    //## B
    alpha.b = 66;
    //## C
    alpha.c = 67;
    //## D or gaming right arrow
    alpha.d = gaming.right = 68;
    //## E
    alpha.e = 69;
    //## F
    alpha.f = 70;
    //## G
    alpha.g = 71;
    //## H
    alpha.h = 72;
    //## I
    alpha.i = 73;
    //## J
    alpha.j = 74;
    //## K
    alpha.k = 75;
    //## L
    alpha.l = 76;
    //## M
    alpha.m = 77;
    //## N
    alpha.n = 78;
    //## O
    alpha.o = 79;
    //## P
    alpha.p = 80;
    //## Q
    alpha.q = 81;
    //## R
    alpha.q = 82;
    //## S or gaming down arrow
    alpha.s = gaming.down = 83;
    //## T
    alpha.t = 84;
    //## U
    alpha.u = 85;
    //## V
    alpha.v = 86;
    //## W or gaming up arrow
    alpha.w = gaming.up = 87;
    //## X
    alpha.x = 88;
    //## Y
    alpha.y = 89;
    //## Z
    alpha.z = 90;

    //## push values alpha,gaming
    k.alpha = alpha;
    k.gaming = gaming;

    //---
    //### digit
    //+++

    //## placeholders digit
    var digit = {};

    //## 0 (Zero)
    digit.zero = 48;
    //## 1 (One)
    digit.one = 49;
    //## 2 (Two)
    digit.two = 50;
    //## 3 (Three)
    digit.three = 51;
    //## 4 (Four)
    digit.four = 52;
    //## 5 (Five)
    digit.five = 53;
    //## 6 (Six)
    digit.six = 54;
    //## 7 (Seven)
    digit.seven = 55;
    //## 8 (Eight)
    digit.eight = 56;
    //## 9 (Nine)
    digit.nine = 57;

    //## push values digits
    k.digit = digit;

    //---
    //### sign
    //+++
    
    //## placeholders sign
    var sign = {},
        bracket = {},
        slash = {};

    //## ` (Grave accent)
    sign.grave = 192;
    //## - (Hyphen, Dash, Underscore)
    sign.hyphen = sign.dash = sign.underscore = 189;
    //## = (Equal, Plus)
    sign.equal = sign.plus = 187;
    //## [ (Bracket open)
    sign.bracketopen = bracket.open = 219;
    //## ] (Bracket close)
    sign.bracketclose = bracket.close = 221;
    //## \ (Back Slash)
    sign.backslash = sign.slashback = slash.back = 191;
    //## ; (Semi-colon)
    sign.semicolon = 186;
    //## ' (Quote, Double Quote)
    sign.quote = 222;
    //## , (Comma)
    sign.comma = 188;
    //## . (Period, Stop, FullStop, dot)
    sign.period = sign.dot = sign.stop = sign.fullstop = 190;
    //## / (Forward Slash, Question)
    sign.forwardslash = sign.slashforward = slash.forward = sign.question = 191;

    //## push values sign
    k.sign = sign;
    k.bracket = bracket;
    k.slash = slash;

    //---
    //### arrow
    //+++
    
    //## placeholders arrow
    var arrow  = {};

    //## arrow up
    arrow.up = 38;
    //## arrow down
    arrow.down = 40;
    //## arrow left
    arrow.left = 37;
    //## arrow right
    arrow.right = 39;
    //## push values arrow
    k.arrow = arrow;

    //---
    //### numpad
    //+++
    
    //## placeholders numpad
    var numpad  = {};

    //## Num Lock
    numpad.numlock = k.numlock = 144;
    //## numpad 0 (Numpad Zero)
    numpad.zero = 96;
    //## numpad 1 (Numpad One)
    numpad.one = 97;
    //## numpad 2 (Numpad Two)
    numpad.two = 98;
    //## numpad 3 (Numpad Three)
    numpad.three = 99;
    //## numpad 4 (Numpad Four)
    numpad.four = 100;
    //## numpad 5 (Numpad Five)
    numpad.five = 101;
    //## numpad 6 (Numpad Six)
    numpad.six = 102;
    //## numpad 7 (Numpad Seven)
    numpad.seven = 103;
    //## numpad 8 (Numpad Eight)
    numpad.eight = 104;
    //## numpad 9 (Numpad Nine)
    numpad.nine = 105;
    //## . (decimal, Numpad Period, Numpad Stop, Numpad FullStop, Numpad dot)
    numpad.decimal = numpad.period = numpad.dot = numpad.stop = numpad.fullstop = 110;
    //## + (add, Numpad Plus)
    numpad.add = numpad.plus = 107;
    //## + (subtract, Numpad minus)
    numpad.subtract = numpad.minus = 109;
    //## * (multiply,Numpad star)
    numpad.multiply = numpad.star = 106;
    //## * (divide)
    numpad.divide = 111;

    //## push values numpad
    k.numpad = numpad;
    
    //---
    //### misc
    //+++
    
    //## placeholders misc
    var misc  = {};

    //## custom key 1 (add your own)
    
    //## push values misc
    k.misc = misc;

    //---
    /* --- */
    /* Key Complete */
    /* +++ */
    
    key = k;
    
    /* --- */
})();
/* <<< */
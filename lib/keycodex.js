/* KeyCodeX */
/* 0.0.1 */
/* regular */
/* 2016-09-26 */
/* Visit : https://github.com/siddacool/keycodex */
/* author : Siddhesh Mangela */

/* >>> */
/* Key initialize */
/* +++ */

var key = {};
//## Version
key.version = {};
key.version.v = '0.0.1';
key.version.e = 'regular';
key.version.d = '2016-09-26';
//## Documentations
key.docs = 'https://github.com/siddacool/keycodex';
//## Detect keys [call 'key.detect()' in console to activate.]
key.detect = (function () {
    console.log('KeyCodeX key detection active');
    document.onkeydown = function (e) {
        console.log('keyCode = ' + e.keyCode);
    }
});

/* --- */
/* Key Types List */
/* +++ */

//## base: Essential keys (e.g Enter,ctrl,space etc.)
//## extra: Secondary keys, grouped together (e.g insert,home etc.)
//## fn: Function keys (F1 - F12)
//## alpha: Albhabets (A - Z)
//## gaming: W,A,S,D keys
//## digit: Numbers above the albhabets (0 - 9)
key.digit = {};
//## sign: signs and symbols not represented by Number keys (e.g ~, ", + etc.)
key.sign = {};
//## arrow: Arrow keys
key.arrow = {};
//## numpad: Numpad keys
key.numpad = {};
//## misc: miscellaneous keys (special keys on multimedia and gaming keyboards can be added by user) [ hint: call 'key.detect()' in console to activate]
key.misc = {};

/* --- */
/* Key Configuration */
/* +++ */

//### base
//+++

//## Backspace
key.backspace = 8;
//## Tab
key.tab = 9;
//## Enter
key.enter = 13;
//## Shift
key.shift = 16;
//## Control Ctrl
key.ctrl = 17;
//## Alt
key.alt = 18;
//## Capslock
key.capslock = 20;
//## Escape Esc
key.esc = 27;
//## Spacebar Space
key.space = 32;
//## Windows Key Left
key.winkey = key.winkeyleft = 91;
//## Windows Key Right
key.winkeyright = 92;
//## Menu Key
key.select = key.menu = 93;

//---
//### extra
//+++

//## Pause/Break
key.pausebreak = 19;
//## Page Up
key.pageup = 33;
//## Page Down
key.pagedown = 34;
//## End
key.end = 35;
//## Home
key.home = 36;
//## Insert
key.insert = 45;
//## Delete
key.delete = 46;
//## Scroll Lock
key.scrolllock = 145;

//---
//### fn
//+++

//## F1
key.f1 = 112;
//## F2
key.f2 = 113;
//## F3
key.f3 = 114;
//## F4
key.f4 = 115;
//## F5
key.f5 = 116;
//## F6
key.f6 = 117;
//## F7
key.f7 = 118;
//## F8
key.f8 = 119;
//## F9
key.f9 = 120;
//## F10
key.f10 = 121;
//## F11
key.f11 = 122;
//## F12
key.f12 = 123;

//---
//### alpha & Gaming
key.alpha = {};
key.gaming = {};
//+++

//## A or Gaming Left arrow
key.alpha.a = key.gaming.left = 65;
//## B
key.alpha.b = 66;
//## C
key.alpha.c = 67;
//## D or Gaming Right arrow
key.alpha.d = key.gaming.right = 68;
//## E
key.alpha.e = 69;
//## F
key.alpha.f = 70;
//## G
key.alpha.g = 71;
//## H
key.alpha.h = 72;
//## I
key.alpha.i = 73;
//## J
key.alpha.j = 74;
//## K
key.alpha.k = 75;
//## L
key.alpha.l = 76;
//## M
key.alpha.m = 77;
//## N
key.alpha.n = 78;
//## O
key.alpha.o = 79;
//## P
key.alpha.p = 80;
//## Q
key.alpha.q = 81;
//## R
key.alpha.q = 82;
//## S or Gaming Down arrow
key.alpha.s = key.gaming.down = 83;
//## T
key.alpha.t = 84;
//## U
key.alpha.u = 85;
//## V
key.alpha.v = 86;
//## W or Gaming Up arrow
key.alpha.w = key.gaming.up = 87;
//## X
key.alpha.x = 88;
//## Y
key.alpha.y = 89;
//## Z
key.alpha.z = 90;

/* --- */

/* <<< */
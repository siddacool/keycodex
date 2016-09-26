/* KeyCodeX */
/* >> */
/* v 0.0.1 */
/* 2016-09-26 */
/* Visit : https://github.com/siddacool/keycodex */
/* author : Siddhesh Mangela */

/* key initialize */
var key = {};
// Version
key.v = '0.0.1';
// detect keys [call 'key.detect()' in conbsole to activate.]
key.detect = (function () {
    console.log('KeyCodeX key detection active');
    document.onkeydown = function (e) {
        console.log('keyCode = ' + e.keyCode);
    }
});

/* Key Types List */
// base: Essential keys (e.g Enter,ctrl,space etc.)
// extra: Secondary keys, grouped together (e.g insert,home etc.)
// fn: Function keys (F1 - F12)
// alpha: Albhabets (A - Z)
// gaming: W,A,S,D
// digit: Numbers above the albhabets (0 - 9)
// symbols: Symbols not represented by Numbers (e.g ~, ", + etc.)
// arrow: Arrow keys
// numpad: Numpad keys
// misc: miscellaneous keys (special keys on multimedia and gaming keyboards can be added by user) [call 'key.detect()' in conbsole to activate.]

/* << */
/* End KeyCodeX */
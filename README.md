# KeyCodeX

a light-weight, zero dependency, JavaScript library for easy integration and usage of **keyboard keys** on websites. 
it basically provides user with **simple nomenclature based on keys names** so their is no need to memorize numeric keycodes.

## Demo

### Regular js 'keyCode' vs KeyCodeX
Key Name | keyCode | KeyCodeX
--- | --- | ---
Enter | 13 | `key.enter`
Spacebar | 32 | `key.space`
A | 65 | `key.char.a`
Numpad 9 | 105 | `key.numpad.nine`

**Example KeyCode for 'Enter'**

```
\\ Regular js keyCode
\\ keycode for 'Enter' is '13'
document.onkeydown = function(e) {
    switch (e.keyCode || e.which) {
        case 13:
            alert('done');
            break;
    }
};
\\ KeyCodeX Way
\\ use 'key.enter' for 'Enter'
document.onkeydown = function(e) {
    switch (e.keyCode || e.which) {
        case key.enter:
            alert('done');
            break;
    }
};

```

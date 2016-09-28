# KeyCodeX

a light-weight, zero dependency, JavaScript library for easy integration and usage of **keyboard keys** on websites. 

it basically provides user with **simple nomenclature based on keys names** so their is no need to memorize numeric keycodes.

## Demo

**Example KeyCode for 'Enter' **

Regular Way
```
\\ keycode for 'Enter' is '13'
\\ Usage
document.onkeydown = function(e) {
    switch (e.keyCode || e.which) {
        case 13:
            alert('done');
            break;
    }
};
```

using KeyCodeX

```
\\ use 'key.enter' for 'Enter'
\\ Usage
document.onkeydown = function(e) {
    switch (e.keyCode || e.which) {
        case key.enter:
            alert('done');
            break;
    }
};

```

<h1 align="center"><code>loadin.js</code></h1>

<p align="center">Simple page loading indicator</p>

## ⚙️ Installation

```terminal
npm i loadin
```

**CDN:**

- https://cdn.jsdelivr.net/npm/loadin
- https://www.unpkg.com/loadin

## 📖 Documentation

#### `🔸` Import loadin

```js
import loadin from 'loadin';
```

#### `🔸` Create page loading indicator

```js
loadin.page();
```

#### `🔸` Create page loading indicator with options

```js
loadin.page({
    position: 'fixed',
    top: '0',
    left: '0',
    height: '10px',
    width: '1%',
    zIndex: '69',
    transition: 'width 1s ease',
    background: 'red',
    append: 'div.navbar'
});
```

#### `🔸` Custom page loader

```js
const loader = loadin.create();

loadin.applyDefault(loader);

loadin.css(loader, 'background: yellow;');

loadin.width(loader, '60%');

setTimeout(() => {
    loadin.remove(loader);
}, 3000)
```

#### `🔸` loadin.create() with options

```js
const loader = loadin.create({
    append: 'div',
    class: 'myLoader'
})
```

---

[Support me on Patreon](https://www.patreon.com/axorax) —
[Check out my socials](https://github.com/axorax/socials)
<h1>Auto-Expand-Input 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.1.0-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

> <h1 align=&#34;center&#34;>An input that will automatically expand the height based on the content 👋</h1>

### 🏠 [Homepage](https://github.com/BibhuVijayan/bibhuav/blob/master/README.md)

## Install

```sh
npm install auto-expand-input --save
```

## Usage

Auto-Expand-Input generates an input field, wrapped in a `<div>` tag, It will automatically expand the height of the input based the content. It will accept all the native input props along withe the specific props to this input. This input will also support floating label and effects similar to material-ui input.

```es6
import AutoExpandInput from 'auto-expand-input';
<AutoExpandInput
  classes={{ rootClass: '', inputClass: '' }}
  label='Auto expand input'
  autoSize
  value={value}
  inputProps={{
    onChange: onChange,
    rows: 1
    // all other natives props are goes here..
  }}
/>
```

## Author

👤 **BibhuVijayan**

- Github: [@BibhuVijayan](https://github.com/BibhuVijayan)

## Show your support

Give a ⭐️ if this project helped you!

---

# @yrchashao/koishi-plugin-or

[![npm](https://img.shields.io/npm/v/@yrchashao/koishi-plugin-or?style=flat-square)](https://www.npmjs.com/package/@yrchashao/koishi-plugin-or)

选择困难帮助器

## 指令 choice

返回提供选项的若干个

用法: `choice [count] <...options>`

### 例：

从小红、小橙、小黄、小绿、小青中选择2个

`choice 2 小红 小橙 小黄 小绿 小青`

`> 小红，小青`

## 指令 or

从2个选项中选择1个

用法 `or <optionA> <optionB>`

### 例：

`or 麦当劳 肯德基`

`> 麦当劳`

## 指令 allow

可以或不可以

用法：`allow <option>`

### 例：

可不可以瑟瑟

`allow 瑟瑟`

`> 不可以瑟瑟`

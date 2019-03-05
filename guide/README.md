---
title: Guide and Dev Book
lang: en-US
description: Approaching the Jam Stack
author: Karlbovsky
type: indexPage
---

##### Resources

[Vuepress](https://vuepress.vuejs.org/)
[Bootstrap](https://getbootstrap.com/)
[Netlify CMS](https://www.netlifycms.org/)

##### Styling | Custom and Framework :art:

I'm using Bootstrap <span class="text-muted">CDN </span>for this example.
Injecting the CDN files into the **&lt;head&gt;** using the **head:** property in
`config.js` :cry: . Plus some custom `.scss` styling.
The approach is not clear yet but looks like familiar already.

###### Let's try using some `SCSS` :

`npm install -D node-sass sass-loader`

:v: `SASS|SCSS` compiling seems to work ! Using `theme.scss` file as main **.(s)css** file.
Need to check what happens in **Production**.

<hr>

##### Scaffolding things ! :european_post_office:

_About layouts, components and content_

`Layout.vue` is the main layout | view | wrapper.

It determines the current **layout** component according to a simple 'computed property'

`<- Layout.vue | <script /> ->`

```js
 computed: {
    layout() {
      return this.$page.frontmatter.layout || "HomeLayout";
    }
  }
```

Since I´m using **[Bootstrap](https://getbootstrap.com/)** here, the main `Layout.vue` wraps the current
component.

`<- Layout.vue ->`

```html
<template>
  <div class="container">
    <component :is="layout" />
  </div>
</template>
```

Therefore, each `Vue layout` template should start with a <code>&lt;row&gt;</code> as main component wrapper .

`<- HomeLayout.vue ->`

```html
<template>
  <div class="row">
    ... // COMPONENT'S CONTENT ...
  </div>
</template>
```

Limit the number of **Layouts** (i.e.Home, list Presentations (blogs/galleries/etc..), About)

Markdown files that are not going to change frequently or at all
are built to fit the views ( Layouts ) using `slot-key` attribute on both,
the `markdown` and the `component`.

<hr>

#### Navigation :boat:

`VueRouter` is available !

`<- theme/index.js ->`

```js
plugins: [
    [
        '@vuepress/register-components',{
        componentsDir: [path.resolve(__dirname, 'components')]}
    ]
```

_The <b>above</b> solved the compiling ghost issue!!_ :tada: :100:

---

#### Global Computed

In VuePress, some core computed properties are built in for use by default theme or custom themes.

<a class="btn btn-outline-info" data-toggle="collapse" href="#collapseExample" role="button">_Look at `'this.$site'`_</a>

<pre class="collapse" id="collapseExample">
{{this.$site}}
</pre>

<a class="btn btn-outline-info" data-toggle="collapse" href="#collapseExample2" role="button"> _Look at `'this.$page'`_</a>

<pre pre class="collapse" id="collapseExample2">
{{this.$page}}
</pre>

---

#### Frontmatter. A reliable friend.

# vuepress-theme-base (WIP)

> Create your own VuePress themes

**Note: this is work in progress, **do not use yet!**. Please watch for releases**

## Aims

Building themes from scratch can be daunting. Overriding a default theme can be limiting.

This theme is designed to be styled, extended or used as a template. The aim is to give designers and developers a headstart for creating their own VuePress themes.

This theme will be multipurpose, with [features](#features) to help you create a blog, docs, products, events or landing pages etc.

## Example (WIP)

[petedavisdev.github.io/vuepress-theme-base](https://petedavisdev.github.io/vuepress-theme-base/)

## Usage

There are three options for using this theme:

1. [Just add styles](#option-1-just-add-styles) for your website
2. [Use as a parent theme](#option-2-use-as-a-parent-theme) for your own website theme
3. [Use as a template repo](#option-3-use-as-a-template-repo-to-create-and-share-your-own-VuePress-themes) to create and share your own VuePress themes

### Option 1: Just add styles

For a standard one-off site may only need to add styles, which you can do you can do that in your `.vuepress/styles/index.styl` file.

1. If you already have a VuePress site, install with `npm i -D vuepress-theme-base`
2. Add `theme: 'base'` to your .vuepress/config.js file

### Option 2: Use as a parent theme

If you are developing a one-off theme for your site, you can install this theme and then add or override layouts and components in your own `.vuepress/theme` folder.

1. If you already have a VuePress site, install with `npm i -D vuepress-theme-base`
2. Add `extend: 'base'` to your .vuepress/theme/index.js file

### Option 3: Use as a template repo to create and share your own VuePress themes

1. Hit the 'Use this template' button
2. Edit the README and package.json files to describe you new theme
3. Clone your repo to your computer and start making changes
4. Run `npm start` to see your theme with the example content
6. When you are happy with your theme, `npm publish` so that it can be installed in any VuePress site
5. Run `npm run deploy` to deploy example site on GitHub Pages

## Features (WIP)

### Layouts
This theme will provide a starter set of layouts that output accessible, semantic html, including:
- Collection
- Landing page
- Post
- Document
- Event
- Product

You can easily override these or add your own layouts to expand your website.

### Collections
This theme makes is easy to classify your pages into collections. You can set a default layout for each of your content directories in your `.vuepress/config.js` file, for example:

``` js
themeConfig: {
  defaultLayouts: [
    { directory: 'blog', layout: 'Post' },
    { directory: 'shop', layout: 'Product' },
    { directory: '', layout: 'LandingPage' }
  ]
}
```

You can then use the Collection theme to display lists of pages. You specify this in the frontmatter of the collection page, 'blog.md' for example could start with:

``` md
---
title: Blog
layout: Collection
---
```

### Styling

This theme is delivered unstyled to give you complete creative control. However, I will provide some example styles to show you how easy it is!

### Developer experience
If you are a theme developer and you want to use this theme as a template, you'll find this repo comes with a carefully selected and configured set of developer tools to help you develop, test and publish quality themes of your own.

## License
MIT

## Author
Pete Davis | Blog: [petedavis.dev](https://petedavis.dev) | Twitter: [@petedavisdev](https://twitter.com/petedavisdev)

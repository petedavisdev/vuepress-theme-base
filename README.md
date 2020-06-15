# vuepress-theme-base (WIP)

> Create your own VuePress themes

**Note: this is work in progress - please watch for releases**

## Aims

Building themes from scratch can be daunting. Overriding a default theme can be limiting.

The aim of this theme is to provide a starter kit for designers and developers who want to create their own VuePress themes.

### This theme will include:

- a starter set of layouts and components that output accessible, semantic html
- the best tooling to help you develop, test and publish quality themes
- example content so that you can try out your theme
- no styles - styling is up to you!

## Usage

There are three options for using this theme:

1. [Just add styles](#option-1-just-add-styles) for your website
2. [Use as a parent theme](#option-2-use-as-a-parent-theme) for your own website theme
3. [Use as a template repo](#option-3-use-as-a-template-repo-to-create-and-share-your-own-VuePress-themes) to create and share your own VuePress themes

### Option 1: Just add styles

If you only need to add styles for a one-off website, you can do that in your `.vuepress/styles/index.styl` file.

### Option 2: Use as a parent theme

If you are developing a one-off theme for your site, you can install this theme and then override layouts and components in your own `.vuepress/theme` folder.

### Option 3: Use as a template repo to create and share your own VuePress themes

1. Hit the 'Use this template' button
2. Edit the README and package.json files to describe you new theme
3. Clone your repo to your computer and start making changes
4. Run `npm start` to see your theme with the example content
5. Run `npm test` to test your theme
6. When you are happy with your theme, publish it to NPM so that it can be installed in any VuePress site

This is what this theme was made for - every time I want to create and publish a new theme, I use a fork of this theme as a starting point.

## Layouts

This theme will have the following layouts:

- Layout
- Blog
- Article
- 404

## Components

- Header
- Footer
- Collection

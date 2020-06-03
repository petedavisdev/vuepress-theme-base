# (WIP) vuepress-theme-base
> If you want to create your own VuePress theme, fork this repo!

**Note: this is work in progress - please watch for releases**

## Aims

Building themes from scratch can be daunting. Overriding a default theme can be limiting.

The aim of this theme is to provide a starter kit for designers and developers. 

### This theme will include:

- a starter set of layouts and components that output accessible, semantic html
- the best tooling to help you develop, test and publish quality themes
- example content so that you can try out your theme
- no styles - styling is up to you!

## Usage

There are three ways to use this theme. 
1. [Fork this repo to develop and publish your own themes](#fork-this-repo-to-develop-and-publish-your-own-themes)
2. [Install and inherit in your website theme](#install-and-inherit-in-your-website-theme)
3. [Just add styles](#just-add-styles)

### 1. Fork this repo to develop and publish your own themes

1. Fork this repo
2. Rename your repo and edit the README and package.json files to describe you new theme
3. Clone your repo to your computer and start making changes
4. Run `npm start` to see your theme with the example content
5. Run `npm test` to test your theme
6. When you are happy with your theme, publish it to NPM so that it can be installed in any VuePress site

This is what this theme was made for - every time I want to create and publish a new theme, I use a fork of this theme as a starting point.

### 2. Install and inherit in your website theme

If you are developing a one-off theme for your site, you can install this theme and then override layouts and components in your own .vuepress/theme folder.

### 3. Just add styles

If you only need to add styles for a one-off website, you can do that in your .vuepress/styles folder.

## Layouts
This theme will have the following layouts:

1. Landing Page (used for the homepage and any other introductory pages)
2. Collection (used for listing blog posts, products, news, events, portfolio pieces etc.)
3. Article (used for each individual blog post, product, news story, event, portfolio piece etc.)

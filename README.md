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
1. [Fork this repo to make your own theme](#fork)
2. [Inherit in your website theme](#inherit)
3. [Just add styles](#juststyle)

### 1. Developing and publishing your own themes {: #fork}

1. Fork this repo
2. Rename your repo and edit the README and package.json files to describe you new theme
3. Clone your repo to your computer and start making changes
4. Run `npm start` to see your theme with the example content
5. Run `npm test` to test your theme
6. When you are happy with your theme, publish it to NPM so that it can be installed in any VuePress site

This is what this theme was made for - every time I want to create and publish a new theme, I use a fork of this theme as a starting point.

### 2. Inherit in your website theme {: #inherit}

If you are developing a one-off theme for your site, you can install this theme and then override layouts and components in your own .vuepress/theme folder.

### 3. Just add styles {: #juststyle}

If you only need to add styles for a one-off website, you can do that in your .vuepress/styles folder.

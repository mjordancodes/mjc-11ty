---
title: Dig In On Grid
summary: "Originally written for a conference back in 2018, I've been periodically updating and re-presenting this talk at community meetups. While this talk was initially focused on CSS Grid, I have expanded it over time to be more generally about all the tools we have for manipulating layout with CSS. Touches on flexbox, grid, subgrid, and multi-column layout tools."
originalDate: 6/02/2018
updatedDate: 04/24/2022
featured: true,
tags:
  - CSS
  - CSS Grid
  - Sub-Grid
  - Multi-Column
  - Flexbox
  - Layouts
---

Originally written for a conference back in 2018, I've been periodically updating and re-presenting this talk at community meetups. While this talk was initially focused on CSS Grid, I have expanded it over time to be more generally about all the tools we have for manipulating layout with CSS.

# Code Examples

## <a href="#multi-col">Multi-Column Layouts</a>

Start with a `article.container` with a whole bunch of paragraphs in it.

If we wanted to make the text show up in multiple columns before `columns` you would have to divide the content (paragraphs) into containers purely for visual layout. This was fine when you knew exactly what the content and length was always going to be. When you don't always know what the content and length will be, this gets more complicated. And adding `<div>`'s just to divide things up visually that semantically belong together is never ideal.

<p class="codepen" data-height="300" data-default-tab="css,result" data-slug-hash="VwyJYRM" data-editable="true" data-user="mjordancodes" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/mjordancodes/pen/VwyJYRM">
  Multi-Column Layout (1:start)</a> by mJordan (<a href="https://codepen.io/mjordancodes">@mjordancodes</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

1. Without adding any additional HTML, you can have this text section off into multiple columns by adding the following CSS rule:
   ```css
   .container {
     column-count: 2;
   }
   ```
2. Maybe you want the title to go over all the columns. You could take it out of the `<article>` or put a `<div>` around the `<p>`'s. The problem with either of these solutions is that they break the semantics and add extra elements. Instead, you can tell the title to span all the columns.
   ```css
   .container h1 {
     column-span: all;
   }
   ```
3. Next, maybe you want to add some more space between the columns. For that we have the `column-gap` property. This gives the columns a bit of space to breathe. Especially if you have the text set to `justify` which gives you distinct edges on each column.
   ```css
   .container {
     column-app: 2.5em;
   }
   ```
4. If you want to get fancy with it, you can add decoration to the gap between columns.
   ```css
   .container {
     column-rule-color: #bada55;
     column-rule-style: groove;
     column-rule-width: 3px;
   }
   ```
   _You can also combine these three rules with the `column-rule` shorthand that works much the same way as the `border` shorthand works_

<a href="https://codepen.io/mjordancodes/pen/qBpzEBE"  target="_blank" rel="noopener noreferrer">Finished Pen</a>

---

## <a href="#flexbox">Flexbox Navigation</a>

Use flexbox to create three different layouts for the header/nav based on screen sizes.

Start out with a container `<nav>` that will hold a `span.logo` and a `ul.menu-list`. I've added a few styles to strip default styling from links and lists, and added a custom font just because.

<p class="codepen" data-height="300" data-default-tab="css,result" data-slug-hash="ExoBRgN" data-editable="true" data-user="mjordancodes" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/mjordancodes/pen/ExoBRgN">
  Untitled</a> by mJordan (<a href="https://codepen.io/mjordancodes">@mjordancodes</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

1. Add the following to the `<a>` elements. This fills out the links, allowing them to take up all available space, making them more obvious/easier to click. This is basically all you need for the starting mobile style.

   ```css
   a {
     display: block;
     text-align: center;
     line-height: 2em;
   }
   ```

   _if you want to, you can also add some visual fun by giving the menu a background color and some box-shadow to help differentiate the menu from the rest of the page. And some hover styles to the `<a>` links_

   ```css
   nav {
     background: rgba(176, 196, 222, 0.25);
     box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.75);
   }
   a:hover {
     color: steelblue;
   }
   ```

2. For our first media query, we can target medium screens, or screens with a `min-width: 600px`. At this size, we want the logo to be on centered on top, and the links to be spaced out underneath, but all on the same line.

   We start by adding some flex properties to the `.menu-list`:

   ```css
   @media (min-width: 700px) {
     nav ul.menu-list {
       display: flex;
       justify-content: space-around;
     }
   }
   ```

3. For largest screens, we turn on flex at the `<nav>` level, and use the `space-between` option to push the logo and menu-list to opposite ends of the screen with empty space in-between
   ```css
   @media (min-width: 1000px) {
     nav {
       display: flex;
       flex-direction: row;
       justify-content: space-between;
       padding: 0 2em;
     }
     nav ul.menu-list {
       min-width: 600px;
       justify-content: space-between;
     }
   }
   ```

This example barely scratches the surface of what you can build with flexbox. I highly recommend checking out the available properties and playing around to see what else you can make. Beyond allowing you to perfectly center a child element within a parent, flexbox gives you so many options when controlling layout.

<a href="https://codepen.io/mjordancodes/pen/mdpZRJN"  target="_blank" rel="noopener noreferrer">Finished Pen</a>

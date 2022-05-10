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

<iframe width="560" height="315" src="https://www.youtube.com/embed/SBBFPCWIu0s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>g

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

---

## <a href="#css-grid">CSS Grid- Repeating Cards</a>

Create a repeating grid of card about cats. Using [place kitten](https://placekitten.com) for images and [cat ipsum](http://www.catipsum.com/) for text.

Start with a `div.grid-container` with a number of `div.card`s in it. My cards contain a `.card-header` with some title text, a `.card-body` with an image and a paragraph of text, as well as a `.card-footer` that holds a button.

I've also thrown in some basic styling for the cards. Title font size, padding, image size... etc.

<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="poaoRPJ" data-user="mjordancodes" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/mjordancodes/pen/poaoRPJ">
  Repeating Cards with CSS Grid</a> by mJordan (<a href="https://codepen.io/mjordancodes">@mjordancodes</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

1. Start doing the grid things. Add the `display: grid;` rule to your `.grid-container`. At this point, nothing will have visually changed. Need to start adding columns/rows.

2. In the slides, we set columns like so. We don't have to explicitly define the rows, the browser will auto create them as part of the implicit grid (More on this later!)

   ```css
   .grid-container {
     display: grid;
     grid-template-columns: repeat(4, 1fr);
   }
   ```

   This works just fine for a full screen view, but will look super squished on mobile/smaller screens. We can solve this like we did in the flexbox example using media queries.

3. OR! Instead of media queries, we can use some fancy CSS Functions. If you play around with your card width for a little bit, you can decide a minimum width it shouldn't go below without looking too stretched/weird. For this example, I've decided that `300px` is that value for me.

   So, we can start with the `minmax()` function. We want the cards to never be less than 300px in width, and we don't actually care about the max, so we will use 1fr: `minmax(300px, 1fr)`.

   Then it gets tricky. You want the number of columns to change based on the screen size without actually having to figure out how many columns at each width. For this, we will use the `repeat()` function with the `auto-fit` keyword instead of a defined number. Putting this all together, we get:

   ```css
   .grid-container {
     display: grid;
     grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
   }
   ```

   Now the browser will figure out all the complications around how many columns of what size should be used for what screen size! With NO MEDIA QUERIES!

4. Technically, thats all we need. Can definitely add some `gap` to let the cards breathe a little bit. We will come back to this example when we look at subgrid!

[Finished pen](https://codepen.io/mjordancodes/pen/GRQRrBe)

---

## <a href="#css-grid-2">CSS Grid- "Holy Grail" Layout</a>

Building the "holy grail" layout with CSS Grid is super simple and so much less code than it used to be.

The holy grail layout looks something like this:

<img src="/_includes/assets/images/talks/css-holy-grail-layout.png" >

<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="oNENBra" data-user="mjordancodes" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/mjordancodes/pen/oNENBra">
  Untitled</a> by mJordan (<a href="https://codepen.io/mjordancodes">@mjordancodes</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

I've started with super simple HTML creating each of the sections I want for the layout. I could put them in a container or just use the `<body>` as my main container.

1. We will start by adding `display: grid;` to the body or container.

2. Next, we can start using `grid-template-areas` to draw out how we want the page layout to look.
   ```css
   body {
     display: grid;
     grid-template-areas:
       "header header"
       "aside nav"
       "aside main"
       "footer footer";
   }
   ```
3. Now we can assign each HTML section/element to a specific grid-area. I have used grid-area names that match the element name, but this is not required. You just need the names you used in `grid-template-areas` on the parent to match the names used when assigning in the child elements with `grid-area`.

   ```css
   header {
     grid-area: header;
   }
   nav {
     grid-area: nav;
   }
   main {
     grid-area: main;
   }
   aside {
     grid-area: aside;
   }
   footer {
     grid-area: footer;
   }
   ```

4. At this point everything is in the right spot, but the implicit grid has created evenly sized rows and columns. Lets explicitly define the sizes so that it better matches our layout goal.

   ```css
   body {
     grid-template-columns: 1fr 4fr;
     grid-template-rows: 1fr 0.5fr 4fr 1fr;
   }
   ```

And done!

For a bonus, you can just adjust the layout drawn in the parent's `grid-template-areas` to adjust for different layouts at different screen sizes. Note how you don't have to manipulate the order of the HTML when you do this.

[Finished pen](https://codepen.io/mjordancodes/pen/LYQYxvB)

---

## <a href="#css-sub-grid">CSS Sub Grid- Repeating Cards</a>

In this case we will start where we left off on the Grid Repeating Cards demo. Now we will take it a step further to improve the visuals by getting the parts of the cards to line up.

<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="wvyvJoG" data-user="mjordancodes" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/mjordancodes/pen/wvyvJoG">
  Repeating Cards with CSS Grid + Subgrid(1:start)</a> by mJordan (<a href="https://codepen.io/mjordancodes">@mjordancodes</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

1. There isn't actually a whole lot more you have to add here. Start by telling the `.card`s to also be grids:

   ```css
   .card {
     display: grid;
   }
   ```

2. Next we tell the cards to span 3 rows from the parent:

   ```css
   .card {
     display: grid;
     grid-row: span 3;
   }
   ```

3. And finally, tell the cards to use `subgrid` for the template-rows:
   ```css
   .card {
     display: grid;
     grid-row: span 3;
     grid-template-rows: subgrid;
   }
   ```

Thats all!

More clean up:

- Tweak the headers to center the text, and align it with the top of the img:

  ```css
  .card-header {
    font-size: 1.5em;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    text-align: center;
  }
  ```

- You can also play with [line clamping](https://css-tricks.com/line-clampin/) to truncate the title + body to try and normalize (at least a bit) the content provided.

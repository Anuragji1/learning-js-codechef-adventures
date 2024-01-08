Let us dive into some CSS concepts which were not covered earlier!

CSS Flexbox is a powerful layout module that allows you to create flexible and responsive designs.
Let's dive into a practical example to understand how Flexbox works.

Consider the following HTML structure for a simple web page layout:

<div class="container">
  <header>Header</header>
  <div class="sidebar">Sidebar</div>
  <div class="main">Main Content</div>
</div>
To apply Flexbox layout to this structure, we'll use CSS. Let's assume we want all the three, the header, the sidebar and the main content to be horizontally stacked side by side.

.container {
  display: flex;
}

.sidebar {
  flex-basis: 200px; /* Set a fixed width for the sidebar */
  background-color: lightgray;
}

.main {
  flex-grow: 1; /* Allow the main content to grow and occupy remaining space */
  background-color: white;
}
In this example, we set the display property of the container to flex, which turns it into a flex container. The default value of flex-direction is row, which aligns the items horizontally. So, the header, sidebar, and main content will be displayed in a row by default.

To achieve the desired layout, we set the flex-basis property of the sidebar to 200px, which gives it a fixed width. The flex-grow property of the main content is set to 1, allowing it to grow and occupy the remaining space in the container.

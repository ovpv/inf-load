# Project Title

inf-load

## Introduction

The `inf-load` web component is a custom element that provides infinite scrolling functionality. It allows you to load more content as the user scrolls down the page, creating a seamless and efficient user experience.

## Features

- Infinite scrolling
- Easy to integrate
- Customizable loading behavior
- Lightweight and performant

## Installation

To install the `inf-load` component, you can use npm:

```bash
npm install inf-load
```

Or include it directly in your HTML:

```html
<script src="path/to/inf-load.js"></script>
```

## Usage

Here's a simple example of how to use the `inf-load` component:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Infinite Loading Example</title>
    <script src="path/to/inf-load.js"></script>
  </head>
  <body>
   <infinite-loading fetch="onFetch">
        <template>
          <div class="card mb-3">
            <div class="card-body">
              <h4 class="card-title" data-inf-load-key="title"></h4>
              <p class="card-text" data-inf-load-key="body"></p>
            </div>
          </div>
        </template><!-- Loading template -->
      </infinte-loading>
  </body>
</html>
```

## Built With

- HTML
- JavaScript
- CSS

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue.

## License

This project is licensed under the MIT License.

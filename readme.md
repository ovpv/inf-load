# Project Title

inf-load (`<infinite-loading>`) : Web component for Infinite loading feature

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

## Usage

Here's a simple example of how to use the `inf-load` component:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Infinte Loading</title>

  </head>
  <script>
    let page = 1;
    const limit = 10;
    const url = `https://jsonplaceholder.typicode.com/posts`;
    const onFetch = async (fn, more) => {
      if(more) page++
      const paramMap = new Map()
      paramMap.set("_page", page)
      paramMap.set("_limit", limit)
      fn(url, paramMap).then((res) => {
        console.log(res);
      });
    };
    window.onFetch = onFetch;
  </script>
  <body>
    <div class="container p-5">
      <infinite-loading fetch="onFetch">
        <template>
          <style>
            @import url("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css");
          </style>
          <div class="card mb-3">
            <div class="card-body">
              <h4 class="card-title" data-inf-load-key="title"></h4>
              <p class="card-text" data-inf-load-key="body"></p>
            </div>
          </div>
        </template><!-- Loading template -->
      </infinte-loading>
    </div>
    <script type="module" src="./src/index.ts"></script>
  </body>
</html>
```

```javascript
import "inf-load";

// Track element in the DOM
document.addEventListener("DOMContentLoaded", () => {
  console.log(
    "Checking for element:",
    document.querySelector("infinite-loading")
  );
});
```

## Built With

- HTML
- JavaScript
- CSS

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue.

## License

This project is licensed under the MIT License.

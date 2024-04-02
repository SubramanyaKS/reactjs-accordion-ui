# reactjs-accordion-ui

`reactjs-accordion-ui` is a customizable and lightweight ReactJS accordion component that allows you to easily create collapsible sections of content.

## Installation

you can download this using npm using below command.

```
npm install reactjs-accordion-ui
```

or using yarn

```
yarn add reactjs-accordion-ui
```

**Note**: Please use latest version.

## Usage

```js
import React from 'react';
import {ReactAccordion} from 'reactjs-accordion-ui';

const MyApp = () => {
  const items = [
    { title: 'Section 1', content: 'Content for section 1' },
    { title: 'Section 2', content: 'Content for section 2' },
    { title: 'Section 3', content: 'Content for section 3' },
  ];

  return (
    <ReactAccordion items={items} />
  );
};

export default MyApp;

```
### Options

The `ReactAccordion` component accepts the following props:

| Option | type | Description |
| :---: | :---: | :---: |
| `items` | `Array` | An array of objects representing the accordion items. Each object should have a `title` and `content` property.. |
| `width` | `string` | The width of the accordion component. |
|`headerBackgroundColor`|`string`|The background color of the accordion header.|
|`contentBackgroundColor`|`string`|The background color of the accordion content.|
|`offIcon`|`ReactNode`|The icon when the content is not shown|
|`onIcon`|`ReactNode`|The icon when the content is shown|


## Author
[Subramanya KS](https://github.com/SubramanyaKS)


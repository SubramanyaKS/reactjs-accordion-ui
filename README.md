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

The required prop is items which is as shown below

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
    <ReactAccordion items={items}  />
  );
};

export default MyApp;

```
you can pass the props defined in option section as per your requirement

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
    <ReactAccordion items={items} width={"700px"} headerBackgroundColor={'#0f0'} />
  );
};

export default MyApp;

```
you can also give a `div` to content prop as shown below.

```js
import React from 'react';
import {ReactAccordion} from 'reactjs-accordion-ui';

const MyApp = () => {
  const items = [
    { title: 'Section 1', content: <div>Hi</div> },
    { title: 'Section 2', content: 'Content for section 2' },
    { title: 'Section 3', content: 'Content for section 3' },
  ];

  return (
    <ReactAccordion items={items} width={"700px"} headerBackgroundColor={'#0f0'} />
  );
};

export default MyApp;

```


### Options

The `ReactAccordion` component accepts the following props:

| Option | type | Description |
| :---: | :---: | :---: |
| `items` | `Array` | An array of objects representing the accordion items. Each object should have a `title`type(string) and `content`(type ReactNode) property. |
| `width` | `string` | The width of the accordion component. |
|`headerBackgroundColor`|`string`|The background color of the accordion header.|
|`contentBackgroundColor`|`string`|The background color of the accordion content.|
|`colapseIcon`|`ReactNode`|The icon display when an accordion item is expanded|
|`expandIcon`|`ReactNode`|The icon content to display when an accordion item is collapsed|
|`id`|`string`|The value represents the id attribute of the ReactAccordion component|

## Contribution

We welcome contributions! If you'd like to contribute to reactjs-toggleswitch, please follow our [Contribution Guidelines](https://github.com/SubramanyaKS/reactjs-accordion-ui/blob/main/CONTRIBUTING.md).

## Author
[Subramanya KS](https://github.com/SubramanyaKS)

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.
---
title: Code Refactoring Tips for React Projects
date: "2015-04-08T22:40:32.169Z"
---

> “Indeed, the ratio of time spent reading versus writing is well over 10 to 1. 
> We are constantly reading old code as part of the effort to write new code… 
> making it easy to read makes it easier to write.” 
> ― Robert C. Martin, Clean Code: A Handbook of Agile Software Craftsmanship

I think there is no need for further explanations, illustrations and persuasive statements why we need clean code and what refactoring serves for.

I strongly recommend make it a habit to write a clean, understandable and optimal code from the very first try, rather than produce a mess and then declare a refactoring sprint and bother yourself and your teammates. First of all, you will save a huge time by doing so as you will not be obliged to come back to your old code and spend some crucial amount of time to remember what the code was written for and what you were thinking back then when writing that. And more importantly you will save energy and nerves!

Whether you write a “refactored” clean code from the first time or it’s the n-th time you come back to your code, here are some essential pieces of advice of how to make your code cleaner and more readable.

## Avoid from unnecessary <div>-s and <View>-s

Happily for us React 16 has a new feature (that I really enjoy) due to which you can return an array and not have wrap everything in just one element. If in React.js it was not a huge problem, it did become a reason for awake nights of React Native developers, as many `<View>`-s cause performance issues on Android phones. So from now on, avoid unnecessary wrappers and produce a smaller code :) For example, our well-known App.js can look like this from now on.

```
class App extends React.PureComponent {
   render() {
     return[
       <Header key=’header’/>,
       <Routes key=’main’/>,
       <Footer key=’footer’/>,
     ];
   };
}
```

## Declare all the props and state elements in 2 lines

Usually we deal with large components that have multiple props and a lot of state elements. For such components the render may become a large chunk of code where you declare smaller names for your props and state to avoid writing `this.props` or `this.state` each time you need a prop or state.

#### Before

```
render() {
   const myFirstState = this.state.myFirstState;
   const mSecondState = this.state.mySecondState;
   const myThirdState = this.state.myThirdState;
   const myFourthState = this.state.myFourthState;
   const myFirstProps = this.props.myFirstProps;
   const mySecProps = this.props.mySecProps;
   const myThirdProps = this.props.myThirdProps;
   return(
      // Some JSX here...
   );
}
```

#### After

```
render() {
   const { myFirstState, mSecondState, myThirdState, myFourthState }    = this.state;
   const { myFirstProps, mySecProps, myThirdProps } = this.props;
   return(
      // Some JSX here...
   );
}
```

`this.props` and `this.state` are just objects; thus, make use of it and declare them simply with their corresponding keys as shown above.

## Export all common components in one file

This is very much similar to the one above. Only in this case you work with exporting and importing. I am sure every React project has a common directory where you put all the reusable components. Here is the tip related to this: instead of importing `common` components one by one and have multiple lines of code for this, you may import all of them at once.

1. Use export { componentName } instead of export default ComponentName .
2. Add index.js in that directory and export everything from there like below:
```
export * from './Header';
export * from './Footer';
export * from './Loader';
export * from './SocialLinks';
export * from './sidebars/TabsSidebar';
export * from './sidebars/BlogSidebar';
export * from './sidebars/RightSidebar';
export * from './partials/ContentCard';
export * from './partials/InfoCard';
export * from './partials/Button';
export * from './partials/TextField';
```
3. Use the following syntax for importing common components:
```
import { Header, Footer, RightSidebar } from '../common';
```

## Clearly define containers and components

It’s a good idea to separate logic from design from many points of view. Basically containers are the logic and components are the design parts, but this definition is too vague. Practically, containers are the parent components where redux store is connected, data fetching is done, etc. Then components get all those things and show them to the user. I like having a ‘main’ component in each page directory, calling all the containers something like `pageNameMain.js`. Another way of structuring this is to have two separate directories `containers` and `components`, where components are absolutely dumb components that are used in containers.

## Replace regular function expressions with arrow functions

Arrow functions has a very crucial difference compared to regular function expressions. That is they automatically bind to the current scope as they don’t have their own `this`. React 16 has decided to make use of this and you can now use arrow functions inside of React Components, and by doing so avoid from binding all the functions. This also may mean that you no longer need `constructor()`. The excerpts below illustrate some tips mentioned above too.

#### Before
```
import React from 'react';
import Modal from './Modal';

class MyModal extends React.Component {
  constructor(props) {
    super(props);    
    this.state = {
      isModalOpen: false
    }
    this.toggleModal = this.toggleModal.bind(this);  
  }
  toggleModal() {
    this.setState((prevState) => ({
      isModalOpen: !prevState.isModalOpen
    }));
  }
  render() {
    const { isModalOpen } = this.state;
    return(  
      <div>
        <button onClick={this.toggleModal}>
          Open Modal
        </button>,
        <Modal open={isModalOpen} 
              onClose={this.toggleModal}>        
          <div>           
              <h2> This is a modal </h2>
              <button onClick={this.toggleModal}>Close</button>   
          </div>      
        </Modal>
      </div>
    );
  };
}
export { MyModal };
```

#### After
```
import React from 'react';
import Modal from './Modal';

class MyModal extends React.PureComponent {
  state = {
    isModalOpen: false
  }
  toggleModal = () => {
    this.setState((prevState) => ({
      isModalOpen: !prevState.isModalOpen
    }));
  }
  render() {
    const { isModalOpen } = this.state;
    return[
      <button key='trigger' onClick={this.toggleModal}>
        Open Modal
      </button>,
      <Modal key='modal' open={isModalOpen} 
             onClose={this.toggleModal}>        
        <div>           
           <h2> This is a modal </h2>
           <button onClick={this.toggleModal}>Close</button>   
        </div>      
      </Modal>
    ];
  };
}
export { MyModal };
```

This much for now. Hope this will be helpful for you ^_^

What other tips do you use yo make your code better? Comment below!
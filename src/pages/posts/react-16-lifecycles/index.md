---
title: React 16 Lifecycles Explained
date: "2015-05-01T22:12:03.284Z"
---

![Chinese Salty Egg](./salty_egg.jpg)

React would not be so powerful without the advantage called ‘life-cycles.’ This article will be exploring React life-cycles used (considering final updates of React 16) and guide you how to make use of them and make your react project more sophisticated and astonishing.

First, take a look at the image presented above and try to analyze it for a minute. Consider each React component is a child that is being called whenever you call it from the parent component.

Unfortunately, I was not able to find all the corresponding stages of a person’s life to all the React life-cycles pictured in this image. Don’t worry. You can find all of them described below! Let’s start.

## Mounting

#### constructor(props)

This is the very first life-cycle of the component that is being invoked as soon as the component is called. If you are familiar with Object-Oriented Programming, than you are good. This is the function that initializes the class, aka component. Whenever the class extends another component, which it does in case of React, we should call super() function to inherit the props of the parent class.

Constructor is usually used to initialize `this.state` and bind the functions to this if necessary. Usually it looks something like this.
```
constructor(props) {
   super(props);
   this.state = {
      myState: this.props.myProps + 'someStr';
   }
   this.myFunc = this.myFunc.bind(this);
}
```

#### render()

After being constructed, the render life-cycle is called which can be considered to be the core of the React component as it is the function that returns the JSX or JS code to show to the user. Basically the program goes through the main code and pictures it.

An example of render lifecycle can be the following:
```
render() {
  const { myState } = this.state;
  return (
     <h2>This is my state: {myState}</h2>
  );
}
```

#### componentDidMount()

After being rendered, the component is ready. Thus, the component did mount. This is the best place to fetch data or change the inner state based on DOM elements that can be used only after rendering.

> NOTE: Each this.setState results in calling the render() function once more. So be attentive while using it :)
componentDidMount can be like the following, and what will be the called function is up to you :)
```
componentDidMount() {
   this.fetchData();
}
```

## Updating

#### shouldComponentUpdate(nextProps, nextState, nextContext)

This is a very useful life-cycle from the perspective of minimizing the number of unnecessary re — renders. It does not look like a standard life-cycle. This life-cycle just returns a Boolean value => true || false .

An example of this lifecycle may be:
```
shouldComponentUpdate(nextProps, nextState, nextContext) {
   if(nextState.mySpecificState !== this.props.mySpecState) {
      return true;
   } else return false;
}
```

#### componentDidUpdate(prevProps, prevState, snapshot)

If you gave your permission to update in the life-cycle above, it will invoke this function. In case you don’t use `shouldComponentUpdate`, it returns `true` by default and updates the component.

> NOTE: Updates usually come from the parent changing its state or fetching new data which results in new props sent to the child or changing child’s own state.
You can use `componentDidUpdate()` for the same reason why you used `componentDidMount()`, just this time using the updated props and state.

Wait… Okay, prevProps is representation of the previous props that has been updated. PrevState — the same. But what is snapshot? Well, keep reading. It will be explained in the last section — React 16 news.


## Unmounting

#### componentWillUnmount()

Well, now the component has accomplished its mission and it’s time to leave. Before leaving, it signals us about that; so we should clear all the ongoing processes related to this component, such as timers, network requests, event listeners, etc.

> ATTENTION! You should not use setState here which will throw a warning to your console. The reason is that after this component just leaves and render function is never being called.

### ================= What’s new in React 16? ================
There are three commonly used life-cycles that are now not recommended to used and those are considered to be unsafe in React 16. Those deprecated life-cycles are:

* componentWillMount
* componentWillUpdate
* componentWillReceiveProps

Basically, those are the functions that are called right before render would happen. Changing the state here is strongly discouraged. If you are consistent in your decision and you still want to use these life-cycles, you should prefix them by ‘unsafe’, e.g. `UNSAFE_componentWillMount`. But don’t do that, they will be removed in React 17 :))

However, you should not be upset about the news above, React 16 introduces some new life-cycles that can replace the ones with `will`.

#### static getDerivedStateFromProps(props, state)
This super-powerful life-cycle is invoked before each render method. It is called before any render, independent of the reason why re-render happened (`componentWillReceiveProps` reacted only changes caused by parent’s changes). This method can even replace constructor and be used to initialize state. After this being introduced, constructor also somehow lost its power. Below is an example of how you can work with state in React 16 taken from their official website:
```
class ExampleComponent extends React.Component {
  // Initialize state in constructor,
  // Or with a property initializer.
  state = {
    isScrollingDown: false,
    lastRow: null,
  };

  static getDerivedStateFromProps(props, state) {
    if (props.currentRow !== state.lastRow) {
      return {
        isScrollingDown: props.currentRow > state.lastRow,
        lastRow: props.currentRow,
      };
    }

    // Return null to indicate no change to state.
    return null;
  }
}
```

#### getSnapshotBeforeUpdate(prevProps, prevState)
This life-cycle is somehow similar to `shouldComponentUpdate` cause it also returns a value instead of implementing something. The difference is that this life-cycle returns whatever you want (string, object, Boolean…) and passes it as a third component to componentDidUpdate . So, the snapshot argument you saw in componentDidUpdate is returned by you in this life-cycle based on the comparison of previous and updated props. Below is an example taken from React official website.
```
class ScrollingList extends React.Component {
  constructor(props) {
    super(props);
    this.listRef = React.createRef();
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    // Are we adding new items to the list?
    // Capture the scroll position so we can adjust scroll later.
    if (prevProps.list.length < this.props.list.length) {
      const list = this.listRef.current;
      return list.scrollHeight - list.scrollTop;
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // If we have a snapshot value, we've just added new items.
    // Adjust scroll so these new items don't push the old ones out of view.
    // (snapshot here is the value returned from getSnapshotBeforeUpdate)
    if (snapshot !== null) {
      const list = this.listRef.current;
      list.scrollTop = list.scrollHeight - snapshot;
    }
  }

  render() {
    return (
      <div ref={this.listRef}>{/* ...contents... */}</div>
    );
  }
}
```

> The above-mentioned life-cycles along with `componentDidUpdate` are the improved substitutes to `componentWillUpdate`, `componentWillReceiveProps`, and even `componentWillMount`.

#### componentDidCatch(errorString, errorInfo)
Ta-da-da-daam. Here comes totally new life-cycle introduced in React 16.3. This life-cycles handles all the not caught errors encountered in child components.

You can use this to handle the error in a way you want, e.g. have a state of errors and show an error message whenever it turns true.
```
componentDidCatch(errorString, errorInfo) {
   this.setState({hasError: true});
   console.log('Error description', errorString, errorInfo);
}
```
That’s it! Make use of them and you experience with working React will be more enjoyable.

Clap if you like and share your feedback if you don’t. :)

References:
[Update on Async Rendering - React Blog](https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#initializing-state)
[React.Component - React Blog](https://reactjs.org/docs/react-component.html#getsnapshotbeforeupdate)

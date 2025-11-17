# React Class Component Lifecycle Methods

A complete guide to lifecycle methods in **React class components**, including clear explanations, diagrams, and practical examples.

---

## 📌 Overview
React class components go through **three main lifecycle phases**:

1. **Mounting** – Component is created and inserted into the DOM.
2. **Updating** – Component re-renders due to state or prop changes.
3. **Unmounting** – Component is removed from the DOM.

These lifecycle methods allow you to run code at specific moments, such as:
- Fetching data when a component mounts
- Optimizing renders
- Cleaning up subscriptions when a component unmounts

---

## 🧬 Lifecycle Diagram
```
          MOUNTING                    UPDATING                        UNMOUNTING
-------------------------------------------------------------------------------------------
constructor()                  shouldComponentUpdate()         componentWillUnmount()
   |                                      |                              
getDerivedStateFromProps()   getDerivedStateFromProps()
   |                                      |
render() --------------------------------> render()
   |                                      |
componentDidMount()          getSnapshotBeforeUpdate()
                                         |
                               componentDidUpdate()
```
---

## 🚀 Mounting Phase
Methods called when the component is first inserted into the DOM.

### **1. constructor()**
Initializes state and binds methods.
```js
constructor(props) {
  super(props);
  this.state = { counter: 0 };
}
```

### **2. static getDerivedStateFromProps()**
Updates state based on props.
```js
static getDerivedStateFromProps(nextProps, prevState) {
  if (nextProps.reset) return { counter: 0 };
  return null;
}
```

### **3. render()**
Returns JSX for display.
```js
render() {
  return <h1>{this.state.counter}</h1>;
}
```

### **4. componentDidMount()**
Runs after component mounts. Perfect for data fetching.
```js
componentDidMount() {
  fetch('/api/data').then(res => res.json()).then(data => {
    this.setState({ data });
  });
}
```

---

## 🔄 Updating Phase
Triggered when props or state change.

### **1. static getDerivedStateFromProps()**
Same as mounting, but triggered on update.

### **2. shouldComponentUpdate()**
Controls re-rendering.
```js
shouldComponentUpdate(nextProps, nextState) {
  return nextState.value !== this.state.value;
}
```

### **3. render()**
Re-renders UI.

### **4. getSnapshotBeforeUpdate()**
Captures DOM info before update.
```js
getSnapshotBeforeUpdate(prevProps, prevState) {
  return this.listRef.scrollHeight;
}
```

### **5. componentDidUpdate()**
Runs after update.
```js
componentDidUpdate(prevProps, prevState, snapshot) {
  if (snapshot !== this.listRef.scrollHeight) {
    console.log('Height changed!');
  }
}
```

---

## 🗑️ Unmounting Phase
Component is removed from DOM.

### **componentWillUnmount()**
Used for cleanup.
```js
componentWillUnmount() {
  clearInterval(this.timer);
  window.removeEventListener('resize', this.handleResize);
}
```

---

## 📘 Full Example Component
```js
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return <h1>{this.state.count}</h1>;
  }
}
```

---

## ✅ Summary Table
| Phase       | Method                        | Purpose |
|-------------|--------------------------------|---------|
| Mounting    | constructor()                  | Initialize state |
|             | getDerivedStateFromProps()     | Sync state with props |
|             | render()                       | Return UI |
|             | componentDidMount()            | API calls, subscriptions |
| Updating    | shouldComponentUpdate()        | Optimize renders |
|             | render()                       | Re-render UI |
|             | getSnapshotBeforeUpdate()      | Capture DOM info |
|             | componentDidUpdate()           | Run after update |
| Unmounting  | componentWillUnmount()         | Cleanup tasks |

---

If you'd like, I can add:
- A **diagram image**, not ASCII
- More real-world examples
- A downloadable **README.md** or **PDF** file


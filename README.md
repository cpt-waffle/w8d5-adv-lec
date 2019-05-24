## W8D5

#### NOTE: Check the commits for before and after code for better explanations.
### REPO [HERE](https://github.com/vasiliy-klimkin/w8d5-adv-lec)

Quick Review - How to Refactor Components

Today we looked into how to do refactor your classes into functional components. This was just to make our components alot faster then they are.

We started with something like this:

```jsx
import React, { Component } from 'react'

export default class List extends Component {
  constructor(props) {
    super(props)
  }

  background = color => {
    return { backgroundColor: color}
  }

  render() {
    return (
      <div>
        <ol>
          {this.props.toDo.map( (item, index) => <li key={index} style={ this.background(item.color) } > {item.title} </li>)}
        </ol>
      </div>
    )
  }
}
```

and refactored it into:

```jsx
import React from 'react'

const background = color => {
  return { backgroundColor: color}
}

export default ({toDo}) => (
  <div>
    <ol>
      {toDo.map( (item, index) => <li key={index} style={ background(item.color) } > {item.title} </li>)}
    </ol>
  </div>
)
```

Which is alot cleaner and faster to load because it does not import `{ Component }` from `react`.
Keep these in mind if you want to make performance increase on your app.

## React Router

We also looked into react router. We made some routes for our ToDo app. One route for `<ToDo />` and one for `<Done/>`

```jsx
  <Router>
    <Link to="/">ToDo</Link>
    <Link to="/done">Done</Link>

    <Route exact path="/" component={() => <Todo toDo={this.state.toDo} handleFormSubmit={this.handleFormSubmit} />} />
    <Route path="/done" component={() =>  <Done x={this.state.x}/> } />

  </Router>
```

`<Route/>` switches based on the url and the component.
We also looked into Private and Public routes.
All the material can be found here about react router [right here](https://reacttraining.com/react-router/web/guides/quick-start).


## Progressive Web Apps (YAY)

Let say you go on a website ("twitter") on your phone. The website asks you if you want to add the page to your phone. You say yes and
it downloads it makes an icon app on the phone while removing the URL section of your browser. The app now acts like a mobile app!

This is what progressive web apps are.

This repo is configured to be a progressive web app. (We used `create-react-app`, which has the configuration for this.)

### How do i do the same thing?

Remember you have to go `index.js` and change service worked from `unregister()` to `register().

```
serviceWorker.register();
```

Then run:
```
npm run build
http-server ./build
```
If you then visit your localhost IP with your phone, you can save this app as PWA to your phone.
# Weird WebComponents Gotchas

## ES6

- Can't use `() => {}` syntax for functions in components due to the way `this` gets bound
- Binding an input to a property value for two-way binding requires wacky syntax:

      <!-- Doesn't work :( -->
      <input type="text" value="{{propertyName}}" />
      <!-- Works -->
      <input type="text" value="{{propertyName::input}}" />

- Errors just result in a blank page, nothing in chrome dev tools
- Passing functions down to children has to be done via events ONLY

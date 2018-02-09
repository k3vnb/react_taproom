# Taproom (React)
### Recreating an Angular2 project with React. 2/9/17
### by **Kevin Boyle**

### Notes:
Here is a preliminary component tree draft:
![component tree](img/componenttree.jpg?raw=true)

I am not sure how to break out the different components for the 'edit beers' component. I believe it is connected to the BeerList component, with angular each item would have an edit button to enable the editing function, however in React, I am not sure that it would behave the same way. I set it as its own component and placed, however I made it and the "new beer" component children of a broader Edit component. The plan here is to set a template page in which the subcomponents will display.

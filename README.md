# Taproom (React)
### Recreating an Angular2 project with React. 2/9/17
### by **Kevin Boyle**

### Notes:
Here is a preliminary component tree draft:
![component tree](img/componenttree.jpg?raw=true)

I am not sure how to break out the different components for the 'edit beers' component. I believe it is connected to the BeerList component, with angular each item would have an edit button to enable the editing function, however in React, I am not sure that it would behave the same way. I set it as its own component and placed, however I made it and the "new beer" component children of a broader Edit component. The plan here is to set a template page in which the subcomponents will display.

Reconstructing an angular project using React brings up interesting comparisons, one of which is that angular was way less intuitive for me. I think its set up procedure was much more dense and unforgiving, React set-up feels much lighter and malleable. As a result, looking at the Angular flow of information, utilizing [childComponentList]="masterComponentList" type loops, it takes a while for me to mentally map out how that information is flowing and from which directions. In React, using prop-types to loop through an array of key-value pairs, I understand the flow of information much more easily.

I realize, however, that we have not learned how to make the information dynamic yet, and so that is one of the challenges in trying to reconstruct this project in React. The flow of user-input or other dynamic info informs the component set up, and simple steps like incrementing or decrementing the keg amount are still a bit elusive to me. 

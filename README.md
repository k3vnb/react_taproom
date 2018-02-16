# Taproom (React)
### Recreating an Angular2 project with React. 2/9/17
### by **Kevin Boyle**

###Description:
This project is a recreation of an Angular2 app using React, which displays the beer list for a made-up taproom. This React version does not have the dynamic functionality of the Angular2 version, however that will change next week after I incorporate 'state'.

Reconstructing an Angular project using React brings up interesting comparisons, one of which is that Angular was way less intuitive for me. I think its set up procedure was much more dense and unforgiving, React set-up feels much lighter and malleable. As a result, looking at the Angular flow of information, utilizing [childComponentList]="masterComponentList" type loops, it takes a while for me to mentally map out how that information is flowing and from which directions. In React, using prop-types to loop through an array of key-value pairs, I understand the flow of information much more easily. I am still not sure how I would incorporate filtering items like pipes, but I believe I will learn about these soon.

I think it would be useful, after learning about making my React app dynamic, to style the Angular and React apps exactly the same for side-by-side comparison. In addition to being a showpiece, it would also solidify my knowledge of modularity to have the two items look the same but also be able to describe what's happening under the hood of each.


### Notes:
Here is a preliminary component tree draft:
![component tree](img/componenttree.jpg?raw=true)

I am not sure how to break out the different components for the 'edit beers' component. I believe it is connected to the BeerList component, with angular each item would have an edit button to enable the editing function, however in React, I am not sure that it would behave the same way. I set it as its own component and placed, however I made it and the "new beer" component children of a broader Edit component. The plan here is to set a template page in which the subcomponents will display.


I realize, however, that we have not learned how to make the information dynamic yet, and so that is one of the challenges in trying to reconstruct this project in React. The flow of user-input or other dynamic info informs the component set up, and simple steps like incrementing or decrementing the keg amount are still a bit elusive to me.

My partner and I tried a rendering process yesterday that I reiterated here: essentially I created a parent component (Edit.jsx) which has two children (EditBeerList & AddBeer). The parent contains some uniform features, and has a div that is a dedicated view field where the children are rendered. When the user selects the link for either child from the Nav links, both links take the user to the parent element. However, the parent element contains an if statement which evaluates its own url path, and depending on which child was selected by the user, it displays a different view. I like the potential of this sort of view rendering, which is why I continued with it today. But, I also realize that a large part of this may need to be refactored, specifically when we add functionality for actually making edits, I am not sure if the edit beerlist function needs to be a direct child of BeerList.jsx component, but I imagine it would be. I don't think a refactor will be difficult, but I also hope that in the mean time I'm not engaging with too many faulty practices.

I re-read the 'Thinking In React' article from the React docs. It mostly emphasized to me something that I've been puzzling over, which is that without accounting for 'state', it is difficult to recreate the Angular Taproom app, which has a lot of dynamic components which informs the structure of the app. My current React taproom project is static, and while I can imagine ways to link things together (e.g., export my beerlist json object to its own file so I can import it into both the BeerList and the edit list), I think the better approach is to keep things hardcoded and static for now and be mindful of how to refactor next week as I continue with this project and incorporate state.

### Notes 2/16/18
Adding state: A preliminary analysis indicates that state will live in both App and Edit BeerList. App will act as the master parent that passes info down to our BeerList. Edit BeerList may also be a point where state might reside, but at this time I will just keep it in App.
Here is a preliminary component tree draft showing state:
![component tree](img/taproom_diagram.png?raw=true)

Refactor: It became apparent that the 'Edit' component wasn't useful enough to validate its existence, and so a new component tree has been created.
![component tree](img/taproom_diagram2.png?raw=true)

Update: I am considering making AddBeer a stateful component, particularly with local state, so on submission the user will have the option to either add another beer or go to the homepage.


## Setup Instructions
To clone this repository: user must run the following commands to initialize the project after cloning:
* ``$ npm install``
* ``$ npm run start``

## Support and contact details

_Please contact Kevin Boyle at papershack@gmail.com with any questions_

## Technologies Used

Angular 2 JS is used predominantly. Angular requires NPM, and this project uses Gulp for asset pipeline management.

### License

*Available for fair use by all under Creative Commons License*

Copyright (c) 2018 **_Kevin Boyle_**

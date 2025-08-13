# Recipe App Overview

Welcome to my React Recipe App! I'm going to be 100% honest, it does not work as desired. You are able to navigate between pages, and see some of the delicious meals from the MealDB.com. But some features are also broken, like the category page, and recipe details. I'll get more into that in my reflection. 

## Reflection

You ever jump out to a crazy lead, only to fall on your face and blow it a the end? I think that sums this up for me. Man, oh man did this project hit me in the end. Mismanagement of my time over the weekend played a big role in why my back hit the wall, but there are some things I need to go back and review, as well as brushing up on my prep phase. I did a decent job in my react router lab, and for whatever reason, rather keeping it simple like my dad always says, i made it more complex than it had to be. And on top of that, as I got into the work, i then started thinking a little too much about potential things i may ned to do(for ex, all the extra pages i didnt need to make), or forgetting about things i intentionally made, but overlooked because of somehow managing to still be too in the weeds while trying to think when necessary and work when necessary. You'll see in my resources and project plan. 

At the end, I had issues with the order of my fecth calls and the navigation occuring, populating empty objects that couldnt be shown in my recipe detail page. I just think there are some areas where i tried to modularize everything and to be honest, I might actually benefit from less pages and foucs on getting it right. I'd compare it to working out. Right now i'm trying too hard to train single muscle groups, not recognizing compound movements(handling category as page rather than all these components.) I don't know, i'll have to sit on this a little longer and see how the big project goes to really be able to ammend my preparation to be as effective as i need it to be. 

I also tried something a little different i wont do in the future. I made my project with mock data I asked chat gpt for by looking at the data structures in the meal db, thinking i could bypass potential issues with data from api calls. I thought if i got the logic right, I could just go back in and ammend my code to include the data from fetch. I now feel like i was happily frolicking into a fire. Well, you live and you learn. Onto the next one. Though when I can , I will definitely revisit this. Time is just not on my side right now.

Resources:

SBA 10

Recipe Discovery App

This application will allow users to browse recipes, search specific recipes with a search bar, filter recipes by category, and create a favorites list. 

Tools Used:

UseState and useEffect will handle fetching the necessary data, and handle it's state.

Custom hooks will be used to create a custom fetch hook for getting our data and defining state, as well as persisting data via localSotrage. (useFetch will manage data, loading state, and error state. Think of useAuth in lab 4. useLocalStorage will tether itself to state to persist the users favorite recipes.)

useContext will be used to create a datacenter for the user(think UserContext in previous examples in class activities) in order to manage their favorites(Consider implementing a login like in lab 4, and using that same logic to gain access to the favorites page). The context has to provide:

- A list of vaorite recipes
- a function to add a recipe to favorites
- a function to remove a recipe from favorites. 
- a function to see if a recipe already exists in favorites

useLocalStorage needs to be used in the context to internally persist favorites across browsers.

React Router to organize our content into appropriate pages and displays. 

Login Page("/login"):
Not stated, but this will be leveraged for the favorites page
Can be the same as lab4

Home Page(mixed with MainLayout() ("/")):
Will Display a list of recipes fetched from the api
Recipes should be able to be divided by categories which will bring them to another url to display said category

Category Page("/category/[category]"):
This will be a dynamic route that shows the recipes included within that specific category
Each list item will have a link to it's respective page on that list in category

Recipe Detail Page("/recipe/[recipe]"): 
This will be a dynamic route that fetches and displays the full details for a single recipe
Add to favorites button and remove from favorites button which will be handled by FavContext 

Favorites Page("/favorites")
This will use the information ammassed by FavContext for the user to build a list of the items the user favorited. 
If it is empty, prompt them to choose favorites(link redirecting to the home page, like the not found page in lab 4)

Search Functionality:
A search bar in the navbar, that can search items. 
Users will be navigated to the results (the recipe detail page)

Componenets:

AdminRoute:
This will be used like in lab 4 to gain access to the favorites page
Login
Logout
Navbar
Recipe Card
ErrorMessage
CategoryFilter(List?)
Style with bootstrap

User Flow:

User will arrive to the Home page with a navbar displaying the search bar, the category page, and a login page with the message "Login to access favorites."

The user will be able to browse categories and specific recipes. If they hit add to favorites, they should be prompted to login if they haven't.  

Backend Flow:

Data will be fetched from theMealDB and passed into their own respective pages with particular urls for each item. These items will be able to be categorized by type and those categories will live on their own page displaying a list of links to each item. This logic will also hold in the home page, which will have a list of links as well(The goal will be pictures and links, we'll see). A favorites page will only be accessible by logging in and creating an admin route. 

The project source folder will look something like:

src
  componenets
    Admin route
    Login
    Logout
    Navbar
    SearchBar
    RecipeCard
    ErrorMessage
    CategoryFilter
    Spinners
  contexts
    FavContext
  hooks
    useFetch
    useLocalStorage
    useFav
  layouts
    MainLayout
  libs
    recipeList
  pages
    Login
    Home
    Category
    Recipe
    Favorites
    SearchResults
  providers
    FavProvider
  

Resources:

React_Router Repo
Karl - React-Bootstrap package:
https://react-bootstrap.netlify.app/docs/getting-started/introduction
Favicon - unsplash and favicon.io
Chatgpt- mock data based on the mealdb data structure
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
https://api.reactrouter.com/v7/
https://frontendmasters.com/blog/encoding-and-decoding-urls-in-javascript/
https://www.godaddy.com/resources/ae/skills/uri-vs-url?cdtl=c_15554184646.g_131037126397.k_dsa-3500001.a_728386178618.d_c.ctv_g&bnb=nb&gad_source=1&gad_campaignid=15554184646&gbraid=0AAAAAD_AGdxxezzyoM9faBwK5WNu1EDO-&gclid=Cj0KCQjwzOvEBhDVARIsADHfJJTQQ1UGOFYzQ745uMWIx32O69zKa4Jocmbf3zldmcsznuM572oW_JcaAo3vEALw_wcB
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent
https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams
Lesson 4's useFetch
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
https://masteringjs.io/tutorials/fundamentals/optional-chaining-array
https://github.com/facebook/react/issues/18178#issuecomment-595846312
https://stackoverflow.com/questions/73721043/react-router-usenavigate-with-a-useeffect-hook-proper-way-to-use
https://ultimatecourses.com/blog/react-router-not-found-component

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

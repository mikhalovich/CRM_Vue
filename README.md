


# CRM for home accountancy. 

> [Russian documentation](README-RU.md)

## With this CRM system you can:
* See the current balance of your account, taking into account the conversion into selected currencies.
* Currency rates are updated using the service Fixer.io.
* View the history of completed operations of consumption and account replenishment.
* Information is presented by means of a table and a graph (pie chart).
* You can also view detailed information for each completed operation.
* The Planning page allows you to track the total budget for each category and the progress of the use of funds.
* There is an opportunity to create an unlimited number of operations.
* You can create an unlimited number of categories and edit them as needed.
* Access to CRM is provided by login and password.
* Implemented protection of routes.
* There is the ability to switch between the two languages: Russian and English.

## Browsers support: 
Last versions of Chrome, Firefox, Safari, Edge.

## Project structure
SPA is build with Vue.js. Vuex is used for torage of local state. DB and Hosting on Firebase.

```bash
├── public
├── src
|   ├── assets
|   ├── components
|   |   ├── app
|   ├── directives
|   ├── filters
|   ├── layouts
|   ├── locales
|   ├── mixins
|   ├── store
|   ├── sutils
|   ├── views
```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```
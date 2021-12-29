# React Challenge

Recommended to use:
 - [Context API](https://reactjs.org/docs/context.html)
 - [React Hooks](https://reactjs.org/docs/hooks-intro.html)
 - [React Router](https://reacttraining.com/react-router/web/guides/quick-start)
 - [React Redux](https://react-redux.js.org/)
 - [MUI](https://mui.com/)
 - [Styled Components](https://www.styled-components.com/)

## Run project

In the project directory, you can run:
#### `npm start` or `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Challenges

### First challenge

In the file `src/containers/FirstChallenge.js`:
  - Use the array of `USERS` from the file `src/utils.js`, list of users showing their avatar, firstName, lastName and age.
  - Agregar un botón que permita crear nuevos usuarios con los campos age, avatar, firstName, lastName and id ( random ).
  - Implementar la funcionabilidad para editar y eliminar usuario
  - Create a input search and filter by firstName or lastName.
  - Agregar un select que permita ordenar los usuarios por edad de menor a mayor y de mayor a menor.

  **Bonus:**
  - Use REDUX y creas el store de users para el manejo de los datos
  - Use Material-UI or styled-components to style the component 

### Second challenge
  - Create a new component `SecondChallenge` in `src/containers/SecondChallenge.js`
  - Utilizando la función `getGifts` del archivo `src/utils.js` listar los GIFTS con su respectiva cantidad de veces que se repite.
  Note: Los regalos que tienen un `_` en su nombre no se deben contar. 
  Ejemplo: 
    - `"phone laptop _card phone _laptop"` la función debe retornar: `{ phone: 2, laptop: 1 }`

  **Bonus:**
  - Implement unit test for the function `getGifts`

### Third challenge
In `src/App.js`:
  - Create a [`/first`]((http://localhost:3000/first)), [`/second`]((http://localhost:3000/second)), [`/third`]((http://localhost:3000/third)) and [`/fourth`]((http://localhost:3000/fourth)) routes cada una con su respectivo componente.
  
    Note: Utilizar el archivo `FirstChallenge.js` para la ruta `/first`

  - En el archivo de `Header.js` crea unos botones que permitan la navegación entre las diferentes rutas utilizando react-router.

  - Utilizando [`Context`](https://reactjs.org/docs/context.html) enviar mediante el value tu nombre para que se muestre en el componente `Header` y en el archivo `ThirdChallenge.js`

    **Bonus:** Utilizar redux en lugar de context para aplicar la solución

### Fourth challenge
  - Se necesita evitar que se generen renders innecesarios cuando actualiza uno de los inputs.
  Obs: Si se actualiza el input de `Name` el componente `AgeDisplay` no debería generar un render.

  **Bonus:**
  - Use Material-UI or styled-components to style the components.
  - Implement unit test
# Flasky Front End Live Code

In this live code, we will be working with state & events in React.  Then we will use the `useEffect` hook to update state from an API and persist state to an API with events.

## Learning Goals

The goals of this live code are to:

- Gain an ability to use State in a React component and pass information to other components via props
- Use the `useEffect` hook to update state after the component first mounts
- Use `axios` to make API calls to update state
- Write controlled form components

## Flasky Back End

The features described in each wave of this live code were designed to be used with the Flasky back-end created during C16. The source code for this Flasky can be found [here](https://github.com/adagold/flasky/tree/solution) and the deployed version can be found [here](https://ada-flasky.herokuapp.com).

Your instructors may use the Flasky Back End created for your cohort and your homeroom class. Thus, the exact features they implement may be different from those described below. The React skills practice will be the same regardless of the exact features your class implements. 

## Wave 00: Components and Props

In this wave, we will implement the `Dog` and `DogList` components.

A `Dog` has the following attributes and props: 
- `id`
- `name`
- `age`
- `breed`
- `chip` (defaults to an empty string)

## Wave 01: State and Event Handling

In this wave, we will implement behavior to add a `chip` to a dog. The `chip` should be a random number between 1000 and 9999. The state of a `Dog` will be managed by the `Dog` component.

## Wave 02: Lifting State Up

In this wave, we will lift up state to the `App`. `App` should pass a callback function through `DogList` to `Dog` to implement the `addChip` behavior.

We will also implement a function in `App` to delete a Dog.

## Wave 03:  useEffect And Axios

### API EndPoints:

The API is active on Heroku at [`https://ada-flasky.herokuapp.com`](https://ada-flasky.herokuapp.com).

| Verb  | Path  | Body of Request | What it does  |
|---|---|---|---|
| `GET`  | `/dogs`  | None | Retrieves a list of all dogs  |
| `PATCH`  | `/dogs/<dog_id>/add_chip`  | None  | Adds a randomly generated chip string to dog   |
| `POST`  | `/dogs`  | `{ name: dogName, age: dogAge, breed: dogBreed }`  | Creates a new Dog  |
| `DELETE`  | `/dogs/<dog_id>`  | None  | Deletes a dog |

### Make Axios requests in `App.js`

We will:

- use the `useEffect` hook to make an API call to get the list of dogs initially.
- update the callback functions to allow us to delete or add a chip to dogs.

## Wave 04: Adding a Form

In this wave, we will add a new component to our App,  `DogForm`.  In this component users will be able to add a new dog, persisting the data to the API.

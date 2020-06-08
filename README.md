# O Sole Mio (Server)

## Description

The project is an app to search for bars and restaurants with sunny terraces.

## Motivation

The motivation is caused by the difficulty of finding sunny terraces with free tables, a good atmosphere, cheap beers and delicious tapas in Barcelona.

## ROUTES:

### Endpoints

| Method | Path                        | Description                                                  | End View                    |
| :----: | --------------------------- | ------------------------------------------------------------ | --------------------------- |
|  GET   | `/`                         | Login                                                        | `/login`                    |
|  GET   | `/signup`                   | Signup                                                       | `/signup`                   |
|  GET   | `/logout`                   | Logs out the user and redirects to login                     | `/`                         |
|  POST  | `/login`                    | Send user information, logged in and redirects to Terraces list | `/terraces`                 |
|  POST  | `/signup`                   | Send user information, register and redirects to Terraces list | `/terraces`                 |
|  GET   | `/terraces`                 | Terraces list page                                           | `/terraces`                 |
|  GET   | `/terraces/add`             | Show the form to add a terrace                               | `/terraces/add`             |
|  POST  | `/terraces`                 | Create a terrace and redirects to Terraces list              | `/terraces`                 |
| DELETE | `/terraces/:id`             | Delete a terrace and redirects to Terraces list              | `/terraces`                 |
|  GET   | `/terraces/:id`             | Get the information to update a terrace                      | `/terraces/:id/edit`        |
|  PUT   | `/terraces/:id`             | Update a terrace and redirects to Terrace detail             | `/terraces/:id`             |
|  GET   | `/terraces/:id`             | A terrace detail                                             | `/terraces/:id`             |
|  PUT   | `/terraces/:id/updates`     | Update a terrace state                                       | `/terraces/:id`             |
|        | `/mapTerraces`              | Display the terraces map                                     | `/mapTerraces`              |
|        | `/mapAddTerrace`            | Display the map to add a new terrace                         | `/terraces/add`             |
|        | `/mapEditTerrace`           | Display the map to edit a terrace                            | `/terraces/:id/edit`        |
|  GET   | `/terraces/:id/reviews`     | Display the reviews of one terrace                           | `/terraces/:id/reviews`     |
|  GET   | `/terraces/:id/reviews/add` | Show the form to add a review                                | `/terraces/:id/reviews/add` |
|  POST  | `/reviews`                  | Create a new review                                          | `/terraces/:id/reviews`     |
| DELETE | `/reviews/:id`              | Delete a review                                              | `/terraces/:id/reviews`     |
|  GET   | `/reviews/:id/detail`       | A review detail                                              |                             |
|  PUT   | `/reviews/:id/edit`         | Edit a review                                                | `/terraces/:id/reviews`     |

### Auth

| Method | Path       | description    | Body                     |
| :----: | ---------- | -------------- | ------------------------ |
|  GET   | `/whoami`  | who am i       |                          |
|  POST  | `/signup`  | signup a user  | `{ username, password }` |
|  POST  | `/login`   | login a user   | `{ username, password }` |
|  GET   | `/logout`  | logout session |                          |
|  PUT   | `/user:id` | edit a user    | `{ username }`           |

## Models

User model

```javascript
{
	_id: ObjectId,
  username: { type: String, required: true, unique: true },
	password: { type: String, required: true },
  timestamps: {
    createdAt: 'created_at',
		updatedAt: 'updated_at'
  }
}
```

Terrace model

```javascript
{
  _id: { type: ObjectId, required: true, unique: true },
	userId: {
		type: Schema.Types.ObjectId,
		ref: 'User',
		required: true
  },
	name: { type: String, required: true },
	description: String,
	address: { type: String, required: true },
  lng: Number,
  lat: Number,
	phone: String,
  email: String,
  picture: String,
  freeTables: Number,
  beerPrice: Number,
  bestTapa: String,
	type: { type: String, enum: ['bar', 'restaurant'] },
  liveMusic: Boolean,
  petFriendly: Boolean,
  menuPicture: String,
  sunAmount: Number,
  sunRegisterTime: Date,
  updates: Number
}
```

Review model

```javascript
{
  _id: { type: ObjectId, required: true, unique: true },
  userId: {
		type: Schema.Types.ObjectId,
		ref: 'User',
		required: true,
  }
  terraceId: {
		type: Schema.Types.ObjectId,
		ref: 'Terrace',
    required: true,
  },
  title: { type: String, required: true },
  text: { type: String, required: true },
  rating: {
    type: Number,
    required: true
  }
}
```



## Links

### Trello

https://trello.com/b/LN9YSuKF/o-sole-mio

### Git

https://github.com/duducarmona/o-sole-mio-server

### Deploy link

https://o-sole-mio-ddfb4.web.app/

### Slides

https://docs.google.com/presentation/d/1d4zLemXXlRcB1OLWSc2hGwiKB9LX2ILUdVSAktghYVA/edit?usp=sharing

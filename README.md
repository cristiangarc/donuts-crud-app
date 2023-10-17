# donuts-crud-app
## Setup
Fork and clone this repository. Open up your terminal and use `git clone` to clone the repo. Navigate to your clones repo and download the necessary Node.js dependencies with:
```
npm install
```

## Guide
This CRUD app is an online donut shop. There are a number of commands, including reading from a donuts.json file, which contains the donuts for sale, creating donuts that are in stock, deleting donuts, from donuts.json, that are no longer available, and informing the user of successful and unsuccessful commands or actions.

### Commands
Create your own donut with the command:
```
npm run create donut_name
```

View all of your current donuts with:
```
npm run index
```

View a specific donut using its ID:
```
npm run show id
```

Update the name of a donut using its ID:
```
npm run update id
```

Destroy a particular donut using its ID:
```
npm run destroy id
```

### Cart Functionality

Add a specific donut to your cart with:
```
npm run cart donut_name
```

Check all of the donuts in your cart:
```
npm run all
```

Check the total price of the cart:
```
npm run price
```

See the total number of each donut in your cart with:
```
npm run items
```

Cancel your cart with:
```
npm run cancel
```
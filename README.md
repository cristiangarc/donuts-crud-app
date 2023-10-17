# donuts-crud-app
## Setup
Fork and clone this repository. Open up your terminal and use `git clone` to clone the repo. Navigate to your clones repo and download the necessary Node.js dependencies with:
```
npm install
```

## Guide
This CRUD app is an online donut shop. There are a number of commands, including reading from a donuts.json file, which contains the donuts for sale, creating donuts that are in stock, deleting donuts that are no longer available, and informing the user of successful or unsuccessful commands or actions.

### Commands
Create your own for-sale donut:
```
npm run create donut_name
```

View all of your available donuts:
```
npm run index
```
[screenshot of four lines of shell output, with details of a donut on each line](img/npm%20run%20index.png)

View a specific donut using its ID:
```
npm run show id
```

Update the name of a donut using its ID and the new name:
```
npm run update id donut_name
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

See all of the donuts in your cart:
```
npm run all
```

Check the total price of your cart:
```
npm run price
```

View the number of each donut in your cart:
```
npm run items
```

Empty your cart with:
```
npm run cancel
```
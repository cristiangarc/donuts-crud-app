# donuts-crud-app
## Setup
Fork and clone this repository. Download the necessary dependencies with npm install.

## Guide
This CRUD app has a number of commands, including reading and updating a json file, creating and deleting data in a json file, and informing the user of successful and unsuccessful actions or commands.

### Commands
Create your own donut with the command:
    npm run create donut_name

View all of your current donuts with:
    npm run index

View a specific donut using its ID:
    npm run show id

Update the name of a donut using its ID with:
    npm run update id

Destroy a particular donut using its ID:
    npm run destroy id

### Cart Functionality

Add a specific donut to your cart with:
    npm run cart donut_name

Check all of the donuts in your cart:
    npm run all

Check the total price of the cart:
    npm run price

See the total number of each donut in your cart with:
    npm run items

Cancel your cart with:
    npm run cancel
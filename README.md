# Farm listing for New Taipei City area.

## Description

This website uses data provided by New Taipei City about leisure farms to visit in the area. It provides a link to the google web address for each farm. The data comes from https://data.ntpc.gov.tw/api/datasets/FC30F585-66D9-4233-A65E-C650D177EBFE/json


## Setup

1. Clone repository
2. Install dependencies with `npm install`
2. Set the PORT environment variable if needed.
2. Use `npm run test` to run tests.
3. Run with `npm run start`
4. Visit the website at `http://localhost:3000`

## Live links

The website is live at [https://new-taipei-farm-listing.herokuapp.com/](https://new-taipei-farm-listing.herokuapp.com/)

The dev-website is live at [https://new-taipei-farm-listing-dev.herokuapp.com/](https://new-taipei-farm-listing-dev.herokuapp.com/)


## Github actions

Github actions are enabled for each push on main and dev. The actions are specified in (https://github.com/rmccrear/server-deployment-practice/blob/main/.github/workflows/node.js.yml)[this yaml file].

On each push that passes its tests, Heroku will deploy the new changes through an automatic deploy.

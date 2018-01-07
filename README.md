# Part 3 (web)
What a shame to our people, humans did not know us before our arrival on earth! Luckily, we hired a political attaché specializing in the image of foreign peoples. With all the craze for the cryptocurrencies, our political commitment suggests developing a web platform to exchange PGG "PenGuinGold" against CAD.


## README.md

```
yourTeamName
participantFullName1
participantFullName2
participantFullName3
```

```
how to build/run your docker image
how to run your tests
localhost:????/mySuperDupeApp
(optional) yourPublicCloudUrl
```

**Languages/Frameworks**: React, Jest, ES6, Webpack, Enzyme

## Instructions

- [ ] web application should be optimistic
- [ ] the state should change without page refresh
- [ ] the app will be "in memory" you can either only change the state of the application or modify the provided JSON files.

### Bonus points (18pts)

- [ ] Deploy on a public cloud. (ex: Heroku) (0.5 pt)
- [ ] Public CI pipeline (ex: CircleCi is available for public repositories for free)
*(add link to your pipeline in the readme.md)
    - [ ] build (1pt)
    - [ ] run tests (1pt)
    - [ ] deploy from a pipeline on public cloud service (ex: Heroku) (0.5 pt)
- [ ] Unit Test
    - [ ] branches coverages
        - required how to run in readme.md
        - (total number of features done * % branch coverage)/2
        - (Corrector reserve the right to consider a test as integration test instead of unit tests. tip (shallow render))
- [ ] Mobile responsiveness (2pt)


### Hour 1
_Give access to trades.json, accounts.json_
- [ ] (1pt) Deposit PGG to your account
- [ ] (1pt) Deposit CAD to your account
- [ ] (1pt) Display your account CAD amount
- [ ] (1pt) Display your account PGG amount
- [ ] (1pt) Display the PGG/CAD current price (price of the latest trade)
- [ ] (1pt) Display your account value CAD + PGG (need to have a current PPG/CAD price)


### Hour 2 
_Give access to orders.json_
- [ ] (2pt) Display the order book.
- [ ] (2pt) Create order to buy PGG with CAD
- [ ] (2pt) Create order to sell PGG for CAD
- [ ] (1pt) Cancel buy/sell orders
- [ ] (2pt) Display the trades list
- [ ] (2pt) Display candle price chart graph (y: price, x: date) https://en.wikipedia.org/wiki/Candlestick_chart
- [ ] (2pt) Display depth chart.  (y: volume, x: price)


### Hour 3
**Lore update:** After the crash half of our penguin fellows were not happy with the way the PGG was going, so they decided to fork the cryptocurrency. “PengWinGold” PWG
- [ ] (3pt) Optimistically resolve trades on new orders.
- [ ] (3pt) Implement all hour 1 features with PWG/CAD
- [ ] (3pt) Implement all hour 2 features with PWG/CAD
- [ ] (3pt) Implement all hour 1 features with PWG/PGG
- [ ] (3pt) Implement all hour 2 features with PWG/PGG
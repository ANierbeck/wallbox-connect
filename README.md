# wallbox-connect
Node.js application that reads the charging session history data from your VW (Elli) Wallbox. 

## How-To
to build it yourself you need the following node module: 

https://github.com/nightsha-de/npm-vwconnectapi

clone this repository in a directory close to this repo. 

make sure to adapt the package.json file accordingly. 

build with:

```
npm install
```

run the application with 

```
USER_ID=FOO USER_KEY=BAR node app.js
``` 

It will create a csv file in the current directory called session.csv. 
After that the application is exited. 

## Future enhancements
In future it's planned to provide a docker file with the application for easy execution.
Maybe a direct export to a google sheet might also be possible. 
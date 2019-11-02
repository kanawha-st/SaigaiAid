# SaigaiAid Viewer(災害援助ビューワー)

# Purpose
This webpacked program is to construct a simple system showing available services depending on the answers of several questions.

# Requirement
* node
* yarn
* vue

# DataFile
## Questions Data (./src/data/Qdata.js)
```
// each row consits of ["name", "conditions", "options", "question"]
export default [
  ["Q1", "", ["YES","NO"], "This is the first question."],
  ["Q2", "Q1=YES", ["YES","NO","DON'T KNOW"], "This is the second question."],
  ...
];
```
## Service Data (./src/data/Servicedata.js)
```
// each row consits of ["name", "conditions", "additional state", "who", "url", "description"]
export default [
  ["Service1", "Q1=YES", "", "City", "https://city.gov", "service by your city"],
  ["Service2", "Q1=NO", "", "Town", "https://town.gov", "service by your town"],
];
```

## About Conditions
Conditions are shown as following.
```
# SIMPLE QA
Q1=YES // answered YES on Q1. NO SPACE ALLOWED

# OR Conditions
Q1=YES,Q2=YES // answerd YES on Q1 or YES on Q2

# AND Conditions
Q1=YES/Q2=YES // answerd YES on Q1 and YES on Q2

# Composit
Q1=YES/Q2=YES,Q2=NO // answerd (YES on Q1 and YES on Q2) OR (NO on Q2). 
```

# Howto Use

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

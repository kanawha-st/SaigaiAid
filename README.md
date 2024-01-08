# SaigaiAid Viewer(災害援助ビューワー)

# Purpose
This webpacked program is to construct a simple system showing available services depending on the answers of several questions.

# Requirement
* node
* yarn
* vue

# DataFile
## Questions Data (./src/data/QData.js)
```
// each row consits of ["name", "conditions", "options", "question"]
export default [
  ["Q1", "", ["YES","NO"], "This is the first question."],
  ["Q2", "Q1=YES", ["YES","NO","DON'T KNOW"], "This is the second question."],
  ...
];
```
## Service Data (./src/data/ServiceData.js)
```
// each row consits of {"name", "conditions", "additional_state", "who", "additional_url_key", "description"}
export default [
  {name:"Service1", conditions:"Q1=YES", additional_state:"", who:"City", additional_url_key:"", description:"service by your city"},
  {name:"Service2", conditions:"Q1=NO", additional_state:"", who:"Town", additional_url_key:"", description:"service by your town"},
  {name:"Service3", conditions:"Q2=YES", additional_state:"", who:"Village", additional_url_key:"Q1", description:"service by your town"},
];
```

## Service URL Data (./src/data/ServiceUrlData.js)
```
export default new Map([
  ["Service1", "https://city.gov"],
  ["Service2", "https://town.gov"],
  ["Service3|YES", "https://a.village.gov"],
  ["Service3|NO", "https://b.village.gov"]
]);
```

## About Conditions
Conditions are shown as following.
```
# SIMPLE QA
Q1=YES // answered YES on Q1. NO SPACE ALLOWED

# OR Conditions
Q1=YES,Q2=YES // answered YES on Q1 or YES on Q2

# AND Conditions
Q1=YES/Q2=YES // answered YES on Q1 and YES on Q2

# Composit
Q1=YES/Q2=YES,Q2=NO // answered (YES on Q1 and YES on Q2) OR (NO on Q2). 
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

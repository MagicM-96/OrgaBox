# OrgaBox

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### Ideas for further versions

- [x] remove subtitle (organize your boxes)
- [x] search function
- [ ] create a new box on move item
- [x] QR creator
- [ ] Item pool (for items without boxes)
- [x] Export/Import
- [ ] Blurred search algorithm

### Known bugs

- [ ] App bar looks weird on small displays

### Example Data

If you want example data, just import this string:

```
{"items":{"811c9e81-c994-478c-aa12-a09ba36de4ed":{"title":"Item 1.1","stock":"11","description":"This is the first item in Box 1"},"50129607-ee8a-45c8-b9d2-e5a624d541a4":{"title":"Item 1.2","stock":"12","description":"This is the second item in Box 1"},"1afe82a6-7e49-434c-a322-c4483041b50c":{"title":"Item 1.3","stock":"13","description":"Here is a third item for Box 1"},"da762e64-eb0e-42d7-ade8-993daaaca931":{"title":"Item 2.1","stock":"21","description":"There are two items in Box 2. This is the first."},"d8805f0d-b0b0-466b-a933-1ef281b9f861":{"title":"Item 2.2","stock":"22","description":"And here is the second one"},"76db24c2-82fd-4ee2-ba07-5ae14b95eeaf":{"title":"Item 3.1","stock":"31","description":"There is only one item in Box 3."}},"boxes":[{"name":"Box 1","items":["811c9e81-c994-478c-aa12-a09ba36de4ed","50129607-ee8a-45c8-b9d2-e5a624d541a4","1afe82a6-7e49-434c-a322-c4483041b50c"]},{"name":"Box 2","items":["da762e64-eb0e-42d7-ade8-993daaaca931","d8805f0d-b0b0-466b-a933-1ef281b9f861"]},{"name":"Box 3","items":["76db24c2-82fd-4ee2-ba07-5ae14b95eeaf"]},{"name":"Box 4","items":[]}]}
```

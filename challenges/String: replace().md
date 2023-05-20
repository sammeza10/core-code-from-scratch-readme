# String: replace().md

### JS Hero  🥋

Exercise
Write a function normalize, that replaces '-' with '/' in a date string.

Example: normalize('20-05-2017') should return '20/05/2017'.

    function normalize(r){
    return r.replace(/-/g, '/');
    }

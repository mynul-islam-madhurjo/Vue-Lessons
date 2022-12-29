/* Binding Helps to manipulate and assign values to html attributes
also can chage the style and classes using v-bind/:
*/

//Binding links to anchor tag
var a = new Vue({
    el:'#databind',
    data: {
        name: 'mynul',
        hreflink : "http://www.google.com"
    }
});

//binding classes
var b = new Vue({
    el: '#classbind',
    data: {
        title: 'This is class binding',
        isactive: true
    }
});

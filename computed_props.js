
// This is a computed example with form
/* var vm = new Vue({
    el: '#computed_props',
    data: {
        firstname: "",
        lastname: ""
    },
    computed: {
        // With computed it gets called by itself. It is a object like method but when a method gets
        // called everytime where computed is static it stays fixed 
        getfullname() {
            return this.firstname + " " + this.lastname;
        }
    }
})
 */

//Method vs Computed Difference
/*  var vm1 = new Vue({
    el: '#computed-methods',
    data: {
        name:'Hello'
    },
    computed: {
        getComputedData(){
            return Math.random();
        }
    },
    methods: {
        getMethodData(){
            return Math.random();
        }
    }
})  */

var vm2 = new vue({
    el: "#computed-get",
    data: {
        fname: 'Mynul',
        lname: 'Islam'
    },
    methods: {

    },
    computed: {
        fullname: {
            get() {
                return this.fname + " " + this.lname;
            }
        }
    }
});
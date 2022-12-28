// Using images
  var app = new Vue({
    el: "#app",
    data: {
        name: 'Mynul',
        a: 10,
        b: 15,
        htmlcontent : "<div><h1>Vue Js Template</h1></div>",
        imgsrc: 'data:image/png;base64,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'
    },
    methods: {
        
        myAge() {
             a = 10
             b = 14
            //return 'Age ' + (a+b)
            return this.a + this.b
        },
        getData(){
            return this.name
        }

    }
}) 

// Vue js component code
Vue.component('testcomponent', {
    template: '<div><h1>Hi!</h1></div>'
});

var a = new Vue({
    el: '#first_component'
});
var a = new Vue({
    el: 'second_component'
})


//calling obejct with vue
 var _obj = { fname: "Mynul", lname: "Islam"};

var vm = new Vue({
    data: _obj
 });

 console.log(vm.fname);
 console.log(vm.$data);
 

// Vue js component code with methods calling  
 Vue.component('testcomponent', {
            // template: '<div v-on:mouseover = "changename()" v-on:mouseout = "originalname();"><h1>Custom Component created by <span id = "name">{{name}}</span></h1></div>',
            template: '<div v-on:click = "changename()" v-on:mouseout = "originalname();"><h1>Custom Component created by <span id = "name">{{name}}</span></h1></div>',
            data: function () {
                return {
                    name: "Mynul"
                }
            },
                methods: {
                    changename() {
                        this.name = "Prasoon";
                    },
                    originalname() {
                        this.name = "Mynul";
                    }
                }
            });
        var vm = new Vue({
            el: "#first_component"
        });
        var vm1 = new Vue({
            el: "#second_component"
        }) 

         

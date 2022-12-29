var a = new Vue({
    el: '#watch-props',
    data: {
        kilometers: 0,
        meters: 0
    },
    methods: {

    },
    computed: {

    },
    watch: {
        kilometers(value){
            this.kilometers = value;
            this.meters = value*1000;
        },
        meters(value){
            this.kilometers=value/1000;
            this.meters=value;
        }
    }
});
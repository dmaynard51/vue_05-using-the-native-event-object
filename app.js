const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastname: '',
    };
  },
  watch: {
    counter(value) {
      if (value > 50) {
        this.counter = 0;
      }
    },
    // name(value) {
    //   if (value === '') {
    //     this.fullname = '';
    //   }
    //   else {
    //     this.fullname = value + ' ' + this.lastname;
    //   }
    // },
    // lastname(value){
    //   if (value === ''){
    //     this.fullname = ''
    //   }
    //   else {
    //     this.fullname = this.name + ' ' + value;
    //   }
    // }
  },
  computed: {
    fullname() {
      if (this.name === '' || this.lastname === ''){
        return "";
      }
      else {

        return this.name + ' ' + this.lastname;
      }
    }
  },
  methods: {
    outputFullName(){
      if (this.name === ''){
        return ""
      }
      else {

        return this.name + " Maynard";
      }
    },
    setName(event, lastName) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = ''
    }

  }
});

app.mount('#events');

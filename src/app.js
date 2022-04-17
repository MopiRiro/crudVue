const app = new Vue({
  el: '#app',
  data: {
      titulo: 'Crud USER whit VUE',
      users:[],
      nameUser:'',
      lastNameUser: '',
      ageUser: '',
      edit: false,
      delete: false,
      cancel: false,
      id2:0,
      ind:0,
      state: false,
  },  
  methods: {

    createdUser: function(e){
        e.preventDefault();
        this.users.push({
            // id: this.users[index],
            name: this.nameUser,
            lastName: this.lastNameUser,
            age:this.ageUser,
            state: false,
            
        })
        console.log(this.users);
        this.nameUser = '';
        this.lastNameUser = '';
        this.ageUser = '';
        localStorage.setItem('users-vue',JSON.stringify(this.users));
    },
    editUser:function(index) {
        // console.log(index);
        this.users[index].state = true,
        // this.state = true,
        // this.users[index].state
        this.edit = true;
        this.nameUser = this.users[index].name;
        this.lastNameUser = this.users[index].lastName;
        this.ageUser = this.users[index].age;
        this.ind = index;
        // console.log(this.ind);
    },
    updateUser: function(e){
        // console.log(this.ind);
        alert('Datos actualizados');
        e.preventDefault();
        this.edit =! this.edit;
        let usersLS = {
            nameUserUpdate: this.nameUser,
            lasNameUserUpdate: this.lastNameUser,
            ageUserUpdate: this.ageUser,
            stateUpdate: false,
        }
        // console.log(this.users[this.ind]);
        // console.log(usersLS);
        // console.log(this.ind);
        this.users[this.ind] = usersLS;
        console.log(this.users[this.ind]);
        localStorage.setItem('users-vue',JSON.stringify(this.users[this.ind]));
        // let usersLSU = JSON.parse(localStorage.getItem('users-vue'));
        
        // this.users = usersLSU;
        this.nameUser = '';
        this.lastNameUser = '';
        this.ageUser = '';
    },
    cancelUpdate:function(e) {
        e.preventDefault();
        this.nameUser = '';
        this.lastNameUser = '';
        this.ageUser = '';
        this.edit =! this.edit; 
    },
    deleteUser: function(index){
        console.log(index);
        this.users.splice(index, 1);
        localStorage.setItem('users-vue',JSON.stringify(this.users));
    }
    },
  created: function(){
      let dataLS = JSON.parse(localStorage.getItem('users-vue'));
    if(dataLS === null){
        this.users = [];
    }else {
        this.users = dataLS;
    }
  } 

})

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
      ind:0,
      state: false,
  },  
  methods: {

    createdUser: function(e){
        e.preventDefault();
        this.users.push({
            name: this.nameUser,
            lastName: this.lastNameUser,
            age:this.ageUser,
            state: false,            
        })
        this.nameUser = '';
        this.lastNameUser = '';
        this.ageUser = '';
        localStorage.setItem('users-vue',JSON.stringify(this.users));
    },
    editUser:function(index) {
        this.users[index].state = true,
        this.edit = true;
        this.nameUser = this.users[index].name;
        this.lastNameUser = this.users[index].lastName;
        this.ageUser = this.users[index].age;
        this.ind = index;
    },
    updateUser: function (e) {
        alert('Datos actualizados');
        e.preventDefault();
        this.edit = !this.edit;
        let usersLS = {
            nameUserUpdate: this.nameUser,
            lasNameUserUpdate: this.lastNameUser,
            ageUserUpdate: this.ageUser,
            stateUpdate: false,
        }
        this.users[this.ind] = usersLS;
        localStorage.setItem('users-vue', JSON.stringify(this.users[this.ind]));
        let dataLS = JSON.parse(localStorage.getItem('users-vue'));
        this.users = [];
        this.users.push({
            name: dataLS.nameUserUpdate,
            lastName: dataLS.lasNameUserUpdate,
            age: dataLS.ageUserUpdate,
            state: false,
        })
        
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

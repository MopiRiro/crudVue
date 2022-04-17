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

    createdUser: function(name,lastName,Age,e){
        e.preventDefault();
        this.users.push({
            // id: this.users[index],
            name: this.nameUser,
            lastName: this.lastNameUser,
            age:this.ageUser,
            
        })
        console.log(this.users);
        this.nameUser = '';
        this.lastNameUser = '';
        this.ageUser = '';
        localStorage.setItem('users-vue',JSON.stringify(this.users));
    },
    editUser:function(index) {
        this.users[index].state = true,
        // this.users[index].state
        this.edit = true;
        this.nameUser = this.users[index].name;
        this.lastNameUser = this.users[index].lastName;
        this.ageUser = this.users[index].age;
        this.ind=index;
    },
    updateUser: function(e){
        e.preventDefault();
        this.edit =! this.edit;
        let usersLS = {
            nameUserUpdate: this.nameUser,
            lasNameUserUpdate: this.lastNameUser,
            ageUserUpdate: this.ageUser
        }
        this.users[this.ind]=usersLS;
        localStorage.setItem('users-vue',JSON.stringify(this.users));
        let usersLSU = JSON.parse(localStorage.getItem('users-vue'));
        this.users = usersLSU;
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
        // console.log('editar', index)
        this.users.splice(index,1);
        localStorage.setItem('users-vue',JSON.stringify(this.users));
    }

    },
  created: function(){
      let dataLS = JSON.parse(localStorage.getItem('users-vue'));
    //   console.log(dataLS);
    if(dataLS === null){
        this.users = [];
    }else {
        this.users=dataLS;
    }
  } 

})

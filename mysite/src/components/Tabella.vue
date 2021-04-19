<template>
<div class="container">
<h3>Gestionale</h3>
    <table class="table">
<thead>
<tr>
<th scope="col">Id</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">City</th>
        </tr>
      </thead>
      <tbody>
<tr v-for="user in users" v-bind:key="user.id"> 
<th scope="row">{{user.id}}</th>
          <td>{{user.name}}</td>
          <td>{{user.email}}</td>
          <td>{{user.address.city}}</td>
        </tr>
      </tbody>
    </table> 
</div> 
</template>


<script src="https://www.gstatic.com/firebasejs/8.4.1/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.4.1/firebase-firestore.js"></script>
<script>
import axios from 'axios';
export default {
name: 'Users',
data() {
return {
users: null,
};
},
created: function() {
axios
.get('https://jsonplaceholder.typicode.com/users')
.then(res => {
this.users = res.data;
})
}
}
</script>

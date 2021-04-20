<template>
  <div>
  <img alt="Vue logo" src="./assets/logo.png">
  <Users/>
  </div>
</template>

<script src="https://www.gstatic.com/firebasejs/8.4.1/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.4.1/firebase-firestore.js"></script>

<script>  
import Users from './components/Tabella.vue' 
export default {    
name: 'app',    
components: {      
Users    
}  
}  
</script> 

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<template>
    <div class="container">
        <form class="row g-3" @submit.prevent="onsubmit">
            <div class="col-md-12">
                <label for="inputEmail4" class="form-label">Name</label>
                <input v-model="name" required type="name" class="form-control" id="name">
            </div>
            
            <div class="col-md-12">
                <label for="inputEmail4" class="form-label">Email</label>
                <input v-model="email" required type="email" class="form-control" id="inputEmail4">
            </div>
            <div class="col-md-12">
                <label for="inputPassword4" class="form-label">Password</label>
                <input @keyup="check" v-model="password" required type="password" class="form-control" id="inputPassword4">
            </div>
            
            <div class="col-12">
                <button :disabled="dis1"  type="submit" class="btn btn-primary" >Sign in</button>
            </div>
        </form>
        <div>
            {{ error }}
        </div>
    </div>

</template>

<script setup>

    import { ref } from 'vue';

    const name = ref("");
    const email = ref("");
    const password = ref("");
    const error = ref("");
    const dis1 = ref(false);

    const check = () => {
        
        if (password.value.length < 8) {
            
            error.value ="A jelszonak 8 karakter hosszunak kell lennie"
            dis1.value = true;
        } 
        else {
            error.value =""
            dis1.value = false;
        }
        
        
    }

    

</script>
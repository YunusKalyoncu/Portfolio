<template>
   
    <div class="container">
       
        <div class="row">
           
            <div>
               
                <!-- Title -->
                <h2>Fruit list in Vue </h2>
                
                <hr>

                <!-- Nav Area -->
                <app-header></app-header>
                
                <!-- List Views -->
                <router-view class="ml-0" style="width: 450px"></router-view>
                
            </div>
            
        </div>

    </div>
    
</template>

<script>
    
    import Header from "./components/Header.vue";

    export default {
        
        components: {
            
            appHeader:Header
            
        },

    }
    
</script>

<style>
    
    body {
        
        padding: 30px;
        
    }

    .slide-enter-active {

        animation: slide-in 200ms ease-out forwards;

    }

    .slide-leave-active {

        animation: slide-out 200ms ease-out forwards;

    }

    @keyframes slide-in {

        from {

            transform: translateY(-30px);
            opacity: 0;

        }

        to {

            transform: translateY(0px);
            opacity: 1;

        }

    }

       @keyframes slide-out {

        from {

            transform: translateY(0px);
            opacity: 1;

        }

        to {

            transform: translateY(-30px);
            opacity: 0;

        }

    } 


</style>

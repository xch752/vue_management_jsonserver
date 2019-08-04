<template>
    <div class="alert alert-dismissible" :class="type" role="alert">
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
        {{message}}
    </div>
</template>

<script>
export default {
    name:'alert',
    props:["message"],
    data () {
        return {
            type:""
        };
    },
    mounted(){
        if(this.$route.query.type){
            this.type = this.$route.query.type
            //console.log(this.$route.query.type);  
        }
    }
}

</script>

<style scoped>
.alert{
    margin: 10px 0 10px 0;
}
</style>
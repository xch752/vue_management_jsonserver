<template>
    <div class="details">
        <Navbar></Navbar>
        <div class="container">
            <h1 class="page-header">
                {{customer.name}}
                <span class="pull-right">
                    <router-link class="btn btn-primary" :to="'/edit/'+customer.id">
                        编辑
                    </router-link>
                    <button class="btn btn-danger" @click="deleteCustomer(customer.id)">删除</button>
                </span>
            </h1>
            <ul class="list-group">
                <li class="list-group-item"><span class="glyphicon glyphicon-phone"></span>&nbsp电话:&nbsp{{customer.phone}}</li>
                <li class="list-group-item"><span class="glyphicon glyphicon-envelope"></span>&nbsp邮箱:&nbsp{{customer.email}}</li>
            </ul>

            <ul class="list-group">
                <li class="list-group-item"><span class="glyphicon glyphicon-book"></span>&nbsp学历:&nbsp{{customer.education}}</li>
                <li class="list-group-item"><span class="glyphicon glyphicon-education"></span>&nbsp毕业学校:&nbsp{{customer.graduationSchool}}</li>
                <li class="list-group-item"><span class="glyphicon glyphicon-sunglasses"></span>&nbsp职业:&nbsp{{customer.profession}}</li>
                <li class="list-group-item"><span class="glyphicon glyphicon-file"></span>&nbsp个人简介:&nbsp{{customer.profile}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
import Navbar from "../Navbar"
export default {
    name:'deatils',
    data () {
        return {
            customer:""
        };
    },
    components:{
        Navbar:Navbar
    },
    methods:{
        fetchCustomers(id){
            this.$http.get("http://localhost:3000/users/"+id)
                .then(function(responce){
                    // console.log(responce);
                    this.customer=responce.body;
                })
        },
        deleteCustomer(id){
            // console.log(id);
            this.$http.delete("http://localhost:3000/users/"+id)
                .then(function(response){
                    this.$router.push({path:"/",query:{alert:customer.name+"删除成功！",type:"alert-danger"}});
                })
        }
    },
    mounted(){
        this.fetchCustomers(this.$route.params.id);
    }
    
}

</script>

<style scoped>

</style>
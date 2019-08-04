<template>
    <div class="customers">
        <Navbar></Navbar>
        <div class="container">
            <Alert v-if="alert" :message="alert"></Alert>
            <h1 class="page-header">用户管理系统</h1>
            <input type="text" class="form-control" placeholder="搜索" v-model="filterInput"></input>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>姓名</th>
                        <th>电话</th>
                        <th>邮箱</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="customer of filterBy(customers,filterInput)">
                        <td>{{customer.name}}</td>
                        <td>{{customer.phone}}</td>
                        <td>{{customer.email}}</td>
                        <td><router-link class="btn btn-default" :to="'/customer/'+customer.id">详情</router-link></td>
                    </tr>
                </tbody>
            </table>
        </div>
        
    </div>
</template>

<script>
import Navbar from "../Navbar"
import Alert from "../Alert"

export default {
    name:'customers',
    data () {
        return {
            customers:[],
            alert:"",
            type:"",
            filterInput:""
        };
    },
    components:{
        Navbar:Navbar,
        Alert:Alert
    },
    methods:{
        fetchCustomers(){
            this.$http.get("http://localhost:3000/users")
                .then(function(responce){
                    // console.log(responce);
                    this.customers=responce.body;
                })
        },
        filterBy(customers,value){
            return customers.filter(function(customer){
                return customer.name.match(value) || customer.phone.match(value) || customer.email.match(value);
            })
        }
    },
    mounted(){
        if(this.$route.query.alert){
            this.alert = this.$route.query.alert;
            //console.log(this.alert)
        }  
        this.fetchCustomers();
    },
    // updated(){
    //     this.fetchCustomers();
    // }
}

</script>

<style scoped>

</style>
<template>
    <div class="edit">
        <Navbar></Navbar>
        <div class="container">
            <Alert :class="type" v-if="alert" :message="alert"></Alert>
            <h1 class="page-headr">编辑用户</h1>
            <form v-on:submit="updateCustomer">
                <div class="well">
                    <h4>用户信息</h4>
                    <div class="form-group">
                        <label>姓名</label>
                        <input type="text" class="form-control" placeholder="name" v-model="customer.name">
                    </div>
                    <div class="form-group">
                        <label>电话</label>
                        <input type="text" class="form-control" placeholder="phone" v-model="customer.phone">
                    </div>
                    <div class="form-group">
                        <label>邮箱</label>
                        <input type="text" class="form-control" placeholder="Email" v-model="customer.email">
                    </div>
                    <div class="form-group">
                        <label>学历</label>
                        <input type="text" class="form-control" placeholder="education" v-model="customer.education">
                    </div>
                    <div class="form-group">
                        <label>毕业学校</label>
                        <input type="text" class="form-control" placeholder="graduation-school" v-model="customer.graduationSchool">
                    </div>
                    <div class="form-group">
                        <label>职业</label>
                        <input type="text" class="form-control" placeholder="profession" v-model="customer.profession">
                    </div>
                    <div class="form-group">
                        <label>个人简介</label>
                        <!-- <input type="text" class="form-control" placeholder="profile" v-model="customer.profile"> -->
                        <textarea class="form-control" v-model="customer.profile" rows="10"></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">确认</button>
            </div>
        </form>
        </div>
        
    </div>
</template>

<script>
import Navbar from "../Navbar"
import Alert from "../Alert"
export default {
    name:'edit',
    data () {
        return {
            customer:{},
            alert:"",
            type:""
        };
    },
    components:{
        Navbar:Navbar,
        Alert:Alert
    },
    methods:{
        updateCustomer(e){
            if(!this.customer.name || !this.customer.phone || !this.customer.email){
                this.alert = "请添加对应信息";
                this.type = "alert-danger"
            }
            else{
                let updateCustomer = {
                    name:this.customer.name,
                    phone:this.customer.phone,
                    email:this.customer.email,
                    education:this.customer.education,
                    graduationSchool:this.customer.graduationSchool,
                    profession:this.customer.profession,
                    profile:this.customer.profile
                }
                
                this.$http.put("http://localhost:3000/users/"+this.$route.params.id,updateCustomer)
                    .then(function(responce){
                        // console.log(responce);
                        this.$router.push({path:"/",query:{alert:"用户信息更新成功！",type:"alert-info"}});
                    })
                e.preventDefault();
            }
            e.preventDefault();
        },
        fetchCustomers(id){
            this.$http.get("http://localhost:3000/users/"+id)
                .then(function(responce){
                    // console.log(responce);
                    this.customer=responce.body;
                    console.log(this.customer)
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
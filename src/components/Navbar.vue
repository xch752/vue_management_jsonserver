<template>
    <nav class="navbar navbar-default">
    <div class="container-fluid container">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
        </button>
        <router-link to="/" class="navbar-brand">用户管理</router-link>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav">
            <li><router-link to="/">主页</router-link></li>
            <li><router-link to="/about">关于</router-link></li>
        </ul>

        <ul class="nav navbar-nav navbar-right">
            <li><router-link to="/add">添加用户</router-link></li>
            <li><router-link to="/">注销</router-link></li>
        </ul>
        </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
    </nav>
</template>

<script>
    export default {
        data() {
            return {
               
            }
        }

    }
</script>
<style scoped>
.navbar {
    min-height:60px;
    background-color: rgb(0, 0, 0);
    margin-bottom: 0px;
}
.navbar-default {
    border: 0;
}
.navbar-nav {
    margin: 0px -15px;
}
.navbar-header{
    min-height:60px;
}
.navbar-default .navbar-toggle {
    margin-top: 13px;
    border-color: rgba(255, 255, 255, 0);
}
.navbar-default .navbar-toggle .icon-bar {
    background-color: white;
}
.navbar-default .navbar-toggle:focus, .navbar-default .navbar-toggle:hover {
    background-color: #ddd0;
}
.navbar-collapse{
    border: 0;
    border-color: rgb(255, 255, 255);
}
.navbar-default .navbar-brand {
    margin-right: 20px;
    margin-top: 5px;
    color: #ffffff;
}
.navbar-default .navbar-toggle .icon-bar {
    background-color: #ffffff;
}
.navbar .nav > li > a{
    font-family: OpenSans-Semibold;
    font-size: 14px;
    /* font-weight: bold; */
    text-align: center;
    margin-top: 5px;
    margin-left: 20px;
    margin-right: 20px;
    color: white;    
}
.navbar .nav >li >a:visited{
    color: white;
    background-color: rgb(58, 50, 63);
}
.navbar .nav > li > a:hover {
    transition:.5s ease-in;
    color: #1FCC6E;
}


</style>
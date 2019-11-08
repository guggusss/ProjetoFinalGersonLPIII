<template>
    <div class="login-form">
    <form action="/examples/actions/confirmation.php" method="post">
		<div class="avatar">
			<img src="/examples/images/avatar.png" alt="Avatar">
		</div>
        <h2 class="text-center">Member Login</h2>   
        <div class="form-group">
        	<input type="text" class="form-control" name="username" placeholder="Username" required="required">
        </div>
		<div class="form-group">
            <input type="password" class="form-control" name="password" placeholder="Password" required="required">
        </div>        
        <div class="form-group">
            <button type="submit" class="btn btn-primary btn-lg btn-block">Sign in</button>
        </div>
		<div class="clearfix">
            <label class="pull-left checkbox-inline"><input type="checkbox"> Remember me</label>
            <a href="#" class="pull-right">Forgot Password?</a>
        </div>
    </form>
    <p class="text-center small">Don't have an account? <a href="#">Sign up here!</a></p>
</div>
</template>

<script>
export default {
    name: 'Login',
    data () {
        return {
            user: {
                login:"",
                password:""       
            }     
        }
    },

    methods: {
        loginNow(){
            this.$eventBus.$emit("loadingStatus", true);
            this.$axios.post("http://virtserver.swaggerhub.com/gersongroth/LP3-Ecommerce/1.0.0/login", this.user)
                .then(res=>{
                    this.$eventBus.$emit("loadingStatus", false);
                    if(res.data.token) {
                        this.$iziToast.success({
                            title: 'Sucesso',
                            message: 'Tudo certo, você logou! ;)'
                        });
                        localStorage.setItem("token", res.data.token);            
                        this.$router.push({login: "admin"});
                    }
                    else {
                        this.$iziToast.error({
                            title: 'Erro',
                            message: 'Usuário ou senha inexistentes.'
                        });
                    }
                });
        }
    }
}
</script>

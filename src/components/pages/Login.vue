<template>
  <div class="login">
        <div class="loginHeader">
            User Login
        </div>

        <div class="loginContainer"></div>
            <table>
                <tr>
                    <td>Username</td>
                    <td>:</td>
                    <td><input type="text" placeholder="Usuário" v-model="user.login"> </td>
                </tr>
                 
                 <tr>
                    <td>Senha</td>
                    <td>:</td>
                    <td><input type="password" placeholder="Senha" v-model="user.password"> </td>
                </tr>
                
                 <tr>
                    <td></td>
                    <td></td>
                    <td><button class="addBtn" @click="loginNow()">Entrar</button></td>
                </tr>                              
            </table>
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
            console.log(this.user.login);
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

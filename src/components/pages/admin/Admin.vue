<template>
    <div class="admin">
        <div id="header">
            <h1 id="fleft">Football Importado</h1>
            <a href="#" class="fright" @click="logoutNow()">
                Sair
            </a>
        </div>

        <div id="sidebar">
            <ul class="nav">
                <li>
                    <router-link to="/admin/category">
                        Categoria
                    </router-link>
                </li>
                <li>
                    <router-link to="/admin/Supplier">
                        Fornecedor
                    </router-link>
                </li>
                <li>
                    <router-link to="/admin/product">
                        Produto
                    </router-link>
                </li>
                <li>
                    <router-link to="/admin/shop">
                        Loja
                    </router-link>
                </li>
            </ul>
        </div>

        <div id="main">
            <router-view/>
        </div>

    </div>
</template>

<script>
export default {
    name: 'Admin',
    data () {
        return {  
        }
    },
    mounted (){
        var token = localStorage.getItem("token");

        if(!token){
            this.$router.push({name:"login"});            
        }
    },

    methods: {
        logoutNow(){
            localStorage.setItem("token", "");
            this.$router.push({name:"login"});
        }
    
    }
}
</script>

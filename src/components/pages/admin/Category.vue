<template>
    <div>
        <modal modalHeading="Adicionar uma nova categoria" :cond="showingAddModal" @modalClose="
        showingAddModal = false">

            <table>
                <tr>
                    <td>
                        Categoria
                    </td>
                    <td>
                        <input type="text" id="newCatName" v-model="newCategory.name" placeHolder="Nome da Categoria">
                    </td>
                </tr>

                 <tr>
                    <td>
                        Descrição
                    </td>
                    <td>
                        <textarea type="text" v-model="newCategory.description" placeHolder="Descrição da Categoria"></textarea>
                    </td>
                </tr>

                 <tr>
                    <td>
                        
                    </td>
                    <td>
                        <button class="btnSave" @click="addNewCategory()">Salvar</button>
                    </td>
                </tr>                
            </table>
        
        </modal>

        <h2 class="fleft">Categorias</h2>
        <button class="addBtn fright" @click="showingAddModal = true">Adicionar nova</button>
        <div class="clear"></div>
        <hr>
    </div>
</template>

<script>
export default {
    name: 'Category',
    data () {
        return {  
            showingAddModal: false,
            newCategory: {
                name: "",
                description: ""
            }
        }
    },

    methods: {
        addNewCategory() {
            console.log(this.newCategory);
        }
    }
}
</script>
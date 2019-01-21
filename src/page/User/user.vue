<template>
    <div>
        当前登录的用户为：
       <p >
           {{username}}
        </p>
    </div>
</template>
<script>
export default {
    data(){
        return {
            username:''
        }
    },
    created(){
        this.username=sessionStorage.getItem('token');
    }
}
</script>
<style lang="scss" scoped>
   div{
       color:#333;
       font-size:rem(20px);
      
   }  
</style>


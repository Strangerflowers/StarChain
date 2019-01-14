<template>
    <div>Cart</div>
</template>
<script>
export default {
    name:'Cart',
    data(){
    	return{

    	}
    },
    created(){
    	console.log(this.$route.params.userId)
    }
}
</script>

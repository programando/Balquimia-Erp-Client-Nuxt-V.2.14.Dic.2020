<template>
  <div class="bg-gray-200">
    <Header></Header>
      <Nuxt />
    <Footer></Footer>
  </div>
</template>
<script>
  import Header from "@/components/home/header/indexHeader";
  import Footer from "@/components/home/footer/footer";

    export default {
      
    components: {
        Header,
        Footer
  }
    }
</script>
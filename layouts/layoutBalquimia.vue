<template>
  <div class="">
    <Header></Header>

      <Nuxt />
    <WsContact></WsContact>
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from "@/components/home/header/indexHeader";
  import Footer from "@/components/home/footer/footer";
  import WsContact from "@/components/comun/wsContact.vue"

    export default {
        name: "layoutComputron",
        components: {
            Header,
            Footer,
            WsContact
          },
          data: ()=> ({

          }),

    }
</script>

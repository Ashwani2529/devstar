<script>
  import Navbar from "./Componants/Navbar.svelte";
  import Docs from "./Componants/Docs.svelte";
  import Form from "./Componants/Form.svelte";
</script>


<div class="card gap-16 items-center mx-auto max-w-screen-xl lg:grid lg:grid-cols-1 overflow-hidden rounded-lg">
    <div class="w-full h-full dark:text-white flex flex-col pb-2">
        <h1 class="text-center">Devstar Document Templates Module</h1>
        <div class="w-full h-full flex">
          <Navbar />
          <Docs />
          <Form />
        </div>
    </div>
 </div>

<style>
</style>
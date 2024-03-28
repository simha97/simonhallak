
<template>
    <div class = 'page'>
      <navigationBar/>
        <slot />

      <pageFooter/>
    </div>
  </template>
  
  
<style scoped>
.page {
    background: linear-gradient(to bottom, #f4f2ed, #dcd9d0); /* Change the colors as needed */
    min-height: 100vh; /* Ensure the gradient covers the entire viewport height */

}
</style>

  

<template>
    <div class = 'page'>
      <navigationBar/>
        <slot />

      <pageFooter/>
    </div>
  </template>
  
  
<style scoped>
.page {
    background: linear-gradient(to bottom, #dfdbd2, #c4bfb1); /* Change the colors as needed */
    min-height: 100vh; /* Ensure the gradient covers the entire viewport height */

}
</style>

  
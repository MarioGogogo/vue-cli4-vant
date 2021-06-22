<template>
  <div>
    <h2>Child-{{age}} 强制更新子组件不会更新</h2>
  </div>
</template>

<script>
  export default {
     name:"child1",
     props: {
       age: {
         type: Number,
         default: 0
       },
     },
      mounted () {
    console.log('child1-mounted');
    },
    updated () {
    console.log('child1-updated');
    }
  }
</script>
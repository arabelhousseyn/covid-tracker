<template>
  <div class="header white">
<span style="cursor:none;">{{date}} {{hours}}</span>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      date: null,
      hours : null,
      isEnabled : true,
    };
  },
  created() {
    setInterval(() => {
        var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();

    var formated = yyyy + '-' + mm + '-' + dd;
    this.date = formated
    this.hours = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds()
    }, 1000);
  },
};
</script>

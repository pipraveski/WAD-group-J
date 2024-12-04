<template>
  <div>
    <div class="heightCenter navtext">
      <a href="./index.html" class="nav">Home</a>
      <span> | </span> <!-- Use span instead of <a> for the separator -->
      <a href="./addPage.html" class="nav">Add Post</a>
    </div>
    <img 
      src="res/images/defaultProfile.jpg" 
      alt="Profile" 
      class="headerProf" 
    />
  </div>
</template>

<script>
export default {
  name: "PageHeader", // Use PascalCase for component names
};
</script>

<style scoped>
/* Add any styles if needed */
.headerProf {
  width: 50px; /* Example size */
  height: 50px; /* Example size */
  border-radius: 50%; /* Optional: to make it circular */
}
.nav {
  text-decoration: none; /* Optional: remove underline from links */
  color: #000; /* Optional: color for links */
  font-weight: bold; /* Optional: style for links */
}
.nav:hover {
  color: #007BFF; /* Optional: color on hover */
}
.heightCenter {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
}

.navtext {
  margin-right: 10px;
}
</style>


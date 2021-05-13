<template>
  <div class="about">
    <div class = "main">
      <div class = "widther">
        <h2>Hey! My name is Mac.</h2>
        <img id="Mac" src="@/assets/madhappy.jpg" alt="A picture of Mac with his friends">
        <p class ="centered">
          I've built this website as my final project for my Environmental Politics class at Duke.
        </p>
        <p>
          We've spent the semester talking about all manner of global environmental issues, including but not limited to: 
          artisinal and small-scale gold mining, the brazillian rainforest, and waste and plastic in the ocean.
        </p>
        <p> 
          Our class is taught by professor Erika Weinthal. You can check her out on the
          Nicholas School of the Environment page <a href="https://nicholas.duke.edu/people/faculty/weinthal">here</a>.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
h2 {
  font-size: 1.5rem;
}
.main {
  justify-content: center;
}
.widther {
  padding-left: 12.5%;
  width: 75%;
}
.centered{
  padding-top: 20px;
}
#Mac {
  max-width: 15rem;
  border-radius: 7px;
}
</style>
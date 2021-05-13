<template>
  <div class="home">
    <div class = "main">
      <div class = "intro">
        <h1>Welcome to do you know nukes!</h1>
        <p>
          I'm glad you're here! If you dont know that much about nuclear energy, you can start on this page.
          Otherwise, feel free to check out the rest of the site!
        </p>

        <div class ="doublecolumn">
          <div class = "column1">
            <h2>
              A brief Introduction
            </h2>

            <p>
              You probably recognize these nuclear power plants: they are very distinct. 
              The one pictured to the right is Shearon Harris, and it is based in Raleigh, and powers a large portion of the triangle.

              Modern nuclear energy is energy created in a plants like this one using "nuclear fuel." 
              Nuclear power plants break down the nuclear fuel, creating energy, and generate "nuclear waste."
            </p>

            <p>
              Nuclear fuel is pretty easy to obtain, and you only need a little bit of it to make a lot of energy.
              It is much cleaner than coal and oil because it doesn't produce any CO2, and we already have the technology
              to use it.
            </p>

            <p>
              Nuclear energy's biggest problem is that nuclear fuel is not really that safe. If you touch the fuel or the waste without special
              equipment, you'll get really sick and suffer from radiation poisoning. And if an emergency happens like an earthquake or a tsunami, nuclear power plants
              have a chance to "melt down" and hurt a lot of people.
            </p>

            <p>
              This has happened twice in the 70 years we've had nuclear technology. The first time was at the Chernobyl plant in 1986,
              and the second was at Fukushima Daiichi in 2011. 
            </p>

            <p>
              All in all, what everyday people think of nuclear energy has really changed how much it has been used, and
              because it's a little complicated, there are many misconceptions that surround it. 
            </p>

            <p>
              I built this page to help people learn about nuclear energy! So go check out the quiz to see if you have any
              misconceptions!
            </p>
        </div>

        <div class = "column2">
           <img ig="shearonharris" src="@/assets/shearonharris.jpg" alt="The Shearon Harris Nuclear Power Plant in Raleigh." width="75%">
        </div>

      </div>
      
      </div>
    
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    
  }
}
</script>

<style>
body{
    background-color: #a8e6cf;
}

</style>

<style scoped>
.main {
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
}
.doublecolumn {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.column1 {
  max-width: 20rem;
}
.column2 {
  margin-top: 20%;
  max-width: 30rem;
}
.intro {
  width: 75%;
  justify-content: center;  
}
</style>
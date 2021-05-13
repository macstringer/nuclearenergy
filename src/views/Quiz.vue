<template>
  <div class = "background">
      <div class = "body">
        <h1> Nuclear Energy Quiz </h1>
        <p> Welcome to the quiz! Here you can test your knowledge about nuclear energy! </p>

            <div class = "quizContainer">                
                <div id="questionContainer" v-for="(question,i) in questions.slice(a,b)" :key="i" v-show="quiz">
                    
                    <h2>Question {{b}}/{{questions.length}}</h2>
                    <p>{{question.question}}</p>
                    <ul>
                        <li v-for="(proposition,index) in question.propositions" :key="index" class="li" @click="selectResponse(proposition,index)" :class=" correct ? check(proposition) : ''">
                            {{proposition.props}} 
                            <div class="fas fa-check" v-if="correct ?  proposition.correct: ''"></div>
                            <div class="fas fa-times" v-if="correct ?  !proposition.correct: ''"></div>
                        </li>

                        <div v-if="dispA > 0">{{question.answer}} </div>
                    </ul>
                </div>

                <div class="footer-quiz">
                    <div v-if="progress < 100" class="box-button">
                        <button  @click="skipQuestion()" :style="next ? 'background-color: rgb(106, 128, 202)' : ''">Skip</button>
                        <button  @click="nextQuestion()" :style="!next ? 'background-color: rgb(106, 128, 202)' : ''">Next</button>
                    </div>   
                </div>

            </div>

            <div class="box-score" v-if="score_show">
              <h2>Your score is</h2>
              <h2>{{score}}/{{questions.length}}</h2>

              <div class="btn-restart">
                  <button @click="restartQuiz">Restart <i class="fas fa-sync-alt"></i></button>
              </div>
            </div>

        </div>
  </div>
</template>



<script>
var concepts = new Array(10);

export default {
    data(){
    return{
      questions:[
        {
          question:"Nuclear radiation can have harmful effects on people exposed to it.",
          propositions:[
            {props:'true',correct:true, tag: 'basic'},
            {props:'false'},
            {props:'I dont know', tag: 'basic'},
          ], 
          answer: "True. Nuclear radiation is super harmful to people, and if you're around it for too long it can give you some pretty nasty issues. Not to worry, a little bit of radiation is OK, but a lot is not."
        },
        {
          question:"Nuclear power plants produce Carbon Dioxide.",
          propositions:[
            {props:'true'},
            {props:'false',correct:true, tag: 'basic'},
            {props:'I dont know', tag: 'basic'},
          ], 
          answer: "False. Nuclear power plants break up radioactive materials, and use it to heat up water to spin turbines. They don't produce carbon dioxide. ",
        },
        {
          question:"Nuclear power can quickly scale up and down to meet daily energy demand.",
          propositions:[
            {props:'true',correct:true},
            {props:'false'},
            {props:'I dont know'},
          ],
          answer: "True. To change how much energy you're generating, all a nuclear power plant has to do is move the radioactive material further apart or closer together. While many renewables have issues consistenly producing energy, nuclear power does not."
        },
        {
          question:"Nuclear power plants don't require extra security because terrorist attacks aren't a big threat.",
          propositions:[
            {props:'true', correct: true},
            {props:'false'},
            {props:'I dont know'},
          ], 
          answer: "True. Nuclear power plants are already very secure and controlled facilities. It would be hard to have a meltdown even if you wanted to.   ",
        },
        {
          question:"A knowledgeable and crafty nuclear physicist would have a hard time converting a power plant into a bomb.",
          propositions:[
            {props:'true',correct:true},
            {props:'false'},
            {props:'I dont know'},
          ], 
          answer: "True. Though it is possible for reactors to \"run away\" their radioactive material is usually enriched to far below the required amount to produce a nuclear weapon.",
        },
        {
          question:"Teaching other countries how to work with nuclear energy poses a risk to national security.",
          propositions:[
            {props:'true'},
            {props:'false',correct:true},
            {props:'I dont know'},
          ], 
          answer: "False. Because it is almost impossible to make bombs out of reactors alone, there is no great security risk in sharing our knowledge of how reactors work.",
        },
        {
          question:"Nuclear power plants have to be far away from urban centers because otherwise people might get sick",
          propositions:[
            {props:'true'},
            {props:'false',correct:true},
            {props:'I dont know'},
          ], 
          answer: "False. Outside of the chamber where the fuel is kept, there is actually very little radiation at a nuclear power plant. Living within 50 miles of a reactor would give you 0.01 millirem extra radiation per year. Compared to the 300 millirem that comes from natural background radiation, that number is almost nothing. ",
        },
        {
          question:"A meltdown is the only risk involved in nuclear energy generation",
          propositions:[
            {props:'true',correct:true},
            {props:'false'},
            {props:'I dont know'},
          ], 
          answer: "True. Other than a nuclear meltdown, there is nothing really that can go wrong at a nuclear power plant. And because of this, we've had a lot of practice preventing meltdowns. Today, most power plants are equipped with programs that will shut down a reactor that is going too strong even if there isn't a human there to confirm it. ",
        },
        {
          question:"We have trouble finding places to put our nuclear waste.",
          propositions:[
            {props:'true',correct:true},
            {props:'false'},
            {props:'I dont know'},
          ], 
          answer: "True. Because of the public perception of nuclear energy and nuclear waste, the US government has had a very hard time finding places to store nuclear waste so that people won't be mad. They haven't found anywhere yet, so nuclear waste is usually stored near the plant where it was used. Luckily there isn't that much of it.",
        },
        {
          question:"Nuclear Power plants primarily run on uranium",
          propositions:[
            {props:'true',correct:true},
            {props:'false'},
            {props:'I dont know'},
          ], 
          answer: "True. Uranium 235, Uranium 238, and Plutonium are the primary elements and isotopes that we use for nuclear fuel.  ",
        }
      ],
      a:0,
      b:1,
      next:true,
      score_show:false,
      quiz:true,
      score:0,
      correct:false,
      progress:0,
      dispA: 0,
    }
  },name: "quiz",
    components: {
    },
    methods:{
    
    selectResponse(e){
        this.dispA = 1;
      this.correct = true;
      this.next = false;
      if (e.correct) {
        this.score++;
      } else {
        console.log(e.tag);
        concepts = concepts.concat(e.tag);
        concepts.push(e.tag);
      }
    },
    check(status){
        if (status.correct) {
          return 'correct'
        }else{
          return 'incorrect' 
        }
    },
    nextQuestion(){
        this.dispA = 0;
      if (this.next) {
        return;
      }
      this.progress = this.progress + (100/this.questions.length);
      if(this.questions.length - 1 == this.a){
        this.score_show = true;
        this.quiz = false;    
      }
      else{
        this.a++;
        this.b++;
        this.correct = false;
        this.next = true;
        
      }
      
    },
    skipQuestion(){
        this.dispA = 0;
      if (!this.next) {
        return;
      }
      this.progress = this.progress + (100/this.questions.length);
      if(this.questions.length - 1 == this.a){
        this.score_show = true;
        this.quiz = false;
        
        
      }else{
        this.a++;
        this.b++;
      } 
    },
    
    restartQuiz(){
      Object.assign(this.$data, this.$options.data()); // reset data in vue
    },


    }
}
</script>




<style>
.background {
    background-color: #2e4884;
    border-radius: 10px;
    padding-bottom: 100%;
}
.body {
    padding-top: 2%;
    
    max-width: 75%;
    margin-left: 12.5%;

    /* any text in body will be white */
    color: #faebd7;
}
.quizContainer {
    display:block;
    width: 100%;
    height: 40%;
    
    margin-top: 10%;
    padding-top: 2%;

    justify-content: center;

    background-color: #faebd7;
    color: #2e4884;

    border-radius: 10px 10px 10px 10px;

}
.buttonGrid {
    display: grid;
    grid-template-columns: repeat(1, auto);
    gap: 10px;
    margin: 0px;
    padding: 5%;
}
.button {
    background-color: #faebd7;
    color: white;
    border-radius: 3px;
    border: #4d4d4d 5px;
    padding: 7px;
}
button:hover {
    background-color: #666666;
}
.controlButton {
    position:relative;
    bottom:10px;
    margin-left: 5px;
    margin-right: 5px;

    background-color: #b3b3b3;
    color: #4d4d4d;
    border-radius: 3px;
    border: #b3b3b3 1px;
    padding: 7px;
}
#startButton {
    font-size: 2rem;
    width: 95%;
    margin-top: 20px;
}
.controlButton:hover {
    background-color: #999999;
    color: white;
}

.question {
    font-size: 2rem;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    text-decoration: bold;
}
#questionContainer {
    justify-content: center;
    
}

.hide {
    display: none;
}

.container-quiz {
    display: flex;
    width: 40%;
    height: 85%;
    background-color: white;
    text-align: center;
    flex-flow: column;
    border: 1px solid #faebd7;
    border-radius: 10px;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
}

.header-quiz {
    display: flex;
    width: 100%;
    height: 20%;
    border-bottom: 1px solid #faebd7;
    justify-content: center;
    align-items: center;
    background-color: #faebd7;
    border-radius: 10px 10px 0px 0px;
}

.container-quiz .box {
    display: flex;
    width: 100%;
    height: 70%;
    flex-flow: column;
    margin: auto;
}

.box-question {
    margin-top: 20px;
}

.box-question p {
    margin-top: 20px;
}

.box-propositions {
    margin: auto;
    display: flex;
    width: 100%;
    justify-content: center;
}

ul {
    display: flex;
    justify-content: center;
    width: 80%;
    flex-flow: column;
    margin-left: 5%;
}

li {
    list-style: none;
    line-height: 2;
    border: 1px solid #cdd2d2;
    margin-bottom: 20px;
    border-radius: 15px;
    cursor: pointer;
    transition: 0.3s;
}

li:hover {
    /*transform: scale(1.1);*/
    background-color: #e7eae0;
}

li>div {
    float: right;
    margin-top: 7px;
    margin-right: 7px;
    color: white;
}

.check {
    color: rgb(74, 219, 74);
}

.close {
    color: rgb(240, 117, 100);
}

.footer-quiz {
    display: flex;
    width: 100%;
    height: 10%;
    justify-content: center;
    border-top: 1px solid #faebd7;
    background-color: #faebd7;
    border-radius: 0px 0px 10px 10px;
}

.box-button {
    display: flex;
    width: 100%;
    background-color: #faebd7;
    border-radius: 0px 0px 10px 10px;
}

.footer-quiz .box-button button {
    width: 150px;
    height: 35px;
    outline: none;
    border: 0;
    color: white;
    font-size: 18px;
    cursor: pointer;
    border-radius: 15px;
    margin: auto;
    margin-bottom: 20px;
    letter-spacing: 2px;
    background-color: #a09f9ff5;
}

li.correct {
    border: 1px solid rgb(74, 219, 74);
    background-color: rgb(74, 219, 74);
    color: white;
    font-weight: 600;
}

li.incorrect {
    border: 1px solid rgb(240, 117, 100);
    background-color: rgb(240, 117, 100);
    color: white;
    font-weight: 600;
}

.box-score {
    display: flex;
    width: 100%;
    height: 70%;
    flex-flow: column;
}

.box-score h2 {
    margin-top: 40px;
}

i {
    display: none;
    color: white;
}

.step-progress {
    display: flex;
    width: 100%;
    height: 5px;
    background-color: rgb(106, 128, 202);
    transition: 0.5s;
}

.btn-restart {
    display: flex;
    width: 100%;
    height: auto;
    justify-content: center;
    margin-top: 50px;
}

.btn-restart button {
    width: 150px;
    height: 35px;
    outline: none;
    border: 0;
    background-color: rgb(106, 128, 202);
    color: white;
    font-size: 18px;
    cursor: pointer;
    border-radius: 15px;
    margin: auto;
    margin-bottom: 10px;
    letter-spacing: 2px;
}

.next {
    background-color: rgb(106, 128, 202);
}

@media screen and (max-width: 900px) {
    .container-quiz {
        width: 60%;
    }
}

@media screen and (max-width: 720px) {
    .container-quiz {
        width: 80%;
    }
    .footer-quiz .box-button button {
        width: 100px;
    }
}



</style>
<template>
    <div class="play">
        <div class="container mx-auto px-3 md:px-0 mt-3">
            <div v-if="!game.started && !game.finished">
                
                <div class="text-center">
                    <div class="pb-1">
                        <label class="inline-block w-20" for="rounds">Runden</label>
                        <input class="border w-48 p-2" name="rounds" type="number" v-model="game.rounds" />
                    </div>

                    <button @click="StartGame" class="inline-block text-sm px-4 py-2 leading-none border rounded text-teal-500 border-teal-500 hover:border-transparent hover:text-white hover:bg-teal-500 mt-4">
                        Start game
                    </button>
                </div>


            </div>

            <div v-if="game.started && !game.finished">

                <h1 class="text-xl block text-center">{{ CurrentQuestion.question }}</h1>

                <div v-if="game.currentAnswers == game.currentRound && game.currentRound > 0">
                    <div v-if="game.lastAnswer.isCorrect">
                        Richtig
                    </div>
                    <div v-if="!game.lastAnswer.isCorrect">
                        Falsch
                    </div>
                </div>

                <button
                    :class="`w-full px-4 py-2 border border-teal-500 my-1`"
                    v-for="(answer, answerIndex) in CurrentQuestion.answers"
                    @click="Answer(answer, answerIndex)"
                >
                    {{ answer.answer }}
                </button>
            </div>

            <div v-if="game.started && game.finished">
                <div class="text-center">
                    <h1 class="text-xl">Du hast {{ game.correctAnswers }} von {{ game.rounds }} Antworten gewusst!</h1>

                    <button @click="game.started = false; game.finished = false" class="inline-block text-sm px-4 py-2 leading-none border rounded text-teal-500 border-teal-500 hover:border-transparent hover:text-white hover:bg-teal-500 mt-4">
                        Nochmal spielen
                    </button>

                    <nuxt-link to="/list" class="inline-block text-sm px-4 py-2 leading-none border rounded text-teal-500 border-teal-500 hover:border-transparent hover:text-white hover:bg-teal-500 mt-4">
                        Zurück zur Liste
                    </nuxt-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

    asyncData(){
        return {
            memory: null,
            questions: [],
            
            game: {
                rounds: 10,
                currentRound: 0,
                currentQuestion: 0,
                currentAnswers: 0,
                correctAnswers: 0,
                lastAnswer: null,
                started: false,
                finished: false,
                answers: []
            }
        }
    },

    computed: {
        CurrentQuestion(){
            return this.questions[this.game.currentQuestion]
        }
    },

    methods: {
        StartGame(){
            this.game.currentRound = 0
            this.game.currentQuestion = 0
            this.game.currentAnswers = 0
            this.game.correctAnswers = 0
            this.game.lastAnswer = null
            this.game.finished = false
            this.game.started = true

            this.questions = this.memory.cards.map((card) => {
                const answers = []

                answers.push({
                    isCorrect: true,
                    answer: card.content
                })
                let wrongAnswers = []

                let otherCards = this.memory.cards.filter((_card) => {
                    return _card.id != card.id
                })

                wrongAnswers.push(...otherCards.map((_card) => {
                    return {
                        isCorrect: false,
                        answer: _card.content
                    }
                }))

                wrongAnswers = wrongAnswers.sort(() => { return Math.random() - 0.5 })
                wrongAnswers = wrongAnswers.slice(0, 3)

                return {
                    question: card.headline,
                    answers: [
                        ...answers,
                        ...wrongAnswers
                    ].sort(() => { return Math.random() - 0.5 })
                }
            })

            this.questions = this.questions.sort(() => { return Math.random() - 0.5 })
        },

        Answer(answer, answerIndex){
            if(answer.isCorrect){
                this.game.correctAnswers++
            }

            this.game.lastAnswer = answer
            this.game.currentAnswers++

            if(this.game.currentRound == this.game.rounds){
                this.Finish()
            }else{
                this.Next()
            }

            

        },

        Finish(){
            this.game.finished = true
        },

        Next(){
            if(this.game.currentRound % this.questions.length == 1){
                this.game.currentQuestion = -1
                this.questions = this.questions.sort(() => { return Math.random() - 0.5 })
                this.questions = this.questions.map((question) => {
                    question.answers = question.answers.sort(() => { return Math.random() - 0.5 })
                    return question
                })
            }

            this.game.currentRound++
            this.game.currentQuestion++
        },
    },

    async mounted(){
        let memory = this.$store.getters['memories/Memories'].find((_memory) => {
            return _memory.id == this.$route.params.id
        })

        this.memory = JSON.parse(JSON.stringify(memory))
    },
}
</script>
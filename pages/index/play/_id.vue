<template>
    <div class="play">
        <div class="container mx-auto px-3 md:px-0 mt-3">
            <div v-if="!game.started && !game.finished">
                
                <div class="text-center">
                    <div class="pb-1">
                        <label class="inline-block w-20" for="rounds">{{ $t('play.rounds') }}</label>
                        <input class="border w-48 p-2" name="rounds" type="number" v-model="game.rounds" />
                    </div>

                    <button @click="StartGame" class="inline-block text-sm px-4 py-2 leading-none border rounded text-teal-500 border-teal-500 hover:border-transparent hover:text-white hover:bg-teal-500 mt-4">
                        {{ $t('play.start') }}
                    </button>
                </div>


            </div>

            <div v-if="game.started && !game.finished">

                <h1 class="text-xl block text-center">{{ game.currentRound + 1 }} / {{ game.rounds }}: {{ CurrentQuestion.question }}</h1>

                <button
                    :class="`w-full px-4 py-2 border border-teal-500 my-1`"
                    v-for="(answer, answerIndex) in CurrentQuestion.answers"
                    @click="Answer(answer, answerIndex)"
                >
                    {{ answer.answer }}
                </button>

                <div class="py-2" v-if="game.currentAnswers == game.currentRound && game.currentRound > 0">
                    <div class="bg-green-500 px-4 py-2 text-center" v-if="game.lastAnswer.isCorrect">
                        {{ $t('play.correct') }}
                    </div>
                    <div class="bg-red-500 px-4 py-2 text-center" v-if="!game.lastAnswer.isCorrect">
                        {{ $t('play.wrong') }}
                    </div>
                </div>
            </div>

            <div v-if="game.started && game.finished">
                <div class="text-center">
                    <h1 class="text-xxl">
                        {{ $t('play.gameOverHeadline') }}
                    </h1>
                    <h2 class="text-xl">
                        {{ $t('play.gameOverContent') }}: {{ game.correctAnswers }} / {{ game.rounds }}
                    </h2>

                    <button @click="game.started = false; game.finished = false" class="inline-block text-sm px-4 py-2 leading-none border rounded text-teal-500 border-teal-500 hover:border-transparent hover:text-white hover:bg-teal-500 mt-4">
                        {{ $t('play.again') }}
                    </button>

                    <nuxt-link to="/list" class="inline-block text-sm px-4 py-2 leading-none border rounded text-teal-500 border-teal-500 hover:border-transparent hover:text-white hover:bg-teal-500 mt-4">
                        {{ $t('play.back') }}
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
                questions: [],
                answers: []
            }
        }
    },

    computed: {
        CurrentQuestion(){
            return this.questions[this.game.currentQuestion]
        }
    },

    async mounted(){
        let memory = this.$store.getters['memories/Memories'].find((_memory) => {
            return _memory.id == this.$route.params.id
        })

        this.memory = JSON.parse(JSON.stringify(memory))
    },

    methods: {
        StartGame(){
            this.game.currentRound = 0
            this.game.currentQuestion = 0
            this.game.currentAnswers = 0
            this.game.correctAnswers = 0
            this.game.answers = []
            this.game.questions = []
            this.game.lastAnswer = null
            this.game.finished = false
            this.game.started = true

            this.questions = this.memory.cards.map((card) => {
                const answers = []

                answers.push({
                    isCorrect: true,
                    cardId: card.id,
                    answer: card.content
                })
                let wrongAnswers = []

                let otherCards = this.memory.cards.filter((_card) => {
                    return _card.id != card.id
                })

                wrongAnswers.push(...otherCards.map((_card) => {
                    return {
                        isCorrect: false,
                        cardId: _card.id,
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

            this.game.questions.push(...this.questions)
        },

        Answer(answer, answerIndex){
            this.game.answers.push(answer)
            if(answer.isCorrect){
                this.game.correctAnswers++
            }

            this.game.lastAnswer = answer
            this.game.currentAnswers++

            if(this.game.currentRound >= this.game.rounds - 1){
                this.Finish()
            }else{
                this.Next()
            }

            

        },

        Finish(){
            this.game.finished = true

            this.$store.commit('games/addGame', {
                id: new Date().getTime(),
                playedAt: new Date().getTime(),
                memoryId: this.memory.id,
                questions: this.game.questions,
                rounds: this.game.rounds,
                correct: this.game.correctAnswers,
                answers: this.game.answers
            })
        },

        Next(){
            if(this.game.currentRound % this.questions.length == 1){
                this.game.currentQuestion = -1
                this.questions = this.questions.sort(() => { return Math.random() - 0.5 })
                this.questions = this.questions.map((question) => {
                    question.answers = question.answers.sort(() => { return Math.random() - 0.5 })
                    return question
                })
                this.game.questions.push(...this.questions)
            }

            this.game.currentRound++
            this.game.currentQuestion++
        },
    },

    
}
</script>
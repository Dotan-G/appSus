import { keepService } from "../services/keep-service.js";
export default {
    props: ['keep', 'editableKeep'],
    template: `
    <div v-if="keep" class="keep-preview-text">
        <p v-if="!toShow" @click="toShow = !toShow">{{keep.info.txt}}</p>
    <p v-if="toShow">{{txt}}</p>
    <!-- <div v-bind:class="modalDisplay" hidden> -->
    <div v-if="toShow" class="text-modal" @change="toShow = !toShow">
        <textarea contenteditable="true" placeholder="type here" v-model="txt" @change="saveToKeep"></textarea>
        <!-- <textarea contenteditable="true" v-model="txt" >Hello I am a modal</textarea> -->
        
    </div>
    </div>

    `,
    data() {
        return {
            toShow: false,
            txt: '',
            keepTxt: {
                id: null,
                type: "NoteTxt",
                isPinned: false,
                info: {
                    txt: ''
                },
                style: {
                    backgroundColor: 'none'
                }
            }
        }
    },
    computed: {
        modalDisplay() {
            return { modalVisible: this.modalIsHidden }
        },

        modalIsHidden() {

            return this.keep;
        }



    },
    methods: {
        saveToKeep() {
            this.keepTxt = this.keep;
            this.keepTxt.info.txt = this.txt;
            console.log(this.keepTxt)
            keepService.save(this.keepTxt)
                .then(() => {

                    console.log('success modifing  txt keep');
                    //this.keepToEdit = null;
                    //TODO: emit to loadKeeps
                    //   this.loadKeeps();

                })
                .catch(err => {
                    const msg = {
                        txt: err,
                        type: 'fail',
                    };
                    console.log(msg.type, msg.txt);

                })


            // if (this.keepTxt.id === null) return

        },



        // logKeepId()
        // getClickedKeep(keepId) {
        //     keepService.getKeepById(keepId)
        //         .then(keep => {
        //             this.keepTxt = keep
        //             console.log(this.keepTxt);
        //         })
        // },




    },
    components: {},

}
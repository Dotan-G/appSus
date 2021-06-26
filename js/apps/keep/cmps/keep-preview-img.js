import { keepService } from "../services/keep-service.js";
export default {
    props: ['keep', 'editableKeep'],
    template: `
    <!-- <div :style="keepStyle" class="keep-preview-text">
    <p>{{keep.info.title}}</p>
    <img :src="keep.info.url" width="150px">
    

    </div> -->

    <div v-if="keep" class="keep-preview-image">
        <p v-if="!toShow" @click="toShow = !toShow">{{keep.info.title}}</p>
        <img v-if="!toShow" :src="keep.info.url" width="150px">
        <p v-if="toShow">{{title}}</p>
        <div v-if="toShow" class="image-modal">
            <button class="exit-btn" @click="toShow = !toShow">x</button>
            <textarea class="modal-image-title" contenteditable="true" placeholder="Enter title..." v-model="title"></textarea>
            <textarea class="modal-image-url" contenteditable="true" placeholder="Enter image url..." v-model="url"></textarea>
            <button @click="saveToKeep(); toShow = !toShow" class="save-btn">Save & Close</button>
            
        </div>
    </div>
    `,
    data() {
        return {
            // exitBtnClass: {
            //     active: true,
            //     'exit-btn': true
            // },

            toShow: false,
            keepStyle: null,
            title: '',
            url: '',
            keepImg: {
                id: null,
                type: "NoteImg",
                isPinned: false,
                info: {
                    url: '',
                    title: ''
                },
                style: {
                    backgroundColor: 'none'
                }
            },
        }


    },
    computed: {

    },
    methods: {
        saveToKeep() {
            console.log('saving')
            this.keepImg = this.editableKeep;
            this.keepImg.info.title = this.title;
            this.keepImg.info.url = this.url;
            keepService.save(this.keepImg)
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

        }
    },
    watch: {
        myprop: function(newVal, oldVal) { // watch it
            this.keepStyle = newVal.style;
        }
    },
    components: {}
}
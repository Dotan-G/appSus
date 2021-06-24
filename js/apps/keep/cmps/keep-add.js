import { utilService } from "../services/util-service.js"
export default {
    props: ['editableKeepId', 'keep'],
    template: `
    <div class="keep-add">
        <form v-if="!keepType ||keepType==='NoteTxt'">
            <input @change="saveTxtKeep" ref="keepTxt" type="text" v-model="keepTxt.info.txt" placeholder="Add a note..." class="add-bar">
        </form>
        <form v-if="keepType==='NoteImg'">
            <input ref="keepImg" type="text" v-model="keepImg.info.title" placeholder="Add a Title for your Image..." class="add-bar">
            <input ref="keepImg" type="text" v-model="keepImg.info.url" @change="saveImgKeep" placeholder="Add Image url..." class="add-bar">
        </form>
        <form v-if="keepType==='NoteTodos'">
            <input @change="save" ref="keepTodo" type="text" v-model="keepTxt.info.txt" placeholder="Add a note..." class="add-bar">
        </form>
        

     <ul class="add-format-btn">
         <button>Checklist</button>
         <button @click="newTxtKeep">Text</button>         
         <button @click="newImgKeep">Photo</button>
         <button>Video</button>
         <button>Audio</button>
         <button>List</button>
     </ul>   
  
    </div>
    `,
    data() {
        return {
            // keepType set the type of the current keep
            keepType: this.getkeepType,
            keepTxt: {
                id: this.editableKeepId,
                type: "NoteTxt",
                isPinned: false,
                info: {
                    txt: '',
                }
            },
            keepImg: {
                id: this.editableKeepId,
                type: "NoteImg",
                isPinned: false,
                info: {
                    url: '',
                    title: ''
                },
                style: {
                    backgroundColor: ''
                }
            },
            keepTodo: {
                id: utilService.makeId(),
                type: "NoteTodos",
                isPinned: false,
                info: {
                    label: '',
                    todos: [
                        { txt: '', doneAt: null }
                    ]
                },
                style: {
                    backgroundColor: 'none'
                }
            }

        }
    },
    computed: {
        getkeepType() {
            return (this.keep.type)
        },

    },
    components: {

    },
    methods: {
        saveTxtKeep() {
            if (this.keep === null) { this.$emit('addKeep', this.keepTxt) } else {
                var modKeep = this.keep;
                modKeep.info.txt = this.keepTxt.info.txt;
                this.$emit('editKeep', modKeep)
            }
            // this.$emit('addKeep', this.keepTxt);
            this.keepTxt = {
                type: "NoteTxt",
                isPinned: false,
                id: null,
                info: {
                    txt: '',
                },
                style: {
                    backgroundColor: 'none'
                }
            }
        },

        saveImgKeep() {
            if (this.keep === null) { this.$emit('addKeep', this.keepImg) } else {
                var modKeep = this.keep;
                modKeep.info.url = this.keepImg.info.url;
                modKeep.info.title = this.keepImg.info.title;
                this.$emit('editKeep', modKeep);
            };
            this.keepImg = {
                type: "NoteImg",
                isPinned: false,
                id: null,
                info: {
                    url: '',
                    title: ''
                },
                style: {
                    backgroundColor: 'none'
                }
            }

        },
        newTxtKeep() {
            this.keepType = 'NoteTxt';
        },

        newImgKeep() {
            this.keepType = 'NoteImg'
        }

    },

}
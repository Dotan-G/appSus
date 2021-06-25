import { utilService } from "../services/util-service.js"
export default {
    props: ['editableKeepId', 'keep', 'delTask'],
    template: `
    <div class="keep-add">
        <!-- <p>{{keepType}}</p> -->
        <form v-if="!keep ||keepType==='NoteTxt'">
            <input @change="saveTxtKeep" ref="keepTxt" type="text" v-model="keepTxt.info.txt" placeholder="Add a note..." class="add-bar">
        </form>
        <form  v-if="keep && keep.type==='NoteImg'">
            <input ref="keepImg" type="text" v-model="keepImg.info.title" placeholder="Add a Title for your Image..." class="add-bar">
            <input ref="keepImg" type="text" v-model="keepImg.info.url" @change="saveImgKeep" placeholder="Add an Image url..." class="add-bar">
        </form>
        <form v-if="keep && keep.type==='NoteTodos'">
            <input ref="keepTodo" type="text" v-model="keepTodo.label" placeholder="Add a Tasks label..." class="add-bar">
            <input ref="keepTodo" type="text" v-model="keepTodo.info.todos[0].txt" placeholder="Add a note..." class="add-bar" @change="saveTodoKeep">
        </form>
        

     <ul class="add-format-btn">
         <button @click='newTodoKeep'>Todo</button>
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
            keepType: this.getkeepType,
            todoTxt: '',
            keepTxt: {
                id: this.editableKeepId,
                type: "NoteTxt",
                isPinned: false,
                info: {
                    label: '',
                    todos: [
                        { txt: '', doneAt: null }
                    ]
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
        addTodoTxt() {

        },
        saveTodoKeep() {

            if (this.keep === null) { this.$emit('addKeep', this.keepTodo) } else {
                var modKeep = this.keep;
                modKeep.info.label = this.keepTodo.info.label;
                modKeep.info.todos = [...this.keepTodo.info.todos];
                this.$emit('editKeep', modKeep);
            }
            this.keepTodo = {
                id: null,
                type: 'NoteTodos',
                isPinned: false,
                info: {
                    label: '',
                    todos: [{ txt: '', doneAt: null }]
                },
                style: {
                    backgroundColor: 'none'
                }

            }

        },
        saveTxtKeep() {
            if (this.keep === null) { this.$emit('addKeep', this.keepTxt) } else {
                var modKeep = this.keep;
                modKeep.info.txt = this.keepTxt.info.txt;
                this.$emit('editKeep', modKeep)
            }
            this.keepTxt = {
                id: null,
                type: "NoteTxt",
                isPinned: false,
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
        },
        newTodoKeep() {
            this.keepType = 'NoteTodos'
        }

    },

}
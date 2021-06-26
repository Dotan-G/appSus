import { keepService } from "../services/keep-service.js"
export default {
    props: ['todo', 'keepToEdit', 'todoToEdit', 'selTodoIdx'],
    template: `
    <div class="keep-todo">
        <p v-if="!toShow" @click="toShow = !toShow">{{todo.txt}}</p>
        <p v-if="!toShow" @click="toShow = !toShow">{{getDateFormat(todo.doneAt)}}</p>
        <div v-if="toShow" class="todo-modal" @change="toShow = !toShow">
            <textarea contenteditable="true" placeholder="Edit your todo here.." v-model="txt" @change="saveToKeep()"></textarea>
         </div>
    </div>
    `,
    data() {
        return {
            TempKeepToEdit: null,
            toShow: false,
            txt: '',
            keepTodo: {
                id: null,
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
    computed: {},
    methods: {
        getDateFormat(todoDoneDate) {
            return todoDoneDate === null ? '' : new Date(todoDoneDate).toLocaleTimeString();
        },
        saveToKeep() {
            console.log(this.todo);
            console.log(this.keepToEdit);
            this.keepTodo = this.TempKeepToEdit;
            // this.keepTodo.info.todos.splice(this.selTodoIdx, 1, { txt: this.txt, doneAt: null });
            this.keepTodo.info.todos.splice(0, 1, { txt: this.txt, doneAt: null });
            keepService.save(this.keepTodo)
                .then(() => {

                    console.log('success modifing  txt keep');

                })
                .catch(err => {
                    const msg = {
                        txt: err,
                        type: 'fail',
                    };
                    console.log(msg.type, msg.txt);

                })


        },

    },







    components: {}
}
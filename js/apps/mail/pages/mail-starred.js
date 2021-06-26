import { mailsService } from "../services/mail-service.js"
import mailFilter from "../cmps/mail-filter.js"
import mailsPreview from "../cmps/mails-preview.js"

export default {
    components: {
        mailsPreview,
        mailFilter
    },
    template: `
        <section class="mails-starred">
            <div class="mail-filter">
                <mail-filter />  
            </div>
            <div >
                <ul>
                    <li v-if="mails" v-for="mail in mails">
                        <mails-preview :mail="mail" @starred="loadMails" />    
                    </li>
                </ul>
            </div>
        </section>
    `,
    data() {
        return {
            mails: null,
        }
    },
    methods: {
        loadMails() {
            mailsService.query()
                .then(mails => {
                    this.mails = mails.filter((mail => mail.isStarred))
                })
        },
    },
    computed: {},
    created() {
        this.loadMails()
    },
    destroyed() { }
}

// @filter="setFilter" @sort="setSort" @show="setShow"
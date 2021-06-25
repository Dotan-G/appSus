import { mailsService } from "../services/mail-service.js"
import mailsList from "../cmps/mails-list.js"
import mailFunc from "../cmps/mail-functionality.js"
import mailSend from "../cmps/mail-send.js"
import mailDetails from "../cmps/mail-details.js"

export default {
    components: {
        mailsList,
        mailFunc,
        mailSend,
        mailDetails,
    },
    template: `
        <div v-if="mails" class="email-app">
            <div class="mails-container">
                <mail-func @compose="compose" @inbox="inbox" />
                <mails-list v-if="!isCompose && !isDetails" 
                    :mails="mailsToShow" @filterBy="setFilter" 
                    @sortBy="setSort" @showBy="setShow" @openMail="details" @remove="remove" />
                <mail-send  v-if="isCompose" @sentMail="sentMail" @mailsToShow/>
                <mail-details v-if="isDetails" :mail="mail" @detailsClose="details" />
            </div>
            <!-- <router-link v-if="showBy" v-if="mail" :to="'mail/'+ mail.id" />here</router-link>
            <router-view></router-view> -->
        </div>
    `,
    data() {
        return {
            mails: null,
            filterBy: null,
            isCompose: false,
            isDetails: false,
            mail: null,
            sortBy: 'NEW',
            showBy: 'ALL',
        }
    },
    methods: {
        loadMails() {
            mailsService.query()
                .then(mails => this.mails = mails)
        },
        compose() {
            this.isDetails = false
            this.isCompose = !this.isCompose
        },
        inbox() {
            this.isDetails = false
            this.isCompose = false
        },
        details(mailId) {
            if (!mailId) return this.isDetails = !this.isDetails
            this.isDetails = !this.isDetails
            mailsService.getMailById(mailId)
                .then((mail) => this.mail = mail)
        },
        sentMail(mail) {
            this.compose()
            mailsService.addMail(mail)
                .then(() => {
                    console.log('why?')
                    this.loadMails()
                })
        },
        setFilter(filterBy) {
            this.filterBy = filterBy
        },
        setSort(sortBy) {
            this.sortBy = sortBy
        },
        setShow(showBy) {
            this.showBy = showBy
        },
        remove(mailId) {
            mailsService.removeMail(mailId)
                .then(() => {
                    this.loadMails()
                })
        },
    },
    computed: {
        mailsToShow() {
            if (!this.filterBy) {
                if (this.sortBy === 'NEW') return mailsService.sortMails(this.mails)
                if (this.sortBy === 'OLD') return mailsService.sortMails(this.mails).reverse()
            }
            if (this.filterBy.filterBy === 'SUBJECT') {
                const searchStr = this.filterBy.searchText.toLowerCase()
                const mailsToShow = this.mails.filter((mail) => {
                    return (
                        mail.subject.toLowerCase().includes(searchStr)
                    );
                })
                if (this.sortBy === 'NEW') return mailsService.sortMails(mailsToShow)
                if (this.sortBy === 'OLD') return mailsService.sortMails(mailsToShow).reverse()
            }
            if (this.filterBy.filterBy === 'NAME') {
                const searchStr = this.filterBy.searchText.toLowerCase()
                const mailsToShow = this.mails.filter((mail) => {
                    return (
                        mail.name.toLowerCase().includes(searchStr)
                    );
                })
                if (this.sortBy === 'NEW') return mailsService.sortMails(mailsToShow)
                if (this.sortBy === 'OLD') return mailsService.sortMails(mailsToShow).reverse()
            }
        },
    },
    created() {
        this.loadMails()
    },
    destroyed() { }
}
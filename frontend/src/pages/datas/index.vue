<template>
	<q-layout view="hHh lpR fFf">
		<q-drawer side="left" :value="true" :width="320">
			<q-splitter horizontal v-model="splitterRatio" :limits="[50, 80]" style="height: 100%">
				<template v-slot:before>
					<q-list class="home-drawer">
						<q-item style="padding:0px">
							<q-item-section avatar>
								<q-chip square size="md" outline color="info" :label="$t('datas')" />
							</q-item-section>
							<q-item-section />
							<div class="row">
								<div v-for="(user,idx) in generalUsers" :key="idx" class="col multi-colors-bar" :style="{background:user.color}" />
							</div>
						</q-item>
						<q-list>
							<q-item clickable v-ripple :to='`/datas/users`'>
								<q-item-section avatar>
								<q-icon name="fa fa-user"></q-icon>
								</q-item-section>
								<q-item-section>{{$t('users')}}</q-item-section>
							</q-item>
                            <q-item clickable v-ripple :to='`/datas/clients`'>
								<q-item-section avatar>
								<q-icon name="fa fa-user-tie"></q-icon>
								</q-item-section>
								<q-item-section>{{$t('clients')}}</q-item-section>
							</q-item>
                            <q-item clickable v-ripple :to='`/datas/reports`'>
								<q-item-section avatar>
								<q-icon name="fa fa-file-lines"></q-icon>
								</q-item-section>
								<q-item-section>{{$t('reports')}}</q-item-section>
							</q-item>
                            <q-item clickable v-ripple :to='`/datas/vulnerabilities`'>
								<q-item-section avatar>
								<q-icon name="fa fa-shield-alt"></q-icon>
								</q-item-section>
								<q-item-section>{{$t('vulnerabilities')}}</q-item-section>
							</q-item>
                            <q-item clickable v-ripple :to='`/datas/templates`'>
								<q-item-section avatar>
								<q-icon name="fa fa-file-word"></q-icon>
								</q-item-section>
								<q-item-section>{{$t('templates')}}</q-item-section>
							</q-item>
                            <q-item clickable v-ripple :to='`/datas/variables`'>
								<q-item-section avatar>
								<q-icon name="fa fa-table"></q-icon>
								</q-item-section>
								<q-item-section>{{$t('variables')}}</q-item-section>
							</q-item>
                            <q-item clickable v-ripple :to='`/datas/companies`'>
								<q-item-section avatar>
								<q-icon name="fa fa-building"></q-icon>
								</q-item-section>
								<q-item-section>{{$t('companies')}}</q-item-section>
							</q-item>
						</q-list>
					</q-list>
				</template>
				<template v-slot:after>
					<q-list>
						<q-separator />
						<q-item class="q-py-lg">
							<q-item-section avatar>
								<q-icon name="fa fa-user"></q-icon>
							</q-item-section>
							<q-item-section>{{$t('usersConnected')}}</q-item-section>	
						</q-item>
					</q-list>
				</template>
			</q-splitter>
		</q-drawer>
		<q-page-container>
			<router-view :key="$route.fullPath" :frontEndProjectState="frontEndProjectState" :parentState="project.state" :parentApprovals="project.approvals"></router-view>
		</q-page-container>
	</q-layout>
</template>

<script>
import { Dialog, Notify, QSpinnerGears, LocalStorage } from 'quasar';
import draggable from 'vuedraggable'

import ProjectService from '@/services/project';
import UserService from '@/services/user';
import DataService from '@/services/data';
import Utils from '@/services/utils';

import { $t } from '@/boot/i18n';

export default {
	data () {
		return {
			projectId: 1,
			findings: [],
			users: [],
			project: {findings: {}},
			sections: [],
			splitterRatio: 80,
			loading: true,
			vulnCategories: [],
			customFields: [],
			projectTypes: [],
			findingList: [],
			frontEndProjectState: Utils.PROJECT_VIEW_STATE.EDIT_READONLY,
			PROJECT_VIEW_STATE: Utils.PROJECT_VIEW_STATE,
			projectRetest: "",
			projectTypesRetest: [],
			retestSplitView: false,
			retestSplitRatio: 100,
			retestSplitLimits: [100, 100],
			children: [],
			commentMode: false,
			commentSplitRatio: 100,
			commentSplitLimits: [100, 100],
			focusedComment: null,
			editComment: null,
			editReply: null,
            commentsFilter: "all" // [all, active, resolved]
		}
	},

	components: {
		draggable
	},

	created: function() {
		
	},

	destroyed: function() {
		
	},

	watch: {
		'project.findings': {
			handler(newVal, oldVal) {
				var result = _.chain(this.project.findings)
				.groupBy("category")
				.map((value, key) => {
					if (key === 'undefined') key = 'No Category'
					var sortOption = this.project.sortFindings.find(option => option.category === key) // Get sort option saved in project
					
					if (!sortOption) { // no option for category in project
						sortOption = this.vulnCategories.find(e => e.name === key) // Get sort option from default in vulnerability category
						if (sortOption) // found sort option from vuln categories
							sortOption.category = sortOption.name
						else // no default option or category don't exist
							sortOption = {category: key, sortValue: 'cvssScore', sortOrder: 'desc', sortAuto: true} // set a default sort option
						
						this.project.sortFindings.push({
							category: sortOption.category,
							sortValue: sortOption.sortValue,
							sortOrder: sortOption.sortOrder,
							sortAuto: sortOption.sortAuto
						})
					}
					
					return {category: key, findings: value, sortOption: sortOption}
				})
				.value()

				this.findingList = result
			},
			deep: true,
			immediate: true
		}
	},

	computed: {
		generalUsers: function() {return this.users.filter(user => user.menu === 'general')},
		networkUsers: function() {return this.users.filter(user => user.menu === 'network')},
		findingUsers: function() {return this.users.filter(user => user.menu === 'editFinding')},
		sectionUsers: function() {return this.users.filter(user => user.menu === 'editSection')},

		currentProjectType: function() {
			return this.projectTypes.find(e => e.name === this.project.projectType)
		},

		replyingComment: function() {
            return this.project.comments.some(comment => !!comment.replyTemp)
        },

		systemLanguage: function() {
			return LocalStorage.getItem('system_language') || 'en-US'
		}
	},

	methods: {
		
	}
}
</script>
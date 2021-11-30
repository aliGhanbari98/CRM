// reducers

import { combineReducers } from 'redux'
import customerFields from './customerFields'
import selectedEmailTemplate from './selectedEmailTemplate'
import selectedPage from './selectedPage'
import alert from './alert'
import filter from './filter'
import user from './user'
import profileCard from './profileCard'
import customers from './customers'
import templates from './channels/templates'
import channelsInsight from './channels/insight'
import channelsDashboard from './channels/dashboard'
import login from './login'
import campaigns from './campaigns/campaigns'
import campaignsDashboard from './campaigns/dashboard'
import campaignsInsight from './campaigns/insight'

export default {
  view: combineReducers({
    selectedEmailTemplate,
    selectedPage,
    alert,
    profileCard,
    loginData: login,
  }),
  main: combineReducers({
    customers,
    customerFields,
    filterData: filter,
    user,
    templates,
    channelsInsight,
    channelsDashboard,
    campaigns,
    campaignsDashboard,
    campaignsInsight,
  }),
}

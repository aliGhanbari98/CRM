import Campaigns from 'pages/campaigns'
import Channels from 'pages/channels'
import Customers from 'pages/customers'
import EditTemplate from 'pages/editTemplate/editTemplate'
import SMSTemplate from 'pages/smsTemplate/smsTemplate'
import Dashboard from 'pages/dashboard/dashboard'
import ThankYou from 'pages/thankYou/thankYou'
import Support from 'pages/support/support'
import Conversation from 'pages/conversation/conversation'
import Account from 'pages/account/account'

import { ReactComponent as DashIcon } from '../../assets/icons/dash.svg'
import { ReactComponent as CustomersIcon } from '../../assets/icons/customers.svg'
import { ReactComponent as CampaignsIcon } from '../../assets/icons/speaker.svg'
import { ReactComponent as ChannelsIcon } from '../../assets/icons/wifi.svg'
import { ReactComponent as EmailsIcon } from '../../assets/icons/mail.svg'
import { ReactComponent as SMSIcon } from '../../assets/icons/sms.svg'

const navigationRoutes = [
  {
    label: 'Dashboard',
    path: '/dashboard/*',
    Icon: DashIcon,
    component: Dashboard,
    isInSideBar: true,
  },
  {
    label: 'Customers',
    path: '/customers/*',
    Icon: CustomersIcon,
    component: Customers,
    tabs: [
      {
        label: 'Customers Segment',
        path: '/customers/segment',
      },
      {
        label: 'List of Customers',
        path: '/customers/list',
      },
      {
        label: 'Import Customers Data',
        path: '/customers/import',
      },
      {
        label: 'Add a Customer',
        path: '/customers/add',
      },
    ],
    isInSideBar: true,
  },
  {
    label: 'Campaigns',
    path: '/campaigns/*',
    Icon: CampaignsIcon,
    component: Campaigns,
    isInSideBar: true,
    tabs: [
      {
        label: 'Campaigns Dashboard',
        path: '/campaigns/dashboard',
      },
      {
        label: 'Total Campaigns',
        path: '/campaigns/total',
      },
      {
        label: 'Create Campaign',
        path: '/campaigns/create',
      },
      {
        label: 'Compare Campaings',
        path: '/campaigns/compare',
      },
    ],
  },
  {
    label: 'Channels',
    path: '/channels/*',
    Icon: ChannelsIcon,
    component: Channels,
    isInSideBar: true,
    children: [
      {
        label: 'Email',
        path: '/channels/email',
        Icon: EmailsIcon,
        tabs: [
          {
            label: 'Channel insight',
            path: '/channels/email/insight',
            index: 0,
          },
          {
            label: 'Templates',
            path: '/channels/email/templates',
            index: 1,
          },
          {
            label: 'Campaings on this channel',
            path: '/channels/email/campaigns',
            index: 2,
          },
        ],
      },
      {
        label: 'SMS',
        path: '/channels/SMS',
        Icon: SMSIcon,
        tabs: [
          {
            label: 'Channel insight',
            path: '/channels/SMS/insight',
            index: 0,
          },
          {
            label: 'Templates',
            path: '/channels/SMS/templates',
            index: 1,
          },
          {
            label: 'Campaings on this channel',
            path: '/channels/SMS/campaigns',
            index: 2,
          },
        ],
      },
    ],
  },
  {
    label: 'Support',
    path: '/support/*',
    component: Support,
    tabs: [
      {
        label: 'Support Dashboard',
        path: '/support/dashboard',
      },
      {
        label: 'All Tickets',
        path: '/support/all-tickets',
      },
    ],
  },
  {
    label: 'Edit Template',
    path: '/edit-template',
    component: EditTemplate,
    header: 'type1',
    sideBar: 'type1',
  },
  {
    label: 'Conversation',
    path: '/ticket-conversation/:number',
    component: Conversation,
    header: 'type1',
    sideBar: 'type1',
  },
  {
    label: 'Edit SMS',
    path: '/edit-sms',
    component: SMSTemplate,
    header: 'type1',
    sideBar: 'type1',
  },
  {
    label: 'Thank You',
    path: '/thank-you',
    component: ThankYou,
    hasNoSideBar: true,
    hasNoHeader: true,
  },
  {
    label: 'Account',
    path: '/account',
    component: Account,
    header: 'type1',
    sideBar: 'type1',
  },
]

export default navigationRoutes

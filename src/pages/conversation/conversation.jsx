// modules
import React, { useState } from 'react'
import { connect } from 'react-redux'
// components
import { BreadCrumbs, Card } from 'base/ui'
import TicketInfo from './components/ticketInfo/ticketInfo'
import Message from './components/message/message'
import Splitter from './components/splitter/splitter'
import TextBox from './components/textBox/textBox'
import Rating from './components/rateBox/rateBox'

// style
import styles from './conversation.module.scss'

const infoItems = [
  { title: 'Ticket Number', value: '3553466' },
  { title: 'Support Department', value: 'Financial' },
  { title: 'Name', value: 'Payment Problem' },
  { title: 'date', value: '02.02.2020' },
]

const defaultMessages = [
  {
    isUser: true,
    detail: {
      firstName: 'Ali',
      lastName: 'Ghanbari',
      day: 'Monday',
      time: '1:45 pm',
      profilePhoto: '/img/userAvatar.svg',
    },
    text: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna  Lorem 
    ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
    ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.
    tempor invidunt ut labore et dolore magna`,
  },
  {
    detail: {
      firstName: 'Taha',
      lastName: 'Ouraji',
      day: 'Monday',
      time: '1:45 pm',
      profilePhoto: '/img/supportAvatar.svg',
    },
    text: 'this is a test',
    attachment: '/img/attachedFile.png',
  },
  {
    isUser: true,
    detail: {
      firstName: 'Ali',
      lastName: 'Ghanbari',
      day: 'Monday',
      time: '1:45 pm',
      profilePhoto: '/img/userAvatar.svg',
    },
    text: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna  Lorem 
    ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
    ipsum dolor sit amet, consetetur `,
    attachment: '/img/attachedFile.png',
  },
]

const Conversation = ({ number, status = 'Pending' }) => {
  const bcItems = ['Support', 'All Tickets']
  const [rateIsOpen, setRateIsOpen] = useState(true)
  const [messages, setMessages] = useState(defaultMessages)

  const handleMessages = (newMessage) => {
    setMessages((prevState) => [...prevState, newMessage])
  }

  return (
    <main className={styles.conversation}>
      <BreadCrumbs
        items={bcItems}
        defaultSelectedBC={`Ticket Number: ${number}`}
      />
      <Card className={styles.card}>
        <TicketInfo items={infoItems} />
        <div className={styles.main}>
          <div className={styles.messages}>
            {messages.map((item, index) => (
              <Message key={index} {...item} />
            ))}
          </div>
          <Splitter date="27Th February 2018" status={status} />
          <div className={styles.textBox}>
            <TextBox onSend={handleMessages} />
          </div>
        </div>

        <Rating
          avatar="/img/supportAvatar.svg"
          name="Soltan salman akram naser"
          ticketId="1234"
          isOpen={rateIsOpen}
          setOpen={setRateIsOpen}
        />
      </Card>
    </main>
  )
}

const mapStateToProps = () => ({})
const mapDispatchToProps = () => ({})
export default connect(mapStateToProps, mapDispatchToProps)(Conversation)

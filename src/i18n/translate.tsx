import React from 'react'
import { FormattedMessage } from 'react-intl'
import { default as DM } from '@/i18n/messages/defaultMessages'

const translate = (id: string, value = {}) => (
   <FormattedMessage id={id} defaultMessage={DM[id].defaultMessage} values={{ ...value }} />
)

export default translate

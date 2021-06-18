import React from 'react'
import { Button, Image } from 'semantic-ui-react'

export default function Dashboard() {
    return (
        <div>
             <Button
      color='red'
      content='Like'
      icon='heart'
      label={{ basic: true, color: 'red', pointing: 'left', content: '2,048' }}
    />
    <Button
      basic
      color='blue'
      content='Fork'
      icon='fork'
      label={{
        as: 'a',
        basic: true,
        color: 'blue',
        pointing: 'left',
        content: '2,048',
      }}
    />
        </div>
    )
}

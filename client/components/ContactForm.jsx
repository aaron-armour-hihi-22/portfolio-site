import React from 'react'
import { IconButton, Typography } from '@mui/material'
import { Send } from '@mui/icons-material'

function ContactForm() {
  return (
    <>
      <form>
        <div>
          <label htmlFor={'name'}>
            <Typography>Name:</Typography>
          </label>
          <input type={'text'} id={'name'} name={'sender'} />
        </div>
        <div>
          <label htmlFor={'email'}>
            <Typography>Email address:</Typography>
          </label>
          <input type={'email'} id={'email'} name={'email'} required />
        </div>
        <div>
          <label htmlFor={'message'}>
            <Typography>Message:</Typography>
          </label>
          <textarea
            id={'message'}
            name={'message'}
            cols={40}
            rows={8}
            required
          />
        </div>
        <IconButton type="submit">
          <Send sx={{ color: 'whitesmoke' }} />
        </IconButton>
      </form>
    </>
  )
}

export default ContactForm

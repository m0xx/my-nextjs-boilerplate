import React from 'react'
import { csrfToken } from 'next-auth/client'
import {FormControl} from "../../components/forms";
import Button from "../../components/button";

export default function SignIn({ csrfToken }) {
  return (
    <div className="flex justify-center mt-8">
      <div style={{minWidth: 400, maxWidth: 500}}>
        <form method='post' action='/api/auth/signin/email'>
          <input name='csrfToken' type='hidden' defaultValue={csrfToken}/>
          <FormControl
            id="email"
            name="email"
            label="Votre courriel"
          />
          <Button size="lg" type='submit' color="indigo" block>Se Sonnecter </Button>
        </form>
      </div>
    </div>
  )
}

SignIn.getInitialProps = async (context) => {
  return {
    csrfToken: await csrfToken(context)
  }
}

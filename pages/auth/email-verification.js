import React from 'react'
import Text from "../../components/text";

export default function SignIn({  }) {
  return (
    <div className="flex justify-center mt-12 text-center">
      <div style={{minWidth: 400, maxWidth: 500}}>
          <Text className="mb-3" display="header-4">Vérifiez vos courriels</Text>
          <Text display="subtitle-1">Un lien pour se connecter à été envoyé.</Text>
      </div>
    </div>
  )
}

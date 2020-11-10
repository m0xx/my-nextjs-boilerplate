import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import sendVerificationRequest from "../../../lib/auth/send-verification-request";

const options = {
  callbacks: {
    /**
     * @param  {object} user     User object
     * @param  {object} account  Provider account
     * @param  {object} profile  Provider profile
     * @return {boolean}         Return `true` (or a modified JWT) to allow sign in
     *                           Return `false` to deny access
     */
    signIn: async (user, account, profile) => {
      const isAllowedToSignIn = true
      if (isAllowedToSignIn) {
        return Promise.resolve("/secure")
      } else {
        // Return false to display a default error message
        return Promise.resolve(false)
        // You can also Reject this callback with an Error or with a URL:
        // return Promise.reject(new Error('error message')) // Redirect to error page
        // return Promise.reject('/path/to/redirect')        // Redirect to a URL
      }
    }
  },
  pages: {
    verifyRequest: '/auth/email-verification',
    signIn: '/auth/login'
  },
  providers: [
    Providers.Email({
      sendVerificationRequest,
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD
        }
      },
      from: 'PoolDeGolf.com <no-reply@pooldegolf.com>'
    }),
  ],
  database: {
    type: 'sqlite',
    database: ':memory:',
    synchronize: true
  }
}

export default (req, res) => NextAuth(req, res, options)

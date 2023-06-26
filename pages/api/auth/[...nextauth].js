import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

export default NextAuth({
  providers: [
    Providers.Google({
      clientId: '498599588472-udm7s16pedts3t4nkaenfue1h7t1k0rv.apps.googleusercontent.com',
      clientSecret: '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',
    }),
    Providers.Facebook({
      clientId: '',
      clientSecret: '',
    }),
  ],
});

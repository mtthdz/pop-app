export type supabaseUser = {
  userEmail: string;
  userPassword: string;
  actionType: 'signin' | 'signup';
};
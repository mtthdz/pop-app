# pop

Creating an MSN-like chat app. Currently rebuilding a React Native app into Expo.

## Get started

1. Install dependencies

   ```bash
   npm install
   ```
2. This project requires a few dotenv variables:

   ```bash
   EXPO_PUBLIC_SUPABASE_URL
   EXPO_PUBLIC_SUPABASE_ANON_KEY
   ```

3. Start the app

   ```bash
    npx expo start
   ```

## Notes
A lot to do here. Before we start building MSN-like features such as statuses and adding/removing friends, we'll start with base MVP features that I'll migrate from another repo that contains both chat and user auth/profile features.

MVP Feature plan:
- [ ] Framework
   - [x] redux store
      - [x] user session reducer
      - [x] user meta reducer
      - [x] alert reducer
   - [x] alert/notifications
   - [ ] loading state
   - [ ] error handling
   - [ ] theme styling
- [ ] Global components
   - [ ] Themed Text
   - [ ] Themed View
   - [x] Avatar
   - [ ] Icon
   - [ ] Button
- [ ] ChatList feature (currently named main)
   - [x] Screen component (data)
   - [x] Header component (presentation)
   - [x] Card component (presentation)
   - [x] List component (presentation)
   - [ ] Supabase API, getChatRooms
- [ ] Chat feature
   - [x] Dynamic ID route (structure)
   - [x] Header component (presentation)
   - [x] ChatWindow component (data)
   - [x] ChatForm component (data)
   - [x] Card component (presentation)
   - [ ] Supabase API, getMessages via websocket
   - [ ] Supabase API, sendMessage
- [ ] Profile edit feature
   - [x] Modal screen component
   - [ ] Form component
   - [ ] Supabase API, updateUser
   - [x] Supabase API, logout
- [ ] Auth feature
   - [x] Main Screen component
   - [ ] SignIn form component
   - [ ] SignUp form component
   - [x] Supabase API, signIn
   - [x] Supabase API, signUp
     
## TODO list, in order of priority:
- [ ] Implement a message queue to handle multiple alerts (alertReducer)
- [ ] Implement a 'retry' loop on API calls (store > reducers, API)
- [ ] Refactor ScrollView. Currently not bottoming out & unresponsive to textInput multiline breaks (app/(app)/chat)
- [ ] Remove unused _layout from chat (app/(app)/chat)
- [ ] Rejig Provider wrapping in router (app/_layout > )
- [ ] Reconsider prop drilling (app/(app)/index; Main)
- [ ] TS: update module imports (types > reduxHooks)
- [ ] TS: update module imports (lib > supabaseConfig)
- [ ] TS: fix ChatHeader props interface (app/(app)/chat/id)
- [ ] TS: fix ScrollView ref overload error (app/(app)/chat/id)
- [ ] TS: Type actions (store > reducers)

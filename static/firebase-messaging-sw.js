
    importScripts(
      'https://www.gstatic.com/firebasejs/9.10.0/firebase-app-compat.js'
    )
    importScripts(
      'https://www.gstatic.com/firebasejs/9.10.0/firebase-messaging-compat.js'
    )
    firebase.initializeApp({"apiKey":"AIzaSyAVLCKeCrFQzGWxstZIIY3aVprd1E82Y6Y","authDomain":"care-connect-e6828.firebaseapp.com","projectId":"care-connect-e6828","storageBucket":"care-connect-e6828.appspot.com","messagingSenderId":"252064637090","appId":"1:252064637090:web:c9d2fad08d03b6ec2b77fb","measurementId":"G-YLKD04C876"})

    // Retrieve an instance of Firebase Messaging so that it can handle background
    // messages.
    const messaging = firebase.messaging()

    // Setup event listeners for actions provided in the config:
    self.addEventListener('notificationclick', function(e) {
      const actions = [{"action":"randomName","url":"randomUrl"}]
      const action = actions.find(x => x.action === e.action)
      const notification = e.notification

      if (!action) return

      if (action.url) {
        clients.openWindow(action.url)
        notification.close()
      }
    })

    
if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/send-whatsapp/sw.js', { scope: '/send-whatsapp/' })})}
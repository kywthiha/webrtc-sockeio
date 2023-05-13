module.exports = {
    apps: [
        {
            name: 'Video Demo',
            script: 'server_socketio.js',
            instances: 1,
            autorestart: true,
            watch: false,
        },
    ],
};
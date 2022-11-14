const dm = (socket, message) => {
    message.from = socket.user.userid;
    const messageString = [
        message.to,
        message.from,
        message.content
    ].join(".");

    socket.to(message.to).emit("dm", message);
    console.log(message)
};

module.exports = dm;
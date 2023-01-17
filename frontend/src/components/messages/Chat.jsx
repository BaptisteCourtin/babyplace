import React, { useEffect, useState } from "react";
import Scrolltobottom from "react-scroll-to-bottom";
import axios from "axios";
import moment from "moment";
import { toast } from "react-hot-toast";

function Chat({ socket, username, room, title, joinRoom }) {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  const [messageListData, setMessageListData] = useState([]);

  const saveMessage = (messageData) => {
    const { room, author, message, date } = messageData;
    axios
      .post("http://localhost:5000/messages/sauvegarde", {
        room,
        author,
        message,
        date,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        room,
        author: username,
        message: currentMessage,
        time: `${new Date(Date.now()).getHours()}:${new Date(
          Date.now()
        ).getMinutes()}`,
        date: `${new Date(Date.now()).getFullYear()} -${new Date(Date.now()).getMonth() + 1
          } -${new Date(Date.now()).getUTCDate()} `,
      };
      saveMessage(messageData);
      await socket.emit("send_message", messageData);
      setMessageList((list) => [...list, messageData]);
      setCurrentMessage("");
    }
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageList((list) => [...list, data]);
    });
  }, [socket]);

  const getMessagesFromRoom = async () => {
    try {
      const result = await axios.get(`http://localhost:5000/messages/recup/${room}`, {
        headers: {
          room,
        },
      });
      console.log(result.data);
      setMessageListData(result.data);
    } catch (err) {
      toast.error(err.message);
    };
  };

  useEffect(() => {
    joinRoom();
    getMessagesFromRoom();
    setMessageList([]);
  }, [title]);

  return (
    <div className="chat-window">
      <div className="chat-header">
        <p>Conversation avec {title}</p>
      </div>
      <div className="chat-body">
        <Scrolltobottom className="message-container">
          {messageListData.map((messageContent) => {
            return (
              <div
                className="message"
                id={username === messageContent.author ? "you" : "other"}
              >
                <div>
                  <div className="message-meta">
                    <p id="author">{messageContent.author}</p>
                    <p id="time">
                      {moment.utc(messageContent.time).format("DD/MM/YY")}
                    </p>
                  </div>
                  <div className="message-content">
                    <p>{messageContent.message}</p>
                  </div>
                </div>
              </div>
            );
          })}
          {messageList.map((messageContent) => {
            return (
              <div
                className="message"
                id={username === messageContent.author ? "you" : "other"}
              >
                <div>
                  <div className="message-meta">
                    <p id="author">{messageContent.author}</p>
                    <p id="time">{messageContent.time}</p>
                  </div>
                  <div className="message-content">
                    <p>{messageContent.message}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </Scrolltobottom>
      </div>
      <div className="chat-footer">
        <input
          type="text"
          placeholder="Ecrire ici..."
          onChange={(event) => {
            setCurrentMessage(event.target.value);
          }}
          onKeyPress={(event) => {
            event.key === "Enter" && sendMessage();
          }}
          value={currentMessage}
        />
        <button onClick={sendMessage}>&#9658;</button>
      </div>
    </div>
  );
}

export default Chat;

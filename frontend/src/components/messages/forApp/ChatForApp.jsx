import React, { useEffect, useState } from "react";
import Scrolltobottom from "react-scroll-to-bottom";
import axios from "axios";
import moment from "moment";
import { AiFillLeftCircle } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { toast } from "react-hot-toast";
import PropTypes from "prop-types";

function ChatForApp({ socket, username, room, title, joinRoom }) {
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
        console.warn(res.data);
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
        date: `${new Date(Date.now()).getFullYear()} -${
          new Date(Date.now()).getMonth() + 1
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
      const result = await axios.get(
        `http://localhost:5000/messages/recup/${room}`,
        {
          headers: {
            room,
          },
        }
      );
      setMessageListData(result.data);
    } catch (err) {
      toast.error(err.message);
    }
  };

  useEffect(() => {
    joinRoom();
    getMessagesFromRoom();
    setMessageList([]);
  }, [title]);

  return (
    <div className="chat-windowForApp">
      <div className="chat-headerForApp">
        <p>
          <NavLink to="/appli/message">
            <AiFillLeftCircle id="returnIcon" />
          </NavLink>{" "}
          Conversation avec {title}
        </p>
      </div>
      <div className="chat-bodyForApp">
        <Scrolltobottom className="message-containerForApp">
          {messageListData.map((messageContent) => {
            return (
              <div
                className="messageForApp"
                id={username === messageContent.author ? "you" : "other"}
              >
                <div>
                  <div className="message-metaForApp">
                    <p id="author">{messageContent.author}</p>
                    <p id="time">
                      {moment.utc(messageContent.time).format("DD/MM/YY")}
                    </p>
                  </div>
                  <div className="message-contentForApp">
                    <p>{messageContent.message}</p>
                  </div>
                </div>
              </div>
            );
          })}
          {messageList.map((messageContent) => {
            return (
              <div
                className="messageForApp"
                id={username === messageContent.author ? "you" : "other"}
              >
                <div>
                  <div className="message-metaForApp">
                    <p id="author">{messageContent.author}</p>
                    <p id="time">{messageContent.time}</p>
                  </div>
                  <div className="message-contentForApp">
                    <p>{messageContent.message}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </Scrolltobottom>
      </div>
      <div className="chat-footerForApp">
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
        <button type="submit" onClick={sendMessage}>
          &#9658;
        </button>
      </div>
    </div>
  );
}

ChatForApp.propTypes = {
  socket: PropTypes.any,
  username: PropTypes.string,
  room: PropTypes.number,
  title: PropTypes.string,
  joinRoom: PropTypes.func,
};

export default ChatForApp;

<<<<<<< Updated upstream
import React, { useEffect } from "react";
import { Box, Button, Flex, Input, Stack } from "@chakra-ui/react";
import { ChatList } from "../components/ChatList";
import { useState } from "react";
import axios from "axios";
import { ChatState } from "../Context/ChatProvider";
import { useDispatch, useSelector } from "react-redux";
import { SingleChat } from "../components/SingleChat";
import { setIsRoomCreated } from "../redux/AppReducer/action";
const Home = () => {
  const [qstn, setQstn] = useState("");
  const dispatch = useDispatch();
  const [chatList, setChatList] = useState([]);
  const [flag, setFlag] = useState(false);
  const [loading, setLoading] = useState(false);

  const User = useSelector((state) => state.appReducer.user);
  const singleChat = useSelector((state) => state.appReducer.singleChat);
  const isRoomCreated = useSelector((state) => state.appReducer.isRoomCreated);
  // console.log("redux", User);
  const handleAsk = () => {
    // console.log(user);
    setLoading(true);
    const config = {
      headers: {
        Authorization: `Bearer ${User.token}`,
      },
    };
    axios
      .post(
        "/api/chat/groupall",
        {
          name: qstn,
        },
        config
      )
      .then((res) => {
        setFlag(!flag);
        setChatList([...chatList, res.data]);
      })
      .catch((error) => {
        console.log(error);
      });

    dispatch(setIsRoomCreated(!isRoomCreated));
  };
  const fetchChats = () => {
    axios
      .get("/api/chat", {
        headers: { Authorization: `Bearer ${User?.token}` },
      })
      .then((res) => {
        // console.log(res.data);
        setChatList(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    console.log("hello");
    fetchChats();
  }, [flag, isRoomCreated]);
=======
import React from 'react'

const Home = () => {
>>>>>>> Stashed changes
  return (
    <div>Home</div>
  )
}

export default Home
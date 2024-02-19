import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    //发给谁 谁就是接受者
    const { id: receiverId } = req.params;

    const senderId = req.user._id;

    //先找有没有对话
    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });
    //没有对话 创造一个对话
    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }
    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });

    //消息加入两个人的对话
    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }
    //socket.io here to make it realtime

    //并行 两个一起执行成功才可以 parallel
    await Promise.all([await newMessage.save(), await conversation.save()]);
    res.status(201).json(newMessage);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

//拿到聊天信息
export const getMessages = async (req, res) => {
  try {
    const { id: receiverID } = req.params;
    const senderId = req.user._id;
    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverID] },
    }).populate("messages"); //populate("messages") 时，Mongoose 会自动查询关联的 Message 模型，并将实际的消息内容填充到 conversation 中的 messages 数组中。
    if (!conversation) {
      res.json([]);
      return; // 确保在发送响应后退出函数
    }

    const messages = conversation.messages;
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

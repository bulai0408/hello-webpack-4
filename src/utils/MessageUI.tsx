import React from "react";
import { message, notification } from "antd";

export default class Message<P = {}, S = {}> extends React.Component<P, S> {
  $message = message;
  $notification = notification;
}

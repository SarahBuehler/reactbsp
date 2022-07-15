import React from "react";
import { useState, useEffect } from "react";

// bisher in der Class Components, Lifecycle-Methoden (componentDiMount, componenentDidUpdate und componentWillUnmount)
// für Änderungen, "Side Effects"
// der Funktion useEffect wird eine Funktion übergeben, die nach jedem Mount, bzw. Update der Komponente ausgeführt wird
// diese Funktion kann ooptional eine weitere Funktion zurückgeben, die von React zum Cleanup verwendet wird (in Class Components: componentWillUnmount)

function Effecthook(props) {
  const [isOnline, setIsOnline] = useState(null);

  function handleStatusChange(status) {
    setIsOnline(status.isOnline);
  }

  useEffect(() => {
    // componentDidMount, componentDidUpdate
    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);

    // componentWillUnmount
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  });

  if (isOnline === null) {
    return "Loading ...";
  }

  return (
    <>
      isOnline ? "Online" : "Offline";
      <h1>Effect Hook</h1>;
    </>
  );
}

export default Effecthook;

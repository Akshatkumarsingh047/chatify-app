import { useChatStore } from "../store/useChatStore";

import BorderAnimatedContainer from "../components/BorderAnimatedContainer";
import ProfileHeader from "../components/ProfileHeader";
import ActiveTabSwitch from "../components/ActiveTabSwitch";
import ChatsList from "../components/ChatsList";
import ContactList from "../components/ContactList";
import ChatContainer from "../components/ChatContainer";
import NoConversationPlaceholder from "../components/NoConversationPlaceholder";

function ChatPage() {
  const { activeTab, selectedUser } = useChatStore();

  return (
    <div className="relative w-full max-w-6xl h-[800px]">
      <BorderAnimatedContainer>
        {/* LEFT SIDE */}
        <div
          className={`
            flex flex-col bg-slate-800/50 backdrop-blur-sm
            ${selectedUser ? "hidden" : "flex flex-1"}   // mobile
            md:flex md:w-80                      // desktop always visible w-80
          `}
        >
          <ProfileHeader />
          <ActiveTabSwitch />
          <div className="flex-1 p-4 space-y-2 overflow-y-auto">
            {activeTab === "chats" ? <ChatsList /> : <ContactList />}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div
          className={`
            flex flex-col bg-slate-900/50 backdrop-blur-sm
            ${selectedUser ? "flex" : "hidden"}   // mobile
            md:flex md:flex-1                     // desktop always visible, flex-1
          `}
        >
          {selectedUser ? <ChatContainer /> : <NoConversationPlaceholder />}
        </div>
      </BorderAnimatedContainer>
    </div>
  );
}

export default ChatPage;

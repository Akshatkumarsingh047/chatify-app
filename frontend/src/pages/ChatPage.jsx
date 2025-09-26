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
        <div className={`${selectedUser?"hidden":"flex flex-1 flex-col"} md:flex md:w-80 md:flex-col bg-slate-800/50 backdrop-blur-sm`}>
          <ProfileHeader />
          <ActiveTabSwitch />

          <div className="flex-1 p-4 space-y-2 overflow-y-auto">
            {activeTab === "chats" ? <ChatsList /> : <ContactList />}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className={`${selectedUser?"":"hidden"} flex flex-col flex-1 bg-slate-900/50 backdrop-blur-sm`}>
          {selectedUser ? <ChatContainer /> : <NoConversationPlaceholder />}
        </div>
      </BorderAnimatedContainer>
    </div>
  );
}
export default ChatPage;

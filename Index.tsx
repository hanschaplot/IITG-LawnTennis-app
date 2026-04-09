import { useState } from 'react';
import BottomNav from '@/components/BottomNav';
import HomePage from '@/pages/HomePage';
import LeaderboardPage from '@/pages/LeaderboardPage';
import ChatPage from '@/pages/ChatPage';
import ChallengesPage from '@/pages/ChallengesPage';
import ProfilePage from '@/pages/ProfilePage';

const Index = () => {
  const [activeTab, setActiveTab] = useState('home');

  const renderPage = () => {
    switch (activeTab) {
      case 'home': return <HomePage />;
      case 'leaderboard': return <LeaderboardPage />;
      case 'chat': return <ChatPage />;
      case 'challenges': return <ChallengesPage />;
      case 'profile': return <ProfilePage />;
      default: return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {renderPage()}
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

export default Index;

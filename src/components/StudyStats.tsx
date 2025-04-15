import { useEffect, useState } from 'react';
import { collection, query, where, getDocs, orderBy, limit } from 'firebase/firestore';
import { auth, db } from '../utils/firebase';

interface StudySession {
  date: string;
  cardsReviewed: number;
  performance: {
    easy: number;
    medium: number;
    hard: number;
  };
  category: string;
}

interface StudyStatsProps {
  darkMode?: boolean;
  onClose: () => void;
}

// Add StatBox component
const StatBox = ({ label, value, darkMode }: { label: string, value: number, darkMode: boolean }) => (
  <div className={`p-3 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} text-center`}>
    <p className="text-xs text-gray-500 mb-1">{label}</p>
    <p className="text-lg font-bold">{value}</p>
  </div>
);

export const StudyStats = ({ darkMode = false, onClose }: StudyStatsProps) => {
  const [studySessions, setStudySessions] = useState<StudySession[]>([]);
  const [totalStats, setTotalStats] = useState({
    cardsReviewed: 0,
    easy: 0,
    medium: 0,
    hard: 0,
    categories: new Set<string>(),
    sessionsCompleted: 0,
  });

  // Load study data from Firestore
  useEffect(() => {
    const loadStudySessions = async () => {
      if (!auth.currentUser) {
        console.log('User not logged in, cannot load study sessions');
        return;
      }

      try {
        const sessionsRef = collection(db, 'studySessions');
        const q = query(
          sessionsRef,
          where('userId', '==', auth.currentUser.uid),
          orderBy('date', 'desc'),
          limit(100) // Limit to last 100 sessions
        );
        
        const querySnapshot = await getDocs(q);
        const sessions: StudySession[] = [];
        
        querySnapshot.forEach((doc) => {
          sessions.push(doc.data() as StudySession);
        });
        
        setStudySessions(sessions);
        
        // Calculate total statistics
        const stats = {
          cardsReviewed: 0,
          easy: 0,
          medium: 0,
          hard: 0,
          categories: new Set<string>(),
          sessionsCompleted: sessions.length,
        };
        
        sessions.forEach(session => {
          stats.cardsReviewed += session.cardsReviewed;
          stats.easy += session.performance.easy;
          stats.medium += session.performance.medium;
          stats.hard += session.performance.hard;
          stats.categories.add(session.category);
        });
        
        setTotalStats(stats);
      } catch (error) {
        console.error('Error loading study sessions:', error);
      }
    };

    loadStudySessions();
  }, []);

  // Function to get the date in a readable format
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).format(date);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4">
      <div className={`w-full max-w-[95vw] sm:max-w-3xl overflow-y-auto max-h-[90vh] ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} rounded-lg shadow-xl`}>
        <div className="p-4 sm:p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl sm:text-2xl font-bold">Study Statistics</h2>
            <button 
              onClick={onClose}
              className={`p-2 rounded-full ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200'}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          
          <div className="space-y-4">
            <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">General Statistics</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                <StatBox label="Cards" value={totalStats.cardsReviewed} darkMode={darkMode} />
                <StatBox label="Reviewed" value={totalStats.sessionsCompleted} darkMode={darkMode} />
                <StatBox label="Easy" value={totalStats.easy} darkMode={darkMode} />
                <StatBox label="Hard" value={totalStats.hard} darkMode={darkMode} />
              </div>
            </div>
            
            <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Performance Distribution</h3>
              <div className="h-10 mb-2 flex rounded-lg overflow-hidden">
                <div 
                  className="bg-green-500 h-full transition-all duration-300"
                  style={{ width: `${(totalStats.easy / totalStats.cardsReviewed) * 100}%` }}
                />
                <div 
                  className="bg-yellow-500 h-full transition-all duration-300"
                  style={{ width: `${(totalStats.medium / totalStats.cardsReviewed) * 100}%` }}
                />
                <div 
                  className="bg-red-500 h-full transition-all duration-300"
                  style={{ width: `${(totalStats.hard / totalStats.cardsReviewed) * 100}%` }}
                />
              </div>
              <div className="flex justify-between text-xs sm:text-sm">
                <span>Easy: {totalStats.easy > 0 ? Math.round((totalStats.easy / totalStats.cardsReviewed) * 100) : 0}%</span>
                <span>Medium: {totalStats.medium > 0 ? Math.round((totalStats.medium / totalStats.cardsReviewed) * 100) : 0}%</span>
                <span>Hard: {totalStats.hard > 0 ? Math.round((totalStats.hard / totalStats.cardsReviewed) * 100) : 0}%</span>
              </div>
            </div>
            
            <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Study Sessions</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full text-xs sm:text-sm">
                  <thead>
                    <tr>
                      <th className="p-2 text-left">Date</th>
                      <th className="p-2 text-right">Cards</th>
                      <th className="p-2 text-right">Easy</th>
                      <th className="p-2 text-right">Medium</th>
                      <th className="p-2 text-right">Hard</th>
                    </tr>
                  </thead>
                  <tbody>
                    {studySessions.map((session, index) => (
                      <tr key={index} className={index % 2 === 0 ? darkMode ? 'bg-gray-800' : 'bg-gray-50' : ''}>
                        <td className="p-2">{formatDate(session.date)}</td>
                        <td className="p-2 text-right">{session.cardsReviewed}</td>
                        <td className="p-2 text-right">{session.performance?.easy || 0}</td>
                        <td className="p-2 text-right">{session.performance?.medium || 0}</td>
                        <td className="p-2 text-right">{session.performance?.hard || 0}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          
          <div className="mt-4 flex justify-end">
            <button
              onClick={onClose}
              className={`px-4 py-2 rounded ${darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'} text-white`}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}; 
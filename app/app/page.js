'use client';
import React, { useState } from 'react';

export default function AnimeStudioApp() {
  const [activeTab, setActiveTab] = useState('generator');
  const [title, setTitle] = useState('');
  const [episodes, setEpisodes] = useState([]);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setTitle(title || 'Хроники Перерождённого Мечника');
      setEpisodes([
        { id: 1, time: '00:00 - 00:03', type: 'HOOK (Захват)', text: 'Я думал, что умер... но эта система дала мне второй шанс.', prompt: 'Anime style warrior awakening, glowing eyes, cinematic --ar 9:16' },
        { id: 2, time: '00:03 - 00:20', type: 'СЦЕНА 1', text: 'Ранг S? Не может быть. Прошлый владелец был слабейшим.', prompt: 'Close up anime hands summoning magical aura, MAPPA style --ar 9:16' },
        { id: 3, time: '00:20 - 00:55', type: 'СЦЕНА 2', text: 'Тебе не стоит переходить мне дорогу.', prompt: 'Fast anime action cut, sword slash with neon purple trajectory --ar 9:16' },
        { id: 4, time: '00:55 - 01:00', type: 'CLIFFHANGER', text: 'Подпишись, чтобы узнать продолжение во 2-й серии!', prompt: 'Mysterious shadowed villain silhouette in smoke --ar 9:16' },
      ]);
      setIsGenerating(false);
    }, 1000);
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#030712', color: '#f3f4f6', fontFamily: 'sans-serif', padding: '20px' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #1f2937', paddingBottom: '15px', marginBottom: '20px' }}>
          <h1 style={{ fontSize: '22px', fontWeight: 'bold', background: 'linear-gradient(to right, #818cf8, #c084fc)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Anime Studio AI Engine
          </h1>
          <div style={{ display: 'flex', gap: '10px' }}>
            <button onClick={() => setActiveTab('generator')} style={{ background: activeTab === 'generator' ? '#4f46e5' : '#1f2937', color: '#fff', border: 'none', padding: '8px 16px', borderRadius: '8px', cursor: 'pointer' }}>Сценарий</button>
            <button onClick={() => setActiveTab('monetization')} style={{ background: activeTab === 'monetization' ? '#4f46e5' : '#1f2937', color: '#fff', border: 'none', padding: '8px 16px', borderRadius: '8px', cursor: 'pointer' }}>Монетизация</button>
          </div>
        </header>

        {activeTab === 'generator' ? (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '20px' }}>
            <div style={{ background: '#111827', padding: '20px', borderRadius: '12px', border: '1px solid #1f2937' }}>
              <h3 style={{ fontSize: '16px', marginBottom: '15px', color: '#818cf8' }}>Параметры Серии</h3>
              <label style={{ fontSize: '12px', color: '#9ca3af', display: 'block', marginBottom: '5px' }}>Название идеи</label>
              <input 
                type="text" 
                placeholder="Напр: Король демонов" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)}
                style={{ width: '100%', background: '#030712', border: '1px solid #374151', color: '#fff', padding: '10px', borderRadius: '8px', marginBottom: '15px', boxSizing: 'border-box' }}
              />
              <button 
                onClick={handleGenerate} 
                disabled={isGenerating}
                style={{ width: '100%', background: 'linear-gradient(to right, #4f46e5, #9333ea)', color: '#fff', border: 'none', padding: '12px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}
              >
                {isGenerating ? 'Генерация...' : 'Сгенерировать Серию'}
              </button>
            </div>

            <div style={{ background: '#111827', padding: '20px', borderRadius: '12px', border: '1px solid #1f2937' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '15px' }}>{title || 'Ваш проект аниме'}</h3>
              {episodes.length === 0 ? (
                <p style={{ color: '#6b7280', textAlign: 'center', padding: '40px' }}>Нажмите «Сгенерировать Серию» слева</p>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {episodes.map(ep => (
                    <div key={ep.id} style={{ background: '#030712', padding: '12px', borderRadius: '8px', border: '1px solid #1f2937' }}>
                      <span style={{ fontSize: '11px', color: '#818cf8', background: '#1e1b4b', padding: '2px 6px', borderRadius: '4px' }}>{ep.time} | {ep.type}</span>
                      <p style={{ fontSize: '14px', margin: '8px 0 4px 0' }}><b>Озвучка:</b> "{ep.text}"</p>
                      <p style={{ fontSize: '12px', color: '#10b981', fontFamily: 'monospace' }}><b>Промпт:</b> {ep.prompt}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ) : (
          <div style={{ background: '#111827', padding: '20px', borderRadius: '12px', border: '1px solid #1f2937' }}>
            <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '15px' }}>Модуль Дохода (RPM / CPM)</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
              <div style={{ background: '#030712', padding: '15px', borderRadius: '8px', border: '1px solid #1f2937' }}>
                <span style={{ fontSize: '12px', color: '#9ca3af' }}>YouTube Shorts RPM</span>
                <p style={{ fontSize: '22px', fontWeight: 'bold', color: '#34d399', margin: '5px 0 0 0' }}>$0.15 - $0.35</p>
              </div>
              <div style={{ background: '#030712', padding: '15px', borderRadius: '8px', border: '1px solid #1f2937' }}>
                <span style={{ fontSize: '12px', color: '#9ca3af' }}>TikTok Creator Rewards</span>
                <p style={{ fontSize: '22px', fontWeight: 'bold', color: '#34d399', margin: '5px 0 0 0' }}>$0.50 - $1.20</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

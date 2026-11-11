'use client';

import React, { useState } from 'react';
import { Sparkles, Film, DollarSign, Layers, PlayCircle, Video, Music, Share2 } from 'lucide-react';

export default function AnimeStudioApp() {
  const [activeTab, setActiveTab] = useState('generator');
  const [projectData, setProjectData] = useState({
    title: '',
    genre: 'Исекай / Перерождение',
    format: 'Shorts / TikTok (60 сек)',
    episodes: [],
  });

  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setProjectData((prev) => ({
        ...prev,
        title: prev.title || 'Хроники Перерождённого Мечника',
        episodes: [
          {
            id: 1,
            time: '00:00 - 00:03',
            type: 'HOOK (Захват внимания)',
            dialogue: 'Я думал, что умер... но эта система дала мне второй шанс.',
            visualPrompt: 'Anime shot, dark fantasy warrior awakening with glowing blue eyes, cinematic lighting, ultra detail --ar 9:16',
            audioSFX: 'Thunder sound + Deep Bass drop',
            platformTips: 'Высокая динамика, задержка взгляда в 1-й секунде',
          },
          {
            id: 2,
            time: '00:03 - 00:20',
            type: 'СЦЕНА 1: Пробуждение Силы',
            dialogue: 'Ранг S? Не может быть. Прошлый владелец этого тела был слабейшим.',
            visualPrompt: 'Close up anime hands summoning magical aura, high quality, MAPPA style --ar 9:16',
            audioSFX: 'Magic spell charging effect',
            platformTips: 'Субтитры по центру ярким желтым цветом',
          },
          {
            id: 3,
            time: '00:20 - 00:55',
            type: 'СЦЕНА 2: Первая Битва',
            dialogue: 'Тебе не стоит переходить мне дорогу.',
            visualPrompt: 'Fast anime action cut, sword slash with neon purple trajectory, dynamic camera angle --ar 9:16',
            audioSFX: 'Sword clashing, fast synthwave OST',
            platformTips: 'Пик эмоционального удержания аудитории',
          },
          {
            id: 4,
            time: '00:55 - 01:00',
            type: 'CLIFFHANGER',
            dialogue: 'Подпишись, чтобы узнать, кого он призовет во 2-й серии!',
            visualPrompt: 'Mysterious shadowed villain silhouette appearing in smoke --ar 9:16',
            audioSFX: 'Dramatic cliffhanger synth impact',
            platformTips: 'Призыв к действию (CTA)',
          },
        ],
      }));
      setIsGenerating(false);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      {/* Шапка приложения */}
      <header className="border-b border-slate-800 bg-slate-900/60 backdrop-blur px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-indigo-600 rounded-lg">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Anime Studio AI Engine
            </h1>
            <p className="text-xs text-slate-400">Студия создания аниме-сериалов + Монетизация</p>
          </div>
        </div>

        <nav className="flex space-x-2 bg-slate-900 p-1 rounded-xl border border-slate-800">
          <button
            onClick={() => setActiveTab('generator')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition ${
              activeTab === 'generator' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Film className="w-4 h-4" />
            <span>Сценарий и ИИ</span>
          </button>
          <button
            onClick={() => setActiveTab('storyboard')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition ${
              activeTab === 'storyboard' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>Раскадровка</span>
          </button>
          <button
            onClick={() => setActiveTab('monetization')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition ${
              activeTab === 'monetization' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            <DollarSign className="w-4 h-4" />
            <span>Монетизация</span>
          </button>
        </nav>
      </header>

      {/* Основная рабочая область */}
      <main className="flex-1 p-6 max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Левая панель настроек */}
        <div className="md:col-span-4 bg-slate-900 p-5 rounded-2xl border border-slate-800 h-fit space-y-5">
          <h2 className="text-lg font-semibold flex items-center space-x-2 text-indigo-400">
            <Sparkles className="w-5 h-5" />
            <span>Параметры Серии</span>
          </h2>

          <div className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-slate-400 mb-1">Название / Идея</label>
              <input
                type="text"
                placeholder="Напр: Король Демонов в XXI веке"
                value={projectData.title}
                onChange={(e) => setProjectData({ ...projectData, title: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-indigo-500"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-400 mb-1">Жанр Аниме</label>
              <select
                value={projectData.genre}
                onChange={(e) => setProjectData({ ...projectData, genre: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-indigo-500"
              >
                <option>Исекай / Перерождение</option>
                <option>Тёмное Фэнтези</option>
                <option>Сёнэн / Битвы</option>
                <option>Киберпанк / Научная Фантастика</option>
                <option>Мистика / Детектив</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-400 mb-1">Формат Вывода</label>
              <select
                value={projectData.format}
                onChange={(e) => setProjectData({ ...projectData, format: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-indigo-500"
              >
                <option>Shorts / TikTok (60 сек)</option>
                <option>Reels (90 сек)</option>
                <option>Эпизод (10 минут)</option>
              </select>
            </div>
          </div>

          <button
            onClick={handleGenerate}
            disabled={isGenerating}
            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 py-3 rounded-xl font-semibold text-sm transition shadow-lg shadow-indigo-500/20 flex items-center justify-center space-x-2"
          >
            {isGenerating ? (
              <span>Генерация ИИ...</span>
            ) : (
              <>
                <PlayCircle className="w-4 h-4" />
                <span>Сгенерировать Серию</span>
              </>
            )}
          </button>
        </div>

        {/* Правая панель с контентом */}
        <div className="md:col-span-8 bg-slate-900 p-6 rounded-2xl border border-slate-800 min-h-[500px]">
          {activeTab === 'generator' && (
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-200">
                {projectData.title || 'Новый аниме-проект'}
              </h3>
              {projectData.episodes.length === 0 ? (
                <div className="h-64 flex flex-col items-center justify-center border-2 border-dashed border-slate-800 rounded-xl text-slate-500 space-y-2">
                  <Film className="w-10 h-10 stroke-1" />
                  <p className="text-sm">Задайте параметры слева и нажмите «Сгенерировать Серию»</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {projectData.episodes.map((ep) => (
                    <div key={ep.id} className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                      <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                        <span className="text-xs font-bold text-indigo-400 bg-indigo-500/10 px-2 py-1 rounded">
                          {ep.time} | {ep.type}
                        </span>
                        <span className="text-xs text-slate-500">Голос + SFX</span>
                      </div>
                      <p className="text-sm text-slate-200">
                        <b className="text-purple-400">Реплика / Voiceover:</b> "{ep.dialogue}"
                      </p>
                      <div className="bg-slate-900 p-2 rounded text-xs font-mono text-slate-400">
                        <b className="text-emerald-400">Промпт для ИИ-видео:</b> {ep.visualPrompt}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {activeTab === 'storyboard' && (
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-200">Визуальная Раскадровка</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {projectData.episodes.length === 0 ? (
                  <p className="text-sm text-slate-500 col-span-2">Сначала сгенерируйте серию во вкладке «Сценарий»</p>
                ) : (
                  projectData.episodes.map((ep) => (
                    <div key={ep.id} className="bg-slate-950 p-3 rounded-xl border border-slate-800 space-y-2">
                      <div className="h-40 bg-slate-900 rounded-lg flex items-center justify-center border border-slate-800 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                        <span className="text-xs text-slate-500 z-10 px-4 text-center">
                          [Превью кадров: {ep.type}]
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 truncate">{ep.visualPrompt}</p>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}

          {activeTab === 'monetization' && (
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-slate-200">Модуль Монетизации и Публикации</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                  <span className="text-xs text-slate-400">YouTube Shorts RPM</span>
                  <p className="text-2xl font-bold text-emerald-400 mt-1">$0.15 - $0.35</p>
                  <span className="text-[10px] text-slate-500">За 1 000 просмотров</span>
                </div>
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                  <span className="text-xs text-slate-400">TikTok Creator Rewards</span>
                  <p className="text-2xl font-bold text-emerald-400 mt-1">$0.50 - $1.20</p>
                  <span className="text-[10px] text-slate-500">Ролики &gt; 1 минуты</span>
                </div>
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                  <span className="text-xs text-slate-400">Прогноз за 500k просмотров</span>
                  <p className="text-2xl font-bold text-purple-400 mt-1">$250 - $600</p>
                  <span className="text-[10px] text-slate-500">Пассивный доход / ролик</span>
                </div>
              </div>

              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3">
                <h4 className="text-sm font-semibold text-indigo-400">Готовый Пакет Метаданных для Публикации</h4>
                <div className="bg-slate-900 p-3 rounded text-xs font-mono text-slate-300 space-y-1">
                  <p><b>Заголовок:</b> Он скрывал эту силу 1000 лет... 😱 #{projectData.genre.split(' ')[0]}</p>
                  <p><b>Хэштеги:</b> #anime #animetiktok #shorts #рекомендации #исекай</p>
                  <p><b>SEO Описание:</b> Смотри полную историю в профиле. Озвучено и создано при помощи AI Studio.</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

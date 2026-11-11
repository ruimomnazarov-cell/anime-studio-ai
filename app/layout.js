export const metadata = {
  title: 'Anime Studio AI',
  description: 'AI Anime Creator & Monetization Engine',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}

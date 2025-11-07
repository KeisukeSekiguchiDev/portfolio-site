import SocialButton from './components/SocialButton';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 hover:text-purple-300 transition-colors duration-300">
            Keisuke Sekiguchi
          </h1>
          <p className="text-2xl md:text-3xl text-purple-300 mb-4">
            AI-Native Developer
          </p>
          <p className="text-xl text-gray-300 mb-8">
            Claude Code で開発効率3倍を実現するエンジニア
          </p>

          <div className="flex justify-center gap-4 mb-12">
            <SocialButton
              href="https://github.com/KeisukeSekiguchiDev"
              text="GitHub"
              bgColor="bg-white"
              textColor="text-slate-900"
              hoverColor="hover:bg-gray-200"
            />
            <SocialButton
              href="https://qiita.com/Keisuke_Sekiguchi"
              text="Qiita"
              bgColor="bg-green-600"
              textColor="text-white"
              hoverColor="hover:bg-green-700"
            />
            <SocialButton
              href="https://www.linkedin.com/in/%E4%BD%B3%E7%A5%90-%E9%96%A2%E5%8F%A3-5a3329391/"
              text="LinkedIn"
              bgColor="bg-blue-600"
              textColor="text-white"
              hoverColor="hover:bg-blue-700"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-12 shadow-xl hover:shadow-2xl hover:bg-white/15 transition-all duration-300">
          <h2 className="text-3xl font-bold text-white mb-6">About Me</h2>
          <div className="space-y-4 text-gray-300">
            <p className="text-lg">
              エンジニア歴8年（電子回路設計4年 [2017-2021] → ソフトウェア開発4年 [2021-現在]）
            </p>
            <p className="text-lg">
              現在はDXプロジェクトリーダーとして、Excel業務のWeb化やレガシーシステムの刷新に取り組んでいます。
            </p>
            <p className="text-lg">
              Claude Code を駆使した AI ネイティブ開発で、開発効率を3倍に向上させた実績があります。
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Tech Stack</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 shadow-xl hover:shadow-2xl hover:bg-white/15 transition-all duration-300">
              <h3 className="text-xl font-semibold text-purple-300 mb-4">Languages</h3>
              <ul className="space-y-2 text-gray-300">
                <li>C++ / C#</li>
                <li>TypeScript</li>
                <li>Python</li>
                <li>Rust</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 shadow-xl hover:shadow-2xl hover:bg-white/15 transition-all duration-300">
              <h3 className="text-xl font-semibold text-purple-300 mb-4">Frameworks</h3>
              <ul className="space-y-2 text-gray-300">
                <li>.NET Core</li>
                <li>React / Next.js</li>
                <li>Node.js</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 shadow-xl hover:shadow-2xl hover:bg-white/15 transition-all duration-300">
              <h3 className="text-xl font-semibold text-purple-300 mb-4">AI Tools</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Claude Code</li>
                <li>Claude API</li>
                <li>OpenAI API</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Featured Projects</h2>
          <div className="space-y-6">
            {/* EstimateAI Project */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 shadow-xl hover:shadow-2xl hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-semibold text-white">EstimateAI</h3>
                <span className="px-3 py-1 bg-green-600 text-white text-sm rounded-full">開発中</span>
              </div>
              <p className="text-gray-300 mb-4">
                AIを活用したプロジェクト見積もり・WBS自動生成ツール。自然言語で要件を入力するだけで、Claude APIが工数予測とタスク分解を自動実行。
              </p>

              <div className="mb-4">
                <h4 className="text-lg font-semibold text-purple-300 mb-2">主な機能</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-300">
                  <li>要件の自然言語入力</li>
                  <li>AIによる工数予測</li>
                  <li>WBS自動生成（階層構造、編集可能）</li>
                  <li>ガントチャート作成</li>
                  <li>過去データ学習による精度向上</li>
                </ul>
              </div>

              <div className="mb-4">
                <h4 className="text-lg font-semibold text-purple-300 mb-2">技術スタック</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-600/20 text-blue-300 text-sm rounded-full">Next.js 16</span>
                  <span className="px-3 py-1 bg-blue-600/20 text-blue-300 text-sm rounded-full">TypeScript</span>
                  <span className="px-3 py-1 bg-blue-600/20 text-blue-300 text-sm rounded-full">Tailwind CSS</span>
                  <span className="px-3 py-1 bg-purple-600/20 text-purple-300 text-sm rounded-full">Claude API</span>
                  <span className="px-3 py-1 bg-green-600/20 text-green-300 text-sm rounded-full">Supabase</span>
                  <span className="px-3 py-1 bg-green-600/20 text-green-300 text-sm rounded-full">Prisma</span>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="text-lg font-semibold text-purple-300 mb-2">開発工程</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <span className="text-green-400 mr-2">✓</span>
                    <span>要件定義完了（2025-11-07）</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-2">✓</span>
                    <span>Next.js環境構築・初期セットアップ完了</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-yellow-400 mr-2">⏳</span>
                    <span>データベース設計・Supabase構築（次回）</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-gray-500 mr-2">○</span>
                    <span>MVP開発（2025年12月完成予定）</span>
                  </li>
                </ul>
              </div>

              <div className="flex gap-4">
                <a
                  href="https://github.com/KeisukeSekiguchiDev/estimate-ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-white text-slate-900 rounded-lg font-semibold hover:bg-gray-200 transition"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  GitHub
                </a>
              </div>
            </div>

            {/* Other Projects */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 shadow-xl hover:shadow-2xl hover:bg-white/15 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-white mb-3">その他のプロジェクト</h3>
              <p className="text-gray-300 mb-4">
                以下のプロジェクトを企画中です。
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>会議効率化ツール「MeetingOptimizer」</li>
                <li>経費精算自動化「ExpenseBot」</li>
                <li>コードレビューBot「ReviewMate」</li>
                <li>契約書管理「ContractHub」</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-6 py-16 pb-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Get In Touch</h2>
          <p className="text-xl text-gray-300 mb-8">
            フリーランス案件のご相談、技術に関するお問い合わせはLinkedInからお気軽にどうぞ
          </p>
          <a
            href="https://www.linkedin.com/in/%E4%BD%B3%E7%A5%90-%E9%96%A2%E5%8F%A3-5a3329391/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
          >
            Contact on LinkedIn
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8">
        <div className="container mx-auto px-6 text-center text-gray-400">
          <p>&copy; 2024 Keisuke Sekiguchi. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

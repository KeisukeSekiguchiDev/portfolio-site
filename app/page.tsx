import SocialButton from './components/SocialButton';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
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
        <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-12">
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
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
              <h3 className="text-xl font-semibold text-purple-300 mb-4">Languages</h3>
              <ul className="space-y-2 text-gray-300">
                <li>C++ / C#</li>
                <li>TypeScript</li>
                <li>Python</li>
                <li>Rust</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
              <h3 className="text-xl font-semibold text-purple-300 mb-4">Frameworks</h3>
              <ul className="space-y-2 text-gray-300">
                <li>.NET Core</li>
                <li>React / Next.js</li>
                <li>Node.js</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
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
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Projects</h2>
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-3">準備中</h3>
              <p className="text-gray-300 mb-4">
                現在、5つのプロジェクトを開発中です。
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>タスク見積もり自動化ツール「EstimateAI」</li>
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

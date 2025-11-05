// SocialButton コンポーネント
// Props の型定義（TypeScript）
type SocialButtonProps = {
  href: string;      // リンク先URL
  text: string;      // ボタンのテキスト
  bgColor: string;   // 背景色
  textColor: string; // テキスト色
  hoverColor: string; // ホバー時の色
}

export default function SocialButton({ href, text, bgColor, textColor, hoverColor }: SocialButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`px-6 py-3 ${bgColor} ${textColor} rounded-lg font-semibold ${hoverColor} transition`}
    >
      {text}
    </a>
  );
}
